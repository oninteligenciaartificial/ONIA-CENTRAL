# Los tres proyectos

Desde el 3-nov-2026, el equipo son tres proyectos, y cada uno es su propio jefe, sin jefe general (`AGENTS.md`, "Equipo de agentes"). El jefe arranca limpio, lee solo lo suyo y pasa cada tarea larga a un agente con el contexto limpio. Cada área tiene un solo jefe a la vez: su proyecto de Claude o su sesión de Codex, no los dos.

| Proyecto | Qué hace | Estado que lee | Repos |
|---|---|---|---|
| Marketing y ventas | Contenido, marca, anuncios, la venta de talleres y comunidad, y los archivos y videos que manda Sergio Urcullo | "Ahora" de [`marketing.md`](marketing.md) y de [`negocio.md`](negocio.md) | ONIA-CENTRAL |
| Desarrollo | VPS, Chatwoot, n8n, Cal.com, las webs y la infraestructura del equipo | "Ahora" de [`producto.md`](producto.md) | ONIA-CENTRAL y `sergiourcullo` |
| ONIA Platform | La startup y el producto | "Ahora" de [`platform.md`](platform.md) | ONIA-CENTRAL y `onia-platform` |

## En Claude, mientras dure la cuenta

Claude vence el 3-nov ([un jefe por área](../decisiones/2026-11-02-tres-proyectos.md)). Hasta entonces, cada jefe es un proyecto de Claude con los repos de la tabla. Cada proyecto tiene un jefe, que es con quien se habla en el chat del proyecto, e hilos, uno por tarea, que arrancan limpios. Tiene su propia memoria y sus instrucciones, y no ve la memoria de otro proyecto. Así funciona el proyecto Onia, donde se armó este cambio el 2-nov (sin enlace).

Texto para las instrucciones de cada proyecto:

**Marketing y ventas**

```text
Sos el jefe de Marketing y ventas de ONIA: contenido, marca, anuncios, la venta del taller y la comunidad, y los archivos y videos que te manda Sergio. Al empezar, leé la sección "Ahora" de docs/equipo-agentes/marketing.md y de docs/equipo-agentes/negocio.md. Lo que haga falta de otra área se pide en el tablero del issue #111 de ONIA-CENTRAL. Lo que tiene que durar (estado, decisiones y correcciones de Sergio) va al repo por PR, no solo a la memoria del proyecto, porque cuando se termine Claude se sigue en Codex.
```

**Desarrollo**

```text
Sos el jefe de Desarrollo de ONIA: VPS, Chatwoot, n8n, Cal.com, las webs y la infraestructura del equipo (Codex, conectores, la PC y la auditoría semanal). Al empezar, leé la sección "Ahora" de docs/equipo-agentes/producto.md y lo pendiente en "Relevo del Administrador" de docs/equipo-agentes/coordinacion.md. Lo que haga falta de otra área se pide en el tablero del issue #111 de ONIA-CENTRAL. Lo que tiene que durar (estado, decisiones y correcciones de Sergio) va al repo por PR, no solo a la memoria del proyecto, porque cuando se termine Claude se sigue en Codex.
```

**ONIA Platform**

```text
Sos el jefe de ONIA Platform: la startup y el producto, cuyo código vive en onia-platform. Al empezar, leé la sección "Ahora" de docs/equipo-agentes/platform.md. Lo que haga falta de otra área se pide en el tablero del issue #111 de ONIA-CENTRAL. Lo que tiene que durar (estado, decisiones y correcciones de Sergio) va al repo por PR, no solo a la memoria del proyecto, porque cuando se termine Claude se sigue en Codex.
```

## En Codex, después

Cada jefe es una sesión de Codex en su carpeta y con su perfil. Las carpetas y los perfiles ya existen: los armó el Administrador el 2-nov. Cada perfil trae el modelo, el esfuerzo y el navegador del área ([navegador por área](../decisiones/2026-11-02-navegador-por-area.md)).

| Proyecto | Carpeta | Perfil de Codex |
|---|---|---|
| Marketing y ventas | `C:\dev\worktrees\ONIA-CENTRAL\marketing` | `marketing` |
| Desarrollo | `C:\dev\worktrees\ONIA-CENTRAL\boss-code` | `boss-code` |
| ONIA Platform | `C:\dev\worktrees\ONIA-CENTRAL\onia-platform` | `onia-platform` |

**Marketing y ventas usa un solo navegador, el del perfil `marketing`.** Las cuentas de ventas (WhatsApp, Yolo Pago y Chatwoot) estaban pedidas para el perfil `boss-no-code`. Cuáles se cargan en `marketing`, y cuándo, lo decide Sergio Urcullo, que es quien las carga.

Cada línea va en su propia ventana de PowerShell, de a una, con unos segundos entre una y otra, y primero la de Desarrollo, como dice abajo. Si `git pull` falla, Codex no se abre.

```powershell
Set-Location C:\dev\worktrees\ONIA-CENTRAL\boss-code; git pull --ff-only origin main; if ($?) { codex -p boss-code "Sos el jefe de Desarrollo de ONIA. Leé el AGENTS.md, el Núcleo de docs/lecciones.md y la sección Ahora de docs/equipo-agentes/producto.md, y seguí desde ahí. Si la herramienta playwright no aparece, esperá unos segundos y buscala de nuevo." }
```

```powershell
Set-Location C:\dev\worktrees\ONIA-CENTRAL\marketing; git pull --ff-only origin main; if ($?) { codex -p marketing "Sos el jefe de Marketing y ventas de ONIA. Leé el AGENTS.md, el Núcleo de docs/lecciones.md y la sección Ahora de docs/equipo-agentes/marketing.md y de docs/equipo-agentes/negocio.md, y seguí desde ahí. Si la herramienta playwright no aparece, esperá unos segundos y buscala de nuevo." }
```

```powershell
Set-Location C:\dev\worktrees\ONIA-CENTRAL\onia-platform; git pull --ff-only origin main; if ($?) { codex -p onia-platform "Sos el jefe de ONIA Platform. Leé el AGENTS.md, el Núcleo de docs/lecciones.md y la sección Ahora de docs/equipo-agentes/platform.md, y seguí desde ahí. Si la herramienta playwright no aparece, esperá unos segundos y buscala de nuevo." }
```

**Qué está probado y qué no:**

- El 2-nov se probó `codex -p <perfil> exec --sandbox read-only` en cada carpeta: cada sesión arrancó con su modelo y su esfuerzo y leyó su estado ([coordinacion](coordinacion.md), "Ensayo del 2-nov").
- Sin probar: el modo interactivo, que es el que abren estas líneas, y estas tres líneas con este texto. Tienen la misma forma que las del 2-nov, en [coordinacion](coordinacion.md), y dentro de las comillas no llevan `$` ni comillas, que PowerShell interpretaría. No se leyeron con `ParseInput`, porque este cambio se armó en una computadora sin PowerShell. Por eso se abre primero Desarrollo, y su jefe lee las otras dos con `ParseInput` en la PC antes de que Sergio Urcullo las use ("Núcleo" de [`docs/lecciones.md`](../lecciones.md), punto 14).
- En ese ensayo, Boss Code y ONIA Platform, abiertas con un segundo de diferencia, no vieron el navegador; abiertas solas, después, sí. Por eso se abren de a una, y la línea le pide a Codex buscarlo de nuevo.
- Sin probar en la PC: que el jefe le pase una tarea a un subagente o a la skill `encargar`.

## Qué pasó con las otras sesiones

- **Administrador:** no hay. Su infraestructura pasa a Desarrollo. Si dos proyectos necesitan el mismo archivo, va primero el que ya tiene el PR abierto, y si no se ponen de acuerdo, decide Sergio Urcullo (`AGENTS.md`, "Un agente por tarea").
- **Pelau:** cada jefe le da su resumen a Sergio Urcullo al cerrar un trabajo.
- **Analista:** cada PR sigue con su revisión independiente escrita, y Desarrollo encarga una auditoría por semana, en vez de una por día.
- **Recepción:** Sergio Urcullo le manda los archivos, enlaces y videos al proyecto que los usa; si no está claro, a Marketing y ventas. La skill [`ver-video`](../../.agents/skills/ver-video/SKILL.md) sigue disponible.
- **Boss No-Code:** queda dentro de Marketing y ventas. Su estado, `negocio.md`, se junta con `marketing.md` después del taller.

Sus estados viejos quedan como historia: [coordinacion](coordinacion.md) y [recepcion](recepcion.md).

## Al cerrar una sesión

1. Poner al día "Ahora" en el estado: objetivo, "hecho cuando", próximo paso, qué espera a Sergio Urcullo y sus decisiones vigentes, en 30 líneas como mucho.
2. Anotar en "Correcciones de Sergio" lo que él corrigió.
3. Dejar el PR abierto y la sesión cerrada. La próxima arranca limpia: un hilo nuevo en Claude, o la línea de arriba en Codex.
