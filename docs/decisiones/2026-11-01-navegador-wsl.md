# Navegador del equipo en WSL

1-nov-2026, a la noche. Lo armó la sesión del Administrador. Es parte del [issue #96 (bot propio en lugar de Grok Bot)](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/96).

**2-nov-2026:** en Codex, cada área tiene ahora su propio perfil, y el perfil único `equipo` ya no se usa ahí: ver [un navegador por área](2026-11-02-navegador-por-area.md). Lo de abajo sigue valiendo para Claude Code.

## Qué decidió Sergio Urcullo

- La idea es suya, del 1-nov: "podemos armar el browser de grok con wsl linux un browser, asi ya no pagariamos grokbot". Esa noche pidió: "Quiero que veamos el browser linux".
- Para instalarlo y probarlo eligió, con botones: "Probarlo hoy (Recomendada)". La opción decía qué se instalaba, de dónde salía y para qué.
- Para dejarlo conectado eligió, con botones: "Todo libre". Las áreas hacen clic y escriben sin que se les pida aprobación, como en Grok Bot. Las otras opciones eran "Leer libre, actuar con tu sí" y "Dejarlo en prueba".

Lo de "todo libre" es técnico: ni Codex ni Claude Code frenan las acciones del navegador. Las reglas siguen igual. Entrar a una cuenta no da más permisos ([credenciales](../credenciales.md)), y publicar, mandar mensajes, pagar o tocar producción sigue pidiendo el sí de Sergio ("Frenos", del `AGENTS.md`).

## Qué quedó instalado

Todo es gratis, según las fuentes de cada uno.

| Qué | Versión | De dónde |
|---|---|---|
| WSL2 con Ubuntu | Ubuntu 26.04 LTS, con WSLg | ya estaba |
| Node.js y npm | v22.22.1 y 9.2.0 | repositorio de Ubuntu, con `apt-get` |
| Playwright MCP | 0.0.84 | Microsoft, [repo oficial](https://github.com/microsoft/playwright-mcp), Apache-2.0 |
| Navegador | Chrome for Testing 157 (`chromium-1252`) | `npx @playwright/mcp@0.0.84 install-browser chrome-for-testing` |

- **Dependencias del sistema:** se instalaron con `npx playwright install-deps chromium`.
- **Navegador que sobra:** quedó un `chromium-1248`, de `npx playwright@latest install chromium`, que esta versión del MCP no usa.
- **Dónde está todo:** en `/home/pc-linux-sergio/.cache/ms-playwright/`, dentro de Ubuntu.

## Cómo está conectado

Las dos configuraciones lanzan el mismo comando:

```
wsl.exe -d Ubuntu -- npx -y @playwright/mcp@0.0.84 --headless --browser chromium --user-data-dir /home/pc-linux-sergio/.onia-browser/equipo --output-dir /home/pc-linux-sergio/.onia-browser/salida
```

- **Codex:** en `C:\Users\PC\.codex\config.toml`, sección `[mcp_servers.playwright]`. Lleva `startup_timeout_sec = 60` y `default_tools_approval_mode = "approve"`.
  - Con `approve` no pide aprobación para ninguna herramienta del servidor.
  - En el modo por defecto, `auto`, mira las marcas de cada herramienta:
    - pide aprobación si la herramienta se marca como destructiva;
    - no la pide si se marca como de solo lectura;
    - en los demás casos, la pide salvo que la herramienta diga que no es destructiva y que no sale a Internet.
  - Con las marcas de Playwright MCP 0.0.84, en `auto` corren sin aprobación las 7 de solo lectura: `browser_snapshot`, `browser_take_screenshot`, `browser_find`, `browser_console_messages`, `browser_network_requests`, `browser_network_request` y `browser_wait_for`. Las otras 18, incluidas `browser_navigate` y `browser_click`, se marcan como destructivas.
  - Sale del código oficial: `requires_mcp_tool_approval` y `requires_mcp_tool_approval_for_mode`, en `codex-rs/core/src/mcp_tool_call.rs` de `openai/codex`, commit `a098129`. Las marcas se leyeron con `tools/list` del propio servidor.
- **Claude Code:**
  - el servidor se agregó con `claude mcp add -s user playwright -- <comando>` y quedó en `C:\Users\PC\.claude.json`;
  - el permiso es `mcp__playwright` en `permissions.allow` de `C:\Users\PC\.claude\settings.json`, que habilita todas las herramientas de ese servidor.
- **Qué cambia en las sesiones:** las nuevas cargan el navegador. Las que ya estaban abiertas, no.
- **Respaldo:** antes del cambio se guardó una copia de `config.toml` y `settings.json` en `C:\Users\PC\.respaldos-config\20261101-browser-wsl\`. De `.claude.json` no se guardó copia, porque tiene claves en texto plano.

### Por qué así

- **`--browser chromium`:** el MCP busca Google Chrome por defecto, y en Ubuntu no está. Sin la opción, falla con "Chromium distribution 'chrome' is not found".
- **`--output-dir`:** sin la opción, el MCP guarda sus capturas en la carpeta desde donde lo lanzan. En la prueba dejó `.playwright-mcp/` dentro de un worktree del repo.
- **`--headless`:** las áreas navegan sin abrir ventanas en la pantalla de Sergio.
- **Un solo perfil, `equipo`:** los logins quedan compartidos, como en la computadora de Grok Bot.
- **El perfil vive en Ubuntu y no en `C:\Users\PC\BovedaPrivada\BrowserProfiles`,** que es donde `docs/credenciales.md` pone los perfiles armados para un agente. Microsoft recomienda guardar los archivos en el sistema de archivos de WSL cuando se usan desde Linux, por velocidad ([WSL, sistemas de archivos](https://learn.microsoft.com/windows/wsl/filesystems#file-storage-and-performance-across-file-systems)). Igual queda fuera de todo repo. La excepción está anotada en `docs/credenciales.md`.

## Riesgos del "todo libre"

- **El MCP no es una barrera de seguridad.** Lo dice su README: "Playwright MCP is not a security boundary" ([README de la 0.0.84](https://github.com/microsoft/playwright-mcp/blob/v0.0.84/README.md)).
- **Una página puede traer instrucciones escondidas.** Si el agente las sigue, puede usar cualquier cuenta abierta en el perfil `equipo`, sin que nada técnico lo frene. Por eso conviene cargar en ese perfil solo las cuentas que las áreas necesitan. Cuáles se cargan lo decide Sergio.
- **Lo que el agente lee puede salir:** el texto de una página o una captura quedan en el chat del agente y en los archivos de salida.
- **Los archivos con nombre elegido no van a `--output-dir`.** Según el README, `--output-dir` vale solo para los archivos con nombre automático, y los que el agente nombra se guardan relativos a la carpeta de trabajo. Esa carpeta puede ser un worktree del repo, así que se mira `git status` antes de cada commit.

## Qué se probó

| Prueba | Resultado |
|---|---|
| El MCP directo, por stdio | 25 herramientas. Abrió example.com: "Example Domain". |
| Codex (`gpt-6.1-sol`, `codex exec --sandbox read-only`), con la configuración fija | Leyó la página e hizo clic en "Learn more". Llegó a iana.org. |
| Claude Code (`claude -p`, Haiku), con la configuración fija | Lo mismo, sin ningún permiso denegado. |
| Ventana visible en el perfil `equipo`, por WSLg (en Git Bash y en PowerShell 5.1) | El proceso corrió hasta que `timeout` lo cortó a los 6 y 8 segundos. No se vio la ventana. |

Antes de dejarlo fijo, con aprobación en modo `auto`, Codex leyó la página y el clic quedó frenado: "MCP tool call requires approval, but approval policy is never". Ese día, Claude Code estaba en modo `auto`, en el que aprueba un clasificador y no Sergio. Así hizo el clic aun antes del permiso.

## Límites

- **Una sesión a la vez:** según el README, un perfil persistente lo usa un solo navegador a la vez. Si dos sesiones navegan juntas, la segunda falla hasta que la primera cierre. El README propone dos arreglos, y ninguno está probado:
  - un servidor aparte con `--port` y `--shared-browser-context`, al que se conectan todas;
  - un perfil por área.
- **Solo con la PC prendida:** el navegador corre en esta PC. No reemplaza que Grok Bot siga trabajando en la nube con la PC apagada (#96).
- **Sin probar:**
  - que los logins queden guardados en el perfil después de cerrar;
  - la ventana visible a la vista;
  - varias sesiones juntas.

## Cómo inicia sesión Sergio en una cuenta

Qué cuentas se cargan lo decide él. El agente nunca escribe una contraseña ([credenciales](../credenciales.md)).

1. Con ninguna sesión usando el navegador, en una PowerShell abre la ventana con el perfil del equipo:

   ```powershell
   wsl -d Ubuntu -- /home/pc-linux-sergio/.cache/ms-playwright/chromium-1252/chrome-linux64/chrome --user-data-dir=/home/pc-linux-sergio/.onia-browser/equipo --no-first-run
   ```

   Abrir apps de Linux con ventana desde Windows es WSLg ([Microsoft](https://learn.microsoft.com/windows/wsl/tutorials/gui-apps)). `--user-data-dir` elige la carpeta del perfil ([Chromium](https://chromium.googlesource.com/chromium/src/+/main/docs/user_data_dir.md)).
2. Entra a la cuenta, copiando la contraseña de la bóveda como dice [credenciales](../credenciales.md), y cierra la ventana.

## Cómo se vuelve atrás

1. **Cerrar las sesiones de Codex y de Claude Code que ya cargaron el navegador.** Sacar la configuración no corta un servidor ya cargado: cada sesión lo carga al arrancar.
2. **Codex:** borrar la sección `[mcp_servers.playwright]` de `config.toml` ([referencia de configuración](https://learn.chatgpt.com/docs/config-file/config-reference)), o restaurar la copia del respaldo.
3. **Claude Code:**
   - `claude mcp remove -s user playwright` ([MCP en Claude Code](https://code.claude.com/docs/en/mcp));
   - sacar `mcp__playwright` de `permissions.allow`, o restaurar la copia de `settings.json`.
4. **Ubuntu,** en este orden, porque el primer paso necesita `npx`:
   1. **Navegadores:** con `npx playwright uninstall --all` ([Playwright](https://playwright.dev/docs/browsers#uninstall-browsers)). Antes de la instalación del 1-nov no había ningún navegador de Playwright: `~/.cache/ms-playwright` no existía.
   2. **Perfiles y salidas:** borrar `~/.onia-browser`, que se creó para esto.
   3. **Paquetes:** los instalaron dos transacciones del 1-nov, a las 23:32:00 (`nodejs` y `npm`) y a las 23:35:08 (las dependencias del navegador). Su lista exacta está en `/var/log/apt/history.log`, y esos paquetes se sacan con `apt-get remove` ([manual de apt-get](https://manpages.ubuntu.com/manpages/noble/man8/apt-get.8.html)).
