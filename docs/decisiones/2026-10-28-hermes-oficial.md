# Hermes oficial: dónde se abre, dónde se maneja y cómo queda uno solo

28-oct-2026. Sale de dos trabajos:
- una investigación con 3 agentes y 3 verificadores, contra la fuente oficial: el repo `NousResearch/hermes-agent` en el tag v0.22.5 y `hermes-agent.nousresearch.com/docs`;
- un inventario de la PC hecho solo con metadatos.

Después lo revisaron 3 agentes más, con un verificador para cada uno. No se usó el repo viejo como fuente.

## Versión

La última estable es la v0.22.5, del 22-oct-2026. Solo la v0.22.3 sumó unos 620 cambios, y la v0.22.5 otros 81.

Desde el 28-oct en la PC está la v0.22.5, instalada limpia (commit `bf0203a`). La v0.22.2 vieja quedó apartada (ver al final).

**Fuente para manejarlo:** la documentación oficial de la versión instalada viene con la instalación, en `%LOCALAPPDATA%\hermes\hermes-agent\website\docs`. Se usa el flujo oficial de Hermes (sus comandos, sus asistentes y lo que la documentación indica editar a mano), sin scripts propios alrededor.

## Quién hace qué

**Todo lo que escribe en `%LOCALAPPDATA%\hermes` lo corre Sergio Urcullo, en una PowerShell abierta desde el menú Inicio.** Eso incluye:
- instalar y actualizar;
- `hermes setup`, `config`, `model`, `auth` y `skills`;
- editar `config.yaml`, `SOUL.md` o `.env`;
- usar `hermes`.

La app de Claude manda a una carpeta propia lo que sus procesos escriben en `AppData`. Se comprobó el 28-oct con un archivo de prueba. Lo que se escriba desde una sesión de Claude queda escondido ahí: así nació la copia `hermes-copia-vieja-20261026`. Desde Claude se preparan los comandos y se lee el resultado.

## Dónde vive

- En Windows nativo, casi todo va a una sola carpeta, `%LOCALAPPDATA%\hermes`:
  - el código, en `hermes-agent\`;
  - los lanzadores, en `bin\`, que se suma al PATH del usuario;
  - las herramientas, en `tools\`;
  - los entornos de Python, en `installs\`;
  - los datos: `config.yaml`, `.env`, `auth.json`, `SOUL.md`, `memories\`, `skills\`, `cron\`, `sessions\` y `logs\`.
- Quedan afuera:
  - lo de la app de escritorio, en `%APPDATA%\hermes`;
  - los bloqueos del gateway, en `%USERPROFILE%\.local\state\hermes`;
  - según el código, el Python de arranque y la caché de uv, en la carpeta por defecto de uv. Esto no está confirmado.
- **Puede aparecer una segunda instalación** por WSL (`~/.hermes`), por las variables `HERMES_HOME`, `HERMES_DATA_DIR_SUFFIX` o `HERMES_RUNTIME_DIR`, por perfiles, o por la app de escritorio instalada con MSIX o desde la Store.
- **Hay una sola si:**
  - todas las entradas de `Get-Command hermes -All` están en `%LOCALAPPDATA%\hermes\bin`, donde la v0.22.5 deja `hermes.exe` y `hermes-acp.exe`;
  - `HERMES_HOME`, `HERMES_DATA_DIR_SUFFIX` y `HERMES_RUNTIME_DIR` no están definidas, ni para el usuario ni para la máquina;
  - `hermes profile list` muestra solo `default`, y no hay un `%LOCALAPPDATA%\hermes\active_profile` que apunte a otro;
  - `schtasks /Query /TN Hermes_Gateway` encuentra la tarea solo si se instaló a propósito.
- **WSL no se ve con esas pruebas.** Lo revisa Sergio Urcullo con este comando, que arranca la máquina virtual:

  ```powershell
  wsl -d Ubuntu -- sh -lc 'ls -d ~/.hermes ~/.local/bin/hermes 2>/dev/null; command -v hermes'
  ```

## Dónde se abre

**Para trabajar, siempre desde ONIA-CENTRAL:**

```powershell
Set-Location C:\dev\proyectos\ONIA-CENTRAL; hermes --tui
```

O, desde cualquier carpeta, `hermes --tui --in C:\dev\proyectos\ONIA-CENTRAL`. El TUI y la versión clásica trabajan en la carpeta desde donde se abren e ignoran `terminal.cwd`; abierto desde `C:\Users\PC`, Hermes no tiene el `AGENTS.md`.

Para trabajar se usa `--tui`. Es la vista que recomiendan los docs y la única que tiene todos los comandos de barra; la clásica (`hermes` a secas o `hermes chat`) acepta solo unos pocos. Todas las formas levantan el mismo gateway en segundo plano, que se apaga solo a los 10 minutos sin uso. `hermes -z` no se usa: aprueba por su cuenta todos los comandos peligrosos, porque nadie lo atiende.

Hay cuatro formas, y comparten configuración, sesiones, skills y memoria:

- **`hermes --tui`** en la terminal. Es la que recomiendan los docs para trabajar en terminal; `hermes` a secas abre la versión clásica.
- **La app de escritorio,** que se abre con `hermes desktop` y usa la misma configuración.
  - La guía rápida recomienda bajar su instalador para Windows, pero acá no se usa. El MSIX y la versión de la Store son otra instalación y suman al PATH sus propios `hermes`, `hermes-agent` y `hermes-acp`.
  - `Hermes-Setup.exe` tampoco se usa.
- **El panel web:** `hermes dashboard`, en `http://127.0.0.1:9119`.
- **Telegram,** a través del gateway.

Desde la v0.22.3 todas hablan con un único proceso, el gateway:
- Si no está instalado como tarea, `hermes` o `hermes --tui` lo levantan solos, y se apaga a los 10 minutos sin uso (`gateway.unmanaged_idle_exit_seconds`, 600 por defecto).
- Según su documentación, el que levanta la app de escritorio sigue corriendo después de cerrarla y no se apaga solo. Se para con `hermes gateway stop`.

## Dónde se maneja

- **Comandos:** `hermes config`, `model`, `auth`, `skills`, `memory`, `cron`, `gateway`, `logs`, `doctor`, `status` y `profile`. El panel web y la app de escritorio tienen las mismas opciones en pantalla.
- **Telegram:**
  - Se configura con `hermes gateway setup`.
  - `hermes gateway install` lo deja arrancando al iniciar sesión, con la tarea programada `Hermes_Gateway`; `hermes gateway uninstall` lo saca.
  - Con la PC apagada no responde. Al volver descarta lo que llegó mientras tanto, salvo que se configure `platforms.telegram.extra.drop_pending_on_cold_boot: false`.
- **Tareas programadas (`cron`):** corren solo mientras el gateway está prendido. Cada una necesita `--workdir` para cargar el contexto de ONIA-CENTRAL.
- **Contexto:**
  - Hermes carga un solo archivo de proyecto, el primero que encuentra: `.hermes.md`, `AGENTS.md` o `CLAUDE.md`. Abierto desde ONIA-CENTRAL, lee este `AGENTS.md` y deja tapado el `CLAUDE.md`. Se comprobó el 28-oct.
  - No hay que crear `.hermes.md`, `HERMES.md` ni `AGENTS.override.md` en ONIA-CENTRAL, porque taparían al `AGENTS.md`.
  - El `SOUL.md` sale de su carpeta. Se edita a mano y se guarda como texto plano UTF-8. Ojo: el Notepad de Windows 11, en modo Markdown "Formatted", agrega `\` antes de los guiones; hay que guardarlo en modo "Syntax".
  - El `SOUL.md` del 28-oct dice esto:

    ```
    Sos Hermes, el agente de ONIA. Trabajás para Sergio Urcullo.

    - Empezá cada respuesta con "Sergio Urcullo,". Es el canario: si dejás de hacerlo, perdiste estas reglas y hay que cambiar de sesión.
    - Hablale en español, con voseo, corto y en prosa normal.
    - Antes de decir "listo", comprobalo. Si algo falló o no lo pudiste verificar, decilo así.
    - Nunca muestres ni escribas un secreto (claves, tokens, contraseñas, cookies) en el chat, un archivo, un commit o un log.
    - Cuando lances a Claude Code o a Codex, decí qué les pediste y en qué carpeta, y revisá lo que devuelven antes de darlo por bueno.
    - Cerrá cada respuesta con un bloque corto, "Para aprender": un concepto o un ejercicio sobre lo que hiciste.
    ```

    El canario también está en el `CLAUDE.md` global de Claude Code y en el `AGENTS.md` global de Codex.
  - Los cambios en `SOUL.md` y `AGENTS.md` valen para las sesiones nuevas, no para la que está abierta. Los cambios en `approvals` (`mode`, `deny`, `command_allowlist`) valen al instante, también en la sesión abierta.
  - Para Telegram, la carpeta de trabajo se fija con `terminal.cwd`. Sin esa clave, el lanzador de Windows trabaja desde la carpeta de Hermes y no carga el contexto.
- **Claude Code y Codex:**
  - Hermes los llama con `claude -p` y `codex exec`, mediante sus skills de fábrica `claude-code` y `codex`. Cada uno usa su propio login. Esas dos skills le enseñan a Hermes a lanzarlos; no son skills de ONIA para Claude ni para Codex ([#10](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/10)).
  - Hermes corre los comandos con Git Bash, no con PowerShell.
  - **Probado el 28-oct en ONIA-CENTRAL.** Hermes lanzó `claude -p` con `--allowedTools Read` y `--max-turns 3`, y `codex exec --sandbox read-only`. Los dos terminaron con código 0.
  - Codex corrió en segundo plano. En la v0.22.5, la terminal de Hermes rechaza `pty=true` sin `background=true`, y Hermes lo resolvió solo.
  - Después de que Codex usó su login, el login propio de Hermes siguió válido.
  - El modo interactivo de la skill `claude-code` necesita tmux, que no existe en Windows nativo. Queda el modo print (`claude -p`).

## Para instalarlo limpio

- **Comando oficial**, en PowerShell y sin admin: `iex (irm https://hermes-agent.nousresearch.com/install.ps1)`.
  - Descarga su propio uv y su propio Git, y después Python 3.14, Node, ripgrep, FFmpeg, un Chromium y el controlador de uso de la computadora.
  - `-SkipBrowser` y `-SkipComputerUse` dejan afuera los dos últimos, pero no se pueden sumar a `iex (irm …)`. Van así:

    ```powershell
    & ([scriptblock]::Create((irm https://hermes-agent.nousresearch.com/install.ps1))) -SkipBrowser -SkipComputerUse
    ```

    Si falla por un BOM, se guarda el script sin BOM y se corre como archivo.
  - **El 28-oct se instaló sin esos dos parámetros**, porque Sergio Urcullo quiere navegador y control de las apps:

    ```powershell
    $env:HERMES_GATEWAY_INSTALL_START_ON_LOGIN = '0'
    $env:HERMES_GATEWAY_INSTALL_START_NOW = '0'
    & ([scriptblock]::Create((irm https://hermes-agent.nousresearch.com/install.ps1)))
    ```

  - Si la red se corta a la mitad, se vuelve a correr el mismo comando y retoma lo que falta. El 28-oct pasó dos veces.
- **"Blank Slate" no es un parámetro.** Es la tercera opción del asistente de la primera vez, y aparece solo si no hay un proveedor configurado.
  - Antes de ese menú, el asistente ofrece importar lo de Claude, Codex, Cursor y OpenClaw, con "Sí" por defecto. **Hay que contestar que no.**
  - El instalador siembra las 58 skills de fábrica antes del asistente. Blank Slate no las borra; solo evita que se vuelvan a sembrar.
  - **Decisión del 28-oct: desactivarlas, no borrarlas.** Se desactivan con `hermes skills config` (oficial): primero por categoría, dejando solo `autonomous-ai-agents`, y después una por una, apagando `opencode`. Quedan activas `claude-code`, `codex`, `computer-use` y `hermes-agent`, que no se puede apagar. `skills.disabled` tiene 47; las otras seis no corren en Windows.
  - Se comprueba con `hermes prompt-size`, que lista las skills que ve el modelo. `hermes skills list --enabled-only` muestra además `sdlc-review`. Esa sigue prendida, pero Hermes no se la muestra al modelo porque necesita Kanban, que está apagado. Si algún día se prende Kanban, hay que apagarla con `hermes skills config`.
  - No se usan `hermes skills opt-out --remove`, que borra también las que se quieren conservar, ni `skills opt-in --sync`, que vuelve a traer las 58. Tampoco `skills reset --restore`: con las skills de fábrica apagadas dice "Restored", pero no restaura nada.
- **Modelo:** en el asistente se elige OpenAI → "ChatGPT or Codex Subscription".
  - A "Import these credentials?" **hay que contestar N**. Con "y", Hermes comparte la sesión de Codex CLI y se pueden desloguear entre sí.
  - El 28-oct se contestó que sí por error, y se rehízo así: primero `auth.adopt_external_logins false`, después `hermes auth logout openai-codex` y por último `hermes model` con un login nuevo por código.
- **Al final, el instalador pregunta por el gateway:** si arrancarlo ahora y si dejarlo arrancando con Windows (tarea `Hermes_Gateway`).
  - Las dos preguntas vienen con "Sí" por defecto. **Hay que contestar que no a las dos.**
  - Otra opción: antes de instalar, en esa misma PowerShell, correr `$env:HERMES_GATEWAY_INSTALL_START_ON_LOGIN = '0'` y `$env:HERMES_GATEWAY_INSTALL_START_NOW = '0'`.
  - No se corre sin una terminal interactiva: según el código, ahí tomaría el "Sí" solo. Es una inferencia; la documentación dice lo contrario.
  - `-NonInteractive` no sirve acá, porque también se salta el asistente y con él Blank Slate.
- **Configuración para dejarlo cerrado** (claves confirmadas en el código de la v0.22.5; aplicadas el 28-oct con `hermes config set <clave> <valor>`). En PowerShell 5.1, una lista va entre comillas simples para que llegue como un solo valor, como en `hermes config set skills.external_dirs '[]'`. Si sus elementos llevan comillas, va entre comillas dobles con los elementos entre simples, como en el `approvals.deny` de abajo.
  - `auth.adopt_external_logins: false`. Por defecto Hermes lee los logins de Claude Code y Codex.
  - `skills.write_approval: true` y `memory.write_approval: true`.
  - `approvals.mode: manual`.
  - `skills.external_dirs: []`.
  - `skills.project_discovery: false`, o confiar solo en ONIA-CENTRAL.
  - `security.allow_lazy_installs: false`.
  - `terminal.cwd: C:/dev/proyectos/ONIA-CENTRAL`, para que Telegram y el gateway carguen el `AGENTS.md`. La guarda bien, pero el TUI y la versión clásica la ignoran: usan la carpeta desde donde se abren. Con Telegram todavía no se probó.
  - Si se usa la app de escritorio: `desktop.repo_scan_roots: [C:/dev/proyectos/ONIA-CENTRAL]` o `desktop.repo_scan_enabled: false`. Por defecto busca repos en la carpeta de usuario, donde hay espacios de Orca del repo viejo. Se eligió `desktop.repo_scan_enabled: false`.
- **Lo que se sumó al armarlo, el 28-oct, siguiendo la documentación oficial:**
  - **Credenciales.**
    - `hermes auth remove copilot 1` y `hermes auth remove gemini 1` apagan, solo dentro de Hermes y para siempre, el token de `gh` y la `GEMINI_API_KEY` de las variables de Windows. No tocan ni `gh` ni la variable.
    - `hermes config set model_catalog.excluded_providers '[copilot, gemini]'` los saca del menú de modelos.
  - **Herramientas.** Se eligieron con `hermes tools`, en CLI.
    - Prendidas: archivos, terminal, visión, skills, navegador ("Local Browser"), control de la computadora (cua-driver), búsqueda web (OpenAI Native, incluida en ChatGPT), lista de pasos, preguntas aclaratorias y video.
    - Prendidas pero ocultas: X y voz. Hermes no se las muestra al modelo hasta que tengan lo que les falta. X necesita una credencial de xAI ([#6](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/6)).
    - La memoria también figura prendida, pero está apagada por dentro: Blank Slate dejó `memory.memory_enabled: false` y `memory.user_profile_enabled: false`.
    - Apagadas: tareas programadas, A2A, ejecución de código, delegación y Kanban.
    - Esta selección vale solo para la CLI, que incluye el TUI. Telegram arranca con `hermes-telegram`, que trae todas las herramientas de fábrica, incluidas las tareas programadas y el control de la computadora. Al armar el [#11](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/11) hay que elegirlas de nuevo con `hermes tools`, para Telegram.
  - **`browser.backend: off`.** Si no, el navegador usa `browser_exec`, que corre código Python escrito por el modelo sin pedir aprobación. El navegador es un Chromium aparte, sin las sesiones de Chrome.
  - **`checkpoints.enabled: true`**, para deshacer con `/rollback`.
  - **`auxiliary.background_review.enabled: false`.** Aun con la memoria apagada, esa revisión de fondo corre después de las tareas largas para proponer skills nuevas o cambios, y cada vez gasta cuota. No se quieren skills que nadie pidió.
  - **`approvals.deny`**, con 21 patrones. Bloquean:
    - los modos sin permisos de Claude y de Codex;
    - `git push --force` y `curl | sh`;
    - que el agente corra los comandos de Hermes que cambian su configuración, sus logins, sus skills, sus herramientas, su gateway o sus aprobaciones;
    - `hermes -z`.

    ```powershell
    hermes config set approvals.deny "['*git push --force*', '*curl*|*sh*', '*--dangerously-skip-permissions*', '*bypassPermissions*', '*--dangerously-bypass-approvals-and-sandbox*', '*--yolo*', '*danger-full-access*', '*hermes* config *', '*hermes* auth *', '*hermes* skills *', '*hermes* tools *', '*hermes* setup*', '*hermes* model*', '*hermes* gateway *', '*hermes* cron *', '*hermes* mcp *', '*hermes* plugins *', '*hermes* profile *', '*hermes* memory *', '*hermes* approvals *', '*hermes* -z*']"
    ```

    Según el código, con aprobaciones manuales el agente puede correr `hermes config set` sin preguntar, y este bloqueo frena los casos comunes. **No es una garantía.** La documentación oficial (`user-guide/security.md`) avisa que un bloqueo por patrón no es un sandbox: se puede rodear con un script y la terminal puede escribir cualquier archivo del usuario.
  - **Límites que hay que conocer.**
    - `approvals.mode: manual` frena solo los comandos que Hermes considera peligrosos. Los comandos comunes, la edición de archivos y las acciones del navegador corren sin preguntar.
    - Las capturas del control de la computadora tampoco piden permiso, así que conviene cerrar las ventanas sensibles antes de usarlo.
    - A una aprobación se contesta "once", nunca "always": "always" la deja guardada en `command_allowlist` y vale para todas las sesiones.
  - **Una aprobación quedó guardada por error.** El 28-oct, en la prueba real, se contestó "always" a `script execution via -e/-c flag`, y `config.yaml` quedó con `command_allowlist: [script execution via -e/-c flag]`. Así, `python -c`, `node -e`, `perl -e` y `ruby -e` corrían sin preguntar en todas las sesiones. Sergio Urcullo la borró el mismo día con `hermes config set command_allowlist '[]'`. Para revisarlo: `command_allowlist` tiene que estar vacía.
  - **Chequeos sin gastar cuota.** `hermes prompt-size` muestra qué carga Hermes (`AGENTS.md`, skills y herramientas), y `hermes computer-use doctor` revisa el control de la computadora.
- **KeePassXC:** la fuente de secretos `command`, que es el camino que usaría la bóveda, no funciona en Windows nativo.

## Qué quedó del Hermes viejo y cómo se aparta

**Inventario:**
- `%LOCALAPPDATA%\hermes` (7,6 GB): la instalación v0.22.2. El código es el oficial y no tiene cambios, pero la configuración lee skills de `E:\onia-wt\hermes-base`, una copia del repo viejo.
- `%APPDATA%\hermes`: los datos de la app de escritorio vieja.
- `%LOCALAPPDATA%\com.nousresearch.hermes.setup` (70 MB): datos de un `Hermes-Setup.exe` del 2-sep.
- `%USERPROFILE%\.local\state\hermes`: bloqueos del gateway viejo.
- `C:\Users\PC\.hermes`: una carpeta que escribió Orca. Hermes en Windows no la lee.
- Copias del config y el SOUL viejos:
  - `hermes-copia-vieja-20261026` (0,28 GB), escondida en la carpeta de la app de Claude;
  - `%TEMP%\hermes-copia-2106555552` y `%TEMP%\hermes-copia-943553273`.
- Tres accesos directos a la app de escritorio vieja (menú Inicio, escritorio y barra de tareas) y el protocolo `hermes://`.
- La variable `HERMES_WRITE_SAFE_ROOT`, que apunta a `E:\onia-wt\hermes-base`.
- En `%TEMP%` quedan además carpetas de pruebas viejas (`hermes-test-*`, `hermes_kernel_*`, `hermes_voice`). Nadie las lee, y se van con la limpieza normal de Temp.

**No se encontró:**
- ninguna otra instalación: ni en Python, ni en npm, ni en Program Files, ni en otros usuarios;
- ninguna tarea `Hermes_Gateway`;
- ningún proceso de Hermes corriendo.

En el inventario, WSL no se revisó por dentro. Se revisó después, el 28-oct: ni en Ubuntu ni en docker-desktop hay `~/.hermes`, `~/.local/bin/hermes` ni `hermes` en el PATH.

**El script de limpieza** es `C:\Users\PC\.hermes-archivo-20261028\limpiar-hermes.ps1`:
- Aparta todo lo del inventario en `C:\Users\PC\.hermes-archivo-20261028`, salvo las carpetas de pruebas de Temp. No borra nada y deja un manifiesto para volver atrás.
- Tiene tres modos: mirar, aplicar y revertir. Se probó con carpetas de prueba.
- No corre si Hermes está corriendo, ni si se lo lanza desde la app de Claude.
- La barra de tareas no la toca: el ícono viejo se desancla a mano.
- La entrada `%LOCALAPPDATA%\hermes\bin` del PATH queda, porque la instalación nueva usa la misma.

**Cómo salió, el 28-oct:**
- Se apartaron las 10 cosas del inventario, se quitaron el protocolo y la variable, y el manifiesto quedó en `C:\Users\PC\.hermes-archivo-20261028\manifiesto.json`.
- **El `Move-Item` de PowerShell 5.1 parte las carpetas.** Cuando Windows le niega mover una carpeta entera, sigue archivo por archivo y falla con las ocultas, como `.git`. Pasó dos veces. El script ahora mueve cada carpeta de una sola vez con `[IO.Directory]::Move`, con reintentos.
- **Windows no dejó mover `%LOCALAPPDATA%\hermes` a otra carpeta.** Daba acceso denegado, sin ningún proceso visible que la tuviera abierta; el antivirus activo es Avast. Sí dejó renombrarla en su lugar, y quedó como `%LOCALAPPDATA%\hermes-viejo-20261028`.
- **Con Avast, un script lanzado como proceso aparte** (`powershell -ExecutionPolicy Bypass -File …`) no pudo ni mover ni renombrar esa carpeta. Pegado en la misma ventana, sí. Por eso `limpiar-hermes.ps1` se corre pegado en la misma ventana, no como proceso aparte:

  ```powershell
  & ([scriptblock]::Create((Get-Content -Raw <ruta del script>))) -Modo aplicar
  ```

- Lo que la app de Claude escribe en `%TEMP%` y en `%LOCALAPPDATA%\Claude-Data` sí llega al disco real. Lo que escribe en el resto de `AppData` no. Se comprobó con archivos de prueba.

## Encontrado de paso, fuera de Hermes

Quedó en issues:
- [Cortar lo que el repo viejo arranca al iniciar sesión](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/2). El 28-oct se sumaron dos cosas: una entrada `ONIA Center Local Stack` en la clave Run del usuario, y un `.vbs` en la carpeta Inicio que levanta un túnel SSH al VPS.
- [Quitar el permiso sin preguntas guardado para el repo viejo en la app de Claude](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/3)
- [Desinstalar Orca](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/4)
- [Claves y cuentas](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/7). En las variables de usuario de Windows hay tres secretos (`GEMINI_API_KEY`, `ELEVENLABS_API_KEY` y `N8N_MCP_TOKEN`) que puede leer cualquier programa.
- [Skills de ONIA para Hermes, Claude Code y Codex](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/10)
- [Telegram para Hermes con un bot nuevo](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/11)
