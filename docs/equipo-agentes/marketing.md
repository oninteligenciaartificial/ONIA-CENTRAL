# Marketing

Reels, calendario editorial, marca personal de Sergio Urcullo y anuncios, que siempre se crean en pausa. Desde el 1-nov-2026 es una sesión de Claude Code en esta PC, con su worktree y sus PRs. Antes era un bot de Grok Bot.

Actualizado: 1-nov-2026, a la noche, hora de Bolivia.

## De dónde sale

- El archivo de estado del bot viejo, en la rama `origin/onia-loop-excepcion-d003` (`docs/equipo-agentes/marketing.md`, con `ESTADO-ACTUAL.md` y `COMO-TRABAJAR.md`). Se tomó como datos, no como reglas. Esa rama no se mergea: se rescata en PRs chicos.
- Lo comprobado hoy en GitHub, Google Drive, Notion y los discos C: y E: de esta PC.

## Qué hay y dónde está

Comprobado el 1-nov. "Solo en `/workspace`" quiere decir que está en la computadora en la nube de Grok Bot, que esta PC no ve: hay que pedírselo a Grok Bot.

| Qué | Dónde | Estado |
|---|---|---|
| Lote de 9 reels de los días 1 a 3 (`entregables-workshop/reels-dias1-3.md`, §4). Según la rama, el R1 sale el lunes 2-nov a las 07:30 | Solo en `/workspace` | No está en ninguna rama de ONIA-CENTRAL, ni en la búsqueda de código de GitHub, ni en Drive, ni en Notion, ni en C: o E: |
| 21 guiones de la semana del 2 al 8-nov (`marca/guiones-semana-2-8nov.md`) | Solo en `/workspace` | Ídem |
| Anuncio UGC con avatar IA v1, de Higgsfield (`marca/anuncios/ugc/`) | Solo en `/workspace` | Según la rama, sin publicar y sin revisión de Sergio Urcullo. Lo que gastó en créditos está sin confirmar |
| Investigación de formatos (`marca/investigacion-formatos-2026.md`) | Solo en `/workspace` | La rama da solo la ruta y la fecha, 1-nov |
| Guiones de los 2 videos del anuncio, texto del anuncio y campaña para cargar en pausa | [PR #72 (temario, WhatsApp y guiones del taller)](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/72), `workshops-comunidad/claude-0-a-100/anuncio.md` | Abierto. La última revisión da "aprobar"; falta el sí de Sergio Urcullo, porque lo ve un cliente |
| Plan de marca personal, escalera de ventas y calendario de 30 días | [PR #66 (plan de marca personal)](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/66), `marca-personal/plan-marca-personal.md` | Abierto. La última revisión da "aprobar"; falta Sergio Urcullo |
| Cuatro fichas de referentes nuevas | [PR #71 (referentes nuevos)](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/71) | Abierto. La revisión da "aprobar" |
| Guías de anuncios y de web de venta, fichas de referentes y borrador del plan de Meta Ads | `main`: `marca-personal/` y `workshops-comunidad/plan-meta-ads-borrador.md` | Mergeado |

## Conectores de la app

Vistos el 1-nov con el estado de conectores de la sesión, sin leer secretos ni cuentas. Todos figuran conectados:

- **Anuncios:** Meta ads, Meta Developer Tools y TikTok for Business. Qué cuenta publicitaria y qué página tienen está sin comprobar. Todo anuncio se crea en pausa.
- **Generación:** Higgsfield. Cobra por generación: nada sin el sí de Sergio Urcullo.
- **Diseño:** Figma, Gamma y Stitch.
- **Documentos y agenda:** Google Drive, Google Calendar, Gmail y Notion.
- **Búsqueda:** Exa.
- No hay un conector para publicar en Instagram o TikTok de forma orgánica. Publicar siempre pide el sí de Sergio Urcullo.

## Choques entre fuentes

- **Precio del taller.** La [decisión del 31-oct](../decisiones/2026-10-31-decisiones-taller-y-agentes.md) dice Bs 50 hasta el domingo 1-nov y Bs 70 desde el lunes 2-nov. El estado del bot viejo dice "Bs 50 confirmado" el 1-nov a las 17:02, y su propio `ESTADO-ACTUAL.md` sigue dándolo como pendiente (D-009). El PR #72 dice Bs 50 por clase o Bs 120 las tres. En el repo no hay constancia de que Sergio Urcullo lo haya cambiado. Los reels que nombran precio no salen hasta que lo decida.
- **Presupuesto de anuncios.** La [decisión del 31-oct](../decisiones/2026-10-31-decisiones-taller-y-agentes.md), en "Anuncios", fija Meta Ads a US$10 por día, en pausa. El estado del bot viejo dice US$5 por día y a la vez lo da como pendiente, "US$5 vs US$10". Vale el del repo hasta que Sergio Urcullo diga otra cosa. Para TikTok no hay presupuesto decidido.
- **Tuteo o voseo.** La rama tenía la regla "tuteo siempre". Si los textos de `/workspace` la siguieron está sin comprobar, porque no se ven desde acá. El 1-nov, Sergio Urcullo decidió en la sesión coordinadora que se le hable de vos (sin enlace; el PR que lo pone en el `AGENTS.md` va aparte), y los textos del PR #72 están en voseo ("Tocá el botón y escribime"). Para el público lo decide él.

## Pendiente de Sergio Urcullo

1. Pedirle a Grok Bot el texto de `entregables-workshop/reels-dias1-3.md` y de `marca/guiones-semana-2-8nov.md`, o elegir que esta sesión escriba los reels del lunes de nuevo, con lo que hay en el PR #72.
2. El precio desde el lunes 2-nov.
3. Tuteo o voseo en los reels y anuncios.
4. Grabar el lote.
5. Del estado del bot viejo, sin constancia en el repo: la historia de los reels L1 y L16 y "no sé programar" (D-010) y el permiso para las fotos de Higgsfield (D-011).
6. El presupuesto de TikTok, si se pauta ahí.

## Para otras áreas

- **Para quien lleve el taller:** el PR #72 vive en `workshops-comunidad/` y no es de Marketing. El precio de los reels y el de la respuesta de WhatsApp tienen que coincidir.

## Próximo

- Con el texto del lote y el precio: dejar los reels del lunes listos para grabar, en voseo o tuteo según decida Sergio Urcullo, con revisión de Codex en solo lectura.
- Con los videos grabados: cargar los 2 anuncios en pausa en Meta, a US$10 por día, sin activarlos. TikTok, cuando tenga presupuesto.
