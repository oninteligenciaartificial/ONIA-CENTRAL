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

**Falta:**
- El modo automático todavía nombra a onia-hermes como repo de confianza, en 4 líneas. Se saca al archivar el repo viejo.
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

**Falta:**
- **Lo más importante: las memorias viejas siguen activas.** `memories`, `generate_memories` y `use_memories` están en `true`, así que 96 KB del método viejo se meten en cada sesión. Hay que apagarlas y archivarlas con Codex cerrado.
- `onia-hooks` (un hook viejo) y 5 proyectos del repo viejo siguen marcados como confiables.
- 2 automatizaciones viejas pausadas, "ONIA 1.0 revisión" y "ONIA Infra": borrarlas.
- Opcional: datos pesados, como 1,6 GB de sesiones archivadas y 559 MB de worktrees.

## 3. Hermes (`C:\Users\PC\AppData\Local\hermes`)

**Listo el 28-oct:**
- **Lo viejo quedó apartado** con `limpiar-hermes.ps1`, y el manifiesto de qué se movió y adónde está en `C:\Users\PC\.hermes-archivo-20261028`.
  - La carpeta vieja se renombró en su lugar, como `%LOCALAPPDATA%\hermes-viejo-20261028`. Windows no dejó moverla a otra carpeta, pero sí renombrarla.
  - Se quitaron el protocolo `hermes://` y la variable `HERMES_WRITE_SAFE_ROOT`.
- **La v0.22.5 quedó instalada limpia** (commit `bf0203a`), con el navegador y el control de la computadora. Es la única: pasan los controles de `docs/decisiones/2026-10-28-hermes-oficial.md`, WSL incluido.
- **Piensa con la suscripción de ChatGPT**, con su propio login. No toma prestados los logins de Codex ni de Claude Code, y no usa el token de `gh` ni la `GEMINI_API_KEY` de Windows. Tiene además una API key de Anthropic como segundo proveedor, que se elige a mano y gasta créditos de API.
- **La configuración quedó cerrada.** Tiene un `SOUL.md` nuevo con el canario y cuatro skills activas. En la prueba quedó guardada por error una aprobación permanente (`command_allowlist`) para los scripts con `-e`/`-c`, y se borró el mismo día.
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
