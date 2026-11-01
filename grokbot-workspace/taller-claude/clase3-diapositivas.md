---
marp: true
theme: default
paginate: true
footer: "OnIA · Claude de 0 a 100 · WhatsApp +591 75414930"
style: |
  section { font-size: 30px; padding: 50px 70px; }
  section h1 { color: #1f3a5f; }
  section h2 { color: #1f3a5f; }
  section.codigo { font-size: 24px; }
  section.codigo pre { font-size: 0.62em; line-height: 1.3; }
  section.pausa, section.tarea, section.preguntas { text-align: center; justify-content: center; }
  section.pausa { background: #eef4fb; }
  section.preguntas { background: #f4f1ea; }
  section.tarea { background: #eaf5ec; }
---

<!-- _class: pausa -->
<!-- _paginate: false -->

# Claude de 0 a 100
## Clase 3 · Flujos y siguiente paso

OnIA · Sábado 7/11/2026 · 19:00 (hora de Bolivia)
WhatsApp +591 75414930

<!--
NOTAS PARA SERGIO
- Clase grabada; un bloque por sala de Meet (dos enlaces, dos grabaciones).
- Objetivo: que cada persona se vaya con una biblioteca de prompts propia (aunque sean 3 plantillas) y un flujo completo de su trabajo, probado en vivo. Además, cerrar con la encuesta y presentar con calma el siguiente paso.
- No se promete: ingresos, ventas, ahorros con cifras ni que "la IA lo hace todo sola". No se dice ningún número de alumnos, resultado ni testimonio que no exista.
- Todos los datos de ejemplo son inventados; los asistentes usan los suyos.
- Haz tú mismo todas las demos antes y guarda capturas de respaldo: las respuestas de Claude varían.
-->

---

# Qué haremos hoy

- Revisamos la tarea de la clase 2
- Bloque 1: tu biblioteca de prompts y los flujos encadenados
- Bloque 2: tu flujo propio, armado en vivo
- Al final: encuesta corta y un siguiente paso opcional

<!--
Min 0–4. "Hoy pasamos de usar Claude para una tarea suelta a armar un flujo que puedas repetir. La clase se graba (todos los inscritos, incluso los que se sumen tarde, reciben la grabación con acceso por 30 días), el chat es para dudas cortas y las paramos en momentos marcados."
Min 4: "¿Qué esperas llevarte hoy? Una palabra en el chat" (1–2 min).
-->

---

# Revisión de la tarea de la clase 2

- Escribe 1 si creaste tu Proyecto y 2 si lo usaste las 2 veces
- Con un 0 no pasa nada: hoy lo retomamos
- Tres voluntarios cuentan: tarea, instrucciones y qué corrigieron
- Cuéntalo con palabras: sin cifras si no las mediste

<!--
Min 4–14. 1 min de calentamiento, 6 min con 3 voluntarios (2 min cada uno), 2 min para resumir el patrón que oíste. Conecta: "Lo que hicieron en el Proyecto ya es un mini flujo: instrucciones fijas + un pedido. Hoy lo encadenamos."
Preguntas por si hay silencio: ¿qué archivo subiste y para qué? ¿algún dato que tuviste que verificar contra el original? ¿alguien llegó al límite del plan gratis?
Repite en una frase: la IA se equivoca, los datos se verifican; no se suben contraseñas, datos bancarios ni datos de clientes.
Si nadie comparte, muestra un Proyecto simple tuyo (sin datos reales) y di que es tuyo. No inventes ejemplos como si fueran de alumnos.
Min 14: "¿Alguna duda sobre los Proyectos antes de seguir?" (2 min).
-->

---

# Tu biblioteca de prompts

- Un prompt que te funcionó es un tesoro
- Guárdalo como plantilla con [CORCHETES] para lo que cambia
- Una plantilla por tarea: "Aviso de retraso", "Resumen de documento"
- No guardes datos reales de clientes dentro

<!--
Min 14–22. Dónde guardarla (elige una y muéstrala): un documento propio, las notas del celular, o dentro de un Proyecto de Claude.
Esqueleto de la biblioteca: título (para qué sirve), prompt (Rol + Contexto + Tarea + Formato + Ejemplo con corchetes), qué completar, qué verificar yo antes de usar el resultado.
Dilo en voz alta: no guardes datos reales de clientes en la plantilla; para eso están los corchetes.
-->

---

<!-- _class: codigo -->

# Demo A: de prompt a plantilla

```
Convierte el prompt de abajo en una plantilla reutilizable.

Reglas:
- Reemplaza los datos que cambian (nombres, productos, fechas,
  plazos, montos) por [CORCHETES] con un nombre claro, por ejemplo
  [NOMBRE DE LA CLIENTA].
- Deja fijo lo que no cambia (rol, tono, formato).
- Al inicio, agrega una línea de título que diga para qué sirve.
- Al final, agrega "Qué debo completar antes de usarla".
- No inventes datos nuevos.

PROMPT:
[pega aquí el prompt de la tienda de ropa de la clase 1]
```

<!--
Paso 1: muestra el prompt de la clase 1 (aviso de retraso a Daniela, tienda de ropa en Santa Cruz). Paso 2: pega este pedido. Paso 3: muestra dónde guardar la biblioteca.
Las respuestas varían; no muestres un resultado esperado.
-->

---

<!-- _class: codigo -->

# Ejercicio 1: tu primera plantilla

```
Eres una persona con experiencia en comunicación con clientes de
negocios de belleza.

Contexto: tengo una peluquería pequeña en Tarija. Cada semana tengo
que avisar a clientas que debo reprogramar su cita.

Tarea: convierte el siguiente mensaje en una plantilla reutilizable
con [CORCHETES] para lo que cambia (nombre, día, hora, nuevo día,
nueva hora, motivo). Agrega "Qué completar antes de enviar".

Formato: un bloque de texto, tuteo, máximo 4 líneas, tono cálido.
No inventes información.

MENSAJE DE EJEMPLO:
"Hola Carla, tengo que mover tu cita del martes a las 15:00. ¿Te va
bien el miércoles a las 10:00? Disculpa y gracias por entender."
```

<!--
Min 18–22 (unos 4 min). Que usen un mensaje suyo que ya les funcionó o el de ejemplo.
Otros negocios: taller mecánico que avisa que llegó un repuesto, librería, docente que responde la misma consulta a varios.
Pregunta: "¿Qué datos pusiste entre corchetes? ¿Hay algún dato que no debería estar guardado en la plantilla?"
Min 22: un voluntario comparte su plantilla (2–3 min).
-->

---

# Un flujo es una cadena de pasos pequeños

- Idea → borrador → revisión → versión final
- Un paso, una tarea
- Cada paso usa el resultado del anterior, en el mismo chat
- Tú revisas antes de avanzar

<!--
Min 22–32. "En vez de pedir 'hazme el post perfecto', haces cuatro pasos chicos."
Las 3 reglas del flujo: un paso una tarea (si hace dos cosas, pártelo); cada paso usa el resultado del anterior; tú eres el control de calidad (datos, tono y promesas).
-->

---

<!-- _class: codigo -->

# Demo B · Paso 1: la idea

```
Eres una persona con experiencia en marketing para negocios de comida
pequeños en Bolivia.

Contexto: tengo una salteñería artesanal en Sucre. Vendemos salteñas
de pollo y de carne, hechas por la mañana. Este fin de semana quiero
promocionar un pedido por docena para llevar. No tengo presupuesto
para publicidad pagada; publico en Facebook y en estados de WhatsApp.

Tarea: dame 5 ideas distintas de enfoque para la publicación. Solo la
idea en una línea cada una, sin escribir el texto todavía.

Formato: lista numerada.
```

<!--
Elige una idea en voz alta y explica por qué. Los datos son de ejemplo. El truco: no pedirlo todo de una vez.
-->

---

<!-- _class: codigo -->

# Demo B · Pasos 2 y 3: borrador y revisión

```
Me quedo con la idea número [N]. Escribe un borrador para Facebook:
máximo 6 líneas, tono cercano y cálido, tuteo, 2 emojis como máximo y
un cierre que invite a pedir por WhatsApp. No inventes precios ni
horarios: déjalos como [PRECIO] y [HORARIO].
```
```
Ahora revisa el borrador como un dueño de negocio exigente. Dime:
1) Qué frases suenan genéricas o a plantilla.
2) Qué dato falta o podría generar dudas.
3) Qué sobra.
No reescribas todavía; solo dame la lista de problemas.
```

<!--
Todo en el mismo chat, uno después del otro. La lección clave del paso 3: Claude se revisa con criterios, pero el control final es tuyo.
-->

---

<!-- _class: codigo -->

# Demo B · Paso 4: la versión final

```
Ahora escribe la versión final aplicando esas correcciones. Entrégame
dos cosas: (a) el texto para Facebook, (b) una versión de 3 líneas
para estado de WhatsApp. Deja entre corchetes lo que yo deba
completar.
```

- Los corchetes que quedan son los datos que solo tú sabes

<!--
Cierra con: "Los corchetes que quedan los completas tú, no Claude." Antes de publicar, tú verificas precios, horarios y promesas.
Tabla para decir en voz alta: idea (abres opciones, tú eliges), borrador (primera versión, corriges tono y largo), revisión (busca fallas, aceptas o rechazas), final (ordena todo, completas los corchetes y apruebas).
Min 32: "¿Qué paso de la cadena les cambiaría más el resultado?" (2 min).
-->

---

<!-- _class: codigo -->

# Demo C: el mismo esqueleto en 4 áreas

```
Eres una persona con experiencia en ventas por WhatsApp para tiendas
de ropa.

Contexto: tengo una tienda de ropa femenina en Santa Cruz. Un cliente
me escribió solo "¿precio?" sobre un vestido que vio en Instagram. No
sabe talla ni color. Mi precio es [PRECIO]; hago envíos en la ciudad.

Tarea: escribe una respuesta que dé el precio y haga 2 preguntas
simples para avanzar (talla y color).

Formato: máximo 4 líneas, tuteo, tono amable, sin presionar.
```

- Ventas. Cambian el rol y el contexto; el esqueleto es el mismo

<!--
Min 32–42. Hay un ejemplo por área; en vivo ejecuta 2 o 3 según el tiempo y según lo que escriban en el chat ("¿Cuál es tu área? Escribe una palabra"). Si vas atrasado, recorta a 2 áreas.
Contenido (salteñería en Sucre): guion de 20 segundos con 3 escenas, en tabla (escena, lo que se ve, lo que digo), sin publicidad exagerada.
Estudio (La Paz): "Eres un tutor paciente... hazme 8 preguntas de práctica basadas SOLO en mis apuntes, una por vez, sin darme la respuesta hasta que conteste; si algo no está en mis apuntes, dímelo".
Oficina (oficina contable en Cochabamba): correo formal de "usted" pidiendo el [DOCUMENTO] faltante antes de [FECHA LÍMITE], sin inventar consecuencias legales ni montos.
En estudio, oficina o cualquier tema con datos reales, los datos se verifican.
-->

---

<!-- _class: preguntas -->

# Preguntas del Bloque 1

Lo que quieras preguntar de plantillas y flujos

WhatsApp +591 75414930

<!--
Min 42–47 (5 min). Nombra el momento en voz alta. Si es muy específica de un negocio, responde breve y ofrece verla en el grupo o en privado.
Si preguntan por dinero: "No puedo prometer ingresos. Lo que hacemos es aprender a usar la herramienta para organizarte mejor y mejorar lo que ya haces."
Si no sabes algo: "No lo sé con seguridad, lo reviso y lo confirmo en el grupo."
Min 47–50: "Después de la pausa armas tu propio flujo. Ve pensando qué tarea de tu semana se repite."
-->

---

<!-- _class: pausa -->

# Pausa de 10 minutos

Volvemos con el enlace del Bloque 2 en el chat

Si hiciste tu plantilla, guárdala

<!--
Detén la grabación del Bloque 1 y confirma que se guardó. Pega el enlace del Bloque 2, abre la nueva sala e inicia su grabación.
Si el Bloque 1 se atrasó, recorta la demo C a 2 áreas; la revisión de tareas y la demo B no se sacrifican.
-->

---

# Ejercicio 2: un flujo guiado con tu negocio

- Los mismos 4 pasos, ahora con tu propio negocio
- Cambia solo el contexto y el producto
- Ejemplo: una repostería en Cochabamba para pedidos de fin de año
- Al final: ¿en qué paso cambió más el texto?

<!--
Bloque 2, min 0–12. "Bienvenidos de nuevo. Este bloque es casi todo práctica. Ten tu Claude abierto y copia los prompts del chat."
Tú lo haces en vivo en un solo chat y pegas el prompt de cada paso desde el chat. Prompts del caso (repostería): 1) 5 ideas de enfoque para publicar pedidos de fin de año, una línea cada una. 2) Borrador de máximo 6 líneas, tuteo, 2 emojis, con [PRECIO] y [FECHA LÍMITE DE PEDIDOS]. 3) Revisión como un cliente que nunca nos ha comprado: dudas, frases de plantilla y qué falta; solo la lista. 4) Versión final para Facebook y versión corta para estado de WhatsApp, con corchetes para lo que deba completar.
Preguntas al grupo: "¿En cuál paso cambió más el texto?" y "¿Qué corchete tuviste que completar tú?".
-->

---

<!-- _class: codigo -->

# Ejercicio 3: tu flujo propio

```
Quiero armar un flujo de trabajo repetible con tu ayuda. Hazme, de a
una por vez, estas 5 preguntas y espera mi respuesta:
1) ¿Cuál es la tarea que repito seguido?
2) ¿Qué información tengo al empezar y qué quiero tener al terminar?
3) ¿Quién la va a leer o usar?
4) ¿Qué parte me cuesta más o me quita más tiempo?
5) ¿Qué datos nunca debo dejar que inventes (precios, fechas,
   montos, nombres)?

Luego propón un flujo de 3 a 4 pasos. Para cada paso dame (a) el
nombre, (b) el prompt listo con [CORCHETES] y (c) qué debo verificar
yo antes de pasar al siguiente. No inventes datos sobre mí.
```

<!--
Min 12–25 (13 min). Min 0–2: ejemplo tuyo rápido. Min 2–10: trabajo individual; recorre el chat, quien se trabe escribe "ayuda". Min 10–13: cada uno copia su flujo final en su biblioteca. Avisa a los 5 y a los 2 minutos del final. Cronómetro visible.
Ejemplos de flujos: taller de costura (pedido → resumen → confirmación → recordatorio de entrega), tienda de abarrotes (faltantes → mensaje al proveedor → revisión de cantidades), contadora (documentos pendientes → correo → recordatorio amable → resumen), estudiante (capítulo → resumen → preguntas de práctica), docente (tema → plan de clase de 45 minutos → actividad → ficha).
Si alguien dice que su tarea no es repetitiva: que elija la que más le molesta de la semana; aunque sea una vez al mes, vale.
-->

---

# Comparte tu flujo

- Muestra los 4 pasos, no solo el resultado
- Tapa los datos privados antes de compartir
- Pregunta guía: ¿en qué paso corregiste más?
- Nadie está obligado a compartir

<!--
Min 25–31 (6 min). 2 o 3 voluntarios. A cada uno: "¿En qué paso corregiste más?". Si vas justo, recorta a 2 voluntarios; la encuesta y la despedida sí se mantienen.
Min 31–35: preguntas abiertas (4 min): "Lo que quieras preguntar: de Claude, de tu caso o de lo que sigue".
-->

---

# Qué aprender después

- Proyectos más completos: más archivos y un asistente por área
- Conectores: unir Claude con correo, calendario o documentos
- Automatización: menos pasos manuales, con más cuidado
- Con tu flujo de hoy, usado toda la semana, ya tienes una base

<!--
Min 35–38. Dilo como aprendizaje, no como resultado. NO se promete que sirva para ganar dinero ni ahorrar una cantidad de horas.
Antes de la clase verifica qué conectores existen y en qué plan, porque cambian; no nombres ninguno sin comprobarlo ese mismo día.
Frase sugerida: "No necesitas aprender todo eso ya."
Automatizar: primero se hace a mano y se prueba; solo después tiene sentido automatizar.
-->

---

<!-- _class: tarea -->

# Tarea de la semana

Documenta tu flujo en una página y úsalo toda la semana

- Nombre del flujo y para qué sirve
- Los 3 o 4 pasos, cada uno con su prompt con [CORCHETES]
- Qué debo completar y qué debo verificar antes de enviar
- Al final de la semana, 3 líneas: qué funcionó, qué ajustaste, qué cambiarías

<!--
Min 38–40. Pega el texto de la tarea en el chat. Que borren datos privados (nombres, números, montos de clientes) antes de compartir. Compartir en el grupo es opcional.
Por qué una página: si cabe en una página, se usa; si es larga, se abandona.
Opcional: dejar un testimonio, solo con permiso (se explica más adelante).
-->

---

# Encuesta de 3 preguntas

- ¿Qué fue lo más útil del taller para ti?
- ¿Qué te faltó o qué se pudo explicar mejor?
- ¿Te interesaría un segundo taller más avanzado? (Sí / No / Tal vez)
- Toma 2 minutos. Es para mejorar el taller

<!--
Min 40–43. Pega el enlace en el chat AL INICIO del minuto 40 y dales 2 o 3 minutos en silencio. [Define la herramienta (formulario de Google u otra) y si es anónima, antes de decir que lo es.]
Frase: "Son solo 3 preguntas y me sirven para mejorar el taller y decidir qué sigue. Las respuestas son para mí; no publico tu nombre."
Opcional [decide si la agregas]: en la pregunta 3, "¿Te escribo por WhatsApp para contarte? Sí / No".
Después de la clase: publica resultados SOLO con datos reales y con el total de respuestas a la vista; no redondees ni inventes. Quien responda "No" o no conteste no recibe ofertas.
-->

---

# Un comentario, solo si tú quieres

- Si el taller te sirvió, puedes dejar una frase con tus palabras
- Es totalmente opcional
- Nada se usa sin tu permiso por escrito
- Si prefieres no hacerlo, no pasa nada

<!--
Min 43–45. Es una invitación suave, sin leer nombres en voz alta ni mostrar comentarios del chat como testimonio.
Frase sugerida: "Si me escribes, te respondo por privado, te muestro cómo quedaría y tú decides si lo puedo usar y dónde."
Reglas: permiso explícito y por escrito (que quede en el chat, con captura) que diga dónde se usará y si va con nombre, solo nombre o iniciales. Se guarda el texto tal cual, sin retoques. Se muestra la versión final antes de publicar y puede retirarse cuando quiera. No se pagan, no se atribuyen resultados económicos, no se inventan. Si nadie envía nada, no hay testimonios.
El pedido formal se hace en privado, de uno en uno, unos días después.
-->

---

# Diagnóstico de IA gratis (opcional)

- Si tienes un negocio, ONIA hace un diagnóstico gratis de 20 a 30 minutos por Meet
- Vemos tu caso y qué te conviene automatizar primero
- Si te interesa, escríbeme por privado
- No tienes que decidir hoy

<!--
Min 34–37 del Bloque 2 (máximo 3 minutos, una sola vez). Esta diapositiva reemplaza a las de "Claude nivel 2" y "Otras opciones" (llamada Bs 350, combo, consultoría), que se quitaron el 1/11/2026: Sergio descartó la llamada de Bs 350 y no hay detalle del combo ni de la consultoría.
Texto sugerido: ver TEMARIO-FINAL.md, clase 3. Sin precios, sin cuenta regresiva, sin "cupos limitados", sin promesas de resultados.
PENDIENTE DE SERGIO: enlace real de reserva del diagnóstico (el de cal.com del borrador necesita tu sí).
Si preguntan "¿esto me va a hacer ganar más?": "No puedo prometer ingresos. Lo que ofrezco es acompañamiento para que uses mejor la herramienta en tu trabajo."
-->

---

<!-- _class: pausa -->

# Gracias por estas tres clases

Si te interesa algo, escríbeme por privado: sin compromiso
WhatsApp +591 75414930

Lo más valioso que te llevas es el flujo que armaste. Úsalo esta semana

<!--
Frase de cierre sugerida: "Si alguna de estas opciones te interesa, escríbeme por privado y lo vemos con calma, sin compromiso. Y si no, gracias por haber estado en estas tres clases."
Si piden pensarlo: "Claro. Escríbeme cuando quieras." Nadie tiene que decidir nada hoy. Las grabaciones quedan en el grupo de WhatsApp, con acceso por 30 días para todos los inscritos, incluso los que se sumen tarde.
Al terminar: detén la grabación, comparte solo con inscritos y envía grabaciones de la clase 3 (acceso por 30 días para todos los inscritos, incluso los que se sumen tarde), biblioteca de ejemplo, texto de la tarea y recordatorio de la encuesta. Escribe en privado SOLO a quien preguntó o dijo que le interesa; sin envíos masivos.
-->
