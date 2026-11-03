# Qué usa cada sección

Índice de qué skill, repo o conector usa cada sección de ONIA, y dónde vive. Lo pidió Sergio Urcullo el 3-nov-2026, para que Claude, Codex o cualquier agente lea el repo y no la PC. Las secciones son las tres áreas del `AGENTS.md` ("Equipo de agentes"). El detalle de cada skill de afuera, y la propuesta para los 30 repos del video de @heysansser, están en [skills-inventario.md](skills-inventario.md).

Revisado el 3-nov en la PC de Sergio. Los conectores se leyeron de la lista de herramientas de una sesión de Claude Code, y de `C:\Users\PC\.claude.json` y `C:\Users\PC\.codex\config.toml` (solo los nombres, sin claves).

## Marketing y ventas

| Para qué | Skill del repo (`.agents/skills/`) | Otras fuentes |
|---|---|---|
| Referentes | `investigar-referente` | Fichas en `marca-personal/referentes/` |
| Guiones y contenido | `copywriting`, `social` y `video` (Marketing Skills) | `marca-personal/guias/guiones-diarios.md` |
| Edición de los 3 videos diarios | `editar-video`, `ver-video`, `hyperframes` y `hyperframes-cli`. GSAP, en [skills-inventario](skills-inventario.md#gsap). | Guía y plantillas en `marca-personal/guias/`. En Ubuntu: HyperFrames 0.9.6, FFmpeg, faster-whisper y gallery-dl. |
| Taller, oferta y embudo | `events`, `offers` y `lead-magnets` (Marketing Skills) | `docs/plan/taller-3000.md` |
| Mensajes, correos y comunidad | `emails` y `community-marketing` (Marketing Skills) | Nada se manda sin el sí de Sergio ("Frenos") |
| Anuncios | — | `marca-personal/guias/anuncios.md`. Conectores de Meta Ads y TikTok Ads en la cuenta de Claude. |
| Videos generados con IA | — | `marca-personal/guias/higgsfield.md`. Conector de Higgsfield en la cuenta de Claude; cobra por uso. |

## Desarrollo

| Para qué | Skill del repo | Otras fuentes |
|---|---|---|
| Issues de punta a punta | `llevar-issue` | GitHub: `oninteligenciaartificial/ONIA-CENTRAL` |
| Chatbot de WhatsApp, n8n y Chatwoot | — | `docs/plan/taller-3000.md` (punto 3.4) y `docs/plan/herramientas-codex.md` |
| Webs | — | Repo `Web-Onia`. Conectores de Vercel y Cloudflare en la cuenta de Claude. |
| Navegador del equipo | — | Playwright MCP en WSL, en Claude Code y Codex ([navegador-wsl](decisiones/2026-11-01-navegador-wsl.md)) |

## ONIA Platform

| Para qué | Skill | Otras fuentes |
|---|---|---|
| Código del producto | `supabase`, `supabase-postgres-best-practices` y `prisma-cli` | Repo `onia-platform`. Hasta el 3-nov, esas tres skills estaban solo en la PC (`C:\Users\PC\.claude\skills`). Pasan a ese repo por un PR propio. Conector de Supabase en la cuenta de Claude. |
| Diseño de pantallas | Ya en `onia-platform/.agents/skills/`: Taste (12 skills de `Leonxlnx/taste-skill`), `impeccable`, `emil-design-eng`, `transitions-dev` y `shadcn`, más las propias de `.claude/skills/` (`onia-backend`, `onia-db`, `onia-deploy`, `onia-frontend`, `onia-seguridad` y `onia-verificacion`) | Según su `skills-lock.json`, visto el 3-nov. |
| Propuestas del inventario | Superpowers, Graphify y Ponytail | Están "Después" en [skills-inventario.md](skills-inventario.md). Superpowers está instalado como plugin solo en el proyecto Gestios de la PC. |

## Todas las secciones

| Qué | Dónde |
|---|---|
| Pasar una tarea a un Codex nuevo | Skill `encargar` |
| Skills oficiales de Anthropic (docx, pdf, pptx, xlsx, skill-creator) | Las sincroniza la cuenta de Claude, no el repo. Codex no las ve. |
| Plugins de Claude Code en la PC | `document-skills`, `gsap-skills` y `claude-security`, para toda la PC. `caveman`, `superpowers` y `frontend-design`, solo en el proyecto Gestios. No están en el repo. |
| Otros conectores de la cuenta de Claude | Notion, Gmail, Google Calendar, Google Drive, Figma, Gamma y Meta para desarrolladores. Los usa solo Claude: Codex no los tiene. |
| Búsqueda web | Exa, en Claude Code (`C:\Users\PC\.claude.json`) |

## Reglas que viven fuera del repo

- **`C:\Users\PC\.claude\CLAUDE.md`, las reglas globales de Claude en la PC:**
  - "cada respuesta empieza con 'Sergio Urcullo,'";
  - "pedir aprobación antes de instalar";
  - "nada de secretos en el chat".

  Lo demás ya está en el `AGENTS.md`. Codex no lee ese archivo.
- **La memoria de Claude Code de este proyecto** (`C:\Users\PC\.claude\projects\C--dev-proyectos-ONIA-CENTRAL\memory\`): las reglas que todavía no estaban en el repo pasaron a `docs/lecciones.md`, en la sección "Lo que estaba solo en la memoria de Claude". El resto ya estaba: `edicion-de-video` está en la skill `editar-video` y en la guía de estilo; `administrador-rol` y `orquestador-grok-bot` son historia, y el equipo actual está en el `AGENTS.md`; `mensajes-instructivos` y `opciones-y-nombres-de-sesiones` están en el `AGENTS.md` y en `docs/lecciones.md`; y `msix-registro-virtualizado` está en `docs/lecciones.md`, en "Windows y la app de Claude".
