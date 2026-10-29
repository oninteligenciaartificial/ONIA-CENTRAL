# ONIA Platform: seguir o no, y cómo

28-oct-2026. **Propuesta, pendiente de aprobación de Sergio Urcullo** (issue #9).

Sale de una revisión de solo lectura del repo `onia-platform`: `master` en GitHub, el checkout local y sus worktrees. No se tocó producción (VPS, base de datos, Vercel) ni se leyó el repo viejo: lo que se dice de él sale de cómo lo nombra el código de la plataforma.

**En corto:** seguir, pero congelado. Nada de funciones nuevas hasta que una clínica pague y renueve, con fecha de corte. Si no pasa, se pausa. Antes del primer cliente hay que arreglar el respaldo y sacar la plataforma del repo viejo.

## 1. Qué es y en qué estado está

**Qué hace.** Sistema de gestión para negocios formales de Bolivia, armado por rubro: dental, estética, comercio, importadora y servicios. El código también tiene veterinaria y ganadero. Incluye:
- agenda, clientes o pacientes, caja, cobros y roles;
- facturación SIAT;
- agentes que proponen mensajes y el dueño aprueba, como el cobrador, el confirmador, el reponedor y el seguidor;
- chatbot de WhatsApp como add-on;
- "Mi web", una web gestionada.

**Precio.** Cuatro planes de Bs 320, 550, 890 y 1.290 por mes, más uno empresarial de Bs 2.900. El chatbot se compra aparte por Bs 390 por mes, salvo en los dos planes más altos, que lo incluyen.

**Tamaño.**
- Desde el 6-abr-2026 lleva 2.098 commits en `master`: 931 en septiembre y 492 en octubre.
- Tiene 1.973 archivos de código, 1.123 de pruebas, 84 tablas, 132 pantallas y 175 rutas de API.

**Dónde corre.** En el VPS de producción. Lo comparte con Supabase propio, correo, Chatwoot, n8n, el bot y otras webs: 24 contenedores el 23-sep.

**Ventas.** El tablero de producción del 27-sep mostraba 5 organizaciones registradas, 0 pagos aprobados y Bs 0 cobrados. No consta cuántas de esas cuentas son de la casa. En el repo no hay rastro de un pago posterior.

**Último trabajo.**
- El último cambio en `master` es del 16-oct (PR #183).
- Desde el 1-oct, casi todo fue pulido: textos de usted, accesibilidad y fechas de La Paz.
- No consta qué versión corre hoy en el VPS. La última lectura, del 28-sep, mostraba un build distinto del candidato local.

**La 1.0 no está cerrada.** El propio repo pide un cliente dental que se registre, cargue datos, trabaje un día, pague y renueve sin ayuda técnica. Siguen abiertos:
- el cobro real y la renovación;
- SIAT: el portal del SIN marca 80%, con la etapa VI en 150 de 560 casos y la IX en 60 de 160;
- el canal de WhatsApp con Meta real;
- el respaldo y la operación sin Sergio Urcullo.

## 2. Pros y contras

**A favor:**
- El núcleo existe. En el corte del 27-sep, los 5 rubros pasaron su recorrido de punta a punta en un entorno de prueba, igual que el cobro por QR, la agenda y el alta.
- Está pensado para Bolivia: bolivianos, hora de La Paz, vocabulario de cada rubro y SIAT. Los competidores grandes no prueban SIAT.
- Tiene mucha prueba automática: unas 7.000 pruebas pasaban el 28-sep.
- Ya está en producción y el costo de infraestructura es bajo, porque comparte el VPS.
- Es un caso propio para contar en la marca personal y enseñar en los talleres.

**En contra:**
- 0 pagos después de 6,5 meses y 2.098 commits.
- El alcance es grande para una persona: 7 rubros, 84 tablas, 175 rutas de API y SIAT.
- La operación es frágil:
  - el respaldo diario de la base era un gzip vacío al 23-sep (DG-040);
  - el entorno de QA del VPS usa la misma base que producción;
  - el VPS corría Node 20 al 23-sep, que ya no tiene soporte;
  - las pruebas de GitHub corren en un runner dentro del mismo VPS de producción;
  - todo depende de un solo servidor.
- Piezas que corren en producción dependen del repo viejo (punto 4).
- Hay desorden acumulado: 241 ramas locales, 42 worktrees en C:, E:, Codex y Orca, 10 PRs abiertos y 65 issues automáticos de Sentry sin tratar.
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

El documento de precios de junio ponía el punto de equilibrio en 7 u 8 clientes del plan básico. Pero contaba con Vercel y Supabase en la nube, que ya no se usan: hay que recalcularlo con la factura real del VPS.

**El costo grande es el tiempo.** En septiembre se fueron 931 commits. Mantener 84 tablas, 7 rubros, SIAT y un VPS con 24 contenedores pide horas aunque no haya clientes. Y los riesgos de la operación frágil cuestan caro si pasan con un cliente adentro.

## 4. Dependencias del repo viejo

Es un dato para la limpieza del método viejo.

**El túnel del puerto 3108: no lo usa.** Ni el código ni la configuración lo nombran, y hoy no escucha nada en ese puerto ni en los que usaba el desarrollo local.

**Del repo `onia-hermes` sí depende, en producción:**
- **El chatbot de WhatsApp.** Su motor vive en el repo viejo (`hermes-content/deploy/vps-ops/bot/`) y corre en el VPS como `onia-center`, en el puerto 3020. La plataforma lee su estado y sus conversaciones (`onia_center.bot_conversations`).
- **Los recordatorios de citas.** Los dispara un cron del VPS cuyo script se copia desde el repo viejo (`app/api/cron/appointment-reminders/route.ts`).
- **SIAT.** La integración está en el repo viejo (`hermes-content/integrations/siat`).
- **El contrato de ONIA Core.** Se sincroniza desde `../onia-hermes/onia-core/contract.json` (`scripts/sync-onia-core.mjs`). La CI tolera que falte.
- **Las pruebas de GitHub.** Corren en un runner propio dentro del VPS de producción, y sus límites están definidos en el repo viejo.
- **El Hermes viejo del VPS.** Lee `/api/onia-core/bridge/pending` para avisarle al dueño por Telegram.
- **"Mi web".** Se construye en `web-factory`, dentro del repo viejo.
- **El desarrollo local.** Según `docs/DEV_LOCAL_SETUP.md`, entraba a la base de producción con un túnel SSH y la llave `onia_hermes_vps_ed25519`.
- **Worktrees de la plataforma en carpetas del método viejo.** Hay 27 en `E:\onia-wt` y 1 en `E:\onia-orquesta`. Antes de archivar esas carpetas hay que revisar si tienen cambios sin guardar. Después, `git worktree prune` borra los registros que quedaron colgados.

**Consecuencia.** Lo que ya corre en el VPS sigue andando mientras nadie lo toque. Pero sin mudar esas piezas, no hay de dónde arreglarlas ni volver a desplegarlas. Antes de archivar `onia-hermes` o de apagar "Deploy ONIA Center", hay que confirmar desde afuera qué despliega ese workflow. Revocar la llave SSH vieja corta el acceso de quien la use.

## 5. Cómo encaja con marca personal y talleres

**A favor:** es un caso real y propio de agentes trabajando en un negocio. Sirve para contar en el contenido y para enseñar en los talleres. El público de la marca incluye dueños de negocios, que pueden ser el canal de venta.

**En contra:** es otro negocio. Un sistema con datos clínicos y facturación pide soporte, respaldo, cumplimiento con el SIN y estar arriba todos los días. Compite por las mismas horas que el contenido y los talleres.

## 6. Alternativas

| Opción | A favor | En contra |
|---|---|---|
| **A. Seguir como hasta ahora:** más funciones y más pulido | El producto mejora. | 6,5 meses y 0 pagos. Cada función suma mantenimiento, y el pulido no prueba que alguien pague. |
| **B. Seguir congelado, con una prueba comercial con fecha** | Usa lo ya hecho. El criterio ya está escrito en el propio repo. El costo queda acotado. | Pide tiempo de venta de Sergio Urcullo, no de agentes. Antes hay que arreglar el respaldo y las dependencias. |
| **C. Pausar ahora y archivar** | Libera todo el tiempo para marca personal y talleres, y baja el riesgo operativo. | El trabajo queda sin probar en el mercado. Apagar bien también lleva trabajo: exportar datos, avisar a las 5 cuentas y bajar contenedores. |
| **D. Usar herramientas existentes** (Dentalink, AgendaPro, Alegra u Odoo, con un bot de WhatsApp aparte) **y vender la implementación** | No hay nada que mantener y son productos probados. Encaja con los talleres: "te lo implemento". | Margen chico y sin diferencia propia. SIAT no está probado en esas herramientas, y se depende de terceros. |

## 7. Recomendación: B

Seguir, pero congelado y con una prueba comercial con fecha:
- **Un solo rubro:** dental, que es el más trabajado y el que pide el propio criterio de la 1.0.
- **Sin funciones nuevas.** Solo se arregla lo que bloquea a un cliente real o lo que promete algo que no hace.
- **Venta asistida,** con cobro por QR. No hace falta esperar a SIAT si la clínica no exige factura desde el sistema.
- **Fecha de corte,** que decide Sergio Urcullo. Propuesta: primer pago antes del 31-dic-2026 y su renovación en enero. Si no se cumple, se pasa a C.

**Por qué:** lo que falta no es código, es la prueba de que alguien paga. El producto ya tiene el núcleo, y seguir sumando funciones agranda el costo sin responder esa pregunta. Pausar ahora tira 6,5 meses sin haberlo ofrecido de verdad. D se puede retomar después si B falla.

## 8. Próximos pasos, si Sergio Urcullo aprueba

Cada paso es un issue con su propia sesión. Los marcados con **(sí)** tocan producción o el repo del producto y piden su aprobación.

1. **(sí)** Guardar los 68 cambios y limpiar el checkout (punto 9).
2. **(sí)** Quitar el worktree `onia-platform-crece4` (punto 9).
3. **(sí)** Congelar: revisar los 10 PRs abiertos. Se mergea solo lo que corrige una promesa falsa o bloquea a un cliente. El resto se cierra, con su rama guardada en GitHub.
4. **(sí)** Mudar a `onia-platform`, o a un repo propio, lo que vive en el repo viejo: el bot, el cron de recordatorios, SIAT, el contrato de ONIA Core y la configuración del runner. Es requisito para archivar `onia-hermes`.
5. **(sí)** Antes del primer cliente:
   - un respaldo diario probado con una restauración;
   - QA con su propia base, separada de producción;
   - Node 22 en el VPS;
   - revisar `npm audit` (DG-029).
6. Medir el costo real del mes (VPS, OpenAI, Resend y dominio) y anotarlo acá.
7. Prueba comercial: Sergio Urcullo elige entre 3 y 5 clínicas dentales para ofrecerles el sistema. Se anota cada fricción real.
8. En la fecha de corte, decidir entre seguir y pausar, con lo medido.
9. Ordenar ramas y worktrees: 241 ramas locales y 42 worktrees. Va junto con el archivo de `E:\onia-wt` y `E:\onia-orquesta`.

## 9. Los 68 cambios sin guardar y la copia duplicada

### Los 68 cambios de `C:\dev\proyectos\onia-platform`

**Dónde están.** En la rama `claude/f2-f3-panel`. Su último commit es del 12-sep y ya está dentro de `master`, que avanzó 1.012 commits desde ahí. El `HANDOFF_CLAUDE.md` del propio checkout ya decía que estaban "en su mayoría superados" y que no había que limpiarlos sin comparar.

**Comparados contra `master`:**
- De los 49 archivos modificados, 24 ya están enteros en `master` y 5 casi enteros. Los otros 20 tienen partes que no están: sobre todo el editor del chatbot, los estilos, los planes y MFA. Todos se tocaron el 14-sep, y `master` cambió esos mismos archivos después, por su lado.
- De los 19 archivos nuevos, 5 son idénticos a `master`, 13 son versiones viejas de archivos que `master` ya tiene y 1 es un `error.log`.

**Qué hacer:**
- Guardarlos enteros en una rama de archivo en GitHub, por ejemplo `archivo/f2-f3-panel-20260912`, sin el `error.log` y después de pasar `gitleaks`.
- Después, dejar el checkout en `master` limpio.
- No se integran. Si algún día hace falta un trozo, se saca de esa rama.

### `C:\dev\proyectos\onia-platform-crece4`

**No es una copia: es un worktree** del mismo repo, en la rama `fix/crece-4-usuarios`.
- Su único commit propio ("Crece pasa de 3 a 4 usuarios", 20-oct) ya llegó a `master` por otro camino (commit `8f2c2b56`). Por eso el PR #187 se cerró sin mergear.
- Sus 2 cambios sin guardar son snapshots de pruebas, que se regeneran solos.
- Ocupa 1,3 GB.

**Qué hacer:** quitar el worktree con `git worktree remove` y borrar la rama local. No se pierde nada.

## 10. Lo que decide Sergio Urcullo

1. Qué opción sigue: B (recomendada), A, C o D.
2. Las fechas de corte del primer pago y de la renovación.
3. Si se guardan los 68 cambios en una rama de archivo y se limpia el checkout.
4. Si se quita el worktree `onia-platform-crece4`.
5. Un dato que falta: cuánto cuesta por mes el VPS de producción.
