# Inventario de skills para el taller

Armado el 3-nov-2026 por Claude Code (hilo de edición), para el plan del taller. Dice qué skills tenemos, cuáles conviene sumar y dónde se pueden usar. Sumar una skill de afuera pide el OK de Sergio Urcullo (`AGENTS.md`, "Lo aprueba Sergio Urcullo, siempre").

## Las que ya están en el repo

Están en `.agents/skills/`. Las lee Codex y, en esta PC, Claude Code, a través del enlace `.claude\skills` del checkout principal ([skills compartidas](decisiones/2026-10-28-skills-compartidas.md)).

| Skill | Para qué | Área |
|---|---|---|
| `editar-video` | Aprender de reels de referencia y editar con HyperFrames | Marketing y ventas |
| `ver-video` | Mirar y transcribir un video, todo local | Marketing y ventas |
| `investigar-referente` | Ficha de un creador: venta, anuncios, contenido y funnel | Marketing y ventas |
| `encargar` | Pasarle una tarea cerrada a un Codex nuevo | Todas |
| `llevar-issue` | Llevar un issue de punta a punta hasta el PR | Todas |

## Dónde se pueden usar

- **Claude Code y los hilos del proyecto de claude.ai que corren en esta PC:** sí, porque leen el checkout principal. En este hilo, `editar-video` apareció como skill disponible después del merge.
- **Codex, local o en la nube:** sí, porque lee `.agents/skills` directo.
- **Sesiones de Claude en la nube (claude.ai/code):** no. Clonan el repo sin el enlace `.claude\skills`, que está en el `.gitignore`. Se puede arreglar de dos maneras, y las dos piden el OK de Sergio porque tocan `CLAUDE.md` o la configuración:
  1. Sumar al `CLAUDE.md` una línea que diga que las skills están en `.agents/skills/` y que se lea el `SKILL.md` de la que corresponda. Es lo más simple y no duplica nada. (Recomendada.)
  2. Crear el enlace en el script de inicio del entorno de la nube. Según [skills compartidas](decisiones/2026-10-28-skills-compartidas.md), no está probado.

## Las que se sumaron para el taller

Sergio las aprobó el 3-nov y quedaron copiadas en `.agents/skills/`, con la versión fija, la licencia y un `ORIGEN.md` que dice de dónde salen, qué ejecutan y qué reglas rigen. Las de Marketing Skills son solo texto. De `hyperframes` se sacó la carpeta `scripts/`, que llama a una API paga y baja mapas de terceros.

| De dónde | Cuáles | Para qué | Licencia |
|---|---|---|---|
| [Marketing Skills](https://github.com/coreyhaines31/marketingskills) (Corey Haines) | `events`, `offers`, `copywriting`, `lead-magnets`, `emails`, `community-marketing`, `social`, `video` | Página y anuncios del taller, la oferta, los mensajes, la comunidad y los guiones | MIT |
| [HyperFrames](https://github.com/heygen-com/hyperframes) (HeyGen) | `hyperframes`, `hyperframes-cli` | Que el agente sepa armar composiciones y subtítulos sin adivinar, con el commit fijado y sin telemetría, como recomendó [skills compartidas](decisiones/2026-10-28-skills-compartidas.md). Hoy usamos solo la CLI. | Apache-2.0 |



## Las que no

- **`reverse-any-video`, de HyperFrames:** pide el plan pago y vuelve a grabar a las personas con HeyGen.
- **REA:** desarma programas, no videos.
- **Claude-Mem:** es del método viejo apartado.
- **gstack, BMAD y GSD:** meten equipos de agentes, y chocan con "un agente por tarea".
- **`media-use`, de HyperFrames:** según [skills compartidas](decisiones/2026-10-28-skills-compartidas.md), hace llamadas pagas a HeyGen sin confirmar. Es gasto.
- **Higgsfield y Fish Audio:** cobran por uso. Solo con el sí de Sergio.

## Los 30 del video de @heysansser

Sergio Urcullo pasó el 3-nov un reel de @heysansser (https://www.instagram.com/reel/DfBQ1AgOC1S/) con 30 plugins para Claude. La columna "Propuesta" es del autor, no una decisión de Sergio: sale del texto del reel. De los repos, se leyeron la portada de OpenMontage, la de REA y la de HyperFrames, más la lista de carpetas de HyperFrames y de Marketing Skills; el resto no se leyó. Lo que no sale del reel ni de un repo leído va como hipótesis. "Usar" no instala nada: lo que viene de afuera entra con el OK de Sergio.

| Grupo | Repo | Propuesta | Por qué |
|---|---|---|---|
| Código | Superpowers | Después | ONIA Platform: planifica y prueba antes de programar |
| Código | Matt Pocock Skills | No | Repite buenas prácticas de programación; alcanza con una |
| Código | ECC | No | "A huge pack of skills and agents"; que llene el contexto es hipótesis |
| Código | Karpathy Skills | No | Buenas prácticas de programación; que alcance con una es hipótesis |
| Código | Ponytail | No | "Write way less code"; que alcance con Superpowers es hipótesis |
| Código | Agent Skills | No | Buenas prácticas de programación; que alcance con una es hipótesis |
| Investigar | Graphify | Después | ONIA Platform: mapa del código |
| Investigar | Agent Reach | Después | Marketing: leer Reddit, X y YouTube; ver antes si pide APIs pagas |
| Investigar | Understand Anything | No | Repite lo de Graphify |
| Investigar | Last 30 Days | Después | Marketing: tendencias del último mes; ver si pide APIs pagas |
| Investigar | Career Ops | No | Busca trabajo |
| Investigar | REA | No | Desarma programas, no videos |
| Proyectos grandes | gstack | No | Equipos de agentes: choca con "un agente por tarea" |
| Proyectos grandes | Caveman | No | "Talks short"; que recorte las explicaciones que Sergio pidió es hipótesis |
| Proyectos grandes | Claude-Mem | No | Es del método viejo apartado |
| Proyectos grandes | Headroom | No | Recorta lo que lee el agente; el repo ya ordena qué se lee |
| Proyectos grandes | GSD | No | "Plans and builds step by step"; si mete equipos de agentes, sin confirmar |
| Proyectos grandes | BMAD Method | No | Equipos de agentes |
| Diseño | UI UX Pro Max | Después | ONIA Platform: elegir una sola entre esta, Taste e Impeccable |
| Diseño | Taste | Después | La misma elección |
| Diseño | Archify | Después | Marketing: diagramas para carruseles |
| Diseño | Impeccable | Después | La misma elección que UI UX Pro Max |
| Diseño | PPT Master | Después | Presentaciones del taller; antes ver el tipo Slides de claude.ai |
| Diseño | Diagram Design | Después | Marketing: diagramas para carruseles |
| Escritura y video | Skills by Anthropic | Usar | Son las oficiales. Varias (skill-creator, docx, pptx, pdf) figuraban como disponibles en la sesión de Claude Code del 3-nov |
| Escritura y video | OpenMontage | No | Muy grande, con APIs pagas, y licencia AGPL |
| Escritura y video | HyperFrames | Usar | Ya se usa su CLI en `editar-video`; las skills, en "Las que conviene sumar". `media-use` es gasto |
| Escritura y video | Humanizer | No | "Removes the AI feel from writing"; que sirva solo para inglés es hipótesis |
| Escritura y video | I Have ADHD | No | Lo que hace ya está en las reglas de cómo se le escribe a Sergio |
| Escritura y video | Marketing Skills | Usar | Ver "Las que conviene sumar" |
