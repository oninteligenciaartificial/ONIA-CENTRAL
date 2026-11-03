# Estilo de edición de ONIA

Lo que la skill [`editar-video`](../../.agents/skills/editar-video/SKILL.md) fue aprendiendo de los videos de referencia. Se lee antes de editar y se pone al día después de cada video visto y de cada corrección de Sergio Urcullo. Cada regla dice de qué videos sale. Lo que no se midió se marca "sin medir".

Videos vistos: 6 reels de Erik Taveras. El 2-nov se vieron 4 en 20 cuadros cada uno, sin audio. El 3-nov se bajaron con gallery-dl 5 de ellos (3 de esos 4 y 2 nuevos) y se midieron con su audio, más una hoja de un cuadro por segundo de sus primeros 30 s. El detalle está en [erik-taveras-edicion.md](../referentes/erik-taveras-edicion.md).

Plantillas de HyperFrames, una por formato, en [`plantillas/`](plantillas/). Un formato pasa a plantilla firme recién con tres referencias del mismo estilo. Hasta entonces es un borrador.

## Formatos

Para qué sirve cada formato es una propuesta del autor, no algo que se haya medido.

- **Pantalla partida:** gráficos arriba y la cara abajo, con el subtítulo en la línea del medio. Sirve para explicar un sistema con varias piezas. Fuente: Erik, "IA local".
  - Medido el 3-nov con el archivo y HyperFrames 0.9.6 (`measure cuts`, `measure events` y `audio`): 140 s con 5 cortes duros. De sus 6 tomas, la más larga dura 64,7 s y la mediana, 9,75 s. Hay 358 cambios en pantalla, unos 2,6 por segundo, y lo más largo que queda quieto son 2,77 s. `audio` lo clasifica como voz (0,83), a -14 LUFS.
- **Manos y objeto, sin cara:** sirve para mostrar algo físico o una pantalla. Fuente: Erik, "Pantalla ESP32".
- **Cara a cuadro completo, con íconos encima:** sirve para avisos cortos, de unos 30 s, y para explicar paso a paso, de 1:30 a 2:20. Fuentes: Erik, "Vulnerabilidad de Node.js", "Sesión de Claude y Codex" (https://www.instagram.com/reel/DewRmwpxRoU/) y "Ruta de aprendizaje" (https://www.instagram.com/reel/Deruw5exE-A/). Plantilla firme, con 3 referencias: [`plantillas/cara-con-iconos`](plantillas/cara-con-iconos/index.html).
  - **Lo que se repite en los 3** (hojas de un cuadro por segundo, 3-nov): la cara a cuadro completo, los subtítulos arriba, el gráfico a la altura del pecho o la cintura, etiquetas monoespaciadas con un punto adelante, y gráficos que se arman de a una pieza (íconos, barras o filas con tildes) y cambian sus datos en el lugar ("V22 · VIEJA" a "22.23.4", barras de precio con "-50 %", tildes que se suman a una tabla).
  - **Lo que cambia:** los subtítulos van en mayúsculas en 2 y en minúsculas, más chicos, en "Ruta de aprendizaje". El acento es verde en 2 y azul en "Ruta de aprendizaje". Por eso la plantilla deja el color y las mayúsculas en variables.
  - **"Sesión de Claude y Codex"**, medido el 3-nov con HyperFrames 0.9.6 (`measure cuts`, `measure events` y `audio`): 91,9 s con 3 cortes duros. De sus 4 tomas, la mediana dura 20,81 s y la más larga, 47,53 s. Hay 230 cambios en pantalla, unos 2,5 por segundo, y nada queda quieto más de 0,77 s. `audio` lo clasifica como voz (0,83), a -14,1 LUFS.
  - **"Ruta de aprendizaje"**, medido igual: 139,2 s con 31 cortes duros. De sus 32 tomas, la mediana dura 3,87 s y la más larga, 11,43 s. Hay 260 cambios en pantalla, unos 1,9 por segundo, y nada queda quieto más de 1,4 s. `audio` lo clasifica como voz (0,88), a -14 LUFS.
  - **"Vulnerabilidad de Node.js"**, a un cuadro por segundo: el plano cambia (más cerca, más lejos o de ángulo) en los cuadros de 4, 14, 17, 20, 21 y 23 s, o sea cada 1 a 10 s, sin cortes en el gancho.
    - Entre un gráfico y el siguiente pasa una línea vertical fina en el acento (cuadros de 16 y 25 s).
    - Los datos se actualizan en el mismo gráfico: "V22 · VIEJA" pasa a "22.23.4" (cuadros de 17 y 18 s).
    - El cierre ocupa los últimos 4 s: la palabra entra en el cuadro de 26 s, el óvalo aparece en el de 27 s y la línea de abajo en el de 29 s.
  - **"Vulnerabilidad de Node.js"**, medido el 3-nov con el archivo y HyperFrames 0.9.6 (`measure cuts`, `measure events` y `audio`): 30,6 s sin un solo corte duro. Hay 82 cambios en pantalla, unos 2,7 por segundo, y nada queda quieto más de 0,57 s. Los cambios de plano pasan dentro de una misma toma, sin cortar. `audio` clasifica el archivo como voz (0,79), sin silencios hasta el final, a -14 LUFS. Si hay música debajo: sin medir, porque `audio` no separa la voz de la música.
- **Cara con capturas que tapan la mitad de arriba:** sirve para mostrar trabajo real, como flujos, chats o correos. Fuente: Erik, "Mis 25 flujos".
  - Medido el 3-nov con el archivo y HyperFrames 0.9.6 (`measure cuts`, `measure events` y `audio`): 105,6 s con 15 cortes duros. De sus 16 tomas, la mediana dura 5,9 s y la más larga, 24,6 s. Hay 245 cambios en pantalla, unos 2,3 por segundo, y nada queda quieto más de 0,5 s. `audio` lo clasifica como voz (0,75), a -14,1 LUFS.

## Reglas

- **Gancho en 2 s:** un número, una alarma o "te muestro lo mío" (3 de 4). El cuarto, el de la placa, abre retomando un reel anterior de la serie.
- **Subtítulos de 2 a 4 palabras,** con la palabra clave en otro color, casi siempre verde menta y a veces violeta o naranja. Fuente: los 4.
- **Gráficos oscuros propios:** etiquetas monoespaciadas con un punto adelante y un solo color de acento por reel. Es verde en los 4 de la ficha y en "Sesión de Claude y Codex", y azul en "Ruta de aprendizaje".
- **Cada gráfico entra con el subtítulo de su palabra.** Si va con la voz: sin medir. Fuente: "Vulnerabilidad" y "Mis 25 flujos".
- **Cierre "Comenta PALABRA",** con la palabra en grande y en el color de acento. Fuente: los 4.
- **Ritmo:** en los 5 reels de Erik medidos el 3-nov con el archivo y HyperFrames 0.9.6 ("Vulnerabilidad", "IA local", "Mis 25 flujos", "Sesión de Claude y Codex" y "Ruta de aprendizaje"), `measure events` cuenta entre 1,9 y 2,7 cambios en pantalla por segundo, y `measure cuts`, entre 0 y 31 cortes duros. Los 5 están entre -14 y -14,1 LUFS. Qué es lo que cambia no se midió: que sean los subtítulos y los gráficos es una lectura del autor, a partir de las hojas de cuadros.
- **Música y efectos:** sin medir.
