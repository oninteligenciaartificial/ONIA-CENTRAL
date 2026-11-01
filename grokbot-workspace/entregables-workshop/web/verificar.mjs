import { chromium } from '/workspace/platform/repo/node_modules/playwright-core/index.mjs';
import { readFile, mkdir } from 'node:fs/promises';
import assert from 'node:assert/strict';

const html = await readFile(new URL('./index.html', import.meta.url), 'utf8');
const base = 'http://workshop.local/';
const browser = await chromium.launch({ headless: true });
let checks = 0;
async function check(name, run) { await run(); checks++; console.log(`PASS ${name}`); }
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, acceptDownloads: true });
  // La verificación jamás abre WhatsApp ni recursos remotos.
  await context.route('**/*', route => route.request().url().startsWith(base) ? route.fulfill({ contentType: 'text/html', body: html }) : route.abort());
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.clock.install({ time: new Date('2026-11-01T18:00:00Z') });
  await page.goto(base);
  await check('CONFIG pendiente visible; precio Bs 50 fijo y nunca Bs 70', async () => {
    assert.match(await page.locator('#draftBanner').innerText(), /devolución · foto/);
    assert.equal(await page.locator('.js-precio').innerText(), 'Bs 50');
    assert.match(await page.locator('.js-devolucion').innerText(), /por confirmar/);
    assert.match(await page.locator('#fotoSergio').innerText(), /CONFIG.fotoSergio/);
    assert.doesNotMatch(await page.locator('body').innerText(), /Bs 70/);
  });
  await check('CTA WhatsApp con mensaje, destino y aislamiento de ventana', async () => {
    for (const a of await page.locator('.js-wa').all()) {
      assert.equal(await a.getAttribute('href'), 'https://wa.me/59175414930?text=TALLER');
      assert.match(await a.getAttribute('rel'), /noopener/);
    }
  });
  await check('Temario y FAQ navegables', async () => {
    await page.getByRole('link', { name: 'Ver el temario' }).click();
    assert.equal(new URL(page.url()).hash, '#temario');
    await page.locator('summary').first().click();
    assert.equal(await page.locator('details').first().getAttribute('open'), '');
    await page.locator('summary').first().click();
  });
  await check('Calendario descargable: tres clases y horas UTC correctas', async () => {
    const pending = page.waitForEvent('download');
    await page.locator('#icsBtn').click();
    const download = await pending;
    const stream = await download.createReadStream();
    const chunks = []; for await (const chunk of stream) chunks.push(chunk);
    const ics = Buffer.concat(chunks).toString();
    assert.equal(download.suggestedFilename(), 'claude-de-0-a-100.ics');
    assert.equal((ics.match(/BEGIN:VEVENT/g) || []).length, 3);
    assert.match(ics, /DTSTART:20261103T230000Z/);
    assert.match(ics, /DTEND:20261108T005500Z/);
  });
  await mkdir('/workspace/estado/capturas', { recursive: true });
  await page.goto(base);
  await check('Escritorio sin desborde y captura PNG', async () => {
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    await page.screenshot({ path: '/workspace/estado/capturas/workshop-desktop.png', fullPage: true });
  });
  await page.setViewportSize({ width: 390, height: 844 });
  await check('Móvil sin desborde, CTA fijo y captura PNG', async () => {
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    assert(await page.locator('.float').isVisible());
    await page.screenshot({ path: '/workspace/estado/capturas/workshop-mobile.png', fullPage: true });
  });
  await check('Clase en curso no presenta contador obsoleto', async () => {
    await page.clock.setFixedTime(new Date('2026-11-03T23:30:00Z'));
    await page.reload();
    assert.equal(await page.locator('#countdownLabel').innerText(), 'La clase 1 está en curso.');
    assert(!(await page.locator('#countdown').isVisible()));
  });
  await check('Edición finalizada cierra reservas en todos los CTA', async () => {
    await page.clock.setFixedTime(new Date('2026-11-08T01:00:00Z'));
    await page.reload();
    assert(!(await page.locator('#openBox').isVisible()));
    assert(await page.locator('#closedBox').isVisible());
    for (const a of await page.locator('.js-wa').all()) {
      assert.match(await a.innerText(), /próxima edición/);
      assert.match(decodeURIComponent(await a.getAttribute('href')), /próxima edición/);
    }
  });
  await check('CONFIG de precio aprobado funciona y pendientes no se ocultan', async () => {
    await page.clock.setFixedTime(new Date('2026-11-01T18:00:00Z'));
    await page.route(base, route => route.fulfill({ contentType: 'text/html', body: html.replace('precioLanzamiento: null', 'precioLanzamiento: 55').replace('borrador: true', 'borrador: false') }));
    await page.goto(base);
    assert.equal(await page.locator('.js-precio').innerText(), 'Bs 55');
    assert.match(await page.locator('#draftBanner').innerText(), /devolución · foto/);
  });
  await check('Sin errores JavaScript', async () => assert.deepEqual(errors, []));
  console.log(`Resultado: ${checks}/${checks} comprobaciones verdes. Sin solicitudes externas ni publicación.`);
} finally {
  await browser.close();
}
