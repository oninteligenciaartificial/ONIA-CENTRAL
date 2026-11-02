# Textos de WhatsApp del taller "Claude de 0 a 100" (BORRADOR)

Borrador para el +591 75414930. No se manda, no se carga en un bot ni se sube a Meta sin el sí de Sergio Urcullo con captura.

Sale de la oferta del 1-nov (`docs/decisiones/2026-11-01-oferta-taller-3-4-5.md`): martes 3, miércoles 4 y jueves 5-nov a las 19:00 (hora de Bolivia), por Google Meet, un solo pago de Bs 50 por las tres clases, con grabaciones. Reemplaza los textos del guion de Grok Bot (`grokbot-workspace/ventas/guion-whatsapp-claude-0-100.md` y `plantillas-whatsapp.md`, en la rama `grokbot/workspace-20261101`), que dicen 3, 5 y 7-nov, Bs 70 desde el 2-nov, 60 cupos y que el QR de Bs 50 no se manda desde el 2-nov.

Qué cambia frente a ese guion:
- Un solo precio, Bs 50 por las tres clases, sin corte por fecha ni cupos. El QR de Yolo Pago se manda siempre.
- Fechas 3, 4 y 5-nov.
- Grabaciones: se entregan el jueves 5-nov, al terminar la última clase, y quedan para siempre. Lo decidió Sergio Urcullo el 2-nov.
- Devolución: sin devolución, salvo que ONIA no dé una clase (se pasa a otra fecha). Decidido el 2-nov y dicho antes de pagar.
- El nombre de la titular de la cuenta del QR no va en Git: va `[TITULAR]`, que completa Sergio Urcullo.

Antes de usar estos textos: el nombre "Claude de 0 a 100" usa una marca ajena en algo pago y está a confirmar con un abogado (`docs/lecciones.md`). Lo decide Sergio Urcullo.

Lo que va [entre corchetes] está pendiente: el texto no se manda hasta completarlo. Se habla de tú, como en el guion de Grok Bot. Frase para derivar: "Le paso tu consulta a Sergio y te responde lo antes posible."

## 1. Saludo

"¡Hola! 👋 Qué bueno que escribiste. *Claude de 0 a 100* son 3 clases en vivo por Google Meet, el martes 3, el miércoles 4 y el jueves 5 de noviembre a las 19:00 (hora Bolivia). Arrancamos desde cero, practicamos con tareas que hoy te llevan mucho tiempo y te quedan las grabaciones. ¿Para qué te gustaría usarla: trabajo, estudios o tu negocio?"

## 2. Precio

"¡Buenísimo! En las clases practicamos con tareas reales del día a día. Es un solo pago de *Bs 50* por las 3 clases, con las grabaciones incluidas. No hay devolución, salvo que nosotros no demos una clase: en ese caso la pasamos a otra fecha. ¿Te reservo el lugar?"

- Si pregunta el precio sin decir para qué la quiere: "Es un solo pago de *Bs 50* por las 3 clases en vivo (3, 4 y 5 de noviembre), con las grabaciones incluidas. No hay devolución, salvo que nosotros no demos una clase: en ese caso la pasamos a otra fecha. ¿Te reservo el lugar?"

## 3. QR

"¡Genial! Te paso el QR de pago de *Bs 50* (Yolo Pago, Banco Ganadero). Cuando pagues, mándame por aquí la foto del comprobante con tu nombre completo. Al pagar te va a salir el nombre de [TITULAR], es nuestra cuenta de cobro."

- Se adjunta la imagen del QR de Yolo Pago. La imagen no va en Git.
- Antes de usarlo: el pago de prueba con ese QR, que hace Sergio Urcullo.

## 4. Comprobante recibido

"¡Gracias! Recibí tu comprobante. Sergio verifica el pago y te confirma lo antes posible. 🙌"

- Si no dijo su nombre: "Para que Sergio verifique tu pago, escríbeme por aquí tu nombre completo."
- La inscripción se confirma solo cuando Sergio Urcullo ve el pago en el banco.

## 5. Confirmación (solo con el pago verificado)

"¡Listo, ya tienes tu lugar en *Claude de 0 a 100*! 🎉 Te sumo al grupo de WhatsApp del taller, donde pasamos el link de Meet antes de cada clase. [FRASE DE CLASE]"

[FRASE DE CLASE], según cuándo se verifica el pago (hora de Bolivia). Cada clase va de 19:00 a 21:00, en dos salas:
- Antes de las 19:00 del 3-nov: "La primera clase es este martes 3 a las 19:00."
- Del 3-nov a las 19:00 al 3-nov a las 21:00: "La clase 1 está en curso: te paso el link para que entres ya. Las grabaciones te las paso el jueves 5, al terminar la última clase."
- Del 3-nov a las 21:00 al 4-nov a las 19:00: "La próxima clase es el miércoles 4 a las 19:00. La que ya pasó te la paso grabada el jueves 5, al terminar la última clase."
- Del 4-nov a las 19:00 al 4-nov a las 21:00: "La clase 2 está en curso: te paso el link para que entres ya. Las grabaciones te las paso el jueves 5, al terminar la última clase."
- Del 4-nov a las 21:00 al 5-nov a las 19:00: "La última clase es el jueves 5 a las 19:00. Las que ya pasaron te las paso grabadas el jueves 5, al terminar la última clase."
- Del 5-nov a las 19:00 al 5-nov a las 21:00: "La clase 3 está en curso: te paso el link para que entres ya. Las grabaciones te las paso hoy, al terminar esta clase."
- Desde el 5-nov a las 21:00: "Las 3 clases ya pasaron: te paso las grabaciones enseguida."

## 6. Recordatorio a quien no pagó

Una sola vez, unas 20 horas después de su último mensaje, y solo si nadie más escribió en ese chat:

- Antes de las 19:00 del 3-nov: "¡Hola! Te escribo para recordarte que todavía puedes sumarte a *Claude de 0 a 100*: arranca el martes 3 a las 19:00 y es un solo pago de Bs 50 por las 3 clases. ¿Te paso el QR?"
- Del 3-nov a las 21:00 al 4-nov a las 19:00, y del 4-nov a las 21:00 al 5-nov a las 19:00: "¡Hola! Todavía puedes sumarte a *Claude de 0 a 100*: es un solo pago de Bs 50 por las 3 clases, y las que ya pasaron te las paso grabadas el jueves 5, al terminar la última clase. ¿Te paso el QR?"
- Mientras hay una clase en curso (19:00 a 21:00 del 3, 4 o 5-nov) y desde las 19:00 del 5-nov: no se manda.

## 7. Preguntas frecuentes

- ¿Tengo que saber algo antes? "No, arrancamos desde cero. Si sabes mandar un WhatsApp, puedes hacerlo."
- ¿Queda grabado? "Sí, el jueves 5, al terminar la última clase, te paso las grabaciones de las 3 y son tuyas para siempre, así que no te pierdes nada si faltas." [Dónde se comparten: pendiente, depende de cómo se graba.]
- ¿Es por clase? "No, es un solo pago de Bs 50 por las 3 clases."
- ¿Hay devolución? "No hay devolución, salvo que nosotros no demos una clase: en ese caso la pasamos a otra fecha."
- ¿Hay descuento o cuotas? "No tenemos descuentos ni cuotas: son Bs 50 por las 3 clases."
- ¿Hay certificado? [Pendiente. Se deriva.]
- ¿Por qué el QR sale a nombre de otra persona? "Buena pregunta. Al pagar te va a salir el nombre de [TITULAR], es nuestra cuenta de cobro. Si prefieres confirmarlo antes con Sergio, dime."

Límites: no prometer resultados ni ingresos, no inventar descuentos ni cupos y no confirmar pagos sin verificarlos.

## 8. Plantillas de Meta (para escribir primero, fuera de las 24 horas)

Solo si Sergio Urcullo decide subirlas: es la decisión abierta D-015. Cada mensaje de plantilla entregado tiene costo en la API de WhatsApp: es gasto.

- `recordatorio_clase` (Utilidad): "Hola {{1}} 👋 Hoy a las 19:00 (hora Bolivia) es la clase {{2}} de "Claude de 0 a 100". Entras por este link de Meet: {{3}}. Si no llegas, el jueves 5, al terminar la última clase, te pasamos las grabaciones."
- `pago_pendiente` (Utilidad): "Hola {{1}}, tu lugar en "Claude de 0 a 100" todavía no está confirmado porque falta el pago. Si ya pagaste, mándame el comprobante por aquí y lo confirmo."
- `seguimiento` (Marketing): "Hola {{1}}, soy de OnIA. Hace poco preguntaste por "Claude de 0 a 100": son 3 clases en vivo el 3, 4 y 5 de noviembre a las 19:00, con grabaciones. ¿Te reservo un lugar? Si no quieres más mensajes, responde BAJA."
