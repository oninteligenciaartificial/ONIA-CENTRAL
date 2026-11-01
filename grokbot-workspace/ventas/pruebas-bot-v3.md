# Pruebas bot v3: 15 casos contra el guion actual (BORRADOR, 2026-10-31, tercera corrida, con las 4 reglas de decisiones)

Guion probado: `guion-whatsapp-claude-0-100.md` con las 4 reglas nuevas: (1) Bs 50 vale si el pago se hizo hasta las 23:59 del 1/11 (hora Bolivia) según la hora del comprobante; (2) si paga otra persona, la inscripción va a nombre del alumno y el bot pide su nombre completo; (3) grabaciones 30 días desde la clase 3, hasta el 7/12; (4) a quien ya pagó el taller y pregunta el precio de la llamada 1:1, el bot no se lo da y deriva con la FF. Respaldo previo en `bak-decisiones/`.
Leads y nombres inventados. FF = "Le paso tu consulta a Sergio y te responde lo antes posible."
"Pasa" = el bot hace lo que el guion manda sin inventar. No significa que la venta se cierre: donde hay un pendiente de Sergio, pasa derivando.

**Resultado: 15 pasan. Ninguno falla.** Cambian de texto los casos 7, 11 y 13. Sigue habiendo pendientes de Sergio (abajo); el bot los deriva con la FF.

| # | Caso | Resultado | Nota |
|---|---|---|---|
| 1 | Combo el 31/10 | PASA | 350 + 50 = Bs 400, ahorro Bs 20. |
| 2 | Combo desde el 2/11 | PASA | 350 + 70 = Bs 420, ahorro Bs 40. |
| 3 | Combo "con cupos completos" antes del 1/11 | PASA | El bot usa solo la fecha (Bs 400). Si el lead dice que se agotaron o insiste en el precio exacto, no lo afirma y deriva. Falta la señal de "cupos completos" (Sergio/n8n). |
| 4 | Estudiante, sin "Justo con eso" | PASA | No promete trabajos de la universidad. |
| 5 | Requisitos: "¿cuenta de Claude? solo tengo celular" | PASA (parcial) | Responde lo confirmado (desde cero, nada técnico, Google Meet) y deriva con la FF lo del dispositivo, cuentas y costos aparte. No dice sí ni no al celular. |
| 6 | Temario: "¿qué sabré hacer al final?" | PASA | Repite "3 clases en vivo con práctica, desde cero, todas grabadas" y deriva el detalle. No detalla el temario porque sigue en borrador por confirmar con Sergio. |
| 7 | Dueño de negocio: "¿incluye armar el bot?" | PASA | Saluda con los datos del taller. Ante el bot: dice solo lo confirmado (3 clases, grabaciones hasta el 7/12) y deriva. No afirma ni niega. |
| 8 | Dueño de negocio pregunta por la asesoría sin pagar | PASA | El paso 8 ya cubre ese caso: manda el texto, marca "pidió asesoría" y pone la frase literal del lead en el resumen. |
| 9 | Confirmación tras mensaje de Sergio + "pago verificado" | PASA | Manda paso 5 y paso 7 (Bs 400). |
| 10 | Sergio escribe después de la señal | PASA | El bot calla. |
| 11 | Pago verificado el 4/11 a las 09:00 | PASA | Usa "La próxima clase es el 5/11 a las 19:00…" y "grabaciones disponibles hasta el 7/12". No dice una fecha pasada como futura. |
| 12 | Comprobante sin nombre | PASA | Paso 4 pide el nombre completo; el aviso a Sergio sale con "nombre: pendiente". |
| 13 | QR el 1/11 23:50, comprobante el 2/11 00:15 | PASA | No promete ni niega Bs 50; agrega "Sergio revisa la hora que figura en tu comprobante para confirmarte el precio". El criterio ya está decidido: vale la hora del pago en el comprobante (hasta 23:59 del 1/11). El aviso lleva la hora del QR y la de llegada del comprobante. |
| 14 | Fuera de tema, segunda respuesta | PASA | Situación A2: no inventa local, marca "fuera de tema". |
| 15 | "Caro" + "gratis en YouTube" el 3/11 | PASA | Usa la versión Bs 70 de la objeción 1 y la respuesta a "gratis"; no menciona Bs 50 ni cupos. |

## Cómo responde el bot en los casos 5, 6 y 7 (texto del guion)

**Caso 5.** Lead: ¿Necesito comprar algo? ¿Una cuenta de Claude? Tengo solo mi celular.
**Bot:** "No necesitas saber nada previo ni nada técnico: arrancamos desde cero y las clases son en vivo por Google Meet. Sobre qué dispositivo usar, qué cuentas necesitas o si hay algún costo aparte, le paso tu consulta a Sergio y te responde lo antes posible."
Riesgo comercial: es la duda que decide el pago; mientras Sergio no confirme dispositivo y cuentas, esos leads esperan.

**Caso 6.** Lead: ¿Qué voy a saber hacer al final? ¿Qué se ve en cada clase?
**Bot:** "Son 3 clases en vivo con práctica, desde cero, y todas quedan grabadas. El detalle de cada clase lo confirma Sergio: le paso tu consulta y te responde lo antes posible."

**Caso 7.** Lead: Tengo una pollería. ¿El taller incluye que me armen un bot para contestar el WhatsApp?
**Bot:** (paso 1, versión "ya tiene negocio"; luego) "Son 3 clases en vivo con práctica y las grabaciones quedan disponibles 30 días para los inscritos. Qué más incluye o no incluye (por ejemplo bot, certificado o material extra), se lo paso a Sergio: te responde lo antes posible."

## Verificación extra de las reglas nuevas (fuera de los 15 casos)
- Pagó la madre por un estudiante: el bot pide "el nombre completo de quien tomará el taller", lo anota aparte en el aviso y no confirma nada. PASA.
- Pagó el taller y pregunta "¿cuánto sale la llamada 1 a 1?": no da Bs 350 ni el combo; usa la FF. PASA.
- "¿Hasta cuándo puedo ver las grabaciones?": "30 días desde la clase 3, es decir hasta el 7/12". No dice la plataforma. PASA.

## Pendientes que siguen en manos de Sergio (el bot no los toca)
- Señal de "cupos completos".
- Mecanismo de la señal "pago verificado" (n8n).
- Datos del taller aún sin confirmar: dispositivo, cuentas y costos aparte; contenido del temario (borrador en `temario.md`); qué no incluye; certificado.
- Qué entrega el plan de 7 días en "atención" (asesoría).
- Plataforma donde están las grabaciones.
- Cierra pendiente: corte de Bs 50, nombre en pago de terceros, desde cuándo cuentan los 30 días y precio de la llamada para quien ya pagó (ahora el bot no lo da).

## Observación
Paso 7 (oferta de llamada o combo) se manda tras "pago verificado" y cita Bs 350/380. Choca con la regla 4 solo si se lee como "no dar precio a quien ya pagó"; apliqué la regla únicamente cuando el lead pregunta. Conviene que Sergio confirme si el paso 7 post-pago debe omitir el precio.
