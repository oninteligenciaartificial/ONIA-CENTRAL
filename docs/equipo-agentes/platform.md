# ONIA Platform: estado del área

Al día el 2-nov-2026 (Bolivia). Lo lleva la sesión de Claude Code del área, que reemplaza al bot "ONIA Platform" de Grok Bot. Desde el 3-nov la retoma Codex. El código vive en el repo `onia-platform`; las decisiones, en `plataforma/`.

Lo de "comprobado hoy" se vio desde esta PC o en GitHub el 1-nov, y se volvió a comprobar el 2-nov: nada cambió. Lo que está solo en `/workspace` de Grok Bot no se ve desde acá y no se da por disponible.

## Objetivo actual

Lo eligió Sergio Urcullo el 2-nov, con botones, en esta sesión: "Oferta a inscriptos (Recomendada)".

**Objetivo:** definir qué de ONIA Platform se les ofrece a los inscriptos del taller desde el miércoles 4, sin prometer lo que no está probado.

**Hecho cuando:**
- el texto de la oferta está en `plataforma/`, aprobado por Sergio Urcullo con sus palabras citadas en el PR y mergeado;
- Boss No-Code lo recibió para la respuesta automática del 4-nov, con copia en el [tablero de mensajes entre áreas (#111)](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/111).

## Comprobado hoy

**Repo `onia-platform` en GitHub.**
- `master` tiene 2.098 commits. El último es del 16-oct (PR #183). No cambió desde el [análisis del 28-oct](../../plataforma/2026-10-28-seguir-con-onia-platform.md).
- 10 PRs abiertos, los mismos del análisis. GitHub los marca a todos como mergeables sin conflicto. Mergear a `master` es publicar en producción.

| PR | Qué hace | CI (Lint, Typecheck, Tests & Build) | Migración |
|---|---|---|---|
| [#188](https://github.com/oninteligenciaartificial/onia-platform/pull/188) | Saca "24/7" del texto del chatbot | Falla | No |
| [#185](https://github.com/oninteligenciaartificial/onia-platform/pull/185) | Plantilla mínima por rubro en el alta | Pasa | No |
| [#184](https://github.com/oninteligenciaartificial/onia-platform/pull/184) | Pulido 13: ayuda por rubro, panel de admin de usted | Pasa | No |
| [#170](https://github.com/oninteligenciaartificial/onia-platform/pull/170) | Mi web: confirmar datos públicos | No corrió | No |
| [#168](https://github.com/oninteligenciaartificial/onia-platform/pull/168) | Mi web: aprobar o pedir ajustes | Pasa | No |
| [#154](https://github.com/oninteligenciaartificial/onia-platform/pull/154) | Seguridad: la IP del cliente solo desde Cloudflare | Pasa | No |
| [#140](https://github.com/oninteligenciaartificial/onia-platform/pull/140) | Widget de chat propio (W1 a W1e) | Pasa | No |
| [#124](https://github.com/oninteligenciaartificial/onia-platform/pull/124) | Aceptación de términos en el alta | Cancelada (después del merge de `master` del 31-oct) | Sí |
| [#113](https://github.com/oninteligenciaartificial/onia-platform/pull/113) | Gracia de 7 días y dejar de renovar | Pasa | No |
| [#70](https://github.com/oninteligenciaartificial/onia-platform/pull/70) | Runbook de correos: dice que ya está aplicado | No corrió (solo el control de secretos) | No |

La columna de migración cuenta archivos de `supabase/` o con "migration" en la ruta.

**Checkout `C:\dev\proyectos\onia-platform`.**
- Sigue en la rama `claude/f2-f3-panel`, con 68 cambios sin guardar. En GitHub no hay rama de archivo para ellos: el [issue #24](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/24) sigue sin hacer.
- Sigue la carpeta `C:\dev\proyectos\onia-platform-crece4`.
- El repo tiene 43 worktrees, 27 de ellos en `E:\onia-wt` ([issue #63](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/63)).

**Precios.** El código de `master` sigue con la escalera vieja: Bs 320, 550, 890 y 1.290 por mes, más el empresarial de Bs 2.900 (`lib/subscription-plans.ts:40-44`). La propuesta nueva de Grok Bot está solo en `/workspace` (abajo). Ninguna está decidida.

**Ramas de Grok Bot en GitHub.** No hay ramas `feat/prueba-7-dias` ni `feat/gran-arreglo`, ni otras con "prueba-7", "gran-arreglo", "tuteo", "inventario", "cloud-api" o "evals" en el nombre. Según el estado de Grok Bot, sus parches quedaron sin push; si se subieron con otro nombre está sin confirmar.

**Issues de ONIA-CENTRAL del área, abiertos:** [#24 (guardar los 68 cambios)](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/24), [#25 (decidir los 10 PRs)](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/25), [#26 (mudar despliegue y crons)](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/26), [#27 (operación para el primer cliente)](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/27), [#28 (cobro y lo legal)](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/28), [#29 (repo y harness en orden)](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/29), [#60 (costo real del mes)](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/60), [#61 (prueba comercial)](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/61), [#62 (hito del 31-ene-2027)](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/62) y [#63 (ramas y worktrees)](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/63).

**Herramientas de esta sesión** (se vio que están conectadas; no se leyó ningún secreto):
- GitHub por `gh`, con la cuenta `oninteligenciaartificial`.
- Codex CLI 0.166.0, para revisar en solo lectura.
- Conectores de la app: Vercel, Supabase y Cloudflare. No se usaron. La base de la plataforma es un Supabase propio en el VPS: que el conector de Supabase llegue a ella está sin confirmar.
- Acceso al VPS: sin comprobar, a propósito, porque es producción.

## Solo en `/workspace` de Grok Bot

Esta PC no lo ve. El 2-nov se buscó en las ramas `onia-loop-excepcion-d003` y `grokbot/workspace-20261101` de ONIA-CENTRAL: no están los parches, el informe de los 10 PRs, la auditoría ni los precios de la competencia. Si hace falta, Sergio Urcullo se lo pide a Grok Bot. Según el estado que dejó el bot (`platform.md` y `ESTADO-ACTUAL.md` de la rama `onia-loop-excepcion-d003`), sin comprobar:
- `platform/estado-v1.md` y parches validados en local, sin push: inventario único, webhook de la API de WhatsApp Cloud, evals 38/38, robustez, plantillas por rubro, automatizaciones, límite y prueba de 7 días, panel interno y guard de tuteo.
- `platform/decision-prs-20261101.md`: informe de Codex sobre los 10 PRs. Recomendaba mergear solo la plantilla mínima por rubro ([#185](https://github.com/oninteligenciaartificial/onia-platform/pull/185)) y aprobar o pedir ajustes desde Mi web ([#168](https://github.com/oninteligenciaartificial/onia-platform/pull/168)), y arreglar el resto.
- `platform/auditoria-app-20261101.md`: la app comparada con la competencia (precios viejos en el código, sin créditos, alta cerrada, voz mezclada, "24/7").
- `platform/gran-arreglo/`: worktree de la rama `feat/gran-arreglo` con su encargo. Quedó frenado sin push.
- `platform/precios-competencia.md` §8: propuesta de precios. Créditos a Bs 12,09 por dólar, planes de Bs 390, 590 y 990, y recargas de Bs 100, 289, 569 y 1.099. Es propuesta, no decisión.

## Le falta decidir a Sergio Urcullo

1. Si se le piden a Grok Bot los archivos de `/workspace/platform` o se rehace lo necesario desde acá.
2. Qué se hace con cada uno de los 10 PRs ([#25](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/25)). Cada merge publica en producción.
3. Los precios de la plataforma: la escalera del código o la propuesta de Grok Bot.
4. Verificar el QR del BCP para el cobro (D-019 de Grok Bot, sin comprobar; el cobro es el [#28](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/28)).

## Para otras áreas

- **Para Marketing:** `workshops-comunidad/plan-meta-ads-borrador.md` sigue con el calendario de clases del 3, 5 y 7-nov, y su sección "Qué se vende desde el miércoles 4", con combos y clases sueltas. Las dos cosas las reemplazó la [oferta del 1-nov](../decisiones/2026-11-01-oferta-taller-3-4-5.md). Avisado el 2-nov por el tablero #111.
- **Para la coordinación:** el `COMO-TRABAJAR.md` de la rama de Grok Bot pide tuteo, y la regla vigente es el voseo.
- **Para la coordinación:** según el `ESTADO-ACTUAL.md` de Grok Bot, el respaldo semanal del VPS era una rutina del agente Operaciones. Hay que confirmar que sigue corriendo antes de borrar ese agente.
