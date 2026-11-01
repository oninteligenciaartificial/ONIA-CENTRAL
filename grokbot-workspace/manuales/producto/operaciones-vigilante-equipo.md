---
tarea: operaciones-vigilante-equipo
version: 1
dueno: Producto
ejecuta: n8n
nivel_modelo: 1
max_vueltas: 2
escala_a_sergio: agente parado con trabajo urgente, archivo de estado sin actualizar, error de acceso repetido
---
# Vigilante del equipo (quién está parado)
## Objetivo
Saber en cualquier momento qué agentes trabajan y cuáles están parados, en `/workspace/estado-equipo.md`.

## Cuándo se usa
- Cada 120 s en modo bucle, o a mano en el chequeo de la mañana.
- Propuesta: es una tarea de pasos fijos sin decisión, candidata a n8n según la regla del manual (investigación línea 127). POR CONFIRMAR: si Sergio la pasa a n8n o sigue como script.

## Entrada
- `~/.local/state/onia-llm/uso.jsonl` y subcarpetas de `~/.local/state/onia-llm/trabajos/`.

## Pasos
1. Corre `python3 vigilante.py` en `/workspace/operaciones/vigilante` (una vez), o con `--bucle` si debe quedar activo. Solo una instancia.
2. Abre `/workspace/estado-equipo.md`: línea `PARADOS:`, hora La Paz y tabla (agente, estado, última tarea, minutos).
3. Regla: parado = sin trabajo activo y más de 600 s desde su último registro.
4. Por cada parado, mira su buzón (`onia-central buzon <agente>`) y su loop, para saber si espera una decisión.
5. Si el agente espera a Sergio, ya está en `/workspace/decisiones-pendientes.md`; si no, avisa por `onia-central msg operaciones <agente> "texto"`.
6. Resume: quién está parado y por qué.

## Salida (JSON)
{"estado":"ok|falla|necesita_sergio","borrador":"/workspace/estado-equipo.md","motivo":"..."}

## Fuentes
- `/workspace/operaciones/vigilante/LEEME.md`
- `/workspace/operaciones/vigilante/vigilante.py`
- `/workspace/operaciones/vigilante/vigilante.log`
- `/workspace/estado-equipo.md`
- `/workspace/onia-central-sistema/agentes/operaciones/.claude/agents/vigilante-cola.md`
- `/workspace/onia-central-sistema/GUIA.md`

## Reglas
- Parado no es falla: puede esperar una decisión. No lo reinicies a la fuerza.
- El vigilante no usa red ni Git y saca solo nombres canónicos y títulos saneados.
- No inicies varias instancias; para detener, verifica el PID antes de `kill`.
- Agentes desconocidos se ignoran.

## Checklist de terminado
- [ ] La hora de `estado-equipo.md` es reciente.
- [ ] Cada parado tiene motivo conocido.
- [ ] Avisos enviados solo por el buzón.

## Prohibido
enviar, gastar, borrar, push, deploy, tocar producción o secretos

## Cuándo escalar
- Archivo sin actualizar por más del doble del intervalo (240 s).
- Un agente parado con trabajo que corre contra una fecha (ej. taller del 3-nov).
- Error de acceso a `/workspace` que se repite.
