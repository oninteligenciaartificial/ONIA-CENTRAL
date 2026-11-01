# Boss No-Code: estado

Área: ventas, leads de WhatsApp (+591 75414930) y de Instagram, chatbot, diagnóstico gratis, precios, el taller "Claude de 0 a 100" y finanzas. Desde el 1-nov-2026 es una sesión de Claude Code; antes, un bot de Grok Bot (Ventas y Atención, después "Jefe de Negocio"). Lo decidió Sergio Urcullo el 1-nov, con botones, en la sesión coordinadora de Claude Code (sin enlace). Hasta que un PR aparte lo ponga en el `AGENTS.md`, esa decisión vale donde el repo dice que el trabajo pasa por Hermes, Grok Bot u `onia-llm`.

Los mensajes a leads quedan en borrador hasta el sí de Sergio Urcullo. Lo de otra área se anota abajo como "para <área>".

Actualizado: 1-nov-2026, a la noche (Bolivia), con las decisiones de Sergio Urcullo de esa noche. Fuentes: `main` (`db605e0`), la rama `origin/onia-loop-excepcion-d003` (`c2796fa`) y los conectores de esta sesión, consultados ese día. Lo que dice la rama lo escribió Grok Bot, no tiene cita de Sergio Urcullo, y va como dato, no como regla.

## Taller "Claude de 0 a 100"

- Fechas: martes 3, jueves 5 y sábado 7-nov, 19:00 de Bolivia, por Google Meet (`docs/decisiones/2026-10-31-decisiones-taller-y-agentes.md`).
- Inscripción: WhatsApp +591 75414930. Cobro con QR, confirmado a mano (`workshops-comunidad/plan-meta-ads-borrador.md`).
- Cobrado al 1-nov: Bs 0, según la rama. Sin confirmar en esta PC.

## Decisiones de Sergio Urcullo del 1-nov

Las tomó en esta sesión, a la noche, con botones. Sus palabras van entre comillas.

- **Precio:** Bs 50. "cuesta 50bs". Reemplaza los Bs 70 desde el 2-nov de `docs/decisiones/2026-10-31-decisiones-taller-y-agentes.md`.
- **Pago:** a la pregunta de seguir con Bs 120 las tres clases y sin devolución, contestó "no esta definido ningun cambio, workshop pago unico". Qué cubre ese pago único (si los Bs 50 son por las tres clases o por cada una, y si quedan los combos y las clases sueltas del plan del 29-oct) está sin confirmar: se le pregunta.
- **QR:** "Yolo Pago (Ganadero)". El del BCP queda para ONIA Platform, según la rama. Falta un pago de prueba antes del martes 3.
- **Salas de Meet:** "Las creo yo". Esta sesión las creó el 1-nov con `create_event` de Google Calendar, en el calendario principal de la cuenta de Google conectada a la app: 6 eventos, 2 por clase (Sala 1 de 19:00 a 20:00 y Sala 2 de 20:00 a 21:00, hora de Bolivia), con Meet, sin invitados y con `notificationLevel: NONE`, para que no salga ningún correo. La herramienta devolvió los 6 eventos confirmados. Los enlaces están en esos eventos y no se copian en Git.
- **Cómo se le presentan las decisiones:** "las decisiones no me las envies vos, que queden cada decision en su respectiva sesion". Se lee como que cada sesión le presenta solo las de su área; lo de otra área va abajo, "para <área>".

## Decisiones que siguen abiertas

| # | Tema | Estado |
|---|---|---|
| 1 | Devolución | `main` propone sin devolución, dicho antes de pagar, con la grabación incluida (plan del 29-oct). La rama la tenía pendiente (D-013). Sin decidir |
| 2 | Mensaje de diagnóstico gratis a los chats en espera | Borradores con enlace de Cal.com, solo en `/workspace`; falta su sí (D-012) y el acceso a la bandeja de Chatwoot. Bloqueado: los borradores no están en esta PC |
| 3 | Plantillas de WhatsApp (D-015) y migración de WhatsApp (D-018) | Pendientes, detalle solo en `/workspace/decisiones/` |
| 4 | Nombre "Claude de 0 a 100" | Usa una marca ajena en algo pago: a confirmar con un abogado (`docs/lecciones.md`) |

## Qué hay y dónde

En `main`:
- `docs/decisiones/2026-10-31-decisiones-taller-y-agentes.md`: fechas, sala y precio del taller.
- `workshops-comunidad/plan-meta-ads-borrador.md`: plan del 29-oct, con oferta, cobro, devolución y textos. Las fechas del 17 y 19-nov quedaron reemplazadas por las del 3, 5 y 7-nov.

En GitHub, sin mergear:
- [PR que prepara el temario, los textos de WhatsApp, los guiones y la lista para lanzar el taller](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/72): `workshops-comunidad/claude-0-a-100/` con `whatsapp.md` (bienvenida, "/taller", "/qr", "/pagado"). Es anterior a la decisión del 31-oct. Sus Bs 70 no son el precio de inscripción: son lo que paga quien hizo la clase 1 para completar las clases 2 y 3, hasta el jueves 5 (su `README.md`, elegido por Sergio Urcullo el 30-oct).

Solo en `/workspace`, la computadora en la nube de Grok Bot, que esta PC no ve. Sergio Urcullo se lo pide a Grok Bot si hace falta:
- `/workspace/ventas/`: guion de WhatsApp del taller, escalera de oferta y precios, borradores de diagnóstico gratis y funnels.
- `/workspace/manuales/negocio/` y `/workspace/manuales/finanzas-legal/`: control diario y conciliación de cobros.
- `/workspace/decisiones/INDICE.md`: el detalle de D-009 a D-020.
- `/workspace/taller-claude/` y `/workspace/entregables-workshop/` (guiones de las clases y web de invitación).

## Conectores de esta sesión

Consultados el 1-nov con `session_connectors_status` de la app, sin leer secretos. Figuran como conectados, entre otros, Google Calendar, Gmail, Google Drive, Notion y Meta Ads. De esos, solo se usó Google Calendar: para leer eventos y para crear las 6 salas de Meet; que los demás anden para esta área queda sin confirmar. No figura ningún conector de WhatsApp, Instagram, Chatwoot ni del banco: los leads y los cobros no se ven desde acá.

## Pendientes del área

- [ ] Pago de prueba con el QR de Yolo Pago antes del martes 3 (lo hace Sergio Urcullo).
- [ ] Poner al día los textos de WhatsApp del taller con Bs 50 y el QR de Yolo Pago, en borrador, cuando Sergio Urcullo confirme qué cubre el pago único. Hoy `workshops-comunidad/plan-meta-ads-borrador.md` y el PR de materiales del taller todavía dicen Bs 50 la clase, Bs 120 las tres y Bs 70 para completar.
- [ ] Planilla de cobros del taller, sin datos de clientes en Git.
- [ ] Traer de `/workspace` los borradores de diagnóstico gratis, sin datos de clientes, si Sergio Urcullo los pide.

## Para otras áreas

- Para Marketing: captions de reels y anuncios con Bs 50, decidido por Sergio Urcullo el 1-nov; qué cubre el pago único, sin confirmar (arriba). Y el presupuesto de anuncios (`main` dice US$10 por día en pausa; la rama, US$10 o US$5).
- Para Marketing: dónde se publica la web de invitación del taller. Vercel u onia.com.bo son producción.
- Para la sesión coordinadora: `docs/decisiones/2026-10-31-decisiones-taller-y-agentes.md` sigue diciendo Bs 70 desde el 2-nov. Esta área no lo toca, porque no es su archivo.
- Para ONIA Platform: el cobro con el QR del BCP y los precios de los planes, que siguen como propuesta.

## Notas

- A Sergio Urcullo se le habla de vos, como dice su `CLAUDE.md` global y como decidió el 1-nov en la sesión coordinadora (sin enlace). El "tuteo siempre" de `ESTADO-ACTUAL.md` §3, en la rama, choca con eso.
