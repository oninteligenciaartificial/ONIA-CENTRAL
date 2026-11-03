# Higgsfield para los 3 videos diarios

3-nov-2026, por Claude Code (hilo "Investigar formatos de video con Higgsfield"), a pedido de Sergio Urcullo: "si querés hacer videos con Higgsfield, eso necesita investigación de formatos y todo eso" (3-nov, chat del proyecto).

**Estado: borrador, solo investigación.** No se generó nada ni se tocó la cuenta. Cada generación gasta créditos y pide el sí de Sergio Urcullo con captura (`AGENTS.md`, "Frenos"; [anuncios](anuncios.md), "Frenos"). Lo marcado **Propuesta** no lo decidió él.

## Lo corto

- **Higgsfield no reemplaza a HyperFrames: le da materia prima.** HyperFrames arma el video (subtítulos, gráficos, cierre) gratis en la PC. Higgsfield genera lo que no se puede grabar: imágenes, planos cortos de b-roll y portadas.
- **El saldo no alcanza para video generado en los 3 videos de todos los días.** Con 2 planos de 5 s por video, son entre 2.244 y 3.060 créditos hasta el 20-nov (cuenta abajo), y la cuenta tenía 432,93 el 29-oct ([anuncios](anuncios.md)).
- **La recomendación:** imágenes de Higgsfield (casi gratis) animadas en HyperFrames para todos los días, y un plano de video generado solo para el gancho, en 12 de los 17 días como mucho.

## Qué ofrece Higgsfield que sirve acá

Fuentes: el catálogo de flujos del conector de Higgsfield (`get_workflow_instructions`, leído el 3-nov) y el blog oficial. El saldo y el plan de la cuenta **no se pudieron leer el 3-nov**: el conector respondió que la sesión venció y hay que volver a autorizarlo.

| Herramienta | Qué hace | Para cuál de los 3 videos | Costo |
|---|---|---|---|
| Imágenes (Soul 2.0, Nano Banana Pro, FLUX.2 Pro) | Una imagen desde un texto | Fondos, "pantallas" de ejemplo y escenas para N y V, animadas después en HyperFrames | Soul 2.0: 0,125 créditos; FLUX.2 Pro: 1; Nano Banana Pro: 2 [P1] |
| Video (Seedance 2.0, Kling, Veo) | Un plano corto de 5 a 8 s desde un texto o una imagen | B-roll del gancho: "un negocio de noche con el celular sonando" | Seedance 2.0, 5 s a 720p: unos 22 según [P1] el 3-nov, y 30 según la misma página el 29-oct ([anuncios](anuncios.md)); Seedance 2.0 Fast, 8 s a 720p: 28 [P2] |
| `reel-effects` | Efectos fijos sobre un video de cara: texto detrás de la cabeza, cuadro congelado con nombre, gráfico de vidrio, antes y después, ranking, subtítulos | V y P, sobre la grabación de Sergio | El único paso pago es recortar el fondo (`remove_background`), sin precio publicado; el resto corre en la nube de Higgsfield sin generar [W1] |
| `thumbnail-generation` | Portadas de YouTube e Instagram | El video horizontal del domingo | Por imagen, sin precio fijo publicado [W1] |
| Shorts Studio | Cambia el estilo visual de un clip de hasta 2 min, a 720p | No conviene: cambia la cara real de Sergio | Unos US$4 por clip de 25 s [P3] |
| Speak y Lipsync Studio | Hace hablar una foto | No conviene para el contenido diario | Speak 2.0, 5 s a 720p: unos 14; pide Plus o Ultra [P1] |

Lo que pesa para elegir:
- **La cara real genera más confianza,** y es lo que hacen los cuatro referentes ([anuncios](anuncios.md), "Con Higgsfield"). Por eso Speak y Shorts Studio quedan afuera de los 3 videos diarios.
- **Desde el conector (MCP), Higgsfield siempre cobra créditos,** también en los modelos que el plan da "ilimitados" en la web [P1]. Si se quiere usar lo ilimitado, se genera desde la web de Higgsfield, a mano.
- **Lo hecho no se devuelve:** una generación terminada gasta los créditos aunque no guste; una que falla, en general, los devuelve [P1].
- **Los créditos del plan no pasan al mes siguiente** [P1].

## Qué hacen con Higgsfield los creadores de IA

- **Santiago Muñoz:** b-roll y animaciones con Higgsfield conectado a Claude, y edita con Claude Code y HyperFrames o Remotion ([ficha](../referentes/santiago-munoz.md)). Es el mismo armado que se propone acá.
- **Enrique Rocha:** hace tutoriales sobre la herramienta, como clonar anuncios con Higgsfield ([ficha](../referentes/enrique-rocha.md)). Higgsfield aparece como tema de un video V, no como forma de editar.
- **Iman Gadzhi:** lo promociona como inversor ([ficha](../referentes/iman-gadzhi.md)). No es prueba de uso.
- **Erik Taveras:** en los 6 reels vistos no se identificaron planos generados, aunque nadie lo buscó a propósito: sin confirmar. Lo que sí se ve es cara, gráficos propios y capturas reales ([estilo de edición](estilo-de-edicion.md)).

Sin confirmar: cuánto b-roll generado usa cada uno por video. No se midió.

## El flujo propuesto (Propuesta)

Cada formato con lo que le suma Higgsfield. Los formatos están en la [guía de guiones diarios](guiones-diarios.md) y el [calendario](../calendario-contenido.md); solo `cara-con-iconos` es firme (con plantilla en el [estilo de edición](estilo-de-edicion.md)), y los otros tres esperan el sí de Sergio Urcullo:

| Video del día | Formato | Qué pone Higgsfield | Qué hace HyperFrames |
|---|---|---|---|
| **N. Noticia** (09:00) | `titular-fijo` | 1 o 2 imágenes del tema (Soul 2.0), y si el gancho lo pide, 1 plano de 5 s a 720p | Mueve las imágenes (acercamiento lento), titular, subtítulos y cierre "Comentá PALABRA" |
| **P. Proceso** (12:30) | `pantalla-partida` o `historia-con-imagenes` | Para `historia-con-imagenes`: 4 a 6 imágenes de la historia | Arma la historia con la voz en off, sin cámara |
| **V. Valor** (19:30) | `cara-con-iconos` | Nada, o un efecto de `reel-effects` (texto detrás de la cabeza) si Sergio lo aprueba después de una prueba | Íconos, subtítulos y el cierre, como en la plantilla firme |
| **YouTube del domingo** | Horizontal | La portada, con `thumbnail-generation` | La edición del video |

Los pasos, para un agente (Claude o Codex, que también tiene el conector de Higgsfield, según [marketing](../../docs/equipo-agentes/marketing.md)):

1. Leer el guion del día y marcar qué imagen o plano necesita cada momento.
2. Pedirle a Sergio Urcullo el sí con la lista y los créditos que cuesta, antes de generar.
3. Generar primero las imágenes; el video, solo si el sí lo incluye.
4. Bajar lo generado a la carpeta de trabajo de `/tmp` en Ubuntu. Los archivos no entran a Git (`AGENTS.md`, "Qué no entra a Git").
5. Ponerlo en la plantilla de HyperFrames del formato y renderizar, como dice la skill [`editar-video`](../../.agents/skills/editar-video/SKILL.md), "Editar un video de Sergio".
6. Mostrarle la captura a Sergio. No se publica nada sin su sí.

## Cuánto cuesta (Propuesta de presupuesto)

Calendario del 4 al 20-nov: 17 días, 3 videos por día, 51 videos ([calendario](../calendario-contenido.md)). El precio de Seedance 2.0 a 720p cambió en la misma página oficial [P1]: 30 créditos el 29-oct ([anuncios](anuncios.md)) y unos 22 el 3-nov. Se calcula con los dos:

| Opción | Qué se genera | Con 22 créditos por plano | Con 30 créditos por plano |
|---|---|---|---|
| A. Solo imágenes | 3 imágenes Soul 2.0 por video | unos 19 (51 × 3 × 0,125) | unos 19 |
| B. Imágenes y 1 plano en 12 días (recomendada) | A, más 12 planos Seedance 2.0 de 5 s a 720p | unos 283 (19 + 12 × 22) | unos 379 (19 + 12 × 30) |
| C. Imágenes y 1 plano todos los días | A, más 17 planos | unos 393 | unos 529 |
| D. 2 planos en cada video | 102 planos | unos 2.244 (102 × 22) | unos 3.060 (102 × 30) |

La B entra en los 432,93 créditos del 29-oct con cualquiera de los dos precios, si el saldo sigue ahí: no se pudo comprobar. La C entra solo con el precio de 22. El arreglo de la tabla de [anuncios](anuncios.md) queda para otro cambio.

## Formato "animación 3D" (el reel "estilo Disney" de Sergio)

Lo pidió Sergio Urcullo el 3-nov, con el reel https://www.instagram.com/reel/DfKFEcsOUHB/: "Mira ese formato disney, eso es a lo que me refiero que aprenda higgsfield".

**Cómo es el reel.** Lo vio el hilo de edición desde la PC de Sergio, el 3-nov. Es de la cuenta @dropship, "Who's laughing now?", del 31-oct-2026:
- **Historia en dos partes.** Del segundo 0 al 12, personajes en 3D de estilo animación, con la misma cara en todas las escenas: unos chicos se ríen del protagonista porque dice "FOCUS ON AI". Desde el segundo 14 hay un giro a tomas reales de lujo, y cierra con el logo.
- **Texto:** 1 o 2 palabras en mayúsculas blancas, en el centro.
- **Ritmo:** 21,7 s con 19 cortes duros, más seguidos después del giro. Música a -14,2 LUFS.
- **Herramienta:** sin confirmar. Lo más probable es un generador de video con un personaje de referencia. Es la **forma 2** de la tabla de abajo: no es un video redibujado (forma 1) ni lleva voz en off (forma 3).

| Forma | Cómo se hace | Qué queda | Costo |
|---|---|---|---|
| **1. Redibujar el video de Sergio** | Sergio graba como siempre, y un estilo de Genjutsu lo redibuja en 3D animado, con el mismo movimiento, cámara y encuadre [W2]. Los estilos más cercanos al cine animado familiar son "Warm Painterly 3D Animation", "Painterly Cinematic 3D" y "Rounded Toy CGI" [W2] | Su actuación y su voz, con el aspecto de una película animada | Sin precio publicado: el conector lo muestra antes de generar, con el video ya subido [W2]. Como referencia, Genjutsu Lite cuesta 32 créditos por 15 s a 720p [P1], pero no se confirmó que sea la misma herramienta |
| **2. Personaje y escenas** | Primero un personaje de Sergio en 3D (`character-sheet`, o imágenes con Nano Banana Pro); después cada escena como imagen, y cada imagen se anima con Seedance [W1] | Una historia con escenas nuevas que no se pueden grabar | Por escena de 5 s: unos 2 créditos la imagen [P1] y el video, unos 22 [P1] o 30 según la misma página el 29-oct ([anuncios](anuncios.md)). Un reel de 30 s, con 6 escenas: de 144 a 192 créditos, sin contar el personaje, que no tiene precio publicado |
| **3. Cuento narrado** | El flujo `faceless-video` arma un video narrado con un estilo fijo no realista, una sola voz y subtítulos; tiene los tipos "Picture Story" y "Fairy Tale & Myth" [W1] | Sin cara: voz en off sobre escenas animadas | Sin precio fijo publicado; usa varias generaciones de imagen, video y voz [W1] |

**Cómo se haría el de Sergio con la forma 2 (Propuesta):**
1. **Un personaje fijo:** Sergio en 3D, armado una sola vez y usado de referencia en todas las escenas, para que tenga la misma cara.
2. **La parte en 3D, unos 12 s:** de 3 a 4 escenas de 5 s, cada una con su imagen y su video. Cuántas escenas tiene el reel no se contó: el número es una estimación.
3. **El giro, unos 8 s:** tomas reales de Sergio, grabadas con el celular (su escritorio, la PC, una clase, el equipo de agentes), cortadas más rápido. No gastan créditos.
4. **El texto y el cierre en HyperFrames:** 1 o 2 palabras en mayúsculas blancas, al centro, y el cierre con la palabra clave. Gratis.

**Costo de la parte en 3D:** de 72 créditos (3 escenas × (2 de imagen + 22 de video)) a 128 (4 × (2 + 30)), según el precio de Seedance de cada fecha [P1] ([anuncios](anuncios.md)). Se suma el personaje, que no tiene precio publicado, y los intentos que salgan mal. Es entre un sexto y casi un tercio de los 432,93 créditos del 29-oct.

Lo que pesa para elegir (Propuesta):
- **La forma 2 es la que usa el reel,** y la mitad final puede ser real: así Sergio aparece de verdad, y la cara real es lo que genera confianza ([anuncios](anuncios.md), "Con Higgsfield").
- **Encaja como formato especial,** no diario: por ejemplo, 1 por semana en el video P (proceso), contando su historia ("se reían de que estudiaba IA").
- **La forma 1 queda para probar después:** conserva su actuación, pero el precio solo se ve en el conector.
- **Nombre y marca:** "Disney" y "Pixar" son marcas ajenas. No se usan en los títulos, los textos ni las palabras clave del video; el formato se llama "animación 3D". Si hace falta nombrarlas, es tema legal, a confirmar con un abogado (`docs/lecciones.md`, "Anuncios y venta").
- **Se copia la técnica, no el contenido:** ni la historia, ni la música, ni las tomas de @dropship (skill [`editar-video`](../../.agents/skills/editar-video/SKILL.md), "Frenos").
- **Antes de gastar:** pedir el sí de Sergio con el guion, las escenas y los créditos, y empezar por el personaje y 1 escena.

## Lo que falta investigar (sin la cuenta)

- Probar en la PC si las imágenes animadas en HyperFrames se ven bien, con una imagen gratis de prueba, antes de gastar créditos.
- Contar las escenas y los planos de la parte en 3D del reel de @dropship, con `measure cuts` de `editar-video`.
- Medir 3 reels de Santiago Muñoz con b-roll generado, con `editar-video`, para saber cuántos segundos de b-roll usa y dónde.

## Fuentes

- [P1] Higgsfield, "Higgsfield Pricing Explained", 24-oct-2026: https://higgsfield.ai/blog/higgsfield-pricing-explained (consultada el 3-nov-2026).
- [P2] Higgsfield, "Seedance 2.0 Pricing", con precios "verificados en octubre de 2026": https://higgsfield.ai/blog/seedance-2-0-pricing-2026 (consultada el 3-nov-2026).
- [P3] Higgsfield, "How to make YouTube Shorts with AI", 2-jul-2026: https://higgsfield.ai/blog/how-to-make-youtube-shorts-with-ai (consultada el 3-nov-2026).
- [W1] Catálogo de flujos del conector de Higgsfield (`get_workflow_instructions`, sin argumentos y con `reel-effects`), leído el 3-nov-2026 desde la sesión de Claude Code.
- [W2] Galería de estilos de Genjutsu del conector de Higgsfield (`get_presets`, `source: genjutsu`, `category: genjutsu-styles`), leída el 3-nov-2026: 20 estilos que "redibujan el video del usuario en este aspecto; el movimiento, la cámara y el encuadre quedan como se grabaron".
