# ONIA-CENTRAL

Repo central de ONIA desde el 28-oct-2026 y la única fuente de reglas, skills y contexto. Lo leen Claude, Codex y Hermes.

El repo viejo `onia-hermes` y sus copias, estén donde estén (C:, E:, Temp, el VPS o GitHub), no se leen ni se usan como fuente. Tampoco lo apartado del método viejo: las carpetas `*-archivo-20261028`, `.claude-mem` y `.onia-orquesta` de `C:\Users\PC`. Solo se mira desde afuera si algo todavía corre o depende de ellos, para cortarlo. Si algo de ahí hace falta, Sergio Urcullo lo pide puntualmente: entra una sola cosa y se revisa antes.

## Áreas

| Carpeta | Qué va |
|---|---|
| `marca-personal/` | Contenido de Sergio Urcullo: guiones, carruseles, reels y calendario. |
| `workshops-comunidad/` | Talleres, cursos y comunidad: temarios, páginas y mensajes. |
| `plataforma/` | Decisiones y pedidos de ONIA Platform. El código vive en el repo `onia-platform`. |
| `otros/` | Lo que no entra en las tres anteriores. |
| `docs/decisiones/` | Por qué está armada así cada cosa, con fecha. |

## Cómo se trabaja

- `main` cambia solo por PR. Un PR es un cambio chico, con un título que dice qué hace.
- **Lo mergea Claude sin preguntar** solo si el PR toca nada más que documentos internos de `docs/`, la estructura de carpetas, skills escritas en este repo que no hacen nada de la lista de abajo, o pruebas. Antes tiene que pasar una revisión con veredicto "aprobar" y sin cambios pendientes, hecha por un agente que no comparte el contexto del autor: un agente nuevo, o Codex si lo escribió Claude. Codex y Hermes no mergean.
- **Lo aprueba Sergio Urcullo, siempre:**
  - lo que se publica o ve un cliente, incluidos los guiones, páginas y mensajes de `marca-personal/` y `workshops-comunidad/`;
  - el gasto;
  - producción (VPS, base de datos, Vercel);
  - lo legal;
  - las skills o herramientas que vienen de afuera;
  - cualquier cambio a `AGENTS.md`, `CLAUDE.md`, `.gitignore`, los permisos o esta regla.

  Si un PR entra en las dos listas, o hay duda, lo aprueba él.
- Una sesión, un objetivo, con su "hecho cuando" definido al empezar. Lo que aparece fuera de ese objetivo va a un issue.
- Skills y herramientas: primero las oficiales (Anthropic o el proveedor de la herramienta). Instalar algo pide el OK de Sergio Urcullo.

## Hermes

- Hay uno solo: el oficial de Nous Research, en Windows nativo, con su instalación y sus datos en `%LOCALAPPDATA%\hermes`. No se instala otro: ni en WSL, ni con otro `HERMES_HOME`, ni como perfil aparte, ni en otra máquina. Tampoco la app de escritorio con su instalador, el MSIX o la Store: la app se abre con `hermes desktop`.
- El Hermes viejo del VPS no es este: no se usa ni se consulta. Se apaga con el sí de Sergio Urcullo, porque está en producción.
- Trabaja desde esta carpeta, así su contexto es este `AGENTS.md`. No lee skills ni memorias de otras carpetas y no importa nada de otro agente: ni Claude, ni Codex, ni Cursor, ni OpenClaw.
- Todo lo que escribe en `%LOCALAPPDATA%\hermes` lo hace Sergio Urcullo, desde una PowerShell abierta desde el menú Inicio: instalarlo, actualizarlo, configurarlo (`hermes setup`, `config`, `model`, `auth`, `skills`, o editar `config.yaml`, `SOUL.md` y `.env`) y usarlo. Desde la app de Claude no se corre `hermes` ni se escribe en esa carpeta, porque queda en una copia escondida dentro de la carpeta de la app. Desde Claude se preparan los comandos y se lee el resultado.
- Cómo se abre y cómo se maneja está en `docs/decisiones/2026-10-28-hermes-oficial.md`.

## Qué no entra a Git

- Secretos de ningún tipo: `.env`, claves, tokens, cookies.
- Archivos pesados como video, audio, PSD o RAW. Van a E: o a Drive, y acá queda el enlace.
- Datos personales de clientes o inscriptos, y capturas con logins.

## Frenos

- Nada visible sale sin el OK de Sergio Urcullo con captura: publicaciones, mensajes a clientes, páginas.
- Gasto, generaciones pagas (Higgsfield), producción (VPS, base de datos, Vercel) y actos legales: siempre con su sí.
