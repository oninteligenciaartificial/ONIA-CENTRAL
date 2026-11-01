# onia-llm: trabajo pesado con Claude Code y Codex

> **Propio de Grok Bot, historia desde el 1-nov-2026.** Describe un script de la computadora de Grok Bot en la nube (`/home/box/...`), que no vive en ningún repo. No se usa desde la PC de Sergio Urcullo: el equipo son sesiones de Claude Code, como dice la sección "Equipo de agentes" del `AGENTS.md` ([2026-11-01-equipo-claude-code](../decisiones/2026-11-01-equipo-claude-code.md)). Si choca con el `AGENTS.md`, manda el `AGENTS.md`.

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

## Reglas de uso de Claude Code y Codex (aprobadas por Sergio Urcullo el 31-oct-2026)

1. Se usan solo a través de `onia-llm` (`/home/box/.local/bin/onia-llm`) y solo para trabajo pesado: código, análisis largos, textos importantes y revisión de PR. Lo simple lo resuelve cada agente solo.
2. Motor: Claude Code hasta el 3 de noviembre de 2026. Desde esa fecha, solo Codex si no se llegó a la meta de ingresos.
3. Solo lectura por defecto. Solo editan dentro de una copia del repo en una rama nueva; nunca en `master`/`main` ni en el VPS.
4. Todo lo que producen lo revisa el agente que pidió el trabajo antes de usarlo. Ningún resultado sale directo.
5. Los cambios de código van por PR y nunca se mergean sin el sí de Sergio.
6. No reciben contraseñas, llaves ni datos de clientes. Las llaves se quedan en la bóveda.
7. Nunca publican, envían mensajes, gastan ni tocan producción.
8. Antes de trabajar leen `AGENTS.md`, `docs/decisiones/2026-10-29-mapa-operacion-onia.md` y la carpeta del área que corresponda (por ejemplo `marca-personal/` o `workshops-comunidad/`).

## Nivel de autonomía de los agentes

Intermedio, elegido por Sergio el 31-oct-2026. Los agentes hacen solos lo interno y reversible (investigar, borradores, planillas, campañas en pausa, PR sin merge). Piden el sí para todo lo externo o difícil de revertir: publicar, enviar mensajes a personas (salvo las respuestas del chatbot a leads ya aprobadas), gastar, borrar, cambios en producción y temas legales. Se revisa cada semana para ver si se sube de nivel.
