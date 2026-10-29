# ONIA Platform: seguir o no, y cómo

28-oct-2026, decidido el 29-oct-2026. **Decisión de Sergio Urcullo: opción A, seguir desarrollando** (issue #9). El análisis recomendaba B; la decisión y su razón están en el punto 7.

Sale de una revisión de solo lectura del repo `onia-platform`: `master` en GitHub, el checkout local y sus worktrees. No se tocó producción (VPS, base de datos, Vercel) ni se leyó el repo viejo: lo que se dice de él sale de cómo lo nombra el código de la plataforma.

**En corto:** se sigue desarrollando la plataforma, en paralelo y con agentes, siempre que el repo y el harness estén en orden. Lo demás se mantiene (punto 7). Antes del primer cliente hay dos cosas que hacer (punto 8, pasos 4 y 5):
- sacar del repo viejo el despliegue y los crons;
- tener un respaldo probado, QA con su propia base, el cobro completo, la factura de ONIA y los términos.

## 1. Qué es y en qué estado está

**Qué hace.** Sistema de gestión para negocios formales de Bolivia, armado por rubro: dental, estética, comercio, importadora y servicios. El código también tiene veterinaria y ganadero. Incluye:
- agenda, clientes o pacientes, caja, cobros y roles;
- facturación SIAT;
- agentes que proponen mensajes y el dueño aprueba, como el cobrador, el confirmador, el reponedor y el seguidor;
- chatbot de WhatsApp como add-on;
- "Mi web", una web gestionada.

**Precio.** Cuatro planes de Bs 320, 550, 890 y 1.290 por mes, más uno empresarial de Bs 2.900. El chatbot se compra aparte por Bs 390 por mes, salvo en los dos planes más altos, que lo incluyen.

**Tamaño.**
- Desde el 6-abr-2026 lleva 2.098 commits en `master`: 931 en septiembre y 508 en octubre.
- Tiene unos 1.000 archivos de código propio, unos 950 de pruebas, 84 tablas, 132 pantallas y 175 rutas de API.

**Dónde corre.** En el VPS de producción, como imagen Docker con Node 22 desde el 24-sep. Lo comparte con Supabase propio, correo, Chatwoot, n8n, el bot y otras webs: 24 contenedores el 23-sep. La web de venta, onia.com.bo, es otro despliegue (punto 4).

**Mergear es publicar.** Un cron del VPS publica `master` cada 3 horas, y ningún paso mira las migraciones. Un PR con migración se mergea recién cuando la migración ya está aplicada en producción; si no, producción se cae.

**Ventas.** El tablero de producción del 27-sep mostraba 5 organizaciones registradas, 0 pagos aprobados y Bs 0 cobrados ese mes. En el repo no hay rastro de un pago posterior. El panel interno, contado el 2-oct, muestra lo que había detrás:
- la organización interna de ONIA y dos pruebas propias;
- cuatro usuarios activos, todos cuentas de Sergio Urcullo;
- una importadora que llegó por Facebook y nunca confirmó el correo;
- 3 pedidos de acceso de agosto sin contestar.

**Último trabajo.**
- El último cambio en `master` es del 16-oct (PR #183).
- Hasta el 11-oct entraron cambios de funcionamiento: pedir la factura para aprobar un pago (#114), recuperar citas canceladas (#133) y correcciones de caja (#158), entre otros.
- Del 15 al 16-oct, sobre todo pulido: textos de usted, accesibilidad y fechas de La Paz (#171 a #183).
- No consta qué versión corre hoy en el VPS. La última lectura, del 28-sep, mostraba una versión distinta de la que estaba lista en la PC.

**La 1.0 no está cerrada.** El propio repo pide un cliente dental que se registre, cargue datos, trabaje un día, pague y renueve sin ayuda técnica. Siguen abiertos:
- el cobro real y la renovación;
- SIAT: el portal del SIN marca 80%, con la etapa VI en 150 de 560 casos y la IX en 60 de 160;
- el canal de WhatsApp con Meta real;
- el respaldo y la operación sin Sergio Urcullo.

## 2. Pros y contras

**A favor:**
- El núcleo existe. En el corte del 27-sep, los 5 rubros pasaron su recorrido completo en un entorno de prueba, igual que el alta y la agenda. El cobro por QR y la renovación no se probaron de punta a punta.
- Está pensado para Bolivia: bolivianos, hora de La Paz, vocabulario de cada rubro y SIAT. En la revisión de competidores del 28-sep no se encontró que los grandes cubran SIAT.
- Tiene mucha prueba automática: unas 7.000 pruebas pasaban el 28-sep.
- Ya está en producción y el costo de infraestructura es bajo, porque comparte el VPS.
- Es un caso propio para contar en la marca personal y enseñar en los talleres.

**En contra:**
- 0 pagos después de 6,5 meses y 2.098 commits.
- El alcance es grande para una persona: 7 rubros, 84 tablas, 175 rutas de API y SIAT.
- La operación es frágil:
  - el respaldo diario de la base era un gzip vacío al 23-sep (DG-040);
  - el entorno de QA del VPS usa la misma base que producción;
  - mergear publica solo, y una migración mal ordenada tira producción;
  - las pruebas automáticas de GitHub corren en un runner (la máquina que las ejecuta) dentro del mismo VPS de producción;
  - todo depende de un solo servidor.
- Piezas que corren en producción dependen del repo viejo (punto 4).
- Hay desorden acumulado:
  - 241 ramas locales y 42 worktrees en C:, E:, Codex y Orca;
  - 10 PRs abiertos y 65 issues automáticos de Sentry sin tratar;
  - 3.501 archivos de librerías de terceros subidos a `master`, dentro de `n8n-mcp-server/node_modules/`.
- La competencia ya ofrece IA y WhatsApp: Dentalink en dental, y AgendaPro, que tiene página para Bolivia.
- Con el primer cliente dental entran datos clínicos, con su responsabilidad de seguridad y legal.

## 3. Cuánto cuesta mantenerla

| Concepto | Lo que se sabe | Falta |
|---|---|---|
| VPS de producción | Compartido con n8n, el bot y otras webs. | El monto: no está en el repo. |
| Dominio, correo (Resend), Sentry, Upstash | Planes chicos. | Los montos. |
| OpenAI por API (`gpt-4.1-mini`, vía LiteLLM en el VPS) | Lo usan los agentes; con 0 clientes, casi nada. | |
| WhatsApp (Meta) | Lo paga el cliente con su tarjeta. | |
| Claude y Codex | Compartidos con todo ONIA: US$120 por mes en el plan de arranque. | |

El documento de precios de junio ponía el punto de equilibrio en 7 u 8 clientes del plan básico. Pero contaba con Vercel y Supabase en la nube, que el producto ya no usa (Vercel quizá siga sirviendo páginas de marketing): hay que recalcularlo con la factura real del VPS.

**El costo grande es el tiempo.** En septiembre se fueron 931 commits. Mantener 84 tablas, 7 rubros, SIAT y un VPS con 24 contenedores pide horas aunque no haya clientes. Y los riesgos de la operación frágil cuestan caro si pasan con un cliente adentro.

## 4. Dependencias del repo viejo

Es un dato para la limpieza del método viejo.

**El túnel del puerto 3108: no lo usa.** Ni el código ni la configuración lo nombran, y hoy no escucha nada en ese puerto ni en los que usaba el desarrollo local.

**Del repo `onia-hermes` sí depende, en producción:**
- **El despliegue de la plataforma.** Los scripts que arman y publican la imagen (`build-and-stage.sh` y los que lo acompañan) viven en `hermes-content/deploy/onia-platform/`, dentro del repo viejo. El cron publica con la copia ya instalada en el VPS; el repo viejo hace falta para cambiar esos scripts o arreglarlos si fallan.
- **Los crons del VPS.** Los recordatorios de citas y los de renovación corren con dos scripts que se copian desde `hermes-content/infra/vps-ops/crons/` a `/root/bin` (lo dice `__tests__/sin-envoltorios-de-cron-del-vps.test.ts`). El cron de los agentes (`/root/bin/run-onia-agents-cron.sh`) seguramente sale del mismo lugar. La renovación es lo que tiene que andar con el primer cliente.
- **La web de venta (onia.com.bo),** con los precios. Se construye en `web-factory/apps/onia-platform`, dentro del repo viejo. Es la puerta de entrada de la prueba comercial.
- **El chatbot de WhatsApp.** Su motor vive en el repo viejo (`hermes-content/deploy/vps-ops/bot/`) y corre en el VPS como `onia-center`, en el puerto 3020. La plataforma lee su estado y sus conversaciones (`onia_center.bot_conversations`).
- **SIAT.** La integración está en el repo viejo (`hermes-content/integrations/siat`).
- **El contrato de ONIA Core.** Se sincroniza desde `../onia-hermes/onia-core/contract.json` (`scripts/sync-onia-core.mjs`). La CI tolera que falte.
- **Las pruebas de GitHub.** Su runner está dentro del VPS de producción, y sus límites están definidos en el repo viejo.
- **El Hermes viejo del VPS.** Lee `/api/onia-core/bridge/pending` para avisarle al dueño por Telegram.
- **El configurador de webs** (`/servicios/webs`). También vive en `web-factory`, dentro del repo viejo. El seguimiento de "Mi web" sí está en la plataforma.
- **El desarrollo local.** Según `docs/DEV_LOCAL_SETUP.md`, entraba a la base de producción con un túnel SSH y la llave `onia_hermes_vps_ed25519`.
- **Worktrees de la plataforma en carpetas del método viejo.** Hay 27 en `E:\onia-wt` y 1 en `E:\onia-orquesta`. Antes de archivar esas carpetas hay que revisar si tienen cambios sin guardar. Después, `git worktree prune` borra los registros que quedaron colgados.

**Consecuencia.** Lo que ya corre en el VPS sigue andando mientras nadie lo toque. Pero sin mudar esas piezas, no hay un repo permitido desde donde arreglarlas ni volver a desplegarlas, porque el viejo ya no se usa. Antes de archivar `onia-hermes` o de apagar "Deploy ONIA Center", hay que confirmar desde afuera qué despliega ese workflow. Revocar la llave SSH vieja corta el acceso de quien la use.

## 5. Cómo encaja con marca personal y talleres

**A favor:** es un caso real y propio de agentes trabajando en un negocio. Sirve para contar en el contenido y para enseñar en los talleres. El público de la marca incluye dueños de negocios, que pueden ser el canal de venta.

**En contra:** es otro negocio. Un sistema con datos clínicos y facturación pide soporte, respaldo, cumplimiento con el SIN y estar arriba todos los días. Compite por las mismas horas que el contenido y los talleres.

## 6. Alternativas

| Opción | A favor | En contra |
|---|---|---|
| **A. Seguir como hasta ahora:** más funciones y más pulido | El producto mejora. | 6,5 meses y 0 pagos. Cada función suma mantenimiento, y el pulido no prueba que alguien pague. |
| **B. Seguir congelado, con una prueba comercial con fecha** | Usa lo ya hecho. El criterio ya está escrito en el propio repo. El costo queda acotado. | Pide tiempo de venta de Sergio Urcullo, no de agentes. Antes hay que sacar el despliegue del repo viejo y dejar listos el respaldo, el cobro y lo legal. |
| **C. Pausar ahora y archivar** | Libera todo el tiempo para marca personal y talleres, y baja el riesgo operativo. | El trabajo queda sin probar en el mercado. Apagar bien también lleva trabajo: exportar datos, avisar a las cuentas y bajar contenedores. |
| **D. Usar herramientas existentes** (Dentalink, AgendaPro, Alegra u Odoo, con un bot de WhatsApp aparte) **y vender la implementación** | No hay nada que mantener y son productos probados. Encaja con los talleres: "te lo implemento". | Margen chico y sin diferencia propia. SIAT no está probado en esas herramientas, y se depende de terceros. |

## 7. Recomendación del análisis y decisión

### Lo que recomendaba el análisis: B

Seguir, pero congelado y con una prueba comercial con fecha:
- **Un solo rubro:** dental, que es el más trabajado y el que pide el propio criterio de la 1.0.
- **Sin funciones nuevas.** Solo se arregla lo que bloquea a un cliente real o lo que promete algo que no hace.
- **Sin chatbot en la oferta de la prueba,** así su mudanza puede esperar.
- **Venta asistida,** con cobro por QR. No hace falta esperar a SIAT si la clínica no exige factura desde el sistema.
- **Tope de tiempo por semana** para la plataforma, de agentes y de venta. Lo fija Sergio Urcullo.
- **Fecha de corte,** que también decide él. Propuesta: primer pago antes del 31-dic-2026 y su renovación en enero. Si no se cumple, se pasa a C.

**Por qué:** lo que falta no es código, es la prueba de que alguien paga. El producto ya tiene el núcleo, y seguir sumando funciones agranda el costo sin responder esa pregunta. Pausar ahora tira 6,5 meses sin haberlo ofrecido de verdad. D se puede retomar después si B falla.

### Lo que decidió Sergio Urcullo: A

El 29-oct-2026 eligió A, con estas palabras: "opcion A, lo demas se mantiene, Recordad que toda la empresa la queremos automatizar, entonces desarrollar código no es un problema para nosotros. Puede ser una tarea que se haga en paralelo mientras, si todo está bien orquestado, con los agentes funcionando, todo el repositorio limpio, sin errores, todo el harness funcionando con los agentes, el contexto, los documentos y demás, todo en orden, no hay problema. Literalmente la startup se construiría sola."

Qué cambia con A:
- **El desarrollo sigue, en paralelo y con agentes.** No se congela ni hay tope de tiempo por semana.
- **La condición es el orden.** Repo limpio, sin errores, con el harness, el contexto y los documentos al día (paso 10).
- **No hay fecha de pausa.** La prueba comercial sigue en paralelo, y se propone un hito de revisión el 31-ene-2027 (paso 8).
- **El resto se mantiene:**
  - mudar el despliegue y los crons del repo viejo;
  - respaldo, QA, cobro y lo legal antes del primer cliente;
  - mergear a `master` es publicar;
  - guardar los 68 cambios y quitar `onia-platform-crece4`.

## 8. Próximos pasos

Cada paso es un issue con su propia sesión. Los marcados con **(sí)** tocan producción, lo legal o el cobro, y piden la aprobación de Sergio Urcullo. Los marcados con **(aprobado)** ya la tienen, del 29-oct.

1. **(aprobado) Guardar los 68 cambios y limpiar el checkout** (punto 9). Hecho cuando están en una rama de archivo en GitHub y el checkout queda en `master` sin cambios.
2. **(aprobado) Quitar el worktree `onia-platform-crece4`** (punto 9). Hecho cuando la carpeta y sus ramas ya no están.
3. **(sí) Decidir los 10 PRs abiertos.** Con A se mergea lo que esté listo y sirva. Lo de seguridad, legal o del cobro y la renovación va primero (como #154, #124 y #113). Lo que ya no sirve se cierra, con su rama guardada en GitHub. Como mergear es publicar, cada merge es un cambio en producción. Un PR con migración, como #124, se mergea después del respaldo del paso 5 y con la migración ya aplicada. Hecho cuando no queda ningún PR sin decidir.
4. **(sí) Mudar a `onia-platform` el despliegue y los crons** (citas, renovación y agentes). Va antes del primer cliente, porque por ahí salen los arreglos y la clínica usa los avisos todos los días. Hecho cuando el VPS publica y corre los crons con scripts que viven en `onia-platform`. La lista de crons sale del crontab del VPS, porque puede haber más que estos tres. La prueba `__tests__/sin-envoltorios-de-cron-del-vps.test.ts` hoy prohíbe esos scripts en el repo: se cambia a propósito en ese PR. El resto de lo que vive en el repo viejo se muda después: el bot, SIAT, la web de venta, el configurador de webs, el contrato de ONIA Core y la configuración del runner. La web de venta va antes si hay que cambiarla para la prueba. Todo eso es requisito para archivar `onia-hermes`.
5. **(sí) Dejar lista la plataforma para el primer cliente.** Hecho cuando están estos seis:
   - un respaldo diario probado con una restauración;
   - QA con su propia base, separada de producción;
   - Node 22 confirmado en el VPS, en QA y en el bot, y `npm audit` revisado (DG-029);
   - el cobro por QR probado completo. El 22-sep ya pasaron, en local, el comprobante, la aprobación y el plan activo (DG-064). Faltan el QR y el banco reales, el checkout en pantalla y la renovación;
   - definido cómo factura ONIA a la clínica: desde el 10-oct (PR #114, ya en `master`), aprobar un pago real exige el número de factura;
   - términos y privacidad aceptados en el alta (PR #124, abierto), porque entran datos clínicos.
6. **Medir el costo real del mes** (VPS, OpenAI, Resend, dominio y Vercel, si sigue sirviendo algo) y anotarlo acá. Hecho cuando la tabla del punto 3 no tiene huecos.
7. **Prueba comercial, en paralelo al desarrollo.** Sergio Urcullo elige entre 3 y 5 clínicas dentales para ofrecerles el sistema, y se anota cada fricción real. Conviene empezar por los pedidos de acceso que quedaron sin contestar, si siguen ahí. Hecho cuando están contactadas antes del 30-nov, con su respuesta anotada.
8. **Hito de revisión, el 31-ene-2027.** Mirar los pagos, el costo del mes y el estado del harness, y anotar acá si algo cambia. No es una fecha de pausa. Hecho cuando la revisión está escrita en esta carpeta.
9. **Ordenar ramas y worktrees:** 241 ramas locales, 42 worktrees y un stash viejo, del 30-ago. Va junto con el archivo de `E:\onia-wt` y `E:\onia-orquesta`. Hecho cuando solo quedan las ramas y worktrees en uso.
10. **(sí) Repo y harness en orden,** la condición de A. Cada merge es un cambio en producción, y tocar las reglas de la plataforma pide su aprobación. Tres partes:
    - las reglas y skills de `onia-platform`, reescritas con el método nuevo y sin rutas al repo viejo;
    - la CI en verde;
    - los 65 issues de Sentry, tratados.

    Hecho cuando una sesión nueva puede tomar un issue de la plataforma y entregarlo por PR sin ayuda.

## 9. Los 68 cambios sin guardar y la copia duplicada

### Los 68 cambios de `C:\dev\proyectos\onia-platform`

**Dónde están.** En la rama `claude/f2-f3-panel`. Su último commit es del 12-sep y ya está dentro de `master`, que avanzó 1.012 commits desde ahí. El `HANDOFF_CLAUDE.md` del propio checkout ya decía que estaban "en su mayoría superados" y que no había que limpiarlos sin comparar.

**Comparados contra `master`:**
- De los 49 archivos modificados, 24 ya están enteros en `master` y 5 casi enteros. Los otros 20 tienen partes que no están: sobre todo el editor del chatbot, los estilos, los planes y MFA. Todos se tocaron el 14-sep, y `master` cambió esos mismos archivos después, por su lado.
- De los 19 archivos nuevos, 5 son idénticos a `master`. Otros 13 existen en `master` con otro contenido: 12 son versiones viejas, y el `HANDOFF_CLAUDE.md` es una nota propia de este checkout. El último es un `error.log`.

**Qué hacer:**
- Guardarlos enteros en una rama de archivo en GitHub, por ejemplo `archivo/f2-f3-panel-20260912`, sin el `error.log`.
- Antes de subirlos, pasarlos por `gitleaks`, un buscador de secretos. No está instalado en la PC; Sergio Urcullo ya dio el OK para instalar la versión oficial. Hace falta porque subir una rama de archivo no dispara el control de secretos de GitHub: ese control corre solo en `master` y en los PRs.
- Después, dejar el checkout en `master` limpio.
- No se integran. Si algún día hace falta un trozo, se saca de esa rama.

### `C:\dev\proyectos\onia-platform-crece4`

**No es una copia: es un worktree** del mismo repo, en la rama `fix/crece-4-usuarios`.
- Su único commit propio ("Crece pasa de 3 a 4 usuarios", 20-oct) repetía un cambio que ya estaba en `master` desde el 1-oct (commit `8f2c2b56`). Por eso el PR #187 se cerró sin mergear.
- Sus 2 cambios sin guardar son dos snapshots de pruebas con el mismo contenido: solo cambian los saltos de línea.
- Ocupa 1,3 GB.

**Qué hacer:**
- Quitar el worktree con `git worktree remove --force`. Hace falta `--force` por esos 2 archivos.
- Borrar la rama `fix/crece-4-usuarios`, tanto la local como la de GitHub.
- No se pierde nada.

## 10. Lo que decidió Sergio Urcullo, el 29-oct-2026

1. La opción A: seguir desarrollando, en paralelo y con agentes.
2. Sin fecha de pausa ni tope de tiempo. El hito de revisión del paso 8 es una propuesta, no una pausa.
3. Sí a guardar los 68 cambios en una rama de archivo, revisados con `gitleaks` oficial, y a limpiar el checkout.
4. Sí a quitar el worktree `onia-platform-crece4` y borrar su rama.

Sigue faltando un dato: cuánto cuesta por mes el VPS de producción.
