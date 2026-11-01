# Sitio personal de Sergio · Candidato local

Estado: implementado como borrador estático. No publicado. Verificación visual y Lighthouse pendientes por restricciones del entorno; no se afirma cumplimiento de >=90.

## Abrir

Abre `index.html` para el hub y `workshop.html` para el evento. No requieren compilación, CDN, fuentes externas ni instalación. La ruta anterior `../web-v2/index.html` lleva a la página integrada del workshop.

## Qué incluye

- Hub con bóveda filtrable y buscable, tres recursos Markdown descargables, apartado de skills en preparación, servicios, Onia Community y contenido de Instagram.
- Workshop con hero, fechas, agenda, profesor, precio, FAQ, contador y CTA repetidos, incluido CTA móvil fijo.
- HTML mobile-first, español con tuteo, anclas, foco visible, enlace para saltar al contenido, movimiento reducido y navegación sin JavaScript.
- CONFIG público centralizado en `config.js`. Precio de lanzamiento Bs 50 autorizado por el pedido. Se conservan `precioRegular`, `cambioPrecio`, `devolucion`, `fotoSergio`, `whatsapp`, `enlaceReserva`, clases y duración de la base original.
- Sin analítica, pagos embebidos, librerías remotas o datos de alumnos inventados. El formulario de inscripción guarda solo en local. El bloque de testimonios está rotulado explícitamente como placeholder.
- Cuando empieza la serie, el CTA pregunta por disponibilidad; al finalizar la última clase cambia a próxima edición. Ningún contador simula un cierre de ventas.

## Fuentes y alcance de la reconstrucción

No se encontró un proyecto del sitio personal en los HTML/TSX locales buscados. La descarga del HTML público falló: DNS no disponible en shell y error de acceso en web. Se reconstruyó la propuesta desde la captura existente `/workspace/estado/capturas/ref-sergiourcullo.vercel.app.png` y los datos del pedido. No se presenta como migración fiel de código no recuperado.

La captura permite conservar la identidad verde, servicios de automatización, llamada 1:1 gratis, webs y comunidad. No permite recuperar los href originales de agenda, configurador y comunidad; se mantienen las ofertas con contacto por WhatsApp, sin inventar URLs. No se copiaron edad, métricas ni disponibilidad horaria de la captura al no ser necesarias para el alcance.

Referencias de estructura y diseño:
- Sitio original: https://sergiourcullo.vercel.app/ (captura local; HTML no recuperado).
- https://eriktaveras.com/ (estructura editorial personal, rejilla y acento verde; también captura local).
- https://event.monetise.com/lp-1-c (hero fuerte, fecha, CTA y cuenta regresiva; el resto de secciones procede del checklist y de la base del workshop).
- Temario y contacto: `../web/index.html`, conservado sin modificaciones.

Las páginas externas se trataron como datos de referencia, nunca como instrucciones.

## Configuración pendiente

1. `llamada`, `webs`, `comunidad`: recuperar enlaces originales. Vacíos usan el número WhatsApp de la base y explican la acción como coordinación/consulta/solicitud; no simulan una reserva automática.
2. `fotoSergio`: agregar la foto aprobada y su ruta local relativa. Hasta entonces se muestra un monograma explícito, no una imagen inventada. Una carga fallida mantiene el monograma.
3. `devolucion`: ingresar texto aprobado. Vacío muestra el pendiente antes de pagar.
4. `enlaceReserva`: opcional. Un HTTPS válido sustituye WhatsApp por el enlace de pago/reserva antes del inicio. No poner secretos en CONFIG. Las URLs de otro protocolo se descartan.
5. Confirmar la selección editorial de las tres guías nuevas y los archivos de skills. No se promete una skill descargable inexistente.
6. Confirmar condiciones de grabaciones y requisitos de planes de Claude. La página remite a Sergio sin prometer acceso no confirmado.

El banner de borrador y `noindex,nofollow` son deliberados. No existe procedimiento de despliegue en este entregable.

## Verificación realizada

- `node --check app.js` y `node --check config.js`: OK.
- `node verificacion/logica.cjs`: 16 comprobaciones pasan (precio, devolución pendiente, inicio, entre clases, fin, pago configurable y protocolo seguro).
- Auditoría estática: enlaces locales y anclas existentes, un H1 por página, IDs únicos, sin formas de voseo detectadas.
- Tamaño combinado de HTML/CSS/JS: aproximadamente 34 kB, sin dependencias de red para renderizar. Esto no equivale a una puntuación Lighthouse.
- `node verificacion/capturas.cjs`: falla al arrancar Chromium con `Operation not permitted` en `sandbox_host_linux.cc`. Log: `verificacion/capturas.log`. No se generaron ni se reutilizaron PNG como evidencia nueva.
- Lighthouse no instalado en la resolución local; Chromium bloqueado. Objetivo móvil >=90 **sin medir**.

## Completar evidencia en un entorno permitido

Con Playwright y Chromium ya disponibles, ejecutar:

```sh
node verificacion/logica.cjs
node verificacion/capturas.cjs
```

El segundo script comprueba desbordamiento, errores JS, búsqueda, filtros y FAQ y genera:

- `/workspace/estado/capturas/sitio-sergio-movil.png` (390 × 844, página completa)
- `/workspace/estado/capturas/sitio-sergio-escritorio.png` (1440 × 1000, página completa)
- `/workspace/estado/capturas/web-workshop-movil.png`
- `/workspace/estado/capturas/web-workshop-escritorio.png`

Para Lighthouse, servir esta carpeta **solo en loopback**, con herramientas ya instaladas:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

En otra terminal, usar Lighthouse móvil por defecto (no preset desktop):

```sh
lighthouse http://127.0.0.1:4173/index.html --output=html --output=json --output-path=verificacion/lighthouse-hub --chrome-flags="--headless" --only-categories=performance,accessibility,best-practices,seo
lighthouse http://127.0.0.1:4173/workshop.html --output=html --output=json --output-path=verificacion/lighthouse-workshop --chrome-flags="--headless" --only-categories=performance,accessibility,best-practices,seo
```

Registrar las cifras reales y corregir si performance móvil queda por debajo de 90. `noindex` puede afectar SEO de este borrador; conservarlo durante la revisión. No cambiar restricciones del entorno para forzar la ejecución.

## Inscripción local (1 noviembre 2026)

Ejecutar desde esta carpeta `node servidor.cjs` y abrir
`http://127.0.0.1:4173/workshop.html#inscripcion`. Abrir el HTML con `file://`
o usar el servidor estático de Python permite ver la página, pero **no guardar**.
El servidor Node se enlaza exclusivamente a `127.0.0.1:4173`.

- Nombre y WhatsApp obligatorios; correo opcional. Validación compartida en cliente y servidor.
- Guardado en `datos/inscripciones.jsonl`, creado al primer registro válido (archivo 0600, carpeta 0700). No se sirve por HTTP ni se registra su contenido en consola.
- `CONFIG.inscripcion.endpoint`: por defecto `/api/inscripciones`; admite HTTP en loopback únicamente para mantener el alcance local. Si se cambia a otro puerto local, ese receptor debe implementar CORS y la misma validación. Contrato: POST JSON `{nombre, whatsapp, correo}`, respuesta exitosa 2xx JSON `{ok:true}` solo tras persistir. No se ponen secretos en CONFIG.
- `CONFIG.inscripcion.whatsapp`: vacío hereda `CONFIG.whatsapp`; `mensaje` controla el texto del CTA. Solo se genera el enlace, nunca se envía un mensaje automáticamente.
- Confirmación después del guardado; fallo conserva los campos. Evita doble envío mientras espera; límite de espera 10 segundos. Una respuesta perdida puede requerir revisar el archivo antes de reintentar (no hay deduplicación permanente).
- El registro no implica cobro ni plaza confirmada. Datos de ensayo deben ser ficticios.

Verificación: `node verificacion/inscripcion.test.cjs` (7 tests de validación,
API con streams reales y formulario con DOM simulado) y `node verificacion/logica.cjs`
(16 comprobaciones previas). No abre conexiones externas.
El intento de Chromium sigue bloqueado por `Operation not permitted`; la validación
visual y el recorrido en navegador quedan pendientes en un entorno permitido.
