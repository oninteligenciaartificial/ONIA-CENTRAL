> Nota 31-oct-2026: este documento queda como historia. Hermes fue reemplazado por los agentes Grok Bot. Las decisiones vigentes están en [taller y agentes](decisiones/2026-10-31-decisiones-taller-y-agentes.md) y [Hermes reemplazado](decisiones/2026-10-31-hermes-reemplazado.md).

# Estado de limpieza: 28-oct-2026

Qué ya quedó como nuevo y qué falta para volver a empezar. Está medido: no son suposiciones.

## 1. Configuración de Claude (`C:\Users\PC\.claude`)

**Listo:**
- Plugins: solo 4 oficiales (documentos, frontend-design, claude-security y GSAP).
- Sin hooks ni barra de estado de Orca o de ECC.
- CLAUDE.md global corto y sin rutas al repo viejo.
- Skills globales: solo las 3 oficiales (dos de Supabase y una de Prisma).
- Sin reglas, agentes ni comandos de ECC.
- Las 223 memorias de proyecto del repo viejo, archivadas.
- La app se reinició a las 07:51 y ya carga esta configuración.
- El modo automático ya no nombra a onia-hermes como repo de confianza, y la app ya no guarda el modo sin preguntas para esa carpeta (issue #3).

**Falta:**
- `.claude.json` guarda 71 entradas de proyectos del repo viejo, de Orca y de onia-wt. Se limpian con Claude cerrado.
- Quedan datos de plugins viejos (12 carpetas en `plugins\data`) y la papelera de skills sincronizadas (127 carpetas).
- Hay 7 tareas programadas viejas de Claude: están apagadas, pero hay que borrarlas desde la app.
- Decidir si quedan los conectores Stitch (Google dice que no es un producto oficial suyo) y Exa (buscador).
- Gestios (repo archivado) todavía prende Superpowers, caveman y frontend-design en su configuración local.

**Sin confirmar:**
- La carpeta local de skills sincronizadas sigue teniendo las 72 de la cuenta, incluidas las 55 que se apagaron en claude.ai. Hay que comprobar en una sesión nueva que ya no aparecen.

## 2. Configuración de Codex (`C:\Users\PC\.codex`)

**Listo:**
- Plugins: solo los de OpenAI y GitHub.
- Sin MCP de terceros.
- AGENTS.md nuevo.
- Skills: solo las de sistema.
- Sin hooks de Orca.
- La app se reinició a las 07:52.

**Listo el 29-oct** ([#19](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/19) y [#20](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/20)), con Codex cerrado del todo, también desde el ícono de la bandeja:
- **Memorias apagadas** con el comando oficial `codex features disable memories`. El comando borró la línea en vez de escribir `false`: rige el valor por defecto, que es apagado. La carpeta vieja (135 archivos, con la skill que se creó sola) y su base de datos están archivadas. Una sesión nueva ya no recibe el bloque de memoria. Codex vuelve a crear `memories_1.sqlite` vacío al arrancar: es normal.
- **Sin el hook de `onia-hermes`:** se quitó su aprobación de `config.toml` y se archivó `onia-hooks`. La carpeta `.hook-trust` queda: es de Codex y solo guarda un hash. Además, `onia-hermes` ya no es confiable, y Codex no corre los hooks de una carpeta que no lo es.
- **Confiable solo ONIA-CENTRAL.** Salieron las 27 carpetas que había y entró ONIA-CENTRAL, que no estaba. Las que salieron eran del repo viejo, de Orca y de `hermes`, cuatro que ya no existen y chats sueltos. Lo eligió Sergio Urcullo: "solo onia central". Otra carpeta se vuelve a marcar cuando haga falta.
- **Plugin "OpenAI Developers" apagado.** ONIA no lo usa. El 403 salió en la prueba de Codex del [#10](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/10), el 28-oct: su conector de créditos de la API, en `chatgpt.com`, recibió un desafío anti-bots de Cloudflare. El 29-oct no se repitió.
- **OpenClaw, apartado:** `~/.openclaw` es su configuración del 9-abr.
- **Registro de skills, apartado:** `~/.agents/.skill-lock.json` es de la CLI `skills` de Vercel Labs.
- **Queda `external_agent_session_imports.json`:** es de Codex y no importó nada. Solo anota 18 sesiones viejas de Claude que encontró.
- **En Claude, del mismo #19:** `autoMode` ya no cita `onia-infra`, `onia-deploy` ni la "CLAUDE.md gold rule". Ahora cita los frenos del `AGENTS.md`.
- Las copias de respaldo, lo archivado y cómo volver atrás están en `C:\Users\PC\.codex-archivo-20261028\issues-19-20-20261029`, con su `MANIFIESTO.md`.

**Falta:**
- 2 automatizaciones viejas pausadas, "ONIA 1.0 revisión" y "ONIA Infra": borrarlas.
- `rules\default.rules` aprueba 14 comandos, 6 del método viejo, y la lista entra en cada sesión: [#32](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/32).
- La CLI de OpenClaw sigue instalada con npm, aunque no corre: [#33](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/33).
- El estado de la app todavía nombra `onia-hermes` y Orca como espacios de trabajo. Además, `features.memories` no tiene valor escrito, y `generate_memories` y `use_memories` siguen en `true`. Hoy no tiene efecto, porque el valor por defecto las apaga, pero conviene dejar las tres en `false`: [#38](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/38).
- En Claude, `autoMode.environment` todavía describe la infraestructura del método viejo: [#39](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/39).
- Opcional: datos pesados, como 1,6 GB de sesiones archivadas y 559 MB de worktrees.

## 3. Hermes (`C:\Users\PC\AppData\Local\hermes`)

**Listo el 28-oct:**
- **Lo viejo quedó apartado** con `limpiar-hermes.ps1`, y el manifiesto de qué se movió y adónde está en `C:\Users\PC\.hermes-archivo-20261028`.
  - La carpeta vieja se renombró en su lugar, como `%LOCALAPPDATA%\hermes-viejo-20261028`. Windows no dejó moverla a otra carpeta, pero sí renombrarla.
  - Se quitaron el protocolo `hermes://` y la variable `HERMES_WRITE_SAFE_ROOT`.
- **La v0.22.5 quedó instalada limpia** (commit `bf0203a`), con el navegador y el control de la computadora. Es la única: pasan los controles de `docs/decisiones/2026-10-28-hermes-oficial.md`, WSL incluido.
- **Piensa con la suscripción de ChatGPT**, con su propio login. No toma prestados los logins de Codex ni de Claude Code, y no usa el token de `gh` ni la `GEMINI_API_KEY` de Windows. Tiene además una API key de Anthropic como segundo proveedor, que se elige a mano y gasta créditos de API.
- **La configuración quedó cerrada,** con los límites que explica `2026-10-28-hermes-oficial.md`: los bloqueos no son una garantía. Tiene un `SOUL.md` nuevo con el canario y cuatro skills activas. En la prueba quedó guardada por error una aprobación permanente (`command_allowlist`) para los scripts con `-e`/`-c`, y se borró el mismo día.
- **La prueba real salió bien:** Hermes escribió un archivo y lanzó a Claude Code y a Codex en solo lectura. El detalle está en `2026-10-28-hermes-oficial.md`.

De lo viejo no se usó nada: lo nuevo lleva credenciales nuevas.

**Falta:**
- Telegram, con un bot nuevo: [#11](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/11).
- Las skills de ONIA para Hermes, Claude Code y Codex: [#10](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/10).
- Desanclar a mano el ícono viejo de la barra de tareas.
- Confirmar en la consola de Anthropic el tope de gasto de la API key de Hermes.
- Decidir qué pasa con `%LOCALAPPDATA%\hermes-viejo-20261028`: son 7,6 GB, con la configuración y las credenciales viejas. Quedó renombrada en su lugar, fuera del archivo. Ya no se vuelve atrás con `limpiar-hermes.ps1 -Modo revertir`, porque la instalación nueva ocupa `%LOCALAPPDATA%\hermes` y el script se frena.

## 4. Archivos locales

**Listo:**
- ONIA-CENTRAL, limpio, en `C:\dev\proyectos\ONIA-CENTRAL`.
- Respaldos en `E:\respaldos`.
- Lo archivado en `C:\Users\PC\.claude-archivo-20261028` y `C:\Users\PC\.codex-archivo-20261028`.
- Nada del repo viejo arranca con Windows. Se apartaron la entrada Run, el `.vbs` de Inicio y la tarea `\ONIA Orquesta`, y se cortó el túnel al VPS del puerto 3108, que nada actual usaba (issue #2).
- Orca, desinstalada con su desinstalador oficial (issue #4).
- Lo apartado de esos dos issues está en `C:\Users\PC\.arranque-archivo-20261028`, con lo necesario para revertirlo.

**Falta:**
- **16 copias del repo viejo.** Se archivan en E: tal como están, sin abrir su contenido. Si Sergio Urcullo quiere rescatar algún cambio sin guardar, lo pide puntualmente.
  - `C:\dev\proyectos\onia-hermes` (47 GB).
  - `onia-hermes-codex-c16c` y `onia-hermes-codex-hc`.
  - `onia-hermes-contenido` (6 GB, 6 cambios sin guardar).
  - `onia-hermes-v1-revision-tandas-20260927` (6 cambios sin guardar).
  - 3 espacios de Orca, con cambios sin guardar.
  - `E:\onia-wt` (17 GB; `harness-src` tiene 14.672 cambios sin guardar).
  - `E:\onia-orquesta` (5,7 GB).
  - 2 copias en Temp, con miles de cambios sin guardar.
- `C:\Users\PC\.claude-mem` (140 MB) y `C:\Users\PC\.onia-orquesta`: archivar.
- `C:\dev\proyectos\onia-platform` tiene 68 cambios sin guardar en la rama `claude/f2-f3-panel`. Es otro producto: hay que decidir qué hacer con ellos.
- `onia-platform-crece4` parece una copia duplicada.
- E: tiene unos 80 GB de respaldos viejos de ONIA duplicados. Se ordenan más adelante.
- C: tiene 53,7 GB libres.

## 5. GitHub

**Listo:**
- ONIA-CENTRAL es privado y no tiene automatizaciones ni secretos.
- En el repo viejo hay 6 automatizaciones por horario apagadas, la orquesta incluida, y 2 corridas canceladas.

**Falta, en el repo viejo:**
- 4 automatizaciones activas que se disparan a mano o con un PR: Deploy ONIA Center, Hermes Jarvis (pruebas), Hermes Jarvis (acceso al VPS) y Video Intake.
- 7 secretos, que hay que revocar donde se crearon.
- El runner del VPS, registrado aunque offline.
- 21 PRs y 3 issues abiertos.
- onia-center y nuvia-store, que despliegan en Vercel desde ahí. Decide Sergio Urcullo.
- Archivar el repo, al final.

**Falta, en otros repos:**
- `onia-hermes-collab`, que duplica al repo viejo.
- Demos abandonadas.
- `web-tahuichi`, que tiene activo un deploy a Hostinger.

## 6. Fuera de la PC (sin confirmar)

- El VPS: el Hermes de Telegram y los cron que se mudaron ahí.
- n8n: 7 workflows activos que usan los tokens de Telegram y de GitHub.
- El bot de Telegram, que comparten varios sistemas.
- Las tareas en la nube de Claude y de Codex.

## Orden para quedar como nuevos

1. Mergear el PR de la estructura inicial. Lo aprueba Sergio Urcullo, porque cambia las reglas.
2. Codex: con la app cerrada, apagar y archivar las memorias, quitar `onia-hooks` y los proyectos viejos confiables, y borrar las 2 automatizaciones viejas.
3. Hermes: **hecho el 28-oct.** Se apartó lo viejo y se instaló y armó desde cero, pensando con la suscripción de ChatGPT. Falta Telegram, con un bot nuevo que trae Sergio Urcullo ([#11](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/11)).
4. Claude: con la app cerrada, limpiar `.claude.json`, los datos de plugins viejos, la papelera y las tareas viejas.
5. Las copias del repo viejo: archivarlas en E: sin abrirlas.
6. Vercel, los secretos y el plan de ChatGPT (Plus o Pro), que ahora también usa Hermes. Decide Sergio Urcullo.
7. Archivar el repo viejo.
8. El VPS y n8n, junto con Sergio Urcullo.
