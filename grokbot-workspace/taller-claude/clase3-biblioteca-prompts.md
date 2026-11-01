# Biblioteca de prompts · Claude de 0 a 100
**Clase 3 · 30 prompts por área: ventas, contenido, oficina y estudio (120 en total)**

Hecha a partir de `clase3-material.md` (plantillas con [CORCHETES], flujos encadenados, casos por área) y `clase1-material.md` (la fórmula **Rol + Contexto + Tarea + Formato + Ejemplo**).

---

## Cómo usar esta biblioteca

1. **Copia el prompt** y cambia todo lo que está entre **[CORCHETES]** por tus datos. Los corchetes son huecos, no texto final.
2. **Si un dato no lo sabes, déjalo en corchetes.** Los prompts le piden a Claude que no invente precios, fechas, montos ni nombres.
3. **La primera respuesta es un borrador.** Ajusta en el mismo chat ("más corto", "más cálido", "dame 3 versiones").
4. **Tú revisas antes de enviar o publicar.** Cada prompt trae una línea *Verifica* con lo que debes comprobar tú.
5. **Cambia de tarea, cambia de chat.** Para tareas que repites, usa un Proyecto (clase 2).
6. **Pieza opcional: Ejemplo.** Para que suene como tú, pega al final un mensaje tuyo que te haya gustado: `Ejemplo del estilo que me gusta: "[pega aquí tu mensaje]"`.

**Privacidad:** esta biblioteca no lleva datos reales de nadie. Tampoco pegues en Claude contraseñas, datos bancarios, carnets ni datos personales de clientes: usa [NOMBRE DEL CLIENTE], [MONTO], etc.

**Sobre los ejemplos:** los negocios y datos que aparecen (tienda de ropa en Santa Cruz, salteñería en Sucre, oficina contable en Cochabamba, estudiante en La Paz) son inventados, como en la clase. Reemplázalos por los tuyos.

**Qué NO promete esta biblioteca:** que vayas a vender más ni a ahorrar una cantidad de horas. Son plantillas para empezar mejor; el resultado depende de tu contexto y de tu revisión.

### Índice

- [Ventas (V1–V30)](#ventas)
- [Contenido (C1–C30)](#contenido)
- [Oficina (O1–O30)](#oficina)
- [Estudio (E1–E30)](#estudio)
- [Los 4 pasos para encadenar (idea → borrador → revisión → final)](#flujo-encadenado-de-4-pasos)

---

# VENTAS

*Caso base: tienda de ropa femenina en Santa Cruz que vende por WhatsApp e Instagram. Cámbialo por tu negocio.*

### V1 · Respuesta a "¿precio?"
```
Eres una persona con experiencia en ventas por WhatsApp para negocios pequeños.
Contexto: tengo [TIPO DE NEGOCIO] en [CIUDAD]. Un cliente me escribió solo "¿precio?" sobre [PRODUCTO] que vio publicado. No sabe [TALLA / COLOR / CANTIDAD]. Mi precio es [PRECIO] y hago envíos [ZONA DE ENVÍO].
Tarea: escribe una respuesta que dé el precio y haga 2 preguntas simples para avanzar.
Formato: máximo 4 líneas, tuteo, tono amable, sin presionar.
```
*Verifica:* el precio y la zona de envío.

### V2 · Aviso de retraso de un pedido
```
Eres una persona con experiencia en atención al cliente de negocios pequeños.
Contexto: tengo [TIPO DE NEGOCIO]. El pedido de [NOMBRE DEL CLIENTE] ([PRODUCTO]) se retrasó por [MOTIVO BREVE]. Nuevo plazo: [NUEVA FECHA]. Quiero que siga confiando en mí.
Tarea: escribe el mensaje de WhatsApp para avisar del retraso y pedir disculpas sin excusas largas.
Formato: máximo 5 líneas, tuteo, tono cercano y respetuoso, como mucho 1 emoji. No ofrezcas descuentos ni compensaciones que yo no haya indicado.
```
*Verifica:* que la nueva fecha sea una que de verdad puedas cumplir.

### V3 · Seguimiento a un cliente que no contesta
```
Eres una persona con experiencia en seguimiento de ventas por WhatsApp.
Contexto: hace [NÚMERO] días le envié a [NOMBRE DEL CLIENTE] información sobre [PRODUCTO / SERVICIO] y no ha respondido.
Tarea: escribe un mensaje de seguimiento breve que le facilite responder, sin presionar ni sonar a reclamo.
Formato: máximo 3 líneas, tuteo, una pregunta fácil de contestar con una palabra.
```
*Verifica:* que no repita información que ya enviaste.

### V4 · Cobro amable de un saldo pendiente
```
Eres una persona con experiencia en cobranzas amables para negocios pequeños.
Contexto: [NOMBRE DEL CLIENTE] tiene un saldo pendiente de [MONTO] por [PRODUCTO / SERVICIO], con fecha acordada [FECHA]. Es un buen cliente y quiero cuidar la relación.
Tarea: redacta el mensaje de WhatsApp recordando el saldo y ofreciendo [FORMA DE PAGO].
Formato: máximo 4 líneas, tuteo, tono respetuoso, sin amenazas ni consecuencias que no existan. No inventes montos.
```
*Verifica:* el monto, la fecha y los datos de pago.

### V5 · Confirmación de pedido
```
Eres una persona con experiencia en atención al cliente de negocios pequeños.
Contexto: [NOMBRE DEL CLIENTE] hizo este pedido: [DETALLE DEL PEDIDO]. Entrega: [FECHA Y LUGAR]. Abono recibido: [MONTO]. Saldo: [SALDO] al [MOMENTO DE PAGO].
Tarea: escribe un mensaje de confirmación con el resumen del pedido para que el cliente lo revise.
Formato: lista corta con cada dato en una línea y un cierre pidiendo que confirme que todo está bien. Tuteo.
```
*Verifica:* que cada dato coincida con lo acordado.

### V6 · Respuesta a "está caro"
```
Eres una persona con experiencia en ventas honestas, sin presionar.
Contexto: un cliente me dijo que [PRODUCTO / SERVICIO] está caro. Mi precio es [PRECIO]. Lo que hace valioso mi producto: [2 O 3 MOTIVOS REALES: materiales, tiempo, garantía, etc.].
Tarea: escribe una respuesta empática que explique el valor sin discutir ni rebajar el precio automáticamente, y que le deje una opción si [OPCIÓN MÁS ECONÓMICA, SI EXISTE].
Formato: máximo 5 líneas, tuteo, tono tranquilo. No inventes ventajas que no te di.
```
*Verifica:* que los motivos sean verdad y que no prometas descuentos que no quieres dar.

### V7 · Cambio de pedido de último momento
```
Eres una persona con experiencia en atención al cliente en un negocio de [RUBRO].
Contexto: [NOMBRE DEL CLIENTE] quiere cambiar [QUÉ QUIERE CAMBIAR] de su pedido. Mi política: [POLÍTICA, POR EJEMPLO "cambios hasta 48 horas antes"]. Hoy [PUEDO / NO PUEDO] aceptar el cambio.
Tarea: escribe la respuesta de WhatsApp.
Formato: máximo 4 líneas, tono cálido, tuteo, 1 emoji como máximo, sin sonar a plantilla.
```
*Verifica:* que lo que dices coincida con tu política real.

### V8 · Reclamo por un producto con problema
```
Eres una persona con experiencia en resolver reclamos con calma.
Contexto: [NOMBRE DEL CLIENTE] reclama que [PROBLEMA CON EL PRODUCTO]. Yo puedo ofrecer [SOLUCIÓN: cambio / reparación / devolución / revisión]. No quiero admitir cosas que no sé si pasaron.
Tarea: escribe una respuesta que reconozca el problema, pida los datos que faltan ([DATO QUE NECESITO]) y proponga la solución.
Formato: máximo 6 líneas, tuteo, tono respetuoso. No inventes plazos ni garantías.
```
*Verifica:* la solución y el plazo que ofreces, antes de enviar.

### V9 · Bienvenida a un cliente nuevo
```
Eres una persona con experiencia en atención al cliente de negocios pequeños.
Contexto: [NOMBRE DEL CLIENTE] acaba de hacer su primera compra de [PRODUCTO] en mi [TIPO DE NEGOCIO].
Tarea: escribe un mensaje de bienvenida y agradecimiento que le diga cómo contactarme si tiene dudas.
Formato: máximo 3 líneas, tuteo, cálido, sin ofertas.
```
*Verifica:* que el canal de contacto sea el correcto.

### V10 · Pedir una opinión de forma amable
```
Eres una persona con experiencia en atención al cliente.
Contexto: [NOMBRE DEL CLIENTE] recibió [PRODUCTO] hace [NÚMERO] días. Quiero saber cómo le fue, sin presionarlo a que deje una buena calificación.
Tarea: escribe un mensaje que le pregunte cómo le fue y si hay algo que pueda mejorar.
Formato: máximo 3 líneas, tuteo, una pregunta abierta.
```
*Verifica:* si luego quieres usar su respuesta públicamente, pídele permiso por escrito primero.

### V11 · Recordatorio de entrega o recojo
```
Eres una persona con experiencia en logística de pedidos pequeños.
Contexto: el pedido de [NOMBRE DEL CLIENTE] ([DETALLE]) se entrega/recoge el [FECHA] a las [HORA] en [LUGAR]. Saldo a pagar: [MONTO O "NINGUNO"].
Tarea: redacta un recordatorio claro.
Formato: máximo 4 líneas, tuteo, con fecha, hora, lugar y saldo en líneas separadas.
```
*Verifica:* fecha, hora, lugar y saldo.

### V12 · Ofrecer un producto complementario
```
Eres una persona con experiencia en ventas por WhatsApp, sin presionar.
Contexto: [NOMBRE DEL CLIENTE] compró [PRODUCTO]. Tengo [PRODUCTO COMPLEMENTARIO] que combina bien, a [PRECIO].
Tarea: escribe un mensaje que lo mencione como una sugerencia útil, no como una insistencia.
Formato: máximo 3 líneas, tuteo, que sea fácil decir "no, gracias".
```
*Verifica:* el precio y que el producto realmente esté disponible.

### V13 · Producto sin stock
```
Eres una persona con experiencia en atención al cliente de tiendas pequeñas.
Contexto: un cliente pregunta por [PRODUCTO / TALLA / COLOR] y no lo tengo. Sí tengo [ALTERNATIVA] y podría tenerlo de nuevo el [FECHA O "NO SÉ CUÁNDO"].
Tarea: escribe una respuesta honesta que ofrezca la alternativa o avisarle cuando llegue.
Formato: máximo 4 líneas, tuteo, sin inventar fechas de reposición.
```
*Verifica:* que la alternativa exista y la fecha de reposición sea real.

### V14 · Promoción para clientes anteriores
```
Eres una persona con experiencia en marketing para negocios pequeños en Bolivia.
Contexto: tengo [TIPO DE NEGOCIO] y quiero avisar a clientes anteriores de [PROMOCIÓN: producto, condiciones, vigencia]. No tengo presupuesto para publicidad pagada.
Tarea: escribe un mensaje para difusión por WhatsApp que se sienta personal y no masivo.
Formato: máximo 5 líneas, tuteo, un llamado claro a escribirme, [PRECIO] y [FECHA LÍMITE] entre corchetes si no los di.
```
*Verifica:* envía solo a personas que aceptaron recibir tus mensajes; precios y fechas.

### V15 · Cotización por WhatsApp
```
Eres una persona con experiencia en cotizar servicios por escrito.
Contexto: [NOMBRE DEL CLIENTE] pidió una cotización de [SERVICIO / PRODUCTO]. Lo que incluye mi precio: [LISTA]. Lo que no incluye: [LISTA]. Precio: [PRECIO]. Validez: [DÍAS].
Tarea: redacta la cotización como mensaje claro y ordenado.
Formato: lista corta con lo que incluye, lo que no incluye, precio y validez; cierre invitando a confirmar. Tuteo. No agregues cobros que no te di.
```
*Verifica:* todos los montos y lo que incluye.

### V16 · Respuesta fuera de horario
```
Eres una persona con experiencia en atención al cliente de negocios pequeños.
Contexto: atiendo en [HORARIO]. A veces me escriben fuera de ese horario.
Tarea: escribe un mensaje de respuesta fuera de horario que sea cálido y diga cuándo responderé.
Formato: máximo 3 líneas, tuteo, sin prometer respuestas inmediatas.
```
*Verifica:* el horario real.

### V17 · Cliente indeciso
```
Eres una persona con experiencia en ventas honestas.
Contexto: [NOMBRE DEL CLIENTE] dice que "lo va a pensar" sobre [PRODUCTO / SERVICIO] de [PRECIO]. Su duda probable: [POSIBLE DUDA O "NO SÉ"].
Tarea: escribe un mensaje que ofrezca resolver su duda sin presionar ni inventar urgencia.
Formato: máximo 3 líneas, tuteo. Nada de "solo hoy" ni cupos inventados.
```
*Verifica:* que no haya urgencia falsa en el texto.

### V18 · Agradecimiento después de la compra
```
Eres una persona con experiencia en atención al cliente.
Contexto: [NOMBRE DEL CLIENTE] recibió su pedido de [PRODUCTO] hoy.
Tarea: escribe un agradecimiento breve, con un dato útil de cuidado o uso: [CONSEJO REAL DE USO].
Formato: máximo 3 líneas, tuteo, 1 emoji como máximo.
```
*Verifica:* que el consejo de uso sea correcto.

### V19 · Lista de preguntas frecuentes
```
Eres una persona con experiencia en atención al cliente por WhatsApp.
Contexto: mi negocio es [TIPO DE NEGOCIO]. Los clientes me preguntan seguido: [LISTA DE 5 PREGUNTAS REALES]. Mis respuestas reales son: [RESPUESTAS BREVES].
Tarea: redacta una respuesta corta y amable para cada pregunta, lista para copiar y pegar.
Formato: lista numerada, tuteo, máximo 3 líneas por respuesta. No agregues políticas que no te di.
```
*Verifica:* que cada respuesta diga lo que realmente haces.

### V20 · Cliente molesto
```
Eres una persona con experiencia en calmar situaciones tensas con clientes.
Contexto: [NOMBRE DEL CLIENTE] me escribió molesto por [MOTIVO]. Su mensaje fue: "[PEGA AQUÍ EL MENSAJE, SIN DATOS PRIVADOS]". Parte de la queja [TIENE / NO TIENE] razón.
Tarea: redacta una respuesta que reconozca lo que siente, aclare lo que pasó y proponga [SOLUCIÓN POSIBLE], sin discutir.
Formato: máximo 6 líneas, tuteo, tono sereno.
```
*Verifica:* que no aceptes culpas ni prometas cosas que no puedes cumplir.

### V21 · Reactivar a un cliente que no compra hace tiempo
```
Eres una persona con experiencia en relación con clientes de negocios pequeños.
Contexto: [NOMBRE DEL CLIENTE] compró [PRODUCTO] hace [TIEMPO] y no ha vuelto. Hay una novedad real: [NOVEDAD].
Tarea: escribe un mensaje breve y personal que cuente la novedad sin sonar a publicidad masiva.
Formato: máximo 3 líneas, tuteo, una pregunta al final.
```
*Verifica:* que la novedad sea real.

### V22 · Descripción de producto para catálogo
```
Eres una persona con experiencia en redactar descripciones de producto honestas.
Contexto: vendo [PRODUCTO]. Características reales: [LISTA]. Precio: [PRECIO]. Disponibilidad: [TALLAS / COLORES / CANTIDAD].
Tarea: escribe una descripción para el catálogo de WhatsApp o Instagram.
Formato: 1 título y 3 líneas como máximo, lenguaje natural, sin frases exageradas. No agregues características que no te di.
```
*Verifica:* medidas, materiales y precio.

### V23 · Política de cambios en palabras simples
```
Eres una persona que explica reglas de negocio con palabras simples.
Contexto: mi política de cambios y devoluciones es: [ESCRIBE TU POLÍTICA TAL CUAL ES].
Tarea: redáctala como un mensaje corto y amable que pueda enviar a los clientes.
Formato: lista de 3 a 5 puntos, tuteo. No agregues reglas que no escribí.
```
*Verifica:* que diga exactamente lo que aplicas.

### V24 · Mensaje a un proveedor por un retraso
```
Eres una persona con experiencia en comunicación con proveedores.
Contexto: el proveedor [NOMBRE O EMPRESA] debía entregarme [PRODUCTO] el [FECHA] y no llegó. Esto me afecta porque [MOTIVO].
Tarea: redacta un mensaje firme pero respetuoso pidiendo una fecha concreta de entrega.
Formato: máximo 5 líneas, trato de [TÚ / USTED], sin amenazas.
```
*Verifica:* fechas y lo que reclamas.

### V25 · Pedido por mayor
```
Eres una persona con experiencia en ventas por mayor para negocios pequeños.
Contexto: [NOMBRE DEL CLIENTE] pregunta por [CANTIDAD] unidades de [PRODUCTO]. Mi condición para pedidos por mayor: [CONDICIONES REALES O "NO TENGO"].
Tarea: escribe una respuesta que explique las condiciones y pida los datos que necesito para cotizar ([DATOS]).
Formato: máximo 5 líneas, tuteo, sin inventar descuentos.
```
*Verifica:* los precios y condiciones antes de enviar.

### V26 · Cierre de venta con una pregunta
```
Eres una persona con experiencia en ventas por WhatsApp, sin presionar.
Contexto: [NOMBRE DEL CLIENTE] mostró interés en [PRODUCTO] de [PRECIO]. Ya resolví sus dudas sobre [DUDAS].
Tarea: escribe el mensaje de cierre que proponga el siguiente paso concreto (reservar, pagar abono, coordinar entrega).
Formato: máximo 3 líneas, tuteo, una sola pregunta.
```
*Verifica:* los pasos de pago y entrega.

### V27 · Rechazar un descuento con amabilidad
```
Eres una persona con experiencia en negociar con respeto.
Contexto: [NOMBRE DEL CLIENTE] pide un descuento de [PORCENTAJE O MONTO] en [PRODUCTO]. No puedo darlo, pero sí puedo ofrecer [ALTERNATIVA, O "NADA"].
Tarea: escribe una respuesta que explique con honestidad que el precio se mantiene.
Formato: máximo 4 líneas, tuteo, sin excusas largas.
```
*Verifica:* que lo que ofreces como alternativa sí puedas darlo.

### V28 · Resumen de un pedido a medida
```
Eres una persona con experiencia en talleres y pedidos a medida.
Contexto: te pego los mensajes sueltos de WhatsApp de un cliente (sin datos privados). Necesito ordenar el pedido.
Tarea: resume el pedido en una ficha con: producto, medidas, materiales, fecha de entrega, abono, saldo y dudas pendientes. Si un dato no aparece, escribe "FALTA" en vez de inventarlo.
Formato: lista, una línea por dato.
MENSAJES:
[PEGA AQUÍ LOS MENSAJES]
```
*Verifica:* medidas, fechas y montos contra los mensajes originales.

### V29 · Mejorar un mensaje de venta mío
```
Eres una persona con experiencia en ventas por WhatsApp.
Contexto: escribí este mensaje para [TIPO DE CLIENTE] sobre [PRODUCTO]. No me convence.
Tarea: dime (1) qué frases suenan genéricas, (2) qué falta, (3) qué sobra. Después, dame una versión mejorada sin cambiar los datos.
Formato: primero la lista de problemas, luego la versión nueva.
MI MENSAJE:
[PEGA AQUÍ TU MENSAJE]
```
*Verifica:* que la versión nueva no haya cambiado precios ni condiciones.

### V30 · Plan semanal de seguimiento
```
Eres una persona con experiencia en organizar el seguimiento de clientes.
Contexto: esta semana tengo estos clientes pendientes (sin datos privados): [LISTA: nombre o inicial, qué consultó, hace cuántos días].
Tarea: ordena la lista por prioridad y sugiere qué tipo de mensaje enviar a cada uno (seguimiento, recordatorio, cierre).
Formato: tabla con tres columnas: cliente, prioridad, mensaje sugerido. No escribas los mensajes todavía.
```
*Verifica:* que la prioridad tenga sentido para tu negocio; tú decides.

---

# CONTENIDO

*Caso base: salteñería artesanal en Sucre que publica en Facebook y estados de WhatsApp.*

### C1 · Cinco ideas de enfoque para una publicación
```
Eres una persona con experiencia en marketing para negocios pequeños en Bolivia.
Contexto: tengo [TIPO DE NEGOCIO] en [CIUDAD]. Quiero promocionar [PRODUCTO / PROMOCIÓN] este fin de semana. Publico en [REDES]. No tengo presupuesto para publicidad pagada.
Tarea: dame 5 ideas distintas de enfoque, una línea cada una, sin escribir el texto todavía.
Formato: lista numerada.
```
*Verifica:* elige tú la idea que mejor suena a tu negocio.

### C2 · Borrador de publicación para Facebook
```
Me quedo con la idea número [N] / con esta idea: [IDEA]. Escribe un borrador de publicación para Facebook: máximo 6 líneas, tono [CERCANO Y CÁLIDO], tuteo, 2 emojis como máximo y un cierre que invite a pedir por WhatsApp. No inventes precios ni horarios: déjalos como [PRECIO] y [HORARIO].
```
*Verifica:* precios, horarios y promesas.

### C3 · Revisión crítica de un borrador
```
Revisa el borrador como un dueño de negocio exigente. Dime: 1) qué frases suenan genéricas o a plantilla, 2) qué dato falta o podría generar dudas, 3) qué sobra. No reescribas todavía; solo la lista de problemas.
```
*Verifica:* acepta o rechaza cada observación.

### C4 · Versión final para Facebook y estado de WhatsApp
```
Escribe la versión final aplicando esas correcciones. Entrégame (a) el texto para Facebook y (b) una versión de 3 líneas para estado de WhatsApp. Deja entre corchetes lo que yo deba completar.
```
*Verifica:* completa los corchetes tú.

### C5 · Guion de video corto (20 segundos)
```
Eres una persona que escribe guiones cortos para redes de negocios.
Contexto: mi [TIPO DE NEGOCIO] quiere mostrar [QUÉ QUIERO MOSTRAR].
Tarea: escribe el guion de un video de 20 segundos con 3 escenas.
Formato: tabla con tres columnas: escena, lo que se ve, lo que digo. Lenguaje natural, sin frases de publicidad exagerada.
```
*Verifica:* que lo que "se ve" lo puedas filmar de verdad.

### C6 · Ideas para una semana de publicaciones
```
Eres una persona con experiencia en contenido para negocios pequeños.
Contexto: tengo [TIPO DE NEGOCIO] en [CIUDAD]. Publico en [REDES] unas [NÚMERO] veces por semana. Mis productos principales: [LISTA]. Mi cliente típico: [DESCRIPCIÓN].
Tarea: propón 7 ideas de publicación para una semana, variando entre producto, proceso, preguntas al público y avisos.
Formato: tabla con día, idea en una línea y tipo de publicación. Sin escribir los textos todavía.
```
*Verifica:* elimina lo que no puedas producir esta semana.

### C7 · Un mismo mensaje en tres formatos
```
Eres una persona con experiencia en contenido para redes.
Contexto: este es el mensaje base que quiero comunicar: [MENSAJE BASE].
Tarea: adáptalo a (a) publicación de Facebook, (b) estado de WhatsApp de 3 líneas, (c) guion de video de 15 segundos.
Formato: tres bloques separados con título. Tuteo. No agregues datos que no estén en el mensaje base.
```
*Verifica:* que los tres digan lo mismo.

### C8 · Ganchos para el inicio de un video
```
Eres una persona con experiencia en videos cortos para negocios pequeños.
Contexto: mi video trata de [TEMA]. Mi público: [PÚBLICO].
Tarea: escribe 8 frases distintas para los primeros 3 segundos del video, honestas, sin exagerar ni prometer lo que el video no cumple.
Formato: lista numerada, una frase por línea.
```
*Verifica:* que el video cumpla lo que promete el gancho.

### C9 · Historia del negocio
```
Eres una persona con experiencia en redactar historias de negocios pequeños.
Contexto: te cuento mi historia real: [CUÉNTALA CON TUS PALABRAS: cómo empezó, por qué, qué te importa].
Tarea: conviértela en un texto breve para mi página o mi perfil. No agregues hechos, fechas ni cifras que yo no haya dicho.
Formato: 2 párrafos cortos, primera persona, tono cercano.
```
*Verifica:* que todo lo que dice sea verdad.

### C10 · Publicación de un producto
```
Eres una persona con experiencia en redactar publicaciones honestas de producto.
Contexto: quiero publicar [PRODUCTO]. Datos reales: [CARACTERÍSTICAS, PRECIO, DISPONIBILIDAD].
Tarea: escribe la publicación.
Formato: máximo 5 líneas, tuteo, 2 emojis como máximo, cierre para pedir por [CANAL]. Solo usa los datos que te di.
```
*Verifica:* precio y disponibilidad.

### C11 · Respuesta a un comentario público
```
Eres una persona con experiencia en atención al cliente en redes sociales.
Contexto: en mi publicación de [PRODUCTO / TEMA] alguien comentó: "[COMENTARIO, SIN DATOS PRIVADOS]". Quiero responder en público de forma amable.
Tarea: escribe 2 opciones de respuesta.
Formato: máximo 2 líneas cada una, tuteo. Si el comentario es un reclamo, invita a continuar por privado.
```
*Verifica:* que no reveles datos de nadie en público.

### C12 · Carrusel de 5 láminas
```
Eres una persona con experiencia en contenido educativo para redes.
Contexto: mi negocio es [TIPO DE NEGOCIO]. Quiero enseñar [TEMA ÚTIL PARA MI CLIENTE].
Tarea: propón el texto de un carrusel de 5 láminas: portada, 3 láminas de contenido y cierre con invitación a escribirme.
Formato: lista con "Lámina 1: ...", máximo 15 palabras por lámina. No inventes datos técnicos; si no estás seguro de algo, dilo.
```
*Verifica:* los datos técnicos o consejos antes de publicar.

### C13 · Publicación de temporada o fecha especial
```
Eres una persona con experiencia en marketing para negocios pequeños en Bolivia.
Contexto: se acerca [FECHA O TEMPORADA] y mi [TIPO DE NEGOCIO] ofrece [QUÉ OFREZCO]. Pedidos hasta [FECHA LÍMITE].
Tarea: dame 3 versiones de publicación con enfoques distintos.
Formato: máximo 5 líneas cada una, tuteo, sin inventar precios (usa [PRECIO]).
```
*Verifica:* fecha límite y precios.

### C14 · Biografía del perfil (Instagram o Facebook)
```
Eres una persona con experiencia en perfiles de negocios en redes.
Contexto: mi negocio es [TIPO DE NEGOCIO] en [CIUDAD]. Lo que me diferencia: [DIFERENCIA REAL]. Cómo contactarme: [CANAL].
Tarea: escribe 4 opciones de biografía.
Formato: máximo 150 caracteres cada una, claras, sin exageraciones.
```
*Verifica:* que el contacto y la ciudad sean correctos.

### C15 · Nombres para una promoción
```
Eres una persona creativa con experiencia en negocios pequeños.
Contexto: voy a lanzar [PROMOCIÓN] de [PRODUCTO] para [PÚBLICO].
Tarea: propón 10 nombres cortos y simples para la promoción.
Formato: lista numerada. Sin palabras en inglés ni exageraciones.
```
*Verifica:* busca que el nombre no esté ya usado por otro negocio de tu zona.

### C16 · Publicación "detrás de cámaras"
```
Eres una persona con experiencia en contenido cercano para negocios pequeños.
Contexto: quiero mostrar cómo [PROCESO REAL DE MI NEGOCIO]. Esto es lo que pasa paso a paso: [DESCRIPCIÓN].
Tarea: escribe un texto corto para acompañar las fotos o el video.
Formato: máximo 5 líneas, tuteo, sin exagerar. No inventes pasos que no te conté.
```
*Verifica:* que el proceso descrito sea real.

### C17 · Publicación educativa
```
Eres una persona que explica temas simples a clientes de negocios pequeños.
Contexto: quiero publicar un consejo útil sobre [TEMA RELACIONADO CON MI NEGOCIO]. Lo que yo sé que es correcto: [PUNTOS].
Tarea: arma una publicación con un título y 3 puntos.
Formato: lenguaje simple, tuteo. Usa solo la información que te di; si crees que falta algo, dímelo aparte.
```
*Verifica:* la exactitud del consejo, sobre todo si es de salud, legal o seguridad.

### C18 · Pedir permiso a un cliente para compartir su comentario
```
Eres una persona con experiencia en atención al cliente.
Contexto: [NOMBRE DEL CLIENTE] me escribió este comentario sobre mi negocio: "[COMENTARIO]". Quiero preguntarle si puedo compartirlo.
Tarea: redacta un mensaje que pida permiso y le explique dónde lo usaría ([DÓNDE]) y si iría con nombre completo, solo nombre o iniciales. Dile que puede decir que no.
Formato: máximo 5 líneas, tuteo, sin presionar.
```
*Verifica:* no publiques nada sin su respuesta por escrito, y deja su texto tal cual.

### C19 · Aviso de horario, feriado o cierre
```
Eres una persona con experiencia en comunicación con clientes.
Contexto: mi [TIPO DE NEGOCIO] cambia su horario: [DETALLE DEL CAMBIO Y FECHAS].
Tarea: escribe un aviso breve para publicar y para el estado de WhatsApp.
Formato: máximo 3 líneas cada uno, tuteo, con fechas claras.
```
*Verifica:* fechas y horarios.

### C20 · Reducir un texto largo
```
Eres una persona con experiencia en editar textos para redes.
Contexto: este texto es muy largo para publicar. Mi público lee en el celular.
Tarea: redúcelo a [NÚMERO] líneas sin cambiar el mensaje ni agregar datos.
Formato: texto listo para publicar, tuteo.
TEXTO:
[PEGA AQUÍ TU TEXTO]
```
*Verifica:* que no se haya perdido un dato importante.

### C21 · Cambiar el tono de un texto
```
Eres una persona con experiencia en comunicación para negocios.
Contexto: tengo este texto escrito en un tono [TONO ACTUAL]. Necesito que suene [TONO NUEVO: más cercano / más formal / más alegre].
Tarea: reescríbelo cambiando solo el tono, sin cambiar datos.
Formato: dame la nueva versión y, aparte, una línea con lo que cambiaste.
TEXTO:
[PEGA AQUÍ TU TEXTO]
```
*Verifica:* que precios y fechas sigan igual.

### C22 · Guion de reel con 3 escenas
```
Eres una persona que escribe guiones para videos cortos de negocios pequeños.
Contexto: quiero mostrar [PRODUCTO / PROCESO] de mi [TIPO DE NEGOCIO]. Dispongo de [LO QUE PUEDO GRABAR: celular, mesa, luz del día].
Tarea: escribe un guion de 3 escenas con lo que se ve, lo que digo y una frase final para pedir por [CANAL].
Formato: tabla de 3 filas. Lenguaje natural.
```
*Verifica:* que sea grabable con lo que tienes.

### C23 · Respuestas a preguntas frecuentes para publicar
```
Eres una persona con experiencia en contenido útil para clientes.
Contexto: mis clientes preguntan seguido: [3 PREGUNTAS REALES]. Mis respuestas reales: [RESPUESTAS].
Tarea: convierte cada pregunta en una publicación breve de "¿Sabías que...?" o "Pregunta frecuente".
Formato: 3 textos de máximo 4 líneas, tuteo. Solo usa mis respuestas.
```
*Verifica:* que respondan lo que realmente haces.

### C24 · Lanzamiento de un producto nuevo
```
Eres una persona con experiencia en lanzamientos de negocios pequeños.
Contexto: voy a presentar [PRODUCTO NUEVO]. Datos reales: [CARACTERÍSTICAS, PRECIO, DESDE CUÁNDO, DÓNDE COMPRAR].
Tarea: escribe una secuencia de 3 publicaciones: anuncio, detalle del producto y recordatorio.
Formato: máximo 5 líneas cada una, tuteo, sin exagerar. Usa solo los datos que te di.
```
*Verifica:* todos los datos y la fecha de salida.

### C25 · Publicación de agradecimiento
```
Eres una persona con experiencia en comunicación cercana para negocios.
Contexto: quiero agradecer a mis clientes por [MOTIVO REAL: una temporada, un aniversario, un pedido grande]. No quiero decir cifras ni logros que no tenga.
Tarea: escribe 2 versiones.
Formato: máximo 4 líneas cada una, tuteo, sincero, sin exagerar.
```
*Verifica:* que no aparezcan cifras o logros que no sean reales.

### C26 · Corrector de ortografía y claridad
```
Eres una persona con experiencia en corrección de textos en español de Bolivia.
Contexto: este texto lo voy a publicar en [RED SOCIAL].
Tarea: corrige ortografía y puntuación y señala las frases confusas. No cambies mi estilo ni agregues contenido.
Formato: primero el texto corregido, luego una lista de los cambios.
TEXTO:
[PEGA AQUÍ TU TEXTO]
```
*Verifica:* lee el resultado completo antes de publicar.

### C27 · Ideas de fotos para mostrar el producto
```
Eres una persona con experiencia en fotografía simple con celular para negocios.
Contexto: vendo [PRODUCTO]. Tengo [LUGAR / LUZ / FONDOS DISPONIBLES].
Tarea: dame 8 ideas de fotos que pueda tomar solo con mi celular.
Formato: lista numerada, una línea cada una, sin equipo especial.
```
*Verifica:* elige las que puedas hacer hoy.

### C28 · Cinco cierres distintos para una publicación
```
Eres una persona con experiencia en redactar llamados a la acción sin presión.
Contexto: mi publicación es sobre [TEMA] y quiero que el cliente [ACCIÓN: escribirme, reservar, visitarme].
Tarea: escribe 5 frases de cierre distintas.
Formato: lista numerada, máximo 12 palabras cada una, sin urgencia falsa.
```
*Verifica:* que no incluya cupos o plazos inventados.

### C29 · Publicación de pregunta para el público
```
Eres una persona con experiencia en generar conversación en redes para negocios pequeños.
Contexto: mi [TIPO DE NEGOCIO] quiere saber [QUÉ QUIERO SABER DE MIS CLIENTES, por ejemplo "qué sabor prefieren"].
Tarea: escribe 3 publicaciones tipo pregunta, fáciles de contestar con una palabra o un emoji.
Formato: máximo 3 líneas cada una, tuteo.
```
*Verifica:* que luego respondas a los comentarios.

### C30 · Resumen de qué publicaciones me funcionaron
```
Eres una persona con experiencia en analizar contenido de redes con datos simples.
Contexto: estos son los datos reales de mis últimas publicaciones, que yo copié de mis estadísticas: [LISTA: tema, fecha, alcance, reacciones, mensajes recibidos].
Tarea: dime qué patrones ves y qué probar la próxima semana. Si los datos no alcanzan para sacar una conclusión, dilo.
Formato: máximo 5 puntos. No inventes cifras ni causas.
```
*Verifica:* son pistas, no certezas; con pocos datos, tómalo con cautela.

---

# OFICINA

*Caso base: oficina contable pequeña en Cochabamba que responde correos y arma informes. Para clientes externos se usa "usted"; ajusta el trato según tu caso.*

### O1 · Correo pidiendo un documento faltante
```
Eres una persona con experiencia en comunicación profesional para estudios contables.
Contexto: trabajo en [TIPO DE OFICINA] en [CIUDAD]. Un cliente nos envió su documentación incompleta y falta [DOCUMENTO] para presentar el trámite antes del [FECHA LÍMITE].
Tarea: redacta un correo amable pero claro pidiendo el documento y explicando qué pasa si no llega a tiempo, sin inventar consecuencias legales ni montos.
Formato: asunto claro, 3 párrafos cortos, trato formal de "usted" (sin tuteo), cierre cordial.
```
*Verifica:* la fecha límite y las consecuencias reales con tu criterio profesional.

### O2 · Resumen de reunión
```
Eres una persona con experiencia en redactar resúmenes de reunión.
Contexto: te pego mis notas sueltas de una reunión (sin datos privados). Participantes: [NOMBRES O CARGOS].
Tarea: ordénalas en: decisiones tomadas, tareas con responsable y fecha, y temas pendientes. Si falta un responsable o una fecha, escribe "POR DEFINIR" en vez de inventarlo.
Formato: tres listas con título.
NOTAS:
[PEGA AQUÍ TUS NOTAS]
```
*Verifica:* responsables y fechas contra lo que realmente se acordó.

### O3 · Informe semanal a partir de una lista
```
Eres una persona con experiencia en informes de gestión para oficinas pequeñas.
Contexto: te pego la lista de lo que hice esta semana (sin datos privados de clientes).
Tarea: conviértela en un informe breve para [DESTINATARIO] con: lo que se hizo, lo que quedó pendiente y lo que necesito para la próxima semana.
Formato: tres secciones con viñetas, máximo una página. No inventes cifras ni logros.
LISTA:
[PEGA AQUÍ TU LISTA]
```
*Verifica:* números, fechas y avances.

### O4 · Pedir una cotización por correo
```
Eres un asistente administrativo con experiencia en compras de oficina.
Contexto: necesito cotizar [PRODUCTO / SERVICIO] en [CANTIDAD], para el [FECHA]. Es el primer contacto con [PROVEEDOR].
Tarea: redacta el correo de solicitud de cotización.
Formato: asunto claro, saludo formal, 3 párrafos cortos como máximo, lista con los datos del pedido y cierre pidiendo respuesta antes del [FECHA].
```
*Verifica:* cantidades, fechas y datos de contacto.

### O5 · Responder un reclamo formal de un cliente
```
Eres una persona con experiencia en comunicación formal con clientes.
Contexto: [CLIENTE] reclamó por [MOTIVO]. Lo que sé que pasó: [HECHOS REALES]. Lo que podemos ofrecer: [SOLUCIÓN].
Tarea: redacta una respuesta formal que reconozca el reclamo, explique los hechos y ofrezca la solución.
Formato: asunto, 3 párrafos cortos, trato de "usted". No admitas responsabilidades ni inventes plazos que no te di.
```
*Verifica:* revisa la respuesta con quien corresponda antes de enviarla.

### O6 · Recordatorio de pago a un cliente
```
Eres una persona con experiencia en cobranzas formales y amables.
Contexto: [CLIENTE] tiene pendiente [CONCEPTO] por [MONTO], con vencimiento el [FECHA]. Datos de pago: [DATOS].
Tarea: escribe un correo recordatorio cordial.
Formato: asunto claro, 2 párrafos cortos, trato de "usted", sin amenazas. No inventes recargos ni intereses.
```
*Verifica:* concepto, monto y datos de pago.

### O7 · Agenda para una reunión
```
Eres una persona con experiencia en organizar reuniones de trabajo.
Contexto: reunión con [PARTICIPANTES] el [FECHA] a las [HORA], duración [MINUTOS]. Temas: [LISTA].
Tarea: arma una agenda con tiempo para cada tema y el resultado esperado de cada uno.
Formato: tabla con tema, minutos y resultado esperado. Que la suma de minutos no pase la duración.
```
*Verifica:* que los tiempos sean realistas.

### O8 · Acta de una reunión
```
Eres una persona con experiencia en redactar actas simples.
Contexto: estas son mis notas de la reunión del [FECHA] con [PARTICIPANTES].
Tarea: redacta un acta con fecha, asistentes, temas tratados, acuerdos y tareas. No agregues nada que no esté en las notas.
Formato: título, y secciones con viñetas.
NOTAS:
[PEGA AQUÍ TUS NOTAS]
```
*Verifica:* que los acuerdos coincidan con lo que se dijo.

### O9 · Resumen de un documento largo
```
Eres una persona que explica temas administrativos con palabras simples a alguien que no es especialista.
Contexto: recibí este documento y no tengo tiempo de leerlo todo.
Tarea: resume el texto y dime qué debo hacer yo.
Formato: 1) resumen en 3 líneas, 2) lista de lo que tengo que hacer con fechas si aparecen, 3) "Dudas": lo que no quedó claro. Si algo no está en el texto, no lo inventes.
TEXTO:
[PEGA AQUÍ EL TEXTO, SIN DATOS CONFIDENCIALES]
```
*Verifica:* fechas, montos y obligaciones contra el original.

### O10 · Correo de seguimiento
```
Eres una persona con experiencia en comunicación profesional.
Contexto: el [FECHA] le escribí a [PERSONA / EMPRESA] sobre [ASUNTO] y no he recibido respuesta.
Tarea: redacta un correo de seguimiento cordial que retome el tema y pida una respuesta para el [FECHA].
Formato: asunto que cite el anterior, 2 párrafos cortos, trato de [USTED / TÚ].
```
*Verifica:* que la fecha de respuesta sea razonable.

### O11 · Rechazar una solicitud con cortesía
```
Eres una persona con experiencia en comunicación profesional.
Contexto: [PERSONA / EMPRESA] me pidió [SOLICITUD]. No puedo aceptarla por [MOTIVO REAL]. Podría ofrecer [ALTERNATIVA O "NINGUNA"].
Tarea: redacta una respuesta cortés y clara.
Formato: 2 párrafos cortos, trato de [USTED / TÚ], sin disculpas excesivas.
```
*Verifica:* que el motivo sea verdad.

### O12 · Solicitar una cita o reunión
```
Eres una persona con experiencia en comunicación profesional.
Contexto: quiero reunirme con [PERSONA / CARGO] para tratar [ASUNTO]. Mi disponibilidad: [HORARIOS].
Tarea: escribe el correo de solicitud de reunión.
Formato: asunto claro, 2 párrafos, propuesta de 2 o 3 horarios, trato de "usted".
```
*Verifica:* tus horarios disponibles.

### O13 · Pedir una ampliación de plazo
```
Eres una persona con experiencia en comunicación profesional.
Contexto: debo entregar [ENTREGABLE] el [FECHA ORIGINAL]. Necesito más tiempo por [MOTIVO REAL]. Puedo entregarlo el [NUEVA FECHA].
Tarea: redacta el correo pidiendo la ampliación de plazo.
Formato: asunto claro, 2 párrafos cortos, trato de "usted", sin excusas largas.
```
*Verifica:* que la nueva fecha sea cumplible.

### O14 · Correo a un proveedor
```
Eres una persona con experiencia en comunicación con proveedores.
Contexto: necesito pedir a [PROVEEDOR] que [ACCIÓN: corregir una factura, confirmar una entrega, enviar un documento]. Detalles: [DATOS].
Tarea: redacta el correo.
Formato: asunto claro, 2 o 3 párrafos cortos, trato de "usted". No inventes datos de la factura ni del pedido.
```
*Verifica:* números de factura, fechas y montos.

### O15 · Notas sueltas convertidas en lista de tareas
```
Eres una persona con experiencia en organización de trabajo.
Contexto: tengo estas notas desordenadas de mi día.
Tarea: conviértelas en una lista de tareas con prioridad (alta, media, baja) y, si aparece, la fecha. Si algo no queda claro, ponlo en una lista aparte de "Dudas".
Formato: tabla con tarea, prioridad y fecha.
NOTAS:
[PEGA AQUÍ TUS NOTAS]
```
*Verifica:* la prioridad la decides tú.

### O16 · Lista de verificación de un procedimiento
```
Eres una persona con experiencia en documentar procedimientos de oficina.
Contexto: en mi oficina hacemos [PROCEDIMIENTO] así: [DESCRIPCIÓN DE LOS PASOS COMO LOS HACES].
Tarea: conviértelo en una lista de verificación con casillas.
Formato: lista numerada con "☐" por paso. No agregues pasos que no te conté; si falta algo evidente, sugiérelo aparte.
```
*Verifica:* que cada paso refleje cómo se hace de verdad.

### O17 · Mensaje de ausencia por correo
```
Eres una persona con experiencia en comunicación profesional.
Contexto: estaré ausente del [FECHA] al [FECHA]. Para asuntos urgentes, contactar a [PERSONA / CONTACTO].
Tarea: escribe un mensaje automático de ausencia.
Formato: máximo 4 líneas, trato de "usted", cordial.
```
*Verifica:* fechas y contacto.

### O18 · Explicar un trámite sencillo a un cliente
```
Eres una persona que explica trámites con palabras simples.
Contexto: un cliente pregunta cómo hacer [TRÁMITE]. Esto es lo que yo sé que se hace: [PASOS REALES].
Tarea: explícalo para alguien que no sabe del tema.
Formato: lista de pasos numerados, máximo 6, y una línea final sobre qué documentos llevar. Usa solo lo que te di; si crees que falta algo, dilo aparte.
```
*Verifica:* los requisitos vigentes con la fuente oficial, porque cambian.

### O19 · Mejorar la redacción de un correo mío
```
Eres una persona con experiencia en redacción profesional.
Contexto: escribí este correo para [DESTINATARIO] y quiero que sea más claro y cordial.
Tarea: dime qué frases confunden o suenan secas y dame una versión mejorada sin cambiar los datos.
Formato: primero la lista de observaciones, luego la nueva versión.
CORREO:
[PEGA AQUÍ TU CORREO]
```
*Verifica:* que fechas, montos y nombres sigan igual.

### O20 · Pasar un texto a tono formal
```
Eres una persona con experiencia en comunicación formal.
Contexto: tengo este mensaje escrito de forma informal y debo enviarlo a [DESTINATARIO FORMAL].
Tarea: reescríbelo con tono formal y trato de "usted", sin cambiar los datos.
Formato: texto listo para enviar, con asunto.
MENSAJE:
[PEGA AQUÍ TU MENSAJE]
```
*Verifica:* nombres y datos.

### O21 · Resumen de una cadena de correos
```
Eres una persona con experiencia en sintetizar conversaciones de trabajo.
Contexto: te pego una cadena de correos (sin datos confidenciales) y necesito ponerme al día.
Tarea: resume en 5 líneas qué se discutió, qué se decidió y qué sigue pendiente, y quién debe hacer qué. Si algo no está claro, ponlo en "Dudas".
Formato: tres títulos con viñetas.
CORREOS:
[PEGA AQUÍ LA CADENA]
```
*Verifica:* decisiones y responsables contra los correos originales.

### O22 · Preguntas para una reunión con un cliente
```
Eres una persona con experiencia en reuniones iniciales con clientes.
Contexto: me voy a reunir con [TIPO DE CLIENTE] que necesita [SERVICIO]. Lo que ya sé: [DATOS].
Tarea: propón 10 preguntas para entender su necesidad y lo que debo pedirle.
Formato: lista numerada, ordenada de lo general a lo específico.
```
*Verifica:* elige las que apliquen a tu caso.

### O23 · Comunicado interno
```
Eres una persona con experiencia en comunicación interna de oficinas pequeñas.
Contexto: debo avisar al equipo de [CAMBIO O AVISO]. Datos reales: [DETALLES, FECHAS].
Tarea: redacta un comunicado breve y claro.
Formato: asunto, 3 párrafos cortos, tono cordial, trato de [TÚ / USTED]. No inventes motivos ni fechas.
```
*Verifica:* todos los datos antes de enviar.

### O24 · Tabla de pendientes por cliente
```
Eres una persona con experiencia en organizar trámites de clientes.
Contexto: te pego una lista de lo pendiente por cliente (usa iniciales o códigos, sin datos privados).
Tarea: organízala en una tabla con cliente, documento o trámite pendiente, fecha límite y estado. Si falta la fecha, escribe "POR DEFINIR".
Formato: tabla.
LISTA:
[PEGA AQUÍ TU LISTA]
```
*Verifica:* fechas y estados contra tu registro.

### O25 · Procedimiento paso a paso para un nuevo integrante
```
Eres una persona con experiencia en capacitar personal nuevo.
Contexto: debo explicarle a alguien nuevo cómo hacer [TAREA]. Yo la hago así: [DESCRIPCIÓN].
Tarea: escribe una guía paso a paso para una persona sin experiencia.
Formato: pasos numerados, con "qué hacer" y "qué revisar". No inventes pasos.
```
*Verifica:* que la guía coincida con tu forma real de trabajo.

### O26 · Correo de bienvenida a un cliente nuevo
```
Eres una persona con experiencia en comunicación profesional.
Contexto: [CLIENTE] contrató nuestro servicio de [SERVICIO]. El primer paso es [PRIMER PASO]. Necesitamos de su parte: [DOCUMENTOS O DATOS].
Tarea: redacta un correo de bienvenida.
Formato: asunto, 3 párrafos cortos, lista de lo que debe enviarnos, trato de "usted".
```
*Verifica:* la lista de documentos y los plazos.

### O27 · Correo de cierre de un trámite
```
Eres una persona con experiencia en comunicación profesional.
Contexto: terminamos [TRÁMITE / SERVICIO] para [CLIENTE]. Se entrega: [DOCUMENTOS O RESULTADO]. Lo que debe hacer él o ella a continuación: [PASOS].
Tarea: redacta un correo de cierre.
Formato: asunto, 3 párrafos cortos, trato de "usted". No inventes plazos.
```
*Verifica:* lo que se entrega y los próximos pasos.

### O28 · Carta formal sencilla
```
Eres una persona con experiencia en redactar cartas formales.
Contexto: necesito una carta dirigida a [DESTINATARIO] para [PROPÓSITO]. Datos reales: [DATOS].
Tarea: redacta la carta.
Formato: encabezado con [CIUDAD Y FECHA], destinatario, asunto, cuerpo en 3 párrafos, despedida y [NOMBRE Y CARGO]. No inventes datos.
```
*Verifica:* que un documento oficial lo revise quien corresponda.

### O29 · Revisar un texto buscando errores
```
Eres una persona con experiencia en revisión de documentos administrativos.
Contexto: este texto lo voy a enviar a [DESTINATARIO].
Tarea: señala errores de ortografía, frases confusas y datos que parezcan inconsistentes (por ejemplo, fechas o montos que no coinciden). No corrijas los datos; solo márcalos.
Formato: lista de observaciones con la frase y el problema.
TEXTO:
[PEGA AQUÍ TU TEXTO]
```
*Verifica:* ella no sustituye tu revisión final.

### O30 · Plan del día con prioridades
```
Eres una persona con experiencia en organización del trabajo de oficina.
Contexto: hoy tengo [LISTA DE TAREAS], con estas fechas límite: [FECHAS]. Dispongo de [HORAS] horas.
Tarea: propón un orden de trabajo del día, con el tiempo estimado para cada tarea.
Formato: tabla con horario, tarea y tiempo. Marca lo que podría esperar a mañana.
```
*Verifica:* los tiempos son estimaciones; ajústalos con tu experiencia.

---

# ESTUDIO

*Caso base: estudiante universitario en La Paz que prepara un examen con apuntes propios.*

### E1 · Preguntas de práctica basadas en mis apuntes
```
Eres un tutor paciente que ayuda a estudiantes universitarios a prepararse para un examen.
Contexto: soy estudiante universitario en [CIUDAD] y tengo un examen de [MATERIA] el [DÍA]. Te voy a pegar mis apuntes del tema [TEMA].
Tarea: hazme 8 preguntas de práctica, de menos a más difíciles, basadas SOLO en mis apuntes. Cuando termine de responder, corrígeme y dime qué debo repasar.
Formato: una pregunta por vez; no me des la respuesta hasta que yo conteste. Si algo no está en mis apuntes, dime que no puedes preguntarlo.
APUNTES:
[PEGA AQUÍ TUS APUNTES]
```
*Verifica:* si una corrección te sorprende, contrástala con tus apuntes o tu libro.

### E2 · Resumen de un capítulo en 10 líneas
```
Eres una persona que explica temas de forma clara a estudiantes.
Contexto: estoy estudiando [MATERIA]. Te pego un capítulo o apuntes sobre [TEMA].
Tarea: resume el texto en 10 líneas con las ideas principales y marca aparte los términos que debo memorizar. Usa solo lo que está en el texto.
Formato: lista de 10 líneas y una lista de términos clave.
TEXTO:
[PEGA AQUÍ EL TEXTO]
```
*Verifica:* que no falte una idea que tu docente destacó.

### E3 · Explicar un tema "como si tuviera 15 años"
```
Eres un tutor que explica con palabras simples y ejemplos cotidianos.
Contexto: no entiendo [TEMA] de [MATERIA]. Lo que sí entiendo: [LO QUE SÉ].
Tarea: explícamelo como si tuviera 15 años, con un ejemplo de la vida diaria en Bolivia, y al final hazme 2 preguntas para verificar si entendí.
Formato: máximo 10 líneas y las 2 preguntas.
```
*Verifica:* contrasta con tu libro o tu docente si el tema es técnico.

### E4 · Glosario de términos
```
Eres una persona que ayuda a estudiar vocabulario técnico.
Contexto: estoy estudiando [MATERIA] y estos son los términos que no tengo claros: [LISTA].
Tarea: define cada uno en una línea, con palabras simples y un ejemplo breve.
Formato: tabla con término, definición y ejemplo. Si no estás seguro de una definición, dilo.
```
*Verifica:* las definiciones con tus apuntes o libro.

### E5 · Esquema de un tema
```
Eres una persona que ayuda a organizar apuntes.
Contexto: te pego mis apuntes desordenados de [TEMA].
Tarea: organízalos en un esquema con títulos y subtítulos, sin agregar contenido que no esté en mis apuntes.
Formato: esquema jerárquico con viñetas. Marca al final "Posibles vacíos": lo que parece faltar.
APUNTES:
[PEGA AQUÍ TUS APUNTES]
```
*Verifica:* los "vacíos" repásalos con tu libro.

### E6 · Tarjetas de memoria (flashcards)
```
Eres una persona que ayuda a memorizar.
Contexto: te pego mis apuntes de [TEMA].
Tarea: crea 15 tarjetas de pregunta y respuesta basadas solo en los apuntes.
Formato: tabla con pregunta y respuesta, de lo más importante a lo menos importante.
APUNTES:
[PEGA AQUÍ TUS APUNTES]
```
*Verifica:* que cada respuesta coincida con tus apuntes.

### E7 · Plan de repaso por días
```
Eres una persona con experiencia en organizar el estudio.
Contexto: tengo un examen de [MATERIA] el [FECHA]. Hoy es [FECHA DE HOY]. Temas: [LISTA]. Puedo estudiar [HORAS] horas por día. Mis temas más débiles: [TEMAS].
Tarea: arma un plan de repaso día por día, con repaso de lo ya visto y un simulacro al final.
Formato: tabla con día, tema y actividad. Sé realista con las horas.
```
*Verifica:* que sea posible de cumplir con tu vida real.

### E8 · Detectar lagunas
```
Eres un tutor que revisa lo que un estudiante realmente sabe.
Contexto: voy a explicarte [TEMA] con mis palabras, sin mirar mis apuntes. Después te pego mis apuntes.
Tarea: compara mi explicación con los apuntes y dime qué me faltó, qué dije mal y qué dije bien.
Formato: tres listas con esos títulos.
MI EXPLICACIÓN:
[ESCRIBE AQUÍ]
APUNTES:
[PEGA AQUÍ]
```
*Verifica:* revisa los puntos "mal" con tu material.

### E9 · Resolver un ejercicio paso a paso
```
Eres un tutor paciente de [MATERIA].
Contexto: este ejercicio me trabó y quiero entender cómo se resuelve, no solo ver la respuesta: [PEGA EL ENUNCIADO].
Tarea: guíame paso a paso con preguntas y pistas. Dame la solución completa solo si te lo pido.
Formato: un paso por mensaje.
```
*Verifica:* comprueba el resultado final por otro método si es posible.

### E10 · Comparar dos conceptos
```
Eres una persona que explica diferencias con claridad.
Contexto: me confundo entre [CONCEPTO A] y [CONCEPTO B] en [MATERIA].
Tarea: compáralos.
Formato: tabla con definición, para qué sirve, ejemplo y error común de confundirlos. Si no estás seguro de algo, dilo.
```
*Verifica:* con tus apuntes o libro.

### E11 · Ejemplos de la vida diaria
```
Eres un tutor que usa ejemplos cotidianos.
Contexto: estudio [TEMA] de [MATERIA] y me cuesta imaginarlo.
Tarea: dame 3 ejemplos de la vida diaria en [CIUDAD O PAÍS] que lo expliquen.
Formato: lista, un ejemplo por punto, con una línea que lo conecte con el concepto.
```
*Verifica:* que el ejemplo realmente corresponda al concepto.

### E12 · Mapa de ideas en forma de lista jerárquica
```
Eres una persona que ayuda a ver la estructura de un tema.
Contexto: tengo este texto sobre [TEMA].
Tarea: sácame un mapa de ideas en lista jerárquica: idea central, ideas principales y detalles.
Formato: lista con sangrías, máximo 3 niveles. Usa solo lo que está en el texto.
TEXTO:
[PEGA AQUÍ EL TEXTO]
```
*Verifica:* que la jerarquía tenga sentido para tu materia.

### E13 · Corregir mi respuesta como lo haría un docente
```
Eres un docente de [MATERIA] que corrige con claridad y respeto.
Contexto: respondí esta pregunta de práctica: "[PREGUNTA]". Mi respuesta fue: "[TU RESPUESTA]". Mis apuntes sobre el tema: [APUNTES O "NO LOS TENGO"].
Tarea: dime qué está bien, qué está mal o incompleto y cómo mejorarlo. No me des la respuesta perfecta de una vez; guíame.
Formato: tres puntos: lo correcto, lo que falta y una sugerencia.
```
*Verifica:* contrasta con tu material de clase.

### E14 · Simulacro de examen
```
Eres un docente de [MATERIA] que arma exámenes.
Contexto: mi examen cubre [TEMAS] y tiene el formato [FORMATO: opción múltiple, desarrollo, mixto]. Te pego mis apuntes.
Tarea: arma un simulacro de [NÚMERO] preguntas basadas solo en mis apuntes, con un puntaje de referencia por pregunta. No des las respuestas hasta que termine.
Formato: lista numerada. Al final, corrige y dime qué repasar.
APUNTES:
[PEGA AQUÍ]
```
*Verifica:* tu examen real puede ser distinto; úsalo solo como práctica.

### E15 · Resumen de lectura con dudas
```
Eres una persona que ayuda a comprender lecturas académicas.
Contexto: debo leer este texto para [CLASE O TAREA]. No tengo mucho tiempo.
Tarea: resume el texto en 8 líneas, lista las ideas principales y marca aparte "Dudas": lo que no queda claro o requiere conocimiento previo.
Formato: resumen, ideas principales y dudas, en ese orden. Usa solo el texto.
TEXTO:
[PEGA AQUÍ EL TEXTO]
```
*Verifica:* no lo uses para reemplazar la lectura completa si te la van a evaluar.

### E16 · Preguntas de verdadero o falso
```
Eres un docente que arma ejercicios de práctica.
Contexto: te pego mis apuntes de [TEMA].
Tarea: crea 10 afirmaciones de verdadero o falso basadas solo en mis apuntes. Al final, dame la clave con una línea de explicación por cada una.
Formato: lista numerada y luego la clave separada.
APUNTES:
[PEGA AQUÍ]
```
*Verifica:* que las explicaciones coincidan con tus apuntes.

### E17 · Truco para recordar (mnemotecnia)
```
Eres una persona creativa que ayuda a memorizar.
Contexto: necesito recordar [LISTA O CONCEPTO A MEMORIZAR].
Tarea: propón 3 formas distintas de recordarlo (frase, asociación o historia corta).
Formato: lista, una opción por punto, con una línea explicando cómo funciona.
```
*Verifica:* que el truco conserve el orden y el significado correctos.

### E18 · Entender mi error
```
Eres un tutor paciente de [MATERIA].
Contexto: respondí [MI RESPUESTA] pero la respuesta correcta era [LA CORRECTA] en este problema: [ENUNCIADO].
Tarea: explícame dónde probablemente me equivoqué, sin juzgar, y dame un problema parecido para practicar.
Formato: explicación corta y un problema nuevo sin solución.
```
*Verifica:* si la explicación no te convence, pregunta a tu docente.

### E19 · Plan de estudio de una semana
```
Eres una persona con experiencia en organizar el estudio.
Contexto: esta semana tengo estas materias y tareas: [LISTA CON FECHAS]. Mis horarios libres: [HORARIOS].
Tarea: arma un plan semanal que reparta el estudio y deje descansos.
Formato: tabla por día con horario y actividad. Sin cargar más de [HORAS] horas por día.
```
*Verifica:* ajústalo a tus compromisos reales.

### E20 · Preparar una exposición oral
```
Eres una persona con experiencia en preparar presentaciones para estudiantes.
Contexto: debo exponer sobre [TEMA] durante [MINUTOS] minutos para [CLASE]. Esto es lo que sé: [IDEAS O APUNTES].
Tarea: propón una estructura con introducción, 3 ideas principales y cierre, con el tiempo de cada parte.
Formato: lista con título y tiempo. Usa solo mi contenido; sugiere aparte lo que podría faltar.
```
*Verifica:* que el contenido sea correcto; la exposición es tuya.

### E21 · Guion para decir la exposición en voz alta
```
Eres una persona con experiencia en presentaciones orales.
Contexto: esta es mi estructura de exposición: [ESTRUCTURA].
Tarea: escribe un guion natural para decirlo en voz alta, con frases cortas, y marca dónde hacer una pausa.
Formato: texto en párrafos cortos, tuteo al público si corresponde. No agregues datos que no estén en mi estructura.
```
*Verifica:* léelo en voz alta y ajústalo para que suene a ti.

### E22 · Revisar un texto mío (sin que lo escriba por mí)
```
Eres un docente que da retroalimentación sobre redacción.
Contexto: escribí este texto para [CLASE O TRABAJO]. Quiero mejorarlo yo mismo.
Tarea: dime qué ideas no están claras, qué falta fundamentar y dónde hay errores de ortografía o de estructura. No reescribas el texto: solo señala y sugiere.
Formato: lista de observaciones con la frase y la sugerencia.
TEXTO:
[PEGA AQUÍ TU TEXTO]
```
*Verifica:* respeta las normas de tu institución sobre el uso de IA en trabajos.

### E23 · Preguntas de desarrollo
```
Eres un docente de [MATERIA].
Contexto: te pego mis apuntes de [TEMA].
Tarea: propón 5 preguntas de desarrollo basadas solo en mis apuntes y, para cada una, una lista de los puntos que una buena respuesta debería incluir.
Formato: lista numerada con los puntos esperados debajo.
APUNTES:
[PEGA AQUÍ]
```
*Verifica:* los puntos esperados contra tu material.

### E24 · ¿Qué debo repasar?
```
Eres un tutor que ayuda a priorizar el estudio.
Contexto: estos son los temas de mi examen: [LISTA]. Me siento seguro en [TEMAS] y inseguro en [TEMAS]. Me quedan [DÍAS] días.
Tarea: dime qué orden de repaso sugieres y por qué.
Formato: lista ordenada con una línea de razón por tema.
```
*Verifica:* decide tú según lo que tu docente enfatizó.

### E25 · Tutor que pregunta (método socrático)
```
Eres un tutor que enseña haciendo preguntas, sin dar la respuesta directamente.
Contexto: quiero entender [TEMA] de [MATERIA].
Tarea: hazme una pregunta a la vez para guiarme hacia la idea. Si me trabo, dame una pista pequeña.
Formato: una sola pregunta por mensaje.
```
*Verifica:* al final pídele que resuma lo aprendido y compáralo con tus apuntes.

### E26 · Ordenar apuntes tomados a las apuradas
```
Eres una persona que ayuda a ordenar apuntes.
Contexto: tomé estos apuntes en clase y están desordenados.
Tarea: ordénalos por tema, completa las frases cortadas solo si el sentido es evidente, y marca con "(?)" lo que no se entiende.
Formato: apuntes ordenados con títulos. No agregues información nueva.
APUNTES:
[PEGA AQUÍ]
```
*Verifica:* revisa cada "(?)" con tu docente o tus compañeros.

### E27 · Tabla comparativa
```
Eres una persona que organiza información para estudiar.
Contexto: tengo que comparar [ELEMENTOS A COMPARAR] en [MATERIA]. Estos son mis apuntes: [APUNTES].
Tarea: arma una tabla comparativa con criterios claros.
Formato: tabla con filas por criterio y columnas por elemento. Usa solo mis apuntes; si falta un dato, escribe "NO ESTÁ EN MIS APUNTES".
```
*Verifica:* completa los vacíos con tu libro.

### E28 · Ejercicios de práctica con solución al final
```
Eres un tutor de [MATERIA].
Contexto: necesito practicar [TIPO DE EJERCICIO]. Nivel: [BÁSICO / MEDIO / AVANZADO]. Ejemplo de uno que ya hice: [EJEMPLO].
Tarea: crea 5 ejercicios similares con dificultad creciente y pon las soluciones paso a paso al final, separadas.
Formato: ejercicios numerados y, abajo, soluciones.
```
*Verifica:* resuelve tú primero y comprueba; si una solución parece rara, revísala.

### E29 · Los 5 conceptos clave de un tema
```
Eres una persona que ayuda a priorizar lo importante al estudiar.
Contexto: te pego mis apuntes de [TEMA].
Tarea: dime cuáles son los 5 conceptos más importantes y explica cada uno en 2 líneas. Usa solo mis apuntes.
Formato: lista numerada.
APUNTES:
[PEGA AQUÍ]
```
*Verifica:* si tu docente marcó otros como importantes, haz caso a tu docente.

### E30 · Autoevaluación al terminar de estudiar
```
Eres un tutor que ayuda a medir el avance.
Contexto: terminé de estudiar [TEMA] de [MATERIA].
Tarea: hazme 5 preguntas rápidas de diferentes niveles, una por una. Después de cada respuesta, dime si estuvo bien y por qué. Al final, dame un resumen de mi nivel: qué domino y qué repasar.
Formato: una pregunta por mensaje. Basa las preguntas en [MIS APUNTES / EL TEMA EN GENERAL]. Si no estás seguro de algo, dilo.
```
*Verifica:* es un termómetro, no una nota.

---

## Flujo encadenado de 4 pasos

Para cualquier tarea más grande, no pidas todo de una vez. Hazlo **en el mismo chat**, un paso a la vez:

| Paso | Qué haces | Prompts de esta biblioteca |
|---|---|---|
| 1. Idea | Pides opciones | V14, C1, C6, C15 |
| 2. Borrador | Eliges una y pides el texto | C2, C10, C13, O3 |
| 3. Revisión | Pides una lista de problemas, sin reescribir | C3, V29, O29, E22 |
| 4. Final | Aplicas las correcciones y completas los corchetes | C4, O19, C21 |

**Tres reglas** (de la clase 3): un paso, una tarea · cada paso usa el resultado del anterior · tú revisas antes de avanzar.

---

## Tu propia biblioteca

Cada plantilla que te funcione, guárdala con este esqueleto en un documento, en las notas del celular o dentro de un Proyecto:

| Parte | Qué lleva |
|---|---|
| Título | Para qué sirve ("Aviso de retraso al cliente") |
| Prompt | Rol + Contexto + Tarea + Formato + Ejemplo, con [CORCHETES] |
| Qué completar | Los datos que cambian |
| Qué verificar | Lo que revisas tú antes de usar el resultado |

Y recuerda: no guardes datos reales de clientes dentro de la plantilla.
