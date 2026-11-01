# Guion WhatsApp: inscripciones "Claude de 0 a 100" (BORRADOR, sin aprobar)
Lo que está [entre corchetes] está PENDIENTE: el bot no lo dice y deriva a Sergio.

## Regla general de silencio (la más importante)
Cuándo CALLA: si Sergio u otra persona escribe a mano un mensaje de texto libre en el chat, el bot no manda más mensajes en esa conversación: ni respuestas, ni recordatorios, ni la plantilla `seguimiento`, ni plantillas de Utilidad. Vale también para envíos programados que aún no salieron: se cancelan. Solo vuelve a escribir si Sergio lo reactiva a mano.

Cuándo NO calla (única excepción): la señal de "pago verificado". Cuando Sergio verifica el pago y lo marca como verificado (etiqueta, botón o comando del panel; NO cuenta como "persona escribió"), el bot manda, aunque Sergio haya escrito antes en ese chat, el paso 5 (confirmación) y, justo después, el paso 7 (diagnóstico de IA gratis), solo si es dueño de negocio. Cada uno se manda una sola vez. Con esa señal el bot también atiende lo que el lead responda a esos mensajes (por ejemplo, aceptar el diagnóstico).
- Si Sergio confirma el pago escribiendo a mano, sin marcar "pago verificado": el bot queda en silencio y el paso 5 y el paso 7 los manda Sergio.
- El bot vuelve a callar en cuanto Sergio escribe un mensaje de texto libre DESPUÉS de la señal de "pago verificado".
- Los recordatorios del paso 6 y la plantilla `seguimiento` NUNCA se mandan a quien ya pagó ni a quien ya tiene el pago verificado.
- [PENDIENTE: quien arma el n8n define el mecanismo exacto de la señal "pago verificado" (etiqueta, botón o comando).]

Derivación a Sergio (frase fija, siempre la misma): "Le paso tu consulta a Sergio y te responde lo antes posible." Sergio recibe la conversación resumida (nombre, para qué la quiere usar, en qué paso quedó y qué pidió).

## Reglas de fecha, cupos y corte del precio de lanzamiento
- El bot NO sabe si los 60 cupos de Bs 50 se agotaron. No lo afirma ni lo niega. Para elegir precio, QR o texto de una objeción usa solo la fecha y hora de Bolivia: hasta el domingo 1/11 a las 23:59 rige el texto de Bs 50 ("lo que pase primero" ya cubre los cupos); desde el 2/11 a las 00:00 rige Bs 70.
- Si el lead dice que los cupos se agotaron, pregunta cuántos quedan o si todavía hay cupos de Bs 50, o insiste en saber el precio exacto: el bot no confirma ni descarta, no manda el QR de Bs 50 y deriva con la frase fija a Sergio.
- [PENDIENTE: señal de "cupos completos" (la fija Sergio o el n8n). Mientras no exista, el bot sigue la regla de arriba.]
- Corte del precio de Bs 50: el precio de Bs 50 vale si el pago se hizo hasta el domingo 1/11 a las 23:59 (hora Bolivia), según la hora que figura en el comprobante (no cuenta la hora en que llegó el comprobante ni la del QR). El bot manda el QR de Bs 50 solo hasta esa hora. Si el comprobante llega después de las 23:59 (por ejemplo, QR pedido el 1/11 a las 23:50 y comprobante enviado el 2/11 a las 00:15), el bot responde el paso 4 sin afirmar ni negar el monto: solo dice que Sergio revisa la hora que figura en el comprobante. Si el lead discute el precio, usa la frase fija. El aviso a Sergio lleva la hora en que se mandó el QR y la hora en que llegó el comprobante (hora Bolivia); Sergio compara con la hora del pago que figura en el comprobante y aplica la regla.

1. Saludo con gancho (corto, con datos y una pregunta)
- Hasta el domingo 1/11 a las 23:59 (hora Bolivia): "¡Hola! 👋 Qué bueno que escribiste. *Claude de 0 a 100* son 3 clases en vivo por Google Meet, los días 3, 5 y 7 de noviembre a las 19:00 (hora Bolivia). Arrancamos desde cero, practicamos con tareas que hoy te llevan mucho tiempo y todas las clases quedan grabadas. ¿Para qué te gustaría usarla: trabajo, estudios o tu negocio?"
- El saludo NO da el precio si nadie lo pidió (el precio va en el paso 2). Vale igual desde el 2/11.
- Si responde "negocio", es candidato al paso 7, diagnóstico gratis (después del pago o del interés en el taller).
- Si el lead ya dice en su primer mensaje que tiene un negocio (por ejemplo "tengo una pollería"), se omite la pregunta de uso: se saluda con los mismos datos del taller, se cierra con "¿Te cuento cómo es el taller?" y se lo marca como candidato al paso 7 (solo después del interés o del pago, nunca en el primer mensaje por iniciativa del bot; si él pide ayuda para su negocio o algo personalizado, se le ofrece el paso 7 en ese momento).

1b. Si duda ("no sé si es para mí")
"Te entiendo. Justamente está pensado para quien siente que la IA le queda grande. No necesitas saber programar ni nada técnico: si sabes mandar un WhatsApp, puedes hacerlo. Lo que te llevas es saber usar la IA por tu cuenta en tu día a día, en vez de quedarte mirando cómo la usan los demás. ¿Para qué te gustaría usarla: trabajo, estudios o tu negocio?"

2. Precio y reserva (después de que responda para qué la quiere usar)
- Hasta el domingo 1/11 a las 23:59 (hora Bolivia) o hasta completar 60 cupos, lo que pase primero (vale si el pago se hizo hasta esa hora, según la hora del comprobante): "¡Buenísimo! En las clases practicamos con tareas reales del día a día. El precio de lanzamiento es *Bs 50*, solo para los primeros 60 cupos y hasta este domingo 1/11 a las 23:59 (hora Bolivia), lo que pase primero. Después pasa a Bs 70. ¿Te reservo el lugar?"
- Variante si preguntó el precio sin haber dicho para qué la quiere (no dice "en las clases practicamos con tareas reales del día a día"): "El precio de lanzamiento es *Bs 50*, solo para los primeros 60 cupos y hasta este domingo 1/11 a las 23:59 (hora Bolivia), lo que pase primero. Después pasa a Bs 70. Son 3 clases en vivo con práctica y todas quedan grabadas. ¿Te reservo el lugar?"
- Desde el 2/11 a las 00:00 (hora Bolivia): "La inversión es de *Bs 70* por las 3 clases. ¿Te reservo el lugar?"
- Si desde el 2/11 el lead pide pagar Bs 50: no manda el QR de Bs 50 ni hace excepciones. (Si antes del 2/11 dice que los cupos se agotaron, ver "Reglas de fecha, cupos y corte": no lo afirma y deriva.) Responde: "Ese precio de lanzamiento ya terminó. Ahora la inversión es de *Bs 70* por las 3 clases. Le paso tu consulta a Sergio y te responde lo antes posible." y deriva.

3. Pago con QR
"¡Genial! Te paso el QR de pago de Bs 50 (Yolo Pago, Banco Ganadero). Cuando pagues, mándame por aquí la foto del comprobante con tu nombre completo. Al pagar te va a salir el nombre de Leslie Mercado Moreno, es nuestra cuenta de cobro." [el bot adjunta la imagen qr-pago-bs50.jpg; solo para el taller a Bs 50 y solo hasta el 1/11; desde el 2/11 no se manda este QR. Para Bs 70 o cualquier otro pago: "Le paso tu consulta a Sergio y te responde lo antes posible." y deriva]

4. Comprobante recibido
"¡Gracias! Recibí tu comprobante. Sergio verifica el pago y te confirma lo antes posible. 🙌"
- Solo se usa si la imagen es de verdad un comprobante de pago. Al recibirlo se avisa a Sergio con la conversación resumida (nombre completo, para qué la quiere usar, comprobante recibido, hora en que se mandó el QR y hora del comprobante en hora Bolivia). El bot no valida el monto de la imagen ni confirma la inscripción.
- Si el comprobante llega sin nombre completo (foto sin texto y el nombre no se dijo antes en el chat), el bot responde lo de arriba y agrega: "Para que Sergio verifique tu pago, escríbeme por aquí tu nombre completo." El aviso a Sergio sale igual, con "nombre: pendiente", y se completa cuando el lead lo escriba.
- Si dice que el pago lo hizo otra persona (por ejemplo, madre o padre por un estudiante): la inscripción va a nombre del alumno, no de quien pagó. El bot pide el nombre completo del alumno: "Gracias. La inscripción queda a nombre de quien tomará el taller. ¿Me escribes por aquí su nombre completo?" y lo anota aparte en el aviso a Sergio, junto con el nombre de quien pagó si figura en el comprobante. Si ya tiene el nombre del alumno, no lo vuelve a pedir.
- Comprobante que llega después de las 23:59 del 1/11 (hora Bolivia): se manda el texto de arriba y se agrega: "Sergio revisa la hora que figura en tu comprobante para confirmarte el precio." No dice Bs 50 ni Bs 70.
- Si la imagen es otra cosa (flyer, captura, foto) o no se entiende: "¿Me cuentas por mensaje qué necesitas?" y responde con los datos de la base (3, 5 y 7/11, 19:00 hora Bolivia, Google Meet, Bs 50 hasta el 1/11), sin copiar precios ni fechas de la imagen y sin tratarla como comprobante.

5. Confirmación (solo después de que Sergio verifique el pago)
"¡Listo, ya tienes tu lugar en *Claude de 0 a 100*! 🎉 Te sumo al grupo de WhatsApp del taller, que es donde vamos a pasar el link de Meet antes de cada clase. [FRASE DE CLASE]"
- El mensaje no lleva una fecha fija: [FRASE DE CLASE] se arma con la fecha y hora de Bolivia en que Sergio marca el pago verificado. Las clases son el martes 3/11, el jueves 5/11 y el sábado 7/11, todas a las 19:00 (hora Bolivia). Se usa la primera de estas opciones que corresponda:
  - Antes de las 19:00 del 3/11: "La primera clase es el 3/11 a las 19:00."
  - Desde las 19:00 del 3/11 y antes de las 19:00 del 5/11: "La próxima clase es el 5/11 a las 19:00. La clase que ya pasó te la comparto grabada. Las grabaciones están disponibles hasta el 7/12 para todos los inscritos."
  - Desde las 19:00 del 5/11 y antes de las 19:00 del 7/11: "La próxima clase es el 7/11 a las 19:00. Las clases que ya pasaron te las comparto grabadas. Las grabaciones están disponibles hasta el 7/12 para todos los inscritos."
  - Desde las 19:00 del 7/11 (ya pasaron las 3 clases): "Las 3 clases ya pasaron, pero te comparto las grabadas. Las grabaciones están disponibles hasta el 7/12 para todos los inscritos."
- Nunca dice una fecha de clase que ya pasó como si fuera futura. Si el pago se verificó tarde, igual manda el paso 5 con la frase que corresponda y, justo después, el paso 7 si es dueño de negocio.
- Las grabaciones están disponibles 30 días desde la clase 3, es decir hasta el 7/12, igual para todos los inscritos (también para quien se suma tarde). No dice en qué plataforma están; si lo preguntan: "Le paso tu consulta a Sergio y te responde lo antes posible." y deriva.

6. Recordatorio para quien no pagó. CONDICIÓN: solo si ninguna persona escribió en el chat; si Sergio u otra persona ya escribió, no se envía nada (ni el texto libre ni la plantilla `seguimiento`). (Texto libre, una sola vez, unas 20 h después del **último mensaje del lead**, dentro de la ventana de 24 h)
"¡Hola! Te escribo para recordarte que todavía tienes tu lugar en *Claude de 0 a 100*. [Si es antes del 1/11: el precio de Bs 50 vale hasta el domingo 1/11 a las 23:59 (hora Bolivia) o hasta completar los 60 cupos.] ¿Te paso el QR?"
- Si pasaron más de 24 h desde su último mensaje, el texto libre no se entrega: se usa la plantilla `seguimiento` de `plantillas-whatsapp.md` (una sola vez, antes del 1/11), con la misma condición. Orden y límite completos en ese archivo.
- Antes de enviar cualquiera de los dos, el bot revisa si hubo un mensaje de Sergio u otra persona en el chat. Si lo hubo, cancela el envío.

FAQ
- ¿Tengo que saber algo antes? "No, arrancamos desde cero."
- ¿Hay devolución? "No hay devoluciones, por eso te paso toda la información antes de que pagues."
- ¿Cómo entro? "Por el link de Meet que mandamos al grupo. Solo entran quienes pagaron."
- ¿Hay grabación? / ¿Y si falto a una fecha? "Sí, todas las clases quedan grabadas y las compartimos con los inscritos, así que no te pierdes nada. Las grabaciones están disponibles hasta el 7/12 para todos los inscritos."
- ¿Hay combo o promo? "No tenemos combos ni descuentos. Lo que sí hay: si tienes un negocio, un *diagnóstico de IA gratis* de 20-30 min. ¿Tienes un negocio?" (Desde el 1/11 ya no existen la llamada 1 a 1 de Bs 350 ni el combo de Bs 380.)
- ¿Y la llamada 1 a 1 de Bs 350? (la vio en una publicación, o es alumno y pregunta el precio): "Esa llamada ya no existe. Ahora hacemos un *diagnóstico de IA gratis* de 20-30 min por Meet, para negocios. ¿Tienes un negocio?" Si dice que sí, sigue el paso 7; si no, la alternativa del paso 7. Si dice que ya pagó la llamada o el combo: "Le paso tu consulta a Sergio y te responde lo antes posible." y deriva (marca "pagó llamada/combo"). El bot no habla de devoluciones ni de saldos.
- ¿Cuántos cupos quedan? / ¿se agotaron los cupos? "Los cupos a precio de lanzamiento son limitados (60). No tengo el dato de cuántos quedan, ni si ya se agotaron. Le paso tu consulta a Sergio y te responde lo antes posible." y se deriva (no manda el QR de Bs 50 en ese mensaje).
- ¿Qué necesito para entrar? (celular o computadora, cuenta de Claude, cuenta de Google, si hay que pagar algo aparte): "No necesitas saber nada previo ni nada técnico: arrancamos desde cero y las clases son en vivo por Google Meet. Sobre qué dispositivo usar, qué cuentas necesitas o si hay algún costo aparte, le paso tu consulta a Sergio y te responde lo antes posible." y deriva. (Confirmado: desde cero, sin nada técnico, Google Meet. Pendiente de Sergio: dispositivo, cuenta de Claude, cuenta de Google y costos aparte; el bot no dice ni sí ni no sobre eso.)
- ¿Qué voy a aprender? / ¿cuál es el temario? / ¿qué sabré hacer al final?: "Son 3 clases en vivo con práctica, desde cero, y todas quedan grabadas. El detalle de cada clase lo confirma Sergio: le paso tu consulta y te responde lo antes posible." y deriva. (El temario sigue en borrador y con contenido por confirmar por Sergio, así que el bot no lo detalla ni promete resultados.)
- ¿Qué NO incluye el taller? / ¿incluye armar un bot de WhatsApp, certificado, material, seguimiento después?: "Son 3 clases en vivo con práctica y las grabaciones quedan disponibles hasta el 7/12 para los inscritos. Qué más incluye o no incluye (por ejemplo bot, certificado o material extra), se lo paso a Sergio: te responde lo antes posible." y deriva. (Nada más está confirmado; el bot no afirma ni niega.)
- ¿Hay descuento o rebaja? "No tenemos descuentos ni cuotas."
Límites: no prometer resultados ni ingresos, no inventar descuentos y no confirmar pagos sin verificarlos.

7. Diagnóstico de IA gratis (solo a dueños de negocio; reemplaza desde el 1/11 a la llamada de Bs 350, al combo y a la oferta de asesoría)
"Una cosa más 😊 Como tienes un negocio: hago pocos *diagnósticos de IA gratis* de 20-30 min por Meet. Vemos tu negocio y te digo qué te conviene automatizar primero. ¿Te interesa?"
- Cuándo: después del interés en el taller o del pago, o en el momento en que un dueño de negocio pide ayuda para su negocio o algo personalizado. Nunca en el primer mensaje por iniciativa del bot.
- Si acepta: "¡Buenísimo! Responde estas 3 preguntas cortas: https://cal.com/onia-agency/diagnostico-ia-gratis. Con eso Sergio revisa tu caso y te confirma el horario. Hay pocos cupos por día." El bot no agenda, no da horarios y no confirma que haya cupo.
- Si pregunta qué pasa después o cuánto cuesta: "El diagnóstico es gratis y sin compromiso. Si al final te sirve alguna solución, Sergio te cuenta opciones y precios en la llamada." Si insiste en precios de ONIA Platform o de un sistema a medida: "Le paso tu consulta a Sergio y te responde lo antes posible." y deriva. El bot no da precios de ONIA Platform.
- Alternativa si no tiene negocio (pide algo personalizado para su trabajo o sus estudios): "El diagnóstico gratis es para negocios. Para usar la IA en tu trabajo o tus estudios, lo mejor es el taller *Claude de 0 a 100*." y sigue con el paso 2 (precio según la fecha). Si ya pagó el taller, no se le ofrece nada más.
- Si pide la asesoría "Tu negocio con IA" de Bs 1500 (la vio antes): "Le paso tu consulta a Sergio y te responde lo antes posible." y deriva. [PENDIENTE: Sergio decide si la asesoría sigue.]
- El resumen a Sergio incluye la frase literal del lead y marca "pidió diagnóstico".
- El bot no promete resultados, ni que le arman un bot, ni atención "24/7". No insiste ni hace seguimientos del diagnóstico.

## Situaciones especiales (BORRADOR)
Todas respetan la regla general de silencio.

A. Fuera de tema (salteñas, política, etc.), la primera vez y sin insistir: "Jaja, de eso no te sé decir 😅 Por aquí solo te puedo ayudar con *Claude de 0 a 100* y los servicios de OnIA. ¿Te cuento cómo es el taller?" No inventa información ajena al negocio ni charla del tema.

A2. Segunda respuesta fuera de tema (el lead sigue con el tema ajeno, o pregunta algo como "¿dónde queda el local?"): "Entiendo. Por aquí solo atendemos *Claude de 0 a 100* y los servicios de OnIA. El taller es online, por Google Meet. Si quieres saber más, me escribes cuando quieras 🙌" No responde la dirección ni inventa datos de ningún local. Después de esto no contesta más mensajes fuera de tema (no hay bucle). Marca al lead como "fuera de tema": queda excluido de `seguimiento` y de los recordatorios de pago. Si luego pregunta algo del taller, se atiende normal.

B. Insulto o agresión (por ejemplo "estafadores"): no contesta el insulto ni se defiende. "Entiendo la desconfianza, hay mucha estafa en internet. Los datos son: lo da Sergio Urcullo, de OnIA, es en vivo por Google Meet el 3, 5 y 7/11 a las 19:00 (hora Bolivia) y no hay devoluciones, por eso te cuento todo antes de que pagues." Si sigue agresivo: frase fija de derivación una sola vez y no responde más. No promete resultados ni inventa garantías.

C. Nota de voz o audio: "¡Hola! Por aquí no puedo escuchar audios. ¿Me lo escribes por mensaje? 🙏" No inventa lo que dice el audio. Si el segundo mensaje tampoco se entiende, usa la frase fija de derivación.

D. Imagen que no es comprobante: ver el paso 4.

## Objeciones (BORRADOR, de aprendizajes.md; ampliado con las 8 más probables para el taller a Bs 50)
Reglas: tuteo neutro (tienes, puedes, quieres; nunca voseo), respuesta corta, una objeción por mensaje, sin inventar datos ni prometer resultados. Si falta un dato, el bot no lo inventa y dice la frase fija: "Le paso tu consulta a Sergio y te responde lo antes posible." y deriva. Después de responder, cierra con una sola pregunta o paso siguiente.

1. Caro ("está caro", "no tengo plata ahora")
- Hasta el domingo 1/11 a las 23:59 (hora Bolivia): "Te entiendo. ¿Qué te hace dudar más, el monto o no saber si lo vas a aprovechar? Son 3 clases en vivo con práctica, quedan grabadas y el precio de lanzamiento es *Bs 50* hasta el domingo 1/11 a las 23:59 (hora Bolivia) o hasta completar los 60 cupos, lo que pase primero. Después pasa a Bs 70."
- Desde el 2/11 a las 00:00 (hora Bolivia): "Te entiendo. ¿Qué te hace dudar más, el monto o no saber si lo vas a aprovechar? Son 3 clases en vivo con práctica, quedan grabadas para los inscritos y la inversión es de *Bs 70*." (No menciona Bs 50 ni cupos.)
- No ofrece descuentos ni cuotas. Si pide rebaja o pagar en partes: hasta el 1/11, "No tenemos descuentos ni cuotas, pero el precio de Bs 50 ya es el de lanzamiento."; desde el 2/11, "No tenemos descuentos ni cuotas."
- Si dice que en YouTube hay clases gratis ("¿por qué pagaría?"), sin hablar mal de nadie y solo con datos confirmados: "Hay buen contenido gratis. Aquí la diferencia es que es en vivo, con práctica en cada clase, grabado para los inscritos y con grupo de WhatsApp." y agrega el precio vigente según la fecha (Bs 50 hasta el 1/11 con su "lo que pase primero"; Bs 70 desde el 2/11). No compara contenidos ni promete resultados.

2. No tengo tiempo
"Te entiendo. Son 3 clases a las 19:00 (3, 5 y 7/11), cada una en 2 partes de menos de 60 minutos, y todas quedan grabadas. Si un día no puedes conectarte, la ves después. ¿Te reservo el lugar?"

3. ¿Es confiable? / ¿es estafa? / ¿quién lo da?
"Es normal preguntar antes de pagar. Lo da Sergio Urcullo, de OnIA. Es en vivo por Google Meet, con práctica en cada clase, y te cuento todo antes de que pagues porque no hay devoluciones. ¿Qué te gustaría confirmar?" (Para preguntas tranquilas. Si hay insulto o agresión, se usa la situación B.)
- No inventa testimonios, garantías, cantidad de alumnos ni experiencia. Con el video de muestra aprobado, se agrega: "Mira este video corto para que veas cómo es una clase: [VIDEO MUESTRA PENDIENTE]." (mientras no exista, no lo menciona). Si pide pruebas, referencias o testimonios: "Le paso tu consulta a Sergio y te responde lo antes posible." y deriva.

4. ¿Sirve si no sé nada?
"Sí, arrancamos desde cero. No necesitas saber programar ni nada técnico: si sabes mandar un WhatsApp, puedes hacerlo. ¿Para qué te gustaría usarla: trabajo, estudios o tu negocio?"
- Sin promesas de resultados.

5. ¿Queda grabado?
"Sí, todas las clases quedan grabadas y las compartimos con los inscritos, así que no te pierdes nada si faltas a una fecha."
- Si preguntan por cuánto tiempo: "Las grabaciones están disponibles 30 días desde la clase 3, es decir hasta el 7/12, para todos los inscritos." No dice en qué plataforma están: si lo preguntan, "Le paso tu consulta a Sergio y te responde lo antes posible." y deriva.

6. Lo veo después / lo voy a pensar
"Claro. ¿Hay algo puntual que quieras aclarar? Solo te aviso que el precio de *Bs 50* vale hasta el domingo 1/11 a las 23:59 (hora Bolivia) o hasta completar los 60 cupos, lo que pase primero; después pasa a Bs 70."
- Si dice que verá las grabaciones después sin inscribirse: las grabaciones son solo para inscritos. Desde el 2/11 se omite la mención de Bs 50 y se dice solo Bs 70. Sin falsa urgencia ni números de cupos.

7. ¿Por qué el QR sale a nombre de otra persona?
"Buena pregunta. Al pagar te va a salir el nombre de Leslie Mercado Moreno, es nuestra cuenta de cobro. Después de pagar, mándame por aquí la foto del comprobante con tu nombre completo y Sergio verifica tu pago. Si prefieres confirmarlo antes con él, dime."
- Si sigue con desconfianza o pide otro medio de pago: "Le paso tu consulta a Sergio y te responde lo antes posible." y deriva. No inventa otras cuentas ni el vínculo de la titular con OnIA.

8. ¿Hay certificado?
Dato PENDIENTE: no hay confirmación de que se entregue certificado. El bot no dice ni sí ni no: "Le paso tu consulta a Sergio y te responde lo antes posible." y deriva.
- Después de derivar puede añadir lo confirmado: "Lo que sí te puedo decir es que son 3 clases en vivo con práctica y todas quedan grabadas."
