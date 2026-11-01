# Seguimientos por estado del lead: "Claude de 0 a 100" (BORRADOR, sin aprobar, 2026-10-31)

Fuentes: `guion-whatsapp-claude-0-100.md`, `base-chatbot.md`, `plantillas-whatsapp.md`, `aprendizajes.md`. No modifica ninguno de esos archivos: las propuestas de cambio están al final.
Tuteo neutro (tienes, puedes, quieres; nunca voseo). Sin cupos inventados, sin horarios que no estén en la base y sin "solo hoy" falsos. Las únicas fechas que se mencionan son las confirmadas: precio de Bs 50 hasta el domingo 1/11 a las 23:59 (hora Bolivia) o hasta completar los 60 cupos, lo que pase primero; clases 3, 5 y 7/11 a las 19:00 (hora Bolivia).

## Reglas que valen para todos los estados

1. **Silencio total si Sergio u otra persona ya escribió en el chat.** No se envía ni el texto libre ni la plantilla, y se cancelan los envíos programados. Se revisa el chat justo antes de enviar, no al programar. Solo se retoma si Sergio lo reactiva a mano.
2. **Límite por lead: un mensaje de texto libre y una plantilla, como máximo.** Orden: texto libre unas 20 h después del **último mensaje del lead** (ventana de 24 h abierta); si sigue sin responder y ya pasaron las 24 h, una plantilla. Después, nada más. Si el lead responde, el bot lo atiende con el guion normal (eso no cuenta como seguimiento) y no se reinicia la secuencia.
3. **Corte inmediato** si el lead dice "no", "ahora no" o "BAJA", o si pulsa el botón "Ahora no": no se le escribe más.
4. **No se hace seguimiento a:** leads fuera de tema (situación A), leads agresivos (B), audios que no se entendieron (C), imágenes que no son comprobante sin otra consulta (D), ni a quien pidió llamada, combo o asesoría (los cierra Sergio; el bot no hace seguimientos de la asesoría). La plantilla `seguimiento` dice "preguntaste por el taller": solo se manda si de verdad lo preguntó.
5. **Sin falsa presión.** Se menciona la fecha límite solo si es real y solo si aún no venció. No se dice cuántos cupos quedan ("los cupos a precio de lanzamiento son limitados" es lo máximo). Sin descuentos ni cuotas. Sin promesas de resultados.
6. **Nunca se confirma un lugar ni un pago.** Solo Sergio verifica el pago. El texto no dice "tienes tu lugar": sin pago verificado el lugar no está confirmado.
7. La plantilla `seguimiento` es de Marketing y, según `plantillas-whatsapp.md`, **solo se manda antes del 1/11**. Desde el 2/11 no hay plantilla de Marketing aprobada (ver "Pendientes").
8. Desde el inicio del taller (3/11) no se mandan seguimientos de venta; si alguien quiere entrar tarde, lo decide Sergio.

## Resumen

| Estado del lead | Texto libre (unas 20 h después de su último mensaje) | Plantilla (si pasaron más de 24 h y sigue sin responder) |
|---|---|---|
| 1. Preguntó y no respondió | 1A (antes del 1/11) o 1B (desde el 2/11) | `seguimiento`, solo antes del 1/11; desde el 2/11, ninguna |
| 2. Pidió el QR y no pagó | 2A (antes del 1/11) o 2B (desde el 2/11) | `pago_pendiente` (Utilidad) |
| 3. Pagó pero no mandó el comprobante | 3 (igual todo el tiempo) | `pago_pendiente` (Utilidad) |
| 4. Dijo "lo veo después" | 4A (antes del 1/11) o 4B (desde el 2/11) | `seguimiento`, solo antes del 1/11; desde el 2/11, ninguna |
| 5. Pidió Bs 50 y ya terminó | 5 | Ninguna (ver "Pendientes") |

---

## 1. Preguntó y no respondió
**Quién es:** escribió, el bot le contestó (saludo, datos o precio) y no volvió a escribir. Aún no pidió el QR.
**Condición extra:** Sergio no escribió, y no dijo "no" ni "BAJA".

**1A. Texto libre, antes del 1/11 a las 23:59 y con cupos disponibles**
> ¡Hola! ¿Pudiste ver lo del taller *Claude de 0 a 100*? Son 3 clases en vivo por Google Meet (3, 5 y 7/11 a las 19:00, hora Bolivia) y todas quedan grabadas. El precio de *Bs 50* vale hasta el domingo 1/11 a las 23:59 (hora Bolivia) o hasta completar los 60 cupos, lo que pase primero. Si quieres, te paso el QR y te reservo el lugar 🙌

**1B. Texto libre, desde el 2/11 o con los 60 cupos completos**
> ¡Hola! ¿Pudiste ver lo del taller *Claude de 0 a 100*? Son 3 clases en vivo por Google Meet (3, 5 y 7/11 a las 19:00, hora Bolivia) y todas quedan grabadas. La inversión es de *Bs 70*. ¿Quieres que le pase tu consulta a Sergio para reservar tu lugar?

(Desde el 2/11 no hay QR de Bs 70 para el bot: si responde que sí, se usa la frase fija "Le paso tu consulta a Sergio y te responde lo antes posible." y se deriva.)

**Plantilla después de 24 h:** `seguimiento` (Marketing), una sola vez y solo antes del 1/11:
> Hola {{1}}, soy de OnIA. Hace poco preguntaste por el taller "Claude de 0 a 100", que empieza el 3/11 a las 19:00 y queda grabado. ¿Te reservo un lugar? Si no quieres más mensajes, responde BAJA. [Sí, quiero] [Ahora no]

Desde el 2/11 no se manda ninguna plantilla.
**No hacer:** repetir la pregunta "¿para qué quieres usarla?", mandar el QR sin que lo pida, decir "últimos cupos".

---

## 2. Pidió el QR y no pagó
**Quién es:** pidió pagar, el bot le mandó el QR de Bs 50 (solo mientras el precio es Bs 50) y pasó el tiempo sin comprobante ni respuesta.
**Condición extra:** Sergio no escribió, y no dijo que ya pagó (si lo dijo, es el estado 3).

**2A. Texto libre, antes del 1/11 a las 23:59 y con cupos disponibles**
> ¡Hola! Te escribo por si te quedó alguna duda para pagar. Cuando lo hagas, mándame por aquí la foto del comprobante con tu nombre completo y Sergio verifica tu pago. Al pagar te va a salir el nombre de Leslie Mercado Moreno, es nuestra cuenta de cobro. El precio de *Bs 50* vale hasta el domingo 1/11 a las 23:59 (hora Bolivia) o hasta completar los 60 cupos, lo que pase primero. ¿Te ayudo con algo?

**2B. Texto libre, desde el 2/11 o con los 60 cupos completos**
> ¡Hola! Te escribo por tu consulta del taller. El precio de lanzamiento de Bs 50 ya terminó y ahora la inversión es de *Bs 70* por las 3 clases. Si ya pagaste, mándame por aquí la foto del comprobante con tu nombre completo. Si no, le paso tu consulta a Sergio y te responde lo antes posible.

(No se vuelve a mandar el QR de Bs 50 ni se hacen excepciones. Si el lead dice que pagó dentro del plazo, el bot le pide el comprobante: el precio de Bs 50 vale si el pago se hizo hasta las 23:59 del 1/11 (hora Bolivia) según la hora que figura en el comprobante, y eso lo revisa Sergio.)

**Plantilla después de 24 h:** `pago_pendiente` (Utilidad, sin precios ni urgencia, se puede usar también desde el 2/11):
> Hola {{1}}, tu lugar en "Claude de 0 a 100" todavía no está confirmado porque falta el pago. Si ya pagaste, mándame el comprobante por aquí y lo confirmo. [Ya pagué] [Pásame el QR]

Si pulsa "Pásame el QR" antes del 1/11 a las 23:59: se manda el QR de Bs 50. Desde el 2/11: se usa el texto de "ya terminó" y se deriva.
**No hacer:** insinuar que "se le va a ocupar el lugar", dar un número de cupos, adjuntar el QR otra vez sin que lo pida.

---

## 3. Pagó pero no mandó el comprobante
**Quién es:** dijo "ya pagué", "listo" o equivalente, pero no llegó ninguna imagen que sea un comprobante (o la imagen no se entiende).
**Importante:** el bot no sabe si pagó de verdad. Habla de "si ya pagaste" y no confirma nada. No menciona precios ni fecha límite (el lead pudo pagar a tiempo y la verificación es de Sergio).

**3. Texto libre**
> ¡Hola! Para que Sergio pueda verificar tu pago, mándame por aquí la foto del comprobante con tu nombre completo. Hasta que Sergio lo verifique, tu lugar todavía no queda confirmado. Si tuviste algún problema al pagar, cuéntame y te ayudo.

**Plantilla después de 24 h:** `pago_pendiente` (Utilidad), la misma del estado 2:
> Hola {{1}}, tu lugar en "Claude de 0 a 100" todavía no está confirmado porque falta el pago. Si ya pagaste, mándame el comprobante por aquí y lo confirmo. [Ya pagué] [Pásame el QR]

Si pulsa "Ya pagué": el bot pide la foto del comprobante con el nombre completo (si pagó otra persona, el nombre completo del alumno, porque la inscripción va a su nombre). Si pulsa "Pásame el QR" desde el 2/11: aplica el texto de "ya terminó" y se deriva.
**No hacer:** decir "recibí tu pago", "ya estás inscrito/a" o "te esperamos el martes" sin la verificación de Sergio; reclamar o dudar del pago.

---

## 4. Dijo "lo veo después" / "lo voy a pensar"
**Quién es:** respondió con esa objeción, el bot ya le contestó (objeción 6 del guion) y no volvió a escribir.
**Condición extra:** no dijo "no" ni "ahora no" (eso corta todo).

**4A. Texto libre, antes del 1/11 a las 23:59 y con cupos disponibles**
> ¡Hola! Solo te dejo el dato por si lo retomas: *Claude de 0 a 100* es el 3, 5 y 7/11 a las 19:00 (hora Bolivia), por Google Meet, y todas las clases quedan grabadas para los inscritos. El precio de *Bs 50* vale hasta el domingo 1/11 a las 23:59 (hora Bolivia) o hasta completar los 60 cupos, lo que pase primero. Si hay algo puntual que quieras aclarar, dime.

**4B. Texto libre, desde el 2/11 o con los 60 cupos completos** (se omite Bs 50)
> ¡Hola! Solo te dejo el dato por si lo retomas: *Claude de 0 a 100* es el 3, 5 y 7/11 a las 19:00 (hora Bolivia), por Google Meet, y todas las clases quedan grabadas para los inscritos. La inversión es de *Bs 70*. Si hay algo puntual que quieras aclarar, dime.

**Plantilla después de 24 h:** `seguimiento` (Marketing), una sola vez y solo antes del 1/11 (mismo texto del estado 1). Desde el 2/11, ninguna.
**No hacer:** pedirle una decisión "ya", escribir "última oportunidad", prometer escribirle otro día (no hay segundo recordatorio), ni dejar entender que podrá ver las grabaciones sin inscribirse (son solo para inscritos).

---

## 5. Pidió el precio de Bs 50 y ya terminó
**Quién es:** escribió desde el 2/11 (o con los 60 cupos completos) pidiendo pagar Bs 50. El bot ya respondió con el texto fijo ("Ese precio de lanzamiento ya terminó... Bs 70... Le paso tu consulta a Sergio...") y no volvió a escribir.
**Condición extra:** si Sergio ya escribió, no se manda nada. Es lo más probable porque el caso se deriva.

**5. Texto libre** (solo si Sergio todavía no escribió)
> ¡Hola! Sobre tu consulta del taller: el precio de Bs 50 ya terminó y ahora la inversión es de *Bs 70* por las 3 clases en vivo (3, 5 y 7/11 a las 19:00, hora Bolivia), que quedan grabadas. Sergio tiene tu consulta. Si quieres seguir, dime y se lo recuerdo.

**Plantilla después de 24 h: ninguna.** `seguimiento` solo se manda antes del 1/11 y este estado ocurre después; `pago_pendiente` no encaja porque el lead nunca aceptó pagar Bs 70. Se corta ahí.
**No hacer:** mandar el QR de Bs 50, ofrecer una excepción o descuento, "negociar", presionar con el inicio del taller.

---

## Pendientes y huecos que veo (para decidir con Sergio; no los apliqué)
1. **Guion paso 6:** dice "todavía tienes tu lugar", pero el lugar no está reservado hasta que se verifica el pago (la propia plantilla `pago_pendiente` dice que no está confirmado). Mejor: "sigue abierta tu inscripción".
2. **No hay plantilla de Marketing para después del 1/11.** Los estados 1, 4 y 5 se quedan sin segundo mensaje desde el 2/11. Si Sergio quiere uno, habría que redactar y aprobar una plantilla nueva con Bs 70 (sin la palabra "lanzamiento").
3. **QR de Bs 70:** `base-chatbot.md` dice que lo mandará Sergio. Mientras no exista, 1B y 4B terminan en derivación manual.
4. **Plantilla `pago_pendiente` a quien nunca recibió el QR:** funciona, pero habría que confirmar que no se manda a leads que solo preguntaron.
5. **Hora de envío:** "unas 20 h después" puede caer de madrugada. Sergio decide si el bot respeta una franja horaria (no la inventé).
6. **Pagó dentro del plazo pero mandó el comprobante tarde:** RESUELTO. Vale Bs 50 si la hora que figura en el comprobante es hasta las 23:59 del 1/11 (hora Bolivia). El bot no opina; Sergio verifica la hora.
