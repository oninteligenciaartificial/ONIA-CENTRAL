# Reinicio de Claude y Codex

28-oct-2026. **Aplicado ese mismo día:** 244 elementos archivados, sin errores. El script `reinicio.py` (modos mirar, aplicar y revertir) y su manifiesto quedaron en `C:\Users\PC\.claude-archivo-20261028`.

**Lo que cambió al aplicar:**
- Ponytail salió, porque no es oficial. Su idea quedó en el CLAUDE.md global.
- Orca no se usa más.
- La orquesta vieja quedó pausada.
- A propósito no se tocaron las 7 tareas programadas viejas de Claude, que ya estaban apagadas, ni los conectores Stitch y Exa de Claude.

**Aclaración de Sergio Urcullo sobre "solo oficial":** no quiere decir que lo de la comunidad sea malo. Se prefiere lo oficial para que no entre a la PC nada que no sepamos qué hace.

## 1. Qué se hizo y cómo

| Paso | Cómo | Resultado |
|---|---|---|
| Respaldo | Copia con `robocopy` de `C:\Users\PC\.claude` a `E:\respaldos\claude-config-20261028`, sin los 2 archivos de credenciales. La configuración de Codex se copió a `E:\respaldos\codex-config-20261028`. | 58.452 archivos y 7,4 GB, sin errores. |
| Inventario con uso real | Un script recorrió 4.506 conversaciones guardadas. Por cada skill, agente o comando contó los usos totales, los de los últimos 30 días y la fecha del último. | Tabla de abajo. |
| Clasificación | 4 agentes, uno por grupo: plugins y hooks; skills; agentes, comandos y reglas; carpetas y cuentas. Otros 4 buscaron qué se rompería y 1 crítico revisó el orden. Todo de solo lectura. | Se encontraron 4 trampas (punto 7). |
| Investigación de oficiales | 4 agentes revisaron las skills de Anthropic, el marketplace oficial de plugins (315 entradas), los proveedores del stack y lo instalado. Otros 4 confirmaron el dueño de cada repo, su fecha y su riesgo, y 1 armó la síntesis. | 14 piezas oficiales que sirven. |
| Costo | Las dos investigaciones usaron 18 agentes y unos 2,7 millones de tokens. | |

**Qué cuenta como oficial:** lo que escribió Anthropic o la organización del proveedor, por ejemplo `supabase/agent-skills`. Que algo aparezca en un marketplace no alcanza: Superpowers está en el de Anthropic y lo escribió un particular.

**Lo que mostró el inventario:**

| Qué | Había | Usadas en 30 días |
|---|---|---|
| Skills personales | 102 | 12 (83 nunca se usaron) |
| Agentes | 43 | 2 |
| Comandos | 72 | 1 |
| Reglas | 79 archivos | 12 se cargaban en cada sesión |
| Plugins prendidos | 10 | casi nada |
| Hooks | 16 | 13 eran de Orca y corrían en cada acción |

## 2. La regla del reinicio

- Claude y Codex quedan **como recién instalados**.
- Vuelve solo **lo oficial que ya estaba y sirve hoy**. Lo oficial que hay que descargar entra después, de a uno y con el OK de Sergio Urcullo.
- Lo de ONIA **no vive en la capa global**. Va a ONIA-CENTRAL a medida que se reescribe.
- **Nada se borró.** Lo que salió está en `C:\Users\PC\.claude-archivo-20261028` y `C:\Users\PC\.codex-archivo-20261028`, fuera de las carpetas de configuración para que no se cargue.

## 3. Lo que se conservó (no es método, es la app)

- Los logins de Claude y Codex.
- El historial de conversaciones y lo interno de cada app: caché, bases de datos, sandbox y worktrees de Codex.
- El puente con Chrome.
- Los comandos ya aprobados en Codex (`rules/default.rules`).

## 4. Lo que quedó prendido y por qué

### Claude

| Pieza | De quién | Por qué |
|---|---|---|
| document-skills (Word, PDF, PowerPoint, Excel) | Anthropic | Propuestas, PDFs, planillas y presentaciones. |
| frontend-design | Anthropic | Pantallas y landings. |
| claude-security | Anthropic | Revisión de seguridad. Sus hooks solo muestran avisos. |
| skill-creator (en la cuenta) | Anthropic | Para reescribir las skills de ONIA: mide y ajusta cada una. |
| supabase y supabase-postgres-best-practices | Supabase | La base de ONIA Platform. |
| prisma-cli | Prisma | ONIA Platform usa Prisma 7. |
| gsap-skills | GreenSock | Animación para HyperFrames y la web. |
| Comandos de fábrica (`/code-review`, `/verify`, `/simplify`, `/run`, `/loop`) | Anthropic | Antes los tapaban comandos de ECC con el mismo nombre. |
| Frenos del modo automático | Sergio Urcullo | No escribir en el VPS de producción por ssh y no generar con Higgsfield sin OK. |
| Repos de confianza del modo automático | Sergio Urcullo | ONIA-CENTRAL, más onia-hermes mientras algo lo siga usando. |
| CLAUDE.md global corto | Sergio Urcullo | Reglas de credenciales tal cual, pedir OK antes de instalar y un objetivo por sesión. |

### Codex

| Pieza | De quién | Por qué |
|---|---|---|
| Plugins de fábrica: documentos, planillas, presentaciones, PDF, plantillas, navegador, Chrome, uso de la computadora, visualizar y herramientas de la app | OpenAI | Vienen con Codex. |
| Conector de GitHub | OpenAI | Para los PRs. |
| node_repl | OpenAI | Es parte del motor de Codex. |
| AGENTS.md global corto | Sergio Urcullo | Apunta a ONIA-CENTRAL. |

## 5. Lo que salió y por qué

### Claude

- **Plugins:**
  - **Superpowers:** es de la comunidad, obligaba a lluvia de ideas y plan, y tuvo 5 usos en toda su historia.
  - **claude-mem:** su conexión fallaba y dejó 1.270 conversaciones "observer" de basura, que también salieron.
  - **understand-anything:** corría en cada comando.
  - **cloudflare:** es oficial, pero sus conexiones nunca se autorizaron.
  - **panel-onia:** es de ONIA.
  - **Ponytail:** no es oficial.
  - **Restos:** ECC y caveman, versiones viejas en caché, 8 carpetas de instalaciones fallidas y el marketplace karpathy-skills.
- **Hooks:** los 13 de Orca con su barra de estado, y los 3 de ECC: formateo y chequeo de tipos al final de cada respuesta, que reescribía archivos sin pedir; la cuenta de archivos editados para ese chequeo; y el bloqueo de configuraciones del linter.
- **Reglas:** las 79. 7 de las que se cargaban siempre iban contra el trabajo simple: agentes sin preguntar, TDD obligatorio, 80 % de cobertura, inmutabilidad y clonar proyectos ajenos.
- **Agentes:** los 43. Los dos que se usaban corrían desde la copia del repo viejo.
- **Comandos:** los 72 de ECC.
- **Skills personales:** salieron 97 de las 102 carpetas: gstack, marketingskills de Corey Haines, las de ECC, las de diseño de terceros, las de n8n de czlonkowski, las copias viejas de HyperFrames y las de ONIA. Quedaron supabase, supabase-postgres-best-practices y prisma-cli, más las carpetas `synced` y `.trash`, que son de la app.
- **ECC completo:** su AGENTS.md, que se cargaba como instrucciones; sus archivos sueltos; las carpetas `ecc` y `everything-claude-code`; y las copias para Codex, Cursor, Gemini y OpenCode.
- **Otros restos:** `madre-capturas` (tiene capturas de login de producción y quedó en el archivo privado), `dev-mods`, `image-gen` (fallaba en cada sesión) con su registro, logs viejos, `settings.json.bak`, archivos de caveman, `fix_wf04.py` y las carpetas de archivos anteriores.
- **El enlace `C:\Users\PC\.agents\skills`** al repo viejo: se quitó solo el enlace. Las 28 skills del repo siguen ahí.

### Codex

- **Plugins:** Superpowers, claude-mem (instalado dos veces) y su marketplace, frontend-design, Higgsfield personal, y Vercel, Remotion y HyperFrames (vuelven cuando hagan falta). Gmail, Notion y Drive se apagaron en Codex: un agente de código con el correo, la web y salida hacia afuera es la combinación peligrosa.
- **MCP:** n8n (puede ejecutar workflows de producción), Stitch (Google dice que no es oficial suyo), Higgsfield (genera con costo), agentation (de terceros) y facebook devtools (sin uso).
- **Hooks de Orca** y sus registros de confianza.
- **Skills:** las 61 personales. Quedó `.system`, que es de Codex.
- **Restos:** `madre-tareas` y 5 copias viejas de `config.toml`.

## 6. Decisiones de Sergio Urcullo

1. **Ponytail sale;** su idea pasa a 3 líneas del CLAUDE.md global.
2. **Orca no se usa más.**
3. **La orquesta vieja se pausa.**
4. **Las skills de la cuenta de claude.ai:** quedan solo las 13 de Anthropic (docx, pdf, pptx, xlsx, skill-creator, docs, deep-research, computer-use, chrome-browser, built-in-browser, google-workspace, import-memory y morning).
5. **`fix_wf04.py`** tiene 4 textos con forma de clave: hay que revisar si alguno sigue vivo y rotarlo.

## 7. Las 4 trampas que encontró la revisión

- La orquesta leía 3 skills de la carpeta global por ruta fija. Por eso se pausó primero.
- `.agents\skills` era un enlace al repo viejo, y un borrado normal lo hubiera vaciado.
- panel-onia tenía que apagarse antes de mover su carpeta; si no, Claude fallaba al arrancar.
- Codex también tenía Superpowers, claude-mem y los hooks de Orca.

## 8. Lo que sigue

- **Con OK, de a uno:**
  - pr-review-toolkit y claude-md-management (Anthropic);
  - n8n-io/skills (n8n);
  - vercel-labs/agent-skills;
  - las skills de shadcn;
  - el plugin oficial de HyperFrames;
  - lo que falta de Prisma.
- **Las skills de ONIA se reescriben en este repo con skill-creator,** empezando por las más usadas: onia-router, aprender-de-todo y onia-hermes-jarvis.
- **Hermes limpio, apuntando a este repo.**
- **Huecos sin skill oficial:** Meta Ads (solo hay un MCP), copywriting en español, ver videos de referencia, el VPS y Easypanel, y la contabilidad de Bolivia.

**Para volver atrás:**

```powershell
python -I C:\Users\PC\.claude-archivo-20261028\reinicio.py revertir
```
