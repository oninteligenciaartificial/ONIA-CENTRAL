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

## Las que conviene sumar para el taller

Todas son de afuera: se leen antes de instalar y entran por PR con el OK de Sergio. Si alguna cobra, se sabe recién después de leer qué ejecuta, y en ese caso se marca como gasto.

| De dónde | Cuáles | Para qué | Licencia |
|---|---|---|---|
| [Marketing Skills](https://github.com/coreyhaines31/marketingskills) (Corey Haines) | `events`, `offers`, `copywriting`, `lead-magnets`, `emails`, `community-marketing`, `social`, `video` | Página y anuncios del taller, la oferta, los mensajes, la comunidad y los guiones | MIT |
| [HyperFrames](https://github.com/heygen-com/hyperframes) (HeyGen) | `hyperframes`, `hyperframes-cli` | Que el agente sepa armar composiciones y subtítulos sin adivinar, con el commit fijado y sin telemetría, como recomendó [skills compartidas](decisiones/2026-10-28-skills-compartidas.md). Hoy usamos solo la CLI. | Apache-2.0 |

La lista sale de los nombres de las carpetas de cada repo, vistos el 3-nov. Falta leer qué ejecuta cada una antes de proponerla.

## Las que no

- **`reverse-any-video`, de HyperFrames:** pide el plan pago y vuelve a grabar a las personas con HeyGen.
- **REA:** desarma programas, no videos.
- **Claude-Mem:** es del método viejo apartado.
- **gstack, BMAD y GSD:** meten equipos de agentes, y chocan con "un agente por tarea".
- **`media-use`, de HyperFrames:** según [skills compartidas](decisiones/2026-10-28-skills-compartidas.md), hace llamadas pagas a HeyGen sin confirmar. Es gasto.
- **Higgsfield y Fish Audio:** cobran por uso. Solo con el sí de Sergio.

Por qué quedó así cada una de las 30 del video de @heysansser está en el hilo de edición del proyecto Onia, del 3-nov.
