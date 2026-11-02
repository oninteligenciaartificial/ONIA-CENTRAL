# Un navegador por área

2-nov-2026. Lo armó el Administrador por pedido de Sergio Urcullo: "Quiero que cada una tenga su propia pestaña con su propio browser para no chocarse. También definirles qué usa cada una para que veamos. Una no era nada, no se meta a Meta, por ejemplo, y lo joda" (sesión del Administrador, sin enlace). Cambia, para Codex, el perfil único `equipo` del [navegador de WSL](2026-11-01-navegador-wsl.md).

## Por qué

- **Para no chocar:** el README de Playwright MCP 0.0.84, el que está instalado, dice que un perfil persistente lo usa un solo navegador a la vez, y que para varios clientes en paralelo cada uno arranca con `--isolated` o con su propio `--user-data-dir` (sección "Persistent profile").
- **Para que ninguna entre a una cuenta ajena:** cada perfil guarda solo las cuentas de su área. Si Meta está solo en el de Marketing, las otras áreas no tienen esa sesión abierta.

## Cómo quedó en Codex

- **Sin perfil:** en `C:\Users\PC\.codex\config.toml`, el navegador va con `--isolated`, sin cuentas guardadas. Lo usa toda sesión que arranca con `codex` a secas, como las revisiones.
- **Un archivo por área** en `C:\Users\PC\.codex\`, `<área>.config.toml`. Solo cambia los `args` del servidor `playwright`, para que use `--user-data-dir /home/pc-linux-sergio/.onia-browser/<área>`. Codex lo suma al arrancar con `codex -p <área>` ("Layer $CODEX_HOME/<name>.config.toml on top of the base user config", `codex --help`, codex-cli 0.166.0).
- **Cada área arranca** desde su worktree con `codex -p <área>` (plan del [paso a Codex](2026-11-01-plan-equipo-y-paso-a-codex.md), punto 3 del arranque).
- **Respaldo** de `config.toml` antes del cambio: `C:\Users\PC\.respaldos-config\20261102-navegador-por-area\`.

## Qué usa cada área

Sale de la sección "Qué toco y qué no" de cada área: [`negocio.md`](../equipo-agentes/negocio.md), [`producto.md`](../equipo-agentes/producto.md) y el [PR del estado de Marketing](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/102), abierto.

| Área | Arranca con | Cuentas en su navegador, que carga Sergio |
|---|---|---|
| Boss No-Code | `codex -p boss-no-code` | WhatsApp, Chatwoot (para leer) y Yolo Pago |
| Marketing | `codex -p marketing` | Meta |
| Boss Code | `codex -p boss-code` | Ninguna: solo páginas publicadas |
| ONIA Platform | `codex -p onia-platform` | Sin definir: está armando su "Qué toco y qué no" |
| Recepción | `codex -p recepcion` | Ninguna: enlaces públicos |
| Administrador, Pelau, Analista y revisiones | `codex` | Ninguna (`--isolated`) |

Ninguna área entra a una cuenta que no está en su fila. Entrar a una cuenta no da permisos: nada se publica, se envía ni se compra sin el sí de Sergio (`AGENTS.md`, "Frenos").

## Cómo carga Sergio una cuenta en el navegador de un área

Como en el [navegador de WSL](2026-11-01-navegador-wsl.md), cambiando la carpeta. Con esa área sin usar el navegador, en una PowerShell:

```powershell
wsl -d Ubuntu -- /home/pc-linux-sergio/.cache/ms-playwright/chromium-1252/chrome-linux64/chrome --user-data-dir=/home/pc-linux-sergio/.onia-browser/marketing --no-first-run
```

Ese ejemplo es el de Marketing; para otra área se cambia `marketing` por su nombre de la tabla. Entra a la cuenta copiando la contraseña de la bóveda ([credenciales](../credenciales.md)) y cierra la ventana.

## Probado el 2-nov

- `codex mcp get playwright` da `--isolated`, y `codex -p <área> mcp get playwright` da el `--user-data-dir` de cada una de las cinco áreas.
- Dos navegadores a la vez, con los perfiles `boss-code` y `recepcion`, abrieron `https://example.com` sin chocar.
- **Sin probar:** una sesión de Codex real navegando con su perfil, y que los logins queden guardados al cerrar la ventana.

## Lo que falta

- **El perfil `equipo`** tiene la cuenta que cargó Sergio el 2-nov. Pasa a la carpeta del área que corresponda cuando él diga cuál es. Hasta entonces, en Codex no lo usa nadie.
- **Claude Code no cambió:** sus sesiones siguen con el perfil `equipo` y con los conectores de la app, como Meta Ads. Hasta el paso a Codex, las áreas no usan el navegador de Ubuntu (pedido del Administrador del 2-nov).
- **Qué más ve cada área en Codex:** `codex mcp list` muestra cuatro servidores: `codex_app`, `cua_repl`, `node_repl` y `playwright`. Qué expone `codex_app` no se miró.

## Cómo se vuelve atrás

Restaurar `config.toml` desde el respaldo y borrar los cinco `<área>.config.toml` de `C:\Users\PC\.codex\`. Las carpetas de los perfiles, en `/home/pc-linux-sergio/.onia-browser/`, se pueden borrar después.
