# Credenciales: dónde viven y cómo las usan los agentes

28-oct-2026. Resuelve el [issue #5](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/5) y reemplaza la regla de credenciales del `CLAUDE.md` global de Sergio Urcullo. El procedimiento del repo viejo no se usa.

Vale para Claude Code, Codex y Hermes en la laptop. El VPS y la nube quedan afuera.

## La regla

- **El original de cada secreto está en la bóveda.** Ningún agente la abre ni la lee.
- **Un secreto nunca pasa** por el chat, un log, un commit, un argumento de comando ni una variable de entorno de Windows.
- **Cada agente tiene solo los secretos que usa,** guardados en el lugar oficial de ese agente. Los carga Sergio Urcullo.
- **Si falta un secreto o un login,** el agente dice cuál falta y dónde se carga, y sigue con lo que sí puede hacer. Nunca pide por chat el secreto ni la contraseña maestra.
- **Entrar a una cuenta no da más permisos.** Publicar, mandar mensajes, pagar o tocar producción sigue pidiendo el sí de Sergio Urcullo.

## Dónde viven

**La bóveda** es `C:\Users\PC\BovedaPrivada\Agentes.kdbx`, de KeePassXC, fuera de Git.
- Al 28-oct todavía no existe: la carpeta está, el archivo no.
- La crea Sergio Urcullo con KeePassXC 2.7.12, ya instalado en `C:\Program Files\KeePassXC`: *Base de datos → Nueva base de datos*, con ese nombre y en esa carpeta.
- La contraseña maestra la sabe solo él. No se guarda en el chat, ni en scripts, ni en archivos, ni en variables.
- Hay una entrada por secreto:
  - el título dice de qué servicio es y para qué;
  - las notas dicen en qué agente está cargado, así se sabe dónde reemplazarlo cuando cambie.
- Después de cada cambio, se guarda una copia del `.kdbx` en E:. Va cifrada, igual que el original.

**Lo que hoy está suelto en `BovedaPrivada`** pasa a la bóveda, y después Sergio Urcullo borra el original:
- `claude-cloud-entorno-variables.txt`: una entrada por cada valor;
- la clave SSH `claude-cloud-vps-20260930`, como adjunto de una entrada. La `.pub` es pública y puede quedar como está.

**Cada agente guarda además su propia copia** de lo que usa. Son archivos fuera de Git, y ningún agente abre los de otro:

| Agente | Su login | Otras claves | Logins de sitios |
|---|---|---|---|
| Hermes | `%LOCALAPPDATA%\hermes\auth.json` | `%LOCALAPPDATA%\hermes\.env` | `%LOCALAPPDATA%\hermes\vault\`, cifrado |
| Claude Code | `C:\Users\PC\.claude\.credentials.json` | `C:\Users\PC\.claude.json` | las sesiones del navegador |
| Codex | `C:\Users\PC\.codex\auth.json` | `C:\Users\PC\.codex\config.toml` | no tiene |

Hermes no lee los logins de Claude Code ni de Codex, porque tiene `auth.adopt_external_logins: false`. Está en [Hermes oficial](decisiones/2026-10-28-hermes-oficial.md).

## Por qué no hay un puente automático

- **Hermes v0.22.5 no puede leer KeePassXC en Windows nativo.**
  - Lo que lo conectaría es su fuente de secretos `command`, que solo corre en Linux y macOS. La documentación instalada dice "POSIX-only (needs /bin/sh). On Windows the source reports itself unconfigured" (`user-guide/secrets/command.md`), y el código lo confirma (`agent/secret_sources/command.py`).
  - Las fuentes que sí andan en Windows son Bitwarden y 1Password, que son otros gestores de contraseñas.
- **`keepassxc-cli` pide la contraseña maestra cada vez que se corre.** No se conecta con el KeePassXC que está abierto, y dejar la contraseña en un archivo o una variable para automatizarlo rompe la regla.
- **Por eso el puente es Sergio Urcullo:** copia el secreto de la bóveda y lo pega en el agente. Si algún día hace falta automatizarlo, se decide aparte y con su OK. Por ejemplo, con un plugin de Hermes o cambiando de gestor.

## Cómo se carga un secreto

Siempre igual:
1. En KeePassXC, copiar la contraseña de la entrada con Ctrl+C. KeePassXC vacía el portapapeles a los 10 segundos.
2. Pegarla en el campo oculto que pide el agente.
3. **Nunca escribirla como argumento de un comando,** porque PowerShell guarda cada comando en su historial. Si un comando solo acepta el secreto como argumento, primero se lee con `$s = Read-Host -AsSecureString` y en el comando va `$([Net.NetworkCredential]::new('', $s).Password)`. Así el historial guarda el nombre de la variable, no el valor. Al final, `Remove-Variable s`.
4. Si el historial del portapapeles de Windows (Win+V) está prendido, revisar que el secreto no haya quedado ahí.

### Hermes

Los comandos los corre Sergio Urcullo en una PowerShell abierta desde el menú Inicio. El porqué está en [Hermes oficial](decisiones/2026-10-28-hermes-oficial.md).

- **Claves de modelos:** `hermes auth add <proveedor> --type api-key`, sin `--api-key`. Así pide "Paste your API key:" con el texto oculto (`hermes_cli/auth_commands.py`). Queda en `auth.json`, y `hermes auth list` confirma que se guardó.
- **Otras claves (herramientas y plataformas):** van en el `.env` de Hermes. `hermes config env-path` dice dónde está; se abre con el Bloc de notas y se pega el valor. `hermes config set NOMBRE valor` no se usa, porque deja la clave en el historial.
- **Logins de sitios:** `hermes vault add`, o en la app de escritorio, *Settings → Passwords & Logins → Add*.
  - La contraseña se pide oculta y el comando no la acepta como argumento (`hermes_cli/vault.py`).
  - El modelo nunca la ve: Hermes la escribe directo en la página, y solo si el sitio es el mismo que se guardó (`user-guide/features/credential-vault.md`).
- **Tarjetas:** no se cargan. Si alguna vez hacen falta, se decide aparte, porque es gasto.
- **Lo que Hermes ya protege por su cuenta:** a sus terminales y a sus servidores MCP les saca las claves del entorno. Para pasarle una hay que nombrarla en `terminal.env_passthrough` o en el `env` del MCP (`user-guide/security.md`).

#### La clave de API de Anthropic

1. **En la consola de Anthropic** (`platform.claude.com`), Sergio Urcullo:
   - crea un espacio de trabajo (*Workspace*) solo para Hermes. El espacio por defecto no acepta topes de gasto;
   - le fija un tope de gasto mensual, por el monto que decida él;
   - crea la clave dentro de ese espacio, con un nombre que diga para qué es, por ejemplo `hermes-laptop`.

   Así el tope frena solo a Hermes. Al llegar al tope, la API rechaza los pedidos hasta el mes siguiente o hasta que él lo suba.
2. La guarda en la bóveda, con el tope anotado en las notas de la entrada.
3. La carga en Hermes con `hermes auth add anthropic --type api-key`.
4. Comprueba que quedó con `hermes auth list`.

### Claude Code

- Entra con su propio login de la suscripción, así que no necesita claves de API.
- Si un conector o un servidor MCP pide credenciales:
  1. Primero se prueba el login del propio conector (OAuth, desde `/mcp`), y Claude Code guarda el token.
  2. Si solo acepta un token fijo, va en la configuración de usuario de Claude Code (`claude mcp add --scope user`), que queda en `C:\Users\PC\.claude.json`. Lo carga Sergio Urcullo siguiendo el paso 3 de arriba.
  3. Nunca va en un `.mcp.json` del repo ni en una variable de Windows.
- La terminal de Claude Code ve las variables de entorno de Windows. Por eso ahí no van secretos.

### Codex

- Entra con su propio login de ChatGPT.
- Si un servidor MCP pide credenciales, primero se prueba su login OAuth. Si solo acepta un token fijo, va en `C:\Users\PC\.codex\config.toml`, y lo carga Sergio Urcullo con el Bloc de notas.
- Por defecto, Codex deja que sus comandos vean las variables de entorno con KEY, SECRET o TOKEN en el nombre (`shell_environment_policy.ignore_default_excludes` vale `true`, según su [referencia de configuración](https://learn.chatgpt.com/docs/config-file/config-reference)). Es otra razón para no guardar secretos en variables de Windows.

## Las tres variables de Windows

`GEMINI_API_KEY`, `ELEVENLABS_API_KEY` y `N8N_MCP_TOKEN` están en las variables de usuario de Windows, donde cualquier programa las puede leer.
- Al 28-oct no las usa nada: ni Claude, ni Codex, ni los proyectos de `C:\dev\proyectos`, sin contar las copias del repo viejo.
- Hermes ya las ignora: Gemini se apagó con `hermes auth remove gemini`, y la voz está apagada.

Se pasan a la bóveda de a una, desde una PowerShell abierta desde el menú Inicio. La que se abre desde la app de Claude ve una copia del registro, no el real.

1. **Llevar el valor a la bóveda,** por uno de estos dos caminos:
   - **Cambiarlo (recomendado):** como estuvo a la vista de cualquier programa, se crea una clave nueva en el proveedor, se guarda en la bóveda y se revoca la vieja.
     - Gemini: en Google AI Studio.
     - ElevenLabs: en su panel.
     - `N8N_MCP_TOKEN` sale de n8n, que está en producción. Cambiarlo puede cortar a quien lo use, así que va con el sí de Sergio Urcullo.
   - **Copiarlo tal cual,** sin que se vea:

     ```powershell
     [Environment]::GetEnvironmentVariable('GEMINI_API_KEY', 'User') | Set-Clipboard
     ```

     Se pega en la entrada nueva de KeePassXC y se vacía el portapapeles con `Set-Clipboard -Value ' '`.
2. **Borrar la variable:**

   ```powershell
   [Environment]::SetEnvironmentVariable('GEMINI_API_KEY', $null, 'User')
   ```

3. **Comprobar que no quedó,** en una PowerShell nueva. Esto devuelve `True` sin mostrar ningún valor:

   ```powershell
   $null -eq [Environment]::GetEnvironmentVariable('GEMINI_API_KEY', 'User')
   ```

4. **Reiniciar la app de Claude, Codex y las terminales abiertas.** Cada programa recibe una copia de las variables al arrancar, así que hasta que se reinicia sigue viendo la vieja.

Lo mismo se repite con `ELEVENLABS_API_KEY` y `N8N_MCP_TOKEN`. Desde Claude se puede verificar el registro real con WMI, solo por el nombre de la variable y sin leer el valor.

## Navegadores con sesión

**Para todos:**
- Los agentes usan sesiones que ya están abiertas. El login, la verificación en dos pasos, el consentimiento de Google y las sesiones vencidas los resuelve Sergio Urcullo en su pantalla.
- Ningún agente escribe una contraseña en un formulario. La excepción es Hermes con su cofre, que no se la muestra al modelo.
- Los perfiles persistentes que se armen para agentes van en `C:\Users\PC\BovedaPrivada\BrowserProfiles`, hoy vacía, nunca dentro de un repo.
- Cada perfil lo usa un agente a la vez. No se copian cookies entre worktrees.
- El puerto de control del navegador (CDP) nunca se abre a Internet.

**Claude Code:**
- El navegador de la app guarda sus propias sesiones, separadas de Chrome.
- Claude en Chrome usa el Chrome de Sergio Urcullo, con sus sesiones.

**Codex** no tiene un navegador con sesión armado. Si hace falta, se decide aparte.

**Hermes** ([detalle en su documentación](https://hermes-agent.nousresearch.com/docs), `user-guide/features/browser.md`):
- Por defecto abre un Chromium limpio, sin sesiones.
- Para los sitios con login usa su cofre (`hermes vault add`).
- `browser.use_real_profile: true` copia el perfil activo de Chrome, con todas sus cookies, a la carpeta de Hermes.
  - **No se usa con el perfil personal,** porque le daría a Hermes todas las cuentas abiertas.
  - Si hace falta, se crea en Chrome un perfil aparte, solo con las cuentas de trabajo, y se fija con `browser.real_profile_pin`.
  - En Windows, la primera copia necesita Chrome cerrado del todo.
- En las tareas sin nadie mirando (cron, Telegram) Hermes no puede preguntar: lo que necesite tiene que estar guardado antes en su cofre.
- El armado concreto es el [issue #7](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/7).

## Si un secreto se filtra

Si aparece en el chat, en un log o en un commit, ese mismo día:
1. se cambia en el proveedor y se revoca el viejo;
2. se actualiza la bóveda;
3. se reemplaza en cada agente que lo tenga cargado, según las notas de la entrada.

Borrarlo del commit no alcanza: el valor viejo ya hay que darlo por visto.
