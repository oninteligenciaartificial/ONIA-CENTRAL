# Qué herramientas usar para el taller (guía para Codex)

**Versión del 3-nov-2026, borrador.** Lo pidió Sergio Urcullo el 3-nov a la madrugada (hora de Bolivia), en el proyecto Onia de Claude: "investigues las skills que vas a usar y toda la documentación que vas a hacer, MCPs y demás, para que Codex sepa qué usar también". Sirve al [plan del taller](taller-3000.md). Cuando algo cambie, se pone al día y se suma una entrada en "Historial".

Reglas que valen para todo lo de abajo, sin copiarlas: instalar algo de afuera pide el sí de Sergio Urcullo (`AGENTS.md`, "Cómo se trabaja"); gasto, producción y publicar también ("Frenos"); los secretos van como dice [credenciales](../credenciales.md).

## 1. Skills

**Las del repo,** en `.agents/skills/`. Codex las lee directo de ahí ([skills compartidas](../decisiones/2026-10-28-skills-compartidas.md)).

| Skill | Cuándo se usa en el taller |
|---|---|
| `editar-video` | Editar los 3 videos diarios con las plantillas de HyperFrames de `marca-personal/guias/plantillas/` |
| `ver-video` | Mirar o transcribir un video que manda Sergio |
| `investigar-referente` | Mirar cómo vende o edita un referente, con fuente y fecha |
| `encargar` | Pasar una tarea cerrada de unos 30 minutos a un Codex nuevo |
| `llevar-issue` | Llevar un issue de punta a punta hasta el PR |

**Las de afuera que se proponen** (sin instalar; detalle en `docs/skills-inventario.md`, del hilo de edición del 3-nov):

- [Marketing Skills](https://github.com/coreyhaines31/marketingskills), licencia MIT: oferta, textos, comunidad, guiones.
- [Skills de HyperFrames](https://github.com/heygen-com/hyperframes), Apache-2.0: que el agente arme composiciones y subtítulos sin adivinar.

Si alguna cobra, se sabe recién al leer qué ejecuta cada una, porque la lista salió de los nombres de las carpetas. Se lee antes de instalar.

**Claude en la nube no ve las skills del repo,** porque `.claude/skills` está en el `.gitignore`. Para Codex no cambia nada.

## 2. Conectores y MCP

Un **MCP** es un enchufe que le da a un agente herramientas de otro servicio, como "leer mis campañas de Meta". Un conector de claude.ai es lo mismo, pero solo lo ve Claude.

Cada MCP prendido ocupa contexto: el plan del 1-nov midió entre 20.000 y 26.000 tokens con todos ([plan del equipo](../decisiones/2026-11-01-plan-equipo-y-paso-a-codex.md)). Por eso cada área prende solo lo que usa.

Codex suma un MCP remoto con `codex mcp add <nombre> --url <url>` y entra con `codex mcp login <nombre>`, que abre el login (OAuth) ([guía de MCP de Codex](https://learn.chatgpt.com/docs/extend/mcp?surface=cli)). Lo corre Sergio Urcullo en su PowerShell, porque es un login.

| Herramienta | Para qué en el taller | Hoy en Codex | Cómo se suma a Codex | Gasto o riesgo |
|---|---|---|---|---|
| Playwright (navegador de Ubuntu) | Mirar Instagram y referentes, solo lectura | Sí, un perfil por área ([navegador por área](../decisiones/2026-11-02-navegador-por-area.md)) | Ya está | Las cuentas son solo lectura |
| Anuncios de Meta | Ver la cuenta, armar campañas en borrador | No | URL oficial `https://mcp.facebook.com/ads`, con OAuth ([Meta](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-mcp-server/ads-mcp-server-get-started)). Meta nombra Claude Code y ChatGPT, no Codex: **sin probar en Codex** | Crea campañas y toca presupuestos: gasto, con su sí |
| Higgsfield | Generar planos o elementos con IA para los reels | No | URL `https://mcp.higgsfield.ai/mcp` ([Higgsfield](https://higgsfield.ai/creator-hub/help-center/mcp-cli/how-do-i-connect-higgsfield-to-claude)). Su ayuda cubre solo Claude: **sin probar en Codex** | Cada generación gasta créditos; hasta el 1-dic |
| n8n del VPS | Flujo del DM de Instagram y, después, el chatbot | No | n8n tiene MCP de instancia, que ejecuta y edita flujos ([mapa de operación](../decisiones/2026-10-29-mapa-operacion-onia.md), decisión 13) | Es producción: cada cambio, con su sí |
| GitHub | Ramas, PRs, issues | Sí, con `gh` | Ya está | — |
| Herramientas de desarrollador de Meta | Revisar la app "OnIA Social API" (permisos, webhooks) | No | Conector de claude.ai; su URL para otros agentes, **sin confirmar** | Solo lectura alcanza |

Los demás conectores que tiene Claude hoy (Gmail, Drive, Calendar, Notion, Figma, Gamma, TikTok, Vercel, Supabase) no hacen falta para el taller.

**Herramientas locales, sin MCP, en la PC:** HyperFrames (CLI y panel en `localhost:3002`, en Ubuntu, según el hilo de edición del 3-nov) para editar, y gallery-dl para bajar reels de referencia. Gratis.

## 3. Documentación oficial por tema

Cada paso que se le da a Sergio sale de acá y se cita (`docs/lecciones.md`, "Núcleo", punto 4).

| Tema | Dónde |
|---|---|
| DM por comentario en Instagram | [Private Replies](https://developers.facebook.com/docs/instagram-platform/private-replies/) y [Instagram API with Instagram Login](https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/create-a-meta-app-with-instagram). Ya se usan en la guía del DM |
| Anuncios de Meta | [MCP de anuncios de Meta](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-mcp-server/ads-mcp-server-get-started) |
| Chatbot de WhatsApp | La trae el hilo "Planear el chatbot de WhatsApp en n8n" |
| n8n | [docs.n8n.io](https://docs.n8n.io/) y las skills oficiales [n8n-io/skills](https://github.com/n8n-io/skills), ya evaluadas en [skills compartidas](../decisiones/2026-10-28-skills-compartidas.md) |
| Edición | [HyperFrames](https://github.com/heygen-com/hyperframes) y la guía `marca-personal/guias/estilo-de-edicion.md` |
| Higgsfield | `marca-personal/guias/higgsfield.md` (qué sirve y cuánto cuesta) y el [centro de ayuda](https://higgsfield.ai/creator-hub/help-center/mcp-cli/how-do-i-connect-higgsfield-to-claude) |
| Codex: MCP, skills, subagentes | [MCP](https://learn.chatgpt.com/docs/extend/mcp?surface=cli), [skills](https://learn.chatgpt.com/docs/build-skills) y [subagentes](https://learn.chatgpt.com/docs/agent-configuration/subagents.md) |

## 4. Lo que no se usa

Hermes, Grok Bot para orquestar y lo apartado del método viejo (`AGENTS.md`, primer párrafo y "Hermes y Grok Bot: historia").

## 5. El video de los 30 repositorios

Sergio Urcullo mandó un video de @heysansser con unos 30 repositorios. El hilo de edición los repasó el 3-nov: de ahí salen las dos propuestas de la sección 1 y la lista de "las que no" de `docs/skills-inventario.md` (`reverse-any-video`, REA, Claude-Mem, gstack, BMAD, GSD, Higgsfield y Fish Audio). El veredicto de cada uno de los 30 quedó en el chat de ese hilo y **todavía no está en el repo**: se le pidió sumarlo a `docs/skills-inventario.md`.

## Historial

- **3-nov-2026, primera versión.** Armada desde `main`, la rama del hilo de edición y las páginas oficiales citadas, leídas ese día.
