# Stack de cada área

2-nov-2026. Lo armó el Administrador por pedido de Sergio Urcullo: "necesito que definas stack de cada cosa que usa, su VPS, Linux, yo que sé, cuentas, skills, tareas, todo eso. Ve definiéndolo por cada área" (sesión del Administrador, sin enlace). Sale del "Qué toco y qué no" de cada estado de esta carpeta. Si algo cambia, el área lo cambia en su estado y le avisa al Administrador.

## Lo que comparten todas

- **Máquina:** la PC de Sergio, con Windows 11, y Ubuntu 26.04 en WSL para el navegador y las herramientas de Linux ([navegador de WSL](../decisiones/2026-11-01-navegador-wsl.md)).
- **Agente:** hoy, Claude Code en la app de escritorio. Desde el 3-nov, Codex (codex-cli 0.166.0), abierto desde el worktree de cada área ([plan del paso a Codex](../decisiones/2026-11-01-plan-equipo-y-paso-a-codex.md), sección 9).
- **Repo y memoria compartida:** ONIA-CENTRAL en GitHub. Cada sesión trabaja en su worktree y cambia `main` por PR. Lo común está en el `AGENTS.md`, `docs/lecciones.md`, los estados de esta carpeta y el tablero del [issue #111](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/111).
- **Navegador de Ubuntu:** como dice el `AGENTS.md`, "Navegador de Ubuntu". Las cuentas las decide y las carga Sergio.
- **VPS de producción:** corre la plataforma, su Supabase, Chatwoot, n8n, el chatbot y otras webs ([análisis del 28-oct](../../plataforma/2026-10-28-seguir-con-onia-platform.md), "Dónde corre"). Es del área de Boss Code, y tocarlo es producción: pide el sí de Sergio.
- **Frenos y lo que aprueba Sergio:** los del `AGENTS.md`, para todas.

## Por área

| Área | Escribe en | Repos y servicios | Cuentas que pidió para su navegador | Skills | Tareas |
|---|---|---|---|---|---|
| Boss No-Code | [`negocio.md`](negocio.md), los textos de WhatsApp y el material del taller en `workshops-comunidad/`, y decisiones de ventas, cobro y finanzas | WhatsApp del taller, Yolo Pago, Google Calendar (salas de Meet), Chatwoot para leer e Instagram. El banco lo mira Sergio | WhatsApp, Yolo Pago y Chatwoot, para revisar. El 2-nov pidió sumar Google Calendar e Instagram de ONIA: sin decidir | `llevar-issue` | "Pendientes del área", en su estado |
| Marketing | `marca-personal/` y la campaña y el plan de Meta Ads en `workshops-comunidad/` | Meta Ads, siempre en borrador o pausa; Higgsfield, solo con el sí de Sergio | Meta, para ver pantallas y referencias | `investigar-referente`, `llevar-issue` | Su estado, en el [PR del estado de Marketing](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/102), abierto |
| Boss Code | [`producto.md`](producto.md), las decisiones de su área y el repo del sitio personal, `sergiourcullo` | VPS, Chatwoot y n8n de producción (hoy no los toca), Vercel para leer y Cal.com | Ninguna: solo páginas publicadas | `llevar-issue` | "Pendiente", en su estado |
| ONIA Platform | [`platform.md`](platform.md), `plataforma/` y las decisiones de su área | El repo `onia-platform` (mergear a `master` publica en producción), el VPS, su Supabase y sus crons (producción), Vercel y Supabase para leer, y Codex para leer y revisar | Ninguna esta semana | `llevar-issue` | "Le falta decidir a Sergio Urcullo", en su estado |
| Recepción | [`recepcion.md`](recepcion.md) y la skill `ver-video` | `E:\ONIA\recepcion\`, y ffmpeg y faster-whisper en Ubuntu | Cuentas secundarias para investigar redes: sin decidir | `ver-video` | Lo que Sergio le manda |
| Pelau | Nada | Lee `main`, los PRs y los issues con `gh` | Ninguna: no usa navegador | — | Resúmenes cortos, cuando Sergio los pide |
| Administrador | [`coordinacion.md`](coordinacion.md), y las reglas y la configuración de las sesiones, por PR | Las sesiones de Claude Code y de Codex, su configuración y `gh` | Ninguna | `llevar-issue` | El objetivo de su relevo, en `coordinacion.md` |
| Analista | Nada en lo que audita | Lee los PRs y sus revisiones | Ninguna | — | Una auditoría al día, al cerrar la tanda de PRs |

`llevar-issue` es la skill común para llevar un issue de punta a punta. Las de cada área están en `.agents/skills/`.
