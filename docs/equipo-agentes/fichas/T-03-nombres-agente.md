---
tarea: T-03-unificar-nombres-agente
agente: onia-platform
dir: /workspace/platform/wt-panel
archivos_esperados: lib/panel/locales.ts, lib/panel/locales.test.ts
comprobacion: npx vitest run lib/panel/locales.test.ts && npx tsc --noEmit -p .
meta: el panel muestra un solo nombre por agente (sin duplicados Operaciones/operaciones)
fecha_corte: 2026-11-08
---
En lib/panel/locales.ts, al agrupar el uso por agente, unifica nombres de agente que solo difieren en mayúsculas/espacios
(ej. "Operaciones" y " operaciones" -> "Operaciones": primera letra mayúscula, resto como el primero visto en minúscula), y suma sus usos en una sola fila.
Agrega un test en lib/panel/locales.test.ts que lo cubra. Cambio mínimo; no toques otros archivos. No hagas commit.
