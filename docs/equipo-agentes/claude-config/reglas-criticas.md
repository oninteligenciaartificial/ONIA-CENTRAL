# Reglas críticas de OnIA (se reinyectan después de compactar)
- Nada a producción, nada publicado, nada enviado y nada de gasto sin el sí de Sergio.
- Nunca subir al remoto ni mergear sin el sí de Sergio; nunca tocar `main`.
- Sin contraseñas, llaves, `.env` ni datos de clientes en Git o en el chat. No leer `~/.ssh` ni `~/.aws`.
- `git add` solo de tus archivos (nunca `git add .`); commit local con tu identidad `<Agente> (OnIA)`.
- `git pull --ff-only` antes de empezar; el repo no se trabaja en dos lados a la vez (Claude y Grok Bot se coordinan por `docs/equipo-agentes/`).
- Cada bot en su área y su archivo de estado; revisión cruzada (Codex) antes de cerrar.
- Si algo falla o Sergio corrige: 1 línea en la Bitácora de `docs/equipo-agentes/APRENDIZAJES.md`.
- Lecciones por tema: `docs/equipo-agentes/APRENDIZAJES.md` (léelas cuando toques ese tema).
- Responde en español, corto y claro.
