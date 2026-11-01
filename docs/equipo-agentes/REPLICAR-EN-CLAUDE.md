# Replicar el equipo de agentes en Claude Code (tu laptop Windows)

Para: Sergio. Fecha: 2026-11-01. Escrito por: Analista (Claude Code).
Idea: lo que hoy hacen los bots de Grok Bot en el servidor, lo haces en tu laptop con **Claude Code**, y **Codex** revisa. Las reglas son las mismas: `AGENTS.md`, `COMO-TRABAJAR.md` y `APRENDIZAJES.md`.

Fuentes oficiales (revisadas el 1-nov-2026): [subagentes](https://code.claude.com/docs/en/sub-agents), [comandos y skills](https://code.claude.com/docs/en/slash-commands), [settings](https://code.claude.com/docs/en/settings), [permisos](https://code.claude.com/docs/en/permissions), [hooks](https://code.claude.com/docs/en/hooks), [memoria y CLAUDE.md](https://code.claude.com/docs/en/memory), [instalación](https://code.claude.com/docs/en/setup), [Codex CLI](https://learn.chatgpt.com/docs/codex/cli).

---

## 1. Qué pieza de Grok se vuelve qué en Claude Code

| En Grok Bot (servidor) | En Claude Code (laptop) | Dónde queda |
|---|---|---|
| Un bot por área (Pelau, ONIA Platform, Boss Code, Boss No-Code, Marketing) | Un **subagente** por área | `.claude/agents/<nombre>.md` |
| Analista (audita a pedido) | Subagente `analista` + comando `/auditar` | `.claude/agents/analista.md`, `.claude/commands/auditar.md` |
| Archivos de estado (`/workspace/estado/*.md`) | Los mismos archivos, ahora leídos directo del repo | `docs/equipo-agentes/*.md` |
| `APRENDIZAJES.md` + Bitácora | Igual; Claude Code lo carga solo desde `CLAUDE.md` | `docs/equipo-agentes/APRENDIZAJES.md` |
| Reglas en el prompt del bot | `CLAUDE.md` con `@imports` | `CLAUDE.md` (ya existe) |
| `onia-guard` (bloquea push, deploy, pago, publicar) | `permissions.deny` en settings (lo hace cumplir Claude Code, no el modelo) | `.claude/settings.json` |
| `onia-llm --motor claude --nivel X` | El `model:` de cada subagente (opus / sonnet / haiku) | frontmatter de cada agente |
| `onia-llm --motor codex` (revisión de otra familia) | `codex exec --sandbox read-only ...` por la terminal | dentro de cada agente y de `/cerrar` |
| Cola y `--fondo` | Subagentes en segundo plano (Claude Code los lanza solo) | — |
| "Al iniciar, lee estado y reporta lo pendiente" | Comando `/empezar <agente>` | `.claude/commands/empezar.md` |
| "Al cerrar, estado + Bitácora + commit local" | Comando `/cerrar <agente>` | `.claude/commands/cerrar.md` |

### Modelo de cada agente (de la tabla "Modelos por bot" de `COMO-TRABAJAR.md`)

| Subagente | Archivo de estado | Escribe | Revisa |
|---|---|---|---|
| `pelau` | `secretario.md` | Claude **haiku** (solo resume) | sin revisión |
| `onia-platform` | `platform.md` | Codex (`gpt-6-astra`) | Claude **sonnet** (el subagente) |
| `boss-code` | `producto.md` | Claude **opus** | Codex (`gpt-6.1-sol`) |
| `boss-no-code` | `negocio.md` | Claude **sonnet** | Codex (`gpt-6.1-sol`) |
| `marketing` | `marketing.md` | Claude **opus** | Codex (`gpt-6.1-sol`) |
| `analista` | `analista.md` | Claude **sonnet** (audita) | — |

---

## 2. Las piezas, una por una

### CLAUDE.md con @imports
El `CLAUDE.md` del repo ya trae las reglas así:
```
@AGENTS.md
@docs/equipo-agentes/COMO-TRABAJAR.md
@docs/equipo-agentes/APRENDIZAJES.md
```
Cada `@ruta` mete ese archivo en el contexto al empezar. Las rutas son relativas al `CLAUDE.md`, y un archivo importado puede importar otros hasta 4 niveles ([memoria](https://code.claude.com/docs/en/memory)). No hace falta cambiarlo. Ojo: cambiar `CLAUDE.md` o `AGENTS.md` lo aprueba siempre Sergio.

### Subagentes (`.claude/agents/`)
Cada archivo es Markdown con frontmatter: `name`, `description` (obligatorios), `tools` y `model` (`opus`, `sonnet`, `haiku` o `inherit`). El texto de abajo es su "manual". Se llaman así ([subagentes](https://code.claude.com/docs/en/sub-agents)):
- Escribiendo: "usa el subagente boss-code para …"
- Con `@agent-boss-code …` (seguro que corre ese)
- Toda la sesión como ese agente: `claude --agent boss-code`

Si creas la carpeta `agents` por primera vez, cierra y vuelve a abrir Claude Code.

### Comandos (`.claude/commands/`)
`/empezar <agente>`, `/cerrar <agente>` y `/auditar`. `$ARGUMENTS` se reemplaza por lo que escribes después del comando. Hoy Anthropic recomienda *skills* (`.claude/skills/<nombre>/SKILL.md`) para lo nuevo, pero `.claude/commands/` sigue funcionando igual ([comandos](https://code.claude.com/docs/en/slash-commands)).

### El guard: `settings.json` con `deny`
`permissions.deny` bloquea aunque el modelo "quiera": lo hace cumplir Claude Code ([permisos](https://code.claude.com/docs/en/permissions)). El archivo bloquea:
- subir commits al remoto (`git push`) y mergear PRs (`gh pr merge`);
- despliegues y publicación (`vercel`, `npm publish`), `ssh`, `scp`, `docker`;
- leer o editar `.env` y `.env.*` con las herramientas de archivos de Claude Code (Read y Edit): dentro del proyecto con `Read(**/.env*)` y `Edit(**/.env*)`, y en cualquier ruta absoluta del disco con `Read(//**/.env)`, `Read(//**/.env.*)`, `Edit(//**/.env)` y `Edit(//**/.env.*)` (`//` es la raíz del disco, según [permisos](https://code.claude.com/docs/en/permissions));
- el modo "saltar permisos" (`disableBypassPermissionsMode: "disable"`).

Cada regla va doble: `Bash(...)` para Git Bash y `PowerShell(...)` para la herramienta PowerShell de Windows.

**Por qué no hay hook (por ahora).** Un hook PreToolUse en Windows corre en Git Bash si está instalado y, si no, en PowerShell ([hooks](https://code.claude.com/docs/en/hooks)): el mismo script no sirve para las dos. El `deny` funciona igual en ambos casos, así que va solo `deny`. Si más adelante quieres un hook, el formato oficial para Windows es `"command": "powershell.exe", "args": ["-NoProfile","-ExecutionPolicy","Bypass","-File","${CLAUDE_PROJECT_DIR}/.claude/hooks/guard.ps1"]`, con `"matcher": "Bash|PowerShell"`.

**Límite honesto.** Las reglas `Read(...)` y `Edit(...)` frenan solo las herramientas de archivos de Claude Code. No frenan que un comando de la terminal lea el archivo (por ejemplo `cat .env` o `Get-Content .env`), ni a otro programa, ni a Codex. Para eso queda la regla 9 de `COMO-TRABAJAR.md` (no leer `.env`) y, si hace falta un bloqueo de verdad, el sandbox de Claude Code ([permisos](https://code.claude.com/docs/en/permissions)), que se decide aparte. Una regla de `Bash(...)` o `PowerShell(...)` mira el texto del comando. Frena `git push` y también `cd x && git push`, pero no variantes raras como `git -C . push` ([permisos, "what a Bash rule doesn't match"](https://code.claude.com/docs/en/permissions)). La barrera real está en GitHub: proteger `main` para que solo cambie por PR.

### Codex como revisor (`codex exec`)
Codex revisa en solo lectura, sin cambiar nada:
```
codex exec -m gpt-6.1-sol --sandbox read-only -C . "Revisa el diff de la rama actual. Solo errores que importan. Termina con 'Veredicto: aprobar' o 'Veredicto: cambios'."
```
Es el mismo formato que usa `onia-llm` en el servidor (`codex exec -m <modelo> --sandbox read-only -C <carpeta>`). Para que Codex escriba código (área ONIA Platform), `--sandbox workspace-write` y siempre en una rama.

---

## 3. Flujo de cada sesión

1. **Traer lo último:** `/empezar boss-code` (hace `git pull --ff-only`).
2. **Leer estado:** el comando lee `ESTADO-ACTUAL.md`, el archivo del agente y la Bitácora.
3. **Trabajar:** un objetivo por sesión, con su "hecho cuando".
4. **Cerrar con `/cerrar boss-code`**, que hace en este orden:
   1. actualiza el archivo de estado del agente: qué se hizo, dónde, qué decides tú;
   2. agrega la línea en la Bitácora si algo falló o te corrigió: `AAAA-MM-DD · agente · qué pasó · regla nueva`;
   3. revisión cruzada (Claude escribe y Codex revisa, o al revés) sobre todo eso, máximo 2 vueltas;
   4. deja el veredicto escrito en el archivo de estado;
   5. commit local. Nada se sube al remoto sin tu sí.

## 4. Regla: el repo se trabaja en un solo lugar a la vez

**Nunca trabajes ONIA-CENTRAL a la vez en la laptop y en el servidor.** Git no junta solo dos lugares que cambiaron lo mismo (ver "Git y GitHub" en `APRENDIZAJES.md`), y los archivos de estado se pisan.

El problema: el servidor hace commits **locales** y no los sube. Si no se suben, tu laptop nunca los ve con `git pull`. Por eso cambiar de lugar es un "turno":
1. Donde estabas trabajando: todo commiteado, `git status` limpio.
2. Esos commits se suben a una rama en GitHub (eso necesita **tu sí**).
3. En el otro lugar: `git pull` de esa rama y recién ahí empiezas.

---

## 5. Instalación en tu laptop Windows (pasos cortos)

1. **Git para Windows:** descárgalo de <https://git-scm.com/downloads/win> e instálalo con las opciones por defecto. Te da Git Bash, que usa Claude Code.
2. **Claude Code:** abre PowerShell (menú Inicio) y pega:
   `irm https://claude.ai/install.ps1 | iex`
3. **Comprobar:** abre una PowerShell nueva y corre `claude --version` (debe mostrar un número) y `claude doctor`.
4. **Entrar:** corre `claude` y sigue el navegador para entrar con tu cuenta (Pro o Max; la gratis no incluye Claude Code).
5. **Codex CLI:** instálalo desde la [página oficial de Codex CLI](https://learn.chatgpt.com/docs/codex/cli), pestaña Windows. Después corre `codex` y elige "Sign in with ChatGPT".
6. **Clonar el repo:** `git clone https://github.com/oninteligenciaartificial/ONIA-CENTRAL.git C:\dev\proyectos\ONIA-CENTRAL`
7. **Revisar la config de Claude Code:** ya está en `.claude/` (`agents/`, `commands/`, `settings.json`), ver punto 6 abajo. Si al clonar no aparece `.claude/` (porque todavía no entró al repo), cópiala del respaldo:
   ```powershell
   cd C:\dev\proyectos\ONIA-CENTRAL
   New-Item -ItemType Directory -Force .claude | Out-Null
   Copy-Item -Recurse -Force docs\equipo-agentes\claude-config\* .claude\
   ```
8. **Abrir:** en esa carpeta corre `claude`, acepta "confiar en la carpeta", y prueba `/empezar pelau`.
9. **Comprobar el guard:** pídele "muéstrame el `.env`" y "haz git push": los dos tienen que salir bloqueados. Revisa con `/status` que cargó "Project settings".

Los pasos 1, 2, 4, 5 y 6 los haces tú (logins y tu PowerShell). Los comandos de PowerShell de esta guía no se probaron en el PowerShell 5.1 de tu PC: el paso 7 conviene revisarlo antes con `[System.Management.Automation.Language.Parser]::ParseInput`, como pide `APRENDIZAJES.md`.

## 6. Dónde está la config: `.claude/` y su respaldo

Claude Code busca la config en `.claude/` (`agents/`, `commands/`, `settings.json`). **`docs/equipo-agentes/claude-config/` es una copia idéntica de `.claude/`**, archivo por archivo: no se edita una sola de las dos. Si cambias algo en una, copias a la otra en el mismo cambio y lo compruebas con `diff -r docs/equipo-agentes/claude-config .claude` (no tiene que mostrar nada).

Ojo: `.claude/` todavía no está commiteada. Commitear `.claude/settings.json` en el repo cambia permisos: según `AGENTS.md`, eso lo apruebas tú. Hasta entonces, en la laptop puede que tengas que copiarla del respaldo (paso 7).

## 7. Qué no viaja a la laptop

Solo existe lo que está en ONIA-CENTRAL. Muchas rutas que nombran los archivos de estado viven en el servidor (`/workspace/manuales/`, `/workspace/ventas/`, `/workspace/marca/`, `/workspace/platform/`, colas de `onia-llm`). En la laptop no están. Falta decidir qué entra al repo (sin datos de clientes ni secretos) y qué se queda en el servidor.

---

## 8. Cuentas, claves y computadoras

Aquí van **solo dónde viven las cosas y cómo se usan**. Nunca un valor de un secreto. Ningún agente abre esos archivos para leerlos: los usa el programa al que pertenecen.

### 8.1 La regla (resumen de [`docs/credenciales.md`](../credenciales.md))

- **El original de cada secreto está en la bóveda.** Hoy la bóveda oficial es KeePassXC en `C:\Users\PC\BovedaPrivada\Agentes.kdbx`, fuera de Git. Solo tú sabes la contraseña maestra y ningún agente la abre.
- **Cada agente tiene solo los secretos que usa**, en su lugar oficial (tabla de abajo). Los cargas tú, copiando de la bóveda y pegando en el campo oculto del agente.
- **Un secreto nunca va** en el chat, un log, un commit, un comando, el historial de PowerShell ni una variable de entorno de Windows.
- **Si falta un login o una clave,** el agente te dice cuál falta y dónde se carga, y sigue con lo demás. Nunca te pide la clave por chat.
- **Estar logueado no da permisos nuevos:** publicar, mandar mensajes, pagar o tocar producción sigue necesitando tu sí.
- **Si un secreto se filtra:** se cambia en el proveedor, se revoca el viejo, se actualiza la bóveda y cada agente que lo tenga. Borrarlo del commit no alcanza.

### 8.2 Qué hay hoy en el servidor (verificado el 1-nov-2026, sin leer contenidos)

| Pieza | Dónde vive | Para qué |
|---|---|---|
| Claude Code (logueado) | `~/.claude/.credentials.json` (login) y `~/.claude.json` (config de usuario, MCP) | entra con la suscripción, sin clave de API |
| Config de Claude Code | `~/.claude/settings.json` | permisos y ajustes de usuario |
| Codex (logueado) | `~/.codex/auth.json` (login) y `~/.codex/config.toml` (config) | entra con ChatGPT |
| GitHub CLI | `~/.config/gh/hosts.yml`, logueado como `oninteligenciaartificial` | PRs, issues |
| Git → GitHub | credential helper `gh auth git-credential` (puesto con `gh auth setup-git`) | git usa el login de `gh`, sin guardar otra clave |
| onia-llm | `~/.local/bin/onia-llm`; uso en `~/.local/state/onia-llm/uso.jsonl`, logs diarios y carpeta `trabajos/` en ese mismo lugar | manda trabajo a Claude o Codex |
| onia-guard | revisión **dentro de** onia-llm | bloquea los encargos con acciones prohibidas (subir al remoto, publicar, pagar, enviar…) si no tienen tu aprobación |

La cuenta de GitHub es compartida: por eso tus aprobaciones se citan con tus palabras en el PR.

### 8.3 Lo que hace Grok Bot y no se copia igual

| Grok Bot hace… | En Claude Code se reemplaza con… | Ojo |
|---|---|---|
| **Bóveda propia** con logins y tarjetas | Tu gestor de contraseñas. Hoy la regla es KeePassXC (8.1). Si quieres algo que se conecte solo, las opciones son **Bitwarden** o **1Password** | Cambiar de gestor cambia la regla de `credenciales.md`: lo decides tú. Tarjetas no se cargan en ningún agente (es gasto). |
| **Navegador con sesiones guardadas** en el servidor | **Claude in Chrome** (usa tu Chrome con tus sesiones; se activa con `claude --chrome` o `/chrome`) o **Playwright MCP** (un navegador aparte que maneja Claude) | Los logins, códigos de verificación y consentimientos los haces tú en tu pantalla. Mejor un perfil de Chrome solo con cuentas de trabajo. |
| **Conectores** (Gmail, Drive, Calendar, GitHub, Meta, TikTok, X, Higgsfield) | **Servidores MCP**, con `claude mcp add` o un archivo `.mcp.json` ([MCP en Claude Code](https://code.claude.com/docs/en/mcp)). Si entras con tu cuenta de Claude, los conectores que tengas en claude.ai también aparecen en Claude Code | Primero el login OAuth del conector desde `/mcp`. Si solo acepta un token fijo: `claude mcp add --scope user …` (queda en tu `~/.claude.json`, fuera del repo). **Nunca** tokens en un `.mcp.json` del repo. Higgsfield cobra por generación: siempre con tu sí. |
| **Control de tu PC** con comandos que tú apruebas | **Claude Code corre directo en tu PC.** Te pide aprobación según los permisos de `.claude/settings.json` (lo de `deny` queda bloqueado siempre) | No uses el modo "saltar permisos": está apagado en `settings.json`. |

Sobre variables de entorno y el **Administrador de credenciales de Windows**: `.mcp.json` acepta `${NOMBRE}` para leer un valor del entorno, pero `credenciales.md` prohíbe secretos en variables de Windows (cualquier programa las lee, también la terminal de Claude y Codex). Usar el Administrador de credenciales de Windows como fuente sería una regla nueva: si lo quieres, se decide aparte. Mientras tanto: OAuth, o `--scope user`.

Instalar un MCP de afuera (Playwright, Meta, TikTok, X…) es "herramienta que viene de afuera": pide tu OK antes.

### 8.4 Pasos en tu laptop Windows

Todo en una PowerShell abierta desde el menú Inicio. Son logins: los haces tú.

1. **Claude Code:** corre `claude` y entra con tu cuenta en el navegador. Comprueba con `/status` que dice tu cuenta.
2. **Codex:** corre `codex login` y elige "Sign in with ChatGPT". Comprueba con `codex login status`.
3. **GitHub CLI:** si no lo tienes, instálalo desde <https://cli.github.com> (pide tu OK, es de afuera). Corre `gh auth login` → GitHub.com → HTTPS → "Login with a web browser".
4. **Git con el login de gh:** corre `gh auth setup-git`. Comprueba con `gh auth status`.
5. **Conectores:** en Claude Code escribe `/mcp`, elige el conector y entra con su login (OAuth). Si uno solo acepta token, cópialo de la bóveda y cárgalo con `claude mcp add --scope user`, siguiendo el paso 3 de "Cómo se carga un secreto" de `credenciales.md` (con `Read-Host -AsSecureString`, para que no quede en el historial).
6. **Navegador:** para Claude in Chrome, instala la extensión oficial (pide tu OK) y en Claude Code corre `/chrome`. Haz tú los logins de cada sitio.
7. **Comprobar el guard:** pídele a Claude "muéstrame el `.env`" y que suba la rama al remoto: los dos tienen que salir bloqueados.
8. **Limpiar:** borra del historial del portapapeles (Win+V) lo que hayas copiado fuera de KeePassXC.

onia-llm y onia-guard **no están en la laptop**: viven en el servidor. En la laptop, el bloqueo lo hace `permissions.deny` de `.claude/settings.json`, y la revisión de Codex se lanza con `codex exec` (punto 2).

Los comandos de esta sección no se probaron en el PowerShell 5.1 de tu PC: son logins y no se pueden probar desde aquí.

---

## 9. Cómo verificar que todo funciona

Es el checklist del Analista. Lo corre `/auditar` (o tú, a mano), siempre en el mismo orden, para que dos auditorías se puedan comparar. Todo es **solo lectura**: lo único que se escribe está en el paso 10, y solo en `analista.md` y la Bitácora. Ningún paso abre `.env`, `.credentials.json`, `auth.json`, `hosts.yml` ni la bóveda.

### 9.0 Preparar (una vez)

En tu laptop, en una PowerShell abierta desde el menú Inicio (instalar algo pide tu OK, como dice `AGENTS.md`):
```powershell
winget install --id jqlang.jq -e
winget install --id BurntSushi.ripgrep.MSVC -e
```
Cierra y abre **Git Bash** y comprueba con `jq --version` y `rg --version`. Los comandos de abajo son para Git Bash (en el servidor funcionan igual).

Variables que usan los pasos (cámbialas en cada auditoría):
```bash
cd /c/dev/proyectos/ONIA-CENTRAL          # en el servidor: cd /workspace/ONIA-CENTRAL
DESDE=2026-11-01                          # desde qué día se audita
U=~/.local/state/onia-llm/uso.jsonl       # solo existe en el servidor
ls ~/.claude/projects/                    # busca la carpeta de este repo
P=~/.claude/projects/C--dev-proyectos-ONIA-CENTRAL   # en el servidor: -workspace-ONIA-CENTRAL
```

### 9.1 Leer lo que hizo cada bot (sesiones)

Cada sesión de Claude Code queda en un archivo `.jsonl` dentro de `$P` (los subagentes, en subcarpetas).
```bash
ls -lt "$P"/*.jsonl | head                              # sesiones más nuevas primero
claude --resume                                          # elegir una y leerla en pantalla
# qué modelo respondió en cada sesión (sale el model: de cada subagente)
for f in $(find "$P" -name '*.jsonl' -newermt "$DESDE"); do
  echo "== $f"; jq -r 'select(.type=="assistant") | .message.model // empty' "$f" | sort | uniq -c
done
# qué comandos corrió una sesión
jq -r 'select(.type=="assistant") | .message.content[]? | select(.type=="tool_use") | "\(.name): \(.input.command // .input.file_path // "")"' ARCHIVO.jsonl
```
Codex guarda sus sesiones en `~/.codex/sessions/AAAA/MM/DD/*.jsonl`; se leen igual, con `ls -lt` y `rg`.

### 9.2 ¿Usó Claude o Codex, con el modelo de su tabla? (servidor: `uso.jsonl`)

Cada línea de `uso.jsonl` es una llamada de `onia-llm`: `ts`, `agente`, `motor`, `nivel`, `modelo`, `tarea`, `exit_code`, `tokens`, `costo_usd`, `trabajo`.

Resumen por agente (llamadas, motores, modelos, costo, tokens de salida, fallidas):
```bash
jq -s --arg d "$DESDE" 'map(select(.ts>=$d)) | group_by(.agente) | map({agente:.[0].agente, llamadas:length, motores:(map(.motor)|unique), modelos:(map(.modelo//"sin-dato")|unique), costo_usd:((map(.costo_usd//0)|add)*100|round/100), tokens_salida:(map(.tokens.output_tokens//0)|add), fallidas:(map(select(.exit_code!=0))|length)})' "$U"
```

Modelo contra la tabla "Modelos por bot" de `COMO-TRABAJAR.md` (sale `ok`, `FUERA-DE-TABLA`, `SIN-DATO` o `SIN-TABLA`):
```bash
jq -r --arg d "$DESDE" '
def bot: (.agente|ascii_downcase|gsub("[ _]";"-")) as $a
  | if   ($a|test("platform")) then "onia-platform"
    elif ($a|test("producto|boss-code")) then "boss-code"
    elif ($a|test("negocio|no-code")) then "boss-no-code"
    elif ($a|test("marketing")) then "marketing"
    elif ($a|test("pelau|secretario")) then "pelau"
    else "otro:" + .agente end;
{"onia-platform":["gpt-6-astra","claude-sonnet-5-5"],
 "boss-code":["claude-opus-5-5","gpt-6.1-sol"],
 "boss-no-code":["claude-sonnet-5-5","gpt-6.1-sol"],
 "marketing":["claude-opus-5-5","gpt-6.1-sol"],
 "pelau":["claude-haiku-5-5"]} as $ok
| select(.ts >= $d) | bot as $b
| ((.modelo // "sin-dato") | split(",")[0]) as $m
| (if ($ok[$b] == null) then "SIN-TABLA" elif $m == "sin-dato" then "SIN-DATO"
   elif any($ok[$b][]; . == $m) then "ok" else "FUERA-DE-TABLA" end) as $e
| [$e, .ts[0:16], $b, .motor, $m, (.nivel // "-"), (.tarea[0:40])] | @tsv' "$U"
```
Cómo leerlo:
- `FUERA-DE-TABLA` es falla, salvo **una** subida a pesado después de que el revisor rechazó, o Opus para una decisión grande de arquitectura en ONIA Platform. Lo confirmas en el resumen del trabajo (9.3).
- `SIN-DATO`: Codex no informó el modelo; míralo con `onia-llm ver <trabajo>`.
- `SIN-TABLA`: agente que no está en la tabla (Analista, Operaciones, pruebas). `desconocido` es falla: faltó `--agente`.
- **Revisión cruzada:** en una tarea que no es de Pelau tiene que haber un `claude` y un `codex`. Si en el resumen un agente tiene un solo motor, no hubo revisión de otra familia.

Máximo 2 rondas (escribir + revisar dos veces son unas 4 llamadas con la misma `tarea`). Muestra las que pasan de 4:
```bash
jq -s --arg d "$DESDE" 'map(select(.ts>=$d)) | group_by([.agente,.tarea]) | map(select(length>4)) | map({agente:.[0].agente, tarea:.[0].tarea[0:60], llamadas:length})' "$U"
```
Es una cuenta aproximada: si dos tareas distintas tienen el mismo texto en `tarea`, se juntan.

**En tu laptop no hay `uso.jsonl`:** Claude y Codex se usan directo, sin `onia-llm`. Ahí miras:
- el modelo, con el bucle de 9.1 sobre las sesiones;
- en Claude Code, `/usage` (cuánto del límite de tu plan usaste) y `/cost` (costo y tokens de la sesión; sirve sobre todo si usas clave de API);
- en Codex, `/status` dentro de `codex` (modelo y límites);
- **ccusage** (lee `~/.claude/projects` y suma tokens y costo por día: `npx ccusage@latest daily`). Es una herramienta de afuera, no de Anthropic: correrla pide tu OK.

### 9.3 Trabajos de `onia-llm` (servidor)

```bash
onia-llm trabajos <agente>               # terminados, en curso y fallidos de ese agente
onia-llm ver <id>                        # resumen y salida de un trabajo
onia-llm cola estado <agente>            # cola: pendiente, en-curso, hecho, error
ls -lt /workspace/onia-cola/*/error/ 2>/dev/null | head
rg -il 'onia-guard|bloquead' /workspace/onia-cola/*/error/ 2>/dev/null
jq -r --arg d "$DESDE" 'select(.ts>=$d and (.agente=="desconocido" or .exit_code!=0)) | [.ts[0:16], .agente, .exit_code, (.trabajo//"-"), .tarea[0:50]] | @tsv' "$U"
```
Buscas:
- trabajos **terminados que nadie le reportó a Sergio** (están en `hecho/` y no aparecen en el archivo de estado del bot);
- trabajos **fallidos** y si alguien los volvió a lanzar;
- **bloqueos del guard**: ¿se reformuló sin la palabra (bien) o se esquivó una acción prohibida de verdad (falla)?;
- `--agente` **inválido o faltante** (`desconocido`, o el error "especifica --agente").

### 9.4 ¿Cada bot se quedó en su área?

Áreas: ONIA Platform → `platform.md` y el repo `onia-platform`; Boss Code → `producto.md`; Boss No-Code → `negocio.md`; Marketing → `marketing.md`; Pelau → `secretario.md` (solo lee). La tabla está en "Protocolo" de `COMO-TRABAJAR.md`.
```bash
git log --since="$DESDE" --name-only --format='--- %h %an %s'      # qué archivos tocó cada commit
jq -r --arg d "$DESDE" 'select(.ts>=$d) | "\(.agente)\t\(.dir)"' "$U" | sort | uniq -c   # en qué carpeta trabajó cada agente
```
Falla: un bot que cambió el archivo de estado de otro, trabajó en la carpeta de otra área, o le mandó mensajes a otro bot (en las sesiones de 9.1, `SendToAgent` de un bot).

### 9.5 ¿Puso al día su archivo de estado?

```bash
for a in platform producto negocio marketing secretario; do
  echo "== $a.md"; git log -3 --format='%h %cI %an %s' -- docs/equipo-agentes/$a.md
done
```
Lo compara con 9.2 y 9.3: si el bot tuvo trabajos ese día y su archivo no cambió, es falla. `git log --since` puede contar mal ("Git y GitHub" en `APRENDIZAJES.md`): mira la fecha de cada commit (`%cI`).

### 9.6 ¿Dejó su línea en la Bitácora?

```bash
rg -n "^- $DESDE" docs/equipo-agentes/APRENDIZAJES.md
```
Si en 9.2 o 9.3 hubo algo fallido, bloqueado o corregido por Sergio, tiene que haber una línea `AAAA-MM-DD · bot · qué pasó · regla nueva` de ese bot.

### 9.7 Commits y subidas al remoto

```bash
git status --short                                   # tiene que salir vacío
git log --branches --not --remotes --format='%h %cI %an %s'   # commits locales sin subir (lo normal)
for r in $(git for-each-ref --format='%(refname)' refs/remotes); do
  git reflog show --date=iso "$r" 2>/dev/null | rg 'update by push' | sed "s|^|$r |"
done                                                 # cada subida hecha desde esta copia
gh pr list --state all --limit 20 --json number,title,headRefName,createdAt   # PRs (solo mira)
rg -l 'git push|gh pr merge' "$P" 2>/dev/null        # sesiones que intentaron subir o mergear
```
Cada subida que aparezca necesita el sí de Sergio citado con sus palabras en un comentario del PR. Si no está, es falla grave. Si un bot cerró sin commitear (`git status` con cambios), también.

Ojo: si pasas este checklist como encargo a `onia-llm`, onia-guard puede frenar las palabras de los comandos (ver 1.5 de `APRENDIZAJES.md`). Estos comandos se corren en la terminal, no dentro de un encargo.

### 9.8 Buscar secretos en lo que cambió

Muestra **dónde** hay algo sospechoso, con el valor tapado (`-r '[OCULTO]'`), para que el secreto no termine en el chat:
```bash
PAT='sk-[A-Za-z0-9_-]{20,}|ghp_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{20,}|AKIA[0-9A-Z]{16}|xox[abprs]-[A-Za-z0-9-]{10,}|AIza[0-9A-Za-z_-]{30,}|EAA[A-Za-z0-9]{30,}|-----BEGIN [A-Z ]*PRIVATE KEY|(api[_-]?key|secret|token|password|contraseña)["'"'"' ]*[:=] *["'"'"']?[^ "'"'"']{8,}'
git diff main...HEAD | rg -n -i -r '[OCULTO]' "$PAT"     # lo commiteado en la rama
git diff HEAD        | rg -n -i -r '[OCULTO]' "$PAT"     # lo que falta commitear
git ls-files --others --exclude-standard | rg -i '\.env|\.pem$|\.key$|credential|auth\.json'   # archivos nuevos peligrosos
```
Si sale algo: no se copia el valor a ningún lado. Se avisa a Sergio con archivo y línea, y él lo cambia en el proveedor y revoca el viejo (sección 6 de `APRENDIZAJES.md`).

### 9.9 ¿Cerró bien con Sergio?

```bash
jq -r 'select(.type=="assistant") | .message.content[]? | select(.type=="text") | .text' ARCHIVO.jsonl | tail -n 25
```
El último mensaje de cada bot tiene que tener: **qué se hizo**, **dónde quedó** (ruta) y **1-2 próximos pasos que terminan en pregunta** ("¿sigo con X?"). Falla si cierra solo con "listo" o "ya está en marcha" (ver "Proactividad" en `COMO-TRABAJAR.md`).

### 9.10 Guardar lo que se encontró

1. Tabla por bot con los pasos 9.1 a 9.9: `ok` o `falla`, con evidencia (ruta, hash de commit o id de trabajo). Nunca con el valor de un secreto ni datos de clientes.
2. Cada falla que vale para todos va como **lección general** en la Bitácora de `APRENDIZAJES.md`: `AAAA-MM-DD · Analista · qué pasó · regla nueva`. Si se repite por segunda vez, se propone pasarla a manual, test o guard.
3. El resultado completo, en `analista.md`. El Analista **solo escribe `analista.md` y la Bitácora de `APRENDIZAJES.md`**; nunca el archivo de estado de otro bot.
4. La parte de cada bot queda en `analista.md`, en una sección "para <bot>" (por ejemplo "para Marketing"): qué falló y qué tiene que corregir. Cada bot la lee al empezar su sesión y la pasa a su propio archivo de estado (`platform.md`, `producto.md`, `negocio.md`, `marketing.md`, `secretario.md`).
5. Commit local con la identidad del Analista (lección 1.6 de `APRENDIZAJES.md`). Nada se sube al remoto sin el sí de Sergio.
