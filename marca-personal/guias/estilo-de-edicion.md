# Estilo de edición de ONIA

Lo que la skill [`editar-video`](../../.agents/skills/editar-video/SKILL.md) fue aprendiendo de los videos de referencia. Se lee antes de editar y se pone al día después de cada video visto y de cada corrección de Sergio Urcullo. Cada regla dice de qué videos sale. Lo que no se midió se marca "sin medir".

Videos vistos: 4 reels de Erik Taveras, sin audio. El 2-nov se vieron en 20 cuadros cada uno, y el 3-nov se volvió a ver "Vulnerabilidad" a un cuadro por segundo. El detalle está en [erik-taveras-edicion.md](../referentes/erik-taveras-edicion.md).

Plantillas de HyperFrames, una por formato, en [`plantillas/`](plantillas/). Un formato pasa a plantilla firme recién con tres referencias del mismo estilo. Hasta entonces es un borrador.

## Formatos

Para qué sirve cada formato es una propuesta del autor, no algo que se haya medido.

- **Pantalla partida:** gráficos arriba y la cara abajo, con el subtítulo en la línea del medio. Sirve para explicar un sistema con varias piezas. Fuente: Erik, "IA local".
  - Medido el 3-nov con el archivo y HyperFrames 0.9.6 (`measure cuts`, `measure events` y `audio`): 140 s con 5 cortes duros. De sus 6 tomas, la más larga dura 64,7 s y la mediana, 9,75 s. Hay 358 cambios en pantalla, unos 2,6 por segundo, y lo más largo que queda quieto son 2,77 s. `audio` lo clasifica como voz (0,83), a -14 LUFS.
- **Manos y objeto, sin cara:** sirve para mostrar algo físico o una pantalla. Fuente: Erik, "Pantalla ESP32".
- **Cara a cuadro completo, con íconos encima:** sirve para avisos y noticias cortas, de unos 30 s. Fuente: Erik, "Vulnerabilidad de Node.js". Plantilla en borrador: [`plantillas/cara-con-iconos`](plantillas/cara-con-iconos/index.html), con 1 referencia de 3.
  - A un cuadro por segundo: el plano cambia (más cerca, más lejos o de ángulo) en los cuadros de 4, 14, 17, 20, 21 y 23 s, o sea cada 1 a 10 s, sin cortes en el gancho.
  - Entre un gráfico y el siguiente pasa una línea vertical fina en el acento (cuadros de 16 y 25 s).
  - Los datos se actualizan en el mismo gráfico: "V22 · VIEJA" pasa a "22.23.4" (cuadros de 17 y 18 s).
  - Medido el 3-nov con el archivo y HyperFrames 0.9.6 (`measure cuts`, `measure events` y `audio`): 30,6 s sin un solo corte duro. Hay 82 cambios en pantalla, unos 2,7 por segundo, y nada queda quieto más de 0,57 s. Los cambios de plano pasan dentro de una misma toma, sin cortar. `audio` clasifica el archivo como voz (0,79), sin silencios hasta el final, a -14 LUFS. Si hay música debajo: sin medir, porque `audio` no separa la voz de la música.
  - El cierre ocupa los últimos 4 s: la palabra entra en el cuadro de 26 s, el óvalo aparece en el de 27 s y la línea de abajo en el de 29 s.
- **Cara con capturas que tapan la mitad de arriba:** sirve para mostrar trabajo real, como flujos, chats o correos. Fuente: Erik, "Mis 25 flujos".
  - Medido el 3-nov con el archivo y HyperFrames 0.9.6 (`measure cuts`, `measure events` y `audio`): 105,6 s con 15 cortes duros. De sus 16 tomas, la mediana dura 5,9 s y la más larga, 24,6 s. Hay 245 cambios en pantalla, unos 2,3 por segundo, y nada queda quieto más de 0,5 s. `audio` lo clasifica como voz (0,75), a -14,1 LUFS.

## Reglas

- **Gancho en 2 s:** un número, una alarma o "te muestro lo mío" (3 de 4). El cuarto, el de la placa, abre retomando un reel anterior de la serie.
- **Subtítulos de 2 a 4 palabras,** con la palabra clave en otro color, casi siempre verde menta y a veces violeta o naranja. Fuente: los 4.
- **Gráficos oscuros propios:** etiquetas monoespaciadas con un punto adelante y un solo acento verde. Fuente: los 4, según la ficha.
- **Cada gráfico entra con el subtítulo de su palabra.** Si va con la voz: sin medir. Fuente: "Vulnerabilidad" y "Mis 25 flujos".
- **Cierre "Comenta PALABRA",** con la palabra en grande y en el color de acento. Fuente: los 4.
- **Ritmo:** en los 3 reels de Erik medidos el 3-nov con el archivo y HyperFrames 0.9.6 ("Vulnerabilidad", "IA local" y "Mis 25 flujos"), `measure events` cuenta entre 2,3 y 2,7 cambios en pantalla por segundo, y `measure cuts`, entre 0 y 15 cortes duros. Qué es lo que cambia no se midió: que sean los subtítulos y los gráficos es una lectura del autor, a partir de las hojas de cuadros.
- **Música y efectos:** sin medir.
