# Un jefe por área: tres proyectos

2-nov-2026. **Aprobada por Sergio Urcullo el 2-nov,** con lo que sumó: su respuesta está citada al final, en "Aprobación de Sergio Urcullo". Toca el `AGENTS.md` y cómo trabaja la empresa, así que la aprueba él (`AGENTS.md`, "Lo aprueba Sergio Urcullo, siempre").

## Qué pidió Sergio Urcullo

En el proyecto Onia de claude.ai, en el hilo y en el chat del proyecto, el 2-nov (sin enlace):

- "siento que las sesiones se pierden y no tienen contexto no se porque sucede eso";
- "y les toma demasiado tiempo hacer las cosas, no se porque como si no hubieran aprendido nada de mi";
- "tenes razon, trabajaremos aqui, y lo dejaremos armado para usarlo luego en codex para no perdernos";
- "prefiriria 3 proyectos, uno de marketing, uno de desarrollo, y uno de la startup para crear la onia plattform, asi ordenado, pero no se si leerian todos el contexto y tampoco es para que la general se sobrellene";
- "Perfecto, primero quiero aprovechar mi sesion de claude, dejemos todo listo". Fue su respuesta a la propuesta de armar el plan de los 3 proyectos con el texto del `AGENTS.md` y pedirle el sí;
- "necesitamos apartados que nos cuiden absolutamente todo";
- "no eso aun no, primero la orquestacion y manejo de todas las sesiones". Lo dijo cuando se le propuso empezar por el plan de ventas;
- "yo creo que sería mejor como un jefe por cada área, porque si tenés un solo jefe para todo, se va a llenar demasiado su memoria y luego no va a entender absolutamente nada de lo que le estás diciendo". Fue su respuesta a la opción de un solo Administrador que orquestara los tres proyectos, que se le había recomendado. Esa opción queda descartada;
- "3". Fue su respuesta a "Crearlos igual, para hoy y mañana", la tercera de las opciones sobre crear un proyecto de Claude por área. La recomendada era no crearlos, porque Claude vence el 3-nov;
- "3", otra vez. Fue su respuesta a "Esperá el cambio del repo y después los creás": los proyectos de Claude se crean después de que entre este cambio.

Sobre el motor, el mismo día dijo que prefería volver a pagar Claude antes que Grok Bot. Claude vence el 3-nov y Codex el 14-nov: "claude se vence el 3 de noviembre, y codex el 14" (29-oct, `workshops-comunidad/plan-meta-ads-borrador.md:16`). Renovar es gasto y lo decide él aparte de este cambio. Por eso el armado sirve igual en Claude y en Codex.

## Por qué se pierden y tardan

Las sesiones no aprenden solas: saben lo que leen al arrancar. Hasta hoy, eso era mucho y mezclado:

- una sesión de Claude ocupaba entre 92.247 y 99.197 tokens antes del primer mensaje, y unos 120.000 después de leer reglas y estado ([plan del 1-nov](2026-11-01-plan-equipo-y-paso-a-codex.md), punto 2);
- antes de este cambio, `docs/lecciones.md` tenía 37.441 caracteres, unos 12.000 tokens, y `otros/aprender-ia-y-agentes.md` 29.591, unos 9.500. Los dos se leían enteros al arrancar. Son los caracteres de `main` en `170596e`, contados con `wc -m` en UTF-8 el 2-nov, y los tokens están estimados a 3,1 caracteres por token, la relación que midió el [plan del 1-nov](2026-11-01-plan-equipo-y-paso-a-codex.md), punto 2;
- los estados mezclaban historia y presente. `coordinacion.md` seguía diciendo que `marketing.md` no estaba en `main` cuando ya se había mergeado. El PR #168 lo corrigió en la tabla de sesiones, pero el relevo del Administrador lo seguía dando como pendiente;
- eran ocho sesiones, y Sergio Urcullo tenía que ir de una a otra. Los mensajes entre sesiones no estaban probados entre áreas, y en Codex figuran en desarrollo y apagados ([plan del 1-nov](2026-11-01-plan-equipo-y-paso-a-codex.md), punto 6).

Un solo jefe para todo tendría el mismo problema que señaló Sergio Urcullo: cargaría lo de las tres áreas cada vez que trabaja.

## Qué se propone

Lo marcado como **pedido** sale de sus palabras. Lo marcado como **propuesta** es del autor, y él lo puede cambiar.

1. **Tres proyectos, y cada uno es su propio jefe:** Marketing y ventas, Desarrollo y ONIA Platform, sin un jefe general. **Pedido** ("3 proyectos", "un jefe por cada área").
2. **El jefe pasa cada tarea larga a otro agente,** para que ese trabajo no llene su sesión. En Claude, a un hilo del proyecto, que arranca limpio. En Codex, a un subagente, que saca el trabajo del hilo principal y le devuelve un resumen. Codex los trae prendidos y los lanza cuando se lo pide el usuario o una instrucción del proyecto ([subagentes de Codex](https://learn.chatgpt.com/docs/agent-configuration/subagents.md), "Why subagent workflows help", "Availability" y "Orchestration and thread controls"). También puede pasarla a un Codex nuevo con la skill [`encargar`](../../.agents/skills/encargar/SKILL.md). **Propuesta**, por "se va a llenar demasiado su memoria". Se parece a Grok Bot, que mandaba el trabajo pesado a Claude Code o Codex en un encargo cerrado ([onia-llm](../harness/onia-llm.md)). En Codex está sin probar en la PC, y la misma guía dice que los subagentes gastan más cupo que hacer lo mismo en una sola sesión.
3. **Lo general no se sobrecarga:** cada jefe lee al arrancar solo el `AGENTS.md`, el "Núcleo" de `docs/lecciones.md`, el "Ahora" y las "Correcciones de Sergio" de su estado, lo que el tablero tenga sin contestar para su área y el tema actual del plan de aprendizaje. **Pedido** ("tampoco es para que la general se sobrellene"); la forma es **propuesta**.
4. **Lo que tiene que durar vive en el repo,** no en la memoria de Claude ni de Codex: las reglas, el "Ahora" de cada estado y las correcciones de Sergio Urcullo. Así el mismo armado sirve en los dos motores. **Pedido** ("lo dejaremos armado para usarlo luego en codex para no perdernos"); la forma es **propuesta**.
5. **Mientras dure la cuenta de Claude, cada jefe es un proyecto de Claude, y después, una sesión de Codex.** Los proyectos se crean cuando entre este cambio. **Pedido** (las dos respuestas "3"). Un proyecto de Claude no llega a la PC: el 2-nov, la herramienta de dispositivos del proyecto contestó que esta cuenta pide dispositivos de confianza y que eso todavía no anda con Remote Control desde un proyecto. Al aprobar, Sergio Urcullo pidió: "necesitamos que a veces use la PC y que algunos cambios, o en lugar de que vayan a la PC, vayan al repositorio". Por eso, lo que se puede hacer en el repo se hace en el repo, y lo que solo está en la PC lo hace la sesión de Codex del área, que abre él para esa sola tarea, o él mismo, con el pedido y el resultado en el repo (`AGENTS.md`, "La PC, cuando hace falta"). **Pedido**; la forma es **propuesta**.
6. **Cada área tiene un solo jefe a la vez:** su proyecto de Claude o su sesión de Codex, no los dos, para que no se pisen los mismos archivos. **Propuesta.**
7. **Entre proyectos se avisan por escrito,** en el tablero del [issue #111](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/111), que cada jefe mira al arrancar. Lo que un estado deja "Para otras áreas" también va al tablero. **Propuesta.** Lo que se pierde: nadie está arriba de los tres, y Sergio Urcullo habla con cada jefe por separado.
8. **Las ventas del taller (Boss No-Code) van en Marketing y ventas.** **Propuesta**: su pedido nombra marketing, desarrollo y la startup, y la venta no entra en las otras dos.
9. **El Administrador, Pelau, la Analista y Recepción dejan de ser sesiones,** y su trabajo pasa a los proyectos, como dice la tabla de abajo. La infraestructura del equipo, y cuidar que las reglas y el repo no se contradigan, van a Desarrollo. **Propuesta.** Cambia decisiones suyas: Pelau lo pidió él el 1-nov (`docs/lecciones.md`, "Trabajo con Sergio Urcullo").
10. **Auditoría semanal en vez de la Analista:** cada sábado, Desarrollo le encarga a un agente nuevo una auditoría en solo lectura de los PRs mergeados en la semana. La primera, el 7-nov, cubre desde el 2-nov. **Propuesta.** Cambia una decisión suya: la auditoría una vez al día la eligió él el 1-nov ([plan del 1-nov](2026-11-01-plan-equipo-y-paso-a-codex.md), punto 11). Lo que se pierde: una revisión mal hecha puede tardar hasta una semana en verse. La revisión escrita de cada PR sigue igual.
11. **Cada corrección de Sergio Urcullo se anota en el mismo turno** en "Correcciones de Sergio", en el estado del área, y entra con el próximo PR del área. Si se repite o vale para todas las áreas, pasa a lección. **Propuesta**, por "como si no hubieran aprendido nada de mi".
12. **`negocio.md` se junta con `marketing.md` después del taller.** **Propuesta.** Hasta entonces, Marketing y ventas lee el "Ahora" de los dos.

**Si pasar la tarea a otro agente no anda en Codex:** el jefe la hace en una sesión nueva de su proyecto, con un solo objetivo, y deja el "Ahora" al día al cerrar (`AGENTS.md`, "Una sesión, un objetivo").

## Quién se encarga de qué

Así no queda nada sin dueño. Sale de la sección "Equipo de agentes" del `AGENTS.md` anterior y de los estados de `docs/equipo-agentes/` al 2-nov.

| Qué | Antes | Desde el 3-nov | De dónde sale |
|---|---|---|---|
| Hablar con Sergio Urcullo y darle el resumen de lo suyo | Cada sesión; Pelau hacía resúmenes | El jefe de cada proyecto | `AGENTS.md` |
| Contenido, marca, guiones, referentes y anuncios | Marketing | Marketing y ventas | `marketing.md` |
| Venta del taller: WhatsApp, Yolo Pago, registro de pagos, seguimientos y conciliación | Boss No-Code | Marketing y ventas | `negocio.md` |
| Borrar las ramas de Grok Bot con datos de un lead, después del taller y con el sí de Sergio | Boss No-Code | Marketing y ventas | `negocio.md`, `producto.md`, [#113](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/113) |
| Recibir los videos, imágenes, PDF y enlaces que manda Sergio | Recepción | El proyecto al que se los manda; si no está claro, Marketing y ventas | `recepcion.md` |
| Probar `ver-video` con un video con voz, y las cuentas secundarias de Instagram y TikTok cuando Sergio las cree | Recepción | Marketing y ventas | `recepcion.md` |
| VPS, Chatwoot, n8n, Cal.com y las webs | Boss Code | Desarrollo | `producto.md` |
| Producto y código de ONIA Platform | ONIA Platform | ONIA Platform | `platform.md` |
| Configuración del equipo: perfiles de Codex, permisos, conectores ([#128](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/128)), matriz de autonomía y memorias de Codex ([#38](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/38)) | Administrador | Desarrollo; los permisos y las reglas los aprueba Sergio | `coordinacion.md`, "Relevo del Administrador (2-nov, a la tarde)" y "Para después" |
| Los datos del panel de dirección (`otros/panel-direccion/datos.json`) | Administrador | Desarrollo | `coordinacion.md`, `otros/panel-direccion/README.md` |
| Pedirle a Sergio lo que le toca en la PC: limpieza de Orca y Antigravity, accesos de `.onia` y claves de `.claude.json` | Administrador | Desarrollo, todo junto en un solo mensaje | `coordinacion.md`, "Lo que le toca a Sergio" |
| Cargar en el navegador de un área las cuentas que pide | Cada área se las pedía a Sergio | Cada jefe le pide las de su área, y las carga él. Qué perfiles quedan y en cuál va cada cuenta lo decide él: las de ventas estaban pedidas para `boss-no-code`, y las secundarias de Instagram y TikTok para `recepcion` ([README](../equipo-agentes/README.md), "En Codex, después") | `coordinacion.md`, "Lo que le toca a Sergio"; [navegador por área](2026-11-02-navegador-por-area.md) |
| Contestar el QA de cada área | Cada sesión, con Sergio | Cada jefe, en su proyecto | `coordinacion.md`, "Sesiones abiertas" |
| Cuidar que las reglas estén en orden y que el repo no se contradiga | Administrador | Desarrollo; los cambios de reglas los aprueba Sergio | `AGENTS.md` anterior, "Equipo de agentes" |
| "Para después": el bot en la nube para dejar Grok Bot ([#96](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/96)), comprobar que nada dependa de Grok Bot antes de retirarlo, las skills `/empezar`, `/cerrar` y `/auditar`, y medir A y B de Codex | Administrador | Desarrollo. "Probar un mensaje directo de un área a otra" ya no va: entre proyectos se usa el tablero | `coordinacion.md`, "Para después" |
| Pasar lo de un área a otra | El Administrador repartía las tareas, Recepción pasaba lo útil de lo que mandaba Sergio y Pelau sumaba el tablero a sus resúmenes | Cada jefe mira al arrancar lo que el tablero tiene sin contestar para su área, y anota ahí lo que deja para otra | `AGENTS.md` anterior, "Equipo de agentes"; `recepcion.md` |
| Lo que solo está en la PC | Cada sesión de Claude Code, en la PC | La sesión de Codex del área, que abre Sergio para esa sola tarea, o él mismo, con el pedido y el resultado en el repo | `AGENTS.md`, "La PC, cuando hace falta" |
| Archivar las sesiones viejas de Claude Code, para que ninguna siga escribiendo en los estados | Administrador | Sergio, antes de crear los proyectos; Desarrollo comprueba con él que quedaron archivadas | `coordinacion.md`, "Sesiones abiertas" |
| Ordenar quién va primero cuando dos necesitan el mismo archivo | Administrador | Va primero el que ya tiene el PR abierto; si no se ponen de acuerdo, decide Sergio | `AGENTS.md`, "Un agente por tarea" |
| Auditoría de PRs y revisiones | Analista, una vez al día | Desarrollo, una vez por semana, con un agente nuevo; la primera cubre desde el 2-nov. El informe va a un issue, y Desarrollo le pasa a cada área lo suyo por el tablero | `AGENTS.md` |
| Revisión de cada PR | Un agente nuevo | Un agente nuevo; en Codex, con `codex exec --sandbox read-only` | `AGENTS.md` |

## Cómo se abre cada proyecto

En el [README de los tres proyectos](../equipo-agentes/README.md): el texto de las instrucciones de cada proyecto de Claude y la línea de PowerShell de cada sesión de Codex.

## Qué no cambia

Los frenos, lo que aprueba Sergio Urcullo, los permisos, la revisión escrita en cada PR, quién mergea y qué, y que nada se publica, se gasta ni toca producción sin su sí. Tampoco cambian los puntos 2 a 4 del [plan del 1-nov](2026-11-01-plan-equipo-y-paso-a-codex.md): cómo se mide el contexto, cuándo se releva una sesión y qué modelo usa cada perfil. Un jefe usa los topes de "Área, objetivo normal", y donde el plan dice "la coordinadora", va el jefe del área.

## Qué queda afuera

- El `CLAUDE.md` sigue cargando `docs/lecciones.md` entero en Claude Code. Achicarlo es otro cambio, que también aprueba Sergio Urcullo.
- No se suman agentes propios de Codex en `.codex/agents/`: alcanzan los que trae Codex y la skill `encargar`.

## Aprobación de Sergio Urcullo

Se le preguntó el 2-nov-2026, en el hilo del armado del proyecto Onia de claude.ai, como dice "Aprobaciones rápidas", del `AGENTS.md`: "Sergio, tenés este cambio: el equipo queda en 3 proyectos, Marketing y ventas, Desarrollo y ONIA Platform, cada uno con su jefe y sin jefe general, para que ninguno cargue lo de los otros. ¿Lo aceptás?". La pregunta nombraba lo que suma a su pedido, con las dos decisiones suyas que cambia (Pelau y la auditoría diaria), y daba tres opciones: "Sí, todo" (recomendada), "Sí, pero la auditoría sigue siendo diaria" y "No, cambiá algo". La pregunta completa está en el PR.

Respondió el mismo día: "Está bien el plan, pero también necesitamos que a veces use la PC y que algunos cambios, o en lugar de que vayan a la PC, vayan al repositorio." Lo de la PC entró en el punto 5 y en el `AGENTS.md`, "La PC, cuando hace falta". Después, ante la revisión 3, dijo: "Cerralo ahora, necesitamos enviar los trabajos, no hay yanto que analizar" (2-nov, 19:54 de Bolivia), y el cambio entró con los arreglos de esa revisión, sin otra ronda.
