# Diagnóstico independiente final de suites — 2026-11-01

Inspección de logs completos y código de los tests; sin cambios de producto, pruebas o permisos y sin nuevas ejecuciones.

| Candidato / log | Archivos | Tests | Errores no manejados | Duración |
| --- | --- | --- | --- | --- |
| repo / `repo-suite.log` | 16 fallan, 949 pasan, 2 omitidos | 169 fallan, 15655 pasan, 16 omitidos | 18 | 540.89 s |
| rama panel / `rama-panel-suite.log` | 17 fallan, 933 pasan, 2 omitidos | 169 fallan, 15302 pasan, 16 omitidos | 18 | 540.96 s |

## Clasificación de los 169 tests fallidos en ambos candidatos

- **143 por EPERM explícito de subprocesos**: backup-onia-postgres (52), prepare-standalone-runtime (24), verify-backup-gzip (31), rango-gitleaks (10), snapshot QA (13), quien-aprueba-superficies (5), panel-no-finge-un-envio (3), sin-envoltorios-de-cron-del-vps (2), iconos CLI (2), iconos manifiesto (1). Los bloques con varios encabezados comparten el mismo stack EPERM. No son evidencia de fallos de permisos del producto: el sistema impide ejecutar bash, sh, git o Node auxiliar.
- **17 por timeout asociado a `listen EPERM`**: respaldo-afuera (13) y BCP QR (4). El log registra errores no manejados al abrir servidores HTTP falsos en `127.0.0.1`, y luego sus hooks expiran. Además, el `beforeAll` de restauración de respaldo agota 60000 ms y falla como suite.
- **9 por stdout/stderr vacío, causa aún no demostrada**: sync-onia-core (3: faltan `Generated catalog`, `Mirror`, `drifted` en stderr), iconos CLI (2: faltan mensaje y `helpers importados`), verify-backup-gzip (4: JSON vacío/no parseable). Estos casos usan subprocesos pero sus stacks NO prueban EPERM: algunos verifican primero exit esperado 0/1. No clasificarlos automáticamente como permisos ni como regresión funcional demostrada. Falta diagnóstico de captura/salida del proceso en entorno apto.

## BCP QR y errores no manejados

Los cuatro casos de BCP fallan en `lib/gateway/bcp-qr.test.ts:101`, `beforeEach`: `server.listen(0, '127.0.0.1', ...)` nunca completa porque falla con EPERM. El hook solo resuelve en éxito y no rechaza al recibir el evento `error`, de modo que el bloqueo se presenta como timeout de 10000 ms. La lógica del request/gateway no llega a probarse; no hubo llamada bancaria real ni evidencia de defecto de BCP.

Los **18 errores no manejados** son `listen EPERM`: 14 de respaldo-afuera (incluido beforeAll de restauración) y 4 de BCP. No son 18 defectos de negocio independientes. Se deben conservar como fallos; aumentar timeout u omitir tests no los resuelve.

## Suites que no llegan a ejecutar tests

Tres compartidas, con `spawnSync ... EPERM` durante importación:

- `lib/platform/cliente-no-arrastra-prisma-al-navegador.test.ts:35`: `execSync('git ls-files lib')`.
- `lib/whatsapp/numero-para-enviar.test.ts:108`: `execFileSync('git', ...)`.
- `scripts/perf/cache-estaticos.test.ts:44`: `execSync('git ls-files ...')`.

**Solo en la rama panel**, una cuarta suite no carga:

- `app/(dashboard)/panel/page.test.ts`: `Cannot find package 'server-only' imported from /workspace/platform/wt-panel/lib/panel/vivo.ts`, línea 1. Es resolución de dependencia/módulo exclusivo del servidor en el entorno de tests, **no EPERM**. Debe corregirse o explicarse y volver a verificarse; no queda amparado por los problemas de permisos.

El contador `Failed Suites` incluye también el beforeAll de restauración: 4 en repo, 5 en rama. Eso no contradice los 3/4 archivos sin tests por fallo de carga.

## Interpretación y siguiente paso

Los mensajes stderr `db down`, `socket hang up`, `ProvisioningError` y notificaciones sin `findUnique` en archivos verdes pertenecen a escenarios/mocks: no se suman a los fallos reportados.

No se puede declarar suite verde. Se necesita resolver `server-only` en rama, diagnosticar las nueve salidas vacías y verificar los casos bloqueados en un entorno autorizado que permita sus procesos/servidores locales. No se modificó código para ocultar restricciones ni se ampliaron permisos.

## Corrección focal posterior autorizada

Se actualizó únicamente `/workspace/platform/wt-panel/app/(dashboard)/panel/page.test.ts`: mock del proveedor `@/lib/panel/vivo` con spies para `leerActividad`, `leerMetricas` y `leerGuiones`, siguiendo el patrón del test existente de `app/panel-local/page.test.ts`. Se amplió la comprobación de que ninguna fuente se lee sin sesión o sin rol SUPERADMIN, y de que las tres fuentes vivas se invocan una vez y después de consultar el perfil cuando hay autorización. No se eliminó `server-only`, no se instaló dependencia y no se modificó código de producción.

- `vitest run 'app/(dashboard)/panel/page.test.ts'`: **6/6 pasan**, exit 0; `/workspace/estado/validacion-producto/panel-page-test-corregido.log`.
- `eslint 'app/(dashboard)/panel/page.test.ts'`: **exit 0**; `/workspace/estado/validacion-producto/panel-page-eslint.log`.
- `git diff --check` del archivo: exit 0.

Esto resuelve el fallo de carga específico del test del panel. Los totales de la tabla siguen describiendo la corrida completa anterior: no se reejecutó la suite completa ni se declaran verdes los restantes fallos.
