import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFile } from 'node:fs/promises';
import { load } from '/workspace/platform/repo/node_modules/cheerio/dist/esm/index.js';
const original = await readFile(new URL('./index.html', import.meta.url), 'utf8');
function render(changes = {}, date = '2026-11-01T18:00:00Z') {
  let html = original;
  for (const [key, value] of Object.entries(changes)) {
    html = html.replace(new RegExp(`  ${key}: [^\\n]+`), `  ${key}: ${JSON.stringify(value)},`);
  }
  const $ = load(html);
  const events = new Map(); const blobs = [];
  function wrap(el) {
    const q = $(el);
    return {
      get textContent() { return q.text(); }, set textContent(x) { q.text(String(x)); },
      get href() { return q.attr('href'); }, set href(x) { q.attr('href', x); },
      get isConnected() { return q.parents('html').length > 0; },
      set hidden(x) { if (x) q.attr('hidden', ''); else q.removeAttr('hidden'); },
      style: new Proxy({}, { set(_, key, value) { q.attr(`data-style-${key}`, value); return true; } }),
      classList: { add(x) { q.addClass(x); }, remove(x) { q.removeClass(x); } },
      remove() { q.remove(); },
      addEventListener(name, fn) { events.set(`${q.attr('id') || el.tagName}:${name}`, fn); },
      appendChild() {}, prepend() {}, click() {}, replaceWith() {},
    };
  }
  const RealDate = Date;
  class FixedDate extends RealDate { constructor(...args) { super(...(args.length ? args : [date])); } }
  const context = {
    document: {
      querySelectorAll: selector => $(selector).toArray().map(wrap),
      getElementById: id => wrap($(`#${id}`)[0]),
      createElement: tag => wrap($(`<${tag}>`)[0]),
      body: { appendChild() {}, prepend() {} },
    }, Date: FixedDate, setInterval() {}, setTimeout() {},
    Blob, URL: { createObjectURL(blob) { blobs.push(blob); return 'blob:test'; }, revokeObjectURL() {} },
  };
  vm.runInNewContext($('script').text(), context);
  return { $, events, blobs };
}
let passed = 0;
async function test(name, fn) { await fn(); passed++; console.log(`PASS ${name}`); }
await test('Precio Bs 50 fijo; devolución y foto pendientes visibles', () => {
  const { $ } = render();
  assert.equal($('.js-precio').text(), 'Bs 50');
  assert.match($('.js-devolucion').text(), /por confirmar/);
  assert.match($('#draftBanner').text(), /devolución · foto/);
  assert.doesNotMatch($('body').text(), /Bs 70/);
});
await test('Borrador no se oculta con CONFIG incompleta', () => {
  assert.match(render({ borrador: false }).$('#draftBanner').text(), /no publicar/);
});
await test('Precio aprobado y cambio programado', () => {
  const config = { precioLanzamiento: 55, precioRegular: 75, cambioPrecio: '2026-11-02T00:00:00-04:00' };
  assert.equal(render(config).$('.js-precio').text(), 'Bs 55');
  assert.equal(render(config, '2026-11-02T04:00:00Z').$('.js-precio').text(), 'Bs 75');
});
await test('Precio inválido y fecha inválida no se presentan como oferta', () => {
  for (const price of [-1, 0, '55']) assert.equal(render({ precioLanzamiento: price }).$('.js-precio').text(), 'Precio por confirmar');
  assert.match(render({ cambioPrecio: 'invalido' }).$('#draftBanner').text(), /cambio de precio/);
});
await test('Foto remota rechazada; ruta local aceptada', () => {
  assert.match(render({ fotoSergio: 'https://example.com/foto.jpg' }).$('#draftBanner').text(), /foto/);
  assert.doesNotMatch(render({ fotoSergio: 'sergio.jpg' }).$('#draftBanner').text(), / · foto/);
});
await test('WhatsApp codificado y sin enviar mensajes', () => {
  const { $ } = render();
  $('.js-wa').each((_, a) => assert.equal($(a).attr('href'), 'https://wa.me/59175414930?text=TALLER'));
});
await test('Contador inicial y clase 1 en curso', () => {
  assert.equal(render().$('#cdD').text(), '2');
  const { $ } = render({}, '2026-11-03T23:30:00Z');
  assert.equal($('#countdownLabel').text(), 'La clase 1 está en curso.');
  assert($('#countdown').is('[hidden]'));
});
await test('Al terminar clase 3 todos los CTA pasan a próxima edición', () => {
  const { $ } = render({}, '2026-11-08T01:00:00Z');
  assert($('#openBox').hasClass('closed')); assert(!$('#closedBox').hasClass('closed'));
  $('.js-wa').each((_, a) => assert.match($(a).text(), /próxima edición/));
});
await test('ICS generado contiene tres eventos y horas correctas', async () => {
  const { events, blobs } = render();
  events.get('icsBtn:click')();
  const ics = await blobs[0].text();
  assert.equal((ics.match(/BEGIN:VEVENT/g) || []).length, 3);
  assert.match(ics, /DTSTART:20261103T230000Z/);
  assert.match(ics, /DTEND:20261108T005500Z/);
});
console.log(`Resultado: ${passed}/${passed} pruebas de lógica verdes. DOM simulado; no sustituye navegador ni capturas.`);
