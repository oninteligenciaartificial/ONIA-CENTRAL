# Hermes oficial: dónde se abre, dónde se maneja y cómo queda uno solo

28-oct-2026. Sale de dos trabajos:
- una investigación con 3 agentes y 3 verificadores, contra la fuente oficial: el repo `NousResearch/hermes-agent` en el tag v0.22.5 y `hermes-agent.nousresearch.com/docs`;
- un inventario de la PC hecho solo con metadatos.

Después lo revisaron 3 agentes más, con un verificador para cada uno. No se usó el repo viejo como fuente.

## Versión

La última estable es la v0.22.5, del 22-oct-2026. En la PC está la v0.22.2. Solo la v0.22.3 sumó unos 620 cambios, y la v0.22.5 otros 81.

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
  - todas las entradas de `Get-Command hermes -All` están en `%LOCALAPPDATA%\hermes\bin`, donde conviven `hermes.exe` y `hermes.cmd`;
  - `HERMES_HOME`, `HERMES_DATA_DIR_SUFFIX` y `HERMES_RUNTIME_DIR` no están definidas, ni para el usuario ni para la máquina;
  - `hermes profile list` muestra solo `default`, y no hay un `%LOCALAPPDATA%\hermes\active_profile` que apunte a otro;
  - `schtasks /Query /TN Hermes_Gateway` encuentra la tarea solo si se instaló a propósito.
- **WSL no se ve con esas pruebas.** Lo revisa Sergio Urcullo con este comando, que arranca la máquina virtual:

  ```powershell
  wsl -d Ubuntu -- sh -lc 'ls -d ~/.hermes ~/.local/bin/hermes 2>/dev/null; command -v hermes'
  ```

## Dónde se abre

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
  - Hermes carga un solo archivo de proyecto, el primero que encuentra: `.hermes.md`, `AGENTS.md` o `CLAUDE.md`. Abierto desde ONIA-CENTRAL, lee este `AGENTS.md`.
  - El `SOUL.md` sale de su carpeta.
  - Para Telegram, la carpeta de trabajo se fija con `terminal.cwd`. Sin esa clave, el lanzador de Windows trabaja desde la carpeta de Hermes y no carga el contexto.
- **Claude Code y Codex:**
  - Hermes los llama con `claude -p` y `codex exec`, mediante sus skills de fábrica `claude-code` y `codex`, y usan los logins de siempre.
  - `codex exec` necesita una terminal con pty y un repo git. No está confirmado que el pty funcione en Windows nativo: se prueba en la primera tarea.

## Para instalarlo limpio

- **Comando oficial**, en PowerShell y sin admin: `iex (irm https://hermes-agent.nousresearch.com/install.ps1)`.
  - Descarga su propio uv y su propio Git, y después Python 3.14, Node, ripgrep, FFmpeg, un Chromium y el controlador de uso de la computadora.
  - `-SkipBrowser` y `-SkipComputerUse` dejan afuera los dos últimos, pero no se pueden sumar a `iex (irm …)`. Van así:

    ```powershell
    & ([scriptblock]::Create((irm https://hermes-agent.nousresearch.com/install.ps1))) -SkipBrowser -SkipComputerUse
    ```

    Si falla por un BOM, se guarda el script sin BOM y se corre como archivo.
- **"Blank Slate" no es un parámetro.** Es la tercera opción del asistente de la primera vez, y aparece solo si no hay un proveedor configurado.
  - Antes de ese menú, el asistente ofrece importar lo de Claude, Codex, Cursor y OpenClaw, con "Sí" por defecto. **Hay que contestar que no.**
  - El instalador siembra las skills de fábrica antes del asistente. Blank Slate no las borra.
  - `hermes skills opt-out --remove` las borra todas, incluidas `claude-code` y `codex`. Antes de correrlo hay que decidir cómo se conservan esas dos: no está verificado cómo traer una sola (`hermes skills opt-in --sync` las trae todas).
- **Al final, el instalador pregunta por el gateway:** si arrancarlo ahora y si dejarlo arrancando con Windows (tarea `Hermes_Gateway`).
  - Las dos preguntas vienen con "Sí" por defecto. **Hay que contestar que no a las dos.**
  - Otra opción: antes de instalar, en esa misma PowerShell, correr `$env:HERMES_GATEWAY_INSTALL_START_ON_LOGIN = '0'` y `$env:HERMES_GATEWAY_INSTALL_START_NOW = '0'`.
  - No se corre sin una terminal interactiva: según el código, ahí tomaría el "Sí" solo. Es una inferencia; la documentación dice lo contrario.
  - `-NonInteractive` no sirve acá, porque también se salta el asistente y con él Blank Slate.
- **Configuración para dejarlo cerrado** (claves confirmadas en el código de la v0.22.5):
  - `auth.adopt_external_logins: false`. Por defecto Hermes lee los logins de Claude Code y Codex.
  - `skills.write_approval: true` y `memory.write_approval: true`.
  - `approvals.mode: manual`.
  - `skills.external_dirs: []`.
  - `skills.project_discovery: false`, o confiar solo en ONIA-CENTRAL.
  - `security.allow_lazy_installs: false`.
  - `terminal.cwd: C:/dev/proyectos/ONIA-CENTRAL`, para que Telegram y el gateway carguen el `AGENTS.md`. No está verificado que acepte esa forma de ruta en Windows nativo: se comprueba en la primera prueba.
  - Si se usa la app de escritorio: `desktop.repo_scan_roots: [C:/dev/proyectos/ONIA-CENTRAL]` o `desktop.repo_scan_enabled: false`. Por defecto busca repos en la carpeta de usuario, donde hay espacios de Orca del repo viejo.
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

WSL no se revisó por dentro: ver el comando de arriba.

**El script de limpieza** es `C:\Users\PC\.hermes-archivo-20261028\limpiar-hermes.ps1`:
- Aparta todo lo del inventario en `C:\Users\PC\.hermes-archivo-20261028`, salvo las carpetas de pruebas de Temp. No borra nada y deja un manifiesto para volver atrás.
- Tiene tres modos: mirar, aplicar y revertir. Se probó con carpetas de prueba.
- No corre si Hermes está corriendo, ni si se lo lanza desde la app de Claude.
- La barra de tareas no la toca: el ícono viejo se desancla a mano.
- La entrada `%LOCALAPPDATA%\hermes\bin` del PATH queda, porque la instalación nueva usa la misma.

## Encontrado de paso, fuera de Hermes

Quedó en issues:
- [Cortar lo que el repo viejo arranca al iniciar sesión](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/2)
- [Quitar el permiso sin preguntas guardado para el repo viejo en la app de Claude](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/3)
- [Desinstalar Orca](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/4)
