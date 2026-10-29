# Lecciones

Lo que ya salió mal y cómo no repetirlo. Lo leen Claude Code, Codex y Hermes antes de empezar. Cómo se suma una lección está en el `AGENTS.md`, en "Errores y lecciones". Las de una sola tarea van en la skill de esa tarea.

Cada lección es una regla y su porqué, con la fecha y de dónde sale.

## PowerShell 5.1

- **Una lista que se pasa a un comando va entre comillas simples,** como en `hermes config set skills.external_dirs '[]'`. Si sus elementos llevan comillas, la lista va entre comillas dobles y los elementos entre simples, como en el `approvals.deny` de Hermes.
  - Por qué: sin comillas, PowerShell puede cortar la lista en las comas y el comando no la recibe como un solo valor. 28-oct, [hermes-oficial](decisiones/2026-10-28-hermes-oficial.md).
- **Para mover una carpeta dentro del mismo disco se usa `[IO.Directory]::Move`, no `Move-Item`.** Entre discos distintos, `[IO.Directory]::Move` da error.
  - Por qué: si Windows le niega mover la carpeta entera, `Move-Item` sigue archivo por archivo, falla con los ocultos como `.git` y deja la carpeta partida en dos lugares. Pasó dos veces el 28-oct, [hermes-oficial](decisiones/2026-10-28-hermes-oficial.md). Que entre discos da error lo probó el 29-oct la revisión 1 del [PR #31](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/31).
- **Si Avast frena un script lanzado como proceso aparte (`powershell -File …`), se corre pegado en la misma ventana,** con `& ([scriptblock]::Create((Get-Content -Raw '<ruta>.ps1')))`.
  - Por qué: con Avast activo, el script lanzado aparte no pudo mover ni renombrar `%LOCALAPPDATA%\hermes`, y pegado en la ventana sí. 28-oct, [hermes-oficial](decisiones/2026-10-28-hermes-oficial.md).

## Windows y la app de Claude

- **Desde la app de Claude no se cambia nada en `AppData`, salvo `%TEMP%` y `%LOCALAPPDATA%\Claude-Data`, ni en el registro del usuario (HKCU).** Lo corre Sergio Urcullo desde una PowerShell abierta desde el menú Inicio. Para leer lo real se usa WMI.
  - Por qué: la app es un paquete MSIX, y sus procesos ven `AppData` y el registro del usuario a través de una copia. Lo que escriben en `AppData`, fuera de esas dos carpetas, queda en una copia escondida. 28-oct, comprobado con archivos de prueba, [hermes-oficial](decisiones/2026-10-28-hermes-oficial.md); el registro se leyó con WMI por lo mismo, [#2](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/2).
- **Un Markdown que se edita con el Notepad de Windows 11 se guarda en modo "Syntax", no "Formatted".**
  - Por qué: en modo "Formatted", el Notepad agrega `\` antes de los guiones. 28-oct, con el `SOUL.md` de Hermes, [hermes-oficial](decisiones/2026-10-28-hermes-oficial.md).

## Hermes

- **A una aprobación de Hermes se contesta "once", nunca "always".** `command_allowlist` tiene que estar vacía.
  - Por qué: "always" la guarda en `command_allowlist` y vale para todas las sesiones. Un "always" del 28-oct dejó correr sin preguntar `python -c`, `node -e` y `powershell -Command`, hasta que se vació la lista. [hermes-oficial](decisiones/2026-10-28-hermes-oficial.md).
- **No se usan `hermes -z` ni `hermes --oneshot`.**
  - Por qué: como nadie los atiende, aprueban solos todos los comandos peligrosos. `approvals.deny` frena `-z` pero no `--oneshot`. 28-oct, [hermes-oficial](decisiones/2026-10-28-hermes-oficial.md).

## Credenciales

- **Borrar una clave no la revoca.** Si se filtró en el chat, un log o un commit, Sergio Urcullo crea una nueva, la guarda en la bóveda y revoca la vieja en el proveedor, como dice [credenciales](credenciales.md).
  - Por qué: borrarla de la variable, el archivo o el commit no la invalida, y quien la vio la puede seguir usando. Las tres claves de las variables de Windows también se revocaron; lo confirmó Sergio Urcullo el 29-oct en el [PR #16](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/16).

## Git y GitHub

- **Para que un PR cierre un issue, la descripción dice `Closes #N`, en inglés.**
  - Por qué: GitHub solo reconoce las palabras en inglés (`close`, `fix` o `resolve` y sus formas). El 28-oct, "Resuelve #5", en el [PR #16](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/16), no cerró el #5 y hubo que cerrarlo a mano. `Closes #10`, en el [PR #17](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/17), sí lo cerró.
- **Antes de mergear, se trae `main` actualizado y se busca con `git grep` lo que el cambio deja viejo en el resto del repo.** Si está en un archivo de otra tarea, va a un issue.
  - Por qué: Git marca conflicto solo cuando dos PRs cambian las mismas líneas. El 29-oct, después de varios PRs mergeados en paralelo sin conflictos, `docs/estado-limpieza-2026-10-28.md` seguía dando el #10 como pendiente y `docs/decisiones/2026-10-28-hermes-oficial.md` seguía dando entre las claves aplicadas "`skills.project_discovery: false`, o confiar solo en ONIA-CENTRAL", sin decir cuál quedó: según el [PR #17](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/17), está en `true`, con ONIA-CENTRAL como único repo de confianza.
