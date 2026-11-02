# Boss Code: estado

Área: el servidor (VPS), Chatwoot, n8n, Cal.com y la web del taller. Desde el 1-nov-2026 es una sesión de Claude Code en esta PC; antes era un bot de Grok Bot. Lo decidió Sergio Urcullo ese día, en la sesión coordinadora (sin enlace). El VPS y lo publicado son producción, y valen los "Frenos" del `AGENTS.md`.

Actualizado el 2-nov-2026, con lo comprobado el 1 y el 2-nov desde esta PC. Cómo se comprobó cada cosa está al final. El estado que dejó el bot de Grok está en la rama `origin/onia-loop-excepcion-d003` (commit `c2796fa`), en este mismo archivo. Se tomó como dato, no como regla, y no se copia acá.

## Qué hay y dónde

| Cosa | Dónde está | Comprobación y fecha |
|---|---|---|
| Sitio personal `sergiourcullo.vercel.app` | Repo privado `oninteligenciaartificial/sergiourcullo`, copia local en `C:\dev\proyectos\sergiourcullo-deploy`, al día con `origin/main` | El sitio responde 200. Último commit `7412814`, del 19-sep. Cada commit a `main` lo publica Vercel solo, en Production (deployments de `vercel[bot]` en GitHub). Mergear a `main` de ese repo es publicar. |
| Web del taller | `sergiourcullo.vercel.app/taller`, publicada desde el [PR del sitio que agrega `/taller`](https://github.com/oninteligenciaartificial/sergiourcullo/pull/1) (merge `e72690b`) | 2-nov: publicada con el sí de Sergio Urcullo ("publicala"), citado en el PR. Sin login, la página da 200, la cuenta regresiva corre y los 4 botones abren el chat de "Onia" con "vengo de la web" ya escrito. |
| WhatsApp del taller, +591 75414930 | `wa.me/59175414930?text=TALLER` | 2-nov: sin login, el enlace abre el chat de la cuenta "Onia" con "TALLER" ya escrito. No se mandó nada. |
| Cal.com | `/llamada` del sitio redirige a `cal.com/sergiourcullo/20min` (`vercel.json`) | La redirección da 307 y la página de Cal.com da 200. |
| VPS, Chatwoot y n8n de producción | En el VPS | No se probó el acceso: no se entró al VPS ni se usó ninguna clave. No hay conector de la app para Chatwoot, n8n ni Cal.com. |

El bot de Grok dejó escrito que no encontró el código del sitio personal y que el sitio no respondía. Desde esta PC están las dos cosas.

## Qué toco y qué no

Lo pidió Sergio Urcullo el 2-nov-2026, por el Administrador: "pedile a cada sesion que se defina para no chocar" (sesión del Administrador, sin enlace).

- **Escribo en ONIA-CENTRAL:** este archivo, que es el estado de Boss Code, y una decisión de mi área en `docs/decisiones/` cuando haga falta. Siempre por PR.
- **Solo leo:** el `AGENTS.md`, `docs/lecciones.md`, los estados de las otras áreas, `workshops-comunidad/`, `marca-personal/` y las ramas de Grok Bot.
- **Repos y servicios:**
  - el repo del sitio personal, `oninteligenciaartificial/sergiourcullo`: escribo en ramas y por PR. Mergear publica, así que se mergea solo con el sí de Sergio Urcullo;
  - Vercel: leo los despliegues. No despliego: `vercel` pide el sí en la app ([permisos](../decisiones/2026-11-02-permisos-claude-code.md));
  - Cal.com: solo compruebo que `/llamada` responda;
  - el VPS, Chatwoot y n8n de producción: son del área, pero hoy no los toco. Nunca entré. Hace falta el sí de Sergio Urcullo y la clave en la bóveda, como dice `docs/credenciales.md`;
  - el repo `onia-platform`: no lo toco. Es de ONIA Platform.
- **Navegador de Ubuntu:** solo para comprobar sin login páginas publicadas, como el sitio, el enlace de WhatsApp o Cal.com, cuando no alcanza el navegador de la app de Claude. Lo usa una sola sesión a la vez, como dice el `AGENTS.md`. El 2-nov no lo usé.
- **Cruces con otras áreas:**
  - las ramas de Grok Bot con datos de un lead ([issue #113](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/113)): Boss No-Code las revisa y rescata lo útil (#101). Boss Code solo tomó de ahí la web del taller. Quién borra las ramas, después del rescate, lo ordena el Administrador;
  - la web del taller: los textos y la marca son de Marketing. El código, el PR y la publicación, de Boss Code. Si Marketing cambia un texto, me lo pasa y lo cambio en el PR;
  - el WhatsApp +591 75414930: lo atiende Boss No-Code. Boss Code solo comprueba que el enlace abra.
- **No hago:** mensajes a clientes, respuestas en WhatsApp, anuncios ni la campaña, código de ONIA Platform, borrar ramas sin que me lo asignen, ni nada en producción sin el sí de Sergio Urcullo.

## Accesos desde esta PC

- **GitHub:** `gh` con la cuenta `oninteligenciaartificial`.
- **Conectores de la app que sirven al área:** Vercel, Cloudflare, Supabase y Google Calendar, todos conectados. No se usaron para esto.
- **Programas instalados:** `vercel` 53.2.0, `codex-cli` 0.166.0, `n8n` (una instalación local, no la del VPS) y `ssh`.
- **SSH:** en `C:\Users\PC\.ssh` hay dos claves, sin `config`. Una lleva "hermes" en el nombre. No se usaron. `docs/credenciales.md` dice que la clave del VPS va en la bóveda.

## La web del taller

Decisiones de Sergio Urcullo del 2-nov-2026, en esta sesión, con la herramienta de preguntas (sin enlace): "Web corta antes del 3" y "sergiourcullo.vercel.app/taller (Recomendada)". Sobre las ramas de Grok Bot con datos de un lead, eligió "Borrar después del rescate (Recomendada)", y quedó en el [issue #113](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/113#issuecomment-6570861813).

- **Qué tiene:** lo pedido en la sección 5 del análisis de funnel de Boss No-Code ([PR #141](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/141)): barra fija arriba, cuenta regresiva real al miércoles 4 a las 19:00, qué te llevás, temario previsto, "esto no es", para quién es, qué incluye, quién lo da, preguntas frecuentes y 4 botones a WhatsApp con "vengo de la web" ya escrito. El precio sale de la [oferta del 1-nov](../decisiones/2026-11-01-oferta-taller-3-4-5.md), y las fechas, la devolución y las grabaciones, de la decisión del 2-nov ([PR #136](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/136)).
- **Qué no dice, porque no está decidido:** lo legal del nombre, hasta cuándo se inscribe la gente, si hay un límite de personas, si Bs 50 es "precio de esta edición" y qué plan de Claude hace falta. Si Sergio Urcullo lo decide, Boss No-Code pasa el texto y Boss Code lo suma por PR, con su sí antes de publicar.
- **Publicada el 2-nov:** Sergio Urcullo vio las capturas en el celular y contestó "publicala". Su sí está citado en el PR.
- **Después del 6-nov:** la página queda con fechas pasadas. Se baja o se cambia para la próxima edición.

## Pendiente

- Bajar o cambiar `/taller` después del 6-nov. Cambiarla es publicar, así que va con el sí de Sergio Urcullo.
- Compartido, sin quién lo haga: borrar las dos ramas de Grok Bot cuando termine el rescate del #101, como decidió Sergio Urcullo en el #113. Quién lo hace lo ordena el Administrador, y se coordina por el tablero (#111). Boss Code no lo hace si no se lo asignan.
- Comprobar el acceso al VPS sin cambiar nada, cuando Sergio Urcullo lo autorice y la clave esté en la bóveda.
- El respaldo semanal del VPS era una rutina del bot de Operaciones. Según el estado del bot de Grok, hay que pasarlo a n8n o a cron antes de borrar ese bot. Sin confirmar si sigue corriendo.
- n8n de prueba: el bot de Grok lo dejó como pendiente (sus decisiones D-017 y T-15, que están solo en `/workspace`).
- Revisar las 11 mejoras de seguridad del harness que propuso el bot. Están en esa rama, en `docs/equipo-agentes/analista/comparativa-harness-20261101.md`.

## Para otras áreas

- **Para ONIA Platform:** el panel interno, el tope de costo de `onia-tarea`, los 10 PRs de la plataforma, el cobro con QR del BCP y la migración a la API de WhatsApp Cloud. El bot de Grok los tenía acá, y los parches siguen solo en `/workspace/platform/`.
- **Para Boss No-Code:** qué recursos y skills gratis van en la sección de recursos del sitio, y la llamada a la acción de venta.
- **Para Marketing:** `sergiourcullo.vercel.app/taller` ya se puede usar en anuncios o publicaciones.

## Cómo se comprobó (1-nov)

- Repos y sitio: `gh repo list oninteligenciaartificial`, `gh api repos/oninteligenciaartificial/sergiourcullo/deployments` y `git log` en `C:\dev\proyectos\sergiourcullo-deploy`.
- Respuestas de las páginas: `curl` sin login a `sergiourcullo.vercel.app`, `/llamada` y `cal.com/sergiourcullo/20min`.
- Web del taller en GitHub: los archivos de los PRs abiertos de ONIA-CENTRAL, con `gh pr view --json files`.
- Conectores: el estado de conectores de esta sesión, en la app de Claude.
- Programas: `--version` de cada uno. SSH: solo los nombres de los archivos de `C:\Users\PC\.ssh`, sin abrirlos.

## Cómo se comprobó (2-nov)

- WhatsApp: el enlace `wa.me/59175414930?text=TALLER`, abierto sin login en el navegador de la app de Claude.
- Web: la página servida en local, vista a 375 px y en escritorio, sin scroll horizontal. La vista previa de Vercel de la rama dio `success` (`gh api .../deployments`) y pide login de Vercel.
- Revisión: dos rondas de `codex exec --sandbox read-only`, escritas en el PR.
