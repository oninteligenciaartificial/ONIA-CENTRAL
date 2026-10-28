# ONIA-CENTRAL

Repo central de ONIA desde el 28-oct-2026. Lo leen Claude, Codex y Hermes. El repo `onia-hermes` queda como historia: se consulta, pero no se trabaja ahí.

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
- Lo del repo viejo se trae de a una cosa, cuando se usa, y se revisa antes de entrar.
- Skills y herramientas: primero las oficiales (Anthropic o el proveedor de la herramienta). Instalar algo pide el OK de Sergio Urcullo.

## Qué no entra a Git

- Secretos de ningún tipo: `.env`, claves, tokens, cookies.
- Archivos pesados como video, audio, PSD o RAW. Van a E: o a Drive, y acá queda el enlace.
- Datos personales de clientes o inscriptos, y capturas con logins.

## Frenos

- Nada visible sale sin el OK de Sergio Urcullo con captura: publicaciones, mensajes a clientes, páginas.
- Gasto, generaciones pagas (Higgsfield), producción (VPS, base de datos, Vercel) y actos legales: siempre con su sí.
