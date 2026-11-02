# Permisos de Claude Code en este repo

2-nov-2026. Rehace en versión mínima la propuesta de hooks de Grok Bot (rama `claude/hooks-contexto-20261102`, commit `cc9b463`). Sergio Urcullo eligió "Rehacela mínima" en la sesión del Administrador, después de que la evaluación de Codex dijera que la rama no se mergea tal cual (sin enlace). Toca permisos, así que lo aprueba él (`AGENTS.md`).

## Qué queda

`.claude/settings.json`, con reglas de permisos oficiales de Claude Code. Corren en toda sesión de Claude Code abierta en este repo o en uno de sus worktrees. Hoy, todas las áreas trabajan en worktrees de ONIA-CENTRAL (`list_sessions`, 2-nov).

- **Se niega leer secretos:** cualquier `.env` o `.env.*` del disco, `~/.ssh`, `~/.aws` y `~/.onia`, donde hay dos archivos de accesos que nadie abrió (`docs/equipo-agentes/coordinacion.md`). Vale para la herramienta Read y para `cat`, `head`, `sed` y las redirecciones de Bash.
- **Se niega `git push` a `main`:** en Bash y en PowerShell, con `main` como destino (`origin main`, `-u origin main`, `HEAD:main`). El push de las demás ramas y el merge de PRs siguen como dice el `AGENTS.md`.
- **Se pregunta antes de tocar producción:** `vercel`, `npx vercel`, `ssh` y `scp` piden el sí en la app, también en modo auto. Sin nadie que conteste, como con `claude -p`, no corren.

La documentación oficial dice: "Rules are evaluated in order: deny, then ask, then allow", y que una regla deny o ask vale aunque el comando venga encadenado: "An ask rule like `Bash(git clean *)` still prompts you for `cd /tmp && git clean -f` [...] even in auto mode" ([permisos](https://code.claude.com/docs/en/permissions#manage-permissions), [comandos compuestos](https://code.claude.com/docs/en/permissions#compound-commands)).

## Qué se deja afuera de la propuesta de Grok, y por qué

- **Los scripts del guard (`guard.sh`, `guard.ps1`) y la instalación de `jq`.** El `AGENTS.md` dice "Nada de scripts propios", e instalar pide el OK de Sergio. Las reglas de permisos hacen lo mismo sin script.
- **Negar todo push y todo merge.** Frena el flujo de PRs que el `AGENTS.md` permite.
- **Recargar reglas después de compactar.** No hace falta: "Project-root CLAUDE.md survives compaction" ([memoria](https://code.claude.com/docs/en/memory#instructions-seem-lost-after-compact)).
- **Achicar `CLAUDE.md`.** La guía oficial recomienda "target under 200 lines per CLAUDE.md file", pero no lo exige ([memoria](https://code.claude.com/docs/en/memory#write-effective-instructions)). Sacar la lectura de `docs/lecciones.md` choca con las reglas vigentes.
- **Las skills `/empezar`, `/cerrar` y `/auditar`.** Ya están en el plan, punto 10, y van en su propio PR.
- **Worktrees separados.** Cada sesión de la app ya tiene el suyo.

## Pruebas del 2-nov

Con `claude -p` en el worktree de esta rama, `claude-haiku-5-5`, dejando permitidos `Bash(git push *)`, `Bash(cat *)`, `Bash(ssh *)` y `Read`:

| Llamada | Con este archivo | Sin este archivo (`--setting-sources user`) |
|---|---|---|
| `git push --dry-run origin HEAD:main` | negada | corrió |
| `git push --dry-run -u origin main` | negada | no se probó |
| `git push --dry-run origin HEAD:refs/heads/claude/prueba-permisos-dry` | corrió | no se probó |
| `cat` de un `.env` de prueba | negada | no se probó |
| Read del mismo `.env` | negada | corrió |
| `cat` de un `.txt` en la misma carpeta | corrió | no se probó |
| `ssh -V` | no corrió: pidió permiso | corrió |

El `.env` de prueba tenía solo `PRUEBA=valor-de-prueba`. Los push llevaban `--dry-run` y no subieron nada.

## Límites

- **No es una barrera de seguridad.** La documentación lo dice así: una regla de Bash "isn't a security boundary around the program". Por ejemplo, `Bash(git push *)` no frena `git -C . push origin main` ([lo que una regla no cubre](https://code.claude.com/docs/en/permissions#what-a-bash-rule-doesnt-match)). Tampoco frena un script de Python o Node que abre el archivo por su cuenta ([Read y Edit](https://code.claude.com/docs/en/permissions#read-and-edit)).
- **Sin sandbox en Windows.** "On native Windows, Claude Code runs commands unsandboxed" ([sandbox](https://code.claude.com/docs/en/sandboxing)).
- **Sin protección de `main` en GitHub.** El repo es privado y la cuenta no tiene GitHub Pro: GitHub contestó "Upgrade to GitHub Pro or make this repository public to enable this feature" al pedir las reglas de `main` (2-nov).
- **Solo Claude Code.** Codex no lee este archivo. Desde el 3-nov, Codex es el agente por defecto.
- **No cubre las herramientas MCP de producción,** como las de Vercel o Supabase conectadas a la app.
- **Las sesiones ya abiertas lo toman cuando su rama lo trae.** Las sesiones nuevas, que salen de `main`, lo tienen desde el arranque.
- **También queda negado `.env.example`.** Una regla deny no admite excepciones con allow.

## Cómo se deshace

Se revierte el PR o se borra `.claude/settings.json`.
