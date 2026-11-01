---
tarea: operaciones-registro-uso-ia
version: 1
dueno: Producto
ejecuta: claude
nivel_modelo: 1
max_vueltas: 2
escala_a_sergio: gasto cerca del límite del plan, subir tope, pausar un agente, cifra que no cuadra
---
# Registro y reporte de uso de IA
## Objetivo
Dejar al día `uso-ia.md` con cuánto usó cada agente y motor, y avisar si algún plan se acerca al límite.

## Cuándo se usa
- Cada mañana (checklist diario) y antes de lanzar trabajo pesado.
- Cuando el paso buzón de Operaciones ve que el gasto del día pasa el 80% del tope.

## Entrada
- `~/.local/state/onia-llm/uso.jsonl` y los `*.log` de esa carpeta (registro de cada llamada a `onia-llm`).
- `/workspace/operaciones/higgsfield-saldo.json` (créditos Higgsfield).
- Límites de planes: línea "Límites de los planes" de `uso-ia.md`.

## Pasos
1. Corre `python3 /workspace/operaciones/uso-ia.py` (lee logs, regenera `uso-ia.json` y `uso-ia.md`; solo lectura de logs, sin red).
2. Lee `uso-ia.md`: tablas "Por agente", "Por motor", "Por motor, nivel y modelo".
3. Para loops, filtra tareas que empiezan con `loop:` y deja `/workspace/operaciones/uso-ia-loops.md` con fecha de hoy y de dónde sale cada cifra.
4. Compara % semanal de Claude y Codex con el tope: meta 90%, nunca 95% (`memoria.md`, D-20261101-007).
5. Anota lo que falta: filas "(deducido)", tokens vacíos, Codex sin costo.
6. Si hay riesgo de pasar el tope, redacta una decisión (A subir/B pausar) con `onia-central pedir operaciones ...`.

## Salida (JSON)
{"estado":"ok|falla|necesita_sergio","borrador":"/workspace/operaciones/uso-ia.md","motivo":"..."}

## Fuentes
- `/workspace/operaciones/uso-ia.py`
- `/workspace/operaciones/uso-ia.md`
- `/workspace/operaciones/higgsfield-saldo.json`
- `/workspace/onia-central-sistema/memoria.md`
- `/workspace/onia-central-sistema/GUIA.md` (secciones 5 y 7)
- `/workspace/investigacion/orquestacion-agentes.md` (métricas, líneas 129-136)

## Reglas
- Cada cifra cita su origen; nada de redondeos inventados.
- El costo es "equivalente" (precio de lista): con el plan no hay factura aparte. Codex solo informa tokens.
- Antes de 2026-10-31 18:27 el registro no guardaba agente ni tokens: se marca "(deducido)".
- Los saldos de Higgsfield se leen de `higgsfield-saldo.json`; si es viejo, dilo.
- Métricas a n8n (panel): costo por tarea por motor, vueltas por loop, cuota usada vs semana. POR CONFIRMAR: qué workflow de n8n las recibe hoy.

## Checklist de terminado
- [ ] `uso-ia.md` tiene fecha de hoy.
- [ ] Cada cifra dice su fuente.
- [ ] Se dijo qué falta (deducido, sin tokens).
- [ ] Alerta de tope revisada.

## Prohibido
enviar, gastar, borrar, push, deploy, tocar producción o secretos

## Cuándo escalar
- Plan Claude o Codex sobre 90% semanal.
- Saldo Higgsfield bajo (umbral: POR CONFIRMAR) o recarga: es gasto, decide Sergio.
- Cifras que no cuadran entre `uso.jsonl` y `uso-ia.md`.
