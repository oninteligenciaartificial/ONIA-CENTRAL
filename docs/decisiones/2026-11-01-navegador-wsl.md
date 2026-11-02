# Navegador del equipo en WSL

1-nov-2026, a la noche. Lo armó la sesión del Administrador. Es parte del [issue #96 (bot propio en lugar de Grok Bot)](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/96).

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
  - En el modo por defecto, `auto`, pide aprobación todo lo que el servidor no marca como de solo lectura.
  - Sale del código oficial: `requires_mcp_tool_approval_for_mode`, en `codex-rs/core/src/mcp_tool_call.rs` de `openai/codex`, commit `a098129`.
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

- **Codex:** borrar la sección `[mcp_servers.playwright]` de `config.toml`, o restaurar la copia del respaldo.
- **Claude Code:**
  - `claude mcp remove -s user playwright`;
  - sacar `mcp__playwright` de `permissions.allow`, o restaurar la copia de `settings.json`.
- **Ubuntu:**
  - `npm`, `nodejs` y las dependencias se sacan con `apt-get remove`;
  - los navegadores y los perfiles, borrando `~/.cache/ms-playwright` y `~/.onia-browser`.
