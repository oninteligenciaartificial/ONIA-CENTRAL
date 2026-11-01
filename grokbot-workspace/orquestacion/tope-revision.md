# Tope de revisión de onia-tarea — 2026-11-01

`ONIA_TAREA_REVISION_MAX_USD` limita las reservas acumuladas de Claude por identificador de tarea, incluidas las dos rondas. Default: `1` USD. Admite cantidades positivas con hasta seis decimales. Un valor inválido detiene el harness antes de llamar motores.

El límite enviado al adaptador es el menor entre el tope de revisión y `ONIA_TAREA_COSTE_MAX_USD`. Las reservas se guardan bajo el lock del presupuesto y nunca se reembolsan por fallo o caída. Si una nueva reserva supera el tope acumulado, exit 75 antes de invocar al revisor. Conserva también los límites globales existentes de US$3 por tarea y US$20 diarios.

## Garantía y limitación

La reserva limita autorización, no mide ni controla por sí sola una implementación externa. `ONIA_TAREA_LLM` sigue requiriendo un adaptador confiable que garantice `--max-cost-usd` incluyendo llamadas internas.

El adaptador incluido `bin/onia-costo` **bloquea Claude antes de iniciar el CLI**. La auditoría local (`auditoria-harness-20261101.md`, sección final) registró US$3.4995 con `--max-budget-usd 0.5`: esperar el resultado, detectar el exceso y matar después no evita gasto. No existe una excepción por variable de entorno para habilitar ese camino inseguro. No se anuncia una revisión exitosa cuando está bloqueada.

Para habilitar revisiones reales falta un proveedor/adaptador con presupuesto exigible antes de cada inferencia, incluido contexto y subllamadas. No se probó ni consumió API o suscripción. Codex conserva su política anterior; este cambio no afirma un tope duro para Codex.

## Pruebas locales

- `bash pruebas/test-onia-tarea.sh`: 58 comprobaciones. Default US$1, tope configurable, reserva exacta, rechazo del siguiente microdólar, dos rondas, configuración inválida y concurrencia.
- `python3 -m pytest -q pruebas/test_auditoria_1540.py`: 52 pruebas. Claude no inicia ni con stub que anuncia presupuesto o devuelve exceso.
- `bash guard/test-guard.sh`: 83 comprobaciones.

Todas las pruebas usan stubs y carpetas aisladas, sin motores reales ni gasto. No se modifican `.env` ni instalados fuera de `/workspace`.
