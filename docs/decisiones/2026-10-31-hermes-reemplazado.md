# Hermes queda reemplazado por los agentes Grok Bot

Decisión de Sergio Urcullo del 31-oct-2026: los 7 agentes Grok Bot (Operaciones, Contenido y Marca, Talleres, Growth y Anuncios, Finanzas y Legal, ONIA Platform, y Ventas y Atención) reemplazan a Hermes como orquestador. **Este PR no borra ni cambia nada.** Solo lista lo que nombra a Hermes y propone qué hacer; cada propuesta la aprueba Sergio.

## Lo que hay en el repo

Búsqueda de "Hermes" en `main` del 31-oct-2026 (veces que aparece entre paréntesis).

| Archivo | Qué es | Propuesta |
|---|---|---|
| `AGENTS.md` | Reglas generales; tiene la sección "Hermes" y dice que Hermes arma la automatización y los scripts | **Actualizar** (solo Sergio puede aprobar cambios a este archivo) |
| `README.md` (1) | Nombra el repo viejo `onia-hermes` como historia | Dejar |
| `docs/decisiones/2026-10-28-hermes-oficial.md` (106) | Cómo se instala y maneja Hermes en Windows | Archivar: dejarlo como historia con un aviso de "reemplazado" al inicio |
| `docs/decisiones/2026-10-29-mapa-operacion-onia.md` (30) | Mapa con Hermes como orquestador y el taller del 17 y 19-nov | Actualizar en un PR aparte, o dejar como historia y apuntar a las decisiones del 31-oct |
| `docs/decisiones/2026-10-28-skills-compartidas.md` (50) | Cómo comparten skills Claude, Codex y Hermes | Dejar como historia |
| `docs/decisiones/2026-10-28-plan-arranque.md` (26) | Plan de arranque del 28-oct | Dejar como historia |
| `docs/decisiones/2026-10-28-reinicio-claude-codex.md` (3) | Reinicio de Claude y Codex | Dejar |
| `docs/credenciales.md` (29) | Dónde guarda cada agente sus logins, incluido `%LOCALAPPDATA%\hermes` | Actualizar cuando se apague Hermes; hasta entonces es útil para saber qué limpiar |
| `docs/estado-limpieza-2026-10-28.md` (23) | Estado de la limpieza del 28-oct | Dejar |
| `docs/lecciones.md` (29) | Lecciones; varias de Hermes | Revisar una por una: las que valen para todos quedan |
| `.agents/skills/llevar-issue/SKILL.md` (36) | Skill de orquestación que usa sobre todo Hermes | Actualizar: el orquestador pasa a ser un agente Grok Bot |
| `.agents/skills/llevar-issue/references/cuota-pendiente.md` (13) | Referencia de la skill | Actualizar junto con la skill |
| `.agents/skills/llevar-issue/references/prueba-consumo.md` (8) | Referencia de la skill | Actualizar junto con la skill |
| `otros/aprender-ia-y-agentes.md` (34) | Temas para el bloque "Para aprender" | Actualizar en un PR aparte |
| `plataforma/2026-10-28-seguir-con-onia-platform.md` (10) | Qué depende del repo viejo `onia-hermes` en producción | Dejar: describe producción |

No hay scripts en este repo.

## Producción: no tocar

Solo Sergio decide qué se hace con esto, y cuándo:

- **Hermes en Windows** (`%LOCALAPPDATA%\hermes`): instalación, `config.yaml`, `.env`, su bóveda y `vault.key`.
- **El Hermes viejo del VPS.**
- **n8n.**
- **Lo que corre en el VPS desde el repo viejo `onia-hermes`** (según `plataforma/2026-10-28-seguir-con-onia-platform.md`): el despliegue de la plataforma (`hermes-content/deploy/onia-platform/`), los crons de recordatorios y renovaciones (`hermes-content/infra/vps-ops/crons/` copiados a `/root/bin`) y el chatbot de WhatsApp `onia-center` (puerto 3020).
- **El repo `onia-hermes`** en GitHub y sus copias.
