---
tarea: growth-variantes-campana
version: 1
dueno: Negocio
ejecuta: claude
nivel_modelo: 2
max_vueltas: 2
escala_a_sergio: presupuesto, precio/cupos/fechas nuevos, activar o publicar una campaña, cualquier cambio de oferta
---
# Variantes de texto de campaña (Meta clic a WhatsApp)
## Objetivo
Dejar en borrador 2 o 3 variantes de texto principal y título para el anuncio, coherentes con el funnel de WhatsApp, para que Sergio elija. Nada se sube ni se enciende.

## Cuándo se usa
- Hay un taller o edición nueva que anunciar, o cambia precio/fecha (ej.: paso de Bs 50 a Bs 70).
- Sergio pide "otro ángulo" o una prueba de hook.

## Entrada
- Datos del oferta dados por Sergio: fechas, hora, precio, cupos, cierre fijo.
- Variantes vigentes y gancho: `/workspace/growth/variantes-campana.md`.
- Texto del funnel: `/workspace/growth/funnel-whatsapp.md`.
- Aprendizajes de hooks: `/workspace/growth/aprendizajes.md`.

## Pasos
1. Lee las fuentes y copia los datos del taller tal como están (fechas, hora Bolivia, cierre "Escríbeme al WhatsApp y te paso el QR").
2. Define UN eje por variante (gancho, formato u oferta). No mezcles dos ejes.
3. Escribe 2 o 3 variantes en tuteo, máx. 4 líneas de texto y título de 40 caracteres o menos (cuenta los caracteres).
4. Si hay cambio de precio, escribe una versión por precio vigente; solo cambia la línea del precio.
5. Compara el CTA con el de `funnel-whatsapp.md`; si difiere, anota la diferencia exacta.
6. Guarda el borrador en `/workspace/growth/` (archivo nuevo con fecha) y devuelve el JSON.

## Salida (JSON)
{"estado":"ok|falla|necesita_sergio","borrador":"ruta del archivo con 2-3 variantes","motivo":"qué eje prueba cada una y qué falta confirmar"}

## Fuentes
- `/workspace/growth/variantes-campana.md`
- `/workspace/growth/funnel-whatsapp.md`
- `/workspace/growth/aprendizajes.md`
- `/workspace/growth/guia-anuncios-meta.md`
- `/workspace/onia-cola/growth-y-anuncios/OBJETIVO.md`

## Reglas
- Sin testimonios, sin cifras de alumnos, sin promesas de ingresos o resultados garantizados.
- No digas "quedan X cupos" sin conteo real que Sergio confirme.
- Cifras solo si están literales en una fuente; si no, `POR CONFIRMAR: <qué>`.
- POR CONFIRMAR: presupuesto diario. `AGENTS.md` dice US$10 al día; `guia-anuncios-meta.md` planifica US$5 al día. No lo uses en textos.
- POR CONFIRMAR: tope de "60 lugares". Sale en `variantes-campana.md` y `funnel-whatsapp.md`, pero `videos-anuncio.md` y `creativos-ia-anuncio.md` lo omiten a propósito.
- POR CONFIRMAR: "Las clases quedan grabadas". Lo dicen funnel y variantes; `creativos-ia-anuncio.md` pide confirmarlo.
- El temario del funnel está marcado [PROVISORIO]: no lo presentes como definitivo.
- El presupuesto no se decide aquí: va como decisión para Sergio.

## Checklist de terminado
- [ ] Cada variante cambia un solo eje y lo dice.
- [ ] Fechas, hora y cierre coinciden con las fuentes.
- [ ] Títulos de 40 caracteres o menos.
- [ ] Hay versión por precio vigente si aplica.
- [ ] Todo dato dudoso lleva `POR CONFIRMAR`.
- [ ] Nada fue subido, publicado ni activado.

## Prohibido
pautar, gastar, publicar, enviar, push, deploy

## Cuándo escalar
- Falta cualquier dato de la oferta (precio, fecha, cupos) o hay dos fuentes que se contradicen.
- Sergio debe elegir variante, presupuesto o el momento de encender.
- Tras 2 vueltas sin pasar el checklist: `necesita_sergio`.
