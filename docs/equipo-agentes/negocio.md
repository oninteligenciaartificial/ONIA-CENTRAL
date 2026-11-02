# Boss No-Code: estado

Área: ventas, leads de WhatsApp (+591 75414930) y de Instagram, chatbot, diagnóstico gratis, precios, el taller "Claude de 0 a 100" y finanzas. Desde el 1-nov-2026 es una sesión de Claude Code; antes, un bot de Grok Bot (Ventas y Atención, después "Jefe de Negocio"). Lo decidió Sergio Urcullo el 1-nov, con botones, en la sesión coordinadora de Claude Code (sin enlace). Quedó en el `AGENTS.md`, sección "Equipo de agentes", y en `docs/decisiones/2026-11-01-equipo-claude-code.md`.

Los mensajes a leads quedan en borrador hasta el sí de Sergio Urcullo. Lo de otra área se anota abajo como "para <área>".

Actualizado: 1-nov-2026, a la noche (Bolivia), con las decisiones de Sergio Urcullo de esa noche. Fuentes: `main` (`56fa46a`), la rama `origin/onia-loop-excepcion-d003` (`c2796fa`) y los conectores de esta sesión, consultados ese día. Lo que dice la rama lo escribió Grok Bot, no tiene cita de Sergio Urcullo, y va como dato, no como regla.

## Objetivo: Bs 3.000 cobrados al 5-nov

Lo fijó Sergio Urcullo el 1-nov: 60 pagos de Bs 50, brutos, conciliados con el banco al 5-nov (`docs/decisiones/2026-11-01-oferta-taller-3-4-5.md`). Los impuestos los ve él con el contador.

| # | Hecho cuando | Estado |
|---|---|---|
| 1 | Una sola oferta en `docs/decisiones/` y acá | Hecho por este PR |
| 2 | Salas de Meet en las fechas nuevas, sin invitados | Hecho el 1-nov |
| 3 | Comprobado si Meet gratis graba | No graba (abajo); Sergio elige cómo grabar |
| 4 | Textos de WhatsApp y del QR corregidos, en borrador | En un PR aparte, para su sí con captura |
| 5 | Pago de prueba con Yolo Pago | Lo hace Sergio |
| 6 | Registro privado de consultas, comprobantes y pagos, fuera de Git | Pendiente |
| 7 | Bs 3.000 conciliados con el banco al 5-nov | Pendiente |

## Taller "Claude de 0 a 100"

- Fechas: martes 3, miércoles 4 y jueves 5-nov, 19:00 de Bolivia, por Google Meet. Un solo pago de Bs 50 por las tres clases, con grabaciones (`docs/decisiones/2026-11-01-oferta-taller-3-4-5.md`).
- Inscripción: WhatsApp +591 75414930. Cobro con QR, confirmado a mano (`workshops-comunidad/plan-meta-ads-borrador.md`).
- Cobrado al 1-nov: Bs 0, según la rama. Sin confirmar en esta PC.
- Grabar: Meet gratis no graba. La [ayuda de Google Meet](https://support.google.com/meet/answer/9308681?hl=es) lista solo ediciones de Workspace, Workspace Individual y Google One de 2 TB o más. En Bolivia, la [página de planes de Google One](https://one.google.com/about/plans) mostró el 1-nov Lite, Basic y Google AI Pro (5 TB, BOB 139,99 por mes); de esos, solo AI Pro llega a 2 TB. Que AI Pro también saque el corte de 60 minutos no figura en esas páginas: sin confirmar.

## Decisiones de Sergio Urcullo del 1-nov

Las tomó a la noche, con botones: las cuatro primeras en esta sesión y las de la oferta y la meta en la sesión coordinadora. Sus palabras van entre comillas.

- **Precio:** Bs 50. "cuesta 50bs". Reemplaza los Bs 70 desde el 2-nov de `docs/decisiones/2026-10-31-decisiones-taller-y-agentes.md`.
- **Pago:** primero contestó "no esta definido ningun cambio, workshop pago unico". Después lo cerró: "Hagamos las clases seguidas 3-4-5 y un solo pago y damos grabaciones". Son Bs 50 por las tres clases.
- **QR:** "Yolo Pago (Ganadero)". El del BCP queda para ONIA Platform, según la rama. Falta un pago de prueba antes del martes 3.
- **Salas de Meet:** "Las creo yo". Esta sesión las creó el 1-nov con `create_event` de Google Calendar, en el calendario principal de la cuenta de Google conectada a la app: 6 eventos, 2 por clase (Sala 1 de 19:00 a 20:00 y Sala 2 de 20:00 a 21:00, hora de Bolivia), con Meet, sin invitados y con `notificationLevel: NONE`, para que no salga ningún correo. Esa misma noche, con `update_event` y `notificationLevel: NONE`, las de la clase 2 pasaron al 4-nov y las de la clase 3 al 5-nov. La herramienta devolvió los eventos confirmados. Los enlaces están en esos eventos y no se copian en Git.
- **Meta:** "Brutos: 60 pagos (Recomendada)", con corte "5-nov (Recomendada)".
- **Cómo se le presentan las decisiones:** "las decisiones no me las envies vos, que queden cada decision en su respectiva sesion". Se lee como que cada sesión le presenta solo las de su área; lo de otra área va abajo, "para <área>".

## Decisiones que siguen abiertas

| # | Tema | Estado |
|---|---|---|
| 1 | Devolución | `main` propone sin devolución, dicho antes de pagar, con la grabación incluida (plan del 29-oct). La rama la tenía pendiente (D-013). Sin decidir |
| 1b | Cómo se graba y hasta cuándo quedan las grabaciones | Meet gratis no graba (arriba). El guion de Grok Bot decía hasta el 7-dic, con la clase 3 el 7-nov. Sin decidir |
| 2 | Mensaje de diagnóstico gratis a los chats en espera | Borradores con enlace de Cal.com, solo en `/workspace`; falta su sí (D-012) y el acceso a la bandeja de Chatwoot. Bloqueado: los borradores no están en esta PC |
| 3 | Plantillas de WhatsApp (D-015) y migración de WhatsApp (D-018) | Pendientes, detalle solo en `/workspace/decisiones/` |
| 4 | Nombre "Claude de 0 a 100" | Usa una marca ajena en algo pago: a confirmar con un abogado (`docs/lecciones.md`) |

## Qué hay y dónde

En `main`:
- `docs/decisiones/2026-10-31-decisiones-taller-y-agentes.md`: fechas, sala y precio del taller.
- `workshops-comunidad/plan-meta-ads-borrador.md`: plan del 29-oct, con oferta, cobro, devolución y textos. Las fechas del 17 y 19-nov quedaron reemplazadas por las del 3, 5 y 7-nov.

En GitHub, sin mergear:
- [PR que prepara el temario, los textos de WhatsApp, los guiones y la lista para lanzar el taller](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/72): `workshops-comunidad/claude-0-a-100/` con `whatsapp.md` (bienvenida, "/taller", "/qr", "/pagado"). Es anterior a la decisión del 31-oct. Sus Bs 70 no son el precio de inscripción: son lo que paga quien hizo la clase 1 para completar las clases 2 y 3, hasta el jueves 5 (su `README.md`, elegido por Sergio Urcullo el 30-oct).

En GitHub, en la rama `origin/grokbot/workspace-20261101` (commit `23c342d`, del 1-nov a las 19:10): una copia de parte de `/workspace` que subió Grok Bot, según avisó la sesión coordinadora. Dentro de `grokbot-workspace/` trae, entre otras, `ventas/`, `taller-claude/`, `decisiones/` (`INDICE.md` y 21 archivos, de `D-20261101-001.md` a `D-20261101-021.md`) y `manuales/`, con `negocio/` y `finanzas-legal/`. Grok Bot dice que dejó afuera el QR de pago y los logs de ventas, y que los borradores de seguimiento no tienen datos de leads. Esta área todavía no lo comprobó: nada de esa rama pasa a `main` sin revisar antes que no tenga datos de clientes.

Solo en `/workspace`, la computadora en la nube de Grok Bot, que esta PC no ve. Ahora, en parte, también en esa rama. Sergio Urcullo se lo pide a Grok Bot si hace falta:
- `/workspace/ventas/`: guion de WhatsApp del taller, escalera de oferta y precios, borradores de diagnóstico gratis y funnels.
- `/workspace/manuales/negocio/` y `/workspace/manuales/finanzas-legal/`: control diario y conciliación de cobros.
- `/workspace/decisiones/INDICE.md`: el detalle de D-009 a D-020.
- `/workspace/taller-claude/` y `/workspace/entregables-workshop/` (guiones de las clases y web de invitación).

## Conectores de esta sesión

Consultados el 1-nov con `session_connectors_status` de la app, sin leer secretos. Figuran como conectados, entre otros, Google Calendar, Gmail, Google Drive, Notion y Meta Ads. De esos, solo se usó Google Calendar: para leer eventos y para crear las 6 salas de Meet; que los demás anden para esta área queda sin confirmar. No figura ningún conector de WhatsApp, Instagram, Chatwoot ni del banco: los leads y los cobros no se ven desde acá.

## Pendientes del área

- [ ] Pago de prueba con el QR de Yolo Pago antes del martes 3 (lo hace Sergio Urcullo).
- [ ] Textos de WhatsApp del taller con la oferta nueva, en borrador, en un PR aparte que aprueba Sergio Urcullo con captura. Hoy `workshops-comunidad/plan-meta-ads-borrador.md` y el PR de materiales del taller todavía dicen Bs 50 la clase, Bs 120 las tres y Bs 70 para completar, y el guion de Grok Bot dice Bs 70 desde el 2-nov.
- [ ] Registro privado de consultas, comprobantes y pagos verificados, fuera de Git porque tiene datos de clientes.
- [ ] Conciliar los pagos con el banco al 5-nov.
- [ ] Traer de `/workspace` los borradores de diagnóstico gratis, sin datos de clientes, si Sergio Urcullo los pide.

## Para otras áreas

- Para Marketing: captions de reels y anuncios con la oferta del 1-nov (3, 4 y 5-nov, Bs 50 por las tres clases, con grabaciones). Y el presupuesto de anuncios (`main` dice US$10 por día en pausa; la rama, US$10 o US$5).
- Para Marketing: dónde se publica la web de invitación del taller. Vercel u onia.com.bo son producción.
- Para la sesión coordinadora: `docs/decisiones/2026-10-31-decisiones-taller-y-agentes.md` sigue diciendo 3, 5 y 7-nov y Bs 70 desde el 2-nov. Lo reemplaza `docs/decisiones/2026-11-01-oferta-taller-3-4-5.md`; esta área no toca el archivo viejo, porque no es suyo.
- Para ONIA Platform: el cobro con el QR del BCP y los precios de los planes, que siguen como propuesta.

## Qué toco y qué no

Definido el 2-nov-2026 por pedido de Sergio Urcullo, vía la sesión Administrador.

- **Escribo:** este archivo; `workshops-comunidad/whatsapp-taller-3-4-5-borrador.md` y `workshops-comunidad/claude-0-a-100/` (el PR de materiales, hoy con precios viejos); `docs/decisiones/` solo para decisiones de ventas, cobro y finanzas.
- **Solo leo:** `docs/decisiones/2026-11-01-oferta-taller-3-4-5.md` y el resto de `docs/decisiones/`, `workshops-comunidad/plan-meta-ads-borrador.md`, `marca-personal/`, `plataforma/` y los estados de las otras áreas.
- **Servicios:** WhatsApp +591 75414930, Instagram, Yolo Pago (QR), el banco para conciliar, Google Calendar (salas de Meet) y Chatwoot para leer chats. Los cobros y los chats no se ven desde esta PC: lo que hace falta de ahí lo trae Sergio Urcullo. Ningún mensaje sale a un lead sin su sí con captura.
- **Navegador de Ubuntu:** solo para revisar el QR de Yolo Pago y la bandeja de WhatsApp o Chatwoot cuando Sergio Urcullo cargue la cuenta; una sesión a la vez, y sin enviar, publicar ni comprar.
- **Cruces:**
  - Marketing: el llamado a la acción de los anuncios tiene que coincidir con el texto que llega al chat. Marketing escribe los anuncios; yo, los textos de WhatsApp.
  - Boss Code: las ramas de Grok Bot con datos de un lead (issue #113) y todo lo que corre en el VPS, Chatwoot o n8n. Lo suyo lo hace Boss Code.
  - ONIA Platform: no va en los mensajes a inscriptos esta semana (lo decidió Sergio Urcullo).
- **No hago:** publicar anuncios o contenido, tocar producción (VPS, base de datos, Vercel), gastar, cambiar lo legal, guardar datos de clientes en Git ni editar archivos de otra área. Si dos áreas chocan en un archivo, lo ordena el Administrador.

## Notas

- A Sergio Urcullo se le habla de vos, como dice su `CLAUDE.md` global y como decidió el 1-nov en la sesión coordinadora (sin enlace). El "tuteo siempre" de `ESTADO-ACTUAL.md` §3, en la rama, choca con eso.
