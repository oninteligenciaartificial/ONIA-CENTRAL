# Skills de ONIA: una sola carpeta para Hermes, Claude Code y Codex

28-oct-2026. **Propuesta para que la apruebe Sergio Urcullo.** Todavía no cambió nada: ni la configuración de los agentes, ni el `.gitignore`, ni hay skills en el repo. Sale del [issue #10](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/10).

Cómo se armó, todo de solo lectura salvo las pruebas en una carpeta temporal:
- **Hermes v0.22.5:** su documentación y su código, los dos instalados en `%LOCALAPPDATA%\hermes\hermes-agent`. Abajo, `docs/` es `website/docs/` de esa carpeta.
- **Claude Code 2.1.288:** la documentación oficial de Anthropic.
- **Codex 0.164.0:** la documentación oficial de OpenAI. Donde no alcanza, su código en el tag `rust-v0.164.0`.
- **Pruebas:** en una carpeta temporal fuera del repo, con `claude -p` y `codex exec`. Hermes no se corrió, porque desde la app de Claude no se corre.

## 1. Qué se propone, en corto

- **Las skills de ONIA viven en `.agents/skills/<nombre>/SKILL.md`, en la raíz de ONIA-CENTRAL.** Es la carpeta que Hermes y Codex ya leen como skills de proyecto.
- **Hermes** las lee cuando se prende `skills.project_discovery` y se marca a ONIA-CENTRAL como repo de confianza. Lo corre Sergio Urcullo.
- **Codex** las lee sin configurar nada.
- **Claude Code** no lee `.agents/skills`. Se le crea `.claude\skills` como enlace de carpeta (junction) a `.agents\skills`, una sola vez, en el checkout principal. Ese enlace no entra a Git.
- **Formato:** el mínimo que entienden los tres, `name` y `description`, sin campos que den permisos.
- **Primera skill:** `investigar-referente`, sacada del [issue #6](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/6).
- **Skills de terceros:** primero las oficiales. Las de la comunidad se leen enteras, entran copiadas al repo por PR y las aprueba Sergio Urcullo.

## 2. Qué dice la documentación oficial

### Dónde busca skills cada uno

| | De proyecto | De usuario | Fuente |
|---|---|---|---|
| **Hermes** | `<raíz git>/.hermes/skills` y `<raíz git>/.agents/skills`, solo si la raíz está en `skills.trusted_project_dirs`. La raíz es la carpeta más cercana con `.git`; los worktrees cuentan. | `%LOCALAPPDATA%\hermes\skills` (la doc dice `~/.hermes/skills`), más `skills.external_dirs` y `skills.create_dir`. | `docs/user-guide/features/skills.md` L11-13, L406-428 y L467-494. Código: `agent/skill_utils.py` L513 y L518-590. |
| **Claude Code** | `.claude/skills/`, desde la carpeta de inicio hasta la raíz del repo. En un subdirectorio, carga la primera vez que se toca un archivo ahí. | `~/.claude/skills/`, plugins y skills de la cuenta de claude.ai. | [code.claude.com/docs/en/skills](https://code.claude.com/docs/en/skills) |
| **Codex** | `.agents/skills` en cada carpeta desde la de trabajo hasta la raíz del repo. También `.codex/skills`, según el código. | `~/.agents/skills`. `~/.codex/skills` sigue andando, pero el código la marca como vieja. | [learn.chatgpt.com/docs/build-skills](https://learn.chatgpt.com/docs/build-skills) (es adonde redirige `developers.openai.com/codex/skills`). Código: `codex-rs/ext/skills/src/host_roots.rs` L86-101 y L137-269. |

- **Claude Code no lee `.agents/skills`.** La documentación no lo nombra, y en la prueba no encontró la skill (punto 3).
- **Los tres siguen enlaces:**
  - Hermes recorre las carpetas con `os.walk(..., followlinks=True)` (`agent/skill_utils.py` L863).
  - Claude Code acepta que la carpeta de cada skill sea un enlace ([skills](https://code.claude.com/docs/en/skills)). Que `.claude\skills` entero sea un enlace lo respalda solo la prueba del punto 3.
  - Codex: "supports symlinked skill folders" ([build-skills](https://learn.chatgpt.com/docs/build-skills)).
- **Nombres repetidos:**
  - En Hermes gana la de proyecto, que va etiquetada `[project]` (`skills.md` L496-507).
  - En Claude Code el orden es empresa, después usuario, después proyecto ([skills](https://code.claude.com/docs/en/skills)).
  - Codex no las fusiona: muestra las dos ([build-skills](https://learn.chatgpt.com/docs/build-skills)).
  - Por eso ninguna skill de ONIA repite el nombre de una que ya trae un agente.
- **Los tres siguen el estándar abierto Agent Skills (agentskills.io):**
  - Hermes: "compatible with the agentskills.io open standard" (`skills.md` L9).
  - Codex: "build on the open agent skills standard" ([build-skills](https://learn.chatgpt.com/docs/build-skills)).
  - Anthropic lo publicó como estándar abierto ([anthropic.com/engineering](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)).

### Formato `SKILL.md`

| | Obligatorio | Límites | Campos propios que conviene evitar |
|---|---|---|---|
| **Hermes** | `name` y `description` | `name`: minúsculas, números, `.`, `_` o `-`, hasta 64. `description`: hasta 1024 (`tools/skill_manager_tool.py` L108-112). | `metadata.hermes.*`, `platforms`, `required_environment_variables`. |
| **Claude Code** | Ninguno; `description` se recomienda. Lo que no reconoce lo ignora. | `description` más `when_to_use` se cortan a 1536 en el listado. En la API: `name` hasta 64, sin "claude" ni "anthropic"; `description` hasta 1024 ([overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)). | `allowed-tools`, `hooks`, `context`, `shell` y los comandos `` !`…` ``. |
| **Codex** | `name` y `description` ([build-skills](https://learn.chatgpt.com/docs/build-skills)) | `name` hasta 64; ignora otros campos (`codex-rs/skills/src/parser.rs`). | `agents/openai.yaml`, que puede pedir instalar dependencias MCP. |

**Regla de ONIA:**
- El frontmatter lleva solo `name`, igual al nombre de la carpeta (minúsculas, números y guiones, hasta 64), y `description` (hasta 1024, con qué hace y cuándo usarla). Opcionales: `license` y `metadata`, este último para el origen de una skill de terceros.
- El cuerpo, en español, sigue la plantilla de Hermes (`docs/developer-guide/creating-skills.md` L44-99): cuándo usarla, referencia rápida si hace falta, pasos, errores comunes y cómo se comprueba.
- Scripts, solo si hacen falta, y se revisan como código.
- **Las skills se crean y se editan solo en `.agents/skills/<nombre>/`.**
  - Claude tiende a usar `.claude/skills/`, que es su carpeta de proyecto: hay que darle la ruta. En un worktree, un `.claude/skills` propio queda fuera de Git y se pierde al borrar el worktree ([worktrees](https://code.claude.com/docs/en/worktrees)).
  - La carpeta de trabajo de `skill-creator`, con sus pruebas y copias, va fuera del repo, en Temp. Dentro de `.agents/skills`, Hermes vería dos skills con el mismo nombre y fallaría con "Ambiguous skill name" (`skills.md` L507).

### Cómo se cargan y cómo se usan

- **Los tres cargan por partes:** primero solo el nombre y la descripción, y el resto cuando la usan.
  - Hermes: `docs/guides/work-with-skills.md` L75-83.
  - Claude Code: [overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview).
  - Codex: hasta el 2 % del contexto para el listado, según [build-skills](https://learn.chatgpt.com/docs/build-skills).
- **Se usan solas cuando la descripción coincide con la tarea, o se llaman a mano:**
  - Hermes y Claude Code: `/nombre`.
  - Codex: `$nombre`.
- **Sin interfaz también las cargan:**
  - `claude -p` carga las de proyecto ([headless](https://code.claude.com/docs/en/headless)).
  - `codex exec` las cargó en la prueba; su documentación no lo dice.
  - Las tareas programadas de Hermes heredan la confianza por su `--workdir` (`skills.md` L515-519).
- **Skills nuevas sin reiniciar:**
  - Claude Code vigila `.claude/skills/` ([skills](https://code.claude.com/docs/en/skills)).
  - Codex detecta cambios solo ([build-skills](https://learn.chatgpt.com/docs/build-skills)).
  - Hermes avisa en el próximo mensaje (`skills.md` L184-192).

### Riesgos de seguridad

Una skill son instrucciones, y a veces scripts, que el agente sigue con sus propios permisos. Lo que dice cada proveedor:

- **Anthropic:**
  - "Use Skills only from trusted sources: those you created yourself or obtained from Anthropic."
  - Pide auditar todos los archivos y desconfiar de las URLs externas ([overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)).
  - En Claude Code, `allowed-tools` aprueba herramientas por adelantado y los comandos `` !`…` `` no piden permiso: corren si las reglas de permisos o el `allowed-tools` los dejan ([skills](https://code.claude.com/docs/en/skills)).
  - Un plugin corre código con tus privilegios ([plugins/security](https://code.claude.com/docs/en/plugins/security)).
- **Nous Research (Hermes):**
  - No carga skills de un repo sin confianza: "a prompt-injection vector if auto-sourced from any clone" (`agent/skill_utils.py` L507-511).
  - Aun con confianza, escanea cada skill de proyecto y pone en cuarentena la que da "dangerous". Si el escáner falla, también la aparta (`skills.md` L511-513; `agent/skill_utils.py` L631).
  - Lo que se instala del hub pasa por el mismo escáner, y `--force` no saltea un "dangerous" (`skills.md` L895-925).
  - `external_dirs` no protege contra escritura: el agente puede editar esas skills (`skills.md` L425).
- **OpenAI (Codex):**
  - Su página de skills no trae advertencias.
  - La guía para administradores pide confirmar origen, responsable y fecha de revisión, y probar con datos no sensibles ([admin-setup](https://learn.chatgpt.com/docs/enterprise/admin-setup)).
  - Los scripts pasan por aprobación ([agent-approvals-security](https://learn.chatgpt.com/docs/agent-approvals-security)).
- **`claude -p` y Codex cargan las skills de un repo sin pedir confianza:**
  - Claude Code: "Workspace trust doesn't gate this field". Aplica el `allowed-tools` de una skill de proyecto aun con `-p` en una carpeta nunca aprobada ([skills](https://code.claude.com/docs/en/skills)).
  - Codex no lo documenta. En el código, `.agents/skills` se recorre sin mirar la confianza (`codex-rs/ext/skills/src/host_roots.rs` L137-185). `.codex/skills` sale incluso de las capas desactivadas de los repos sin confianza (L80, con `codex-rs/config/src/state.rs` L692-696). En la prueba, Codex cargó la skill desde una carpeta que no figura en su `config.toml`.
  - O sea, **correr `claude -p` o Codex dentro de un repo clonado ya mete sus skills.** Pesa más porque así los lanza Hermes.
  - Claude Code tiene un ajuste oficial, `"disableSkillShellExecution": true`, que impide los comandos `` !`…` `` en las skills de usuario, proyecto y plugins ([settings-reference](https://code.claude.com/docs/en/settings-reference)). Es un cambio de configuración: lo decide Sergio Urcullo (punto 8).

## 3. La carpeta única y cómo la carga cada agente

### Hermes

Lo corre Sergio Urcullo, en una PowerShell abierta desde el menú Inicio, después del merge de la primera skill:

```powershell
Set-Location C:\dev\proyectos\ONIA-CENTRAL
hermes config set skills.project_discovery true
hermes skills trust C:\dev\proyectos\ONIA-CENTRAL
hermes skills list
```

- `hermes skills trust` guarda la ruta en `skills.trusted_project_dirs` (`hermes_cli/main_agent_cmds.py` L202). Se confía en ONIA-CENTRAL y en ninguna otra carpeta.
- `hermes skills list` tiene que mostrar las skills de ONIA con origen `project`.
- El agente de Hermes no puede editarlas con su herramienta de skills: `skill_manage` busca solo en `skills\`, `create_dir` y `external_dirs` (`tools/skill_manager_tool.py` L240; `agent/skill_utils.py` L423-426).
- **Nada técnico obliga a que los cambios entren por PR.** Hermes puede escribir archivos en el checkout principal con sus herramientas generales, y un cambio sin commitear ahí lo usan los tres al toque. La regla: en el checkout principal, `.agents/skills` sigue a `main` sin cambios locales, y las skills se editan en un worktree y entran por PR. El resto del trabajo de Hermes ahí también sale por rama y PR, como dice el `AGENTS.md`.
- En los worktrees de `.claude\worktrees`, Hermes no las ve, porque la raíz es otra y no tiene confianza. No hace falta: Hermes trabaja en el checkout principal.

### Codex

- No necesita nada. Lee `.agents/skills` desde la carpeta de trabajo hasta la raíz del repo, también en un worktree.
- **Prueba:** en una carpeta temporal con `.agents/skills/prueba-onia`, `codex exec 'Usá la skill $prueba-onia…'` devolvió la clave que pedía la skill.

### Claude Code

- No lee `.agents/skills`. Se crea una vez, en el checkout principal, un enlace de carpeta de Windows (junction) de `.claude\skills` a `.agents\skills`. Un junction no pide administrador ni modo desarrollador. Lo crea Claude con el OK de Sergio Urcullo, o él mismo en PowerShell:

  ```powershell
  New-Item -ItemType Junction -Path C:\dev\proyectos\ONIA-CENTRAL\.claude\skills -Target C:\dev\proyectos\ONIA-CENTRAL\.agents\skills
  ```

  Se saca con `cmd /c rmdir C:\dev\proyectos\ONIA-CENTRAL\.claude\skills`, que borra el enlace y deja intacto `.agents\skills`.

- **Git sigue el junction.** Sin ignorarlo, cada skill aparecería dos veces en los commits. Por eso el `.gitignore` suma una línea, que aprueba Sergio Urcullo:

  ```gitignore
  .claude/skills
  ```

- **En los worktrees de la app** no hace falta otro enlace. Si el worktree no tiene `.claude/skills`, Claude Code usa las del checkout principal ([worktrees](https://code.claude.com/docs/en/worktrees)).
  - Ojo: en un worktree, Claude lee las skills del checkout principal tal como están en disco, no las de la rama. Si ese checkout cambia de rama, Claude ve las skills de esa rama. Por eso una skill nueva se prueba en Claude después del merge y del `git pull` en el checkout principal.
- **Pruebas en una carpeta temporal, con Claude Code 2.1.288:**
  - Con el junction, `claude -p "/prueba-onia"` devolvió la clave de la skill.
  - Sin el junction, contestó que el comando no estaba disponible.
  - Desde un worktree sin `.claude\skills`, también la cargó.
  - No se probó si Claude detecta cambios en vivo a través del junction.
- **Límite:** las sesiones de Claude en la nube clonan el repo sin el junction, así que no ven las skills de ONIA. Las de Codex en la nube sí, porque leen `.agents/skills` directo. Si se empieza a usar Claude en la nube para ONIA, el enlace se puede crear en el script de inicio de ese entorno; no está probado.

### Lo que se descartó

| Opción | Por qué no |
|---|---|
| Enlaces simbólicos guardados en Git | En esta PC `core.symlinks` es `false` y el modo desarrollador está apagado: Git los baja como archivos de texto. Prenderlo es cambiar la seguridad de Windows. |
| `.claude/skills` como carpeta real, con Hermes apuntando ahí por `external_dirs` | Codex no la lee. Además, `external_dirs` deja que Hermes edite las skills y se saltea la confianza y la cuarentena de las skills de proyecto. |
| Un plugin de Claude Code con las skills | Claude copia los plugins a su caché: habría dos copias y una instalación por cada cambio. |
| Una copia corta en `.claude/skills` que apunte a la de `.agents/skills` | Duplica `name` y `description`, y con el tiempo se desfasan. |

## 4. Inventario: lo que ya trae cada agente

### Hermes

En `%LOCALAPPDATA%\hermes\skills` hay 58 skills de fábrica:
- **4 visibles:** `claude-code`, `codex`, `computer-use` y `hermes-agent`.
- **47 apagadas** en `skills.disabled`.
- **6 que no aparecen en Windows:** 4 de Apple, `xurl` y `python-debugpy`.
- **`sdlc-review`**, que aparece solo con el tablero kanban prendido.

Su catálogo oficial opcional (`optional-skills/`, 152 skills) no está instalado.

### Claude Code

- **Skills de usuario:** `supabase`, `supabase-postgres-best-practices` y `prisma-cli`.
- **Plugins:** `document-skills` (Word, PDF, PowerPoint y Excel), `frontend-design`, `claude-security` y `gsap-skills`.
- **De la cuenta de claude.ai:** las 13 de Anthropic que quedaron el 28-oct.
- **De fábrica:** los comandos `/code-review`, `/simplify`, `/run` y `/loop`, entre otros.

### Codex

- **De sistema:** `imagegen`, `openai-docs`, `review-agent`, `skill-creator` y `skill-installer`.
- **Plugins prendidos:** documentos, planillas, presentaciones, PDF, GitHub, navegador, Chrome, uso de la computadora, visualizar, `openai-developers`, `template-creator` y las herramientas de la app.
- **No tiene skills de usuario.**
- **El catálogo `openai/skills` está deprecado** desde el 22-jun-2026 y manda a `openai/plugins` ([github.com/openai/skills](https://github.com/openai/skills)).

## 5. Primera skill: `investigar-referente`

**Por qué esta.** El [issue #6](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/6) pide investigar a cuatro o más referentes con los mismos cuatro puntos. Es una tarea que se repite, no publica nada y no necesita scripts.

**Qué haría:**
- `name: investigar-referente`.
- `description`: investiga a un referente de marca personal y deja una ficha con su propuesta de venta, anuncios, contenido, comunidad y funnel, con fuentes. Se usa cuando Sergio Urcullo pide analizar a un referente o a un competidor.
- **Pasos:**
  1. Confirmar el nombre y las cuentas (Instagram, TikTok, YouTube, web).
  2. **Propuesta de venta:** bio, web y ofertas, con precios si son públicos.
  3. **Anuncios:** la Biblioteca de anuncios de Meta. Cantidad de anuncios activos, formatos, ganchos, llamados a la acción y fechas.
  4. **Contenido:** los últimos videos y posts. Tipos, duración, estructura del guion (gancho, desarrollo, cierre) y edición (subtítulos, cortes, b-roll).
  5. **Comunidad y funnel:** comunidad paga o gratis, webinars, lead magnets, correo y precios.
  6. Escribir la ficha en `marca-personal/referentes/<nombre>.md`, con la URL y la fecha de consulta de cada dato.
  7. Cerrar con tres ideas concretas para ONIA.
- **Frenos:**
  - No publica, no comenta y no sigue cuentas.
  - No descarga videos: van a E: o a Drive, si hacen falta.
  - Las citas textuales son cortas.
  - No paga herramientas.
  - No entra con cuentas de Sergio Urcullo salvo que él lo pida.
- **Cómo se comprueba:** cada sección tiene al menos una fuente con URL y fecha. Lo que no se encontró dice "no encontrado".

**Prueba en los tres**, después del merge, desde `C:\dev\proyectos\ONIA-CENTRAL` y sin investigar todavía:
- **Claude Code:** `claude -p "/investigar-referente Decime solo el título del paso 3, sin investigar."`
- **Codex:** `codex exec 'Usá $investigar-referente. Decime solo el título del paso 3, sin investigar.'`
- **Hermes**, lo corre Sergio Urcullo: `hermes skills list` tiene que mostrarla con origen `project`. Después, en `hermes --tui`, `/investigar-referente Decime solo el título del paso 3, sin investigar.`

Las tres respuestas tienen que coincidir con el archivo. El primer uso real es el #6.

## 6. Skills populares de GitHub

Sergio Urcullo preguntó si conviene usar alguna.

**Respuesta corta:** ahora no entra ninguna. Cuando una tarea las pida, sirven algunas, y casi ninguna tal cual.
- **Las de más estrellas no se usan:** Superpowers, ECC y Ponytail. Son métodos de trabajo enteros, con hooks que se meten en cada sesión.
- **Lo que sirve:**
  - skills oficiales de proveedores que ya usamos (shadcn, Vercel y n8n), copiadas al repo con el commit fijado y sin lo que da permisos;
  - skills propias de ONIA, en español, que toman ideas de las buenas de la comunidad.

**Cómo se revisó:** dos agentes leyeron el 28-oct `SKILL.md`, referencias y scripts de cada candidata con `gh api`, sin instalar ni correr nada. Las estrellas y licencias se volvieron a comprobar en GitHub. En ninguna apareció texto oculto.

| Área | Candidata (commit leído) | Origen | Para qué | Riesgo principal | Conviene |
|---|---|---|---|---|---|
| Marca personal | [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills/tree/0cd9b3a0ef4c411a1d690419ce843f2a1da32cce) | Comunidad, MIT, 57 mil ★ | Copy, redes, carruseles, video corto, ofertas y webinars | En inglés y pensada para SaaS. Socios pagos marcados en las referencias. Recetas `curl` a otras webs. | **Propias en español** (guion de reel, carrusel, copy de venta) con sus marcos. Si se copia texto, con crédito MIT. |
| Marca personal | [blader/humanizer](https://github.com/blader/humanizer/tree/0ef9fe5bc3572734fd3ae6c448fe00a30cd5dcf0) | Comunidad, MIT, 62 mil ★ | Sacarle a un texto las marcas de "escrito por IA" | Solo `SKILL.md`, sin scripts. Las listas de palabras son en inglés. | **Una propia, `humanizer-es`**, con crédito. La de Hermes es una versión vieja (2.5.1) del mismo autor. |
| Marca personal | Hermes `social-media-content-calendar` | Nous Research, oficial, MIT | Calendario por campaña: borrador, revisión y aprobado. No publica sin OK. | Nombra herramientas propias de Hermes. | **Copiarla con el commit fijado y adaptarla.** |
| Marca personal | Hermes `youtube-content` (de fábrica, apagada) | Nous Research, oficial | Transcribir y resumir videos de YouTube | Necesita el paquete `youtube-transcript-api`. | En Hermes, prenderla si hace falta (lo hace Sergio Urcullo). Para Claude y Codex, una propia. |
| Marca personal | [anthropics/skills](https://github.com/anthropics/skills/tree/ca45fc496a3436251f191354091d557da31c15b5/skills) `brand-guidelines` y `theme-factory` | Anthropic, oficial, Apache-2.0 | Colores, fuentes y temas de marca | Ninguno: es la marca de Anthropic. | **Una propia, `marca-onia`**, con esa estructura. |
| Marca personal | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes/tree/4fa5f54519150566b8ef706f60c05ff13c903423/skills) | HeyGen, oficial, Apache-2.0, 75 mil ★ | Video hecho con HTML | Pide Node 22, FFmpeg, Chrome y su CLI por `npx`, con telemetría prendida. `media-use` corre llamadas pagas de HeyGen sin confirmar si las pidió la persona. Un script pone la clave de Gemini en la URL. | Solo si Sergio Urcullo aprueba instalar todo eso: `hyperframes` y `hyperframes-cli` con el commit fijado, sin telemetría y sin `media-use`. La copia de Hermes está atrasada. |
| Marca personal | [remotion-dev/skills](https://github.com/remotion-dev/skills/tree/30d4553ecd46fbc5212fd0ff006ae43af522158b) y `canvas-design` de Anthropic | Oficiales | Video con React; arte abstracto | Remotion se paga desde 4 empleados y pide programar. `canvas-design` baja fuentes sin preguntar. | **No por ahora.** |
| Talleres | anthropics/skills `doc-coauthoring` | Anthropic, oficial | Escribir un documento en tres etapas, con una prueba de lector al final | Sin scripts. Su carpeta no trae licencia. | **Copiarla con el commit fijado** para temarios y páginas, cuando se confirme la licencia. |
| Plataforma | [shadcn-ui/ui](https://github.com/shadcn-ui/ui/tree/96da9cc7f1aa10580a3741664e2a77c721206c00/skills) `skills/shadcn` | shadcn, oficial, MIT | Reglas de componentes y uso del CLI | `allowed-tools: Bash(npx shadcn@latest *)`, y un `` !`npx shadcn@latest info --json` `` que Claude corre solo al cargarla, con la última versión de npm. Empuja registries de terceros. | **Copiarla con el commit fijado**, sin `allowed-tools` ni el comando automático, y solo con el registry `@shadcn` salvo OK. |
| Plataforma | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills/tree/1a2c79d4e6c4a2283dc2c614b6538cbe1ed5ca62) `react-best-practices` y `composition-patterns` | Vercel (organización verificada), oficial, MIT por skill | 70 reglas de rendimiento para React y Next.js, y patrones de composición | Sin scripts. Sugiere dependencias, que no se instalan sin OK. | **Copiarlas con el commit fijado.** |
| Plataforma | vercel-labs `web-design-guidelines` | Vercel, oficial | Reglas de UX y accesibilidad | En cada uso baja instrucciones de la rama `main` de otro repo. | **Una propia**, con esas reglas copiadas y fijadas. |
| Plataforma | vercel-labs `deploy-to-vercel` y `vercel-cli-with-tokens`, y `vercel-deploy` de openai/skills | Oficiales | Deploy | La primera instala el CLI de Vercel global, crea el proyecto en Vercel sin pedir otra confirmación y, si no hay remoto, despliega con `vercel deploy -y`. La segunda muestra el token con `printenv VERCEL_TOKEN`. La de OpenAI sube el proyecto a un servidor de deploy anónimo. | **No.** Choca con los frenos de producción y de secretos. |
| Plataforma | [n8n-io/skills](https://github.com/n8n-io/skills/tree/27b6b9f429ac0be90cae764512dbc579d7107e95) | n8n (organización verificada), oficial, Apache-2.0 | 15 skills de n8n | Trae hooks y un MCP a la instancia, que es un cambio en producción. Impone su método y habla de créditos pagos. | **Copiar solo `skills/`** con el commit fijado, sin hooks ni MCP, y editar la que reparte el trabajo. La de la comunidad (czlonkowski) no: usa un MCP alojado por un tercero y una de sus skills entra por ssh al servidor. |
| Plataforma | openai/skills `gh-fix-ci` y `gh-address-comments` | OpenAI, oficial pero deprecado | Arreglar CI y responder comentarios de PR | Scripts que llaman a `gh`. | **Una propia** inspirada en ellas, si hace falta. |
| Plataforma | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills/tree/aeac41d4d005999432bb7312f7ff06383a91d59d) y [trailofbits/skills](https://github.com/trailofbits/skills/tree/2be6433b39e009cd2b6fd3be1895f6b1faa5af9a) | Comunidad (MIT) y empresa de seguridad (CC-BY-SA-4.0) | Revisión, seguridad y planificación; auditoría | Trail of Bits usa `allowed-tools` con Bash, y su licencia obliga a compartir lo derivado igual. | **No ahora.** Ya está `claude-security`. A lo sumo, ideas para una propia. |
| General | [obra/superpowers](https://github.com/obra/superpowers/tree/2ce8aa15d05bd57213e6f746f953aafb7ded7a8b) | Comunidad, 307 mil ★ | Método completo: lluvia de ideas, plan y TDD | Obliga a usar una skill aunque haya 1 % de chance de que aplique. Trae un plugin en Python para Hermes que inyecta texto en cada sesión. | **No.** Sigue afuera, como se decidió el 28-oct, y choca con que Hermes no importa nada de otro agente. |
| General | [affaan-m/ECC](https://github.com/affaan-m/ECC/tree/25278e7d7b6cf6e6a4e7a6c8e10f14ff22f0eb5b) y [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail/tree/134b8e1a3a8078302b8ba77f86626c0802b2a6db) | Comunidad, 292 mil y 179 mil ★ | Arnés completo; barra de estado y "cambio más chico" | ECC: 311 skills y 54 hooks, y se modifica solo. Ponytail: hooks que tocan `~/.claude` y pueden mandar datos a un webhook. | **No.** Ya se sacaron el 28-oct. |

- Las listas "awesome-…" (ComposioHQ, VoltAgent, travisvn) son índices, no skills.
- `openai/skills` está deprecado desde el 22-jun-2026. Que algo aparezca en `openai/plugins` tampoco lo vuelve de OpenAI: ahí también están Superpowers y otros.

**Qué cambia en el plan:** nada. Cada una entra cuando una tarea real la pida, por el proceso del punto 7. Este es el orden que sigue el trabajo que viene:
1. `investigar-referente` (punto 5).
2. **Para marca personal:** `guion-reel`, `carrusel`, `humanizer-es` y `marca-onia`, propias, y el calendario de Hermes adaptado.
3. **Para talleres:** `doc-coauthoring`.
4. **Para plataforma, cuando se retome:** shadcn y las de React de Vercel, limpias.
5. **Para n8n, cuando haya trabajo de n8n:** sus skills oficiales, sin hooks.

## 7. Proceso para skills de terceros

1. **Primero, una necesidad concreta:** una tarea que se repite. No se instala nada "por las dudas".
2. **Se busca en este orden:**
   - Lo oficial del agente o del proveedor de la herramienta:
     - Anthropic: `anthropics/skills` y el marketplace oficial de plugins;
     - OpenAI: `openai/plugins`;
     - Nous Research: el catálogo `official/` de Hermes;
     - o la organización del proveedor, como `supabase/agent-skills`.
   - Después, la comunidad, solo si no hay nada oficial.
   - Que esté en un marketplace o tenga muchas estrellas no la vuelve oficial ni segura.
3. **Se lee entera antes:** `SKILL.md`, `references/`, `scripts/`, `assets/`, `agents/openai.yaml`, `hooks` y `.mcp.json`. Se mira:
   - si usa `allowed-tools`, `hooks` o comandos `` !`…` ``;
   - si los scripts llaman a la red, leen secretos, escriben fuera de su carpeta o instalan cosas;
   - si trae URLs que cargan instrucciones de afuera;
   - si tiene texto oculto o caracteres raros;
   - si la licencia deja copiarla.
4. **Entra por PR, copiada** en `.agents/skills/<nombre>/`:
   - En `metadata` del frontmatter quedan el repo de origen, el commit y la licencia.
   - Si hace falta, se adapta al español y a ONIA.
   - La aprueba Sergio Urcullo, como dice el `AGENTS.md`.
5. **No se instalan skills de la comunidad** con el instalador de cada agente (`hermes skills install`, `$skill-installer` o `npx skills`). Así queda una sola copia revisada para los tres y nada se actualiza solo.
6. **Lo oficial que viene como plugin de un agente** (por ejemplo, `document-skills` de Anthropic o los plugins de OpenAI) se sigue instalando por su vía, de a uno y con el OK de Sergio Urcullo.
7. **Actualizar es otro PR,** con el cambio contra el commit anterior, y se vuelve a leer lo que cambió.
8. **Nunca:**
   - `--force` en Hermes con una skill de la comunidad;
   - prender `skills.inline_shell` en Hermes;
   - apuntar `external_dirs` a una carpeta sin revisar;
   - abrir Codex o Claude Code (incluido `claude -p` lanzado por Hermes) dentro de un repo de terceros sin mirar antes su `.agents/skills`, `.codex/skills` y `.claude/skills`.

## 8. Decisiones de Sergio Urcullo

1. **Carpeta única `.agents/skills/` en ONIA-CENTRAL** (recomendado).
2. **Claude Code con el junction** y la línea `.claude/skills` en el `.gitignore` (recomendado).
3. **Hermes:** prender `project_discovery` y confiar solo en ONIA-CENTRAL, con los comandos del punto 3, que corre él (recomendado).
4. **Primera skill: `investigar-referente`** (recomendado).
5. **El proceso para skills de terceros** del punto 7.
6. **Skills populares:** ninguna entra ahora. El orden para cuando haga falta está en el punto 6 (recomendado).
7. **Claude Code: `"disableSkillShellExecution": true`** en su configuración de usuario, para que ninguna skill corra comandos al cargarse. Es opcional. Antes se revisa que ningún plugin instalado los use.

Con el OK, el orden es:
1. un PR con la skill y la línea del `.gitignore`;
2. `git pull` en el checkout principal, porque el junction falla si `.agents\skills` todavía no existe;
3. el junction;
4. los comandos de Hermes;
5. la prueba en los tres.

Esta decisión se actualiza con el resultado. El issue #10 sigue abierto hasta que los tres agentes carguen la skill.

## Encontrado de paso, fuera del objetivo

- `C:\Users\PC\.agents` tiene un `.skill-lock.json` de una herramienta que no es Codex. No se abrió.
- El `config.toml` de Codex sigue marcando como confiables carpetas del repo viejo y de Orca. Además, conserva un hook confiable de `onia-hermes`.
