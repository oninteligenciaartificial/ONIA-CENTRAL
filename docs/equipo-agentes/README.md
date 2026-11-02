# Los tres proyectos

Desde el 3-nov-2026, el equipo son tres sesiones de Codex, una por proyecto, sin coordinador (`AGENTS.md`, "Equipo de agentes"). Cada una arranca limpia y lee solo lo suyo.

| Proyecto | Qué hace | Carpeta | Perfil de Codex | Estado que lee |
|---|---|---|---|---|
| Marketing y ventas | Contenido, marca, anuncios y la venta de talleres y comunidad | `C:\dev\worktrees\ONIA-CENTRAL\marketing` | `marketing` | "Ahora" de [`marketing.md`](marketing.md) y de [`negocio.md`](negocio.md) |
| Desarrollo | VPS, Chatwoot, n8n, Cal.com y las webs | `C:\dev\worktrees\ONIA-CENTRAL\boss-code` | `boss-code` | "Ahora" de [`producto.md`](producto.md) |
| ONIA Platform | La startup y el producto; el código vive en `onia-platform` | `C:\dev\worktrees\ONIA-CENTRAL\onia-platform` | `onia-platform` | "Ahora" de [`platform.md`](platform.md) |

Las carpetas y los perfiles ya existen: los armó el Administrador el 2-nov y se probaron con `codex exec` ese día ([coordinacion](coordinacion.md), "Ensayo del 2-nov"). Cada perfil trae el modelo, el esfuerzo y el navegador del área ([navegador por área](../decisiones/2026-11-02-navegador-por-area.md)).

**Marketing y ventas usa un solo navegador, el del perfil `marketing`.** Las cuentas de ventas (WhatsApp, Yolo Pago y Chatwoot) estaban pedidas para el perfil `boss-no-code`. Cuáles se cargan en `marketing`, y cuándo, lo decide Sergio Urcullo, que es quien las carga.

## Cómo se abre cada uno

Cada línea va en su propia ventana de PowerShell, de a una y con unos segundos entre una y otra, como en el ensayo. Si `git pull` falla, Codex no se abre.

```powershell
Set-Location C:\dev\worktrees\ONIA-CENTRAL\marketing; git pull --ff-only origin main; if ($?) { codex -p marketing "Sos Marketing y ventas de ONIA. Leé el AGENTS.md, el Núcleo de docs/lecciones.md y la sección Ahora de docs/equipo-agentes/marketing.md y de docs/equipo-agentes/negocio.md, y seguí desde ahí. Si la herramienta playwright no aparece, esperá unos segundos y buscala de nuevo." }
```

```powershell
Set-Location C:\dev\worktrees\ONIA-CENTRAL\boss-code; git pull --ff-only origin main; if ($?) { codex -p boss-code "Sos Desarrollo de ONIA. Leé el AGENTS.md, el Núcleo de docs/lecciones.md y la sección Ahora de docs/equipo-agentes/producto.md, y seguí desde ahí. Si la herramienta playwright no aparece, esperá unos segundos y buscala de nuevo." }
```

```powershell
Set-Location C:\dev\worktrees\ONIA-CENTRAL\onia-platform; git pull --ff-only origin main; if ($?) { codex -p onia-platform "Sos ONIA Platform. Leé el AGENTS.md, el Núcleo de docs/lecciones.md y la sección Ahora de docs/equipo-agentes/platform.md, y seguí desde ahí. Si la herramienta playwright no aparece, esperá unos segundos y buscala de nuevo." }
```

Son las mismas líneas del ensayo del 2-nov, con otro texto entre comillas. Con este texto todavía no se corrieron.

## Qué pasó con las otras sesiones

- **Administrador:** no hay. Si dos proyectos necesitan el mismo archivo, va primero el que ya tiene el PR abierto (`AGENTS.md`, "Un agente por tarea").
- **Pelau:** cada proyecto le da su resumen a Sergio Urcullo al cerrar un trabajo.
- **Analista:** cada PR sigue con su revisión independiente escrita.
- **Recepción:** Sergio Urcullo le manda los archivos, enlaces y videos directo al proyecto que los usa. La skill [`ver-video`](../../.agents/skills/ver-video/SKILL.md) sigue disponible.
- **Boss No-Code:** queda dentro de Marketing y ventas. Su estado, `negocio.md`, se junta con `marketing.md` después del taller.

Sus estados viejos quedan como historia: [coordinacion](coordinacion.md) y [recepcion](recepcion.md).

## Al cerrar una sesión

1. Poner al día "Ahora" en el estado: objetivo, "hecho cuando", próximo paso, qué espera a Sergio Urcullo y sus decisiones vigentes, en 30 líneas como mucho.
2. Anotar en "Correcciones de Sergio" lo que él corrigió.
3. Dejar el PR abierto y la sesión cerrada. La próxima se abre limpia, con la línea de arriba.
