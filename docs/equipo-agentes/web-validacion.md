# Workshop · evidencia del lote 2026-11-01

Estado: implementación local terminada; validación de navegador y PNG nuevas bloqueadas por el entorno. No publicado.

## Cambios

- `/workspace/entregables-workshop/web/index.html`: precio sin aprobar ahora aparece como «Precio por confirmar»; no ofrece Bs50/Bs70 como si estuvieran confirmados. Devolución pendiente visible y foto controlada por `CONFIG.fotoSergio`.
- Banner conserva los pendientes aunque se cambie `borrador` a false. Foto local aprobada configurable, con placeholder si falta y aviso si falla la carga.
- Cuenta regresiva reconoce cada clase en curso; al finalizar, todos los botones dejan de invitar a reservar esa edición y ofrecen la próxima.
- Foco visible, anclas compensadas por encabezado fijo y respeto de movimiento reducido.
- README con CONFIG y comandos; pruebas reproducibles en `verificar-logica.mjs` y `verificar.mjs`.

## Resultado comprobado

`node /workspace/entregables-workshop/web/verificar-logica.mjs`: EXIT 0, **9/9 verdes**. Evidencia: `/workspace/estado/web-tests.log`.

Prueba ejecución de JavaScript con DOM simulado: placeholders, precio aprobado/programado e inválido, fecha inválida, banner, foto local/remota, URL WhatsApp, clase en curso, cierre de reservas y descarga ICS de tres eventos con UTC correcto. No acredita renderizado visual.

## Bloqueo verificable

Intento de servidor efímero: `listen EPERM: operation not permitted 127.0.0.1`.
Se eliminó la dependencia de servidor de las pruebas de navegador y se usó interceptación local de HTML. Chromium igualmente aborta con `FATAL:content/browser/sandbox_host_linux.cc:41 ... shutdown: Operation not permitted (1)`.
No se eludió el aislamiento. No se generaron ni sustituyeron PNG como si fueran evidencia actual. Cuando Chromium esté permitido, ejecutar `node /workspace/entregables-workshop/web/verificar.mjs`: genera `/workspace/estado/capturas/workshop-desktop.png` y `workshop-mobile.png` y prueba CTA, FAQ, anclas, ICS, fechas, ausencia de desborde y errores JavaScript.

## Decisiones pendientes

Precio aprobado (y cambio, si existe), texto de devolución y foto aprobada. El comentario legal preexistente sobre el nombre se conserva para revisión del dueño; no se emitió una conclusión legal. Toda publicación requiere autorización fuera de este lote.

No se tocaron `.env`, producción ni servicios externos. Sin push, gastos ni publicación. No se incorporaron dependencias ni APIs nuevas; se usaron patrones existentes y las dependencias locales Cheerio/Playwright.
