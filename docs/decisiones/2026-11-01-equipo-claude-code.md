# El equipo de agentes pasa a sesiones de Claude Code en la PC

Decisiones de Sergio Urcullo del 1-nov-2026, tomadas con botones en la sesión coordinadora de Claude Code (sin enlace). Reemplazan la parte "Agentes" de [2026-10-31-decisiones-taller-y-agentes](2026-10-31-decisiones-taller-y-agentes.md) y lo que [2026-10-31-hermes-reemplazado](2026-10-31-hermes-reemplazado.md) dice de Grok Bot.

| Pregunta | Su respuesta |
|---|---|
| Quién forma el equipo de agentes | "Claude Code en la PC (Recomendada)" |
| Cómo se le habla | "De vos (Recomendada)" |
| Qué se hace con la rama de Grok Bot `origin/onia-loop-excepcion-d003` | "Rescatar en PRs chicos (Recomendada)" |

## Qué queda

- El equipo son sesiones de Claude Code en esta PC, una por área: Boss No-Code, Marketing, Boss Code y ONIA Platform. Cada una trabaja en su worktree, con sus PRs y su archivo de estado en `docs/equipo-agentes/`.
- La sesión coordinadora reparte, ordena y le resume a Sergio Urcullo. Codex revisa en solo lectura, como revisor independiente. Desde el 2-nov, los resúmenes los da Pelau, y el rol de la coordinadora, que pasó a llamarse Administrador, está en `AGENTS.md`, "Equipo de agentes".
- Hermes y Grok Bot dejan de orquestar. Lo que los describe queda como historia. Apagar el Hermes de Windows o el del VPS sigue siendo decisión de Sergio Urcullo.
- `docs/harness/onia-llm.md` queda como propio de Grok Bot. Pierde la excepción "arreglos menores del servidor con respaldo", porque choca con los frenos de producción del `AGENTS.md`.
- El `CLAUDE.md` del repo deja de cargar `docs/reglas/equipo-grok-bot.md`, cuya regla 2 pedía opciones para cada cambio, contra "Los planes no se le preguntan". También deja de decir "sin merge", que chocaba con la regla de merges del `AGENTS.md`.

## El PR de Grok Bot que archiva Hermes y su rama

- **El [PR #94 (archiva Hermes)](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/94) no se mergea.** Pone a los agentes Grok Bot como orquestadores y cambia el `AGENTS.md` en sentido contrario a esta decisión. Se cierra sin merge cuando se mergee este cambio. Lo útil, como pasar `2026-10-28-hermes-oficial.md` a historia y poner al día la skill `llevar-issue`, se rescata en PRs chicos ([issue #101](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/101)).
- **La rama `origin/onia-loop-excepcion-d003` no se mergea así.** Se rescata en PRs chicos, sin datos de clientes ([issue #101](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/101)).
  - La revisión de Codex del 1-nov comprobó que las 47 lecciones de `docs/lecciones.md` siguen todas en el `docs/equipo-agentes/APRENDIZAJES.md` de esa rama. Se volvió a comprobar el 1-nov buscando el título de cada lección: no falta ninguna. No hay lecciones que rescatar.
  - Las reglas nuevas de esa rama salen de investigación y no están comprobadas. No se suman sin comprobarlas en un trabajo real, cada una por PR.

## Lo que sigue abierto

- Qué motor usan las sesiones desde el 3-nov. La regla del 31-oct, de pasar a Codex si no se llegaba a la meta de ingresos, era del script de Grok Bot ([issue #100](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/100)).
- Los PRs #88 y #95 de Grok Bot, que trajeron `docs/reglas/equipo-grok-bot.md` y `docs/harness/onia-llm.md`, se mergearon sin revisión escrita ni aprobación citada. Este cambio deja los dos archivos como historia.
