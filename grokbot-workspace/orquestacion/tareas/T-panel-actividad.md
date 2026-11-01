---
tarea: panel-actividad-en-vivo
agente: onia-platform
dir: /workspace/platform/wt-panel
archivos_esperados: scripts/actividad-panel.py, panel/data/actividad.json, scripts/test_actividad_panel.py
comprobacion: python3 scripts/metricas-orquestacion.py && test -f panel/data/metricas-orquestacion.json && python3 scripts/actividad-panel.py && python3 -m pytest -q scripts/test_actividad_panel.py scripts/test_metricas_orquestacion.py && npx tsc --noEmit
meta: Sergio ve en el panel qué tarea hace Claude/Codex, de qué agente y con qué resultado
fecha_corte: 2026-11-15
---
Repo Next.js en esta carpeta (branch feat/panel-interno). Haz SOLO esto, en pasos cortos:
1. Bug: scripts/metricas-orquestacion.py escribe en 'panel/data/n' (ruta truncada). Debe escribir panel/data/metricas-orquestacion.json (lo importa app/(dashboard)/panel/page.tsx). Arréglalo y ajusta su test si hace falta.
2. Crea scripts/actividad-panel.py: lee /workspace/estado/actividad.jsonl (líneas JSON con ts, tarea, agente, motor, vuelta, estado, detalle opcional) y ~/.local/state/onia-llm/uso.jsonl (ts, agente, motor, tarea, exit_code, duracion_s). Escribe panel/data/actividad.json = {"generado": iso, "en_curso":[...], "recientes":[ últimos 30, más nuevo primero, campos ts,agente,motor,tarea,resultado ]}. Archivos faltantes = listas vacías. No copies prompts completos ni secretos: tarea recortada a 80 caracteres. Test pytest en scripts/test_actividad_panel.py con archivos temporales (rutas por variables de entorno ONIA_ACTIVIDAD y ONIA_USO).
3. En app/(dashboard)/panel/page.tsx importa panel/data/actividad.json y pásalo a PanelVista; en PanelVista agrega una sección "Claude y Codex trabajando" con una tabla simple (hora, agente, motor, tarea, resultado) usando los componentes/estilos que ya existen. No cambies nada más.
No hagas git push, no instales paquetes nuevos, no toques .env. Al final haz git add y git commit con mensaje "feat(panel): actividad en vivo de Claude y Codex".
