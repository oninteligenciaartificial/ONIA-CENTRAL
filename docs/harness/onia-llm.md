# onia-llm: trabajo pesado con Claude Code y Codex

## Qué es
`onia-llm` es un script en la computadora compartida (`/home/box/.local/bin/onia-llm`) que usan los agentes de OnIA para mandar trabajo pesado (código, análisis de repos, documentos largos) a Claude Code o Codex CLI, con las suscripciones de Sergio.

## Uso
```
onia-llm [--motor claude|codex|auto] [--escritura] [--dir RUTA] "prompt"
echo "prompt" | onia-llm --dir ~/repo
onia-llm --help
```
- `--motor auto` (por defecto): Claude hasta el 2 de noviembre de 2026; **desde el 3 de noviembre de 2026 usa Codex**, salvo que exista `~/.config/onia-llm/claude-activo` o `ONIA_LLM_CLAUDE=1`.
- Si el motor elegido falla o no está, prueba el otro y avisa.
- Log de cada uso: `~/.local/state/onia-llm/AAAA-MM-DD.log` (fecha, motor, modo, carpeta, inicio del prompt, código de salida, duración). Sin secretos.

## Reglas
1. **Solo lectura por defecto.** Claude: `--permission-mode plan` con solo Read/Grep/Glob. Codex: `--sandbox read-only`.
2. `--escritura` solo cuando la tarea lo pide (Claude `acceptEdits`, Codex `--sandbox workspace-write`) y dentro de la carpeta de trabajo.
3. **Nunca `git push`.** Los cambios van a una rama y a un PR sin merge, con el sí de Sergio.
4. **Revisar el resultado antes de usarlo.** Lo que devuelve el motor es un borrador.
5. Nada de secretos en el prompt: credenciales en la bóveda.
6. Nada a producción, publicar ni gastar sin el sí de Sergio.
