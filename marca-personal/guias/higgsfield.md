# Higgsfield para los 3 videos diarios

3-nov-2026, por Claude Code (hilo "Investigar formatos de video con Higgsfield"), a pedido de Sergio Urcullo: "si querés hacer videos con Higgsfield, eso necesita investigación de formatos y todo eso" (3-nov, chat del proyecto).

**Estado: borrador, solo investigación.** No se generó nada ni se tocó la cuenta. Cada generación gasta créditos y pide el sí de Sergio Urcullo con captura (`AGENTS.md`, "Frenos"; [anuncios](anuncios.md), "Frenos"). Lo marcado **Propuesta** no lo decidió él.

## Lo corto

- **Higgsfield no reemplaza a HyperFrames: le da materia prima.** HyperFrames arma el video (subtítulos, gráficos, cierre) gratis en la PC. Higgsfield genera lo que no se puede grabar: imágenes, planos cortos de b-roll y portadas.
- **El saldo no alcanza para video generado en los 3 videos de todos los días.** Con 2 planos de 5 s por video, son unos 2.200 créditos hasta el 20-nov (cuenta abajo), y la cuenta tenía 432,93 el 29-oct ([anuncios](anuncios.md)).
- **La recomendación:** imágenes de Higgsfield (casi gratis) animadas en HyperFrames para todos los días, y planos de video generado solo para el gancho de 1 video por día, como mucho.

## Qué ofrece Higgsfield que sirve acá

Fuentes: el catálogo de flujos del conector de Higgsfield (`get_workflow_instructions`, leído el 3-nov) y el blog oficial. El saldo y el plan de la cuenta **no se pudieron leer el 3-nov**: el conector respondió que la sesión venció y hay que volver a autorizarlo.

| Herramienta | Qué hace | Para cuál de los 3 videos | Costo |
|---|---|---|---|
| Imágenes (Soul 2.0, Nano Banana Pro, FLUX.2 Pro) | Una imagen desde un texto | Fondos, "pantallas" de ejemplo y escenas para N y V, animadas después en HyperFrames | Soul 2.0: 0,125 créditos; FLUX.2 Pro: 1; Nano Banana Pro: 2 [P1] |
| Video (Seedance 2.0, Kling, Veo) | Un plano corto de 5 a 8 s desde un texto o una imagen | B-roll del gancho: "un negocio de noche con el celular sonando" | Seedance 2.0, 5 s a 720p: unos 22 [P1]; Seedance 2.0 Fast, 8 s a 720p: 28 [P2] |
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
- **Erik Taveras:** en los 6 reels medidos no hay planos generados: cara, gráficos propios y capturas reales ([estilo de edición](estilo-de-edicion.md)).

Sin confirmar: cuánto b-roll generado usa cada uno por video. No se midió.

## El flujo propuesto (Propuesta)

Cada formato del [estilo de edición](estilo-de-edicion.md) con lo que le suma Higgsfield:

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

Calendario del 4 al 20-nov: 17 días, 3 videos por día, 51 videos ([calendario](../calendario-contenido.md)). Créditos según el blog oficial [P1]:

| Opción | Qué se genera | Créditos hasta el 20-nov |
|---|---|---|
| A. Solo imágenes | 3 imágenes Soul 2.0 por video | unos 19 (51 × 3 × 0,125) |
| B. Imágenes y 1 plano por día (recomendada) | A, más 1 plano Seedance 2.0 de 5 s a 720p por día | unos 393 (19 + 17 × 22) |
| C. 2 planos en cada video | 102 planos Seedance 2.0 de 5 s a 720p | unos 2.244 (102 × 22) |

La B entra en los 432,93 créditos del 29-oct, si siguen ahí: no se pudo comprobar. Los precios por crédito pueden haber cambiado desde el 24-oct, fecha del blog.

## Lo que falta investigar (sin la cuenta)

- Probar en la PC si las imágenes animadas en HyperFrames se ven bien, con una imagen gratis de prueba, antes de gastar créditos.
- Medir 3 reels de Santiago Muñoz con b-roll generado, con `editar-video`, para saber cuántos segundos de b-roll usa y dónde.

## Fuentes

- [P1] Higgsfield, "Higgsfield Pricing Explained", 24-oct-2026: https://higgsfield.ai/blog/higgsfield-pricing-explained (consultada el 3-nov-2026).
- [P2] Higgsfield, "Seedance 2.0 Pricing", con precios "verificados en octubre de 2026": https://higgsfield.ai/blog/seedance-2-0-pricing-2026 (consultada el 3-nov-2026).
- [P3] Higgsfield, "How to make YouTube Shorts with AI", 2-jul-2026: https://higgsfield.ai/blog/how-to-make-youtube-shorts-with-ai (consultada el 3-nov-2026).
- [W1] Catálogo de flujos del conector de Higgsfield (`get_workflow_instructions`, sin argumentos y con `reel-effects`), leído el 3-nov-2026 desde la sesión de Claude Code.
