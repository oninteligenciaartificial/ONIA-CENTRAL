---
name: cerrar
description: Cierra una sesión de OnIA: estado al día, línea en la Bitácora, revisión cruzada con veredicto escrito y commit local (sin subir nada).
argument-hint: [agente]
disable-model-invocation: true
---

Cierra la sesión del agente **$ARGUMENTS**.

1. **Estado.** Actualiza el archivo de estado del agente en `docs/equipo-agentes/`: qué se hizo, dónde quedó (ruta) y qué decide Sergio. Si cambió algo grande, también `ESTADO-ACTUAL.md`.
2. **Bitácora.** Si algo falló, se corrigió o Sergio corrigió, agrega 1 línea al final de `docs/equipo-agentes/APRENDIZAJES.md`:
   `AAAA-MM-DD · agente · qué pasó · regla nueva`
3. **Revisión cruzada, después de 1 y 2**, para que revise también el estado y la Bitácora. Si lo escribió Claude, que lo revise Codex en solo lectura:
   `git diff HEAD > /tmp/onia-diff.txt` y luego
   `codex exec --sandbox read-only -C . "Revisa el diff en /tmp/onia-diff.txt (trabajo, archivo de estado y Bitácora). Solo errores que importan. Termina con 'Veredicto: aprobar' o 'Veredicto: cambios'."`
   (En Windows usa `$env:TEMP\onia-diff.txt`.) Los archivos nuevos sin seguimiento: agrégalos con `git add -N <archivo>` antes del diff.
   Si da "cambios", arregla y vuelve a revisar (máximo 2 vueltas; si no pasa, queda como `necesita_sergio`).
4. **Veredicto escrito.** En el archivo de estado del agente, agrega una línea: `Revisión AAAA-MM-DD · revisor (Codex, modelo) · Veredicto: aprobar|cambios|necesita_sergio · qué falló y qué se corrigió`. Sin esa línea no se commitea.
5. **Handoff.** Agrega al final de `docs/equipo-agentes/ESTADO-ACTUAL.md` (sección "Handoff", reemplaza la entrada anterior del mismo agente) 3-5 líneas: fecha y hora, agente y herramienta (Claude/Codex/Grok Bot), rama y hash, qué quedó a medias, siguiente paso. Sirve para que otra sesión, Codex o Grok Bot retome sin leer el chat.
6. **Commit local.** Incluye el handoff. `git status`, luego `git add` **solo de los archivos de esta sesión** (nunca `git add .`), y:
   `git -c user.name="<Agente> (OnIA)" -c user.email="<agente>@onia.local" commit -m "<qué hace el cambio>"`
7. **No subas nada al remoto.** Eso lo decide Sergio.
8. Dile a Sergio: qué se hizo, dónde quedó, el veredicto de la revisión, el hash del commit y 1-2 próximos pasos que terminen en pregunta ("¿sigo con X?").
