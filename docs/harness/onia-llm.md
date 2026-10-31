# onia-llm: trabajo pesado con Claude Code y Codex

## Qué es
`onia-llm` es un script en la computadora compartida (`/home/box/.local/bin/onia-llm`) que usan los agentes de OnIA para mandar trabajo pesado (código, análisis de repos, documentos largos) a Claude Code o Codex CLI, con las suscripciones de Sergio.

## Regla del equipo (31-oct-2026)
- **Grok Bot solo coordina y revisa resúmenes.** No hace el trabajo pesado él mismo.
- El trabajo pesado va **en lote** a Claude Code o Codex por la cola: se juntan varias tareas y se procesan juntas.
- **Código → Codex** (`motor: codex`, `nivel: codigo`). Textos, análisis y documentos → Claude.
- Grok Bot lee los `*.resumen.md`, decide el siguiente paso y le pregunta a Sergio lo que haga falta.

## Niveles y modelos
`--nivel pesado|liviano|rapido` (por defecto **liviano**; `codigo` es lo mismo que pesado). Cada nivel usa un modelo fijo:

| Nivel | Claude | Codex | Para qué |
|---|---|---|---|
| pesado (= codigo) | `claude-opus-5-5` (Opus 5.5) | `gpt-6-astra` | código, repos, análisis difíciles |
| liviano (por defecto) | `claude-sonnet-5-5` (Sonnet 5.5) | `gpt-6.1-sol` | textos, resúmenes, tareas normales |
| rapido | `claude-haiku-5-5` (Haiku 5.5) | `gpt-6-luna` | clasificar, extraer, respuestas cortas |

Los modelos de Codex salen de la lista de la cuenta (`~/.codex/models_cache.json`, 31-oct-2026): `gpt-6-astra` es el de "máxima inteligencia", `gpt-6.1-sol` el de uso diario y `gpt-6-luna` el rápido. Usa el nivel más bajo que sirva, porque pesado gasta más cupo del plan. Para cambiar un modelo sin editar el script: `ONIA_LLM_MODELO_<MOTOR>_<NIVEL>=id`.

## Uso directo
```
onia-llm [--motor claude|codex|auto] [--nivel pesado|liviano|rapido|codigo] [--escritura] [--dir RUTA] \
         [--agente NOMBRE] [--tarea TEXTO] "prompt"
echo "prompt" | onia-llm --dir ~/repo
onia-llm --help
```
- `--motor auto` (por defecto): Claude hasta el 2 de noviembre de 2026; **desde el 3 de noviembre de 2026 usa Codex**, salvo que exista `~/.config/onia-llm/claude-activo` o `ONIA_LLM_CLAUDE=1`.
- Si el motor elegido falla, prueba el otro con el mismo nivel y avisa.

## Cola (trabajo en lote)
```
onia-llm cola encolar <agente> <archivo.md|->
onia-llm cola procesar [--agente X]      # segundo plano, una tarea a la vez, con lock
onia-llm cola estado [agente]
```
Cada tarea es un `.md` en `/workspace/onia-cola/<agente>/`, con frontmatter opcional:
```
---
motor: codex          # claude | codex | auto
nivel: codigo         # pesado | liviano | rapido | codigo (por defecto liviano)
prioridad: alta       # 1-9 o alta|media|baja
modo: escritura       # lectura (por defecto) | escritura
dir: /workspace/platform
tarea: nombre corto
---
```
Estados: `<agente>/` → `en-curso/` → `hecho/` o `error/`. Junto a cada tarea quedan `X.resultado.md` y `X.resumen.md` (máximo 5 líneas: qué se hizo, dónde y qué falta decidir).

## Registro
- `~/.local/state/onia-llm/uso.jsonl`: una línea por llamada con agente, motor, **nivel**, **modelo**, tarea, modo, carpeta, duración, código de salida, tokens y costo equivalente (Claude). Sin secretos.
- `python3 /workspace/operaciones/uso-ia.py` arma `uso-ia.json` y `uso-ia.md` con totales por agente, motor, nivel y modelo.

## Reglas
1. **Solo lectura por defecto.** Claude: `--permission-mode plan` con solo Read/Grep/Glob. Codex: `--sandbox read-only`.
2. `--escritura` solo cuando la tarea lo pide (Claude `acceptEdits`, Codex `--sandbox workspace-write`) y dentro de la carpeta de trabajo.
3. **Nunca `git push`.** Los cambios van a una rama y a un PR sin merge, con el sí de Sergio.
4. **Revisar el resultado antes de usarlo.** Lo que devuelve el motor es un borrador.
5. Nada de secretos en el prompt: las credenciales van en la bóveda.
6. Nada a producción, publicar ni gastar sin el sí de Sergio.
