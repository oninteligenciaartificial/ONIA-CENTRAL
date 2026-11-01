const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const { Readable } = require('node:stream');
const { validar, endpointLocal, enlaceWhatsapp } = require('../inscripcion.js');
const { crearServidor } = require('../servidor.cjs');
const good = { nombre: '  Ana Pérez  ', whatsapp: '+591 7000-0000', correo: '' };
test('normaliza nombre y teléfono; correo opcional', () => {
  assert.deepEqual(validar(good), { valido: true, errores: {}, datos: { nombre: 'Ana Pérez', whatsapp: '59170000000', correo: '' } });
  assert.equal(validar({ ...good, correo: 'ana@example.test' }).valido, true);
});
test('rechaza vacíos, límites, teléfono con letras y correo inválido', () => {
  for (const datos of [null, {}, { ...good, nombre: 'A' }, { ...good, nombre: 'a'.repeat(101) }, { ...good, whatsapp: '591hola70000000' }, { ...good, whatsapp: '123' }, { ...good, whatsapp: '1'.repeat(16) }, { ...good, correo: 'sin-arroba' }]) assert.equal(validar(datos).valido, false);
});
test('CONFIG admite solo endpoints locales y CTA seguro configurable', () => {
  assert.equal(endpointLocal('/api/inscripciones', 'http://localhost:4173/workshop.html'), 'http://localhost:4173/api/inscripciones');
  for (const value of ['https://example.com', 'javascript:alert(1)', 'http://localhost.evil.test', 'http://user:password@localhost']) assert.throws(() => endpointLocal(value, 'http://localhost'));
  assert.equal(enlaceWhatsapp('59170000000', 'Hola taller'), 'https://wa.me/59170000000?text=Hola%20taller');
  assert.equal(enlaceWhatsapp('javascript:alert(1)', ''), '');
});
// Invoca el handler HTTP real con streams: no necesita abrir puertos.
function request(server, { body = good, method = 'POST', url = '/api/inscripciones', headers = {}, chunks } = {}) {
  return new Promise(resolve => {
    const req = Readable.from(chunks || [Buffer.from(typeof body === 'string' ? body : JSON.stringify(body))]);
    Object.assign(req, { method, url, headers: { host: '127.0.0.1:4173', 'content-type': 'application/json', ...headers } });
    const res = { headersSent: false, writeHead(code, responseHeaders) { this.code = code; this.headers = responseHeaders; this.headersSent = true; }, end(data) { resolve({ code: this.code, body: String(data || '') }); } };
    server.emit('request', req, res);
  });
}
test('API guarda JSONL local, rechaza inválidos y no expone datos', async () => {
  const dir = await fs.mkdtemp(path.join(__dirname, '.inscripciones-test-'));
  const archivo = path.join(dir, 'registros.jsonl');
  const server = crearServidor({ archivo });
  try {
    const bytes = Buffer.from(JSON.stringify(good));
    const accent = bytes.indexOf(Buffer.from('é'));
    assert.ok(accent >= 0);
    assert.equal((await request(server, { chunks: [bytes.subarray(0, accent + 1), bytes.subarray(accent + 1)] })).code, 201);
    const saved = JSON.parse((await fs.readFile(archivo, 'utf8')).trim());
    assert.equal(saved.nombre, 'Ana Pérez'); assert.equal(saved.whatsapp, '59170000000'); assert.ok(saved.id); assert.ok(saved.creado);
    assert.equal((await request(server, { body: { ...good, whatsapp: 'mal' } })).code, 422);
    assert.equal((await request(server, { body: '{broken' })).code, 400);
    assert.equal((await request(server, { body: 'x'.repeat(4097) })).code, 413);
    assert.equal((await request(server, { headers: { origin: 'https://evil.test' } })).code, 403);
    assert.equal((await request(server, { headers: { host: 'evil.test:4173' } })).code, 403);
    assert.equal((await request(server, { headers: { 'content-type': 'text/plain' } })).code, 415);
    assert.equal((await request(server, { method: 'GET' })).code, 405);
    assert.equal((await request(server, { method: 'GET', url: '/datos/inscripciones.jsonl' })).code, 404);
    assert.equal((await request(server, { method: 'GET', url: '/workshop.html' })).code, 200);
    assert.equal((await fs.readFile(archivo, 'utf8')).trim().split('\n').length, 1);
  } finally { await fs.rm(dir, { recursive: true }); server.close(); }
});
test('error de escritura nunca devuelve confirmación', async () => {
  const server = crearServidor({ archivo: __dirname });
  assert.equal((await request(server)).code, 500); server.close();
});
const vm = require('node:vm');
const syncFs = require('node:fs');
function formulario(fetchImpl, datos = good) {
  let submit; let resets = 0; let focused;
  const nodes = {};
  const node = selector => nodes[selector] ||= { textContent: '', hidden: false, setAttribute() {}, focus() {} };
  const form = { elements: Object.fromEntries(['nombre', 'whatsapp', 'correo'].map(key => [key, { setAttribute() {}, focus() { focused = key; } }])), querySelector: node, addEventListener(name, fn) { submit = fn; }, reset() { resets++; } };
  vm.runInNewContext(syncFs.readFileSync(path.join(__dirname, '../formulario.js'), 'utf8'), {
    document: { querySelector: s => s === '#form-inscripcion' ? form : node(s) },
    Inscripcion: { validar, endpointLocal, enlaceWhatsapp }, CONFIG: { whatsapp: '59170000000', inscripcion: { endpoint: '/api/inscripciones', mensaje: 'TALLER' } },
    FormData: class { constructor() { return Object.entries(datos); } }, location: { href: 'http://127.0.0.1:4173/workshop.html' }, fetch: fetchImpl, AbortController, setTimeout, clearTimeout,
  });
  return { submit: () => submit({ preventDefault() {} }), nodes, resets: () => resets, focused: () => focused };
}
test('formulario confirma solo después de guardar y genera CTA configurable', async () => {
  let calls = 0;
  const ui = formulario(async (url, options) => { calls++; assert.equal(options.redirect, 'error'); return { ok: true, json: async () => ({ ok: true }) }; });
  await ui.submit(); assert.equal(calls, 1); assert.equal(ui.resets(), 1);
  assert.match(ui.nodes['#inscripcion-status'].textContent, /Inscripción guardada/);
  assert.equal(ui.nodes['#inscripcion-whatsapp'].href, 'https://wa.me/59170000000?text=TALLER');
  assert.equal(ui.nodes['#inscripcion-whatsapp'].hidden, false);
});
test('formulario conserva datos en fallo y evita envíos inválidos o simultáneos', async () => {
  let calls = 0; let reject;
  const ui = formulario(() => { calls++; return new Promise((_, fail) => { reject = fail; }); });
  const pending = ui.submit(); await ui.submit(); assert.equal(calls, 1); reject(new Error('offline')); await pending;
  assert.equal(ui.resets(), 0); assert.match(ui.nodes['#inscripcion-status'].textContent, /No pudimos/);
  assert.equal(ui.nodes['#inscripcion-whatsapp'].hidden, true);
  const invalid = formulario(() => { throw new Error('No debe enviar'); }, { ...good, nombre: '' });
  await invalid.submit(); assert.equal(invalid.focused(), 'nombre'); assert.equal(invalid.resets(), 0);
});
