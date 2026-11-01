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
## Clase 2 · Tus archivos y tus Proyectos

OnIA · Jueves 5/11/2026 · 19:00 (hora de Bolivia)
WhatsApp +591 75414930

<!--
NOTAS PARA SERGIO
- Clase grabada; un bloque por sala de Meet (dos enlaces, dos grabaciones).
- Todos los datos de esta clase son inventados para practicar. Dilo en voz alta: "Estos números son de ejemplo, no son reales".
- Antes de la clase: ten listos contrato-ejemplo.pdf, cotizacion-A.pdf, cotizacion-B.pdf, ventas-semana.csv y preguntas-frecuentes.txt, y un enlace para que descarguen los de ejemplo [define dónde].
- Objetivo: que suban un archivo y pidan algo útil, verifiquen lo que responde y salgan con un Proyecto propio armado y probado.
- No se promete: ingresos, ahorros con cifras ni que Claude "no se equivoca".
-->

---

# Qué haremos hoy

- Revisamos la tarea de la clase 1
- Bloque 1: subir archivos, pedir bien y verificar
- Bloque 2: armar tu Proyecto (un asistente con instrucciones fijas)
- Al final: tarea de la semana

<!--
Min 0–3 del Bloque 1. Recuerda: se apoya en la fórmula Rol + Contexto + Tarea + Formato + Ejemplo y en que la primera respuesta es un borrador.
Pregunta de nivel (1 min): "¿Quién pudo subir un archivo a Claude alguna vez? Cuéntame en el chat".
Pide que tengan Claude abierto en otra pestaña.
-->

---

# Acuerdos de la clase

- La clase se graba: todos los inscritos, incluso los que se sumen tarde, reciben la grabación con acceso por 30 días
- Usa el chat para dudas cortas
- No subas datos sensibles: ni carnets, ni cuentas, ni contraseñas
- Todo lo de hoy es práctica con datos de ejemplo

<!--
Reglas del chat: pararemos para preguntas en momentos marcados.
Soporte urgente (cuenta, enlaces) por [canal que definas] para no frenar la clase.
-->

---

# Revisión de la tarea de la clase 1

- Quien la hizo, escribe 1 en el chat
- Voluntarios muestran su peor y su mejor respuesta
- Pregunta guía: ¿qué pieza de la fórmula lo habría arreglado?
- Quien no la hizo: no pasa nada, aprende con las de los demás

<!--
Min 3–15 (12 min). 3 o 4 voluntarios, 2 minutos cada uno. Que tapen datos privados. No se critica a quien trae una mala respuesta.
Cierra con el patrón que aparezca; no des por hecho cuál será (suelen ser falta de contexto, tono equivocado o datos inventados: confirma si aparecen en tu grupo).
Si casi nadie hizo la tarea: muestra dos ejemplos propios (uno malo, uno bueno) y di que son tuyos. No inventes resultados de alumnos.
Min 15: preguntas sobre la tarea (2 min).
-->

---

# Cómo se adjunta un archivo

- Busca el botón de adjuntar en el cuadro de mensaje
- También puedes arrastrar el archivo al chat
- Claude lee documentos, hojas de cálculo e imágenes
- Hay límites de tamaño y cantidad: mira la ayuda oficial

<!--
Min 15–18. Navega en vivo. [Confirma en tu cuenta qué formatos acepta hoy.] No digas cifras de límites que no verificaste.
-->

---

<!-- _class: codigo -->

# Demo A: PDF, el pedido flojo

Caso: un contrato de alquiler de un local en Tarija (datos ficticios).

```
Resume esto.
```

- Adjunta el PDF
- Pregunta: ¿esto me dice qué debo hacer yo?

<!--
Min 18–25. Preparación: contrato-ejemplo.pdf con 7 cláusulas ficticias (objeto, plazo de 12 meses desde el 1/12/2026, canon Bs 2.500, garantía de un mes, preaviso de 60 días, usos, mejoras). Falta A PROPÓSITO la cláusula de luz y agua para que Claude la marque como duda.
Lee el resultado en voz alta. Las respuestas varían: no prometas el texto exacto.
-->

---

<!-- _class: codigo -->

# Demo A: PDF, con la fórmula

```
Eres una persona que explica documentos con palabras simples a alguien
que no es especialista.

Contexto: voy a abrir una tienda de abarrotes en Tarija y recibí este
contrato de alquiler (adjunto). No soy abogada.

Tarea: resume el contrato y extrae los datos clave.

Formato:
1) Resumen en 3 líneas.
2) Tabla: concepto, dato y número de cláusula.
3) Lo que yo debo hacer o pagar, con fechas.
4) "Dudas": lo que NO aparece y debería preguntar antes de firmar.
Si algo no está en el documento, no lo inventes.
```

<!--
Compara la tabla con el PDF original, dato por dato: revisamos monto y fecha, que es lo más caro de equivocarse.
Si Claude marca la falta de la cláusula de luz y agua, señálalo. Si no la marca, también es una lección: la pregunta de "Dudas" ayuda pero no reemplaza leer el documento.
Aclara: es una ayuda de lectura, NO es asesoría legal. Un contrato real se revisa con un abogado.
Min 25: un voluntario comparte (2 min).
-->

---

<!-- _class: codigo -->

# Ejercicio 1: comparar dos cotizaciones

```
Eres un asistente administrativo con experiencia en compras para
talleres pequeños.

Contexto: tengo un taller de costura en La Paz. Necesito 50 metros de
tela drill azul para un pedido de uniformes que debo entregar en 3
semanas. Adjunto dos cotizaciones.

Tarea: compáralas y dime cuál me conviene más y por qué.

Formato:
1) Tabla: proveedor, precio de la tela, envío, total final, plazo de
   entrega, forma de pago.
2) Recomendación en 3 líneas, considerando mi plazo.
3) "Verifica tú": los números que debo recalcular a mano.
Si un dato no está en las cotizaciones, no lo inventes.
```

<!--
Min 25–35: 4 min para hacerlo, 3 para comparar y 3 de verificación. Adjunta cotizacion-A.pdf y cotizacion-B.pdf (también puedes usar fotos para mostrar que lee imágenes).
Datos ficticios. A: Telas Andinas, 50 m a Bs 28 = Bs 1.400, envío Bs 60, 5 días, 50 % adelanto. B: Textiles El Sol, 50 m a Bs 25 = Bs 1.250, envío aparte Bs 120, 12 días, contra entrega.
Versión floja para contraste: "Compara estas dos cotizaciones."
Otros negocios: ferretería comparando cemento, agencia en Uyuni comparando alojamientos, restaurante comparando insumos.
-->

---

# Verifica los números delante de todos

- A: 1.400 + 60 = Bs 1.460
- B: 1.250 + 120 = Bs 1.370
- Compara con la tabla de Claude
- Si no coincide, es la mejor lección

<!--
Hazlo en una calculadora, en vivo. Si coincide, dilo; si no coincide, es la mejor demostración de por qué se verifica.
Dato a mirar: B es más barato pero tarda 12 días. Con un plazo de 3 semanas (21 días) ambos llegan a tiempo; B se paga contra entrega.
Recuerda decir: "Estos números son de ejemplo, no son reales".
-->

---

<!-- _class: codigo -->

# Ejercicio 2: pregúntale a una hoja de cálculo

```
Eres una persona que ayuda a pequeños negocios a entender sus
números con palabras simples.

Contexto: tengo una panadería pequeña en Sucre. Adjunto las ventas de
3 días de una semana (ejemplo).

Tarea: responde 1) ¿cuánto vendí en total? 2) ¿cuánto por producto?
3) ¿qué día vendí más? 4) ¿qué producto me deja más ingreso?

Formato: una línea por pregunta, con el número y qué filas o columnas
usaste. Al final, "Cómo verifico esto" con la suma que debo hacer en
mi planilla. Si algo no se puede calcular, dilo y no lo inventes.
```

<!--
Min 35–43. Archivo: ventas-semana.csv (columnas Dia, Producto, Cantidad, Precio_Bs, Total_Bs; lunes a miércoles; pan francés, salteña y torta).
Respuestas correctas calculadas a mano (verifícalas ANTES de la clase): total Bs 2.766; pan francés Bs 1.116, salteña Bs 1.200, torta Bs 450; día con más ventas: martes (Bs 960); producto que más ingreso deja: salteña.
Verificación en vivo: suma la columna Total_Bs en la planilla y compárala con la respuesta de Claude. Mensaje clave: Claude resume y explica números, pero las cuentas importantes las compruebo yo.
Versión floja: "Analiza este archivo."
Min 43: "¿Algo que les costó al subir archivos?" (2 min).
-->

---

# Qué subir y qué NO subir

- NO: carnets, cuentas bancarias, contraseñas, tarjetas ni QR de cobro
- NO: datos de clientes o terceros sin necesidad
- NO: documentos confidenciales sin permiso
- En su lugar: anonimiza ("Cliente 1"), tapa datos o usa un ejemplo

<!--
Min 43–48. Qué decir: "Claude lee tu archivo y resume bien muchas veces, pero puede equivocarse, sobre todo con números, fechas y detalles. Y lo que subes sale de tu computadora, así que primero piensa qué estás subiendo."
Privacidad de la cuenta: muestra en vivo qué opciones ves hoy en la configuración y no afirmes nada que no hayas visto. [Verifica antes de la clase.]
Límites del plan gratis: el uso es limitado y se renueva con el tiempo; subir muchos archivos puede agotarlo. Si te corta, sigues después o trabajas en pareja. Revisa los detalles el mismo día; no digas cifras de memoria.
-->

---

# Cómo verifico

- Pide la fuente: "indica la cláusula" o "indica la fila"
- Pide "Dudas": lo que no está en el archivo, aparte
- Recalcula montos, totales y fechas
- Para temas legales, médicos o financieros serios, decide un profesional

<!--
Quinto hábito completo: compara con el original en lo que cuesta caro equivocarse (precios, plazos, garantías, contratos). No sacrifiques esta diapositiva si vas atrasado.
Min 48: preguntas sobre privacidad y límites (2 min).
-->

---

<!-- _class: pausa -->

# Pausa de 10 minutos

Volvemos con el enlace del Bloque 2 en el chat

Si no lograste subir un archivo, inténtalo ahora

<!--
Detén la grabación del Bloque 1 y confirma que se guardó.
Pega el enlace del Bloque 2, abre la nueva sala e inicia la grabación. Ten a mano el Proyecto de Marisol SIN instrucciones, para crearlo en vivo desde cero.
-->

---

# Chat suelto o Proyecto

- Chat suelto: cada vez le explicas lo mismo a Claude
- Proyecto: las instrucciones y los archivos quedan fijos
- Hoy armas tu primer Proyecto
- Claude redacta y tú revisas, copias y envías

<!--
Bloque 2, min 0–3: "Cada vez que le explicas lo mismo a Claude en un chat nuevo, pierdes tiempo. Hoy lo evitamos."
En este taller el asistente NO está conectado a WhatsApp.
-->

---

# Qué es un Proyecto

- Instrucciones fijas: quién es el asistente y qué reglas sigue
- Archivos de tu negocio que Claude usa como fuente
- Chats que viven dentro del Proyecto
- Es como dejarle un manual al asistente

<!--
Min 3–8. Muestra una diapositiva o un dibujo de 3 cajas: Instrucciones / Archivos / Chats.
-->

---

<!-- _class: codigo -->

# Demo B: instrucciones del Proyecto de Marisol

```
Eres el asistente de atención al cliente de una tienda de ropa
femenina en Santa Cruz de la Sierra que vende por WhatsApp e Instagram.

Público: mujeres adultas que escriben por WhatsApp, a veces con apuro.

Tono: cercano y respetuoso, con tuteo, máximo 1 emoji.

Reglas:
- Responde usando SOLO la información de los archivos del proyecto.
- Si algo no está, responde "Eso lo confirmo y te aviso" y avísame qué
  faltó. No inventes precios, plazos ni stock.
- Nunca pidas carnet, números de cuenta ni contraseñas.

Formato: máximo 4 líneas, listas para copiar a WhatsApp.
```

<!--
Min 8–18. Pasos en vivo: crea el Proyecto "Atención al cliente – Marisol", pega estas instrucciones y sube preguntas-frecuentes.txt (archivo ficticio: envíos Bs 15 dentro del segundo anillo y Bs 25 fuera, pagos por QR o transferencia, cambios en 7 días, atención de lunes a sábado de 9:00 a 19:00, tallas S a L sin XL, sin descuentos por mensaje).
Mensaje clave: lo que no está en los archivos, el asistente puede inventarlo. Por eso va la regla "no inventes" y por eso tú revisas cada respuesta antes de enviarla.
-->

---

<!-- _class: codigo -->

# Demo B: pruébalo con tres mensajes

```
Hola, ¿cuánto cuesta el envío a Equipetrol?
```
```
¿Tienen talla XL?
```
```
¿Me haces un descuento si compro 3?
```

- Uno por vez. ¿Dónde acertó y dónde falló?

<!--
Pruébalos uno por uno. 1) La respuesta está en el archivo; Equipetrol puede estar dentro o fuera del segundo anillo: mira si Claude lo aclara o pregunta. 2) El archivo dice que no se trabaja XL. 3) El archivo dice que no hay descuentos por mensaje.
Pregunta al grupo: "¿Qué regla agregarías?". Ajusta las instrucciones en vivo y vuelve a probar.
Min 18: pausa de preguntas, 2 min.
-->

---

<!-- _class: codigo -->

# Plantilla de instrucciones fijas (6 partes)

```
Eres [quién es el asistente] de [negocio], que [qué hace] en [ciudad].

Público: [a quién atiende o para quién escribe].

Tono: [cercano o formal, tuteo, emojis o no].

Reglas:
- Responde usando SOLO la información de los archivos del proyecto.
- Si algo no está, responde "[tu frase]" y dime qué faltó.
  No inventes precios, plazos ni datos.
- Nunca pidas ni uses datos sensibles.
- [otra regla de tu negocio]

Formato: [largo, estructura, para WhatsApp, correo, etc.]

Ejemplo del estilo que me gusta: "[un texto tuyo]"
```

<!--
Min 18–23. "Dile quién es, a quién atiende, cómo habla, qué reglas sigue y qué NO debe hacer."
Pega esta plantilla en el chat para que la copien.
-->

---

# Ejercicio 3: arma tu asistente

- Elige una tarea repetitiva de tu trabajo o negocio
- Crea el Proyecto y pega la plantilla con tus datos
- Sube un archivo corto, sin datos sensibles
- Prueba con 3 mensajes y agrega una regla para lo que falle

<!--
Min 23–38: 12 minutos de trabajo y 3 de comparación. Tú no compartes pantalla: recorre el chat respondiendo dudas.
Ideas de negocios: pastelería en Cochabamba (pedidos y cambios), agencia de turismo en La Paz (salidas a Copacabana), taller mecánico en Santa Cruz (avisos de vehículo listo), estudiante (resumir lecturas en el mismo formato), emprendimiento de ropa en Oruro (tallas y envíos). Archivos con datos inventados.
Plan B si alguien no puede crear Proyectos o se queda sin uso: trabajar en pareja o continuar después.
Cierra preguntando: "¿Qué regla agregaste después de probar?". Min 38: dos voluntarios cuentan su asistente (3 min).
-->

---

<!-- _class: codigo -->

# Demo C: un Artifact, una tabla lista

```
Con la información del archivo de preguntas frecuentes, crea una tabla
de respuestas rápidas con dos columnas: "Lo que pregunta el cliente" y
"Respuesta lista para WhatsApp (máximo 3 líneas)". Incluye una fila por
cada tema del archivo. Si un tema no tiene respuesta clara, márcalo como
"Falta confirmar".
```

- Un Artifact aparece en un panel aparte: puedes copiarlo o descargarlo

<!--
Min 38–44. Muestra el panel, cómo copiar el contenido y cómo pedir un ajuste en el mismo chat: "Agrega una fila para pagos con tarjeta que diga 'Falta confirmar'".
Verifica antes de la clase que tu plan incluye Artifacts y Proyectos (al 31/10/2026 el temario decía que sí en el plan gratis, con un máximo de 5 Proyectos; vuelve a comprobarlo).
Si hay problemas técnicos, recorta esta demo a un ejemplo rápido. El Ejercicio 3 no se sacrifica.
-->

---

# Errores comunes

- Subir un archivo y pedir solo "analízalo"
- Creer los números sin verificar
- Instrucciones vagas o sin la regla "si no sabes, dilo"
- Enviar la respuesta sin leerla

<!--
Min 44–48. Otros de la lista: subir datos sensibles, no pedir "Dudas", archivos desordenados o gigantes, no actualizar el archivo cuando cambian los precios, usar un solo Proyecto para todo, tratar un resumen como asesoría profesional, abandonar tras una mala prueba.
-->

---

<!-- _class: preguntas -->

# Preguntas

Dudas sobre archivos, Proyectos o la tarea

WhatsApp +591 75414930

<!--
Min 48–50. Si preguntan por dinero: "No puedo prometer ingresos. Lo que hacemos es aprender a usar la herramienta para organizar mejor tu trabajo y tu tiempo."
Si preguntan si pueden conectar el asistente a WhatsApp para que responda solo: "En este taller el asistente redacta y tú copias y envías. Conectarlo es otro tema." No prometas nada más.
Si preguntan por límites o precios del plan: muestra la página oficial de ese día.
-->

---

<!-- _class: tarea -->

# Tarea de la semana

Crea un Proyecto con tus instrucciones y úsalo 2 veces

- Sube un archivo corto, sin datos sensibles
- Revisa cada respuesta antes de usarla
- Si se equivoca, agrega una regla a las instrucciones
- Anota en 3 líneas: ¿para qué lo usé? ¿qué me facilitó? ¿qué corregí?

<!--
Pega el texto de la tarea en el chat. Pide que cuenten con sus palabras lo que notaron: no hace falta poner cifras si no las midieron. Si alguien midió algo real, que lo cuente como su dato, no como un resultado del taller.
Que borren datos privados antes de mostrar nada en la clase 3.
Ideas si no saben qué armar: responder consultas frecuentes, preparar cotizaciones, resumir lecturas, ordenar pendientes semanales, redactar correos a proveedores.
-->

---

<!-- _class: pausa -->

# Hoy subiste archivos y armaste un asistente

Próxima clase: sábado 7/11 · 19:00 · Flujos y siguiente paso
Trae tu Proyecto

OnIA · WhatsApp +591 75414930

<!--
Confirma que el sábado 7/11 es correcto: de esa fecha dependen el cierre del taller y las fechas de «Claude nivel 2».
Al terminar: detén la grabación, comparte solo con inscritos, y envía grabaciones (acceso por 30 días para todos los inscritos, incluso los que se sumen tarde), archivos de ejemplo, plantilla de 6 partes, texto de la tarea y datos de la clase 3. Anota qué preguntas se repitieron y qué dificultades técnicas hubo (sin nombres ni capturas).
-->
