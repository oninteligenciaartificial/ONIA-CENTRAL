# T-03/T-08 · Panel · 2026-11-01

Estado: parcial; implementación local y pruebas en verde; datos reales Chatwoot y nuevas capturas bloqueados.

## Cambios

- `/workspace/platform/repo/lib/panel/finanzas-locales.ts`: resumen estricto local, fechas calendario, TC positivo trazable, exclusión de previstos/futuros, ausencia de datos diferenciada de cero, devoluciones firmadas y estados realizados explícitos.
- `/workspace/platform/repo/panel/data/finanzas.json`: export real regenerado de `/workspace/OnIA_Finanzas_2026.xlsx`; 9 movimientos. No se modificó el XLSX.
- `/workspace/platform/repo/lib/panel/locales.ts`, `nombres-agentes.ts`, `app/(dashboard)/panel/PanelVista.tsx`: finanzas integradas y nombres Pelau, Boss Code, Boss No-Code, Analista; área histórica conservada en la tarea.
- `lib/panel/chatwoot-local.ts`: export agregado opcional, sin red, mensajes ni contactos; snapshot con fecha y estado pendiente explícito si falta.
- `scripts/panel-preview*.tsx`: preview exclusivamente local; `scripts/panel-local-server.mjs` y `panel-local-browser.mjs`: servidor loopback y smoke/capturas reproducibles.
- Guía: `docs/panel-interno.md`, sección Lote local T-03/T-08.

## Evidencia

- `node node_modules/vitest/vitest.mjs run lib/panel 'app/(dashboard)/panel/page.test.ts'`: **7 suites / 124 tests verdes**, `/workspace/estado/panel-tests.log`.
- ESLint focal de parsers, tests, UI, page y preview: **exit 0**, `/workspace/estado/panel-lint.log` (vacío = sin diagnósticos).
- Typecheck corregido en test financiero; ejecución final pendiente tras el build del integrador. Mi intento concurrente falló TS6053 por regeneración de `.next/types`, registrado en `panel-typecheck.log`; no se atribuye a un gate verde.
- `git diff --check -- lib/panel 'app/(dashboard)/panel' scripts/panel*`: exit 0.
- Export XLSX: 9 movimientos, 2 sin monto en el archivo. Al corte 2026-11-01: 4 incluidos, 4 previstos/futuros excluidos, 1 restante sin monto. Ingresos Bs 0 explícitos; gastos Bs 3.088,29; saldo registrado **−US$256,29**, TC paralelo venta **12,05 Bs/USD**. Saldo **parcial**, no ganancia completa; costo variable API aún sin importe. No se cuentan Bs 2.000 de caja como ingresos.
- Bundles temporales movidos a `.verif-tmp/panel-preview/`, fuera del lint según configuración existente. No se cambiaron reglas ni se borraron fuentes.
- Preview SSR interactiva regenerada: `/workspace/platform/repo/panel/preview-grabacion.html`; estática: `panel/preview-v2.html`. Son datos internos: no publicar.

## Bloqueos y límites

- No existe export local identificado de Chatwoot. No se consultó producción ni se leyó `.env`; el panel muestra pendiente de export. Los tests de contadores son simulados, no acreditan datos reales de Chatwoot.
- `curl http://localhost:3100/panel-local` devuelve código 000 desde este sandbox. Nuevo servidor local rechaza `listen` con `EPERM` en 127.0.0.1:3100.
- Playwright/Chrome instalado falla al arrancar: `setsockopt: Operation not permitted`, `SIGTRAP`. Por ello **no hay PNG nuevo del panel**; la captura preexistente `estado/capturas/panel-local.png` no fue sobrescrita y no acredita este lote.
- Queda ejecutar `panel-local-server.mjs` y `panel-local-browser.mjs` en entorno con loopback/Chrome permitidos. No se alteraron permisos ni procesos ajenos.
- Nombres unificados en presentación; el estado del equipo conserva áreas históricas y fecha del archivo. Analista se menciona como rol, sin inventar un estado que no existe en la fuente.

Skill local leída: `.agents/skills/minimalist-ui/SKILL.md`, manteniendo el diseño actual por precedencia de las guías del repo. Sin dependencias nuevas ni investigación externa necesaria. Sin push, deploy, gastos, producción o cambios `.env`.

## Integración final

El integrador ejecutó `npm run typecheck` después de finalizar el build: exit 0 (`validacion-producto/repo-typecheck-final.log`). Lint completo: exit 0, 0 errores / 104 advertencias (`repo-lint-final.log`). Next build aislado con configuración ficticia local: exit 0. El pipeline npm y la suite completa no están verdes; consultar `producto.md` y `validacion-producto/diagnostico-suite.md`.
