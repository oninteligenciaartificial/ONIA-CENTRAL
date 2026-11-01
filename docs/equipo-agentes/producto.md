# Actualización · Sitio personal de Sergio + workshop · 2026-11-01

**Candidato local implementado; entrega visual y Lighthouse pendientes. Sin publicación, push, gasto ni cambios de producción.** Esta actualización corresponde al cambio de alcance de las 17:13; el historial anterior se conserva debajo.

- Entregable principal: `/workspace/entregables-workshop/sitio-sergio/index.html` (hub) y `workshop.html` (evento integrado). CSS/JS estáticos, mobile-first y copy en tuteo. Bóveda con búsqueda/filtros, tres guías/plantillas descargables, skills marcadas en preparación, trabaja conmigo, llamada 1:1 gratis, webs, Onia Community e Instagram.
- Workshop: hero con fechas exactas (3, 5 y 7 nov 2026, 19:00 Bolivia), temario, profesor, testimonios placeholder explícitos, FAQ, precio **Bs 50 por la serie** y CTA repetidos. CONFIG conserva precio/devolución/foto; WhatsApp y pago configurables. Contador por clase, disponibilidad al empezar y próxima edición tras el cierre.
- Ruta pedida originalmente: `/workspace/entregables-workshop/web-v2/index.html` deriva al workshop del sitio personal, para evitar dos landings divergentes. La base `/workspace/entregables-workshop/web/index.html` permanece intacta.
- No se encontró código local del sitio personal. HTML público no recuperable (DNS/error web): reconstrucción basada en captura local existente, pedido y base del workshop. Referencias consultadas: [Erik Taveras](https://eriktaveras.com/) y [Monetise](https://event.monetise.com/lp-1-c). No se copiaron métricas ni testimonios de terceros.
- Verificación: sintaxis JS OK; **16 comprobaciones de lógica pasan**; enlaces locales/anclas, IDs, H1 y tuteo estáticos OK. Aproximadamente 34 kB de HTML/CSS/JS y sin dependencias externas de renderizado.
- **Capturas PNG nuevas no generadas:** Chromium falla por `Operation not permitted`. Lighthouse no disponible localmente y navegador bloqueado: **>=90 móvil no medido**. Script de captura/validación listo en `sitio-sergio/verificacion/capturas.cjs`; log junto al script. Estado en `/workspace/estado/capturas/ESTADO-SITIO-SERGIO.md`.

**Falta decidir/completar:** política de devolución, foto aprobada, enlaces originales de agenda/configurador/comunidad y catálogo de skills; revisar la selección de recursos propuesta y condiciones de grabación/planes. El precio de lanzamiento ya está definido por este pedido. Mientras faltan los enlaces originales, los servicios se coordinan por WhatsApp con texto explícito. Falta ejecutar captura/Lighthouse en un entorno permitido e inspeccionar el resultado visual.

Guía completa, procedencia, configuración y comandos de validación: `/workspace/entregables-workshop/sitio-sergio/LEEME.md`.

---

# Lote producto · 2026-11-01 · Boss Code

**Estado: parcial, no aprobado para publicar.** Se completaron cambios locales y pruebas focales. La validación completa terminó con fallos y las capturas tienen bloqueos explícitos; no se declara todo verde. Resultados cerrados en [resultados.json](validacion-producto/resultados.json).

## Checklist y evidencia

| Ítem | Resultado | Evidencia |
| --- | --- | --- |
| T-07 | Next build aislado verde en ambos candidatos; npm build bloqueado por EPERM; suites completas con fallos (detalle abajo) | `validacion-producto/` |
| T-03/T-08 | Finanzas reales y nombres unificados; Chatwoot real pendiente de export local | [Panel](panel-validacion.md), `panel-tests.log` |
| Tope Claude | Configurable, default US$1 acumulado por tarea y corte preventivo. Claude real bloqueado: CLI sin garantía dura | [Costo](costo-validacion.md), 193 comprobaciones verdes |
| Workshop | CONFIG precio/devolución/foto claros; 9 pruebas de lógica verdes. Navegador pendiente | [Web](web-validacion.md), `web-tests.log` |
| Capturas PNG | Bloqueadas por permisos de loopback/Chromium; no se produjeron nuevas | [Estado de capturas](capturas/ESTADO-LOTE-20261101.md) |

## Gates de integración

- `npm run build`: **exit 1 en ambos árboles**, `spawnSync python3 EPERM` durante `scripts/subset-iconos.mjs`; no se relajó el paso ni se marcó aprobado.
- `node node_modules/next/dist/bin/next build --webpack`: **exit 0 en ambos árboles** con configuración local ficticia, Sentry/telemetría apagados y sin credenciales heredadas. Compilación, TypeScript y páginas estáticas completados. Esto no equivale al pipeline npm completo.
- `npm run typecheck`: **exit 0** después de corregir el tipo inferido del fixture financiero; `repo-typecheck-final.log`.
- `npm run lint`: **exit 0**, 0 errores / 104 advertencias preexistentes; `repo-lint-final.log`. Los bundles generados de preview se movieron a `.verif-tmp/panel-preview/`, sin excluir fuentes ni relajar reglas.
- `git diff --check`: **exit 0**.
- Pruebas focales del candidato final: panel **124**, costo **193**, web **9**: **326 comprobaciones verdes**.
- Suite completa de `/workspace/platform/repo`: **exit 1**, 949 archivos verdes / 16 fallidos / 2 omitidos; **15.655 tests pasan, 169 fallan, 16 omitidos**, 18 errores no capturados; duración 540,89 s. Comando `npm test -- --maxWorkers=2`; `repo-suite.log`. Los archivos añadidos después del descubrimiento inicial se comprobaron con la suite focal final del panel (124 tests).
- Suite completa de `feat/panel-interno` (`/workspace/platform/wt-panel`): **exit 1**, 933 archivos verdes / 17 fallidos / 2 omitidos; **15.302 tests pasan, 169 fallan, 16 omitidos**, 18 errores no capturados; duración 540,96 s. `rama-panel-suite.log`.

Logs completos en `/workspace/estado/validacion-producto/`. El primer intento aislado de Next no tenía ENCRYPTION_KEY de prueba y falló al recolectar `/api/gateway-config`; se corrigió únicamente el entorno del proceso. El intento intermedio de TypeScript del subagente coincidió con regeneración de `.next`; la comprobación final se ejecutó después y pasó.

### Diagnóstico de los fallos globales

Los 169 tests fallidos por candidato se desglosan en 143 errores EPERM explícitos al lanzar subprocesos, 17 timeouts vinculados a `listen EPERM` (13 respaldo y 4 BCP) y 9 aserciones de salida vacía cuya causa no debe atribuirse automáticamente a permisos. Los 18 errores no capturados son `listen EPERM`. Tres suites no cargan por `spawnSync EPERM`; la rama panel tuvo además una cuarta por resolución de `server-only` en el test de página. Esta última se corrigió **solo en el test** simulando las lecturas locales y comprobando su orden tras la autorización: **6/6 verdes**, ESLint y diff-check exit 0 (`panel-page-test-corregido.log`, `panel-page-eslint.log`). El marcador `server-only` y el código de producto permanecen intactos. La suite completa no se repitió tras esta corrección focal; las cifras anteriores documentan la corrida original. [Diagnóstico independiente](validacion-producto/diagnostico-suite.md).

No se omitieron pruebas para obtener verde ni se modificó el aislamiento. Los gates completos quedan pendientes de repetir en un entorno permitido; **T-07 no aprobado**.

## Resultado del panel

Se regeneró `platform/repo/panel/data/finanzas.json` desde `/workspace/OnIA_Finanzas_2026.xlsx` sin modificar el Excel. El saldo registrado es **−US$256,29**, con TC del archivo **12,05 Bs/USD**. Se consideran 4 movimientos, se excluyen 4 previstos/futuros y queda 1 sin monto. Es un saldo **parcial**, no una ganancia completa; falta costo variable API. Fechas inválidas se rechazan, estados desconocidos se señalan y devoluciones conservan signo.

Agentes unificados en presentación: **Pelau, Boss Code, Boss No-Code, Analista**. La ausencia de actividad no se sustituye por datos inventados. Chatwoot admite un export agregado local fechado; no se encontró uno y no se consultó producción. Las pruebas de Chatwoot usan datos simulados.

Fuentes y UI en `platform/repo/lib/panel/`, `app/(dashboard)/panel/`, `scripts/panel-preview*.tsx`. Previews locales generadas en `platform/repo/panel/preview-v2.html` y `preview-grabacion.html`; contienen información interna y no se publicaron.

## Tope de revisión

`/workspace/orquestacion/bin/onia-tarea` acepta `ONIA_TAREA_REVISION_MAX_USD` (default 1) sin cambiar `.env`. Reserva atómica y acumulada por tarea entre rondas; prueba del corte al superar el límite. Harness **58/58**, auditoría **52/52**, guard **83/83**.

`onia-costo` bloquea Claude **antes de inferencia** porque la auditoría local previa documentó US$3,4995 con límite nativo US$0,50. No se presenta el chequeo posterior como garantía. Falta implementar/seleccionar un adaptador que garantice presupuesto antes de gastar para recuperar la revisión real. Guía: `/workspace/orquestacion/tope-revision.md`.

## Workshop

`/workspace/entregables-workshop/web/index.html` conserva el candidato local con precio por confirmar, devolución pendiente visible y foto configurable. CONFIG centralizado y banner de borrador; corregidos contador por clase y CTA tras finalizar la edición. Pruebas y guía junto al HTML. No se publicó.

## Capturas y decisiones pendientes

No fue posible abrir `http://localhost:3100/panel-local` desde este entorno ni arrancar servidor/Chromium: `EPERM` / `Operation not permitted`. `capturas/panel-local.png` es anterior (16:59), no acredita estos cambios. Los scripts de captura están preparados; no se fabricaron PNG ni se presentó una captura vieja como actual.

Falta decidir **precio, política de devolución y foto** del workshop. Para cerrar el lote hacen falta además: export agregado real de Chatwoot, montos financieros ausentes, adaptador Claude con garantía previa y entorno que permita completar verificación visual/build/suite.

## Alcance y método

El árbol solicitado `/workspace/platform/repo` estaba en `feat/agente-robustez` (`c0cab99`) con cambios previos sin commit. `feat/panel-interno` está en `/workspace/platform/wt-panel` (`03a326f`); se verifican por separado, sin cambiar ramas ni sobrescribir trabajo ajeno. En `wt-panel` únicamente se corrigió después el mock del test de página; su cambio previo en `panel/data/metricas-orquestacion.json` se conservó. Los cambios previos en `.env.example` ya existían: este lote no modificó `.env` ni archivos de configuración de secretos.

Skills: entorno administrado, `verification`, y `minimalist-ui` local para conservar el diseño existente. Herramientas locales npm/Vitest/TypeScript/ESLint, Python y Playwright; sin dependencias nuevas ni investigación externa necesaria. Subtareas separadas por el AGENTS del repo; revisión de integración detectó y corrigió validaciones de fechas/estados y tipado del test financiero. No se usaron herramientas de publicación ni servicios productivos.

**Sin push, commit, deploy, publicación, gasto, cambios de producción ni exposición de secretos.**

---

## Contexto anterior conservado

# Jefe de Producto
Caso de uso: ONIA Platform, código, GitHub (PRs locales, sin push), BCP (integración de cobro), servidor/VPS, Chatwoot, n8n, web del workshop, harness onia-llm/onia-tarea. Código lo escribe Codex, lo revisa Claude. Manuales: `/workspace/manuales/producto/`. Perfil: `/workspace/orquestacion/bots/producto.md`.

## Pendientes
- [ ] T-07: build y suite completa del panel (feat/panel-interno) antes de pedir D-014.
- [ ] T-03/T-08: panel con datos reales (Finanzas, Chatwoot, ganancia USD); unificar nombres de agente.
- [ ] Adaptador con tope duro de costo para la revisión de Claude en onia-tarea (la prueba real se pasó: ~US$3,50).
- [ ] 11 mejoras de seguridad del harness: `orquestacion/comparativa-harness-20261101.md` (aplicar con sí de Sergio).
- [ ] n8n en instancia de prueba (D-017, T-15); resúmenes 8:00/20:00 y respaldo semanal VPS a n8n/cron.
- [ ] Web del workshop: dejar lista para publicar (CONFIG precio/devolución/foto); publicar solo con sí.
- [ ] Plataforma (`platform/estado-v1.md`): 10 PRs en orden, cobro real QR BCP (1.1), migración WhatsApp Cloud API (D-018); todo espera sí.
- [ ] Crear `onia-cola/talleres/OBJETIVO.md` si se sigue usando la cola de talleres.

## Archivos
`/workspace/platform/` (estado-v1.md, repo/, patches) · `/workspace/orquestacion/` (bin/, politica-codex.md, stack.md, tareas/, n8n/) · `/workspace/entregables-workshop/web/index.html` · `/workspace/harness/` · panel http://localhost:3100/panel-local

## 2026-11-01 17:10 · Web del workshop (pedido de Sergio)
- Encolada en `producto`: web estilo event.monetise.com/lp-1-c para IG @sergiourcullo → /workspace/entregables-workshop/web-v2/. Sin publicar.
- Para Marketing: revisar textos y marca personal de la web-v2 cuando esté (capturas en /workspace/estado/capturas/).
- ONIA Platform pasó al bot ONIA Platform; el lote anterior (panel, tope de costo, web) sigue en cola.
- 17:13 Cambio: la web es el sitio personal sergiourcullo.vercel.app estilo eriktaveras.com (bóveda, skills gratis) + página del workshop. Para Boss No-Code: definir qué recursos/skills gratis van en la bóveda y el CTA de venta (diagnóstico 1:1, workshop, ONIA Platform). Capturas de referencia en /workspace/estado/capturas/ref-*.png.
- 17:15 Cola producto corriendo de verdad (antes fallaba por --agente): lote en curso, web pendiente.
- 17:26 Encolado despertador por webhook en onia-llm (pedido vía Analista, falta confirmar con Sergio las rutinas webhook). Doc saldrá en /workspace/estado/despertador-webhook.md.
