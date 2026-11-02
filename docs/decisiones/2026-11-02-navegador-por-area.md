# Un navegador por área

2-nov-2026. Lo armó el Administrador por pedido de Sergio Urcullo: "Quiero que cada una tenga su propia pestaña con su propio browser para no chocarse. También definirles qué usa cada una para que veamos. Una no era nada, no se meta a Meta, por ejemplo, y lo joda" (sesión del Administrador, sin enlace). Cambia, para Codex, el perfil único `equipo` del [navegador de WSL](2026-11-01-navegador-wsl.md).

## Por qué

- **Para no chocar:** el README de Playwright MCP 0.0.84, el que está instalado, dice que un perfil persistente lo usa un solo navegador a la vez. Para varios clientes en paralelo, cada cliente adicional arranca con `--isolated` o con su propio `--user-data-dir` (README, línea 487, bajo "Persistent profile").
- **Para que ninguna entre a una cuenta ajena en el navegador de Ubuntu:** cada perfil guarda solo las cuentas de su área. Si Meta está solo en el de Marketing, las otras áreas no tienen esa sesión abierta en ese navegador. Lo que ven por otras herramientas de Codex está en "Lo que falta".

## Cómo quedó en Codex

- **Sin perfil:** en `C:\Users\PC\.codex\config.toml`, el navegador va con `--isolated`, sin cuentas guardadas. Lo usa toda sesión que arranca con `codex` a secas, como las revisiones.
- **Un archivo por área** en `C:\Users\PC\.codex\`, `<área>.config.toml`. Repite el servidor `playwright` entero (`command`, `args`, `startup_timeout_sec` y `default_tools_approval_mode`), con `--user-data-dir /home/pc-linux-sergio/.onia-browser/<área>` y `--output-dir /home/pc-linux-sergio/.onia-browser/salida/<área>`. Con solo `args`, `codex -p <área> mcp get playwright` lo mostraba bien, pero una sesión real no vio el navegador (prueba del 2-nov, abajo). Codex lo suma al arrancar con `codex -p <área>` ("Layer $CODEX_HOME/<name>.config.toml on top of the base user config", `codex --help`, codex-cli 0.166.0).
- **Cada área arranca** desde su worktree con `codex -p <área>`. Así quedó en el punto 3 de "Pasos del corte", en la sección 9 del [plan del paso a Codex](2026-11-01-plan-equipo-y-paso-a-codex.md).
- **Cada perfil lo usa una sola sesión a la vez,** por la misma nota del README: dos sesiones de la misma área no navegan juntas.
- **Respaldo** de `config.toml` antes del cambio: `C:\Users\PC\.respaldos-config\20261102-navegador-por-area\`.

## Qué usa cada área

Sale de la sección "Qué toco y qué no" de [`negocio.md`](../equipo-agentes/negocio.md), [`producto.md`](../equipo-agentes/producto.md) y [`platform.md`](../equipo-agentes/platform.md) y [`recepcion.md`](../equipo-agentes/recepcion.md), del [PR del estado de Marketing](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/102), abierto, y de la sesión del Administrador y los mensajes que recibió el 2-nov (sin enlace). Qué cuentas se conectan lo decide Sergio: la tabla dice qué pidió cada área.

| Área | Arranca con | Cuentas en su navegador, que carga Sergio |
|---|---|---|
| Boss No-Code | `codex -p boss-no-code` | WhatsApp, Yolo Pago y Chatwoot, para revisar (`negocio.md`). El 2-nov pidió sumar Google Calendar e Instagram de ONIA (mensaje al Administrador, sin enlace): sin decidir |
| Marketing | `codex -p marketing` | Meta, para ver pantallas y referencias (PR #102) |
| Boss Code | `codex -p boss-code` | Ninguna: solo páginas publicadas, sin login (`producto.md`) |
| ONIA Platform | `codex -p onia-platform` | Ninguna esta semana. Para probar la plataforma como cliente, una cuenta de prueba de la propia plataforma, sin datos de clientes (`platform.md`) |
| Recepción | `codex -p recepcion` | Cuentas secundarias para investigar redes: Instagram y TikTok, Facebook si hace falta, con un correo nuevo. Las pidió Sergio el 2-nov, según el mensaje de Recepción al Administrador (sin enlace). Las crea y las carga él (`recepcion.md`) |
| Administrador, Pelau, Analista y revisiones | `codex` | Ninguna (`--isolated`). Pelau dijo que no usa navegador (mensaje al Administrador, 2-nov, sin enlace) |

Ninguna área entra a una cuenta que Sergio no decidió ni cargó en su perfil. Entrar a una cuenta no da permisos: nada se publica, se envía ni se compra sin el sí de Sergio (`AGENTS.md`, "Frenos").

## Cómo carga Sergio una cuenta en el navegador de un área

Como en el [navegador de WSL](2026-11-01-navegador-wsl.md), "Cómo inicia sesión Sergio en una cuenta", que cita las fuentes de WSLg y de `--user-data-dir`, cambiando la carpeta. Con ninguna sesión de esa área usando el navegador, en una PowerShell:

```powershell
wsl -d Ubuntu -- /home/pc-linux-sergio/.cache/ms-playwright/chromium-1252/chrome-linux64/chrome --user-data-dir=/home/pc-linux-sergio/.onia-browser/marketing --no-first-run
```

Ese ejemplo es el de Marketing; para otra área se cambia `marketing` por su nombre de la tabla. Entra a la cuenta copiando la contraseña de la bóveda ([credenciales](../credenciales.md)) y cierra la ventana.

## Probado el 2-nov

- `codex mcp get playwright` da `--isolated`, y `codex -p <área> mcp get playwright` da el `--user-data-dir` y el `--output-dir` de cada una de las cinco áreas.
- Dos navegadores a la vez, con los perfiles `boss-code` y `recepcion`, abrieron `https://example.com` sin chocar. Se probó con el mismo Chrome que lanza el MCP (`chromium-1252`), abierto directo y sin el MCP.
- Una sesión real, `codex exec -p boss-code --sandbox read-only`, abrió `https://example.com` con el navegador de su perfil, cerca de las 12:30. Con el archivo de solo `args` no lo veía: contestó que la herramienta no estaba disponible.
- **Sin probar:** que los logins queden guardados al cerrar la ventana.

## Lo que falta

- **El perfil `equipo`:** Sergio avisó el 2-nov "ya cargue mi cuenta" (pedido que pasó el Administrador anterior, sin enlace), y la carpeta cambió ese día a las 10:12. No se sabe qué cuenta es. Pasa a la carpeta del área que corresponda cuando él lo diga. Hasta entonces, en Codex no lo usa nadie.
- **Claude Code no cambió:** sus sesiones siguen con el perfil `equipo` y con los conectores de la app, como Meta Ads. Hasta el paso a Codex, las áreas no usan el navegador de Ubuntu (pedido del Administrador a las áreas, 2-nov).
- **Otras herramientas de Codex, sin revisar:** el perfil por área separa solo el navegador de Ubuntu. `codex mcp list` muestra prendidos `cua_repl`, `node_repl` y `playwright`, y `codex_app` apagado. En `config.toml` están prendidos, entre otros, los plugins `chrome@openai-bundled`, `browser@openai-bundled`, `computer-use@openai-bundled`, `unified-computer-use@openai-bundled` y `codex-app-tools@openai-bundled`, y los perfiles por área no los cambian. Qué exponen no se miró: si alguno llega al Chrome de Sergio o al escritorio, un área podría entrar a una cuenta que no es suya. En las pruebas del 2-nov, Codex contestó que ve herramientas de Higgsfield, de Vercel y de Gmail, con perfil y sin perfil. `codex plugin list` (2-nov) da prendidos, entre otros, `gmail`, `vercel`, `google-drive`, `google-calendar`, `google-contacts`, `github`, `notion`, `canva` y `heygen`, todos `@openai-curated-remote`, y una app sin nombre legible. `higgsfield@personal` figura apagado, y de dónde salen las herramientas de Higgsfield no se miró. Sergio eligió dejarlas con la regla de no usarlas sin su sí. Sigue en el [issue de frenos en Codex](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/128).

## Cómo se vuelve atrás

Restaurar `config.toml` desde el respaldo y borrar los cinco `<área>.config.toml` de `C:\Users\PC\.codex\`. Las carpetas de los perfiles, en `/home/pc-linux-sergio/.onia-browser/`, se pueden borrar después.
