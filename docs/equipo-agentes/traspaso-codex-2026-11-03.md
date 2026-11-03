# Traspaso a Codex del 3-nov-2026

Lo que Codex necesita para seguir sin volver a preguntarle todo a Sergio Urcullo. Lo escribió el proyecto Onia de Claude el 3-nov-2026 a la madrugada (UTC), el día que vence Claude. Codex (ChatGPT Pro) sigue hasta el 14-nov.

Este archivo manda sobre el "Ahora" de los estados de `docs/equipo-agentes/` donde se contradigan, porque esos "Ahora" son del 2-nov y el 3-nov cambió el plan. Cada jefe pasa lo de su área a su "Ahora" en su primer trabajo, y desde ahí vale su estado. Cómo se abre cada jefe en Codex sigue en el [README de los tres proyectos](README.md), "En Codex, después" y "Relevo a Codex".

## 1. Qué cambió el 3-nov

- **La visión de ONIA está en [`docs/vision/`](../vision/README.md):** los 6 puntos que repasó Sergio Urcullo (cada archivo dice qué cerró y qué sigue abierto) y su contexto (meta, plata, horarios). No se copia acá. Al escribir esto estaba en un cambio sin mergear, rama `claude/project-thread-e8umfe`; si `docs/vision/` no está en `main`, se lee de esa rama con `git show origin/claude/project-thread-e8umfe:docs/vision/README.md`.
- **Plan número uno: el taller**, para sacar ingresos ya ([cómo mejorar](../vision/como-mejorar.md)). Meta: Bs 3.000 = 60 pagos de Bs 50 ([contexto de Sergio](../vision/contexto-sergio.md)).
- **La fecha del taller del 4, 5 y 6-nov está en pausa** desde el 3-nov, por decisión de Sergio Urcullo en el proyecto Onia (sin enlace). Todo lo que en el repo dice "4, 5 y 6-nov" (estados, campaña, textos, página) queda como borrador hasta que él fije otra fecha. No se lanza, se publica ni se gasta nada con la fecha vieja.
- **3 videos por día, con calidad alta.** Sergio Urcullo rechazó bajar a 1. Su principio: "para que algo funcione, tiene que verse bien, tiene que funcionar bien, tiene que estar bien hecho".
- **ONIA Platform:** los módulos de rubro quedan congelados y se termina solo el core, empezando por inventario y chatbot de WhatsApp sin errores ([ONIA Platform](../vision/onia-platform.md)). Mientras el taller es la prioridad, la propuesta del proyecto Onia fue diagnosticar el core en solo lectura antes de tocar código; Sergio Urcullo no lo decidió.

## 2. La línea de producción del contenido

Para sostener 3 videos por día hacen falta 4 pasos. Al 3-nov:

| Paso | Estado al 3-nov |
|---|---|
| 1. Ideas y guiones | No existe un sistema diario. Lo empezó un hilo el 3-nov (abajo, área 2). |
| 2. Grabación | La hace Sergio Urcullo, en bloque, después de las 19:00. Necesita guiones listos. |
| 3. Edición | Plantilla "cara con íconos" (de Erik Taveras) en firme desde el 3-nov. Faltan 2 o 3 formatos más. |
| 4. Publicación y embudo | Sin investigar a fondo. Hasta que se decida, una sola llamada a la acción: anotarse en la lista del taller ([cómo mejorar](../vision/como-mejorar.md), guía 3). |

## 3. Qué sigue, por prioridad

Cada tarea es de unos 30 minutos y va por PR (`AGENTS.md`, "Cómo se trabaja"). Al empezar, el jefe mira en GitHub en qué quedó cada PR nombrado acá: puede haberse mergeado después de escribir esto.

**1. Taller y venta (Marketing y ventas).**
- Pedirle a Sergio Urcullo la fecha nueva del taller, como opción con la recomendada marcada. Con esa fecha, poner al día textos, página y campaña, cada uno con su sí y captura.
- El camino ya lo cerró Sergio Urcullo: contenido, mensaje directo, clase gratis, taller de Bs 50 y comunidad paga ([ventas](../vision/ventas.md), "Los dos caminos"). Falta definir el embudo exacto y qué incluye la comunidad paga (precio y contenido), y llevárselo como opciones. La investigación de la campaña está en el [PR #180](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/180).
- Lo que sigue esperando a Sergio Urcullo para cobrar (pago de prueba con QR, página y cuenta de Meta con tarjeta, OBS): en [`pendientes-de-sergio.md`](../pendientes-de-sergio.md), "Ahora". Las fechas de esa tabla son las viejas.

**2. Guiones diarios (Marketing y ventas).**
- Un hilo del 3-nov armaba la guía de guiones con 3 tipos por día (noticia o herramienta de IA, proceso de armar la empresa, enseñar algo), 3 guiones de ejemplo y una propuesta de automatización por Telegram con n8n en el VPS, sin construirla. Si no dejó PR, se retoma desde cero con ese objetivo.
- Los guiones explican el por qué y no son básicos, y los ganchos salen de los referentes ([marca personal](../vision/marca-personal.md)).
- Después de la guía, armar la automatización: n8n en el VPS (no vence) manda los 3 guiones del día a Telegram. Es gratis, salvo lo que cobre por uso el modelo que escriba los guiones: eso se marca como gasto ("Núcleo" de [`docs/lecciones.md`](../lecciones.md), punto 8).
- Los guiones de la semana del 3 al 8-nov del [PR #139](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/139) son anteriores a este plan: se rescata lo que sirva y el resto se cierra, con su sí.

**3. Formatos de edición (Marketing y ventas).**
- La plantilla "cara con íconos" quedó en firme el 3-nov ([PR #183](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/183), mergeado). El análisis de Erik está en el [PR #177](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/177). La skill es [`editar-video`](../../.agents/skills/editar-video/SKILL.md).
- Lo siguiente: el mismo método (3 reels por formato, cuenta de Instagram solo en lectura) con 2 o 3 referentes de formato distinto al de Erik, de su lista: gonzaloteba, jorge.darek, garyvee, herasmedia, softgirlnocode, sanmunoz.ia, imangadzhi, hormozi. Hecho cuando hay 3 o 4 plantillas en el repo. Los formatos y los guiones tienen que encajar.

**4. Embudo y oferta después del taller (Marketing y ventas).** Investigar cómo venden sus referentes y qué embudo conviene, con fuentes. El borrador que se habló (reel con "comentá IA", mensaje directo automático, cuestionario, WhatsApp) no está decidido ([ventas](../vision/ventas.md)). Responder solo a comentarios y mensajes directos va después de esto.

**5. ONIA Platform y Desarrollo.** El runner de la CI de `onia-platform` se rearmó el 3-nov y quedó corriendo las pruebas ([`producto.md`](producto.md), "Runner de la CI"). Que terminara bien la primera prueba no estaba confirmado al escribir esto. Lo que se propone después es diagnosticar el core en solo lectura (ver el punto 1, arriba). El resto del orden sigue en [`platform.md`](platform.md) y [`producto.md`](producto.md).

## Calendario propuesto (sin aprobar)

Lo propuso el proyecto Onia el 3-nov. **Sergio Urcullo todavía no lo aprobó:** se le presenta como opción, no se da por decidido ("Núcleo" de [`docs/lecciones.md`](../lecciones.md), punto 2).

| Cuándo | Qué |
|---|---|
| Noches del 3 y el 4-nov | Plantillas de edición, guía de guiones, investigación del embudo y conexión de n8n. Los agentes pueden trabajar de noche, sin Sergio. |
| Noche del 4-nov | Sergio Urcullo une la cuenta de Instagram a la página de Onia (requisito de abajo). |
| 5-nov, noche del 6 y 7-nov | Grabar en bloque. Si se usa Higgsfield para planos y elementos de IA, son generaciones pagas, cada una con su sí (`AGENTS.md`, "Frenos"). |
| Desde el 6-nov | Publicar 3 videos por día, sin anuncios. Cada publicación, con su sí. |
| 8-nov | Probar el embudo de punta a punta. |
| Lunes 9-nov | Lanzamiento. Codex sigue hasta el 14 para arreglos. Anuncios pagos solo con las primeras ventas y con su sí. |

Reemplaza una propuesta anterior, con lanzamiento el 16-nov, que Sergio Urcullo encontró "muy lejos" (3-nov, sin enlace). La fecha del taller la decide él.

Requisito, según el coordinador del proyecto Onia: la cuenta de Instagram tiene que ser profesional y estar unida a la página de Facebook de Onia. El cambio de cuenta y la unión los hace Sergio Urcullo.

## Cómo organizar el trabajo (propuesta, sin aprobar)

Se le propuso el 3-nov: tareas cortas, cada una con un solo entregable, en vez de una sesión fija por área. Al terminar una se abre la siguiente, y nunca hay más de 2 o 3 a la vez. Las áreas siguen como carpetas del repo y como etiqueta de cada tarea. Esto cambia "Equipo de agentes" del `AGENTS.md`, así que hasta que Sergio Urcullo lo apruebe vale lo que dice ese archivo.

## 4. Cambios abiertos al 3-nov

Los que importan para el plan. Cada uno espera el sí de Sergio Urcullo, o su revisión.

| Qué | Dónde | Espera |
|---|---|---|
| Visión de ONIA, 6 puntos y contexto | [PR #186](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/186) | Sí de Sergio. El [PR #182](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/182) es una versión vieja con solo el punto 1: se cierra sin mergear cuando entre el #186. |
| Investigación para vender el taller | [PR #180](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/180) | Respuesta de Sergio a sus opciones |
| Análisis de Erik Taveras | [PR #177](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/177) | Sí de Sergio |
| Mapa de campañas de Meta y guiones de anuncios | [PR #176](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/176) | Fecha nueva del taller |

Los demás abiertos (del #66 al #175) son de antes del 3-nov y están nombrados en el "Ahora" de cada estado.

## 5. Cómo trabaja Sergio Urcullo

Las reglas que ya están en el repo se nombran, no se copian:

- Aprobaciones, frenos, merges y revisión única: `AGENTS.md`, "Cómo se trabaja" y "Frenos".
- Cómo se le escribe (corto, de vos, sin números de PR, "Sergio, tenés este cambio: … ¿Lo aceptás?", 3 opciones y "Para aprender"): "Núcleo" de [`docs/lecciones.md`](../lecciones.md), punto 1.
- Credenciales nunca en el chat ni en Git: [credenciales](../credenciales.md) y `AGENTS.md`, "Qué no entra a Git".
- Todo queda en el repo, no solo en la PC ni en la memoria de un agente: `AGENTS.md`, "La PC, cuando hace falta", y "Núcleo", punto 5.

Lo que dijo el 3-nov y todavía no está en esas reglas:

- **Cuentas del navegador, solo lectura:** ni publicar, ni dar "me gusta", ni comentar, ni seguir, ni mandar mensajes, ni cambiar ajustes. Al terminar, se cierra el navegador. En Instagram, la sesión es la de `sergiourcullo`.
- **Primero los referentes, después replicar:** antes de crear algo (una web, un guion, una edición), se miran los referentes que le gustan y cómo trabajan. Nada genérico.
- **Quiere aprender cada día:** cada término nuevo (embudo, webinar, lead) se le explica en una línea, además del bloque "Para aprender".
- **No se abre trabajo nuevo de otra área por iniciativa propia,** ni un hilo o sesión nueva sin que él diga "lanzá".
- **Tiempo:** libre desde las 19:00 entre semana; vacaciones desde inicios de diciembre ([contexto de Sergio](../vision/contexto-sergio.md)). Lo que se le pida, junto y para esa hora.
- **Plata:** no tiene, y todo gasto pasa por él (`AGENTS.md`, "Frenos").

## 6. Fechas

| Fecha | Qué |
|---|---|
| 3-nov | Vence Claude. Lo que quedó solo en los hilos del proyecto Onia, Codex no lo ve: por eso este archivo. |
| 12-nov | Sergio Urcullo decide si renueva Codex y con qué plan ([relevo a Codex](../decisiones/2026-11-03-relevo-a-codex.md), punto 2). |
| 14-nov | Vence Codex. |
| 1-dic | Vence Higgsfield. |
