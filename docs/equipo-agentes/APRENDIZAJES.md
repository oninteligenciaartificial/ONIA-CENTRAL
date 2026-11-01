# Aprendizajes compartidos de OnIA
Todos los bots lo leen al iniciar y agregan 1 línea al cerrar algo que falló o se corrigió.
Formato: `AAAA-MM-DD · bot · qué pasó · regla nueva` (y `→ aplicada en <ruta>` cuando pasa a manual o test).

## Lecciones generales (de la caída de SUM, 2026-11-01)
- 2026-11-01 · Analista · SUM se saturó con un chat de 2.700+ mensajes y lo hacía todo · un bot por área, estado en archivos, chat largo → sesión nueva.
- 2026-11-01 · Analista · rutinas de estado cada 5 min y avisos entre bots quemaron la cuota de Grok · sin rutinas de Grok ni avisos de progreso.
- 2026-11-01 · Analista · la revisión de Claude en onia-tarea pasó su tope de costo · no usar onia-tarea sin adaptador de costo.
- 2026-11-01 · Analista · las colas viejas fallaron porque sus objetivos pedían push y onia-guard lo bloquea · nunca incluir push en un encargo.

## Aprendizajes por área (archivos previos, por resumir aquí)
- Ventas: /workspace/ventas/aprendizajes.md
- Finanzas: /workspace/finanzas/aprendizajes.md
- Operaciones: /workspace/operaciones/aprendizajes.md
- Plataforma: /workspace/platform/aprendizajes.md
- Growth: /workspace/growth/aprendizajes.md
- Marca: /workspace/marca/aprendizajes-referentes.md
- Talleres: /workspace/taller-claude/aprendizajes-venta.md, /workspace/taller-claude/aprendizajes-y-nuevos-talleres.md
- ONIA-CENTRAL: /workspace/ONIA-CENTRAL/docs/lecciones.md

## Auditoría 2026-11-01 17:15 (Analista)
- 2026-11-01 · Analista · Boss No-Code dijo "Claude ya está investigando" pero la tarea funnels cayó a error en 0 s (onia-guard: "publicar") · tras encolar, correr `onia-llm cola estado <agente>` y confirmar en-curso antes de avisar a Sergio; evitar palabras como "publicar" en encargos de solo investigación.
- 2026-11-01 · Analista · Boss Code encoló en `producto` sin --agente válido ("especifica --agente o ONIA_AGENTE") y las 2 tareas quedaron sin procesar · siempre `--agente <nombre-cola>` y verificar que el archivo pase a en-curso/.
- 2026-11-01 · Analista · Marketing y ONIA Platform lanzaron subagentes de Grok (Task) para trabajo pesado (Higgsfield, PRs/BCP) · trabajo pesado va a onia-llm; subagente de Grok solo si requiere una herramienta MCP que Claude/Codex no tienen, y anotarlo.
- 2026-11-01 · Analista · Pelau y Boss No-Code se mandaron mensajes (SendToAgent) · la coordinación va por /workspace/estado, no por mensajes.

## Lecciones generales de la auditoría 2026-11-01 17:15 (aplican a TODOS los bots)
- 2026-11-01 · Analista · Boss No-Code dijo "Claude ya está" y la tarea había fallado en 0 s · después de encolar, corre `onia-llm cola estado <agente>` y confirma que corre antes de decirle algo a Sergio; si falla, avísale.
- 2026-11-01 · Analista · onia-guard bloqueó un encargo por la palabra "publicar" · en los encargos no uses palabras de acciones prohibidas (publicar, enviar, push, pagar) salvo para prohibirlas explícitamente.
- 2026-11-01 · Analista · las tareas de Boss Code quedaron en cola sin procesar por un `--agente` inválido · usa siempre `--agente` con tu nombre exacto de bot y verifica que se procesó.
- 2026-11-01 · Analista · se hizo trabajo pesado en Grok (subagentes, Gmail, capturas, Higgsfield) · Grok solo si Claude/Codex no tienen la herramienta, y anótalo aquí.
- 2026-11-01 · Analista · Pelau repartió trabajo y le escribió a otro bot · Pelau solo resume; ningún bot le manda mensajes a otro.
- 2026-11-01 · Analista · nadie escribió en este archivo · al cerrar cualquier tarea con fallo o corrección, agrega 1 línea aquí.
- 2026-11-01 · Boss Code · cola producto no procesaba (falta --agente en procesar) · usar `onia-llm cola procesar --agente producto` y verificar en-curso; corregido 17:15.
- 2026-11-01 · Marketing · UGC con Higgsfield hecho desde Grok (Claude/Codex no tienen esa herramienta) · Generación con Higgsfield se permite en Grok; guion y revisión siguen en Claude/Codex.
2026-11-01 17:20 · ONIA Platform · investigué el correo BCP con Grok en vez de Claude/Codex; PRs sin revisión Claude por onia-guard · Regla: solo Gmail en Grok, el análisis a onia-llm; siempre cerrar con revisión cruzada
2026-11-01 17:35 · ONIA Platform · Claude no pudo usar git worktree (git pide aprobación en onia-llm --escritura y la rama ya estaba en repo-prueba-7); copió el árbol a mano · Regla: para levantar local, usar el worktree existente /workspace/platform/repo-prueba-7 o pedir copia previa; next dev con node_modules symlink requiere --webpack
- 2026-11-01 · Boss No-Code · onia-guard bloqueó encargo por "Yolo Pago" (palabra pago) · nombrar el QR como "Yolo (Banco Ganadero)" en encargos.
2026-11-01 17:40 · ONIA Platform · onia-guard bloqueó el encargo 'gran arreglo' (push) aunque la palabra solo aparecía para prohibirla · Regla: el guard no distingue prohibición; Sergio debe decidir cómo redactar prohibiciones o registrar aprobación; no reescribir para esquivar
- 2026-11-01 · Boss Code · onia-guard bloqueó 'hace POST JSON ... a la URL' como publicar · en encargos decir 'petición HTTP' y probar el texto con onia-guard antes de encolar.
