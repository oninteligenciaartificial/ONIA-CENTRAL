# Datos del 1-nov-2026 para el plan del equipo

Los juntó la sesión coordinadora de Claude Code entre las 18:50 y las 19:45, hora de Bolivia.

## Lo que pidió Sergio Urcullo, con sus palabras (1-nov, sesión coordinadora, sin enlace)

- "decime si aprovechas a claude y codex definimos espacio de contexto por sesion, cuando se limpia y como se toma decisiones y lees lo de grokbot, y me falta una sesion que es el analista"
- "recorda que claude y codex seran uno solo, comparten todo, y trabajan juntos, primero terminamos de anotar todo y armamos el plan y como trabaja cada agente, no todos tocan configuracion, pero todos tienen memoria compartida, hablan entre si y tienen el mismo contexto y cerebro"
- "cada cuanto queres abrir nueva sesion por cada area de la empresa, boss no code, analista, etc"
- "pero medilo por contexto si es trabajo largo que tenga su limite, tambien defini llm de subagentes y de llm de sesion por cada area de la empresa, tambien de codex"
- "nos estamos quedando sin limite en claude y no lo pagare luego, necesito que esto sea exportable a codex, que de que termine la cuenta de claude que es el 3 de noviembre pasemos directo a codex"
- Sobre Grok Bot: "podemos armar el browser de grok con wsl linux un browser, asi ya no pagariamos grokbot" (anotado en el issue #96).

## Cuota y contexto de Claude (get_usage de la app de Claude)

- Plan Ultra. Semanal de todos los modelos: 45% usado, se renueva el 5-nov a las 08:00 UTC. Uso extra apagado. Según Sergio, la cuenta termina el 3-nov y no se renueva.
- Ventana de cada sesión: 1.000.000 tokens (Claude Opus 5.5). La compactación automática salta al 97%.
- Lo que carga una sesión nueva antes del primer mensaje: System tools ~36.901, MCP tools ~19.640 a 26.590, Memory files ~15.508 (CLAUDE.md global, AGENTS.md, docs/lecciones.md), System prompt ~11.064 y Skills ~9.134 tokens. En total, unos 92.000 a 99.000.
- Contexto usado por sesión:
  - coordinadora: 44% (441.636), después de un día largo con varios objetivos;
  - Boss No-Code: 22% (219.834), con dos PRs;
  - Marketing: 19% (193.228);
  - Boss Code: 19% (189.314);
  - ONIA Platform: 19% (191.401);
  - la que mergeó el PR #103: 18% (175.034);
  - Analista: 17% (168.727), recién arrancada.
- Todas las sesiones usan Claude Opus 5.5. Las de área van con esfuerzo high y la coordinadora con max. Modelos de Claude que se pueden elegir: claude-opus-5-5, claude-sonnet-5-5, claude-haiku-5-5 y claude-fable-5-1. La ventana "Weekly · Fable" va en 0%.

## Codex en esta PC (leído el 1-nov)

- codex-cli 0.166.0, con login de ChatGPT. Modelo por defecto en config.toml: gpt-6.1-sol con esfuerzo medium.
- Modelos de la cuenta (`~/.codex/models_cache.json`), con su ventana:
  - gpt-6.1-sol: "Latest workhorse model for coding and everyday work", 500.000;
  - gpt-6-astra: "Frontier intelligence for the most demanding work", 272.000;
  - gpt-6.1-terra: "GPT-6.1 Terra Codex model", 500.000;
  - gpt-6-sol: generación anterior, 272.000;
  - gpt-6-luna: "Fast and affordable model for easier tasks", 272.000.
  Esfuerzos: low, medium, high, xhigh y max; los sol, terra y astra también suman ultra.
- `codex features list`: multi_agent stable true; hooks stable true; goals stable true; memories stable false; skill_search stable true. agent_message_board y wake_on_agent_messages están "under development" (false).
- Dos revisiones de Codex en solo lectura de la coordinadora:
  - 585.173 tokens de entrada (507.392 en caché) y 3.606 de salida;
  - 825.108 de entrada (729.984 en caché) y 5.355 de salida.
  La cuota de ChatGPT no se pudo leer.

## Cómo trabajan hoy las sesiones (1-nov)

- Cada sesión de área arrancó con su worktree desde `main`, leyó su estado de la rama de Grok Bot, lo llevó a `main` por PR con dos revisiones de Codex en solo lectura y le reportó a Sergio. Boss No-Code, Boss Code y ONIA Platform ya tienen su archivo en `docs/equipo-agentes/`. El de Marketing (PR #102) espera la decisión de Sergio.
- La coordinadora recibe un aviso cuando cada sesión que lanzó termina su turno, y les puede mandar mensajes con SendMessage. Las sesiones se ven en la barra lateral de la app de Claude.
- La Analista audita los PRs del día y comenta en cada uno.
- Grok Bot subió su material a la rama `grokbot/workspace-20261101` y su paquete para replicar el equipo en Claude a `onia-loop-excepcion-d003`.
