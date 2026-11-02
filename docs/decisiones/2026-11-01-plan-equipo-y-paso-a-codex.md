# Equipo de agentes de ONIA y paso completo a Codex

1-nov-2026. Lo escribió Codex (`gpt-6-astra`, esfuerzo `high`) en solo lectura, por pedido de Sergio Urcullo, y lo revisó la sesión coordinadora de Claude Code.

**Hecho cuando:** las cuatro áreas, la coordinadora y la Analista pueden continuar en Codex desde el 3-nov, con estado recuperable, revisión independiente y los mismos frenos.

Las referencias al repo corresponden a `origin/main`, commit `c19cdec`. Los datos del día están en [2026-11-01-plan-equipo-datos](2026-11-01-plan-equipo-datos.md). Las fuentes oficiales salen de lo que leyeron cinco agentes el 1-nov en la sesión coordinadora (sin enlace); este documento no las volvió a consultar.

**Ya decidido:** pasar todo el equipo a Codex el 3-nov y no renovar Claude. Los topes y el reparto técnico que siguen son propuestas; no son configuraciones aplicadas ni límites recomendados por los fabricantes.

## 1. Aprovechamiento

**Hoy se aprovechan parcialmente.** Claude sostiene las áreas y Codex aporta revisión independiente. Falta ajustar modelos, contexto y medición.

| Dato del 1-nov | Qué muestra |
|---|---|
| Claude: 45% de cuota semanal usada; renovación el 5-nov; uso extra apagado | No prueba agotamiento inmediato. La cuenta termina antes de la renovación, según Sergio. |
| Todas las sesiones en Opus 5.5; áreas en `high`, coordinadora en `max` | Se usa el mismo modelo caro para tareas de distinta dificultad. |
| Coordinadora: 441.636 tokens; áreas: 189.314–219.834 | Se acumula contexto incluso después de terminar objetivos. |
| Codex: 14 revisiones escritas en los PRs #97, #98, #99, #102, #103 y #104, entre las 19:07 y las 19:21 de Bolivia; 6 dicen "Veredicto: cambios" y 8 "Veredicto: aprobar" | La revisión encuentra problemas. No quedaron modelo ni consumo anotados en esos PRs. |
| Dos revisiones procesaron 585.173 y 825.108 tokens de entrada | Es entrada acumulada durante las corridas, **no ocupación de una ventana**. |
| Cuota disponible de Codex | **Sin comprobar.** No se puede prometer cuánto trabajo aguanta. |

Fuentes: los [datos del día](2026-11-01-plan-equipo-datos.md), secciones de cuota y Codex; las líneas `Veredicto:` de los comentarios de esos seis PRs, contadas el 1-nov con `gh pr view --json comments`.

**Qué cambia:** modelos por tarea, sesiones por objetivo, relevo por contexto y revisiones posteriores centradas en los arreglos y sus efectos. Se registra modelo, esfuerzo y consumo disponible. No se busca gastar una cuota por gastarla. [Claude: costos y contexto](https://code.claude.com/docs/en/costs), [Codex: medición de corridas](https://learn.chatgpt.com/docs/non-interactive-mode).

## 2. Contexto por sesión

Se mide el **contexto ocupado**, no las horas ni los días que lleva abierta una sesión.

### Arranque

- **Claude Opus 5.5:** entre **92.247 y 99.197 tokens antes del primer mensaje**. Incluye herramientas del sistema, MCP, archivos de instrucciones, prompt y catálogo de skills. Después se suman las lecturas del objetivo.
- **Claude con los otros modelos:** carga inicial **sin comprobar**.
- **Codex, en todos los roles:** carga inicial **sin comprobar**. No se deduce del tamaño de los archivos ni de los tokens acumulados de una revisión.
- Cada sesión registra dos medidas: al abrir y después de leer reglas, estado y encargo. La segunda es su base real para trabajar.

Fuente de las mediciones: los [datos del día](2026-11-01-plan-equipo-datos.md); método: [Claude `/context`](https://code.claude.com/docs/es/commands), [Codex `/status`](https://learn.chatgpt.com/docs/developer-commands?surface=cli).

### Topes propuestos

Son presupuestos de ONIA, **incluyen la carga inicial** y deben validarse con las primeras tareas reales.

| Tipo de sesión | Tope sobre su ventana | Claude: 1.000.000 | Codex Sol/Terra: 500.000 | Codex Astra/Luna: 272.000 |
|---|---:|---:|---:|---:|
| Área, objetivo normal | 25% | 250.000 | 125.000 | 68.000 |
| Coordinadora / Pelau | 20% | 200.000 | 100.000 | 54.400 |
| Analista | 25% | 250.000 | 125.000 | 68.000 |
| Revisión independiente | 20% | 200.000 | 100.000 | 54.400 |
| Trabajo largo, dividido en hitos | 40% | 400.000 | 200.000 | 108.800 |

Ventanas de Codex: los [datos del día](2026-11-01-plan-equipo-datos.md), «Modelos de la cuenta»; Sol también figura en [modelos oficiales](https://learn.chatgpt.com/docs/models). Ventanas de los modelos Claude elegidos: [configuración de modelos](https://code.claude.com/docs/es/model-config).

**Regla propuesta:** el último 20% de cada presupuesto se reserva para cerrar el hito y escribir el relevo. Con un tope de 125.000, el relevo empieza a los 100.000. No es capacidad adicional. Si la carga inicial ya alcanza ese punto, se reduce lo que se carga o se divide el encargo antes de trabajar. Los números no quedan validados hasta medir Codex. Base técnica: [ingeniería de contexto de Anthropic](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents).

Se releva también al terminar el objetivo, cambiar de asunto o perder claridad, aunque quede ventana. «Trabajo largo» se define al empezar; no sirve para extender una sesión que mezcló objetivos. `AGENTS.md:34`.

**Medición:** Claude usa `/context`; `/usage` muestra cuota. Codex usa `/status` para contexto y límites disponibles; `codex exec --json` informa consumo de la corrida. No se usa ese consumo acumulado como indicador de ventana. [Claude](https://code.claude.com/docs/es/commands), [Codex interactivo](https://learn.chatgpt.com/docs/developer-commands?surface=cli), [Codex no interactivo](https://learn.chatgpt.com/docs/non-interactive-mode).

## 3. Limpieza y relevo

La sesión que sale deja en su estado:

- objetivo y «hecho cuando»;
- rama, commit y archivos propios;
- qué terminó y cómo lo comprobó;
- qué falta, qué bloquea y cuál es el próximo paso;
- decisiones de Sergio, alcance de sus aprobaciones y enlaces a PRs.

La propuesta es un relevo de hasta unas 1.000–2.000 palabras de contexto útil, preferentemente menos, con enlaces al detalle. No copia la conversación. El estado entra por el flujo de PR; si todavía está en una rama, se identifica como pendiente. `AGENTS.md:19,34,55`; [notas estructuradas](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents).

La coordinadora asigna quién sigue. La sesión entrante comprueba el estado contra los archivos y las pruebas. El revisor no recibe el razonamiento del autor: recibe el encargo, el cambio y la evidencia. `AGENTS.md:31,35,56`.

**La limpieza normal es estado escrito y sesión nueva.**

- Claude: `/clear` inicia otra conversación.
- Codex: `/new` o `/clear` inicia otro chat. Si cambiaron las instrucciones del proyecto, se relanza Codex: la cadena de `AGENTS.md` se arma al iniciar la ejecución.
- `resume` y `fork` conservan historia; no sirven para un relevo limpio ni para conseguir independencia del autor.

Fuentes: [Claude: comandos](https://code.claude.com/docs/es/commands), [Codex: comandos](https://learn.chatgpt.com/docs/developer-commands?surface=cli), [carga de AGENTS](https://learn.chatgpt.com/docs/agent-configuration/agents-md).

No se depende de la compactación automática. En Claude hoy llega cerca del 97%; en Codex el umbral efectivo no quedó comprobado. `/compact` queda como recurso excepcional dentro del mismo objetivo. Si ocurre una compactación, se vuelven a comprobar reglas, estado y aprobaciones antes de seguir. [Claude: contexto](https://code.claude.com/docs/es/context-window), [Codex: configuración](https://learn.chatgpt.com/docs/config-file/config-reference).

## 4. Modelos y esfuerzo

Reparto inicial propuesto. Hasta el corte, Claude trabaja y Codex revisa. Desde el 3-nov, Codex hace ambas funciones en contextos separados.

Los subagentes se usan para subtareas acotadas que justifiquen separarse. No se abre uno por cada paso. Las revisiones van en solo lectura. [Claude: subagentes y esfuerzo](https://code.claude.com/docs/es/best-practices), [Codex: modelos](https://learn.chatgpt.com/docs/models); `AGENTS.md:31`.

**Boss No-Code — ventas, taller y finanzas.** `docs/equipo-agentes/negocio.md:3`.

| Etapa | Sesión | Subagentes | Revisión |
|---|---|---|---|
| 1–2 nov | `claude-sonnet-5-5` · `medium` | `claude-haiku-5-5` · `medium` | `gpt-6.1-sol` · `high` |
| Desde 3 nov | `gpt-6.1-sol` · `medium` | `gpt-6-luna` · `medium` | Otro `gpt-6.1-sol` · `high` |

**Marketing — contenido, marca y anuncios.** `AGENTS.md:11–12,55`; estado pendiente en el PR de Marketing, según los [datos del día](2026-11-01-plan-equipo-datos.md).

| Etapa | Sesión | Subagentes | Revisión |
|---|---|---|---|
| 1–2 nov | `claude-sonnet-5-5` · `medium` | `claude-haiku-5-5` · `medium` | `gpt-6.1-sol` · `high` |
| Desde 3 nov | `gpt-6.1-sol` · `medium` | `gpt-6-luna` · `medium` | Otro `gpt-6.1-sol` · `high` |

**Boss Code — VPS, Chatwoot, n8n, Cal.com y web del taller.** `docs/equipo-agentes/producto.md:3`.

| Etapa | Sesión | Subagentes | Revisión |
|---|---|---|---|
| 1–2 nov | `claude-opus-5-5` · `high` | `claude-sonnet-5-5` · `medium` | `gpt-6.1-sol` · `high` |
| Desde 3 nov | `gpt-6.1-terra` · `high` | `gpt-6.1-sol` · `medium` | `gpt-6.1-sol` · `high` |

**ONIA Platform — producto y código de la plataforma.** `docs/equipo-agentes/platform.md:3`.

| Etapa | Sesión | Subagentes | Revisión |
|---|---|---|---|
| 1–2 nov | `claude-opus-5-5` · `high` | `claude-sonnet-5-5` · `medium` | `gpt-6.1-sol` · `high` |
| Desde 3 nov | `gpt-6.1-terra` · `high` | `gpt-6.1-sol` · `medium` | `gpt-6.1-sol` · `high` |

**Coordinadora / Pelau — reparto, dependencias y resumen.** `AGENTS.md:56`.

| Etapa | Sesión | Subagentes | Revisión de sus cambios |
|---|---|---|---|
| 1–2 nov | `claude-sonnet-5-5` · `medium` | `claude-haiku-5-5` · `medium` | `gpt-6.1-sol` · `high` |
| Desde 3 nov | `gpt-6.1-sol` · `medium` | `gpt-6-luna` · `medium` | Otro `gpt-6.1-sol` · `high` |

**Analista — auditoría de entregables, fuentes, revisiones y consumo.** Función ya observada en los [datos del día](2026-11-01-plan-equipo-datos.md); incorporación al equipo propuesta.

| Etapa | Sesión | Subagentes de lectura | Revisión de sus informes |
|---|---|---|---|
| 1–2 nov | `claude-sonnet-5-5` · `high` | `claude-haiku-5-5` · `medium` | `gpt-6.1-sol` · `high` |
| Desde 3 nov | `gpt-6.1-sol` · `high` | `gpt-6-luna` · `medium` | Otro `gpt-6.1-sol` · `high` |

Los subagentes livianos extraen o contrastan datos; no resuelven decisiones difíciles de arquitectura o auditoría. Para esas excepciones, la sesión puede usar Opus `high` antes del corte o `gpt-6-astra` · `high` después, anotando el motivo y recalculando el presupuesto de contexto. `max` no es el valor rutinario. Son elecciones técnicas propuestas, apoyadas en [Claude: modelo y esfuerzo](https://code.claude.com/docs/es/model-config) y [Codex: modelos](https://learn.chatgpt.com/docs/models).

## 5. Memoria compartida y cerebro común

**La memoria común es ONIA-CENTRAL.** Compartir cerebro significa compartir reglas, decisiones y estado comprobado. Cada sesión carga solo lo que necesita para su objetivo. `AGENTS.md:3,34,44`; `docs/lecciones.md:131`.

| Motor | Qué carga automáticamente | Qué debe leer para trabajar |
|---|---|---|
| Claude | `CLAUDE.md`, que importa `AGENTS.md` y `docs/lecciones.md` | Estado del área, encargo y fuentes necesarias |
| Codex | La cadena aplicable de `AGENTS.md` | `docs/lecciones.md`, estado del área y encargo; no interpreta los imports de Claude |

Fuentes: `CLAUDE.md:1–4`; [memoria de Claude](https://code.claude.com/docs/es/memory), [AGENTS en Codex](https://learn.chatgpt.com/docs/agent-configuration/agents-md).

El estado queda en `docs/equipo-agentes/`:

| Sesión | Archivo |
|---|---|
| Boss No-Code | `negocio.md`, existente |
| Boss Code | `producto.md`, existente |
| ONIA Platform | `platform.md`, existente |
| Marketing | `marketing.md`, pendiente de incorporación |
| Coordinadora | `coordinacion.md`, propuesto |
| Analista | `analista.md`, propuesto |

Existencia comprobada con el árbol de `origin/main`; pendientes según los [datos del día](2026-11-01-plan-equipo-datos.md). Cada responsable escribe su estado y enlaza pedidos para otras áreas. `AGENTS.md:35,55`; `docs/equipo-agentes/negocio.md:5,23`.

Las skills comunes existentes son `investigar-referente` y `llevar-issue`, esta última con tres referencias. Codex lee `.agents/skills` directamente; Claude tiene el puente mediante `.claude/skills`. No se mantienen dos copias. `docs/decisiones/2026-10-28-skills-compartidas.md:13–17,58,318–325`.

No se usa memoria privada del agente como fuente de reglas, ni se importan historiales, credenciales o memorias entre motores. Se propone desactivar la memoria automática de Claude; en los datos, la función `memories` de Codex figura desactivada. Aplicación efectiva de la propuesta en Claude: **sin comprobar**. `docs/lecciones.md:131`; `docs/credenciales.md:30`; [memoria de Claude](https://code.claude.com/docs/es/memory).

## 6. Cómo se hablan

**Claude hoy:** la coordinadora recibe avisos de las sesiones que lanzó y puede mandarles mensajes con `SendMessage`. Eso está observado en la app; no demuestra un buzón universal entre cualquier sesión. Fuente: los [datos del día](2026-11-01-plan-equipo-datos.md), «Cómo trabajan hoy».

**Codex hoy:** `multi_agent` figura estable y activado. Permite trabajo delegado dentro del equipo que abre una sesión. `agent_message_board` y `wake_on_agent_messages` están en desarrollo y desactivados. No se los toma como base de la operación. Fuente: los [datos del día](2026-11-01-plan-equipo-datos.md), «Codex en esta PC».

Para ambos motores, el mensaje duradero es el estado del área, el issue o el PR. Los avisos llevan objetivo, destinatario, enlace o commit y qué respuesta hace falta. La coordinadora resuelve dependencias; no copia conversaciones enteras. `AGENTS.md:34–35,55–56`.

Entre sesiones Codex separadas, la comunicación automática persistente está **sin comprobar**. Hasta comprobar una vía estable, la coordinadora consolida los estados y el encargo se entrega explícitamente a la sesión destinataria. El plan no depende de encender funciones experimentales.

## 7. Configuración

**Propuesta:** la coordinadora es la única responsable de preparar cambios de configuración compartida. Sergio aprueba los cambios de permisos y reglas, y carga logins y secretos. Las áreas trabajan con la configuración aprobada; pueden elegir el modelo y esfuerzo de su sesión dentro del reparto técnico. La Analista audita, no cambia permisos. `AGENTS.md:21–28,33`; `docs/credenciales.md:9–13`.

Se separan:

- **Preparar:** diff concreto, motivo, alcance y cómo verificarlo.
- **Aprobar:** Sergio, cuando afecta reglas, permisos, instalaciones o gasto.
- **Aplicar:** el responsable autorizado; lo global de usuario y los secretos se prepara para Sergio. Desde Claude se respetan las restricciones de `AppData`.

Fuentes: `AGENTS.md:28,33,36`; `docs/lecciones.md:26`; `docs/credenciales.md:11,101–102`.

No se copian `settings.json`, hooks, MCP ni `config.toml` de un motor al otro. Que exista un conector en Claude no prueba que funcione en Codex. La equivalencia de conexiones queda **sin comprobar**, servicio por servicio. `docs/lecciones.md:105,120`; [configuración de Codex](https://learn.chatgpt.com/docs/config-file/config-reference).

## 8. Decisiones y revisión

El agente decide el plan técnico, las lecturas, la división del trabajo y las pruebas necesarias. Sergio decide publicación, gasto, producción, asuntos legales, cambios de operación, permisos e instalaciones. `AGENTS.md:21–36`.

Cada área presenta **sus propias decisiones**, con dos o tres opciones cortas y una recomendada. La respuesta literal queda en el PR; la decisión duradera, en `docs/decisiones/`. La coordinadora junta dependencias, sin volver a preguntar lo decidido. `AGENTS.md:15,32–33`; `docs/equipo-agentes/negocio.md:23`.

**Rondas vigentes:** una revisión inicial y tantas revisiones posteriores como hagan falta después de cada arreglo, hasta `Veredicto: aprobar`. No existe un máximo de dos. Las siguientes rondas comprueban los arreglos y las posibles regresiones; amplían el alcance si la evidencia lo exige. `AGENTS.md:31`; `docs/lecciones.md:71,82`.

Si dos áreas necesitan el mismo archivo, la coordinadora ordena quién va primero. Si discrepan sobre un hecho, gana la evidencia más directa y se revisa ese punto. Si la diferencia es comercial, de gasto o de alcance reservado, decide Sergio. `AGENTS.md:21–35`; `docs/lecciones.md:82`.

El `AGENTS.md` global de Codex (`C:\Users\PC\.codex\AGENTS.md`) pide el OK explícito de Sergio para push, merge y deploy, y el `AGENTS.md` del repo dice que Codex no mergea (`AGENTS.md:20`). Desde el 3-nov, entonces, **Codex prepara y revisa, y el merge lo hace Sergio**, salvo que decida delegarlo con otro cambio de reglas.

## 9. Paso a Codex el 3-nov

### Qué se conserva y qué se reemplaza

| Pieza | Paso a Codex |
|---|---|
| `AGENTS.md`, `.agents/skills`, estados y decisiones en `docs/` | Se conservan como fuente común |
| Imports de `CLAUDE.md` | `AGENTS.md` y lectura explícita de lecciones y estado |
| Roles de `.claude/agents` | Encargo de la sesión y subagentes disponibles en Codex; no se copian sus archivos como configuración compatible |
| Comandos propios de Claude | Skills comunes, invocadas con la sintaxis de cada motor |
| Permisos y hooks de Claude | Configuración propia de Codex, revisada y aprobada |
| Historial y memoria automática de Claude | Relevo escrito en el repo |
| Conectores y logins de Claude | Accesos propios de Codex, comprobados por servicio |

Fuentes: [AGENTS](https://learn.chatgpt.com/docs/agent-configuration/agents-md), [skills](https://learn.chatgpt.com/docs/build-skills), [configuración](https://learn.chatgpt.com/docs/config-file/config-reference); `docs/credenciales.md:30`.

### Pasos del corte

1. **Cerrar el hito de cada sesión Claude y dejar el relevo.** No hace falta terminar todos los proyectos para cambiar de motor. Fuente: [notas estructuradas y continuidad](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents).
2. **Asignar a cada área su worktree y preservar los cambios pendientes.** Llevar las reglas aprobadas al worktree sin borrar trabajo ajeno. No reutilizar una carpeta con dos escritores. Fuente: [worktrees de Claude](https://code.claude.com/docs/en/worktrees); `AGENTS.md:35,55`.
3. **Abrir una sesión Codex nueva desde el worktree asignado.** En CLI, abrir `codex` y elegir modelo y esfuerzo con `/model`. No usar `resume` ni `fork` para este arranque. Fuente: [CLI de Codex](https://learn.chatgpt.com/docs/codex/cli), [comandos](https://learn.chatgpt.com/docs/developer-commands?surface=cli).
4. **Cargar el encargo del área.** Leer `AGENTS.md`, lecciones, estado y objetivo; comprobar las skills disponibles. Fuentes: [AGENTS](https://learn.chatgpt.com/docs/agent-configuration/agents-md), [skills](https://learn.chatgpt.com/docs/build-skills).
5. **Comprobar permisos, contexto inicial y cuota disponible.** Revisión en solo lectura; escritura limitada al trabajo autorizado. No habilitar acceso total para resolver un bloqueo. Fuentes: [sandbox y aprobaciones](https://learn.chatgpt.com/docs/agent-approvals-security), [`/status`](https://learn.chatgpt.com/docs/developer-commands?surface=cli).
6. **Continuar una tarea real y revisarla con otro contexto.** Otro Codex nuevo, o una sesión nueva, recibe el cambio y sus fuentes. Para revisión por CLI: `codex exec --sandbox read-only`. La independencia se comprueba; no se da por garantizada solo por el nombre del comando. Fuente: [modo no interactivo](https://learn.chatgpt.com/docs/non-interactive-mode); `AGENTS.md:31`.

Cada área se abre con su archivo de estado de la tabla del punto 5 y el modelo del punto 4. ONIA Platform escribe código en su propio repo y conserva las decisiones en ONIA-CENTRAL. `docs/equipo-agentes/platform.md:3`.

**Comprobado:** en la PowerShell de esta PC, `codex --version` da `codex-cli 0.166.0` (1-nov). La migración de conectores no se da por terminada sin probarlos uno por uno.

El PR de este plan registra la frase de Sergio y cierra el [issue sobre el motor desde el 3-nov](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/100). `AGENTS.md:32`.

**Codex también vence.** El 29-oct, Sergio dijo "claude se vence el 3 de noviembre, y codex el 14" (`workshops-comunidad/plan-meta-ads-borrador.md:16`). Si la suscripción de ChatGPT no se renueva, desde el 14-nov el equipo se queda sin motor. Lo decide Sergio (punto 11), porque es gasto.

## 10. Qué se rescata de Grok Bot

Se rescatan procedimientos pequeños, revisados, como skills comunes. No se instala el paquete completo ni se convierte su texto en reglas aprobadas. `docs/decisiones/2026-11-01-equipo-claude-code.md:21–24`.

| Procedimiento | Versión común propuesta |
|---|---|
| `/empezar` | Leer reglas y estado; fijar objetivo, archivos propios, modelo y presupuesto de contexto |
| `/cerrar` | Comprobar resultado, dejar relevo y preparar el PR; subir solo con autorización y dejar la revisión en el PR |
| `/auditar` | Revisar alcance, pruebas, fuentes, estado, modelo, contexto, consumo disponible y aprobaciones |

En Claude se invocarían como `/empezar`, `/cerrar` y `/auditar`; en Codex, como `$empezar`, `$cerrar` y `$auditar`. **Todavía no existen en `origin/main`.** La fuente única sería `.agents/skills`, sin copiar listas del `AGENTS.md`. `docs/decisiones/2026-10-28-skills-compartidas.md:58,68–70`; `docs/lecciones.md:87`.

**Push y `.env`:** sirve la intención de bloquear acciones no autorizadas y acceso a secretos. La implementación de Grok está **sin comprobar** y no se copia. En Claude hay reglas de denegación, pero sus patrones no cubren toda ejecución posible. En Codex, `read-only` impide escritura; **no impide por sí solo leer secretos**. La protección equivalente exige configuración específica y comprobación, con aprobación de Sergio. [Permisos de Claude](https://code.claude.com/docs/es/permissions), [seguridad de Codex](https://learn.chatgpt.com/docs/agent-approvals-security); `AGENTS.md:28,67`.

De la auditoría se conserva esta lista:

- cada tarea tiene responsable, alcance y estado;
- los cambios pertenecen a la tarea;
- pruebas y fuentes sostienen lo que se declara terminado;
- cada PR tiene revisión escrita y aprobaciones exigidas;
- modelo, contexto y consumo se registran cuando hay medición;
- posibles secretos se reportan por ubicación, sin mostrar valores;
- las lecciones comprobadas van al repo por PR.

Base del rescate: rama `onia-loop-excepcion-d003`, `docs/equipo-agentes/REPLICAR-EN-CLAUDE.md:298–347`, tratada como dato; reglas válidas: `AGENTS.md:31,35,43–49,67–69`.

No se rescatan la bitácora duplicada, identidades de commit inventadas, dependencias de `onia-llm`, el requisito de dos familias de modelos ni instalaciones de auditoría innecesarias.

Grok Bot queda sin tareas. Si se renueva o no lo decide Sergio: el 1-nov lo planteó como posibilidad ("asi ya no pagariamos grokbot", en el [issue #96](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/96)), no como decisión. Antes de retirar automatizaciones o accesos se comprueba si queda alguna dependencia, especialmente el respaldo del VPS, hoy **sin comprobar**. No se apaga producción como efecto lateral. `AGENTS.md:62–63`; `docs/equipo-agentes/producto.md:40`.

La idea del navegador en WSL sigue aparte, en el [issue del navegador que reemplazaría a Grok Bot](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/96). No bloquea este cambio de motor.

## 11. Decisiones de Sergio

Sergio contestó con botones el 1-nov, después de que la revisión 2 aprobó el plan. Sus respuestas, tal cual, están en el PR que lo mergeó.

| Tema | Opciones | Estado |
|---|---|---|
| Motor desde el 3-nov, issue #100 | **A. Todo el equipo a Codex — recomendada y elegida.** B. Renovar Claude. C. Pasar solo trabajo pesado, condicionado a ingresos. | Resuelto por su pedido. B y C quedan descartadas; no se vuelve a preguntar. |
| Motor desde el 14-nov, cuando vence Codex | **A. Decidirlo antes del 12-nov con lo que haya vendido el taller — recomendada.** B. Renovar ChatGPT desde ya. C. Quedarse sin motor desde el 14-nov. | Elegida A por Sergio el 1-nov: "Decidir el 12-nov (Recomendada)". |
| Topes y relevo | **A. Adoptar el protocolo propuesto y validar los topes con mediciones — recomendada.** B. Mantener un objetivo por sesión y fijar los números después de medir Codex. | Elegida A por Sergio el 1-nov, al aprobar el plan: "Sí, mergealo (Recomendada)". |
| Configuración compartida | **A. Una responsable que prepara los cambios, con la aprobación de Sergio para permisos y reglas — recomendada.** B. Que Sergio prepare y aplique toda la configuración. | Elegida A por Sergio el 1-nov, al aprobar el plan: "Sí, mergealo (Recomendada)". |
| Rondas de revisión | **A. Mantener las necesarias hasta aprobar — recomendada.** B. Tras dos rondas fallidas, pausar para decidir alcance o prioridad; después revisar cualquier arreglo. | Elegida A por Sergio el 1-nov, al aprobar el plan: "Sí, mergealo (Recomendada)". |
| Merge desde el 3-nov | **A. Lo hace Sergio; Codex prepara y revisa — recomendada.** B. Proponer después una delegación acotada mediante otro cambio de reglas. | Elegida B por Sergio el 1-nov: "Delegarlo después". Hasta ese cambio de reglas, Codex no mergea y el merge lo hace Sergio. |
| Retiro técnico de Grok | **A. Rescate local revisado y retiro de accesos específicos después de comprobar dependencias — recomendada.** B. Rescatar además un faltante concreto antes del retiro. | Elegida A por Sergio el 1-nov, al aprobar el plan: "Sí, mergealo (Recomendada)". Apagar servicios o tocar producción sigue pidiendo su autorización. |
| Renovar Grok Bot | **A. No renovarlo cuando venza: el equipo ya trabaja en la PC — recomendada.** B. Mantenerlo hasta que esté el navegador en WSL del issue #96. | Elegida A por Sergio el 1-nov: "No renovarlo (Recomendada)". |
| Cambio mínimo de `AGENTS.md` | **A. Aprobar el cambio de este PR — recomendada.** B. Pedir una corrección concreta antes de aplicarlo. | Elegida A por Sergio el 1-nov, al aprobar el plan: "Sí, mergealo (Recomendada)". |

Fuentes: `AGENTS.md:20–33,62–63`; `docs/lecciones.md:114`; el pedido de Sergio y los [datos del día](2026-11-01-plan-equipo-datos.md).
