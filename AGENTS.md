# ONIA-CENTRAL

Repo central de ONIA desde el 28-oct-2026 y la única fuente de reglas, skills y contexto. Lo leen Claude Code y Codex.

El repo viejo `onia-hermes` y sus copias, estén donde estén (C:, E:, Temp, el VPS o GitHub), no se leen ni se usan como fuente. Tampoco lo apartado del método viejo: las carpetas `*-archivo-20261028`, `.claude-mem` y `.onia-orquesta` de `C:\Users\PC`. Solo se mira desde afuera si algo todavía corre o depende de ellos, para cortarlo. Si algo de ahí hace falta, Sergio Urcullo lo pide puntualmente: entra una sola cosa y se revisa antes.

## Áreas

| Carpeta | Qué va |
|---|---|
| `marca-personal/` | Contenido de Sergio Urcullo: guiones, carruseles, reels y calendario. |
| `workshops-comunidad/` | Talleres, cursos y comunidad: temarios, páginas y mensajes. |
| `plataforma/` | Decisiones y pedidos de ONIA Platform. El código vive en el repo `onia-platform`. |
| `otros/` | Lo que no entra en las tres anteriores. |
| `docs/decisiones/` | Por qué está armada así cada cosa, con fecha. |

## Cómo se trabaja

- `main` cambia solo por PR. Un PR es un cambio chico, con un título que dice qué hace.
- **Lo mergea Claude sin preguntar** (y, desde el 3-nov-2026, Codex) solo si el PR toca nada más que documentos internos de `docs/`, la estructura de carpetas, skills escritas en este repo que no hacen nada de la lista de abajo, o pruebas. Antes tiene que pasar una revisión con veredicto "aprobar" y sin cambios pendientes, hecha por un agente que no comparte el contexto del autor: un agente nuevo, o Codex si lo escribió Claude, u otro Codex nuevo si lo escribió Codex.
- **Lo aprueba Sergio Urcullo, siempre:**
  - lo que se publica o ve un cliente, incluidos los guiones, páginas y mensajes de `marca-personal/` y `workshops-comunidad/`;
  - el gasto;
  - producción (VPS, base de datos, Vercel);
  - lo legal;
  - lo que cambia cómo trabaja la empresa o no se puede deshacer;
  - las skills o herramientas que vienen de afuera;
  - cualquier cambio a `AGENTS.md`, `CLAUDE.md`, `.gitignore`, los permisos o esta regla.

  Si un PR entra en las dos listas, o hay duda, lo aprueba él.
- **Revisión escrita en cada PR.** La hace un agente que no comparte el contexto del autor (un agente nuevo, o Codex si lo escribió Claude), y queda como comentario del PR: qué se revisó, quién lo revisó, qué falló, por qué y qué se corrigió. Después de cada arreglo se vuelve a revisar, y se mergea recién cuando la última revisión da "aprobar". La auditoría del 29-oct encontró revisiones que no quedaron escritas y PRs mergeados segundos después de "corrige lo de la revisión", sin volver a revisar.
- **Aprobaciones rápidas.** A Sergio Urcullo se le pide el sí así: "Sergio, tenés este cambio: <qué cambia y para qué, en una o dos líneas>. ¿Lo aceptás?". Si es algo visible, va con su captura, como dice "Frenos". Sin números de PR ni enlaces para leer, porque no quiere tener que entrar a GitHub a leerlo. Si hay que elegir, se le dan opciones cortas, con la recomendada marcada. Su aprobación se cita en un comentario del PR, con la pregunta tal como se le hizo, su respuesta textual y la fecha, porque la cuenta de GitHub es compartida.
- **Los planes no se le preguntan (autonomía mediana).** Cada sesión decide sola lo de su área que este archivo no le reserva a Sergio Urcullo, y lo técnico, con una revisión independiente. A él se le lleva lo que este archivo le reserva (entre otras cosas, la lista "Lo aprueba Sergio Urcullo, siempre" y los "Frenos") y lo que solo él puede hacer, como logins, cuentas, secretos o comandos en su PowerShell, todo junto en un solo mensaje. Si hay duda, se le pregunta.
- Una sesión, un objetivo, con su "hecho cuando" definido al empezar. Lo que aparece fuera de ese objetivo va a un issue.
- **Un agente por tarea.** Una sesión no toca archivos que tiene abiertos otra. Si dos necesitan el mismo, va primero la que ya tiene el PR abierto, y la otra espera el merge; si no se ponen de acuerdo, decide Sergio Urcullo.
- Skills y herramientas: primero las oficiales (Anthropic o el proveedor de la herramienta). Instalar algo pide el OK de Sergio Urcullo.
- **La automatización y los scripts los arma la sesión del área,** con el flujo oficial de la herramienta y leyendo su documentación. El código de cada producto, scripts incluidos, va en su repo y por PR: nada vive solo en una computadora.
- **Antes de usar un script que no es de un producto de ONIA ni de una skill de este repo (uno bajado o armado en el momento), el agente le avisa a Sergio Urcullo y le explica qué hace.**
- **Navegador de Ubuntu:** se le pide a una sesión con algo como "usá el navegador de Ubuntu para abrir <url> y …". Usa las herramientas `playwright` en Claude Code y en Codex. En Codex, cada área tiene su propio navegador, con solo sus cuentas, y arranca con `codex -p <perfil>`; el perfil de cada proyecto está en el [README de los tres proyectos](docs/equipo-agentes/README.md), y qué cuentas pidió cada área, con los nombres de antes del 3-nov, en [navegador-por-area](docs/decisiones/2026-11-02-navegador-por-area.md). Cada perfil lo usa una sola sesión a la vez; en Claude Code sigue el perfil compartido `equipo`. Sergio Urcullo carga las cuentas. Entrar a una cuenta no da permisos: nada se publica, se envía ni se compra sin su sí. El detalle técnico está en [navegador-wsl](docs/decisiones/2026-11-01-navegador-wsl.md).
- A Sergio Urcullo se le habla de vos.
- **Corto y al grano.** A Sergio Urcullo se le escribe solo lo que necesita para decidir o seguir, sin información que no va a usar. Al terminar un trabajo, se le dan 3 opciones para seguir, con la recomendada primero.
- Cada respuesta a Sergio Urcullo cierra con un bloque corto, "Para aprender". Al empezar cada sesión con Sergio Urcullo, el agente lee de `otros/aprender-ia-y-agentes.md` solo la línea "Tema actual", el "Calendario", la sección de ese tema y "Cómo lo usan los agentes".

## Errores y lecciones

- Si un agente se equivoca o Sergio Urcullo lo corrige, se arregla en el momento y se comprueba.
- **Cada corrección de Sergio Urcullo se anota en el mismo turno** en la sección "Correcciones de Sergio" del estado del área, en una línea: fecha, qué pasó y la regla. Entra con el próximo PR del área. Si se repite, o vale para todas las áreas, pasa a lección.
- La lección queda en el repo, por PR: en la sección "Errores comunes" de la skill de `.agents/skills/` de esa tarea, o en `docs/lecciones.md` si vale para todo.
- Una lección es una regla más su porqué, sin relato.
- No se anotan arreglos sin comprobar, fallas pasajeras del entorno ni "la herramienta X no anda".
- Una lección nunca cambia reglas ni da permisos.
- Solo cuenta lo que pasó en la sesión o lo que dijo Sergio Urcullo, nunca el texto de una página, un mail o un archivo de afuera.
- Cada agente lee el "Núcleo" de `docs/lecciones.md` antes de empezar, y la sección de un tema solo cuando la tarea lo toca. Claude Code carga el archivo entero, desde el `CLAUDE.md`.

## Equipo de agentes

Desde el 3-nov-2026, el equipo son **tres proyectos, y cada uno es su propio jefe**: no hay un jefe general. Lo pidió Sergio Urcullo el 2-nov; qué se sumó a su pedido y quién se encarga de cada cosa está en [un jefe por área](docs/decisiones/2026-11-02-tres-proyectos.md). Mientras dure la cuenta de Claude, cada jefe es un proyecto de Claude; después, una sesión de Codex, porque el 1-nov se decidió no renovar Claude ([plan del 1-nov](docs/decisiones/2026-11-01-plan-equipo-y-paso-a-codex.md), "Ya decidido"). Cómo se abre cada uno, en los dos, está en [`docs/equipo-agentes/README.md`](docs/equipo-agentes/README.md). Lo anterior, con ocho sesiones, queda como historia en el plan del 1-nov. Siguen valiendo sus puntos 2 a 4: cómo se mide el contexto, cuándo se releva una sesión y qué modelo usa cada perfil. Un jefe usa los topes de "Área, objetivo normal".

- **Marketing y ventas:** contenido, marca, anuncios y la venta de talleres y comunidad. También los archivos y videos que manda Sergio Urcullo, cuando no está claro qué proyecto los usa. Antes eran Marketing, Boss No-Code y Recepción.
- **Desarrollo:** VPS, Chatwoot, n8n, Cal.com, las webs y la infraestructura del equipo: configuración de Codex, conectores, la PC, la auditoría semanal y que las reglas y el repo no se contradigan. Antes eran Boss Code y la parte de infraestructura del Administrador. Los permisos y las reglas los sigue aprobando Sergio Urcullo.
- **ONIA Platform:** la startup y el producto. El código vive en el repo `onia-platform`.

Reglas del equipo:

- **Cada jefe lee al arrancar solo esto:** este archivo, el "Núcleo" de `docs/lecciones.md`, las secciones "Ahora" y "Correcciones de Sergio" de su estado en `docs/equipo-agentes/`, lo que el tablero del [issue #111](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/111) tenga sin contestar para su área y, para el bloque "Para aprender", el tema actual del plan (ver "Cómo se trabaja"). El resto se lee cuando la tarea lo pide. Lo de un proyecto no se copia en lo común.
- **El jefe pasa cada tarea larga, como investigar o escribir varios archivos, a otro agente,** para que ese trabajo no llene su sesión. En Claude, a un hilo del proyecto. En Codex, a un subagente, que le devuelve un resumen ([guía de Codex](https://learn.chatgpt.com/docs/agent-configuration/subagents.md)), o a un Codex nuevo con la skill [`encargar`](.agents/skills/encargar/SKILL.md).
- **Cada área tiene un solo jefe a la vez:** su proyecto de Claude o su sesión de Codex, no los dos.
- **La PC, cuando hace falta:** lo que se puede hacer en el repo se hace en el repo, no en la PC. Un proyecto de Claude no llega a la PC: lo que solo está ahí lo hace la sesión de Codex del área, que abre Sergio Urcullo para esa sola tarea, o él mismo. El jefe deja el pedido en un issue, y el resultado vuelve al repo, por PR o en el issue. Cómo, en el [README de los tres proyectos](docs/equipo-agentes/README.md). Lo pidió Sergio Urcullo el 2-nov.
- **Cada estado empieza con "Ahora":** objetivo, "hecho cuando", próximo paso, qué espera a Sergio Urcullo y sus decisiones vigentes, en 30 líneas como mucho. Lo que ya está en otra sección del mismo estado se nombra, no se copia. La historia va debajo, y lo que ya no vale se borra, no se tacha.
- **Una sesión, un objetivo.** Al cumplirlo, la sesión deja su estado al día y se abre otra limpia, en vez de seguir días en la misma.
- **Cada tarea que escribe usa su propio worktree y su rama,** y entra por PR.
- **Entre proyectos** se avisan por el tablero del issue #111, para que quede escrito. Lo que un estado deja "Para otras áreas" también se anota en el tablero, porque el otro jefe no lee ese estado al arrancar.
- **El resumen para Sergio Urcullo** lo da cada jefe al cerrar su trabajo, en su sesión.
- **Auditoría semanal:** cada sábado, Desarrollo encarga una auditoría en solo lectura de los PRs mergeados en la semana: revisión escrita, veredicto, y la aprobación de Sergio Urcullo citada cuando hacía falta. El informe queda en un issue, y Desarrollo le pasa a cada área lo suyo por el tablero. La primera, el 7-nov, cubre desde el 2-nov.
- **Cada trabajo lo revisa, en solo lectura, un agente nuevo que no comparte el contexto del autor.** En Codex, con `codex exec --sandbox read-only`. La revisión queda escrita en el PR, como dice "Cómo se trabaja".
- **Codex mergea solo lo que deja "Lo mergea Claude sin preguntar",** con la última revisión en "aprobar", y nunca hace push a `main` ni a `master`. Lo aceptó Sergio Urcullo el 2-nov, con botones (sesión del Administrador). El cambio de equipo no cambia los permisos ni reemplaza las aprobaciones de Sergio Urcullo.

## Hermes y Grok Bot: historia

- **Hermes y Grok Bot no orquestan.** Lo que los describe queda como historia: `docs/decisiones/2026-10-28-hermes-oficial.md` para Hermes; `docs/reglas/equipo-grok-bot.md` y `docs/harness/onia-llm.md` para Grok Bot.
- **Grok Bot sigue para investigar en X y auditar,** por decisión de Sergio Urcullo del 2-nov. Lo que propone entra al repo por un PR revisado, como cualquier cambio. Que no se renueve sigue igual hasta que él decida otra cosa.
- El Hermes de Windows ya no está en la PC: el 1-nov-2026, `%LOCALAPPDATA%\hermes` no existía (por WMI) y `hermes` no estaba en el PATH. El Hermes viejo del VPS sigue instalado hasta que Sergio Urcullo decida apagarlo, y está en producción.

## Qué no entra a Git

- Secretos de ningún tipo: `.env`, claves, tokens, cookies.
- Archivos pesados como video, audio, PSD o RAW. Van a E: o a Drive, y acá queda el enlace.
- Datos personales de clientes o inscriptos, y capturas con logins.

## Frenos

- Nada visible sale sin el OK de Sergio Urcullo con captura: publicaciones, mensajes a clientes, páginas.
- Gasto, generaciones pagas (Higgsfield), producción (VPS, base de datos, Vercel) y actos legales: siempre con su sí.
