# Qué hacer con los 10 PRs abiertos de onia-platform

2-nov-2026. Es el objetivo que eligió Sergio Urcullo ese día, con botones, en la sesión ONIA Platform: "Decidir los 10 PRs". Lo pide el [issue #25](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/25) y el paso 3 del [análisis del 28-oct](2026-10-28-seguir-con-onia-platform.md).

**Cómo se revisó.** Dos Codex nuevos (`codex exec --sandbox read-only`, codex-cli 0.166.0) leyeron el diff de cada PR contra `master` en un clon sin checkout del repo, el 2-nov. No corrieron la CI ni tocaron producción: el estado de la CI sale de `gh pr checks` de ese día. Lo que dice cada fila sale de esa revisión. Lo que no se pudo comprobar está dicho.

**Por qué importa el orden.** Mergear a `master` publica en producción: un cron del VPS publica cada 3 horas y no mira las migraciones (análisis, punto 1). Cada merge lo aprueba Sergio Urcullo. El VPS es de Boss Code ([estado del área](../docs/equipo-agentes/platform.md), "Qué toco y qué no").

## Los 10, uno por uno

| PR | Qué hace | CI el 2-nov | Recomendación | Antes de mergear |
|---|---|---|---|---|
| [#154](https://github.com/oninteligenciaartificial/onia-platform/pull/154) | La IP del cliente solo se toma de Cloudflare, para los límites, el bloqueo de login y la auditoría | Pasa | **Mergear primero,** después de comprobar el proxy | Que las cabeceras reales del VPS (Traefik) traigan la IP como supone el cambio. Lo comprueba Boss Code. Si no, puede juntar visitantes o dejar falsificar la IP |
| [#168](https://github.com/oninteligenciaartificial/onia-platform/pull/168) | Mi web: el cliente aprueba o pide ajustes. Aprobar no publica | Pasa | **Mergear,** antes que #170 | Probar con una base real: aprobación guardada, otra organización y operador al mismo tiempo |
| [#185](https://github.com/oninteligenciaartificial/onia-platform/pull/185) | Datos de ejemplo por rubro en el alta (estética, importadora, comercio, servicios) | Pasa | **Mergear,** después de probar el alta | Probar alta y onboarding con una base real. Estética crea tratamientos a precio 0, y un código `EJEMPLO-*` puede chocar con uno del cliente. Choca en archivos con #124 |
| [#184](https://github.com/oninteligenciaartificial/onia-platform/pull/184) | Pulido 13: ayuda por rubro, reserva y panel con teclado, errores internos ocultos. 76 archivos | Pasa | **Mergear,** después de probarlo | Probar la reserva con teclado y los canales. Comparte archivos con #140 |
| [#70](https://github.com/oninteligenciaartificial/onia-platform/pull/70) | Solo documentación: el runbook de correos dice que ya están aplicados | No corre por ser documentación; secretos pasa | **Mergear,** con la evidencia | Que Boss Code confirme en el VPS que el estado es el que dice. No toca código |
| [#188](https://github.com/oninteligenciaartificial/onia-platform/pull/188) | Saca "24/7" de dos textos del chatbot | Falla | **Arreglar** | Ver por qué falla la CI: el diff no lo explica. Quedan "al instante" y "a cualquier hora", que prometen lo mismo |
| [#124](https://github.com/oninteligenciaartificial/onia-platform/pull/124) | Guarda la aceptación de términos en cada alta. Trae migración | Falla, también el control de secretos | **Arreglar** | CI y secretos en verde; usar la IP de #154; decidir si borrar un perfil borra la constancia de aceptación. Después, respaldo probado y migración aplicada en producción antes del merge |
| [#113](https://github.com/oninteligenciaartificial/onia-platform/pull/113) | Gracia de 7 días, dejar de renovar y reanudar | Pasa | **Arreglar** | El código cuenta la gracia distinto de lo que dice la descripción, y en el plan semanal pagado tarde el plan figura vencido. Alinear código, textos y términos |
| [#140](https://github.com/oninteligenciaartificial/onia-platform/pull/140) | Widget de chat propio conectado a Chatwoot | Pasa | **Arreglar** | Integrar #154 y comprobar con Boss Code el proxy, el origen permitido, `/public/api/` de Chatwoot cerrado y `hmac_mandatory` |
| [#170](https://github.com/oninteligenciaartificial/onia-platform/pull/170) | Mi web: confirmar datos públicos y exportarlos | No corrió | **Arreglar** | Le falta la migración de una columna nueva, y sin ella se pueden romper los listados de Mi web. Ponerlo al día con #168 y `master`, y corregir la precisión de la hora, que puede dar errores 409 |

Ninguno se recomienda cerrar.

## Orden propuesto

1. #154, porque #140 y #124 dependen de él.
2. #168, #185, #184 y #70, que tienen CI verde y no traen migración. Cada uno, con su prueba.
3. Los cinco para arreglar, cada uno en su rama: #188, #113, #140, #124 y #170. #124 y #170 traen cambios de base, y van después del respaldo probado (análisis, paso 5).

## Qué falta para probar

Las pruebas de "una base real" no se pueden hacer contra QA del VPS, porque usa la misma base que producción (análisis, punto 2). Hace falta una base de prueba aparte. En esta PC está Docker 29.8.0. Levantar ahí una base Postgres pide bajar su imagen, y bajar algo pide el OK de Sergio Urcullo. Si no, la prueba la arma Boss Code en el VPS.

## Lo que decide Sergio Urcullo

- El orden y si se arranca ya o después del 6-nov.
- Cada merge, uno por uno, con su prueba a la vista.
- En #113, cómo se cuenta la gracia de 7 días: es una regla comercial que ve el cliente.
