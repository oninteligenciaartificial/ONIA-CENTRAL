# Boss Code: estado

Área: el servidor (VPS), Chatwoot, n8n, Cal.com y la web del taller. Desde el 1-nov-2026 es una sesión de Claude Code en esta PC; antes era un bot de Grok Bot. Lo decidió Sergio Urcullo ese día, en la sesión coordinadora (sin enlace). El VPS y lo publicado son producción, y valen los "Frenos" del `AGENTS.md`.

Actualizado el 1-nov-2026, con lo comprobado ese día desde esta PC. Cómo se comprobó cada cosa está al final. El estado que dejó el bot de Grok está en la rama `origin/onia-loop-excepcion-d003` (commit `c2796fa`), en este mismo archivo. Se tomó como dato, no como regla, y no se copia acá.

## Qué hay y dónde

| Cosa | Dónde está | Comprobado el 1-nov |
|---|---|---|
| Sitio personal `sergiourcullo.vercel.app` | Repo privado `oninteligenciaartificial/sergiourcullo`, copia local en `C:\dev\proyectos\sergiourcullo-deploy`, al día con `origin/main` | El sitio responde 200. Último commit `7412814`, del 19-sep. Cada commit a `main` lo publica Vercel solo, en Production (deployments de `vercel[bot]` en GitHub). Mergear a `main` de ese repo es publicar. |
| Web nueva del taller y del sitio personal, hecha por el bot de Grok | Solo en `/workspace/entregables-workshop/sitio-sergio/` y `web-v2/`, la computadora en la nube de Grok Bot | No está en esta PC, ni en el repo del sitio, ni en los PRs abiertos de ONIA-CENTRAL. El PR del taller (temario, WhatsApp, guiones) no trae web. |
| Cal.com | `/llamada` del sitio redirige a `cal.com/sergiourcullo/20min` (`vercel.json`) | La redirección da 307 y la página de Cal.com da 200. |
| VPS, Chatwoot y n8n de producción | En el VPS | No se probó el acceso: no se entró al VPS ni se usó ninguna clave. No hay conector de la app para Chatwoot, n8n ni Cal.com. |

El bot de Grok dejó escrito que no encontró el código del sitio personal y que el sitio no respondía. Desde esta PC están las dos cosas.

## Accesos desde esta PC

- **GitHub:** `gh` con la cuenta `oninteligenciaartificial`.
- **Conectores de la app que sirven al área:** Vercel, Cloudflare, Supabase y Google Calendar, todos conectados. No se usaron para esto.
- **Programas instalados:** `vercel` 53.2.0, `codex-cli` 0.166.0, `n8n` (una instalación local, no la del VPS) y `ssh`.
- **SSH:** en `C:\Users\PC\.ssh` hay dos claves, sin `config`. Una lleva "hermes" en el nombre. No se usaron. `docs/credenciales.md` dice que la clave del VPS va en la bóveda.

## Para publicar la web del taller

1. **Traerla:** el código está solo en `/workspace`. Se lo pide Sergio Urcullo a Grok Bot.
2. **Arreglarla antes del PR:**
   - pasar del tuteo al voseo, que decidió Sergio Urcullo el 1-nov en la sesión coordinadora (sin enlace);
   - poner el precio que vale en la fecha. `docs/decisiones/2026-10-31-decisiones-taller-y-agentes.md` dice Bs 50 hasta el 1-nov y Bs 70 desde el 2-nov, y la web del bot muestra Bs 50 "por la serie";
   - completar lo que el bot dejó pendiente: la política de devolución, la foto aprobada y los enlaces.
3. **Elegir dónde va:** lo decide Sergio Urcullo. El estado del bot de Grok (`ESTADO-ACTUAL.md`, sección 6, punto 8) deja abiertos Vercel y `onia.com.bo`. Esta área propone una página nueva en el sitio personal, porque el repo y la publicación automática ya están armados.
4. **Revisarla:** PR en el repo del destino elegido, con la revisión de Codex en solo lectura y capturas en el celular. El bot de Grok no pudo sacar capturas ni medir Lighthouse.
5. **Publicarla:** en el sitio personal, el merge a `main` publica. Vale lo que dicen los "Frenos" del `AGENTS.md`.

## Pendiente

- La web del taller, según los pasos de arriba. Las clases son el martes 3, el jueves 5 y el sábado 7-nov.
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
