---
name: empezar
description: Empieza una sesión de OnIA: trae lo último, lee reglas y estado del área, y fija el objetivo.
argument-hint: [agente: pelau | onia-platform | boss-code | boss-no-code | marketing | analista]
disable-model-invocation: true
---

Empieza una sesión de trabajo de OnIA para el agente **$ARGUMENTS**.

1. Corre `git status`. Si hay cambios sin commitear que no son de esta sesión, **no los toques**: avísale a Sergio.
2. Corre `git pull --ff-only`. Si falla, para y explícale a Sergio por qué, en una línea.
3. Lee `docs/equipo-agentes/ESTADO-ACTUAL.md` y el archivo de estado del agente:
   pelau → `secretario.md` · onia-platform → `platform.md` · boss-code → `producto.md` · boss-no-code → `negocio.md` · marketing → `marketing.md` · analista → `analista.md` (todos en `docs/equipo-agentes/`).
4. `APRENDIZAJES.md` ya no se carga solo (para ahorrar contexto). Lee la Bitácora (sección 9) de `docs/equipo-agentes/APRENDIZAJES.md` y **solo** las secciones del área:
   pelau → 4, 5 · onia-platform → 2, 3, 8 · boss-code → 2, 3 · boss-no-code → 4, 5, 7 · marketing → 7 · analista → 1, 6 (y lo que audite). Todos leen 1 y 6 si tocan agentes o secretos.
5. Si `docs/equipo-agentes/analista.md` tiene una sección "para <este bot>" de una auditoría, pasa lo que falta corregir a tu propio archivo de estado (no edites `analista.md`).
6. Reporta primero lo terminado que nadie le contó a Sergio.
7. Propón **un** objetivo para la sesión con su "hecho cuando", y pásale el trabajo al subagente `$ARGUMENTS`.

Responde en español, corto y tuteando.
