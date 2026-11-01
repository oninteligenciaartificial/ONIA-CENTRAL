# Aviso de fin del precio Bs 50: "Claude de 0 a 100" (BORRADOR, sin aprobar, 2026-10-31)

Fuentes: `seguimientos-leads.md` y `guion-whatsapp-claude-0-100.md`. No modifica ninguno de los dos.
Tuteo neutro (tienes, puedes, quieres; nunca voseo). Fecha límite real: domingo 1/11 a las 23:59 (hora Bolivia) o antes si se llenan los 60 cupos, lo que pase primero. Clases: 3, 5 y 7/11 a las 19:00 (hora Bolivia).

## Reglas para todos los mensajes de este archivo

1. **No se envía si Sergio (u otra persona) ya escribió en el chat.** Se revisa justo antes de enviar, no al programar; si escribió, se cancela el envío. Solo se retoma si Sergio lo reactiva a mano.
2. **Máximo por lead: un mensaje de texto libre y una plantilla, entre TODO lo que el bot manda** (este archivo + `seguimientos-leads.md`). Si el lead ya recibió un texto libre de seguimiento (1A, 2A, 4A o el recordatorio del paso 6), no recibe otro; si ya recibió una plantilla (`seguimiento` o `pago_pendiente`), tampoco recibe otra.
3. **Corte:** si el lead dijo "no", "ahora no" o "BAJA", si ya pagó (comprobante enviado o pago verificado) o si pertenece a un caso sin seguimiento (fuera de tema, agresivo, asesoría, llamada, combo), no se le manda nada.
4. **Sin falsa presión:** no se dice cuántos cupos quedan, no hay "últimos cupos" ni "solo hoy", sin descuentos ni cuotas, sin promesas de resultados, y no se dice "tienes tu lugar" (el lugar se confirma solo cuando Sergio verifica el pago).
5. **Vigencia:** todo lo de este archivo se envía antes del 1/11 a las 23:59 (hora Bolivia) y mientras haya cupos a Bs 50. Pasada la fecha, o con los 60 cupos completos, no se manda ninguno (aplican los textos "B" de `seguimientos-leads.md`).
6. Corte del precio: el precio de Bs 50 vale si el pago se hizo hasta las 23:59 del 1/11 (hora Bolivia), según la hora que figura en el comprobante. Estos avisos no cambian ese criterio; la hora del comprobante la revisa Sergio.
7. El QR de Bs 50 solo se manda si el lead lo pide (o ya lo pidió), nunca adjunto de forma espontánea.

---

## a) Texto libre (lead dentro de las 24 h de su último mensaje)

**Quién:** leads con la ventana de 24 h abierta que aún no pagaron, que no recibieron otro texto libre y sobre los que Sergio no escribió.

> ¡Hola! Te aviso algo importante por si te interesa el taller *Claude de 0 a 100*: el precio de *Bs 50* termina el domingo 1/11 a las 23:59 (hora Bolivia), o antes si se llenan los 60 cupos. Después pasa a Bs 70.
>
> Son 3 clases en vivo por Google Meet (3, 5 y 7/11 a las 19:00, hora Bolivia) y todas quedan grabadas para los inscritos. Si quieres entrar con este precio, dime y te paso el QR (vale si pagas hasta esa hora). Y si prefieres no hacerlo, no pasa nada 🙂

**No hacer:** dar un número de cupos restantes, adjuntar el QR sin que lo pidan, mandarlo si ya hubo otro texto libre.

---

## b) Plantilla de Meta (categoría: Marketing)

**Cuándo:** lead con más de 24 h desde su último mensaje (ventana cerrada), sin plantilla previa, sin escritura de Sergio, y antes del 1/11 a las 23:59. Requiere aprobación de Meta antes de usarse.

- **Nombre sugerido:** `aviso_fin_bs50`
- **Categoría:** Marketing
- **Idioma:** Español (es)

**Cuerpo:**
> Hola {{1}}, soy de OnIA. Te aviso que el precio de Bs 50 del taller "Claude de 0 a 100" termina el {{2}} a las 23:59 (hora Bolivia), o antes si se llenan los 60 cupos. Son 3 clases en vivo (3, 5 y 7/11 a las 19:00, hora Bolivia) y quedan grabadas. Si no quieres recibir más mensajes, responde BAJA.

**Botones de respuesta rápida:** `[Quiero el QR]` `[Ahora no]`

**Variables:**

| Variable | Qué lleva | Valor de ejemplo (para la revisión de Meta) |
|---|---|---|
| `{{1}}` | Nombre del lead (si no hay nombre, usar "hola" sin nombre: se envía solo si hay nombre real) | Carla |
| `{{2}} ` | Día de cierre, en texto | domingo 1/11 |

**Comportamiento de los botones:**
- `Quiero el QR`: antes del 1/11 a las 23:59, el bot manda el QR de Bs 50 con el texto del paso 3 del guion. Pasada la fecha, usa el texto "ya terminó" del guion (paso 2) y deriva a Sergio.
- `Ahora no`, o responder `BAJA`: se marca al lead como baja y no se le escribe más.

**Notas para Meta y para el uso:**
- Sin enlaces, sin mayúsculas de énfasis y sin promesas de resultados.
- Si Meta pide que las variables no queden al inicio o al final del cuerpo, ya cumple (empieza con "Hola" y termina con "BAJA").
- Esta plantilla cuenta como la única plantilla del lead: si ya recibió `seguimiento` o `pago_pendiente`, no se manda.
- Si el lead respondió a la plantilla, el bot lo atiende con el guion normal; eso no cuenta como seguimiento.

---

## c) Tres seguimientos para quien pidió el QR y no pagó

**Quién:** pidió el QR de Bs 50, el bot se lo mandó y no hay comprobante ni respuesta. Si dijo que ya pagó, es otro caso (estado 3 de `seguimientos-leads.md`).

**Cómo se usan (por la regla de máximo un texto libre y una plantilla por lead):** cada lead recibe como máximo dos de los tres, nunca los tres:
- **Espacio de texto libre** (ventana de 24 h abierta): se elige **uno** entre C1 (amable) o C2 (valor). Se recomienda C1 si es el primer contacto tras el QR y C2 si el lead ya hizo preguntas sobre el contenido.
- **Espacio de plantilla** (ventana cerrada): C3 (último aviso), que es la versión de plantilla y requiere aprobación de Meta.
- Si la ventana sigue abierta cerca de la fecha límite, C3 también puede salir como texto libre solo cuando el lead no recibió ningún otro texto libre (cuenta como el único).
- Todos se envían antes del 1/11 a las 23:59 y se cancelan si Sergio escribió, si el lead pagó o si dijo "no", "ahora no" o "BAJA".

### C1. Tono amable (texto libre)
> ¡Hola! Te escribo por si te quedó alguna duda para pagar el taller *Claude de 0 a 100*. Cuando lo hagas, mándame por aquí la foto del comprobante con tu nombre completo y Sergio verifica tu pago. Al pagar te va a salir el nombre de Leslie Mercado Moreno, es nuestra cuenta de cobro. Si algo no te funcionó con el QR, cuéntame y te ayudo 🙂

### C2. Muestra el valor (texto libre)
> ¡Hola! Te cuento en corto qué te llevas con *Claude de 0 a 100*: 3 clases en vivo por Google Meet (3, 5 y 7/11 a las 19:00, hora Bolivia), arrancas desde cero sin saber nada técnico, practicas en cada clase con tareas de tu día a día y todas las clases quedan grabadas para los inscritos. El precio de *Bs 50* vale hasta el domingo 1/11 a las 23:59 (hora Bolivia), o hasta completar los 60 cupos. ¿Te ayudo con algo para que puedas pagar?

### C3. Último aviso (plantilla de Marketing, sin falsa presión)
- **Nombre sugerido:** `ultimo_aviso_bs50`
- **Categoría:** Marketing

**Cuerpo:**
> Hola {{1}}, soy de OnIA. Es el último mensaje que te mando sobre el taller "Claude de 0 a 100": el precio de Bs 50 termina el {{2}} a las 23:59 (hora Bolivia), o antes si se llenan los 60 cupos. Si pagaste, envíame el comprobante por aquí. Si no te interesa, no pasa nada. Para no recibir más mensajes, responde BAJA.

**Botones:** `[Ya pagué]` `[Ahora no]`

**Variables:** `{{1}}` nombre del lead (ej.: Carla); `{{2}}` día de cierre (ej.: domingo 1/11).

**Botones:**
- `Ya pagué`: el bot pide la foto del comprobante con el nombre completo y no confirma nada hasta que Sergio verifique.
- `Ahora no` o `BAJA`: se corta y no se escribe más.

**Pendiente de decisión:** como `pago_pendiente` (Utilidad) ya existe y sirve para este estado sin urgencia, C3 sería una plantilla adicional de Marketing que solo se usaría si Sergio decide reforzar con la fecha límite. Si no se aprueba, el segundo envío de este estado sigue siendo `pago_pendiente`.

---

## Resumen del orden por lead

| Situación del lead | Qué recibe (como máximo) |
|---|---|
| Ventana abierta, no pidió QR | a) un solo texto libre |
| Ventana cerrada, no pidió QR | b) una sola plantilla |
| Pidió el QR y no pagó, ventana abierta | C1 o C2 (uno) y, si pasan 24 h sin respuesta, C3 |
| Pidió el QR y no pagó, ventana cerrada | C3 |
| Sergio ya escribió / ya pagó / dijo no o BAJA | Nada |

## Dudas para decidir con Sergio (no las apliqué)
1. **Tres seguimientos vs. límite de dos mensajes:** los tres textos de (c) no pueden salir todos al mismo lead sin romper la regla; por eso se tratan como opciones (C1 o C2, y luego C3). Si Sergio quiere los tres seguidos, hay que cambiar la regla.
2. **Aprobación de Meta:** `aviso_fin_bs50` y `ultimo_aviso_bs50` son plantillas nuevas. Con la fecha límite el domingo 1/11, si Meta no las aprueba a tiempo no se podrán usar y valdrán solo los textos libres.
3. **Hora de envío:** hoy es sábado 31/10; los envíos deben salir con margen antes del domingo 23:59. Sergio decide franja horaria para evitar madrugada.
4. **Duplicidad con `seguimientos-leads.md`:** este aviso comparte el cupo de "un texto libre y una plantilla" con los seguimientos existentes; conviene que el bot cuente envíos por lead entre ambos archivos.
