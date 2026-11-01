# Clase 1 · Guion FINAL en vivo
**"Claude de 0 a 100" · Desde cero: hablarle bien a la IA**

> BORRADOR PARA SERGIO. No se publicó ni se envió nada. Lo que va en [CONFIRMAR] lo decides tú antes de la clase.

## 1. Encabezado

- **Fecha y hora:** martes 3/11/2026, 19:00 (hora de Bolivia), Google Meet.
- **Formato:** 2 salas de Meet (decisión D-20261101-008). Meet gratis corta a los 60 min con 3+ personas.
  - Sala 1 = Bloque 1, 19:00–19:50.
  - Pausa, 19:50–20:00.
  - Sala 2 = Bloque 2, 20:00–20:55 (cierra antes de los 60 min).
  - Cada sala tiene su propia grabación.
- **Objetivo:** que cada persona se vaya con su cuenta creada, entienda por qué la IA responde genérico y use la fórmula **Rol + Contexto + Tarea + Formato + Ejemplo** en tres tareas reales (correo, resumen, mensaje a cliente).
- **Qué se llevan:** cuenta de Claude lista, la fórmula, 3 prompts probados, atajos para iterar, la tarea de la semana y las grabaciones (acceso por 30 días).
- **Lo que NO se promete:** ingresos, resultados garantizados ni "que la IA lo hace todo sola". No hay testimonios ni escasez.
- **Materiales abiertos (pestañas):**
  1. Sala 1 de Meet (compartir "una pestaña").
  2. claude.ai con cuenta de prueba, perfil de navegador limpio, zoom 125–150 %.
  3. Diapositivas `clase1-diapositivas.md` (Marp).
  4. Página oficial de precios de Claude, abierta ese mismo día.
  5. Plantilla de la fórmula (documento corto con las 5 piezas y los 3 prompts, sin datos reales).
  6. Capturas de respaldo de la demo y de los 3 ejercicios.
  7. Este guion, impreso o en otra pantalla, y un reloj visible.
- **Roles:** Sergio enseña y comparte pantalla. Ayudante para el chat y las preguntas: opcional [CONFIRMAR]. Si no hay, Sergio lee el chat solo en los momentos marcados.

## 2. Checklist previo

**24–48 h antes**
- [ ] Crear **Sala 1** y **Sala 2** de Meet. Copiar los 2 enlaces.
- [ ] Probar 2 min que tu cuenta graba y que el archivo aparece después.
- [ ] Recordatorio en el grupo de WhatsApp con el enlace de Sala 1. El enlace de Sala 2 se pega recién en la pausa.
- [ ] Correr tú mismo la demo y los 3 ejercicios. Guardar capturas.
- [ ] Revisar límites del plan gratis y la página de precios **ese día**. No decir cifras sin verificarlas.

**2 h antes**
- [ ] Cerrar WhatsApp Web, correo y notificaciones. Perfil limpio, zoom 125–150 %.
- [ ] Internet por cable, hotspot del celular listo, auriculares, celular en silencio.
- [ ] Plantilla de la fórmula lista para pegar (enlace o texto).

**18:50 (10 min antes)**
- [ ] Abrir Sala 1, probar compartir una pestaña.
- [ ] Con el primer asistente conectado, **iniciar grabación** y confirmar "grabando".
- [ ] Pegar en el chat: "La clase se graba. Usa el chat para dudas cortas. Abre claude.ai en otra pestaña."

## 3. SALA 1 · 19:00–19:50 · Qué es Claude y por qué responde genérico

| Min | Qué pasa | Qué dice Sergio | Pantalla / demo |
|---|---|---|---|
| 19:00 | Bienvenida y acuerdos (5 min) | "Bienvenidos. Hoy no necesitas saber nada de tecnología. La clase se graba: todos los inscritos, incluso los que se sumen tarde, reciben la grabación con acceso por 30 días. Usa el chat para dudas cortas. Hoy son dos bloques, una pausa de 10 minutos y una tarea corta al final." | Diapositiva título, luego "Qué haremos hoy" y "Acuerdos". |
| 19:05 | Abrir Claude y medir nivel (3 min) | "Abre claude.ai en otra pestaña. Si no tienes cuenta, la creamos juntos. Cuéntame en el chat: ¿alguien ya usó una IA antes?" | Pestaña del navegador compartida. Leer 2–3 respuestas del chat. |
| 19:08 | Qué es Claude y qué no (10 min) | "Claude es un asistente de IA conversacional hecho por Anthropic. Le escribes en lenguaje normal y te responde. No es un buscador: Google te lleva a páginas, Claude redacta una respuesta. No es una persona ni es infalible: puede equivocarse y sonar muy seguro. ChatGPT es una herramienta del mismo tipo, de otra empresa. Se aprende igual." | Diapositivas "Qué es Claude" y "Google, Claude y ChatGPT". Opcional: "carta de renuncia" en Google y en Claude. No hablar mal de ninguna. |
| 19:18 | Crear cuenta (8 min) | "Entra a claude.ai. Regístrate con tu correo o con tu cuenta de Google y verifica. Ve a tu ritmo, yo espero. Escribe 'listo' en el chat cuando termines." | Registrar una cuenta de prueba en vivo, tapando el correo. |
| 19:26 | Pausa de preguntas: registro (4 min) | "Pausa para preguntas. ¿Quién tuvo problemas con el registro? Lo resolvemos ahora." | Mirar el chat. Quien no logre entrar sigue en segundo plano y ve la grabación. |
| 19:30 | Plan gratis vs pago (6 min) | "Hay un plan gratis y planes de pago. El gratis alcanza para aprender hoy [CONFIRMAR con tu cuenta]. Los límites y precios cambian, mira siempre la página oficial. No necesitas pagar para este taller y no te recomiendo pagar nada." | Página oficial de precios abierta ese día. Solo cifras verificadas. |
| 19:36 | Tour de la interfaz (7 min) | "Aquí escribes tu mensaje. Aquí abres un chat nuevo y aquí ves el historial. Este es el selector de modelo y este el botón para adjuntar archivos, que usamos en la clase 2. Cada chat es una conversación aparte: si cambias de tema, abre uno nuevo." | Navegar despacio, cursor grande. Si vas atrasado, recortar al cuadro de mensaje y chat nuevo. |
| 19:43 | Pausa de preguntas: interfaz y planes (3 min) | "Pausa para preguntas sobre la interfaz o los planes." | Chat. |
| 19:46 | Por qué responde genérico (4 min) | "Claude no sabe quién eres, a quién le escribes ni para qué. Si no se lo dices, rellena con lo más promedio. Por eso suena genérico. La solución no es un truco: es dar contexto. Mira este pedido." (Mostrar, silencio 10 s.) "¿Qué le faltó saber? Después de la pausa lo vemos con un antes y un después." | Diapositiva "Pedido flojo, respuesta promedio": `Escríbeme un mensaje para un cliente.` |
| 19:50 | Fin Sala 1 | "Volvemos a las 20:00 con el enlace de la Sala 2, que pego en el chat y en el grupo. Si no terminaste tu cuenta, hazlo ahora." | Diapositiva de pausa con contador. |

Si Sala 1 va atrasada: recortar el tour (19:36) y el opcional Google. No sacrificar el cierre sobre contexto.

## 4. PAUSA · 19:50–20:00

**Qué se hace exactamente**
1. 19:50: **Detener grabación** de Sala 1 y confirmar que se guardó (mensaje "grabación guardada").
2. 19:51: Pegar el mensaje de transición (abajo) en el **chat de Sala 1** y en el **grupo de WhatsApp de inscritos** (tú lo envías; este agente no envía nada).
3. 19:52: Mostrar diapositiva de pausa con contador. Agua, baño.
4. 19:55: Abrir **Sala 2** desde otra pestaña. Probar compartir pantalla. Pegar la plantilla de la fórmula en el chat de Sala 2.
5. 19:58: Con el primer asistente en Sala 2, **iniciar grabación** y confirmar "grabando".
6. 20:00: Empezar. El límite de 60 min corre desde que hay 3+ personas: cerrar a más tardar 20:55.

**Mensaje de transición (listo para pegar)**
```
Pausa de 10 minutos. Volvemos a las 20:00 (hora de Bolivia).
Bloque 2 (práctica): [ENLACE SALA 2]
Mientras tanto, si no terminaste de crear tu cuenta en claude.ai, hazlo ahora.
Ten tu Claude abierto: vamos a practicar con tareas reales.
La clase se graba. Todos los inscritos, incluso los que se sumen tarde, reciben la grabación con acceso por 30 días.
```

## 5. SALA 2 · 20:00–20:55 · Práctica: la fórmula de pedido

| Min | Qué pasa | Qué dice Sergio | Pantalla / demo |
|---|---|---|---|
| 20:00 | Recuperar al grupo (3 min) | "Bienvenidos de nuevo. Ahora todo es práctica. Ten tu Claude abierto y copia los prompts del chat. Una regla: nunca pegues carnets, cuentas bancarias ni contraseñas." | Diapositiva "La fórmula": Rol + Contexto + Tarea + Formato + Ejemplo. Pegar enlace de la plantilla. |
| 20:03 | Demo ANTES (4 min) | "Esto lo viste en el reel. Le pido a Claude: 'Escríbeme un mensaje para un cliente'. Mira qué sale." (Leer en voz alta.) "¿Esto lo mandarías? ¿Qué le faltó saber?" | Chat nuevo. Pedido flojo (ver bloque de prompts). Si se cuelga, usar captura. |
| 20:07 | Demo DESPUÉS (5 min) | "Ahora el mismo trabajo con la fórmula. Marisol tiene una tienda de ropa en Santa Cruz y una clienta, Daniela, espera un pedido retrasado. Rol, contexto, tarea, formato y ejemplo." (Pegar, leer, comparar.) | Segundo chat o pestaña lado a lado. Tabla de comparación: ¿sabe a quién escribe? ¿se copia con retoques? ¿suena a mi negocio? ¿cuánto trabajo me queda? |
| 20:12 | Replay del reel (2 min) | "Y lo que viste en el reel: una tienda en Santa Cruz, un cliente que pregunta si hay stock, respuesta por WhatsApp, cálida, en 3 líneas. Si no te convence, escribo 'más corto' y se ajusta." | Prompt del reel (ver bloque), luego `Más corto.` |
| 20:14 | Pausa de preguntas (2 min) | "Pausa para preguntas. ¿Qué notaron entre el antes y el después? Ojo: más largo no siempre es mejor. Cada pieza responde algo que Claude no podía adivinar." | Chat. |
| 20:16 | Las cinco piezas (4 min) | "Rol: ¿quién sería la persona ideal? Contexto: ¿qué sé yo que él no sabe? Tarea: un verbo claro, qué debe producir. Formato: largo, tono, lista. Ejemplo: un texto mío con el estilo que busco. No siempre hacen falta las cinco; cuantas más tengas, menos adivina." | Diapositiva "Las cinco piezas". |
| 20:20 | Ejercicio 1: correo (7 min) | "Primero lo hago yo. Luego tienes 3 minutos para hacerlo con tu caso real y 2 para comparar. Si prefieres, adapta: taller que pide repuestos, estudiante que pide cita a un docente." Al final: "¿Qué le agregaste a la fórmula que yo no puse?" | Ejercicio 1 en vivo; un voluntario comparte pantalla. |
| 20:27 | Ejercicio 2: resumen (7 min) | "Aquí hay dos frases clave: 'no lo inventes' y 'Dudas'. Reducen que Claude rellene huecos. Aun así, fechas y montos se revisan contra el original. Usa un texto NO confidencial." | Ejercicio 2 con un texto neutro (público o escrito por ti). Voluntario comparte. |
| 20:34 | Ejercicio 3: mensaje a cliente (6 min, corto) | "Última práctica. Una pastelería, un cliente que cambia el pedido a último momento. Hazlo con tu negocio." | Ejercicio 3. Si vas justo de tiempo, recortar aquí antes que la demo. |
| 20:40 | Iterar (4 min) | "La primera respuesta es un borrador. Se mejora en el mismo chat. Digo qué quiero mejorar, no solo 'mejóralo'. Hago tres pasadas: más corto, más cálido, dame 2 versiones con diferente cierre. Si tras 3 o 4 ajustes no mejora, chat nuevo." | Pasadas sobre el resultado del Ejercicio 3. |
| 20:44 | Errores comunes (3 min) | "Cuatro errores: pedido demasiado corto o sin decir para quién; creer todo sin revisar datos, fechas y precios; pegar datos sensibles o copiar sin leer; abandonar tras una mala respuesta, que suele ser falta de contexto." | Diapositiva "Errores comunes". |
| 20:47 | Preguntas abiertas y tarea (4 min) | "Pausa para preguntas y dudas sobre la tarea. La tarea la pego ahora en el chat." | Diapositiva "Preguntas", luego "Tarea de la semana". Pegar texto de la tarea (sección 6). |
| 20:51 | Cierre (3 min) | Texto literal en sección 6. | Diapositiva final con datos de la clase 2. |
| 20:54 | Detener grabación | "Gracias por estar. Hasta el jueves." Detener grabación, cerrar la sala. | Margen de 5 min bajo el límite de 60. |

Si Sala 2 se pasa de tiempo: recorta el replay del reel (20:12) y el Ejercicio 3 a 4 min. No cruces 20:55.

### Prompts listos para copiar

Datos de ejemplo inventados; que cada quien los cambie por los suyos.

**Demo antes (pedido flojo)**
```
Escríbeme un mensaje para un cliente.
```

**Demo después (fórmula completa)**
```
Eres una persona con experiencia en atención al cliente de tiendas pequeñas de ropa.

Contexto: tengo una tienda de ropa femenina en Santa Cruz de la Sierra que vende por WhatsApp e Instagram. Una clienta, Daniela, compró 3 blusas hace 6 días. Le dije que llegarían en 3 días y todavía no las despacho porque el proveedor se retrasó. Nuevo plazo: el viernes. Quiero que siga confiando en mí y no pedir que cancele.

Tarea: escribe el mensaje de WhatsApp para avisarle del retraso y pedir disculpas sin dar excusas largas.

Formato: máximo 5 líneas, tono cercano y respetuoso, tuteo, sin emojis excesivos (como mucho 1). Termina ofreciendo un descuento o detalle solo si te parece razonable; si no, no lo ofrezcas.

Ejemplo del estilo que me gusta: "Hola Carla, te escribo para contarte que tu pedido sale mañana. Gracias por la paciencia, cualquier duda me dices."
```

**Replay del reel (tuteo; el reel promocionó este caso)**
```
Eres dueño de una tienda en Santa Cruz. Un cliente pregunta si hay stock de [PRODUCTO]. Respóndele por WhatsApp, cálido, en 3 líneas, con el precio [PRECIO] y cómo pagar por QR.
```
Luego: `Más corto.`
Nota: el reel usaba "Sos" (voseo) en pantalla. En la clase usa "Eres" y cuenta como las mismas piezas: rol, contexto, tarea y formato. El reel no incluía ejemplo, así que dilo: "aquí falta la quinta pieza, el ejemplo".

**Ejercicio 1 · Correo**
Versión floja: `Escribe un correo pidiendo una cotización.`
```
Eres un asistente administrativo con experiencia en empresas de turismo.

Contexto: trabajo en una agencia pequeña de turismo en La Paz. Organizamos una salida a Copacabana y la Isla del Sol para un grupo de 18 personas, el sábado 14 de noviembre. Necesitamos transporte ida y vuelta desde La Paz. No conozco a la persona de la empresa de transporte; es el primer contacto.

Tarea: redacta un correo pidiendo una cotización.

Formato: asunto claro, saludo formal pero amable, 3 párrafos cortos como máximo, lista con los datos del viaje (fecha, personas, salida, regreso) y cierre pidiendo respuesta antes del jueves.

Ejemplo de tono: "Estimado Sr. Rojas: Le escribo para consultar disponibilidad y tarifa de ..."
```

**Ejercicio 2 · Resumen**
Versión floja: `Resume esto.`
```
Eres una persona que explica temas administrativos con palabras simples a alguien que no es especialista.

Contexto: soy dueña de un pequeño local de comida en El Alto y recibí este comunicado sobre trámites del negocio. No tengo mucho tiempo para leer todo.

Tarea: resume el texto y dime qué debo hacer yo.

Formato:
1) Resumen en 3 líneas.
2) Lista de lo que tengo que hacer, con la fecha si aparece en el texto.
3) Cualquier cosa que no quedó clara en el texto, aparte, marcada como "Dudas".
Si algo no está en el texto, no lo inventes.

Ejemplo del formato de "qué debo hacer": "- Presentar el formulario antes del 20 de noviembre."

TEXTO:
[pega aquí el texto]
```

**Ejercicio 3 · Mensaje a un cliente**
Versión floja: `Responde a un cliente que quiere cambiar su pedido.`
```
Eres una persona con experiencia en atención al cliente en una pastelería artesanal.

Contexto: tengo una pastelería pequeña en Cochabamba. Un cliente, Marcelo, pidió una torta de chocolate para 20 personas para el sábado. Hoy es jueves y me escribe por WhatsApp para cambiarla a sabor frutilla. Mi política: los cambios de sabor se aceptan hasta 48 horas antes; hoy estamos justo en el límite y todavía puedo hacerlo. Quiero ser amable y confirmar el cambio, y recordarle que el pago del saldo se hace al recoger.

Tarea: escribe la respuesta de WhatsApp.

Formato: máximo 4 líneas, tono cálido, tuteo, 1 emoji como máximo, sin hacerlo sonar a plantilla.

Ejemplo de estilo: "Hola Lucía, claro que sí, ya quedó anotado. Te espero el sábado a las 10."
```

**Atajos para iterar**
- `Más corto. Máximo 3 líneas.`
- `Hazlo más cálido y menos formal.`
- `Dame 2 versiones con diferente cierre.`
- `Cambia el plazo a [FECHA].`
- `Explícame por qué elegiste esa frase.`

## 6. Cierre, tarea y mensaje al grupo

**Texto hablado (literal, 20:51)**
"Hoy ya hiciste tres cosas con Claude: un correo, un resumen y un mensaje a un cliente. Y lo más importante: sabes por qué una respuesta sale genérica y cómo arreglarlo con contexto. Para la semana, usa Claude en tres tareas reales tuyas y trae la mejor y la peor respuesta; de la peor se aprende más. Borra los datos privados antes de compartir. Nos vemos el jueves 5 de noviembre a las 19:00, hora de Bolivia. Veremos cómo trabajar con tus archivos y con Proyectos. Todos los inscritos, incluso los que se sumen tarde, reciben las grabaciones por el grupo de WhatsApp, con acceso por 30 días. Gracias por estar."

Si preguntan por dinero: "No puedo prometer ingresos. Lo que hacemos es aprender a usar la herramienta para ahorrar tiempo y mejorar lo que ya haces."

**Tarea (pegar en el chat)**
```
Tarea Clase 1
1. Elige 3 tareas reales de tu semana (un mensaje, un resumen, una idea, una lista, un correo...).
2. Úsalas con la fórmula: Rol + Contexto + Tarea + Formato + Ejemplo.
3. Itera al menos una vez en cada una ("más corto", "más cálido", etc.).
4. Guarda la mejor y la peor respuesta (captura o copia de texto). Borra los datos privados antes de compartir.
5. Para cada una, anota en una línea: ¿qué le faltó a mi pedido? o ¿qué funcionó?
6. Tráelas a la clase 2 (jueves 5/11).
```
¿No sabes qué tarea usar? Contestar un mensaje pendiente, ordenar una lista, resumir un texto largo o preparar el anuncio de una promoción.

**Mensaje para el grupo de WhatsApp (BORRADOR, no se envía)**
```
Gracias por venir a la clase 1 de Claude de 0 a 100.
Grabaciones (Sala 1 y Sala 2): [ENLACE 1] y [ENLACE 2]. Todos los inscritos, incluso los que se sumen tarde, las reciben con acceso por 30 días.
Tarea: usa Claude en 3 tareas reales tuyas con la fórmula Rol + Contexto + Tarea + Formato + Ejemplo, itera al menos una vez y guarda la mejor y la peor respuesta (sin datos privados).
Próxima clase: jueves 5/11 a las 19:00 (hora de Bolivia). Archivos y Proyectos. Enlace: [ENLACE CLASE 2].
Dudas: [CANAL DE SOPORTE].
```
Opcional: adjuntar la Hoja 1 de `kit-alumno.md` cuando la revises.

## 7. Plan B

**Si se cae Meet o falla tu internet**
1. Pasa al hotspot del celular. Si tarda más de 2 min, avisa por el grupo de WhatsApp: "Tengo un problema técnico, vuelvo en minutos".
2. Si Meet no abre: mismo plan con otro enlace de reserva [CONFIRMAR si lo creas] y avísalo en el grupo.
3. Si se pierde una grabación: quedan las capturas y la plantilla; repite el segmento clave y compártelo. Dilo con honestidad en el grupo.
4. Si no se puede continuar: reprograma la mitad faltante y pasa fecha al grupo. Cambiar fechas requiere tu decisión.

**Si Claude no responde o está lento en vivo**
- Usa las capturas de respaldo, dilo ("las respuestas varían") y sigue con la fórmula.

**Si te atrasas**
- Sala 1: recorta tour y Google/ChatGPT. Sala 2: recorta replay del reel y Ejercicio 3. La demo antes/después no se toca.
- Si Sala 1 pasa de 19:55, abrevia la pausa a 5 min y avisa por el chat.
- Si Sala 2 llega a 20:50 sin cerrar, ve directo al cierre. Meet gratis cortaría a los 60 min.

**Si alguien no tiene cuenta o no puede crearla**
- Que siga mirando la pantalla compartida y practique después con la grabación.
- Si no puede verificar el correo, que pruebe con su cuenta de Google y que te escriba por [CANAL DE SOPORTE].
- No se pide ningún pago para usar Claude en el taller.

**Si alguien llega tarde o falta**
- Recibe las grabaciones con acceso por 30 días, igual que todos los inscritos.

## 8. Pendientes [CONFIRMAR] para Sergio

- [x] Precio: **Bs 50 fijo** por la serie completa (3 clases), decidido por Sergio el 1/11/2026 (D-20261101-009 cerrada). Cobro solo con el QR de Yolo (Banco Ganadero).
- [ ] Canal de soporte (grupo, correo u otro) para dudas durante y después de la clase.
- [ ] Ayudante para el chat (opcional) y si habrá moderador.
- [ ] Confirmar con tu cuenta que el plan gratis alcanza para el taller, el mismo día.
- [ ] Qué datos de planes y precios de Claude quieres mostrar (verificados ese día).
- [ ] Enlaces de Sala 1, Sala 2, grupo de WhatsApp y clase 2.
- [ ] Enlace de reserva de Meet para el Plan B (opcional).
- [ ] Si usarás tu propia historia en la bienvenida (no hay testimonios aún; una explicación honesta de por qué enseñas esto basta).
- [ ] El reel usó voseo ("Sos") en pantalla; en clase usamos tuteo. Decide si lo mencionas o lo dejas pasar.
- [ ] La plantilla de la fórmula (documento o enlace) está por preparar; no existe aún.
- [ ] `/workspace/onia-cola/talleres/OBJETIVO.md` no existe en el entorno; no pude leerlo. Revisa si traía algo extra.

## 9. Fuentes

- `/workspace/taller-claude/AGENTS.md`
- `/workspace/taller-claude/clase1-material.md` (fuente principal)
- `/workspace/taller-claude/clase1-diapositivas.md`
- `/workspace/taller-claude/temario.md`
- `/workspace/taller-claude/kit-alumno.md`
- `/workspace/taller-claude/comunidad.md`
- `/workspace/marca/guion-muestra-clase1.md`
- No encontrado: `/workspace/onia-cola/talleres/OBJETIVO.md`
