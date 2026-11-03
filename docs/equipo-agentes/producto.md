# Desarrollo (antes Boss Code): estado

> Desde el 3-nov-2026, esta área es **Desarrollo**, y suma la infraestructura del equipo que hacía el Administrador ([README](README.md)).

Área: el servidor (VPS), Chatwoot, n8n, Cal.com y la web del taller. Desde el 1-nov-2026 es una sesión de Claude Code en esta PC; antes era un bot de Grok Bot. Lo decidió Sergio Urcullo ese día, en la sesión coordinadora (sin enlace). El VPS y lo publicado son producción, y valen los "Frenos" del `AGENTS.md`.

Actualizado el 2-nov-2026, con lo comprobado el 1 y el 2-nov desde esta PC. Cómo se comprobó cada cosa está al final. El estado que dejó el bot de Grok está en la rama `origin/onia-loop-excepcion-d003` (commit `c2796fa`), en este mismo archivo. Se tomó como dato, no como regla, y no se copia acá.

## Ahora

Al cerrar el 2-nov-2026. Desde el 3-nov, esto lo lleva el jefe de Desarrollo; cómo se abre, en Claude o en Codex, está en el [README](README.md). En la PC, la rama del sitio personal sigue en el worktree `C:\dev\worktrees\sergiourcullo-taller`. Los mensajes entre áreas van al tablero, el [issue #111](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/111).

**Objetivo y hecho cuando:** los del orden de "VPS", abajo, que pidió Sergio Urcullo el 2-nov. **Próximo paso:** el orden de "VPS", abajo, empezando por las cabeceras para el onia-platform #154.

**Decisiones vigentes de Sergio Urcullo:** van citadas en cada punto de abajo; lo que espera su decisión, en el último.

- **Web del taller:** publicada. El 2-nov, Boss No-Code pasó "Bs 50, precio de esta edición" y el texto de después del inicio ("El taller ya empezó: escribinos y te pasamos las clases grabadas."). Están en el [PR del sitio que suma el precio de esta edición](https://github.com/oninteligenciaartificial/sergiourcullo/pull/2), que espera el sí de Sergio Urcullo con captura, porque mergear publica. Que no haya cierre de inscripción (se vendería hasta el viernes 6, con las clases grabadas, como dice el borrador de WhatsApp, `workshops-comunidad/whatsapp-taller-3-4-5-borrador.md`) ni límite de personas es la propuesta de Boss No-Code: lo decide Sergio Urcullo ([`negocio.md`](negocio.md), "Qué espera a Sergio Urcullo"). Después del 6-nov, la página se baja o se cambia, también con su sí.
- **VPS (3-nov):** ya se entra. La clave está cargada en el `ssh-agent` de Windows, y el servidor y el usuario están en "Accesos desde esta PC". El VPS está prendido (16 días sin reiniciarse), con 11 GB de memoria y 84 GB de disco libres, y la plataforma, su Supabase, Chatwoot, n8n y el correo andan. El runner de la CI de ONIA Platform estaba caído desde el 31-oct, y el 3-nov se rearmó con el sí de Sergio Urcullo: ver "Runner de la CI", abajo. Lo que sigue va en solo lectura y en el orden que pidió el Administrador el 2-nov, por un pedido de Sergio Urcullo ("Primero lo de onia, necesitamos tener todo listo hasta hoy", [constancia en el #111](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/111#issuecomment-6587567915)):
  1. para ONIA Platform, antes de mergear el [onia-platform #154](https://github.com/oninteligenciaartificial/onia-platform/pull/154): qué le llega a la app en `X-Forwarded-For` y en `CF-Connecting-IP`, según la configuración de Traefik y Cloudflare;
  2. para ONIA Platform: si el runbook de correos del [onia-platform #70](https://github.com/oninteligenciaartificial/onia-platform/pull/70) está aplicado en el VPS, como dice ese PR.

  Los dos se dejan en el #111 y se le avisan a ONIA Platform. Después:
  3. el inventario que pidió Sergio Urcullo el 2-nov, por el Administrador ("limpia el vps ordenalo o eso dejaselo a la sesion que le toque"): contenedores, servicios, tareas programadas, memoria, disco y CPU, qué sobra, el Hermes viejo, y si entra el navegador de Linux de las áreas, que hoy usa unos 3,4 GB de la PC;
  4. si sigue corriendo el respaldo semanal.

  Después van la lista de qué limpiar y la base de QA sin datos de clientes, que Sergio Urcullo pidió el 2-nov ("Hoy, mirar y armar la QA"). Cada cambio se le pregunta así: "Sergio, tenés este cambio: … ¿Lo aceptás?".
- **Mejoras de seguridad de Grok:** quedaron evaluadas en el [issue de qué mejoras de Grok sirven hoy](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/160), con la revisión 3 en "aprobar". Esperan la decisión de Sergio Urcullo en A, B y C, que tocan permisos o cómo se revisa. El punto D se comprueba en el primer trabajo real en Codex.
- **La clave:** Sergio Urcullo eligió el 2-nov la de la bóveda, `claude-cloud-vps-20260930`. Esa noche avisó que la bóveda no estaba creada: `C:\Users\PC\BovedaPrivada\Agentes.kdbx` no existía, y la clave seguía suelta en `C:\Users\PC\BovedaPrivada\`, como dice [credenciales](../credenciales.md) (de esa carpeta se miraron solo los nombres de los archivos). Se le pasaron estos pasos:
  - crear la bóveda, como dice [credenciales](../credenciales.md);
  - guardar la clave como adjunto de una entrada (en "Advanced Entry Handling" de la [guía de KeePassXC](https://keepassxc.org/docs/KeePassXC_UserGuide));
  - en una PowerShell como administrador, poner `ssh-agent` en automático, arrancarlo, cargar la clave suelta con `ssh-add` y borrarla, como dice la [guía de Microsoft](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_keymanagement);
  - pasar el servidor y el usuario, que no son secretos.

  El 3-nov, `ssh-add -l` mostró la clave cargada, el servicio `ssh-agent` estaba en automático y la clave privada ya no estaba suelta en `BovedaPrivada` (queda la `.pub`). La bóveda `Agentes.kdbx` todavía no existe: falta confirmar con Sergio Urcullo dónde quedó guardada la copia de la clave, porque si no está en ningún lado, se pierde al reinstalar Windows.
- **Heredado del Administrador (3-nov):** la lista está en "Heredado del Administrador", abajo.
- **Auditoría semanal:** cada sábado, con un agente nuevo en solo lectura; la primera, el 7-nov, cubre desde el 2-nov (`AGENTS.md`, "Equipo de agentes").
- **Espera a Sergio Urcullo:** dónde quedó la copia de la clave; el sí con captura del PR del sitio; cada cambio en el VPS; cualquier otro cambio en `/taller`; los puntos A, B y C del issue de mejoras de seguridad.

## Correcciones de Sergio

Una línea por corrección, en el mismo turno: fecha, qué pasó y la regla (`AGENTS.md`, "Errores y lecciones").

- 2-nov: Sergio Urcullo dijo que al día siguiente tenían que correr los anuncios, y el hilo del armado del equipo pidió abrir ya un hilo para lanzarlos. Él quería primero terminar el armado y crear los proyectos ("No dije que lances, primero esperamos que terminamos y ahi armaos los proyects"). Regla: se sigue su orden de pasos, y lo demás se le propone sin lanzarlo. Ya era lección ("Trabajo con Sergio Urcullo"), y pasó al Núcleo.
- 2-nov: en el hilo del armado del equipo se le contaron las rondas de revisión sin decir qué se revisaba, y preguntó "Te puedo preguntar que tanto revisas?" y "Pero revision de que???". Regla: al hablarle de una revisión, primero se dice en palabras simples qué texto se revisa y para qué, y cuánto falta.

## Heredado del Administrador

Desde el 3-nov, Desarrollo hace lo que hacía el Administrador con la infraestructura del equipo ([un jefe por área](../decisiones/2026-11-02-tres-proyectos.md), "Quién se encarga de qué"):

- cuidar que las reglas y el repo no se contradigan;
- preparar la configuración del equipo: perfiles y permisos de Codex, Notion y Drive del [#128](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/128), la matriz de autonomía y las memorias del [#38](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/38);
- poner al día los datos del panel de dirección (`otros/panel-direccion/datos.json`);
- medir A y B de Codex con `/status` en su primera sesión ([plan del 1-nov](../decisiones/2026-11-01-plan-equipo-y-paso-a-codex.md), punto 2);
- pedirle a Sergio Urcullo, todo junto, lo suyo en la PC: Orca y Antigravity, los accesos de `.onia` y las claves de `.claude.json`;
- el [PR #161](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/161) del Administrador, abierto, con los pasos para abrir las ocho áreas en la app de Codex: rescatar lo que sirva para los tres proyectos, como el `.codex\config.toml` de cada carpeta, y cerrarlo;
- el panel de dirección (`otros/panel-direccion/datos.json`) todavía tiene pendientes del Administrador y del equipo viejo: pasarlos a cada proyecto;
- proponerle a Sergio Urcullo un tope de rondas de revisión en el `AGENTS.md`, porque la regla pide revisar de nuevo después de cada arreglo, sin tope (hilo del armado del equipo, 2-nov);
- comprobar con Sergio Urcullo que quedaron archivadas las sesiones viejas de Claude Code ([README](README.md), "Qué pasó con las otras sesiones");
- lo que ONIA Platform dejó para la coordinación (`platform.md`, "Para otras áreas"): el `COMO-TRABAJAR.md` de la rama de Grok Bot pide tuteo, y la regla es el voseo. El respaldo del VPS ya está en el orden de "VPS", arriba;
- para después: el bot en la nube del [#96](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/96), comprobar que nada dependa de Grok Bot antes de retirarlo, y las skills `/empezar`, `/cerrar` y `/auditar`.

El detalle está en `coordinacion.md`, "Relevo del Administrador (2-nov, a la tarde)", "Lo que le toca a Sergio" y "Para después". De ahí, el estado de Marketing en `main` (PR #102) y el panel (PR #155) ya están mergeados, y "probar un mensaje directo de un área a otra" ya no va, porque entre proyectos se usa el tablero. Los permisos y las reglas los aprueba él.

## Qué hay y dónde

| Cosa | Dónde está | Comprobación y fecha |
|---|---|---|
| Sitio personal `sergiourcullo.vercel.app` | Repo privado `oninteligenciaartificial/sergiourcullo`, copia local en `C:\dev\proyectos\sergiourcullo-deploy`, al día con `origin/main` | El sitio responde 200. Último commit `e72690b`, del 2-nov (la página del taller); la copia local quedó al día ese día. Cada commit a `main` lo publica Vercel solo, en Production (deployments de `vercel[bot]` en GitHub). Mergear a `main` de ese repo es publicar. |
| Web del taller | `sergiourcullo.vercel.app/taller`, publicada desde el [PR del sitio que agrega `/taller`](https://github.com/oninteligenciaartificial/sergiourcullo/pull/1) (merge `e72690b`) | 2-nov: publicada con el sí de Sergio Urcullo ("publicala"), citado en el PR. Sin login, la página da 200, la cuenta regresiva corre y los 4 botones abren el chat de "Onia" con "vengo de la web" ya escrito. |
| WhatsApp del taller, +591 75414930 | `wa.me/59175414930?text=TALLER` | 2-nov: sin login, el enlace abre el chat de la cuenta "Onia" con "TALLER" ya escrito. No se mandó nada. |
| Cal.com | `/llamada` del sitio redirige a `cal.com/sergiourcullo/20min` (`vercel.json`) | La redirección da 307 y la página de Cal.com da 200. |
| VPS, Chatwoot y n8n de producción | Hostinger, `187.77.16.63` (`srv1360183`), con Easypanel | 3-nov: se entró en solo lectura. 25 contenedores arriba, entre ellos `onia-platform`, el Supabase, Chatwoot, `n8n-sergio_n8n` y `onia-mail`. No hay conector de la app para Chatwoot, n8n ni Cal.com. |

El bot de Grok dejó escrito que no encontró el código del sitio personal y que el sitio no respondía. Desde esta PC están las dos cosas.

## Qué toco y qué no

Lo pidió Sergio Urcullo el 2-nov-2026, por el Administrador: "pedile a cada sesion que se defina para no chocar" (sesión del Administrador, sin enlace).

- **Escribo en ONIA-CENTRAL:** este archivo, que es el estado de Desarrollo (antes Boss Code); una decisión de mi área en `docs/decisiones/` cuando haga falta; y lo que heredé del Administrador: los documentos del equipo en `docs/equipo-agentes/` (el README y `stack.md`), los datos del panel (`otros/panel-direccion/datos.json`) y los cambios al `AGENTS.md`, a `docs/lecciones.md` y a la configuración del equipo, que se mergean como dice la regla de merges del `AGENTS.md`. Siempre por PR.
- **Solo leo:** los estados de las otras áreas, `workshops-comunidad/`, `marca-personal/` y las ramas de Grok Bot.
- **Repos y servicios:**
  - el repo del sitio personal, `oninteligenciaartificial/sergiourcullo`: escribo en ramas y por PR. Mergear publica, así que se mergea solo con el sí de Sergio Urcullo;
  - Vercel: leo los despliegues. No despliego: `vercel` pide el sí en la app ([permisos](../decisiones/2026-11-02-permisos-claude-code.md));
  - Cal.com: solo compruebo que `/llamada` responda;
  - el VPS, Chatwoot y n8n de producción: son del área, pero hoy no los toco. Nunca entré. Hace falta el sí de Sergio Urcullo y la clave en la bóveda, como dice `docs/credenciales.md`;
  - el repo `onia-platform`: no lo toco. Es de ONIA Platform.
- **Navegador de Ubuntu:** solo para comprobar sin login páginas publicadas, como el sitio, el enlace de WhatsApp o Cal.com, cuando no alcanza el navegador de la app de Claude. Lo usa una sola sesión a la vez, como dice el `AGENTS.md`. El 2-nov no lo usé.
- **Cruces con otras áreas:**
  - las ramas de Grok Bot con datos de un lead ([issue #113](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/113)): Boss No-Code las revisa y rescata lo útil (#101). Boss Code solo tomó de ahí la web del taller. Las ramas las borra Boss No-Code, después del rescate, como ordenó el Administrador el 2-nov, y quedan como están hasta después del taller (6-nov), como eligió Sergio Urcullo ese día ([#113](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/113#issuecomment-6584713207));
  - la web del taller: los textos y la marca son de Marketing. El código, el PR y la publicación, de Boss Code. Si Marketing cambia un texto, me lo pasa y lo cambio en el PR;
  - el WhatsApp +591 75414930: lo atiende Boss No-Code. Boss Code solo comprueba que el enlace abra.
- **No hago:** mensajes a clientes, respuestas en WhatsApp, anuncios ni la campaña, código de ONIA Platform, borrar ramas sin que me lo asignen, ni nada en producción sin el sí de Sergio Urcullo.

## Accesos desde esta PC

- **GitHub:** `gh` con la cuenta `oninteligenciaartificial`.
- **Conectores de la app que sirven al área:** Vercel, Cloudflare, Supabase y Google Calendar, todos conectados. No se usaron para esto.
- **Programas instalados:** `vercel` 53.2.0, `codex-cli` 0.166.0, `n8n` (una instalación local, no la del VPS) y `ssh`.
- **SSH al VPS:** `ssh root@187.77.16.63`, con la clave `claude-cloud-20260930` cargada en el `ssh-agent` de Windows. Anda desde PowerShell, con el `ssh` de Windows. Desde Git Bash no: su `ssh` no ve el agente de Windows y da "Permission denied". En `C:\Users\PC\.ssh` hay otras dos claves, sin `config`, que no se usan.
- **Correr varios comandos en el VPS:** se escriben en un `.sh` en la carpeta temporal de la sesión y se pasan por la entrada, sin el BOM ni los `\r` de Windows: `([IO.File]::ReadAllText($s)).TrimStart([char]0xFEFF) -replace "`r","" | ssh root@187.77.16.63 'bash -s'`. Con los comandos en una sola línea entre comillas, PowerShell rompe los `{{.Names}}` de `docker`.

## Runner de la CI

El CI de `onia-platform` corre en un runner propio del VPS (`runs-on: [self-hosted, linux, onia-vps]` en su `ci.yml`), para no gastar los minutos de GitHub, que se agotaron el 27-sep.

- **Qué pasó (visto el 3-nov en el diario del VPS):** el 31-oct a la noche, el contenedor `onia-runner-platform` se reiniciaba solo cada minuto. Esa noche, durante la limpieza de Hermes, se borró `onia-runner-hermes`, y después dejaron de existir también `onia-runner-platform` y su imagen `onia-gh-runner:2.337.0`. En GitHub figura `onia-vps-platform`, apagado. Desde entonces las corridas quedan en cola: el 3-nov había 6, y 10 PRs abiertos de la plataforma.
- **Cómo se rearma:** en el VPS quedaron los scripts, en `/opt/onia-runner`, con el instalador del runner ya bajado:
  - `instalar.sh` arma la imagen (comprueba el SHA-256 del instalador) y levanta los contenedores. Levanta también el de Hermes, que ya no va: para rearmar solo el de la plataforma se corre a mano su `docker build` y el `docker run` de `onia-runner-platform` (1 CPU, 6 GB, `cpu-shares` 256 contra 1024 de producción);
  - `registrar.sh` lo registra en GitHub. El código de registro sale de `gh api -X POST repos/oninteligenciaartificial/onia-platform/actions/runners/registration-token --jq .token` y se le pasa por la entrada, nunca como argumento, como dice el comentario del script;
  - antes, se borra en GitHub el registro viejo apagado, para que el nombre quede libre.
- **Rearmado el 3-nov:** Sergio Urcullo contestó "Si a todo" a "Sergio Urcullo, tenés este cambio: volver a armar en el VPS el runner de ONIA Platform, la máquina que corre las pruebas de cada cambio. ¿Lo aceptás?" (proyecto Onia de claude.ai, hilo "Volver a prender el backend", sin enlace). Se armó la imagen con `nice`, se levantó solo `onia-runner-platform` con los topes de arriba y se registró con `--replace`, que reusa el registro viejo, así que no hizo falta borrarlo. A las 05:10 (UTC) GitHub lo mostró `online` y tomó la primera corrida en cola. El de Hermes no se rearmó.
- **Trampa al registrarlo desde PowerShell:** PowerShell 5.1 le agrega `` al código que pasa por la entrada, y GitHub contesta "Request headers must contain only ASCII characters". Se limpia del lado del VPS: `gh api ... --jq .token | ssh root@187.77.16.63 'tr -cd "A-Za-z0-9
" | bash /opt/onia-runner/registrar.sh onia-runner-platform oninteligenciaartificial/onia-platform onia-vps-platform'`.

## La web del taller

Decisiones de Sergio Urcullo del 2-nov-2026, en esta sesión, con la herramienta de preguntas (sin enlace): "Web corta antes del 3" y "sergiourcullo.vercel.app/taller (Recomendada)". Sobre las ramas de Grok Bot con datos de un lead, eligió "Borrar después del rescate (Recomendada)", y quedó en el [issue #113](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/113#issuecomment-6570861813).

- **Qué tiene:** lo pedido en la sección 5 del análisis de funnel de Boss No-Code ([PR #141](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/141)): barra fija arriba, cuenta regresiva real al miércoles 4 a las 19:00, qué te llevás, temario previsto, "esto no es", para quién es, qué incluye, quién lo da, preguntas frecuentes y 4 botones a WhatsApp con "vengo de la web" ya escrito. El precio sale de la [oferta del 1-nov](../decisiones/2026-11-01-oferta-taller-3-4-5.md), y las fechas, la devolución y las grabaciones, de la decisión del 2-nov ([PR #136](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/136)).
- **Lo que pasó Boss No-Code el 2-nov:** se vende hasta el viernes 6, y quien entra tarde recibe las clases grabadas. No hay límite de personas, y el precio va como "Bs 50, precio de esta edición". Esto último está en el [PR del sitio que suma el precio de esta edición](https://github.com/oninteligenciaartificial/sergiourcullo/pull/2), que espera el sí de Sergio Urcullo. **Sigue sin decidir:** lo legal del nombre y qué plan de Claude hace falta. Si Sergio Urcullo lo decide, Boss No-Code pasa el texto y Boss Code lo suma por PR, con su sí antes de publicar.
- **Publicada el 2-nov:** Sergio Urcullo vio las capturas en el celular y contestó "publicala". Su sí está citado en el PR.
- **Después del 6-nov:** la página queda con fechas pasadas. Se baja o se cambia para la próxima edición.

## Pendiente

- Bajar o cambiar `/taller` después del 6-nov. Cambiarla es publicar, así que va con el sí de Sergio Urcullo.
- Borrar las dos ramas de Grok Bot cuando termine el rescate del #101, como decidió Sergio Urcullo en el #113: lo hace Marketing y ventas (antes Boss No-Code), como ordenó el Administrador el 2-nov, y recién después del taller, que termina el 6-nov, porque el 2-nov Sergio Urcullo eligió "Después del taller" ([#113](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/113#issuecomment-6584713207)). Boss Code ya dejó escrito en el #113 que no necesita nada más de esas ramas.
- El VPS: ver "Ahora", arriba.
- El respaldo semanal del VPS era una rutina del bot de Operaciones. Según el estado del bot de Grok, hay que pasarlo a n8n o a cron antes de borrar ese bot. Sin confirmar si sigue corriendo.
- n8n de prueba: el bot de Grok lo dejó como pendiente (sus decisiones D-017 y T-15, que están solo en `/workspace`).
- Las 11 mejoras de seguridad del harness que propuso el bot quedaron evaluadas en el [issue de qué mejoras de Grok sirven hoy](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/160). Esperan la decisión de Sergio Urcullo en A, B y C.

## Para otras áreas

- **Para ONIA Platform:** el panel interno, el tope de costo de `onia-tarea`, los 10 PRs de la plataforma, el cobro con QR del BCP y la migración a la API de WhatsApp Cloud. El bot de Grok los tenía acá, y los parches siguen solo en `/workspace/platform/`.
- **Para Boss No-Code:** qué recursos y skills gratis van en la sección de recursos del sitio, y la llamada a la acción de venta.
- **Para Marketing:** `sergiourcullo.vercel.app/taller` ya se puede usar en anuncios o publicaciones.

## Cómo se comprobó (1-nov)

- Repos y sitio: `gh repo list oninteligenciaartificial`, `gh api repos/oninteligenciaartificial/sergiourcullo/deployments` y `git log` en `C:\dev\proyectos\sergiourcullo-deploy`.
- Respuestas de las páginas: `curl` sin login a `sergiourcullo.vercel.app`, `/llamada` y `cal.com/sergiourcullo/20min`.
- Web del taller en GitHub: los archivos de los PRs abiertos de ONIA-CENTRAL, con `gh pr view --json files`.
- Conectores: el estado de conectores de esta sesión, en la app de Claude.
- Programas: `--version` de cada uno. SSH: solo los nombres de los archivos de `C:\Users\PC\.ssh`, sin abrirlos.

## Cómo se comprobó (2-nov)

- WhatsApp: el enlace `wa.me/59175414930?text=TALLER`, abierto sin login en el navegador de la app de Claude.
- Web: la página servida en local, vista a 375 px y en escritorio, sin scroll horizontal. La vista previa de Vercel de la rama dio `success` (`gh api .../deployments`) y pide login de Vercel.
- Revisión: siete rondas de `codex exec --sandbox read-only`, escritas en el PR; la última, en "aprobar".
