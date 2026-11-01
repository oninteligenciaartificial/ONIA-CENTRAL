---
description: Cierra una sesión de OnIA: estado al día, línea en la Bitácora, revisión cruzada con veredicto escrito y commit local (sin subir nada).
argument-hint: [agente]
---

Cierra la sesión del agente **$ARGUMENTS**.

1. **Estado.** Actualiza el archivo de estado del agente en `docs/equipo-agentes/`: qué se hizo, dónde quedó (ruta) y qué decide Sergio. Si cambió algo grande, también `ESTADO-ACTUAL.md`.
2. **Bitácora.** Si algo falló, se corrigió o Sergio corrigió, agrega 1 línea al final de `docs/equipo-agentes/APRENDIZAJES.md`:
   `AAAA-MM-DD · agente · qué pasó · regla nueva`
3. **Revisión cruzada, después de 1 y 2**, para que revise también el estado y la Bitácora. Si lo escribió Claude, que lo revise Codex en solo lectura:
   `codex exec --sandbox read-only -C . "Revisa los cambios de 'git diff' (trabajo, archivo de estado y Bitácora). Solo errores que importan. Termina con 'Veredicto: aprobar' o 'Veredicto: cambios'."`
   Si da "cambios", arregla y vuelve a revisar (máximo 2 vueltas; si no pasa, queda como `necesita_sergio`).
4. **Veredicto escrito.** En el archivo de estado del agente, agrega una línea: `Revisión AAAA-MM-DD · revisor (Codex, modelo) · Veredicto: aprobar|cambios|necesita_sergio · qué falló y qué se corrigió`. Sin esa línea no se commitea.
5. **Commit local.** `git status`, luego `git add` **solo de los archivos de esta sesión** (nunca `git add .`), y:
   `git -c user.name="<Agente> (OnIA)" -c user.email="<agente>@onia.local" commit -m "<qué hace el cambio>"`
6. **No subas nada al remoto.** Eso lo decide Sergio.
7. Dile a Sergio: qué se hizo, dónde quedó, el veredicto de la revisión, el hash del commit y 1-2 próximos pasos que terminen en pregunta ("¿sigo con X?").
