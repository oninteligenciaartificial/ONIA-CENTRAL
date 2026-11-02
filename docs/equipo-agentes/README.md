# Los tres proyectos

Desde el 3-nov-2026, el equipo son tres proyectos, y cada uno es su propio jefe, sin jefe general (`AGENTS.md`, "Equipo de agentes"). El jefe arranca limpio, lee solo lo suyo y pasa cada tarea larga a un agente con el contexto limpio. Cada área tiene un solo jefe a la vez: su proyecto de Claude o su sesión de Codex, no los dos.

| Proyecto | Qué hace | Estado que lee | Repos |
|---|---|---|---|
| Marketing y ventas | Contenido, marca, anuncios, la venta de talleres y comunidad, y los archivos y videos que manda Sergio Urcullo | "Ahora" de [`marketing.md`](marketing.md) y de [`negocio.md`](negocio.md) | ONIA-CENTRAL |
| Desarrollo | VPS, Chatwoot, n8n, Cal.com, las webs y la infraestructura del equipo | "Ahora" de [`producto.md`](producto.md) | ONIA-CENTRAL y `sergiourcullo` |
| ONIA Platform | La startup y el producto | "Ahora" de [`platform.md`](platform.md) | ONIA-CENTRAL y `onia-platform` |

## En Claude, mientras dure la cuenta

Claude vence el 3-nov ([un jefe por área](../decisiones/2026-11-02-tres-proyectos.md)). Hasta entonces, cada jefe es un proyecto de Claude con los repos de la tabla. Cada proyecto tiene un jefe, que es con quien se habla en el chat del proyecto, e hilos, uno por tarea, que arrancan limpios. Así funciona el proyecto Onia, donde se armó este cambio el 2-nov. Según el coordinador de ese proyecto, cada proyecto tiene su propia memoria y sus instrucciones, no ve la memoria de otro, y el jefe se resume solo cuando su charla crece (2-nov, sin enlace).

**Un proyecto de Claude no llega a la PC.** El 2-nov, la herramienta de dispositivos del proyecto Onia contestó que esta cuenta pide dispositivos de confianza ("Require trusted devices", en Configuración, Cuenta o Cowork) y que con eso todavía no anda Remote Control desde un proyecto. Apagarlo baja la seguridad de la cuenta, y lo decide Sergio Urcullo. El jefe trabaja con los repos de la tabla y con los conectores que tenga la cuenta, pero no ve lo que solo está en la PC: el registro privado en `E:`, la clave del VPS, `ver-video` en WSL, los navegadores de Ubuntu ni PowerShell.

**Cuando hace falta la PC** (`AGENTS.md`, "La PC, cuando hace falta"):

1. Si se puede hacer en el repo, se hace en el repo.
2. Si no, el jefe abre un issue en ONIA-CENTRAL con la tarea: qué hacer, qué no tocar y dónde dejar el resultado, en un PR o en el mismo issue. Si toca producción, gasto o algo que se publica, nada de eso se hace sin el sí de Sergio Urcullo (`AGENTS.md`, "Frenos"). Los logins, las claves y las cuentas los hace él.
3. En el issue deja escrita la línea entera para abrir la sesión de Codex del área: la de su proyecto en "En Codex, después", con este texto entre las comillas: `Hacé solo el issue N de ONIA-CENTRAL, que es una tarea de la PC, y dejá el resultado donde dice el issue.`, con el número del issue en lugar de la N.
4. Sergio Urcullo la corre en una ventana de PowerShell. Si la tarea es suya, como cargar una clave, la hace él y lo anota en el issue.
5. El jefe sigue desde el issue o el PR. Nada queda solo en la PC.

Texto para las instrucciones de cada proyecto:

**Marketing y ventas**

```text
Sos el jefe de Marketing y ventas de ONIA: contenido, marca, anuncios, la venta del taller y la comunidad, y los archivos y videos que te manda Sergio. Tus estados son docs/equipo-agentes/marketing.md y docs/equipo-agentes/negocio.md, en ONIA-CENTRAL. Al empezar, leé solo lo que pide el AGENTS.md en "Cada jefe lee al arrancar". Lo que haga falta de otra área se pide en el tablero del issue #111, y lo que solo está en la PC, como dice "La PC, cuando hace falta". Lo que tiene que durar (estado, decisiones y correcciones de Sergio) va al repo por PR, no solo a la memoria del proyecto, porque cuando se termine Claude se sigue en Codex.
```

**Desarrollo**

```text
Sos el jefe de Desarrollo de ONIA: VPS, Chatwoot, n8n, Cal.com, las webs y la infraestructura del equipo (Codex, conectores, la PC y la auditoría semanal). Tu estado es docs/equipo-agentes/producto.md, en ONIA-CENTRAL. Al empezar, leé solo lo que pide el AGENTS.md en "Cada jefe lee al arrancar". Lo que haga falta de otra área se pide en el tablero del issue #111, y lo que solo está en la PC, como dice "La PC, cuando hace falta". Lo que tiene que durar (estado, decisiones y correcciones de Sergio) va al repo por PR, no solo a la memoria del proyecto, porque cuando se termine Claude se sigue en Codex.
```

**ONIA Platform**

```text
Sos el jefe de ONIA Platform: la startup y el producto, cuyo código vive en onia-platform. Tu estado es docs/equipo-agentes/platform.md, en ONIA-CENTRAL. Al empezar, leé solo lo que pide el AGENTS.md en "Cada jefe lee al arrancar". Lo que haga falta de otra área se pide en el tablero del issue #111, y lo que solo está en la PC, como dice "La PC, cuando hace falta". Lo que tiene que durar (estado, decisiones y correcciones de Sergio) va al repo por PR, no solo a la memoria del proyecto, porque cuando se termine Claude se sigue en Codex.
```

## En Codex, después

Cada jefe es una sesión de Codex en su carpeta y con su perfil. Las carpetas y los perfiles ya existen: los armó el Administrador el 2-nov. Cada perfil trae el modelo, el esfuerzo y el navegador del área ([navegador por área](../decisiones/2026-11-02-navegador-por-area.md)).

| Proyecto | Carpeta | Perfil de Codex |
|---|---|---|
| Marketing y ventas | `C:\dev\worktrees\ONIA-CENTRAL\marketing` | `marketing` |
| Desarrollo | `C:\dev\worktrees\ONIA-CENTRAL\boss-code` | `boss-code` |
| ONIA Platform | `C:\dev\worktrees\ONIA-CENTRAL\onia-platform` | `onia-platform` |

**Los navegadores, sin decidir:** Marketing y ventas arranca con el perfil `marketing`, donde va la cuenta de Meta. Los perfiles `boss-no-code` (pedido para WhatsApp, Yolo Pago y Chatwoot) y `recepcion` (para las cuentas secundarias de Instagram y TikTok) eran de áreas que ahora son parte de Marketing y ventas. Juntar esas cuentas en `marketing` las pone en el mismo navegador que Meta, y Sergio Urcullo pidió un navegador por área para que una sesión no "se meta a Meta" ([navegador por área](../decisiones/2026-11-02-navegador-por-area.md)). Qué perfiles quedan y qué cuentas lleva cada uno lo decide él, que es quien las carga.

**Antes de usar las líneas de abajo, una sesión en la PC las lee con `ParseInput`, sin correrlas** ("Núcleo" de [`docs/lecciones.md`](../lecciones.md), punto 14). En este cambio no se leyeron, porque se armó en una computadora sin PowerShell. La primera vez, Sergio Urcullo abre la sesión de Desarrollo a mano, con los mismos comandos del ensayo del 2-nov sin `exec`, y le pide que las lea:

```powershell
Set-Location C:\dev\worktrees\ONIA-CENTRAL\boss-code
codex -p boss-code
```

Después, cada línea va en su propia ventana de PowerShell, de a una y con unos segundos entre una y otra. Si `git pull` falla, Codex no se abre.

```powershell
Set-Location C:\dev\worktrees\ONIA-CENTRAL\boss-code; git pull --ff-only origin main; if ($?) { codex -p boss-code "Sos el jefe de Desarrollo de ONIA y tu estado es docs/equipo-agentes/producto.md. Leé solo lo que pide el AGENTS.md en la regla Cada jefe lee al arrancar, y seguí desde ahí. Si la herramienta playwright no aparece, esperá unos segundos y buscala de nuevo." }
```

```powershell
Set-Location C:\dev\worktrees\ONIA-CENTRAL\marketing; git pull --ff-only origin main; if ($?) { codex -p marketing "Sos el jefe de Marketing y ventas de ONIA y tus estados son docs/equipo-agentes/marketing.md y docs/equipo-agentes/negocio.md. Leé solo lo que pide el AGENTS.md en la regla Cada jefe lee al arrancar, y seguí desde ahí. Si la herramienta playwright no aparece, esperá unos segundos y buscala de nuevo." }
```

```powershell
Set-Location C:\dev\worktrees\ONIA-CENTRAL\onia-platform; git pull --ff-only origin main; if ($?) { codex -p onia-platform "Sos el jefe de ONIA Platform y tu estado es docs/equipo-agentes/platform.md. Leé solo lo que pide el AGENTS.md en la regla Cada jefe lee al arrancar, y seguí desde ahí. Si la herramienta playwright no aparece, esperá unos segundos y buscala de nuevo." }
```

**Qué está probado y qué no:**

- El 2-nov se probó `codex -p <perfil> exec --sandbox read-only` en cada carpeta: cada sesión arrancó con su modelo y su esfuerzo y leyó su estado ([coordinacion](coordinacion.md), "Ensayo del 2-nov").
- Sin probar: el modo interactivo, que es el que abren estas líneas, y estas tres líneas con este texto. Tienen la misma forma que las del 2-nov, en [coordinacion](coordinacion.md), y dentro de las comillas no llevan `$` ni comillas, que PowerShell interpretaría.
- En ese ensayo, Boss Code y ONIA Platform, abiertas con un segundo de diferencia, no vieron el navegador, y Recepción tampoco en su primera búsqueda; después, sí. La causa no está confirmada: puede ser que la herramienta tarde en aparecer, o el arranque a la vez ([coordinacion](coordinacion.md)). Por las dudas se abren de a una, y la línea le pide a Codex buscarlo de nuevo.
- Sin probar en la PC: que el jefe le pase una tarea a un subagente o a la skill `encargar`.

## Relevo a Codex

Cuando se termine Claude, el 3-nov o cuando se corte la mensualidad, Codex sigue con los tres proyectos. Lo pidió Sergio Urcullo el 2-nov: "él sería tu sucesor para seguir trabajando".

1. **Antes del corte,** cada proyecto de Claude cierra como dice "Al cerrar una sesión", abajo: "Ahora" y "Correcciones de Sergio" al día y mergeados, y en el "Ahora", cada PR suyo que quede abierto. Lo que quede solo en los hilos o en la memoria del proyecto, Codex no lo ve.
2. **Primero se abre Desarrollo,** a mano, con los dos comandos de "En Codex, después". Su primera tarea es leer las líneas de esa sección con `ParseInput` y corregirlas por PR si hace falta.
3. **Después, Marketing y ventas y ONIA Platform,** cada una con su línea, de a una.
4. **Cada sesión de Codex sigue como su proyecto de Claude:** lee lo mismo al arrancar, escribe en el mismo estado y usa el mismo tablero. Cambian tres cosas: pasa las tareas largas a un subagente o a la skill `encargar`; revisa con `codex exec --sandbox read-only`; y, como corre en la PC, hace ella misma lo de la PC que sus permisos dejen, con los mismos frenos.
5. **En su primer trabajo real,** cada una comprueba lo que sigue sin probar ("Qué está probado y qué no", arriba). Si pasar una tarea a otro agente no anda, sigue lo que dice [un jefe por área](../decisiones/2026-11-02-tres-proyectos.md), "Si pasar la tarea a otro agente no anda en Codex".
6. **Codex también vence, el 14-nov.** Si se renueva lo decide Sergio Urcullo el 12-nov, con lo que haya vendido el taller ([plan del 1-nov](../decisiones/2026-11-01-plan-equipo-y-paso-a-codex.md), "Codex también vence").

## Qué pasó con las otras sesiones

- **Las sesiones viejas de Claude Code:** antes de crear los proyectos, Sergio Urcullo archiva las que siguen abiertas, las de cada área y las dos del Administrador, para que ninguna siga escribiendo en los estados (`AGENTS.md`, "Cada área tiene un solo jefe a la vez"). Cuáles eran está en [coordinacion](coordinacion.md), "Sesiones abiertas". La propuesta mínima de hooks de Grok Bot, que llevaba una del Administrador, pasa a Desarrollo.
- **Administrador:** no hay. Su infraestructura pasa a Desarrollo. Si dos proyectos necesitan el mismo archivo, va primero el que ya tiene el PR abierto, y si no se ponen de acuerdo, decide Sergio Urcullo (`AGENTS.md`, "Un agente por tarea").
- **Pelau:** cada jefe le da su resumen a Sergio Urcullo al cerrar un trabajo.
- **Analista:** cada PR sigue con su revisión independiente escrita, y Desarrollo encarga una auditoría por semana, en vez de una por día.
- **Recepción:** Sergio Urcullo le manda los archivos, enlaces y videos al proyecto que los usa; si no está claro, a Marketing y ventas. La skill [`ver-video`](../../.agents/skills/ver-video/SKILL.md) sigue disponible.
- **Boss No-Code:** queda dentro de Marketing y ventas. Su estado, `negocio.md`, se junta con `marketing.md` después del taller.

Sus estados viejos quedan como historia: [coordinacion](coordinacion.md) y [recepcion](recepcion.md).

## Al cerrar una sesión

1. Poner al día "Ahora" en el estado: objetivo, "hecho cuando", próximo paso, qué espera a Sergio Urcullo y sus decisiones vigentes, en 30 líneas como mucho.
2. Anotar en "Correcciones de Sergio" lo que él corrigió, y en el tablero lo que queda para otra área.
3. Darle a Sergio Urcullo el resumen de lo hecho (`AGENTS.md`, "El resumen para Sergio Urcullo").
4. Mergear el estado antes de abrir la sesión siguiente, porque esa sesión lee el "Ahora" de `main`. Va en un PR propio: un estado es un documento interno de `docs/`, que se mergea sin preguntar cuando la última revisión da "aprobar" (`AGENTS.md`, "Lo mergea Claude sin preguntar"). Lo que necesita el sí de Sergio Urcullo va en otro PR, y se le pide enseguida ("Núcleo" de [`docs/lecciones.md`](../lecciones.md), punto 3).
5. Lo que sigue arranca limpio: en Claude, en un hilo nuevo del proyecto; en Codex, en una sesión nueva, con la línea de arriba.
