---
motor: codex
prioridad: 1
nivel: codigo
modo: escritura
dir: /workspace
---
# onia-llm: aviso por webhook al terminar (Boss Code). Solo cambios locales; .env intacto.
Objetivo: cuando onia-llm termina un trabajo (directo, --fondo o cola), hace POST JSON {id, agente, estado, resumen_path, resultado_path, terminado_en} a la URL del bot que lo encargó según --agente.
Checklist:
1. Respaldo .bak de cada archivo tocado de onia-llm antes de editar.
2. Mapa agente->URL en ~/.config/onia-llm/webhooks.json (archivo nuevo, permisos 600; NO en .env). Agentes: pelau, onia-platform, producto (Boss Code), negocio (Boss No-Code), marketing. Si no hay URL, no hace nada y lo deja en el log.
3. Header secreto opcional por agente; timeout 10s, 2 reintentos, nunca rompe ni demora el trabajo; log en ~/.local/state/onia-llm/webhooks.log.
4. Un solo aviso por trabajo (idempotente por id).
5. Tests con un servidor HTTP local de prueba que cubran éxito, fallo de red, sin URL y que no se repita.
6. Doc en /workspace/estado/despertador-webhook.md: cómo cargar las URLs y el texto exacto del prompt de la rutina webhook para cada bot (despertar una vez, leer resumen_path, escribirle a Sergio el resultado con 1-2 próximos pasos; solo dentro de Grok).
Revisión: luego Claude revisa el diff (máx 2 vueltas). Resumen en /workspace/estado/producto.md.
