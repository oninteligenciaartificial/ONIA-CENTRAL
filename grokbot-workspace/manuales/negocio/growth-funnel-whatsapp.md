---
tarea: growth-funnel-whatsapp
version: 1
dueno: Negocio
ejecuta: claude
nivel_modelo: 2
max_vueltas: 2
escala_a_sergio: cambios de precio o fechas, envío real de mensajes, temario definitivo, datos de clientes
---
# Funnel a WhatsApp (secuencia de mensajes)
## Objetivo
Mantener en borrador la secuencia de WhatsApp (bienvenida, oferta, recordatorios, confirmación) alineada con los anuncios. La atención real de clientes es de Ventas.

## Cuándo se usa
- Cambia precio, fecha o cupos, o hay edición nueva.
- Se revisa que el CTA del anuncio coincida con el funnel.

## Entrada
- `/workspace/growth/funnel-whatsapp.md` (pasos 2 a 6).
- Textos de anuncios vigentes (`variantes-campana.md`, `videos-anuncio.md`).
- Datos confirmados por Sergio (precio, fechas, cupos, temario).

## Pasos
1. Lee el funnel actual y anota qué datos tiene (fechas, precio, cupos, temario).
2. Compara cada anuncio con el funnel: CTA, precio, fechas, "grabadas". Anota "coincide" o la diferencia exacta.
3. Si cambió un dato, propone el ajuste mínimo en los pasos afectados (en borrador, no sobrescribas el original).
4. Revisa las ventanas de los recordatorios (no entre 22:00 y 8:00) y que ninguno prometa fechas no confirmadas.
5. Devuelve el borrador y las diferencias en el JSON.

## Salida (JSON)
{"estado":"ok|falla|necesita_sergio","borrador":"ruta del borrador del funnel o de las diferencias","motivo":"diferencias CTA/precio y datos por confirmar"}

## Fuentes
- `/workspace/growth/funnel-whatsapp.md`
- `/workspace/growth/variantes-campana.md`
- `/workspace/growth/videos-anuncio.md`
- `/workspace/growth/guia-anuncios-meta.md`
- `/workspace/onia-cola/growth-y-anuncios/OBJETIVO.md`

## Reglas
- Tuteo, sin cifras ni testimonios inventados.
- Confirmación de pago solo tras verificar que el pago llegó; no pidas datos personales (según el funnel).
- Mensajes prellenados distintos por anuncio (A, B, C) para saber qué anuncio trajo el pago, según `guia-anuncios-meta.md`.
- Datos de clientes y números reales nunca en el chat ni en Git.
- POR CONFIRMAR: precio vigente. El funnel dice Bs 50 hasta el 1/11 y Bs 70 después; hoy es 1/11, así que los pasos 4 y 5 vencen.
- POR CONFIRMAR: cupos (60) y temario [PROVISORIO] del paso 3.
- Atender clientes no te toca (Ventas).

## Checklist de terminado
- [ ] Cada anuncio tiene "coincide" o la diferencia exacta.
- [ ] Precio, fechas y hora iguales en todos los pasos.
- [ ] Pasos vencidos marcados.
- [ ] Nada enviado.

## Prohibido
pautar, gastar, publicar, enviar, push, deploy

## Cuándo escalar
- Hay que cambiar precio, fechas o cupos, o enviar algo a un lead real.
- El temario definitivo no existe.
- Tras 2 vueltas sin cerrar el checklist.
