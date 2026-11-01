# Costo de revisión — evidencia 2026-11-01

Estado: protección local implementada y pruebas verdes; revisión Claude real bloqueada por falta de cota dura verificable.

Cambios:
- `/workspace/orquestacion/bin/onia-tarea`: `ONIA_TAREA_REVISION_MAX_USD`, default US$1 acumulado por tarea; reserva atómica entre rondas; exit 75 antes de exceder el presupuesto; valores inválidos impiden toda ejecución.
- `/workspace/orquestacion/bin/onia-costo`: Claude bloqueado antes del CLI. El proveedor conocido había excedido US$0.50 hasta US$3.4995, por lo que `--max-budget-usd` no se considera garantía.
- Pruebas en `pruebas/test-onia-tarea.sh` y `pruebas/test_auditoria_1540.py`; respaldos adyacentes `*.bak-20261101-tope-revision`.
- Documentación: `/workspace/orquestacion/tope-revision.md`.

Resultados (todos exit 0):
- Harness: **58/58** — `/workspace/estado/costo-tarea-tests.log`.
- Auditoría: **52/52** — `/workspace/estado/costo-auditoria-tests.log`.
- Guard: **83/83** — `/workspace/estado/costo-guard-tests.log`.

No se llamó Claude/Codex reales, no se gastó, publicó ni modificó `.env`. La reserva no puede impedir que un adaptador externo arbitrario incumpla su contrato. El adaptador incluido falla cerrado; habilitar revisión real requiere escoger e implementar un proveedor con control previo verificable. No se promete garantía monetaria del CLI que ya falló.
