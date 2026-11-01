const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');
const { randomUUID } = require('node:crypto');
const { validar } = require('./inscripcion.js');
const root = __dirname;
const tipos = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.md': 'text/markdown; charset=utf-8' };
const publicos = new Set(['index.html', 'workshop.html', 'config.js', 'app.js', 'styles.css', 'inscripcion.js', 'formulario.js']);
function crearServidor({ archivo = path.join(root, 'datos', 'inscripciones.jsonl') } = {}) {
  if (!path.resolve(archivo).startsWith(root + path.sep)) throw new Error('El archivo debe estar dentro del sitio local.');
  return http.createServer(async (req, res) => {
    const json = (code, body) => { res.writeHead(code, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }); res.end(JSON.stringify(body)); };
    try {
      const host = req.headers.host || '';
      if (!/^(localhost|127\.0\.0\.1|\[::1\]):\d+$/.test(host)) return json(403, { ok: false });
      const url = new URL(req.url, 'http://' + host);
      if (url.pathname === '/api/inscripciones') {
        if (req.method !== 'POST') return json(405, { ok: false });
        if (req.headers.origin && req.headers.origin !== 'http://' + host) return json(403, { ok: false });
        if (req.headers['sec-fetch-site'] === 'cross-site') return json(403, { ok: false });
        if (req.headers['content-type']?.split(';')[0] !== 'application/json') return json(415, { ok: false });
        const chunks = []; let size = 0;
        for await (const chunk of req) { size += chunk.length; if (size > 4096) return json(413, { ok: false }); chunks.push(Buffer.from(chunk)); }
        let body; try { body = JSON.parse(Buffer.concat(chunks).toString('utf8')); } catch { return json(400, { ok: false }); }
        const result = validar(body);
        if (!result.valido) return json(422, { ok: false, errores: result.errores });
        await fs.mkdir(path.dirname(archivo), { recursive: true, mode: 0o700 });
        await fs.appendFile(archivo, JSON.stringify({ id: randomUUID(), creado: new Date().toISOString(), ...result.datos }) + '\n', { mode: 0o600 });
        return json(201, { ok: true });
      }
      if (!['GET', 'HEAD'].includes(req.method)) return json(405, { ok: false });
      const filename = url.pathname === '/' ? 'index.html' : url.pathname.slice(1);
      if (!publicos.has(filename) && !/^recursos\/[a-zA-Z0-9_-]+\.md$/.test(filename)) return json(404, { ok: false });
      const data = await fs.readFile(path.join(root, filename));
      res.writeHead(200, { 'Content-Type': tipos[path.extname(filename)] || 'application/octet-stream', 'X-Content-Type-Options': 'nosniff', 'Cache-Control': 'no-store' });
      res.end(req.method === 'HEAD' ? undefined : data);
    } catch { if (!res.headersSent) json(500, { ok: false }); else res.end(); }
  });
}
module.exports = { crearServidor };
if (require.main === module) crearServidor().listen(4173, '127.0.0.1', () => console.log('Sitio local: http://127.0.0.1:4173/workshop.html'));
