# Guía de guiones diarios

3-nov-2026, por Claude Code (hilo "Armar los guiones diarios de contenido"), a pedido de Sergio Urcullo: "vamos a subir 3 videos diarios. Hay que potenciar al máximo eso. Pero hay que potenciar al máximo que se vea bien" (3-nov, chat del proyecto).

**Estado: borrador.** Lo que sale de esta guía lo ve el público, así que Sergio Urcullo aprueba cada guion antes de grabar y cada video con captura antes de publicar (`AGENTS.md`, "Frenos"). Lo marcado **Propuesta** no lo decidió él.

Sirve para que cualquier agente (Claude o Codex) escriba cada día 3 guiones que no sean genéricos. Los ejemplos para grabar están en [`../guiones/`](../guiones/). Cómo se automatiza está en [guiones-por-telegram](guiones-por-telegram.md).

## De dónde sale

Esta guía junta lo que ya está analizado en el repo, con fuentes:

- [Resumen de referentes](../referentes/resumen-2026-10-29.md), "Tipos de video, guiones y edición".
- Las fichas de [Enrique Rocha](../referentes/enrique-rocha.md) ("Estructura del guion"), [Santiago Muñoz](../referentes/santiago-munoz.md) ("Estructura del guion en reels"), [Iman Gadzhi](../referentes/iman-gadzhi.md) ("Cómo arma el guion") y [Erik Taveras](../referentes/erik-taveras.md).
- GaryVee, de su página oficial: un contenido "pilar" largo del que salen muchas piezas cortas, adaptadas a cada red ([garyvaynerchuk.com](https://garyvaynerchuk.com/THE-GARYVEE-CONTENT-STRATEGY-HOW-TO-GROW-AND-DISTRIBUTE-YOUR-BRANDS-SOCIAL-MEDIA-CONTENT/), consultada el 3-nov-2026; la página no tiene fecha).

**Lo que falta mirar.** Los reels de gonzaloteba, jorge.darek, herasmedia y softgirlnocode, y los ganchos de Hormozi y GaryVee en sus propios reels, no se vieron todavía: Instagram pide sesión. Se miran con la skill [`investigar-referente`](../../.agents/skills/investigar-referente/SKILL.md), en solo lectura, y lo que salga se suma a esta guía. Los "tipos de gancho" de Hormozi que circulan en blogs no se usan hasta leerlos en una fuente suya (`docs/lecciones.md`, "Datos y fuentes").

## Los 3 guiones del día

Cada día lleva uno de cada tipo. Así los 3 videos no se parecen, y cada uno trabaja una parte distinta de la marca: estar al día, la historia de Sergio y enseñar.

| Tipo | Para qué sirve | Duración | Edición (Propuesta) |
|---|---|---|---|
| **N. Noticia o herramienta de IA** | Que te sigan para estar al día. Es el gancho de Santiago ("México lanzó su chatbot… y se rompió") y de Iman ("Breaking: AI has just opened up…") | 30 a 45 s | Cara + captura de la fuente o de la herramienta |
| **P. Proceso: armar la empresa con IA** (si se dice que es estudiante lo confirma Sergio Urcullo, junto con la edad) | Que te sigan por vos. Es el detrás de escena de Erik (homelab, 254 mil vistas en el short) y el "mi empresa la llevan agentes" | 30 a 60 s | B-roll del día y la pantalla real del repo o de los agentes |
| **V. Valor: enseñar una cosa** | Que te guarden y compartan. Es el tutorial de Enrique (un reel por día, de 46 a 113 s) | 45 a 90 s | Plantilla "cara con íconos" ([estilo de edición](estilo-de-edicion.md)) |

## La forma de cada guion

Todos siguen el mismo esqueleto. Sale de los guiones de Enrique y Santiago, con un paso que pidió Sergio Urcullo: **el por qué**. Un guion que dice qué hacer y no por qué funciona es el "básico" que no quiere.

1. **Gancho (0 a 3 s).** Una frase. Tiene que entenderse sin sonido, así que va también escrita en pantalla.
2. **Objeción en boca del público (3 a 7 s).** "Pero Sergio, …". Hace que suene a charla y no a clase (Enrique).
3. **El por qué (7 a 15 s).** Por qué pasa esto o por qué funciona. Es lo que separa un guion de Sergio de uno genérico.
4. **Los pasos o la prueba (15 a 40 s).** Concretos, nombrando dónde tocar o mostrando la pantalla real.
5. **Un límite honesto (1 frase).** Lo que no hace o cuándo no sirve (Enrique; Erik anuncia en el mapa de sus videos "para quién NO es", [ficha de Erik](../referentes/erik-taveras.md)).
6. **Llamado a la acción (últimos 5 s).** Ver abajo.

### Ganchos que usan los referentes

Elegí uno por guion y no repitas el mismo tipo dos veces el mismo día.

| Tipo de gancho | Ejemplo del referente | De quién |
|---|---|---|
| Contraste con una autoridad | Vos le escribís a Claude cosa por cosa, y el creador de Claude Code ya no | Enrique |
| "¿Y si te digo que…?" | Una promesa grande en forma de pregunta | Enrique |
| Provocación | "Claude es basura, ChatGPT es basura" si no sabés escribirles | Enrique |
| Dolor concreto | "Estás quemando tu cuenta sin darte cuenta" | Enrique |
| Noticia con conflicto | "México lanzó su chatbot del Mundial… y se rompió" | Santiago |
| Resultado | "El mejor chatbot de atención que hayas visto, me tardé 30 horas" | Santiago |
| Filtro negativo | Si estás contento con tu trabajo repetitivo, "click off right now" | Iman |
| Espejo del dolor | Enumera las ideas de IA que guardaste y no empezaste: "Sound familiar?" | Iman |
| Noticia en primera persona | "I've just made one of the biggest bets of my career" | Iman |
| Número y "te muestro todo" | 170 contenedores en siete máquinas, "te muestro todo lo que hay adentro" | Erik |
| "Te muestro cómo uso X" | "Te muestro cómo uso X" | Erik |
| Pregunta en el título | "Mi homelab con IA local: vale la pena?" | Erik |

### Llamado a la acción, mientras el funnel no esté decidido

Hasta que se investigue el funnel (hilo de la campaña del taller), **todos los guiones apuntan a la lista del taller "Claude de 0 a 100"**, con una sola frase:

> "Tocá el link de mi bio y escribime: te aviso cuando abra el taller Claude de 0 a 100."

- **Un solo llamado por video,** siempre el mismo, para que el que mira sepa qué hacer.
- **Sin fecha ni precio:** el 3-nov, en el hilo de la campaña del taller, Sergio Urcullo dejó la fecha en pausa: "no definimos fecha tenemos tiempo armemos todo primero". Los estados de Marketing y de negocio todavía dan el 4, 5 y 6-nov: los pone al día el próximo cambio de esa área.
- **Antes de publicar el primer video, hay que cambiar el saludo automático de WhatsApp**, que hoy contesta con las fechas del 4, 5 y 6-nov (`workshops-comunidad/whatsapp-taller-3-4-5-borrador.md`). Lo que dice el reel tiene que coincidir con lo que llega al chat (`docs/lecciones.md`, "Anuncios y venta"). Es un mensaje a clientes: lo aprueba Sergio Urcullo.
- **Propuesta para después:** cerrar con una palabra y una entrega ("escribime GUÍA y te la paso"), como Erik, Enrique y Santiago. Con ese llamado, los comentarios de Enrique llegan al 40-80% de los "me gusta", y sin él al 3-8% ([resumen de referentes](../referentes/resumen-2026-10-29.md)). Necesita la guía escrita y decidir el funnel.

## Reglas de cada guion

- **De vos** (Propuesta: "vos o tú en los guiones" sigue pendiente de Sergio Urcullo en el estado de Marketing).
- **Nada genérico.** Si el guion sirve igual para cualquier creador de IA, no sirve. Tiene que llevar algo que solo Sergio puede decir: su pantalla, su empresa, su error de esa semana.
- **Cada noticia sale de la fuente oficial,** con el enlace y la fecha en la ficha del guion, y tiene como mucho 7 días. Un dato dice solo lo que muestra su fuente (`docs/lecciones.md`, "Datos y fuentes").
- **Sin prometer ingresos ni ahorros en plata,** sin consejos de inversión y sin decir que ONIA Platform anda para clientes.
- **La edad, solo si Sergio Urcullo confirma que la quiere decir.** Hoy no está confirmado en el repo.
- **Sin datos de clientes ni de alumnos en pantalla,** ni correos o logins a la vista.
- **Sin el logo de Claude** y sin dar a entender que el taller es oficial de Anthropic.

## Cómo se escribe cada día

1. **Noticia (N):** mirar las fuentes oficiales de los últimos 7 días: [Anthropic](https://www.anthropic.com/news), [OpenAI](https://openai.com/news/), [Google](https://blog.google/technology/ai/). Elegir la que le cambia algo a quien usa IA en su trabajo, no la más ruidosa.
2. **Proceso (P):** mirar qué se hizo ayer en el repo (`git log --since=yesterday` y los hilos del proyecto) y elegir una cosa que se pueda mostrar en pantalla.
3. **Valor (V):** una cosa que se enseñe en 60 segundos y que salga del temario del taller, para que el video ya sea una muestra.
4. Escribir los 3 con la ficha de abajo, en `marca-personal/guiones/AAAA-MM-DD.md`.
5. Revisar con esta lista antes de entregar: ¿tiene el por qué?, ¿el gancho se entiende sin sonido?, ¿hay algo que solo Sergio puede decir?, ¿el llamado es el de arriba?, ¿la noticia tiene enlace y fecha?

### Ficha de cada guion

```
### <Tipo> · <título corto>
- Gancho (0-3 s): …
- Texto en pantalla del gancho: …
- Objeción (3-7 s): "Pero Sergio, …"
- El por qué (7-15 s): …
- Pasos o prueba (15-40 s): …
- Límite honesto: …
- Llamado (últimos 5 s): "Tocá el link de mi bio y escribime: te aviso cuando abra el taller Claude de 0 a 100."
- Tomas: qué se graba a cámara y qué es pantalla o b-roll.
- Edición: plantilla.
- Fuente: enlace y fecha (obligatorio en N).
```

## Grabación (Propuesta)

Sergio Urcullo está libre desde las 19:00 entre semana. Propuesta: los guiones del día siguiente llegan a las 19:00, se graban en un bloque de 30 a 40 minutos esa noche, y se editan y programan para el día siguiente. Si un día no se puede, se graban 6 el fin de semana. Los horarios de publicación no están decididos.
