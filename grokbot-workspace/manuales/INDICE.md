# Índice de manuales OnIA

Creado el 2026-11-01 a partir de lo que ya existía en las carpetas de los 7 agentes.
Arquitectura: `/workspace/investigacion/orquestacion-agentes.md` sección 3 (SUM coordina, Negocio y Producto enrutan, n8n hace lo fijo, Finanzas y Legal va directo a Claude).
Todos los manuales son **borradores v1**. Lo dudoso está marcado `POR CONFIRMAR` dentro de cada archivo.

Cada manual tiene: frontmatter (dueño, motor, nivel, máximo de vueltas, cuándo escala) · Objetivo · Cuándo se usa · Entrada · Pasos · Salida JSON · Fuentes · Reglas · Checklist · Prohibido · Cuándo escalar.

## negocio/ (bot Negocio: ventas, growth, contenido)

| Manual | Área de origen | Motor | Para qué |
|---|---|---|---|
| [ventas-responder-lead-whatsapp](negocio/ventas-responder-lead-whatsapp.md) | Ventas y Atención | claude | Respuesta en borrador a un lead nuevo, según el guion |
| [ventas-manejar-objeciones](negocio/ventas-manejar-objeciones.md) | Ventas y Atención | claude | Las 8 objeciones del guion, sin descuentos ni falsa urgencia |
| [ventas-seguimiento-leads](negocio/ventas-seguimiento-leads.md) | Ventas y Atención | n8n | Qué seguimiento toca según el estado del lead |
| [ventas-inscripcion-cobro-qr](negocio/ventas-inscripcion-cobro-qr.md) | Ventas y Atención | claude | Mensajes del QR y del comprobante; solo Sergio verifica el pago |
| [ventas-diagnostico-ia-gratis](negocio/ventas-diagnostico-ia-gratis.md) | Ventas y Atención | claude | Cuándo ofrecer el diagnóstico gratis y cómo calificar |
| [growth-variantes-campana](negocio/growth-variantes-campana.md) | Growth y Anuncios | claude | 2 o 3 variantes de texto por campaña (Meta, clic a WhatsApp) |
| [growth-creativos-video-anuncio](negocio/growth-creativos-video-anuncio.md) | Growth y Anuncios | claude | Guiones, prompts y costo estimado de creativos, sin generar |
| [growth-funnel-whatsapp](negocio/growth-funnel-whatsapp.md) | Growth y Anuncios | claude | Revisar la secuencia de WhatsApp y su coherencia con los anuncios |
| [growth-referentes-competencia](negocio/growth-referentes-competencia.md) | Growth y Anuncios | claude | Informe de competencia: lo verificado separado de lo no verificado |
| [contenido-guiones-semanales-reels](negocio/contenido-guiones-semanales-reels.md) | Contenido y Marca | claude | Guiones de la semana por bloque de grabación |
| [contenido-calendario-dashboard](negocio/contenido-calendario-dashboard.md) | Contenido y Marca | claude | Calendario de 2 semanas y datos del panel de contenido |
| [contenido-analisis-referentes](negocio/contenido-analisis-referentes.md) | Contenido y Marca | claude | Ganchos y plantillas sacados de las transcripciones |
| [contenido-recordatorios-taller](negocio/contenido-recordatorios-taller.md) | Contenido y Marca | claude | Borradores que piden Talleres o Ventas (nunca se envían) |
| [contenido-video-higgsfield](negocio/contenido-video-higgsfield.md) | Contenido y Marca | claude | Paquete previo de video con IA (modelo, costo, saldo) |

## producto/ (bot Producto: plataforma, talleres, operaciones)

| Manual | Área de origen | Motor | Para qué |
|---|---|---|---|
| [plataforma-encargar-cambio-codex](producto/plataforma-encargar-cambio-codex.md) | ONIA Platform | claude | Convertir un pendiente técnico en un encargo a Codex (<25 min, en patch) |
| [plataforma-revisar-patch](producto/plataforma-revisar-patch.md) | ONIA Platform | claude | Revisar un patch de Codex (revisor distinto del escritor) |
| [plataforma-plantilla-rubro](producto/plataforma-plantilla-rubro.md) | ONIA Platform | codex | Agregar o ajustar una plantilla por rubro |
| [plataforma-evals-agente](producto/plataforma-evals-agente.md) | ONIA Platform | codex | Casos de eval del agente de WhatsApp |
| [plataforma-automatizaciones](producto/plataforma-automatizaciones.md) | ONIA Platform | codex | Automatizaciones nativas y cuándo usar n8n |
| [talleres-material-clase](producto/talleres-material-clase.md) | Talleres | claude | Material y diapositivas de una clase (2 bloques de ~50 min) |
| [talleres-kit-alumno](producto/talleres-kit-alumno.md) | Talleres | claude | Hoja de una página por clase |
| [talleres-recordatorios-clase](producto/talleres-recordatorios-clase.md) | Talleres | claude | Recordatorios coordinados con Contenido y Ventas |
| [talleres-comunidad](producto/talleres-comunidad.md) | Talleres | claude | Mensajes del grupo, reglas, encuesta y testimonios |
| [talleres-temario-nivel-nuevo](producto/talleres-temario-nivel-nuevo.md) | Talleres | claude | Temario de un nivel o taller nuevo, con opciones para Sergio |
| [operaciones-registro-uso-ia](producto/operaciones-registro-uso-ia.md) | Operaciones | claude | Uso de IA, topes de planes y saldo de herramientas |
| [operaciones-cola-onia-llm-niveles](producto/operaciones-cola-onia-llm-niveles.md) | Operaciones | claude | Encolar en onia-llm y elegir el nivel de modelo |
| [operaciones-vigilante-equipo](producto/operaciones-vigilante-equipo.md) | Operaciones | n8n (propuesta) | Quién está parado y por qué |
| [operaciones-orquestar-reporte-buzones](producto/operaciones-orquestar-reporte-buzones.md) | Operaciones | claude | onia-central: buzones, reporte y decisiones |

## finanzas-legal/ (sin bot: SUM lo pasa directo a Claude)

| Manual | Motor | Para qué |
|---|---|---|
| [control-diario](finanzas-legal/control-diario.md) | claude | Reporte nocturno de ventas y avance contra la meta |
| [cobro-qr-y-conciliacion](finanzas-legal/cobro-qr-y-conciliacion.md) | claude | Registro sin datos personales y lista para conciliar a mano |
| [reembolso-taller](finanzas-legal/reembolso-taller.md) | claude | Borrador de respuesta a un pedido de reembolso |
| [terminos-taller](finanzas-legal/terminos-taller.md) | claude | Términos en borrador y lista para contador o abogado |
| [plan-inversion](finanzas-legal/plan-inversion.md) | claude | Escenarios del plan, con cada cifra marcada como estimada o real |

## POR CONFIRMAR más importantes (detalle en cada manual)

1. **Precio vigente del taller:** Bs 50 hasta el 1/11 y Bs 70 desde el 2/11 según el guion de ventas. No existe QR de Bs 70: todo cobro de Bs 70 se deriva a Sergio. Falta decidir si se extiende el precio de lanzamiento.
2. **Contradicciones de fuentes:** `finanzas/flujo-cobro-qr.md` contradice al guion de ventas (datos que pide, fecha de inicio, conteo de cupos, montos viejos). En los manuales manda el guion.
3. **Plan de inversión v1 contra v2:** distinto tipo de cambio (6,96 y 12,09), distintos costos fijos y distinta forma de pagar la tarjeta.
4. **Reembolso:** opción A o B sin elegir, plazo en días sin definir. `taller-claude/anuncio-y-combos.md` dice "sin devolución".
5. **Cupos (~60), grabaciones, certificado y fecha de la clase 3 (7/11):** no confirmados.
6. **Presupuesto diario de anuncios:** US$ 10 en `growth/AGENTS.md` y US$ 5 en `growth/guia-anuncios-meta.md`.
7. **Precios de ONIA Platform y del piloto dental:** solo hay propuestas, ninguna aprobada.
8. **Tono:** varios archivos viejos usan voseo, pero la regla es tuteo. Los manuales no copian texto de esos archivos.
9. **Legal:** NIT, SIAT, titular de la cuenta del QR, Ley 453 y datos personales están NO VERIFICADOS y son para contador o abogado.

## Regla de mantenimiento
Si una tarea se repite 3 veces, escríbele un manual. Si un manual solo tiene pasos fijos, sin decisiones, pásalo a n8n. Al cambiar un manual, súbele `version`.
