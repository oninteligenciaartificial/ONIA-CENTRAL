# Stack de cada área

> **Historia desde el 3-nov-2026.** El equipo son tres proyectos ([README](README.md)): Boss No-Code, Marketing y Recepción pasan a Marketing y ventas; Boss Code y la infraestructura del Administrador, a Desarrollo. Pelau y la Analista dejan de ser sesiones. Quién se encarga de cada cosa está en [tres proyectos](../decisiones/2026-11-02-tres-proyectos.md). La tabla de abajo sigue sirviendo para saber qué usa cada parte.

2-nov-2026. Lo armó el Administrador por pedido de Sergio Urcullo: "necesito que definas stack de cada cosa que usa, su VPS, Linux, yo que sé, cuentas, skills, tareas, todo eso. Ve definiéndolo por cada área" (sesión del Administrador, sin enlace).

Sale del "Qué toco y qué no" de [`negocio.md`](negocio.md), [`producto.md`](producto.md), [`platform.md`](platform.md) y [`recepcion.md`](recepcion.md), y del de Marketing, en el [PR del estado de Marketing](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/102), abierto. Lo del Administrador y la Analista sale de [`coordinacion.md`](coordinacion.md) y del `AGENTS.md`, "Equipo de agentes". Lo de Pelau sale de la sección 4 del [plan del paso a Codex](../decisiones/2026-11-01-plan-equipo-y-paso-a-codex.md), que dice que no cambia archivos ni tiene estado propio. Lo que dice "por mensaje" salió de mensajes de las sesiones al Administrador del 2-nov (sin enlace). Si algo cambia, el área lo cambia en su estado y le avisa al Administrador.

## Lo que comparten todas

- **Máquina:** la PC de Sergio, con Windows 11, y Ubuntu 26.04 en WSL para el navegador y las herramientas de Linux ([navegador de WSL](../decisiones/2026-11-01-navegador-wsl.md)).
- **Agente:** hoy, Claude Code en la app de escritorio. Desde el 3-nov, Codex (codex-cli 0.166.0), abierto desde el worktree de cada área ([plan del paso a Codex](../decisiones/2026-11-01-plan-equipo-y-paso-a-codex.md), sección 9).
- **Repo y memoria compartida:** ONIA-CENTRAL en GitHub. Cada sesión trabaja en su worktree y cambia `main` por PR. Lo común está en el `AGENTS.md`, `docs/lecciones.md`, los estados de esta carpeta y el tablero del [issue #111](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/111).
- **Navegador de Ubuntu y cuentas:** como dice el `AGENTS.md`, "Navegador de Ubuntu". Qué cuentas pidió cada área para el suyo está en el [navegador por área](../decisiones/2026-11-02-navegador-por-area.md). Las decide y las carga Sergio.
- **VPS de producción:** corre la plataforma, su Supabase, el correo, Chatwoot, n8n, el bot y otras webs ([análisis del 28-oct](../../plataforma/2026-10-28-seguir-con-onia-platform.md), "Dónde corre"), y el Hermes viejo, que sigue en producción (`AGENTS.md`). Es del área de Boss Code, y tocarlo es producción: pide el sí de Sergio.
- **Frenos y lo que aprueba Sergio:** los del `AGENTS.md`, para todas.

## Por área

| Área | Escribe en | Repos y servicios | Skills | Tareas |
|---|---|---|---|---|
| Boss No-Code | `negocio.md`, los textos de WhatsApp y el material del taller en `workshops-comunidad/`, y decisiones de ventas, cobro y finanzas | WhatsApp del taller, Yolo Pago, Google Calendar (salas de Meet), Chatwoot para leer e Instagram. El banco lo mira Sergio | `llevar-issue` | "Pendientes del área", en su estado |
| Marketing | `marketing.md`, `marca-personal/`, y la campaña y el plan de Meta Ads en `workshops-comunidad/` | Meta Ads, siempre en borrador o pausa; Higgsfield, solo con el sí de Sergio. Por mensaje: el panel de contenido de Sergio en claude.ai, que carga Marketing; Codex no lo puede actualizar, y dónde sigue lo decide Marketing con Sergio | `investigar-referente`, `llevar-issue` | Su estado, en el PR del estado de Marketing |
| Boss Code | `producto.md`, las decisiones de su área y el repo del sitio personal, `sergiourcullo` (por mensaje: su rama, en `C:\dev\worktrees\sergiourcullo-taller`) | VPS, Chatwoot y n8n de producción (hoy no los toca), Vercel para leer y Cal.com. Por mensaje: el navegador de la app de Claude para comprobar páginas sin login, hasta el paso a Codex, y revisiones con `codex exec --sandbox read-only` | `llevar-issue` | "Pendiente", en su estado |
| ONIA Platform | `platform.md`, `plataforma/` y las decisiones de su área | El repo `onia-platform` (mergear a `master` publica en producción), el VPS, su Supabase y sus crons (producción), Vercel y Supabase para leer, y Codex para leer y revisar | `llevar-issue` | "Issues de ONIA-CENTRAL del área, abiertos", en su estado |
| Recepción | `recepcion.md` y la skill `ver-video` | `E:\ONIA\recepcion\`, y ffmpeg y faster-whisper en Ubuntu | `ver-video` | Lo que Sergio le manda |
| Pelau | Nada | Por mensaje: lee `main`, los PRs y los issues con `gh`, y no usa navegador | — | Resúmenes cortos, cuando Sergio los pide (por mensaje) |
| Administrador | `coordinacion.md` y las reglas, por PR. La configuración de las sesiones vive fuera del repo, y su cambio queda anotado por PR | Las sesiones de Claude Code y de Codex, su configuración y `gh` | `llevar-issue` | El objetivo de su relevo, en `coordinacion.md` |
| Analista | Nada en lo que audita | Lee los PRs y sus revisiones | — | Una auditoría al día, al cerrar la tanda de PRs |

`llevar-issue` es la skill común para llevar un issue de punta a punta. Las de cada área están en `.agents/skills/`.
