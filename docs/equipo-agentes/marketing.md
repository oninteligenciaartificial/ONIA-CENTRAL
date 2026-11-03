# Marketing

> Desde el 3-nov-2026, esta área la lleva **Marketing y ventas**, que lee también el "Ahora" de [`negocio.md`](negocio.md) ([README](README.md)).

Reels, calendario editorial, marca personal de Sergio Urcullo y anuncios, que siempre se crean en pausa. Desde el 1-nov-2026 es una sesión de Claude Code en esta PC, con su worktree y sus PRs. Antes era un bot de Grok Bot.

Actualizado: 2-nov-2026, hora de Bolivia.

## Ahora

Desde el 3-nov, esto lo lleva el jefe de Marketing y ventas; cómo se abre, en Claude o en Codex, está en el [README](README.md). Los mensajes entre proyectos van al tablero del issue #111.

**Objetivo, hecho cuando y próximo paso:** los de "Orden de trabajo", abajo, que sirven a la meta de ventas de [`negocio.md`](negocio.md), "Objetivo: Bs 3.000 cobrados al 6-nov".

**Qué espera a Sergio Urcullo y sus decisiones vigentes:** en "Pendiente de Sergio Urcullo", abajo.

- **En qué estoy:**
  - la campaña de Meta Ads del taller, en borrador, en el [PR #120](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/120) (`workshops-comunidad/meta-ads-campana-3-4-5.md`). La revisión dio "aprobar"; falta el sí de Sergio Urcullo con captura. No hay nada cargado en Meta;
  - los guiones de la semana del 3 al 8-nov, en el [PR #139](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/139): 24 de marca personal (3 verticales y 1 horizontal por día) y 10 del taller y el anuncio, en `marca-personal/guiones-semana-3-8nov.json`, que arma `marca-personal/armar-guiones-semana.py`. Al 2-nov la revisión seguía en "cambios" por detalles.
- **El panel de contenido:** está en claude.ai (https://claude.ai/artifact/VGvvdSxQdfURBy1yDpTfrr) y lee ese JSON. Codex no tiene herramientas para actualizarlo: el 2-nov, `codex exec` listó sus herramientas y MCP (Canva, Drive, Notion, Higgsfield y otras, con Notion y Drive apagados en esta PC) y ninguna lee o escribe artifacts de claude.ai. Mientras tanto, los guiones se cambian en el JSON por PR y una sesión de Claude los sube al panel. Si no hay una sesión de Claude, la fuente es el JSON del repo y el panel queda con la última versión subida. La propuesta es pasarlo a Notion (punto 4 de "Pendiente"), sin aprobar todavía.
- **Meta Ads en Codex:** Codex no tiene el conector de Meta Ads. Se hace con el navegador, cuando Sergio Urcullo cargue su cuenta en el perfil de Marketing.
- **Orden de trabajo, con su "hecho cuando":**
  1. Guiones (PR #139): mergeado cuando la última revisión escrita en el PR da "aprobar" y Sergio Urcullo aprueba los guiones. Lo que marcó cada revisión está en los comentarios del PR.
  2. Campaña (PR #120): cargada en Meta en pausa, con los 2 videos, cuando Sergio Urcullo aprueba con captura y están la página y la tarjeta. La prende él, o Marketing con su sí.
  3. Métricas en el panel: conversaciones y costo por conversación de la campaña, cuando corra.
  4. Corregir la oferta vieja (3-5-7, combos) en `plan-meta-ads-borrador.md`, por PR.
  5. La ficha de chase.h.ai con la skill `investigar-referente` (post https://www.instagram.com/p/DfKquhHHK3B/).
- **Heredado de Recepción (3-nov):** probar la skill `ver-video` con un video con voz, cuando Sergio Urcullo lo mande, y mirar redes con las cuentas secundarias de Instagram y TikTok cuando él las cree y las cargue (`recepcion.md`). Que los agentes las usen está sin decidir: lo decide él.

## Correcciones de Sergio

Una línea por corrección, en el mismo turno: fecha, qué pasó y la regla (`AGENTS.md`, "Errores y lecciones").

- **3-nov:** se buscaron skills solo en el repo y no en las carpetas de la PC (`C:\Users\PC\.claude\skills` y los plugins). Ponytail se descartó sin leer su repo, y las plantillas usaron GSAP sin revisar su licencia. Regla: antes de proponer o usar una skill o una librería, se mira qué hay en el repo, en la PC y en los otros repos de ONIA, y se lee su repo y su licencia.

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

## Pendiente de Sergio Urcullo

Al 2-nov a la noche. Lo ya resuelto ([decisión del 2-nov](../decisiones/2026-11-02-taller-4-5-6.md)): clases miércoles 4, jueves 5 y viernes 6-nov a las 19:00, hora de Bolivia, por Google Meet; un solo pago de Bs 50 por las 3 clases; grabaciones entregadas al terminar la última clase, el viernes 6, que quedan para siempre; sin devolución, y si ONIA no da una clase, se pasa a otra fecha. En la sesión Marketing, el 2-nov, Sergio Urcullo eligió "US$10/día hasta el 5-nov (Recomendada)" y lo confirmó con "Empecemos hasta el 5 de noviembre"; el inicio, con "La campaña la lanzamos mañana en la mañana" (el 3-nov); y el nombre, con "claude de 0 a 100 y no es ilegal […] no habra problemas", sin confirmar con un abogado. Están citados en `workshops-comunidad/meta-ads-campana-3-4-5.md` (el nombre del archivo es histórico: el contenido es de las clases 4, 5 y 6).

1. Aprobar los textos del anuncio y grabar los 2 videos.
2. Probar cómo se graban las clases antes de activar el anuncio: Meet gratis no graba.
3. Elegir la página de Facebook con el WhatsApp del taller y la cuenta de anuncios, y cargar la tarjeta. Al 2-nov, ninguna cuenta tiene página ni Instagram, y "ONIA Ads" no tiene tarjeta: lo mostraron `ads_get_ad_accounts`, `ads_get_ad_account_pages` y `ads_get_ig_accounts` del conector de Meta Ads, en la sesión Marketing. `ads_get_user_pages` mostró solo la página "Onia", sin asociar a ninguna cuenta.
4. Decidir si el panel de contenido pasa a Notion. Es una propuesta sin aprobar: necesita prender Notion en Codex y conectar su cuenta.
5. Vos o tú en los guiones, y si quiere decir su edad.
6. El presupuesto de TikTok, si se pauta ahí.

## Qué toco y qué no

- **Escribo (por PR):** `marca-personal/` (contenido, referentes, guías), `workshops-comunidad/meta-ads-campana-3-4-5.md` y `workshops-comunidad/plan-meta-ads-borrador.md`, y este archivo. Todo lo que ve un cliente lo aprueba Sergio Urcullo.
- **Solo leo:** `docs/decisiones/`, `docs/lecciones.md`, y la web y el VPS (de Desarrollo). El borrador de WhatsApp (`workshops-comunidad/whatsapp-taller-3-4-5-borrador.md`) lo escribe esta misma área, desde [`negocio.md`](negocio.md).
- **Servicios:** Meta Ads por el conector de la app, siempre en borrador o pausa. Instagram y TikTok no: no hay conector para publicar. Higgsfield, nada sin el sí de Sergio Urcullo.
- **Navegador de Ubuntu:** solo si hace falta ver una pantalla de Meta o una referencia, de a una sesión a la vez y sin loguearme: las cuentas las carga Sergio Urcullo.
- **Cruces:**
  - llamado a la acción del anuncio con el texto que llega a WhatsApp: Boss No-Code escribe los textos (PR #110) y confirma; yo escribo el anuncio;
  - textos de la web del taller: Desarrollo la arma; yo paso el copy, sin tocar su repo;
  - la oferta vieja (3-5-7, combos y clases sueltas) en `plan-meta-ads-borrador.md` ("Qué se vende desde el miércoles 4") y en el PR #72, avisada por ONIA Platform: la corrijo yo; el PR #72 es de Boss No-Code, que desde el 3-nov también es Marketing y ventas.
- **No hago:** activar campañas ni gastar sin su sí, crear cuentas o cargar tarjetas, publicar, mandar mensajes a clientes, tocar archivos de otra área ni copiar datos de clientes de las ramas de Grok Bot (issue #113).

## Para otras áreas

- **Para quien lleve el taller:** el PR #72 vive en `workshops-comunidad/` y no es de Marketing. El precio de los reels y el de la respuesta de WhatsApp tienen que coincidir.

