# Estado de la coordinación (Administrador)

Relevo del 2-nov-2026, cerca de las 2:40 de Bolivia. Lo escribió la sesión del Administrador antes de que Sergio Urcullo la archivara, cuando él lo pidió: "necesito que tambien administrador se archive" (sin enlace).

Según `get_usage` de la app de Claude, la sesión tenía 415.051 tokens usados de 1.000.000 (42%). Eso está arriba del tope del Administrador, de unos 240.000 en total en Claude ([plan](../decisiones/2026-11-01-plan-equipo-y-paso-a-codex.md), punto 2). La cuota semanal de Claude iba en 50% y se renueva el 5-nov.

## Objetivo del próximo Administrador

Coordinar el lanzamiento de la campaña del taller el 3-nov y el paso del equipo a Codex ese mismo día.

**Hecho cuando:**
- la campaña está prendida con el sí de Sergio;
- cada área dejó su estado en `main` para seguir en Codex ([plan](../decisiones/2026-11-01-plan-equipo-y-paso-a-codex.md), punto 9);
- la Analista auditó los PRs del día.

**Para abrirlo:** Sergio abre una sesión nueva en ONIA-CENTRAL, la titula "Administrador" y le pide que lea este archivo. Va con el modelo del punto 4 del plan.

Una sesión solo puede lanzar otras con un mensaje escrito en la app de escritorio de la PC. Por Remote Control, la app lo rechaza: pasó al menos tres veces el 1 y el 2-nov.

## Sesiones abiertas

Las lanzó el Administrador el 2-nov, cerca de las 2:20 de Bolivia, por pedido de Sergio: "lanzalas", después de elegir "Pelau y áreas nuevas". Se comprobó con `get_session` que cada una arrancó con su modelo y esfuerzo, en su propio worktree desde `main`.

| Sesión | Id | Modelo hoy | Encargo | Estado al relevo |
|---|---|---|---|---|
| Pelau | `local_dcf76b4f-5a6e-4d16-af1c-d84513c5e5c4` | Haiku, `medium` | Resúmenes cortos | Dio el primer resumen y espera |
| Boss No-Code | `local_813868ac-94a1-493d-8343-a3de32f590af` | Sonnet, `medium` | Que el 3-nov se pueda inscribir y pagar por WhatsApp | Espera que Sergio conteste su QA |
| Marketing | `local_a0b7d137-fa8f-43da-8302-bbb9f19d282c` | Sonnet, `medium` | La campaña de Meta Ads en pausa, lista para el 3-nov. Después, la ficha de chase.h.ai | Espera que Sergio conteste su QA. Su estado, `marketing.md`, todavía no está en `main`: está en el [PR del estado de Marketing](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/102), abierto, que su auditoría pidió poner al día con la oferta y las fechas nuevas y volver a revisar |
| Boss Code | `local_8befe9bd-85fa-44f8-82a0-7793dfccbdee` | Opus, `high` | El enlace de WhatsApp, la web del taller y qué hacer con las ramas de Grok que tienen datos de un lead | Espera que Sergio conteste su QA |
| ONIA Platform | `local_3542ddf0-d533-4ca5-9227-d8ae370ce11b` | Opus, `high` | Su próximo objetivo, con la recomendada ligada a vender esta semana | Espera que Sergio conteste su QA |
| Analista | ninguna | — | Se abre al cerrar la tanda de PRs del día | — |

Cada área hace su QA con Sergio en su propia sesión, por pedido de él: "las decisiones no me las envies vos, que queden cada decision en su respectiva sesion" (`negocio.md`).

**Sesiones archivadas el 2-nov:**
- las cinco del 1-nov (Boss No-Code, Marketing, Boss Code, ONIA Platform y Analista). Sergio pidió "archiva las antiguas y lanzas las nuevas"; la app no dejó archivarlas desde acá porque esperaban su respuesta, y él avisó: "ya las archive". No tenían nada sin guardar: se miró `git status` en cada worktree;
- la que mergeó el equipo nuevo;
- este Administrador, `local_b6a36bc7-c263-4551-8a70-0d2980e34ab4`, que se archiva al dejar este relevo.

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

  Lo que sí se sabe: el perfil compartido lo usa un solo navegador a la vez, así que las áreas se turnan hasta probar otra solución. Las cuentas las carga Sergio cuando un área las necesite.
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
- La Analista trabaja por auditoría: el Administrador la abre una vez al día, al cerrar la tanda de PRs, y la archiva cuando termina ([plan](../decisiones/2026-11-01-plan-equipo-y-paso-a-codex.md), punto 4).
- El navegador de Ubuntu queda "todo libre" para las áreas ([PR #116](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/116)).
- El 12-nov, Sergio decide si renueva ChatGPT, que vence el 14-nov.
- Sobre el merge, Sergio eligió "Delegarlo después": se propone más adelante un cambio de reglas que lo delegue en Codex ([#106](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/106)), y él decide si lo aprueba. Hasta entonces, Codex no mergea.

## Lo que le toca a Sergio

- Contestar el QA de las cuatro áreas, cada una en su sesión.
- Correr una PowerShell de administrador para lo que quedó de Orca y Antigravity: el firewall, una credencial, el PATH y un acceso directo. Está en `docs/estado-limpieza-2026-10-28.md`, "Actualización del 1-nov-2026". No se comprobó si ya la corrió.
- Pasar a la bóveda los dos archivos de accesos que hay en `C:\Users\PC\.onia`, si son claves (`docs/credenciales.md`). Nadie los abrió.
- Decidir qué hacer con las claves en texto plano de `C:\Users\PC\.claude.json`.
- Iniciar sesión en el navegador de Ubuntu en las cuentas que un área pida, como dice [navegador de WSL](../decisiones/2026-11-01-navegador-wsl.md).

## Para después

- La parte del bot en la nube, con avisos, para dejar Grok Bot: [#96](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/96). El navegador en WSL ya está.
- Antes de retirar Grok Bot, comprobar que nada dependa de él, como el respaldo semanal del VPS que tenía Operaciones.
- Skills comunes `/empezar`, `/cerrar` y `/auditar` en `.agents/skills` (plan, punto 10).
- Codex: memorias en `false` y estado de la app, con la app cerrada ([#38](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/38)).
- Medir A y B de Codex el 3-nov, con `/status` (plan, punto 2).
- Probar un mensaje directo de un área a otra, y el navegador con varias sesiones a la vez.
