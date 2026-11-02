# Boss Code: estado

Área: el servidor (VPS), Chatwoot, n8n, Cal.com y la web del taller. Desde el 1-nov-2026 es una sesión de Claude Code en esta PC; antes era un bot de Grok Bot. Lo decidió Sergio Urcullo ese día, en la sesión coordinadora (sin enlace). El VPS y lo publicado son producción, y valen los "Frenos" del `AGENTS.md`.

Actualizado el 2-nov-2026, con lo comprobado el 1 y el 2-nov desde esta PC. Cómo se comprobó cada cosa está al final. El estado que dejó el bot de Grok está en la rama `origin/onia-loop-excepcion-d003` (commit `c2796fa`), en este mismo archivo. Se tomó como dato, no como regla, y no se copia acá.

## Qué hay y dónde

| Cosa | Dónde está | Comprobado el 1-nov |
|---|---|---|
| Sitio personal `sergiourcullo.vercel.app` | Repo privado `oninteligenciaartificial/sergiourcullo`, copia local en `C:\dev\proyectos\sergiourcullo-deploy`, al día con `origin/main` | El sitio responde 200. Último commit `7412814`, del 19-sep. Cada commit a `main` lo publica Vercel solo, en Production (deployments de `vercel[bot]` en GitHub). Mergear a `main` de ese repo es publicar. |
| Web del taller | [PR del sitio que agrega `/taller`](https://github.com/oninteligenciaartificial/sergiourcullo/pull/1), rama `taller-3-4-5` | 2-nov: rehecha corta desde la web de Grok, con la revisión 2 de Codex en "aprobar". Sin publicar: espera el sí de Sergio Urcullo. La web original de Grok está en la rama `grokbot/workspace-20261101` de ONIA-CENTRAL, en `grokbot-workspace/entregables-workshop/`. |
| WhatsApp del taller, +591 75414930 | `wa.me/59175414930` | 2-nov: sin login, el enlace abre el chat de la cuenta "Onia" con el texto ya escrito. No se mandó nada. |
| Cal.com | `/llamada` del sitio redirige a `cal.com/sergiourcullo/20min` (`vercel.json`) | La redirección da 307 y la página de Cal.com da 200. |
| VPS, Chatwoot y n8n de producción | En el VPS | No se probó el acceso: no se entró al VPS ni se usó ninguna clave. No hay conector de la app para Chatwoot, n8n ni Cal.com. |

El bot de Grok dejó escrito que no encontró el código del sitio personal y que el sitio no respondía. Desde esta PC están las dos cosas.

## Accesos desde esta PC

- **GitHub:** `gh` con la cuenta `oninteligenciaartificial`.
- **Conectores de la app que sirven al área:** Vercel, Cloudflare, Supabase y Google Calendar, todos conectados. No se usaron para esto.
- **Programas instalados:** `vercel` 53.2.0, `codex-cli` 0.166.0, `n8n` (una instalación local, no la del VPS) y `ssh`.
- **SSH:** en `C:\Users\PC\.ssh` hay dos claves, sin `config`. Una lleva "hermes" en el nombre. No se usaron. `docs/credenciales.md` dice que la clave del VPS va en la bóveda.

## La web del taller

Decisiones de Sergio Urcullo del 2-nov-2026, en esta sesión, con la herramienta de preguntas (sin enlace): "Web corta antes del 3" y "sergiourcullo.vercel.app/taller (Recomendada)". Sobre las ramas de Grok Bot con datos de un lead, eligió "Borrar después del rescate (Recomendada)", y quedó en el [issue #113](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/113#issuecomment-6570861813).

- **Qué tiene:** las fechas y el precio de la [oferta del 1-nov](../decisiones/2026-11-01-oferta-taller-3-4-5.md), el temario "previsto" del plan de Meta Ads y dos botones a WhatsApp con "vengo de la web" ya escrito, para distinguir esos chats.
- **Qué no dice, porque no está decidido:** la devolución, hasta cuándo quedan las grabaciones y lo legal del nombre.
- **Para publicarla:** Sergio Urcullo mira la captura o la vista previa de Vercel, que pide su login, y da el sí. Con su sí citado en el PR, se mergea, y Vercel la publica. Después se comprueba `sergiourcullo.vercel.app/taller` sin login.
- **Después del 5-nov:** la página queda con fechas pasadas. Se baja o se cambia para la próxima edición.

## Pendiente

- Publicar la web del taller, con el sí de Sergio Urcullo. Las clases son el martes 3, el miércoles 4 y el jueves 5-nov.
- Borrar las dos ramas de Grok Bot cuando termine el rescate del #101, como decidió Sergio Urcullo en el #113.
- Comprobar el acceso al VPS sin cambiar nada, cuando Sergio Urcullo lo autorice y la clave esté en la bóveda.
- El respaldo semanal del VPS era una rutina del bot de Operaciones. Según el estado del bot de Grok, hay que pasarlo a n8n o a cron antes de borrar ese bot. Sin confirmar si sigue corriendo.
- n8n de prueba: el bot de Grok lo dejó como pendiente (sus decisiones D-017 y T-15, que están solo en `/workspace`).
- Revisar las 11 mejoras de seguridad del harness que propuso el bot. Están en esa rama, en `docs/equipo-agentes/analista/comparativa-harness-20261101.md`.

## Para otras áreas

- **Para ONIA Platform:** el panel interno, el tope de costo de `onia-tarea`, los 10 PRs de la plataforma, el cobro con QR del BCP y la migración a la API de WhatsApp Cloud. El bot de Grok los tenía acá, y los parches siguen solo en `/workspace/platform/`.
- **Para Boss No-Code:** qué recursos y skills gratis van en la sección de recursos del sitio, y la llamada a la acción de venta.
- **Para Marketing:** los textos y la marca de la web del taller, cuando llegue.

## Cómo se comprobó (1-nov)

- Repos y sitio: `gh repo list oninteligenciaartificial`, `gh api repos/oninteligenciaartificial/sergiourcullo/deployments` y `git log` en `C:\dev\proyectos\sergiourcullo-deploy`.
- Respuestas de las páginas: `curl` sin login a `sergiourcullo.vercel.app`, `/llamada` y `cal.com/sergiourcullo/20min`.
- Web del taller en GitHub: los archivos de los PRs abiertos de ONIA-CENTRAL, con `gh pr view --json files`.
- Conectores: el estado de conectores de esta sesión, en la app de Claude.
- Programas: `--version` de cada uno. SSH: solo los nombres de los archivos de `C:\Users\PC\.ssh`, sin abrirlos.

## Cómo se comprobó (2-nov)

- WhatsApp: el enlace `wa.me/59175414930`, abierto sin login en el navegador de la app de Claude.
- Web: la página servida en local, vista a 375 px y en escritorio, sin scroll horizontal. La vista previa de Vercel de la rama dio `success` (`gh api .../deployments`) y pide login de Vercel.
- Revisión: dos rondas de `codex exec --sandbox read-only`, escritas en el PR.
