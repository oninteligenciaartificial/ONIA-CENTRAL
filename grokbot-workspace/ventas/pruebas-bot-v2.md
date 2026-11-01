# Pruebas del bot v2: simulación de los 27 casos (31/10/2026)

**Cómo se simuló:** respondí como el bot usando solo `guion-whatsapp-claude-0-100.md` ya corregido (más `plantillas-whatsapp.md` para los seguimientos), con `base-chatbot.md` como fuente que manda y `casos-prueba-bot.md` actualizado como criterios. Fecha de prueba: sábado 31/10/2026 (rige Bs 50), salvo donde el caso pide otra fecha. Respaldos de los archivos originales en `bak-correcciones/`. Es una simulación hecha leyendo los textos, no una prueba contra el bot real en n8n.

| # | Caso | Respuesta simulada (resumen) | Resultado | Motivo |
|---|---|---|---|---|
| 1 | Saludo | Paso 1: 3 clases en vivo por Meet, 3, 5 y 7/11 a las 19:00 (hora Bolivia), desde cero, quedan grabadas. Cierra con la pregunta de uso. Sin precio ni cupos. | PASA | Corregido: ya no da el precio sin que lo pidan. No ofrece llamada, combo ni asesoría (C5, C7). |
| 2 | Precio | Variante del paso 2 (el lead no dijo el uso): Bs 50 para los primeros 60 cupos hasta el domingo 1/11 23:59, después Bs 70, 3 clases grabadas. "¿Te reservo el lugar?" Desde el 2/11: solo Bs 70. | PASA | Sin "justo con eso", sin descuentos, sin decir cuántos cupos quedan (C1, C2). |
| 3 | Dudoso | Paso 1b: sin conocimientos técnicos, "si sabes mandar un WhatsApp, puedes hacerlo". Cierra con una sola pregunta (para qué quiere usarla). | PASA | Sin presión, sin promesas ni falsa urgencia (C1, C5). |
| 4 | No tengo tiempo | Objeción 2: 19:00, 2 partes de menos de 60 min, grabadas. "¿Te reservo el lugar?" | PASA | Datos reales, sin horarios inventados (C2, C5). |
| 5 | Grabaciones | Objeción 5: sí, quedan grabadas y se comparten con los inscritos. | PASA | No inventa plazo ni plataforma. |
| 6 | QR (criterio actualizado) | Paso 3 con `qr-pago-bs50.jpg`: QR de Bs 50 (Yolo Pago, Banco Ganadero), comprobante con nombre completo y aviso de Leslie Mercado Moreno. | PASA | Se evalúa con el criterio nuevo (igual que el caso 24). No inventa cuenta ni link, no confirma inscripción (C3, C4). |
| 7 | Comprobante | Paso 4: "Recibí tu comprobante. Sergio verifica el pago y te confirma lo antes posible." Se avisa a Sergio con el resumen. | PASA | Sin "ya estás inscrito", sin Meet ni grupo, sin plazo concreto, sin validar el monto (C4). |
| 8 | Llamada 1:1 | Paso 7: 45 min, Bs 350 (Bs 380 con el taller, Bs 420 por separado). Si acepta: link de la llamada y "queda reservada apenas Sergio confirme el pago". | PASA | Precio y link exactos. El guion no menciona las franjas horarias, así que no las inventa (C2, C4). |
| 9 | Combo | FAQ: taller + llamada 1 a 1 de 45 min, Bs 380 (Bs 420 por separado). Si piden rebaja: "No tenemos descuentos ni cuotas." | PASA | Corregido: ahora hay respuesta para rebaja del combo. Sin otras promos (C2). |
| 10 | Asesoría | Paso 1 sin la pregunta de uso (ya dijo "pollería"): datos del taller + "¿Te cuento cómo es el taller?", lead marcado candidato al paso 8. Con interés: paso 8, Bs 1500. Si acepta: link del diagnóstico, reserva confirmada solo con pago acreditado, deriva con la frase fija. | PASA | Criterio corregido (la asesoría sí lleva link del diagnóstico). No ofrece "Tu negocio contesta solo por WhatsApp", no promete ventas (C4, C5, C7). |
| 11 | Fuera de tema | Situación A: "Jaja, de eso no te sé decir 😅 Por acá solo te puedo ayudar con *Claude de 0 a 100* y los servicios de OnIA. ¿Te cuento cómo es el taller?" | PASA | Corregido: antes no había regla. Una sola vez, sin charlar del tema. |
| 12 | Insulto | Situación B: "Entiendo la desconfianza, hay mucha estafa en internet..." con datos (Sergio Urcullo, Meet, 3, 5 y 7/11 19:00, sin devoluciones). Si sigue agresivo: frase fija una vez y no responde más. | PASA | Corregido. No se defiende, no promete resultados, no inventa garantías (C5). |
| 13 | Audio | Situación C: "Por acá no puedo escuchar audios. ¿Me lo escribes por mensaje? 🙏" Si el segundo mensaje tampoco se entiende: frase fija. | PASA | Corregido. No inventa el contenido del audio. |
| 14 | Foto que no es comprobante | Paso 4 (aviso) / situación D: "¿Me cuentas por mensaje qué necesitas?" y datos de la base (3, 5 y 7/11, 19:00, Meet, Bs 50 hasta el 1/11). | PASA | Corregido. No la toma como comprobante ni copia precios del flyer (C2, C4). |
| 15 | Pide hablar con Sergio | Frase fija de derivación. Para el número exacto de cupos: frase fija, sin cifra. Cuando Sergio escribe y el lead dice "ok gracias", el bot no manda nada. | PASA | Corregido con la regla general de silencio (C1, C6). Ver nota sobre n8n abajo. |
| 16 | Recordatorio con Sergio en el chat | Si Sergio escribió: no sale ni el texto libre de ~20 h, ni `seguimiento`, ni plantillas de Utilidad. Si Sergio nunca escribió: el texto libre sale una sola vez dentro de las 24 h. | PASA | Corregido en el guion (paso 6) y en `plantillas-whatsapp.md`. Cumple C6 en ambos sentidos. |
| 17 | Caro | Objeción 1: pregunta qué duda más (monto o aprovechamiento), 3 clases con práctica y grabadas, Bs 50 hasta el 1/11 23:59, después Bs 70. Si pide rebaja: "No tenemos descuentos ni cuotas, pero el precio de Bs 50 ya es el de lanzamiento." | PASA | Sin descuentos ni cuotas, sin cifra de cupos (C1, C2). |
| 18 | No tengo tiempo | Objeción 2, igual que el caso 4. | PASA | Datos exactos (C5). |
| 19 | ¿Es confiable? | Objeción 3 (pregunta tranquila): lo da Sergio Urcullo, de OnIA, en vivo por Meet, sin devoluciones. "¿Qué te gustaría confirmar?" Si pide pruebas: frase fija. | PASA | No inventa testimonios ni menciona el video pendiente. |
| 20 | ¿Sirve si no sé nada? | Objeción 4: sí, desde cero, "si sabes mandar un WhatsApp, puedes hacerlo". Pregunta para qué la quiere usar. | PASA | Sin promesas (C5). |
| 21 | ¿Queda grabado? | Objeción 5: sí, y se comparte con inscritos. Sobre el plazo o la plataforma: frase fija y deriva. | PASA | No inventa plazo ni plataforma. |
| 22 | Lo veo después | Objeción 6: "Claro. ¿Hay algo puntual que quieras aclarar?" + Bs 50 vale hasta el 1/11 23:59 o hasta completar los 60 cupos. Desde el 2/11 solo Bs 70. | PASA | Una pregunta, sin falsa urgencia ni cifra de cupos, sin seguimiento extra (C1). |
| 23 | QR a nombre de otra persona | Objeción 7: aparece Leslie Mercado Moreno, cuenta de cobro; comprobante con nombre completo y Sergio verifica. Si sigue dudando: frase fija. | PASA | No inventa la relación con OnIA ni otras cuentas. No confirma inscripción (C4). |
| 24 | QR de Bs 50 con aviso | Igual que el caso 6. Desde el 2/11 el guion dice que no se manda este QR. | PASA | Corregido: antes el paso 3 no tenía la condición de fecha. |
| 25 | ¿Hay certificado? | Objeción 8: frase fija y deriva; puede añadir "3 clases en vivo con práctica y todas quedan grabadas". | PASA | No dice sí ni no (dato PENDIENTE). |
| 26 | Otro monto (Bs 70, combo, llamada, asesoría) | "Quiero el combo de Bs 380": paso 8 con el link de la llamada, reserva al verificar el pago y derivación con la frase fija. "Quiero pagar los Bs 70" (con fecha 31/10): paso 3, frase fija y deriva. | PASA | No manda el QR de Bs 50 para otro monto (C2, C3, C4). Observación: el guion no dice qué hacer con alguien que ofrece pagar Bs 70 antes del 2/11, cuando aún rige Bs 50. Hoy solo deriva; no lo cuento como falla porque el criterio se cumple. |
| 27 | Bs 50 con fecha vencida (2/11) | El paso 2 desde el 2/11 dice "La inversión es de *Bs 70*...", el paso 3 prohíbe el QR de Bs 50 y deriva. | PASA | Corregido: el paso 2 del guion ahora tiene el texto para quien pide pagar Bs 50 con el precio ya terminado: explica que ese precio ya terminó, da el precio actual (Bs 70), no manda el QR de Bs 50 y deriva a Sergio con la frase fija. Pendiente de volver a simular contra el bot real. |

## Revisiones transversales sobre los archivos corregidos

| Revisión | Resultado | Detalle |
|---|---|---|
| Tuteo neutro, sin voseo | PASA | Busqué tenés, querés, podés, sabés, mirá, mandá, pasame, elegí, decime, contame, vos, sos en el guion, las plantillas, la base y los casos: no hay ninguna. Los textos nuevos usan "cuentas", "escribes", "puedes", "quieres". |
| Sin promesas de horario | PASA | Los textos nuevos usan solo "lo antes posible". Las únicas horas al cliente son las de las clases (19:00, 3, 5 y 7/11) y el cierre del precio (1/11 23:59). Quité "te confirmo en un rato" y "enseguida" de los casos. Las "20 h" y "24 h" siguen siendo reglas internas. |
| Sin inventar datos | PASA | Solo usé datos de la base. No agregué plazos de grabación, testimonios, certificado, franjas horarias ni cifras de cupos. |
| Solo los 2 links de Cal.com | PASA | Siguen exactamente `llamada-1-1-tu-ia-a-medida` y `diagnostico-tu-negocio-con-ia`. |

## Resumen

- **Total simulado:** 27 casos. **PASAN: 27. FALLAN: 0** (el caso 27 se corrigió en el guion).
- Los 7 casos que fallaban en v1 (1, 11, 12, 13, 14, 15 y 16) ahora pasan; los casos 6 y 10 pasan con criterios actualizados.
- **Caso 27 corregido:** apliqué en el paso 2 del guion el texto: "Ese precio de lanzamiento ya terminó. Ahora la inversión es de *Bs 70* por las 3 clases. Le paso tu consulta a Sergio y te responde lo antes posible." (quité la fecha "1/11 23:59" para que también sirva si el precio terminó antes por cupos completos).
- **Importante:** la regla de silencio (C6) quedó escrita en el guion, la base, las plantillas y los casos, pero no toqué el flujo de n8n. Para que funcione de verdad, el flujo tiene que revisar si Sergio u otra persona escribió en el chat antes de cada respuesta, recordatorio o plantilla. Sin eso, los casos 15 y 16 pasan solo en el papel.
- **Observación (caso 26):** falta una regla para quien ofrece pagar Bs 70 mientras aún rige Bs 50.
