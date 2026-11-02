# Estado de la coordinación (Administrador)

## Para abrir las sesiones en Codex (3-nov)

Lo dejó listo el Administrador el 2-nov, por pedido de Sergio: "recorda que él siguiente puente es codex desde mañana dejalo todo listo para el que sea solo abrir sesiones" (sesión del Administrador, sin enlace).

- **Cada sesión tiene su carpeta fija,** en `C:\dev\worktrees\ONIA-CENTRAL\<sesión>`, fuera de las de Claude, para que no se borre al archivarlas.
- **Cada sesión tiene su perfil de Codex,** en `C:\Users\PC\.codex\<sesión>.config.toml`, con el modelo y el esfuerzo del [plan](../decisiones/2026-11-01-plan-equipo-y-paso-a-codex.md), punto 4. Recepción no está en el plan: va con `gpt-6.1-sol` y `medium`, como propuesta del Administrador. Las áreas traen también su propio navegador ([navegador por área](../decisiones/2026-11-02-navegador-por-area.md)).
- **Cada línea va en su propia ventana de PowerShell,** porque Codex ocupa la ventana.
- **Se abren de a una,** con unos segundos entre una y otra, por precaución. En el ensayo, Boss Code y ONIA Platform, las dos primeras con navegador propio, no lo vieron; abiertas solas, después, sí. Recepción tampoco lo vio en su primera búsqueda, y sí en la segunda. La causa no está confirmada: puede ser que la herramienta tarde en aparecer, o el arranque a la vez. Por eso cada encargo dice que, si no aparece, espere y la busque de nuevo.
- **La primera vez,** Codex puede preguntar si se confía en la carpeta. Se contesta que sí, una vez por carpeta.
- **Si `git pull` falla,** Codex no se abre, y la sesión sigue en su rama sin traer `main`.
- **Las tareas largas se pueden encargar.** Un área puede pasar lo que se describe entero en una ficha a un Codex nuevo, con la skill [`encargar`](../../.agents/skills/encargar/SKILL.md), en vez de hacerlo en su chat. Así su sesión no se llena. Está sin probar en la PC: la primera área que la use anota cómo le fue en la skill.

Una línea por sesión, para pegar en PowerShell:

```powershell
Set-Location C:\dev\worktrees\ONIA-CENTRAL\boss-no-code; git pull --ff-only origin main; if ($?) { codex -p boss-no-code "Sos Boss No-Code de ONIA. Leé el AGENTS.md, docs/lecciones.md y docs/equipo-agentes/negocio.md, y seguí con lo que dice Para seguir en Codex. Si la herramienta playwright no aparece, esperá unos segundos y buscala de nuevo." }
```

```powershell
Set-Location C:\dev\worktrees\ONIA-CENTRAL\marketing; git pull --ff-only origin main; if ($?) { codex -p marketing "Sos Marketing de ONIA. Leé el AGENTS.md, docs/lecciones.md y docs/equipo-agentes/marketing.md, y seguí con lo que dice Para seguir en Codex. Si la herramienta playwright no aparece, esperá unos segundos y buscala de nuevo." }
```

```powershell
Set-Location C:\dev\worktrees\ONIA-CENTRAL\boss-code; git pull --ff-only origin main; if ($?) { codex -p boss-code "Sos Boss Code de ONIA. Leé el AGENTS.md, docs/lecciones.md y docs/equipo-agentes/producto.md, y seguí con lo que dice Para seguir en Codex. Si la herramienta playwright no aparece, esperá unos segundos y buscala de nuevo." }
```

```powershell
Set-Location C:\dev\worktrees\ONIA-CENTRAL\onia-platform; git pull --ff-only origin main; if ($?) { codex -p onia-platform "Sos ONIA Platform. Leé el AGENTS.md, docs/lecciones.md y docs/equipo-agentes/platform.md, y seguí con lo que dice Para seguir en Codex. Si la herramienta playwright no aparece, esperá unos segundos y buscala de nuevo." }
```

```powershell
Set-Location C:\dev\worktrees\ONIA-CENTRAL\recepcion; git pull --ff-only origin main; if ($?) { codex -p recepcion "Sos Recepción de ONIA. Leé el AGENTS.md, docs/lecciones.md y docs/equipo-agentes/recepcion.md, y seguí con lo que dice Para seguir en Codex. Si la herramienta playwright no aparece, esperá unos segundos y buscala de nuevo." }
```

```powershell
Set-Location C:\dev\worktrees\ONIA-CENTRAL\administrador; git pull --ff-only origin main; if ($?) { codex -p administrador "Sos el Administrador de ONIA. Leé el AGENTS.md, docs/lecciones.md y docs/equipo-agentes/coordinacion.md, y seguí con el Relevo del Administrador." }
```

```powershell
Set-Location C:\dev\worktrees\ONIA-CENTRAL\pelau; git pull --ff-only origin main; if ($?) { codex -p pelau "Sos Pelau de ONIA: solo das resúmenes cortos. Leé el AGENTS.md, docs/lecciones.md, los estados de docs/equipo-agentes/ y los PRs abiertos, y dale a Sergio un resumen corto de cómo están las áreas." }
```

```powershell
Set-Location C:\dev\worktrees\ONIA-CENTRAL\analista; git pull --ff-only origin main; if ($?) { codex -p analista "Sos la Analista de ONIA. Leé el AGENTS.md y docs/lecciones.md, y auditá los PRs mergeados el 2-nov: revisión escrita, veredicto y aprobación de Sergio citada cuando hacía falta. Dejá tu informe en un issue nuevo." }
```

**Ensayo del 2-nov,** con `codex -p <sesión> exec --sandbox read-only` en cada carpeta, entre las 13:15 y las 13:16. Los registros están en `C:\Users\PC\.codex\sessions\2026\11\02\`.
- Las ocho arrancaron con su modelo y su esfuerzo, y contestaron empezando con "Sergio Urcullo,". Eso muestra que cargaron el `AGENTS.md` global de Codex (`C:\Users\PC\.codex\AGENTS.md`), donde está ese saludo.
- Leyeron su estado. Marketing lo encontró solo porque se le nombró su PR abierto.
- El navegador anduvo en Recepción, Marketing y Boss No-Code. En Boss Code (13:15:37) y ONIA Platform (13:15:38) no apareció. Abiertas solas, después, sí: Boss Code a las 13:24 y ONIA Platform a las 13:39.
- **Sin probar:** el modo interactivo.

## Relevo del Administrador (2-nov, a la tarde)

La sesión de Claude es `local_23a5279d-9550-4284-828e-bf8bef1d59c2`. Coordina a todas las sesiones, como un jefe, y no hace el trabajo de un área (`AGENTS.md`). Mañana sigue en Codex, con la línea de arriba.

**Hecho el 2-nov:** el navegador por área, las reglas para hablarle a Sergio con autonomía mediana, el stack de cada área ([`stack.md`](stack.md)), los relevos para Codex de Boss No-Code, ONIA Platform, Boss Code y Recepción, los perfiles y las carpetas de Codex, y el ensayo.

**Pendiente:**
- **Marketing:** su estado, `marketing.md`, tiene que estar en `main`. Está en el [PR del estado de Marketing](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/102), y se le pidió mergearlo el 2-nov.
- **Campaña de Meta Ads:** el [PR de la campaña con la oferta 3-4-5](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/120) sigue abierto. Meta todavía no tiene página ni tarjeta: según Marketing, el 2-nov, eso lo hace Sergio (sin enlace). Lo lleva Marketing con él.
- **Ramas de Grok con datos de un lead** ([issue #113](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/113)): quedan como están hasta después del taller. Sergio eligió, con botones, "Después del taller" (2-nov, sesión del Administrador). Después, alguien tiene que pedirle a Boss No-Code que las borre, con el sí de Sergio citado.
- **Herramientas de Codex** ([issue #128](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/128)): Higgsfield, Vercel y Gmail quedan con la regla de no usarlas sin su sí, como eligió Sergio. Para Notion y Drive, que se apagaron el 28-oct y figuran prendidos con otro nombre, Sergio eligió "Sí, apagarlos (Recomendada)" (2-nov). Se probó `[plugins."…@openai-curated-remote"]` con `enabled = false` y Codex los siguió viendo, así que se volvió atrás. La [referencia oficial de configuración de Codex](https://learn.chatgpt.com/docs/config-file/config-reference) documenta `apps.<id>.enabled` para apagar una app o un conector por su id; falta probarlo. Que vengan de su cuenta de ChatGPT está sin confirmar; si `apps.<id>.enabled` no alcanza, se buscan los pasos oficiales para apagarlos ahí.
- **Qué deciden solas las sesiones:** hay un borrador de matriz de autonomía, armado y verificado el 2-nov, en `C:\Users\PC\AppData\Local\Claude-Data\claude_pzs8sxrjxfjjc\side-session-notes\local_b6a36bc7-c263-4551-8a70-0d2980e34ab4\autonomia-borrador-2nov.json`. Las dos verificaciones pidieron cambios. Lo más urgente: Codex ya sube sus ramas sin pedirle OK a Sergio (línea 9 del `AGENTS.md` global de Codex, cambiada el 2-nov con su sí). También mergea solo lo que deja "Lo mergea Claude sin preguntar": lo aceptó Sergio el 2-nov y entró por el [PR que deja a Codex mergear](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/154) ([issue #106](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/106)).
- **Panel de dirección:** está en la rama `claude/panel-direccion`, en `otros/panel-direccion/`, y se abre en localhost con el comando de su `README.md`. Está en el [PR que suma el panel de dirección](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/155), con el sí de Sergio para guardarlo en el repo.
- **Boss Code:** el inventario del VPS, cuando Sergio cargue la clave.
- **Analista:** auditar los PRs del 2-nov, en su primera sesión en Codex.

## Relevo del 2-nov, a la madrugada

Relevo del 2-nov-2026, cerca de las 2:40 de Bolivia. Lo escribió la sesión del Administrador cuando Sergio Urcullo pidió archivarla: "necesito que tambien administrador se archive" (sin enlace). Después no se archivó: ver la actualización de abajo.

Según `get_usage` de la app de Claude, la sesión tenía 415.051 tokens usados de 1.000.000 (42%). Eso está arriba del tope del Administrador, de unos 240.000 en total en Claude ([plan](../decisiones/2026-11-01-plan-equipo-y-paso-a-codex.md), punto 2). La cuota semanal de Claude iba en 50% y se renueva el 5-nov.

## Actualización del 2-nov, cerca de las 10:00 de Bolivia

Sergio pidió "crea nueva sesion administrador" (sin enlace). Esta actualización la escribe la sesión nueva, que reemplaza al Administrador que dejó el relevo de arriba; la de arriba ya no rige donde diga "este Administrador" o "se archiva". Qué pasó con la sesión vieja, comprobado en `list_sessions`:
- `local_b6a36bc7-c263-4551-8a70-0d2980e34ab4` ("Administrador") **no está archivada: sigue en marcha** y es la que lanzó a la sesión nueva. Según el encargo, sigue con una sola cosa: rehacer en versión mínima la propuesta de hooks de Grok Bot (rama `claude/hooks-contexto-20261102`), en un PR propio que aprueba Sergio porque toca permisos. No se pudo comprobar esa rama desde acá.
- El encargo nombraba como anterior a `local_0bd325bb-aa02-4e38-91a9-d3ea2901b21f`, que no figura. La sesión nueva tampoco aparece en `list_sessions`. Después, `get_session` dio su id: `local_23a5279d-9550-4284-828e-bf8bef1d59c2`.

Lo comprobado ese día con `list_sessions` y `gh pr list`:
- **Recepción** (`local_7ff35d0c-df2a-4fb9-ac34-78287c2df625`): sesión nueva, en marcha. Recibe archivos y videos en `E:\ONIA\recepcion\`, con ffmpeg y faster-whisper en Ubuntu, y pasa lo útil a cada área. Su estado y la skill `ver-video` entraron ese día por el [PR de la skill ver-video y el estado de Recepción](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/124), ya mergeado.
- **Áreas** (Pelau, Boss No-Code, Marketing, Boss Code y ONIA Platform): quietas. Sergio las reanuda contestando el QA de cada una.
- **PRs abiertos:**
  - espera el sí de Sergio: el [PR de los textos de WhatsApp y del QR](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/110), con revisión en "aprobar" (según el encargo, con captura);
  - espera arreglo de Marketing y nueva revisión: el [PR del estado de Marketing](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/102). Su última revisión, en "aprobar", es de la versión vieja;
  - esperan revisión escrita: el [PR de la campaña de Meta Ads con la oferta 3-4-5](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/120), que en `gh` no tiene comentarios, el PR de Recepción, arriba (se mergeó a las 10:04), y el que cambia este archivo.
- **ONIA Platform:** el [PR de la propuesta de ONIA Platform a los inscriptos](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/119) se cerró sin mergear. Sergio eligió "Nada esta semana" (comentario del PR): la plataforma no se nombra en el taller esta semana. La rama `claude/platform-oferta-inscriptos` queda en GitHub.
- **Cuotas** (según el encargo y el mod "Uso de Codex", sin comprobar en el repo): Claude va en 51% de la semana y se renueva el 5-nov a las 04:00 de Bolivia. Codex va en 35% y se renueva el 4-nov a las 02:59.
- **Navegador de Ubuntu:** configurado en Codex (`~/.codex/config.toml`) y en Claude Code (`~/.claude.json`). Sergio lo tenía abierto para cargar cuentas, y mientras esa ventana siga abierta ninguna sesión puede usar el perfil `equipo`. Sin probar: que los logins queden guardados y varias sesiones a la vez. Más tarde ese día, cerca de las 11:30, en Codex cada área pasó a tener su propio perfil ([navegador por área](../decisiones/2026-11-02-navegador-por-area.md)); el perfil `equipo` queda para Claude Code.
- **Checkout principal:** al día con `main` (`7971f86`).

## Objetivo del próximo Administrador

Coordinar el lanzamiento de la campaña del taller el 3-nov y el paso del equipo a Codex ese mismo día. El Administrador lee lo necesario y delega cada tarea en la sesión de su área, sin hacer el trabajo de un área, y revisa que la infraestructura y las reglas estén en orden (`AGENTS.md`, "Equipo de agentes").

**Hecho cuando:**
- la campaña está prendida con el sí de Sergio;
- cada área dejó su estado en `main` para seguir en Codex ([plan](../decisiones/2026-11-01-plan-equipo-y-paso-a-codex.md), punto 9);
- la Analista auditó los PRs del día.

**Para abrirlo:** Sergio abre una sesión nueva en ONIA-CENTRAL, la titula "Administrador" y le pide que lea este archivo. Va con el modelo del punto 4 del plan. El 2-nov, cerca de las 10:00, ya se abrió una (ver la actualización de arriba).

Una sesión solo puede lanzar otras con un mensaje escrito en la app de escritorio de la PC. Por Remote Control, la app lo rechaza: pasó al menos tres veces el 1 y el 2-nov.

## Sesiones abiertas

Las lanzó el Administrador el 2-nov, cerca de las 2:20 de Bolivia, por pedido de Sergio: "lanzalas", después de elegir "Pelau y áreas nuevas". Se comprobó con `get_session` que cada una arrancó con su modelo y esfuerzo, en su propio worktree desde `main`.

| Sesión | Id | Modelo hoy | Encargo | Estado al relevo |
|---|---|---|---|---|
| Pelau | `local_dcf76b4f-5a6e-4d16-af1c-d84513c5e5c4` | Haiku, `medium` | Resúmenes cortos | Dio el primer resumen y espera |
| Boss No-Code | `local_813868ac-94a1-493d-8343-a3de32f590af` | Sonnet, `medium` | Que el 3-nov se pueda inscribir y pagar por WhatsApp | Espera que Sergio conteste su QA |
| Marketing | `local_a0b7d137-fa8f-43da-8302-bbb9f19d282c` | Sonnet, `medium` | La campaña de Meta Ads en pausa, lista para el 3-nov. Después, la ficha de chase.h.ai | Espera que Sergio conteste su QA. Su estado, `marketing.md`, entró a `main` el 2-nov ([PR del estado de Marketing](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/102)) |
| Boss Code | `local_8befe9bd-85fa-44f8-82a0-7793dfccbdee` | Opus, `high` | El enlace de WhatsApp, la web del taller y qué hacer con las ramas de Grok que tienen datos de un lead | Espera que Sergio conteste su QA |
| ONIA Platform | `local_3542ddf0-d533-4ca5-9227-d8ae370ce11b` | Opus, `high` | Su próximo objetivo, con la recomendada ligada a vender esta semana | Espera que Sergio conteste su QA |
| Recepción | `local_7ff35d0c-df2a-4fb9-ac34-78287c2df625` | Sonnet | Recibir archivos y videos de Sergio y pasarlos a las áreas | En marcha; su [PR de la skill ver-video](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/124) ya está mergeado |
| Analista | ninguna | — | Se abre al cerrar la tanda de PRs del día | — |

Cada área hace su QA con Sergio en su propia sesión, por pedido de él: "las decisiones no me las envies vos, que queden cada decision en su respectiva sesion" (`negocio.md`).

**Sesiones archivadas el 2-nov:**
- las cinco del 1-nov (Boss No-Code, Marketing, Boss Code, ONIA Platform y Analista). Sergio pidió "archiva las antiguas y lanzas las nuevas"; la app no dejó archivarlas desde acá porque esperaban su respuesta, y él avisó: "ya las archive". No tenían nada sin guardar: se miró `git status` en cada worktree;
- la que mergeó el equipo nuevo;
- este Administrador, `local_b6a36bc7-c263-4551-8a70-0d2980e34ab4`, que se iba a archivar al dejar este relevo. No se archivó: ver la actualización de arriba.

## Dependencias entre áreas para el 3-nov

- **Marketing y Boss No-Code:** el llamado a la acción del anuncio coincide con el texto que llega al chat de WhatsApp (`docs/lecciones.md`). Los textos están en el [PR de los textos de WhatsApp y del QR](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/110).
- **Boss Code y Marketing:** si la campaña lleva web del taller, va antes de prender los anuncios. Publicarla es producción.
- **Boss No-Code:** sin el pago de prueba con Yolo Pago, no se cobra con confianza.
- **Boss No-Code y Boss Code, con los datos del lead** ([issue #113](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/113)): el issue le encarga la revisión a Boss No-Code. El 2-nov, el encargo de la sesión nueva de Boss Code sumó preguntarle a Sergio qué hacer con esas ramas, porque borrar una rama no se deshace. Que se pongan de acuerdo por el tablero, para que ninguna lo deje ni lo hagan las dos.

## Cómo quedó lo del equipo

- **Navegador de Ubuntu:** instalado, conectado a Codex y a Claude Code en modo "todo libre" y probado ([navegador de WSL](../decisiones/2026-11-01-navegador-wsl.md)). Sin probar:
  - que los logins queden guardados;
  - la ventana visible;
  - varias sesiones juntas.

  Lo que sí se sabe: el perfil compartido lo usa un solo navegador a la vez, así que las áreas se turnan hasta probar otra solución. Las cuentas las carga Sergio cuando un área las necesite. El 2-nov, en Codex se pasó a un perfil por área ([navegador por área](../decisiones/2026-11-02-navegador-por-area.md)), y ese día se probó con una sesión real.
- **Memoria compartida:** es el repo: `AGENTS.md`, `docs/lecciones.md`, el plan, los estados de esta carpeta, los PRs y el tablero del issue #111. La memoria de Claude Code no la leen Codex ni las otras sesiones (`docs/lecciones.md`). En Codex, la función `memories` figura en `false` (`codex features list`, 2-nov). Lo que falta del [#38](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/38) sigue abierto.
- **Mensajes entre sesiones:**
  - **Del Administrador a las áreas, en Claude:** anda. El 1-nov, el Administrador les mandó con `SendMessage` la regla de las respuestas cortas a las cinco sesiones de ese día. En las transcripciones de Marketing, Boss Code y ONIA Platform se ve el mensaje recibido, y Boss No-Code y Boss Code contestaron que tomaban la regla (`list_events`, 2-nov). La de la Analista no se miró.
  - **De un área a otra:** sin probar.
  - **En Codex:** `agent_message_board` y `wake_on_agent_messages` figuran "under development" y en `false` (`codex features list`, 2-nov). Desde el 3-nov, el canal entre áreas es el [tablero del issue #111](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/111) y los estados de esta carpeta ([plan](../decisiones/2026-11-01-plan-equipo-y-paso-a-codex.md), punto 6).

## Decidido el 1 y el 2-nov

- El equipo trabaja en sesiones de Claude Code en esta PC, una por área. Desde el 3-nov, todo en Codex ([plan](../decisiones/2026-11-01-plan-equipo-y-paso-a-codex.md), PR #105).
- A Sergio se le habla de vos.
- Cada respuesta a Sergio, de cualquier sesión, es corta y le da 3 opciones, con la recomendada primero ([PR #114](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/114)).
- La rama `onia-loop-excepcion-d003` de Grok Bot no se mergea: se rescata en PRs chicos, sin datos de clientes. Su material está en la rama `grokbot/workspace-20261101`.
- Grok Bot no se renueva.
- Grok Bot sigue para investigar en X y auditar. Sergio le escribió el 2-nov: "quiero mas investigacion y quiero que le digas a claude que en el futuro te usaremos a ti tambien que quede anotado", y después eligió con botones "Para investigar en X (Recomendada)" (sesión del Administrador, sin enlace). Lo que propone entra por PR revisado.
- La Analista trabaja por auditoría: el Administrador la abre una vez al día, al cerrar la tanda de PRs, y la archiva cuando termina ([plan](../decisiones/2026-11-01-plan-equipo-y-paso-a-codex.md), punto 4).
- El navegador de Ubuntu queda "todo libre" para las áreas ([PR #116](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/116)).
- El 12-nov, Sergio decide si renueva ChatGPT, que vence el 14-nov.
- Sobre el merge, Sergio eligió "Delegarlo después": se propone más adelante un cambio de reglas que lo delegue en Codex ([#106](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/106)), y él decide si lo aprueba. El 2-nov lo aprobó: Codex mergea solo lo que deja "Lo mergea Claude sin preguntar" ([#106](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/106)).

## Lo que le toca a Sergio

- Contestar el QA de las cuatro áreas, cada una en su sesión.
- Correr una PowerShell de administrador para lo que quedó de Orca y Antigravity: el firewall, una credencial, el PATH y un acceso directo. Está en `docs/estado-limpieza-2026-10-28.md`, "Actualización del 1-nov-2026". No se comprobó si ya la corrió.
- Pasar a la bóveda los dos archivos de accesos que hay en `C:\Users\PC\.onia`, si son claves (`docs/credenciales.md`). Nadie los abrió.
- Decidir qué hacer con las claves en texto plano de `C:\Users\PC\.claude.json`.
- Iniciar sesión en el navegador de Ubuntu en las cuentas que un área pida, en el perfil de esa área, como dice [navegador por área](../decisiones/2026-11-02-navegador-por-area.md).

## Para después

- La parte del bot en la nube, con avisos, para dejar Grok Bot: [#96](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/96). El navegador en WSL ya está.
- Antes de retirar Grok Bot, comprobar que nada dependa de él, como el respaldo semanal del VPS que tenía Operaciones.
- Skills comunes `/empezar`, `/cerrar` y `/auditar` en `.agents/skills` (plan, punto 10).
- Codex: memorias en `false` y estado de la app, con la app cerrada ([#38](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/38)).
- Medir A y B de Codex el 3-nov, con `/status` (plan, punto 2).
- Probar un mensaje directo de un área a otra. La sesión de Codex real con el perfil de su área ya se probó el 2-nov ([navegador por área](../decisiones/2026-11-02-navegador-por-area.md)).
