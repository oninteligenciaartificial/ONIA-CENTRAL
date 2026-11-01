# Boss No-Code: estado

Área: ventas, leads de WhatsApp (+591 75414930) y de Instagram, chatbot, diagnóstico gratis, precios, el taller "Claude de 0 a 100" y finanzas. Desde el 1-nov-2026 es una sesión de Claude Code; antes, un bot de Grok Bot (Ventas y Atención, después "Jefe de Negocio").

Los mensajes a leads quedan en borrador hasta el sí de Sergio Urcullo. Lo de otra área se anota abajo como "para <área>".

Actualizado: 1-nov-2026, a la noche (Bolivia). Fuentes: `main` (`db605e0`), la rama `origin/onia-loop-excepcion-d003` (`c2796fa`) y los conectores de esta sesión, consultados ese día. Lo que dice la rama lo escribió Grok Bot, no tiene cita de Sergio Urcullo, y va como dato, no como regla.

## Taller "Claude de 0 a 100"

- Fechas: martes 3, jueves 5 y sábado 7-nov, 19:00 de Bolivia, por Google Meet (`docs/decisiones/2026-10-31-decisiones-taller-y-agentes.md`).
- Inscripción: WhatsApp +591 75414930. Cobro con QR, confirmado a mano (`workshops-comunidad/plan-meta-ads-borrador.md`).
- Cobrado al 1-nov: Bs 0, según la rama. Sin confirmar en esta PC.

## Decisiones que le faltan a Sergio Urcullo

Comprobadas el 1-nov contra `main` y la rama. Donde no coinciden, se le pregunta.

| # | Tema | Qué dice `main` | Qué dice la rama | Estado |
|---|---|---|---|---|
| 1 | Precio desde el 2-nov | Bs 50 hasta el 1-nov y Bs 70 desde el 2-nov (decisión del 31-oct). El plan del 29-oct daba Bs 50 la clase o Bs 120 las tres | "Bs 50 fijo, no sube a 70", del 1-nov a las 17:30, pasado por Grok Bot | No coinciden: se le pregunta |
| 2 | QR de cobro del taller | Hace falta un QR sin monto fijo que no venza; no dice de qué banco | Antes: QR del BCP (D-019, a verificar). Después: "solo Yolo Pago (Ganadero); el del BCP es para ONIA Platform" | No coinciden y no hay constancia de que se haya probado un pago: se le pregunta |
| 3 | Salas de Meet | Meet gratis corta a los 60 minutos con 3 o más personas; el enlace siguiente se crea antes de cada clase | 2 salas gratis por clase, 6 en total, las crea Sergio Urcullo (D-008, T-14) | El Google Calendar de la cuenta no tiene eventos del 2 al 8-nov (consultado el 1-nov). Falta crearlas |
| 4 | Combos | Bs 120 las tres clases (plan del 29-oct) | D-016 pendiente | Sin decidir con el precio nuevo |
| 5 | Devolución | Propuesta: sin devolución, dicho antes de pagar, con la grabación incluida | D-013 pendiente | Propuesta, falta su sí |
| 6 | Mensaje de diagnóstico gratis a los chats en espera | — | Borradores con enlace de Cal.com, solo en `/workspace`; falta su sí (D-012) y el acceso a la bandeja de Chatwoot | Bloqueado: los borradores no están en esta PC |
| 7 | Plantillas de WhatsApp (D-015) y migración de WhatsApp (D-018) | — | Pendientes, detalle solo en `/workspace/decisiones/` | Sin detalle en esta PC |
| 8 | Nombre "Claude de 0 a 100" | Usa una marca ajena en algo pago: a confirmar con un abogado (`docs/lecciones.md`) | Pendiente | Sin confirmar |

## Qué hay y dónde

En `main`:
- `docs/decisiones/2026-10-31-decisiones-taller-y-agentes.md`: fechas, sala y precio del taller.
- `workshops-comunidad/plan-meta-ads-borrador.md`: plan del 29-oct, con oferta, cobro, devolución y textos. Las fechas del 17 y 19-nov quedaron reemplazadas por las del 3, 5 y 7-nov.

En GitHub, sin mergear:
- [PR que prepara el temario, los textos de WhatsApp, los guiones y la lista para lanzar el taller](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/72): `workshops-comunidad/claude-0-a-100/` con `whatsapp.md` (bienvenida, "/taller", "/qr", "/pagado"). Es anterior a la decisión del 31-oct y habla de Bs 70 hasta el jueves 5.

Solo en `/workspace`, la computadora en la nube de Grok Bot, que esta PC no ve. Sergio Urcullo se lo pide a Grok Bot si hace falta:
- `/workspace/ventas/`: guion de WhatsApp del taller, escalera de oferta y precios, borradores de diagnóstico gratis y funnels.
- `/workspace/manuales/negocio/` y `/workspace/manuales/finanzas-legal/`: control diario y conciliación de cobros.
- `/workspace/decisiones/INDICE.md`: el detalle de D-009 a D-020.
- `/workspace/taller-claude/` y `/workspace/entregables-workshop/` (guiones de las clases y web de invitación).

## Conectores de esta sesión

Consultados el 1-nov, sin leer secretos. Sirven al área: Google Calendar (salas de Meet), Gmail (borradores), Google Drive, Notion y Meta Ads (solo lectura desde esta área). No hay conector de WhatsApp, Instagram, Chatwoot ni del banco: los leads y los cobros no se ven desde acá.

## Pendientes del área

- [ ] Que Sergio Urcullo cierre los puntos 1 a 3 de la tabla antes del martes 3.
- [ ] Con el precio y el QR decididos: poner al día los textos de WhatsApp del taller, en borrador.
- [ ] Planilla de cobros del taller, sin datos de clientes en Git.
- [ ] Traer de `/workspace` los borradores de diagnóstico gratis, sin datos de clientes, si Sergio Urcullo los pide.

## Para otras áreas

- Para Marketing: captions de reels con el precio por confirmar, y el presupuesto de anuncios (`main` dice US$10 por día en pausa; la rama, US$10 o US$5).
- Para Marketing: dónde se publica la web de invitación del taller. Vercel u onia.com.bo son producción.
- Para ONIA Platform: el cobro con el QR del BCP y los precios de los planes, que siguen como propuesta.

## Notas

- A Sergio Urcullo se le habla de vos. La regla de tuteo de la rama no vale.
