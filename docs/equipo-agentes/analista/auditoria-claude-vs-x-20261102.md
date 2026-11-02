# Auditoría: setup de Claude Code de ONIA-CENTRAL vs. lo que recomiendan en X (2026-11-02)

## Veredicto
La base está bien armada: 6 subagentes con modelo asignado, comandos /empezar /cerrar /auditar, reglas deny y bypass desactivado. Hay dos fallas. (1) Las reglas críticas viven solo en texto y en deny, y no hay **hooks**. (2) CLAUDE.md es corto, pero con `@` importa unas 480 líneas (AGENTS 72 + COMO-TRABAJAR 92 + APRENDIZAJES 315) en cada sesión.

## Sesión de Sergio
En el box no hay ninguna sesión de Sergio trabajando en la app de Claude.
- `~/.claude/projects/-workspace-ONIA-CENTRAL/`: todos los archivos son jobs de onia-llm de los bots. Empiezan con "Reglas OnIA: responde en español. NUNCA ejecutes git push...".
- `~/.claude/projects/-workspace-n8n-resumenes/`: 20 sesiones automáticas del 2026-11-01 que solo corren `/usage`.
- `~/.codex/sessions/2026/11`: jobs de revisión de Codex.
Si trabajó en su PC, la sesión está ahí y no la toqué.

## Lo que está bien
- Subagentes con `model:` propio, cada uno en su área. Coincide con el patrón "1 jefe, muchos workers, solo lee reportes": https://x.com/CryonixCrypto/status/2111102085127135306
- Hay subagente revisor y comando /auditar: https://x.com/Manojkumar2257/status/2113851244850946531
- Ojo con el costo: los subagentes cobran como Opus por defecto si no fijas el modelo: https://x.com/rryssf/status/2107922911562809558. Nosotros ya lo fijamos.
- El repo funciona como memoria, con un archivo de handoff/estado: https://x.com/Cuiszt_Cui/status/2111639751925395666 (un solo AGENTS.md para Claude y Codex, más un archivo de handoff).
- Deny sobre push, deploy, ssh y .env, y `disableBypassPermissionsMode`.

## Lo que falta o está mal
1. **No hay hooks.** CLAUDE.md "es solo una nota" y se lee menos cuanto más larga es la sesión. Un hook PreToolUse con exit 2 bloquea siempre:
   - https://x.com/angel404l/status/2113740317098684750
   - https://x.com/CryonixCrypto/status/2111250714877976894
   - https://x.com/simpjayh/status/2112617565805568159
   - https://x.com/gabrielbuilds_/status/2116087114303480167 (bloquear rm -rf y .env; el mismo script sirve en Codex)
2. **Los hooks fallan abiertos.** Si el script se cae, el comando pasa: https://x.com/EricWangclaude/status/2109266810713583715. Hay que dejar el deny como segunda capa y probar el hook.
3. **Se carga demasiado contexto fijo.** APRENDIZAJES (315 líneas) entra en todas las sesiones por `@`. La ventana se llena y el modelo encuentra peor las cosas:
   - https://x.com/Ronny_MiniMax/status/2115806697474474420
   - https://x.com/lostinazeroy/status/2109727856301351362
   - Anthropic recomienda cargar skills y herramientas solo cuando hacen falta: https://x.com/0xKense1/status/2114724329099256032
4. **El deny de .env es débil** si Bash está libre (cat, curl), y además Claude puede leer ~/.ssh: https://x.com/Voxyz_ai/status/2116998722106388796. Si se activa el sandbox, hay que denegar ~/.ssh y ~/.aws y poner failIfUnavailable: https://x.com/russano/status/2114039708250775704
5. **La revisión cruzada con Codex depende de un script del box** (onia-llm). En el PC de Sergio no existe; falta documentar cómo correr `codex exec` desde /cerrar.

## Cambios propuestos (por prioridad)
1. Agregar `.claude/hooks/guard.sh` con PreToolUse sobre Bash, Edit y Write. Debe bloquear (exit 2) git push, merge, deploy, rm -rf, la lectura de .env/~/.ssh y `cat .env`. Mantener el deny como respaldo. (Links 1 y 2.)
2. Sacar el `@docs/equipo-agentes/APRENDIZAJES.md` de CLAUDE.md. Que /empezar lea solo la sección del área. Opcional: un hook SessionStart con matcher "compact" que reinyecte solo las reglas críticas. (Link 3, más https://x.com/Cozy2054934/status/2111122714396397778.)
3. Agregar al deny `Read(~/.ssh/**)`, `Read(~/.aws/**)`, `Bash(cat *.env*)` y `Bash(curl *)` en modo ask. (Link 4.)
4. En /cerrar, paso explícito: `codex exec` revisa el diff y escribe un handoff en ESTADO-ACTUAL.md. (Link 5, más el de Cuiszt.)
5. Probar los hooks con un comando prohibido falso y dejar el resultado en APRENDIZAJES.

Nota: los posts son de cuentas pequeñas o medianas, no son documentación oficial. Hay que validar contra la doc de hooks de Claude Code antes de aplicar. No se hicieron commits.

---

## Investigación ampliada (2026-11-02, 02:40 hora de Caracas)

### Lo que dice la documentación oficial de Claude Code
- **Hooks** (https://code.claude.com/docs/en/hooks):
  - `PreToolUse` bloquea con `exit 2`, y el stderr se le muestra a Claude como motivo. También puede imprimir JSON con `hookSpecificOutput.permissionDecision: "deny"`.
  - **Por defecto fallan abiertos.** Si el script no existe, se cae o hace timeout, la acción pasa. Desde la v2.1.295 existe `"onFailure": "block"` para que un fallo bloquee. Esto corrige el riesgo que señalaba @EricWangclaude.
  - El filtro `if` ("Bash(git push *)") es "best-effort". La doc dice textualmente que para un allow/deny duro se use el sistema de permisos, no un hook. Conclusión: el deny es la pared y el hook es la segunda capa.
  - `SessionStart` acepta los matchers `startup|resume|clear|compact|fork`. Su stdout entra como contexto (máximo 10.000 caracteres).
  - `Stop` con `exit 2` impide que Claude termine (sirve para "no digas listo con tests rojos"). Ahí `onFailure` no tiene efecto.
  - Los hooks del settings también corren dentro de los subagentes. Un subagente puede tener sus propios `hooks:` en el frontmatter.
  - En Windows: matcher `Bash|PowerShell` y scripts `.ps1` vía `powershell.exe`. Sin Git Bash cambian las reglas de fallo.
- **Memoria** (https://code.claude.com/docs/en/memory):
  - CLAUDE.md es contexto, no configuración forzada; "para bloquear, usa un hook PreToolUse".
  - La meta es **menos de 200 líneas**.
  - **Los imports con `@` NO reducen el contexto**: se cargan completos junto con CLAUDE.md. Lo que se recomienda es usar reglas por ruta (`.claude/rules/*.md` con `paths:`).
  - La auto-memoria `MEMORY.md` carga solo las primeras 200 líneas o 25 KB.
- **Skills** (https://code.claude.com/docs/en/skills): "Custom commands have been merged into skills". Nuestros `.claude/commands/*.md` siguen funcionando, pero para lo nuevo conviene `.claude/skills/<nombre>/SKILL.md`, que admite archivos de apoyo y que Claude lo cargue solo cuando hace falta.
- **Subagentes** (https://code.claude.com/docs/en/sub-agents): el frontmatter admite `model`, `tools`, `disallowedTools`, `permissionMode`, `hooks`, `memory`, `isolation: worktree`, `maxTurns` y `effort`.
- **Permisos** (https://code.claude.com/docs/en/permissions):
  - El orden es deny → ask → allow, y un allow nunca abre una excepción dentro de un deny.
  - Un deny de Bash no atrapa el mismo programa llamado por ruta o dentro de `sh -c`. Para que la restricción aguante, la doc recomienda el sandbox.
  - `Read(./.env)` bloquea solo las herramientas de archivos, no un `cat` por Bash.

### Posts nuevos en X
- Worktrees y sesiones paralelas:
  - https://x.com/Ted3unty/status/2116904853385421277 (`claude --worktree`, `isolation: worktree` en subagentes)
  - https://x.com/PythonDvz/status/2113817879699390590 (sin worktrees, varias sesiones chocan en `index.lock`)
  - https://x.com/accnetworkAI/status/2110914941217845673 (el desktop permite sesiones paralelas, cada una en su worktree)
- Modelos por rol: https://x.com/Arindam_1729/status/2110121888458625043 (Sonnet construye, Haiku explora, Opus revisa)
- Hooks Stop y tests: https://x.com/0xVeyyro/status/2116953423320940659 y https://x.com/CryonixCrypto/status/2112291842196951366
- Plugins y marketplace: https://x.com/taytaycodes/status/2115543375978045880 (un marketplace es un repo git con `.claude-plugin/marketplace.json`). Advertencia sobre instalar plugins de terceros sin una capa de deny previa: https://x.com/agentnativedev/status/2107041819674513637
- Claude ↔ Codex: https://x.com/Cuiszt_Cui/status/2111639751925395666 (un solo AGENTS.md y un archivo de handoff para cambiar de herramienta). Contrapunto: https://x.com/world_0618/status/2109947422201786784 (abandonó su orquestador multiagente casero; el detalle está en el artículo).
- Windows/WSL:
  - https://x.com/Alaretos/status/2114753756151566391 (según la doc, el sandbox no está soportado en Windows nativo; en WSL sí)
  - https://x.com/KimNoel/status/2112577001563251175 (Claude Code en WSL manejado por Grok Bot)
- Errores comunes:
  - https://x.com/Voxyz_ai/status/2116998722106388796 (abrir Claude en la carpeta home le da acceso a todas las claves)
  - https://x.com/russano/status/2114039708250775704 (el sandbox por defecto lee ~/.ssh)

### Correcciones a los 5 cambios propuestos
1. **Hook guard, confirmado y corregido.** Debe llevar `onFailure: "block"` y `exit 2`, y el deny se mantiene como pared principal. Sintaxis exacta para `.claude/settings.json`:
```json
"hooks": {
  "PreToolUse": [
    { "matcher": "Bash|PowerShell",
      "hooks": [ { "type": "command", "command": "bash",
                   "args": ["${CLAUDE_PROJECT_DIR}/.claude/hooks/guard.sh"],
                   "onFailure": "block", "timeout": 10 } ] }
  ],
  "SessionStart": [
    { "matcher": "compact",
      "hooks": [ { "type": "command", "command": "cat",
                   "args": ["${CLAUDE_PROJECT_DIR}/docs/equipo-agentes/REGLAS-CRITICAS.md"] } ] }
  ]
}
```
   `guard.sh` lee el JSON de stdin con `jq -r '.tool_input.command'`. Si el comando coincide con `git push|gh pr merge|vercel|npm publish|rm -rf|\.env|\.ssh`, escribe el motivo en stderr y sale con `exit 2`. En cualquier otro caso, `exit 0`. Requiere `jq`. En Windows sin WSL hace falta una versión `.ps1`.
2. **Contexto, corregido.** No alcanza con sacar APRENDIZAJES: la doc confirma que los `@` cuentan entero. CLAUDE.md más lo importado debería quedar cerca de 200 líneas. Se puede mover APRENDIZAJES y las reglas por área a `.claude/rules/*.md` con `paths:`, o a un skill que /empezar cargue según el área.
3. **Permisos, corregido.**
   - `Read(~/.ssh/**)` y `Read(~/.aws/**)` sirven solo para las herramientas de archivos.
   - Para Bash, la doc recomienda el **sandbox** (en WSL o Linux; no existe en Windows nativo), con `~/.ssh` y `~/.aws` denegados y failIfUnavailable.
   - El deny `Bash(curl *)` no atrapa `sh -c` ni rutas absolutas.
4. **Codex en /cerrar, confirmado.** Además, conviene migrar los comandos a `.claude/skills/` (empezar, cerrar, auditar) para tener archivos de apoyo.
5. **Probar, confirmado.** La doc sugiere probar dejando el script ausente: con `onFailure: "block"`, `ls` debe bloquearse. Además, revisar `/hooks`.
6. **Nuevo.** Para sesiones paralelas: `claude --worktree` o `isolation: worktree` en los subagentes que escriben código (boss-code, onia-platform). Así no se pisan.

Nada de esto se aplicó a `.claude/` ni a CLAUDE.md: requiere aprobación de Sergio.
