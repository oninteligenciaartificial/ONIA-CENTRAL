# Mapa para operar ONIA con agentes

29-oct-2026. Lo pidió Sergio Urcullo esa noche: "quiero que documentes y investigues todo lo que te falta, y yo solo te pongo las cuentas y te digo datos, solo quiero que configures todo, todas las areas de la empresa que necesitemos".

Es solo investigación: no se instaló, no se conectó y no se configuró nada. Sale de:
- la documentación oficial de cada herramienta, consultada el 29-oct, con los enlaces en cada punto;
- la documentación de Hermes v0.22.5 instalada en `%LOCALAPPDATA%\hermes\hermes-agent\website\docs`, citada abajo como `docs/` de Hermes;
- este repo, sus issues y PRs abiertos, y los conectores que tiene la cuenta de claude.ai;
- el trabajo de dos sesiones en curso: referentes y workshop (#6, PRs #40 y #41) y Hermes como orquestador (skill `llevar-issue`, PR #35).

Lo que dice "sin confirmar" no se pudo verificar en una fuente oficial. Los precios son en dólares, al 29-oct-2026.

## En corto

- **Quién hace qué:**
  - **Hermes orquesta.** Recibe los pedidos (por Telegram, cuando esté el #11), reparte los issues con la skill `llevar-issue` y corre las tareas programadas.
  - **Claude Code ejecuta lo que necesita cuentas,** porque ya tiene los conectores de claude.ai. **Codex** programa y revisa.
  - **Sergio Urcullo** da cuentas, datos y decisiones, graba con su cara y aprueba con captura todo lo que sale.
- **Ya conectado en claude.ai al 29-oct:** Gmail, Google Calendar, Google Drive, Meta ads, Meta Developer Tools, TikTok for Business, Higgsfield, Notion, Gamma, Figma, Supabase, Vercel, Cloudflare y Claude Docs. Además Exa y Stitch, que la limpieza tiene en duda.
- **Lo que falta para operar:**
  - la base: la bóveda (#7), Telegram (#11) y que Hermes use esos conectores a través de Claude Code (#44);
  - una app de Meta para publicar en Instagram (#49);
  - el WhatsApp de ONIA (#53) y una forma de cobrar (#54);
  - las skills de cada proceso (punto 6).
- **Lo que no se automatiza:** grabar con su cara, los logins y la verificación en dos pasos, aprobar lo que sale y pagar.
- **Gasto nuevo mínimo para el primer taller:** una sala de Zoom por el mes del taller (US$16,99) y el presupuesto de anuncios que proponga el PR #41. Lo demás arranca con lo que ya está.
- **Lo que tiene que hacer Sergio Urcullo** está junto, en orden, en el punto 9.

## 1. Cómo se conecta cada cosa

Se prueba en este orden, y se pasa al siguiente solo si el anterior no existe:

1. **El conector de claude.ai que ya está.**
   - Hermes lo usa lanzando `claude -p`. Según la [documentación de Claude Code](https://code.claude.com/docs/en/mcp#use-mcp-servers-from-claude-ai), una sesión de terminal trae los conectores sola si entró con la suscripción de claude.ai, no con una clave de API.
   - A favor: no hay logins nuevos y el OAuth es el oficial. En contra: gasta cupo de Claude.
   - Falta probarlo y fijar qué herramientas puede usar cada tarea (#44). Hoy `llevar-issue` deja los conectores afuera a propósito, con `--strict-mcp-config`.
   - Gmail y Calendar se conectan solo desde claude.ai: Claude Code no puede hacer su OAuth local.
2. **Un MCP oficial remoto con OAuth,** sumado en el agente que lo use.
   - En Hermes se suma con `hermes mcp add <nombre> --url <url> --auth oauth`, que corre Sergio Urcullo. Hermes trae además un catálogo oficial (`optional-mcps`) con Notion, Canva, Stripe, n8n, Calendly, Gamma, Dropbox y PayPal.
   - Hermes filtra las herramientas de cada servidor con `tools.include` y `tools.exclude`, y con `trust: untrusted` pide aprobación en cada herramienta que escribe (`user-guide/features/mcp.md` y `reference/mcp-config-reference.md` de Hermes).
   - Ojo: el gateway de Hermes no abre el navegador. Si un token vence, Sergio Urcullo corre `hermes mcp login <nombre>`.
3. **La API oficial,** con una skill de ONIA que diga cómo usarla y la clave donde dice `docs/credenciales.md`.
4. **El navegador con sesión,** solo donde no hay nada de lo anterior: el cofre de Hermes o Claude en Chrome, según `docs/credenciales.md`.

**Lo que sale para afuera** (publicar, mandar, gastar o cobrar) queda en borrador o en pausa hasta el sí de Sergio Urcullo con captura. Las herramientas que publican o gastan solas quedan afuera de lo que el agente puede usar sin preguntar:
- Higgsfield gasta créditos en cada llamada, no tiene tope propio y puede publicar en TikTok ([Higgsfield](https://higgsfield.ai/creator-hub/help-center/integrations/what-is-higgsfield-mcp));
- los MCP de anuncios de Meta y de TikTok crean campañas y tocan presupuestos;
- el conector de Gmail envía, aunque por defecto pide aprobación ([Anthropic](https://support.claude.com/en/articles/10166901-use-google-workspace-connectors));
- Opus Clip y Submagic publican en redes.

**Lo que se descarta:**
- **El WhatsApp de Hermes con Baileys.** Imita a WhatsApp Web, no es oficial y arriesga que den de baja el número (`user-guide/messaging/whatsapp.md` de Hermes).
- **El correo de Hermes por IMAP.** Pide una contraseña de aplicación que abre todo el Gmail (`user-guide/messaging/email.md`).
- **Un OAuth propio de Google con Gmail personal,** como la skill `google-workspace` de Hermes. Sin Google Workspace la app queda en modo Testing, y la autorización vence a los 7 días ([Google](https://support.google.com/cloud/answer/15549945)).
- **El MCP oficial de Google Workspace.** Está en Developer Preview, pide una cuenta de Workspace paga y en Gmail solo deja borradores ([Google](https://developers.google.com/workspace/guides/configure-mcp-servers)).
- **El n8n del VPS.** Es producción, y su MCP de instancia ejecuta workflows y, desde la versión 2.13, también los edita ([n8n](https://docs.n8n.io/advanced-ai/accessing-n8n-mcp-server)). No se conecta a ningún agente hasta revisar el VPS.
- **Los plugins de la comunidad** del catálogo de Hermes para anuncios, YouTube o WhatsApp (`adspirer`, `markifact`, `vidiq`, `go-whatsapp`): no son oficiales.

## 2. Marca personal

| Proceso | Herramienta o cuenta | Cómo se conecta | Skill de ONIA | Qué da Sergio Urcullo | Costo |
|---|---|---|---|---|---|
| Investigar referentes y tendencias | Biblioteca de anuncios de Meta, redes y webs públicas | Conector Meta ads y navegador sin sesión. La API de la Biblioteca solo muestra anuncios políticos fuera de la UE ([Meta](https://developers.facebook.com/docs/graph-api/reference/ads_archive/)) | `investigar-referente` (ya está) | Qué referentes se suman (PR #40) | US$0 |
| Planificar la semana | `marca-personal/calendario/` y su Google Calendar para grabar | Archivos del repo y conector de Calendar | `planificar-contenido` (#45) | Sus temas, cuántas veces publica en cada red y qué días graba | US$0 |
| Guiones de reels y videos | El repo | Archivos | `escribir-guion` (#46). Los de anuncios, `hacer-anuncio` (#42) | De 3 a 5 videos suyos de referencia y lo que nunca promete | US$0 |
| Carruseles | Canva, Figma, Gamma o Higgsfield | Canva: MCP oficial con OAuth; la marca y las plantillas piden Pro ([Canva](https://www.canva.dev/docs/apps/mcp/tools/)). Figma y Gamma: conectores de claude.ai | `armar-carrusel` (#47) | El kit de marca: logo, colores y tipografías | Canva Pro, unos US$144 por año. Figma y Gamma, sin gasto nuevo |
| Reels: tomas, subtítulos, voz y b-roll | Su cámara; CapCut, Descript, Opus Clip o Submagic; ElevenLabs; Higgsfield | CapCut no tiene API. Descript, Opus Clip y Submagic tienen MCP oficial. ElevenLabs tiene MCP remoto con OAuth, y su clave de API acepta un tope de créditos ([ElevenLabs](https://elevenlabs.io/docs/overview/administration/workspaces/api-keys)) | `preparar-reel` (#48) | Graba y deja los crudos en Drive o en E: | De US$0 a unos US$90 por mes (decisión 5) |
| Publicar en Instagram y Facebook | Instagram profesional y la Página "Onia" | API de Instagram con una app propia: no hay MCP oficial para eso. Para su propia cuenta alcanza el acceso estándar, sin App Review. La API no programa y pide el archivo en una URL pública ([Meta](https://developers.facebook.com/docs/instagram-platform/content-publishing)) | `publicar-contenido` (#49) | El login con 2FA para crear la app | US$0 |
| Publicar en TikTok y YouTube | Sus cuentas | TikTok: sin auditoría, la API publica solo en privado, así que va como borrador a la app. YouTube: Data API v3, 100 subidas por día, sin MCP oficial | `publicar-contenido` (#50) | Los logins y las apps de desarrollador | US$0 |
| Comentarios y mensajes ("comentá PALABRA") | Instagram | API de Instagram: un mensaje se contesta dentro de las 24 h; un comentario recibe una sola respuesta privada, dentro de 7 días | `responder-comunidad` (#51) | Si la guía sale sola (decisión 8) | US$0 |
| Métricas de la semana | Instagram y anuncios de Meta | API de Instagram (los datos tardan hasta 48 h) y conector Meta ads. Tarea programada de Hermes que avisa por Telegram | `informe-semanal` (#52) | Nada | US$0 |

**Publicar sin app propia mientras tanto:** el agente deja listos el archivo, el texto y la hora, y Sergio Urcullo publica desde la app o desde Meta Business Suite. Así se puede arrancar sin esperar el #49.

## 3. Talleres y comunidad

El taller lo define el #6. Su resumen (PR #40) recomienda la opción A, "Tu negocio contesta solo por WhatsApp": en vivo, 2 noches, cupo de 30, inscripción por WhatsApp y cobro con QR, como se venden hoy los talleres en Bolivia. El plan de campaña está en el PR #41.

| Proceso | Herramienta o cuenta | Cómo se conecta | Skill de ONIA | Qué da Sergio Urcullo | Costo |
|---|---|---|---|---|---|
| Elegir el taller, el precio y el público | Las fichas y opciones del PR #40 | — | — | Las decisiones del PR #40 | — |
| Anuncios del taller | Página "Onia" y cuenta publicitaria "ONIA Ads" | Conector Meta ads | `hacer-anuncio` (#42) y `armar-campana` (#55) | Las decisiones del PR #41 y el medio de pago | El PR #41 propone US$10 por día durante 7 días |
| Consultas e inscripción | WhatsApp Business | La app no tiene API: el agente prepara y Sergio Urcullo carga. La Cloud API, más adelante (punto 4) | `atender-inscriptos` (#53) | El número (decisión 4) | App: US$0 |
| Página del taller | Cloudflare Pages o Vercel | Conectores de claude.ai | `web-de-venta` (#42) | Dónde se publica (decisión 6) | Cloudflare: US$0. Vercel Pro: US$20 por mes |
| Cobro y factura | QR de su cuenta y el SIAT | A mano al principio; después, un QR que se confirma solo (punto 4) | `registrar-movimiento` (#54) | La cuenta del titular del NIT, y emitir la factura | US$0 |
| Materiales y clase | Gamma o Google Slides, Zoom o Meet, Google Calendar | Conectores de Gamma y Calendar. Zoom tiene un MCP oficial; que cree reuniones está sin confirmar | `preparar-taller` (#57) | La fecha, aprobar el temario y dar la clase | Zoom Pro: US$16,99 por un mes (decisión 7) |
| Comunidad después del taller | Grupo de WhatsApp; Skool más adelante | — | — | Decisión 10 | WhatsApp: US$0. Skool Hobby: US$9 por mes más 10% y 30¢ por venta |
| Datos de inscriptos | Planilla en su Drive, nunca en Git | Conector de Drive | `atender-inscriptos` y `registrar-movimiento` | — | US$0 |

**La sala:** el plan gratis de Zoom corta a los 40 minutos, y el de Meet a los 60 con 3 o más personas ([Google](https://support.google.com/meet/answer/7317473)). Zoom Pro admite 100 participantes, que alcanza para un cupo de 30 ([Zoom](https://zoom.us/pricing)).

**Lo legal de la página,** según las normas públicas que se leyeron (no es la opinión de un abogado):
- quién vende y su NIT, el precio total, la fecha y qué incluye ([Ley 453](https://www.lexivox.org/norms/BO-L-N453.html), de consumidores);
- un aviso de privacidad: para qué se usan los datos, quién es el responsable y cómo pedir acceso, corrección o baja, con consentimiento expreso ([DS 1793](https://www.lexivox.org/norms/BO-RE-DSN1793.html), reglamento de la Ley 164, art. 56);
- dos casillas separadas y sin marcar, una para recibir mensajes por WhatsApp y otra por correo. En la publicidad, el remitente identificable y cómo darse de baja (DS 1793, art. 57, y la [política de WhatsApp Business](https://whatsappbusiness.com/es-la/policy/));
- los términos y la política de reembolso. No se encontró un plazo legal de arrepentimiento para compras en línea en Bolivia;
- que se entrega factura.

## 4. Lo transversal

| Proceso | Herramienta o cuenta | Cómo se conecta | Skill de ONIA | Qué da Sergio Urcullo | Costo |
|---|---|---|---|---|---|
| Ventas: seguir a quien preguntó y no compró | WhatsApp y la planilla | Como en el punto 3 | `atender-inscriptos` (#53) | — | US$0 |
| Cobros | QR interoperable de su banco | A mano. Después, la API de QR del BNB, OpenBCB o una pasarela local | `registrar-movimiento` (#54) | El banco, el NIT y confirmar cada pago | QR: US$0 |
| Anuncios de Meta | MCP oficial de anuncios de Meta, en beta | Conector de claude.ai. Las "reglas del MCP" topan presupuestos. Otros agentes pueden entrar desde el 16-jul-2026 con su propia app ([Meta](https://developers.facebook.com/blog/post/2026/07/16/meta-ads-mcp-server/)) | `armar-campana` (#55) | El medio de pago, las reglas de presupuesto y activar | La pauta |
| Anuncios de TikTok | MCP oficial de TikTok for Business, solo de anuncios | Conector de claude.ai. Bolivia puede abrir cuentas publicitarias ([TikTok](https://ads.tiktok.com/help/article/available-countries-and-regions-for-ad-account-creation-in-bc)) | `armar-campana` (#55) | Business Center y el medio de pago | La pauta |
| Correo | Gmail | Conector de claude.ai: lee, deja borradores y envía con aprobación | `ordenar-correo` (#56) | Nada | US$0 |
| Agenda | Google Calendar | Conector de claude.ai | `ordenar-correo` (#56) y `planificar-contenido` (#45) | Nada | US$0 |
| Archivos | Google Drive y E: | Conector de Drive | Todas | Las carpetas de trabajo | US$0 |
| WhatsApp | App WhatsApp Business; Cloud API después | La app, a mano. La Cloud API, directo con Meta, sin intermediario | `atender-inscriptos` (#53) | El número (decisión 4) | Tabla de abajo |
| Finanzas | Planilla en su Drive | Conector de Drive | `registrar-movimiento` (#54) | Lo que ya paga y el extracto del banco | US$0 |
| Facturas | SIAT | Las emite Sergio Urcullo | `registrar-movimiento` (#54) | Su modalidad de factura | US$0 |
| Lo legal | Textos en el repo | — | Los de cada página: `web-de-venta` (#42) y, para la plataforma, el #28 | Aprobarlos (decisión 11) | Si revisa un abogado, su costo |
| Orquestar | Hermes, Telegram y tareas programadas | `llevar-issue`, `hermes gateway` y `hermes cron`, que corre Sergio Urcullo | `llevar-issue` (ya está) | El bot de Telegram (#11) | US$0 |
| Credenciales | Bóveda KeePassXC | `docs/credenciales.md` | — | Crear la bóveda (#7) | US$0 |

**WhatsApp Cloud API, precio por mensaje entregado en Bolivia,** que entra en "Resto de Latinoamérica" ([Meta](https://developers.facebook.com/docs/whatsapp/pricing), tarifa vigente desde el 1-oct-2026):

| Categoría | US$ por mensaje |
|---|---|
| Marketing | 0,0740 |
| Utility | 0,0113 |
| Authentication | 0,0113 |
| Service | 0,0113, con 1.000 gratis por número al mes |

- Siguen gratis los mensajes que escribe la persona y todo lo que pasa en la ventana de un anuncio que abre WhatsApp, de hasta 7 días ([Meta](https://developers.facebook.com/docs/whatsapp/pricing/updates-to-pricing)).
- Un portfolio nuevo puede escribirle a 250 personas distintas cada 24 horas fuera de la ventana. Sube a 2.000 al verificar la empresa ([Meta](https://developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits.md)).
- Usar el mismo número en la app y en la API ("coexistence") exige pasar por un proveedor de Meta (BSP) o registrarse como Tech Provider ([Meta](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users.md)).
- El adaptador de WhatsApp Cloud de Hermes no manda plantillas, así que fuera de la ventana de 24 horas no puede escribir (`user-guide/messaging/whatsapp-cloud.md` de Hermes). Meta tiene además un MCP oficial de WhatsApp, en beta, que sí maneja plantillas ([Meta](https://developers.facebook.com/documentation/mcp/whatsapp-business-tools-mcp)).

**Cobrar desde Bolivia:**
- **QR interoperable:** las transferencias son gratis y la plata llega en bolivianos. Para que se confirme solo:
  - el BNB tiene una API de QR que consulta si se pagó; pide contrato y no publica su costo ([BNB](http://www.bnb.com.bo/PortalBNB/Api/OpenBanking));
  - OpenBCB, del Banco Central, es gratis y avisa el pago, pero pide abrir una cuenta especial. Si una unipersonal puede: sin confirmar ([BCB](https://www.bcb.gob.bo/?q=content%2Fopen-bcb));
  - hay pasarelas locales desde Bs 249 por mes (guía de web de venta del PR #41).
- **Stripe** no opera en Bolivia ([Stripe](https://stripe.com/global)).
- **PayPal:** que una cuenta boliviana pueda cobrar y retirar a un banco local está sin confirmar.
- **Hotmart** cobra 9,9% más US$1 por venta en LATAM ([Hotmart](https://hotmart.com/la/tasa-hotmart)); el retiro desde Bolivia está sin confirmar.
- **Skool** paga a cuentas de Bolivia ([Skool](https://help.skool.com/article/86-subscriptions-faq)). Sirve para una comunidad paga o para alumnos de afuera.
- **Lemon Squeezy y Paddle** no sirven para talleres: no aceptan servicios ni coaching.
- **Tarjetas para pagar suscripciones afuera:** desde abril de 2026, los bancos tienen que permitir al menos US$500 por mes con débito ([ASFI](https://www.asfi.gob.bo/node/1362)).

**Factura e impuestos,** para revisar con un contador:
- La factura en línea tiene tres modalidades: Electrónica, Computarizada y Portal Web, que se emite desde la web del SIN. Cuál le toca a ONIA lo dice su padrón del SIAT ([RND 102100000011](https://www.impuestos.gob.bo/wp-content/uploads/2025/10/RND-102100000011.pdf)).
- El SIN tiene servicios web para que un sistema facture solo, después de un plan de pruebas y su autorización.
- Régimen general: IVA 13% e IT 3% por mes, e IUE 25% por año. Una persona natural con profesión independiente paga RC-IVA en lugar del IUE (DS 4850; falta cotejarlo con la Gaceta). El régimen simplificado no aplica a talleres.

**Orquestar con Hermes,** lo que limita al resto:
- Kanban de Hermes v0.22.5 no lanza a Claude Code ni a Codex como trabajadores. Por eso el reparto va por `llevar-issue` (hallazgo de la sesión del orquestador).
- Las tareas programadas corren solo con el gateway prendido. En Windows, el gateway vive mientras la sesión de Windows está iniciada: con la PC apagada no hay informes ni respuestas por Telegram (`user-guide/windows-native.md` de Hermes).
- `hermes cron` y `hermes mcp` están bloqueados para el agente (`approvals.deny`). Los corre Sergio Urcullo con los comandos que preparan los agentes.

## 5. ONIA Platform

La decisión A (seguir desarrollando con agentes) está en `plataforma/2026-10-28-seguir-con-onia-platform.md`, y cada paso ya tiene su issue, del #24 al #29. Este mapa no suma issues para la plataforma.

| Proceso | Herramienta o cuenta | Cómo se conecta | Skill de ONIA | Qué da Sergio Urcullo | Costo |
|---|---|---|---|---|---|
| Desarrollo por issues | GitHub, repo `onia-platform` | `gh` con su login; Claude Code escribe y Codex revisa | `llevar-issue`, adaptada a que mergear es publicar (#29) | Aprobar cada merge, porque es producción | Incluido en los planes |
| Despliegue y crons | VPS de producción | SSH: los comandos los corre él (#26) | — | Correrlos, con captura | El VPS: falta el dato |
| Respaldo y QA | VPS | Igual (#27) | — | Lo mismo | El almacenamiento del respaldo, si hay |
| Cobro, factura y términos del SaaS | QR, SIAT y los textos | #28 | — | El pago de prueba y aprobar los textos | Un pago chico de prueba |
| Errores | Sentry | #29 | — | — | — |
| Bot de WhatsApp de los clientes | Cloud API de Meta; su motor vive en el repo viejo | Después del #26 | — | — | Lo paga el cliente |

Los conectores de Supabase y Vercel de claude.ai llegan a producción: se usan solo para leer, y cualquier cambio pide su sí.

## 6. Skills de ONIA que hacen falta

Van en `.agents/skills/<nombre>/`, con el formato de `docs/decisiones/2026-10-28-skills-compartidas.md`. Las que publican, mandan, gastan o tocan lo que ve un cliente las aprueba Sergio Urcullo, como dice el `AGENTS.md`.

| Skill | Para qué | Issue |
|---|---|---|
| `investigar-referente` | Ficha de un referente | Ya está |
| `llevar-issue` | Un issue de punta a punta | Ya está (PR #35) |
| `usar-conectores` | Lanzar a Claude Code con los conectores y solo las herramientas permitidas | #44 |
| `planificar-contenido` | La semana de contenido y cuándo grabar | #45 |
| `escribir-guion` | Guiones de reels y videos | #46 |
| `armar-carrusel` | Carruseles con la marca | #47 |
| `preparar-reel` | Del guion al reel listo | #48 |
| `publicar-contenido` | Publicar lo aprobado, a la hora | #49 y #50 |
| `responder-comunidad` | Comentarios y mensajes de Instagram | #51 |
| `informe-semanal` | Qué funcionó, por Telegram | #52 |
| `atender-inscriptos` | Consultas, inscripción y seguimiento por WhatsApp | #53 |
| `registrar-movimiento` | Cobros, gastos y conciliación | #54 |
| `armar-campana` | Campañas en pausa con tope | #55 |
| `ordenar-correo` | Correo, agenda y resumen diario | #56 |
| `preparar-taller` | Cada edición del taller | #57 |
| `hacer-anuncio` y `web-de-venta` | Anuncios y página de venta | #42 |

## 7. Costos

**Lo que ya se paga:**
- Claude: Max 5x, US$100 por mes desde el 3-nov (#30).
- ChatGPT: Plus o Pro, a decidir antes del 14-nov (#30).
- La API de Anthropic de Hermes, con el tope que fije Sergio Urcullo (#30).
- Higgsfield y el VPS: faltan los datos (punto 9).

**Lo nuevo, según cada decisión:**

| Qué | Recomendado | Alternativas |
|---|---|---|
| Sala del taller | Zoom Pro por el mes del taller: US$16,99 | Google Workspace Business Standard, Meet con grabación: US$14 por mes con plan anual ([Google](https://workspace.google.com/pricing)) |
| Página del taller | Cloudflare Pages: US$0 | Vercel Pro: US$20 por mes, porque Hobby no permite uso comercial ([Vercel](https://vercel.com/docs/plans/hobby)) |
| WhatsApp | La app: US$0 | Cloud API: por mensaje, tabla del punto 4 |
| Contenido | Nada nuevo el primer mes | Canva Pro, unos US$12 por mes. ElevenLabs Starter US$6 o Creator US$22 ([ElevenLabs](https://elevenlabs.io/pricing)). Submagic con API desde US$41, Opus Clip US$29, Descript desde US$16. Higgsfield Starter US$15 o Plus US$49 ([Higgsfield](https://higgsfield.ai/blog/higgsfield-pricing-explained)) |
| Anuncios | Lo que proponga el PR #41: US$10 por día durante 7 días | US$5 o US$20 por día |
| Cobro | QR: US$0 | Pasarela local desde Bs 249 por mes; Hotmart, 9,9% más US$1 por venta |
| Telegram con la PC apagada | No: US$0 | Un VPS aparte, desde €6,49 por mes (`2026-10-28-plan-arranque.md`) |

Con lo recomendado, noviembre suma unos US$87: la sala y la prueba de anuncios.

## 8. Orden para ponerlo en marcha

El orden es una decisión de Sergio Urcullo (decisión 1). La propuesta:

**A. El taller primero, para hacer caja (recomendada).**
1. **Base, esta semana:** la bóveda (#7), Telegram (#11) y los conectores a través de Claude Code (#44). Sin esto Hermes no opera nada solo.
2. **El taller, en noviembre:**
   - las decisiones de los PRs #40 y #41;
   - WhatsApp (#53), el cobro y la planilla (#54);
   - la página y los anuncios (#42 y #55);
   - el correo y la agenda (#56) y la preparación del taller (#57).
3. **Marca personal con agentes:**
   - primero la guía de voz y los guiones (#46), el calendario (#45), los carruseles (#47) y los reels (#48);
   - después publicar por API (#49), los comentarios (#51), el informe semanal (#52), y TikTok y YouTube (#50).
4. **ONIA Platform, en paralelo todo el tiempo,** del #24 al #29, sin tocar los archivos de las otras etapas.

Por qué: es lo único que trae plata en noviembre, y es lo que menos cuentas nuevas pide. Lo que no necesita cuentas, como los guiones (#46) o el calendario (#45), puede arrancar igual en paralelo.

**B. La marca personal primero:** juntar audiencia antes de pagar anuncios, como hacen Enrique Rocha y Santiago Muñoz (PR #40). La caja tarda más.

**C. La plataforma primero:** cerrar el #27 y el #28 para vender el taller junto con la plataforma. Es lo que más tarda.

## 9. Lo que necesita de Sergio Urcullo

En el orden en que conviene darlo.

### Cuentas

Se cargan siguiendo `docs/credenciales.md`: el secreto va a la bóveda y al agente, nunca al chat.

1. **La bóveda:** crear `C:\Users\PC\BovedaPrivada\Agentes.kdbx` con KeePassXC (#7). Todo lo que sigue se guarda ahí.
2. **Telegram:** crear el bot nuevo en BotFather y configurarlo con `hermes gateway setup` (#11).
3. **Meta, en una sola sentada y con 2FA:**
   - cargar el medio de pago en la cuenta publicitaria que elija (PR #41);
   - comprobar que Instagram es una cuenta profesional y está vinculado a la Página "Onia";
   - conectar el WhatsApp Business a la Página, que lo piden los anuncios que abren un chat (PR #41);
   - crear con un agente al lado la app de Meta para Instagram (#49);
   - fijar las reglas de presupuesto del MCP de anuncios (#55).
4. **WhatsApp Business** en el número de ONIA (#53).
5. **Lo que decida contratar** (decisiones 5 y 7): crear la cuenta y autorizar el OAuth de cada conector él mismo.
6. **Más adelante, en la etapa de marca personal:** la app de desarrollador de TikTok y el proyecto de Google Cloud para YouTube (#50).

### Datos

Van por mensaje, sin secretos.

1. **Las cuentas de ONIA:** los usuarios de Instagram, TikTok y YouTube, la Página de Facebook, el correo que usa ONIA y el número de WhatsApp.
2. **Para el contenido** (#45 y #46):
   - sus temas;
   - cuántas veces por semana publica en cada red;
   - qué días puede grabar;
   - de 3 a 5 videos suyos que le gusten, y lo que nunca promete.
3. **El kit de marca,** o el enlace a la carpeta de Drive donde está (#47).
4. **Para cobrar y facturar** (#54):
   - si factura como persona natural o como empresa;
   - qué modalidad de factura figura en su padrón del SIAT;
   - en qué banco está la cuenta del QR.
5. **Lo que ya paga,** con su vencimiento: el plan de Higgsfield, y si paga Canva, ElevenLabs, Zoom u otras. Y cuánto cuesta por mes el VPS (#54 y #30).
6. **La fecha y el horario** tentativos del primer taller (#57).
7. **Si alguien más** atiende el WhatsApp o da el taller con él.

### Decisiones

Opciones cortas, con la recomendada en negrita.

1. **Orden de la empresa (punto 8):** **A, el taller primero** / B, la marca personal primero / C, la plataforma primero.
2. **El taller:** las decisiones que traen los PRs #40 (qué taller, precio, público, herramienta y referentes) y #41 (cuenta, página, público, presupuesto y guiones). No se repiten acá.
3. **Cómo cobrar el primer taller:** **QR de tu cuenta, confirmado a mano en la app del banco** / una pasarela con QR que se confirma solo, desde Bs 249 por mes / Hotmart, con 9,9% más US$1 por venta y el retiro a Bolivia sin confirmar.
4. **WhatsApp:** **la app Business ahora, y la Cloud API cuando el volumen lo pida** / la Cloud API ya, con costo por mensaje / un proveedor de Meta (BSP) para usar el mismo número en la app y en la API.
5. **Suscripciones de contenido:** **nada nuevo el primer mes; se mide y se decide** / básico: Canva Pro y ElevenLabs Starter, unos US$18 por mes / completo: además Submagic u Opus Clip, de US$50 a US$90 por mes.
6. **Dónde va la página del taller:** **Cloudflare Pages, gratis** / Vercel Pro, US$20 por mes / sin página, solo WhatsApp. Publicarla en un dominio de ONIA es producción y pide tu sí.
7. **Sala del taller:** **Zoom Pro por el mes del taller, US$16,99** / Google Workspace Business Standard, US$14 por mes con plan anual, que cambia tu cuenta de Google.
8. **"Comentá PALABRA":** **el agente propone las respuestas y vos aprobás cada tanda** / la guía sale sola a quien comenta la palabra, con un texto que aprobás una vez.
9. **Publicación en redes:** **el agente publica a la hora lo que aprobaste con captura** / vos publicás todo a mano.
10. **Comunidad después del taller** (sin apuro): **un grupo de WhatsApp gratis** / Skool Hobby, US$9 por mes más 10% y 30¢ por venta.
11. **Textos legales:** **el agente los redacta con la norma citada y vos los aprobás** / que los revise antes un abogado, con su costo.
12. **Telegram con la PC apagada** (sin apuro): **no, solo con la PC prendida** / un VPS aparte, desde €6,49 por mes.
13. **Google** (sin apuro): **seguir con Gmail personal y los conectores de claude.ai** / Google Workspace, desde US$7 por usuario y mes, para correo con dominio y el MCP oficial de Google.
14. **n8n del VPS** (sin apuro): **no se conecta a ningún agente hasta revisar el VPS** / prender ahora su MCP de instancia.

## 10. Issues

Nuevos, uno por pieza:
- [#44](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/44) Que Hermes use los conectores de claude.ai lanzando Claude Code
- [#45](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/45) Calendario editorial y skill planificar-contenido
- [#46](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/46) Guía de voz y skill escribir-guion
- [#47](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/47) Kit de marca y skill armar-carrusel
- [#48](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/48) Skill preparar-reel
- [#49](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/49) App de Meta para publicar en Instagram y leer métricas
- [#50](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/50) Publicar en TikTok y YouTube por API
- [#51](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/51) Skill responder-comunidad
- [#52](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/52) Informe semanal por Telegram
- [#53](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/53) WhatsApp de ONIA y skill atender-inscriptos
- [#54](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/54) Planilla de cobros y gastos, y skill registrar-movimiento
- [#55](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/55) Campañas de Meta en pausa con tope, y skill armar-campana
- [#56](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/56) Correo y agenda, y resumen diario por Telegram
- [#57](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/57) Skill preparar-taller

Ya existían y no se duplicaron: #7 (cuentas y bóveda), #11 (Telegram), #24 a #29 (plataforma), #30 (pagos de noviembre) y #42 (skills de anuncio y de web de venta).

## 11. Límites de este mapa

- No se probó nada con las cuentas reales. Lo que dice "sin confirmar" hay que comprobarlo en el issue que lo usa.
- Los MCP de Meta están en beta y sus herramientas pueden cambiar. Que los conectores "Meta ads" y "Meta Developer Tools" de claude.ai sean esos mismos servidores es muy probable, pero no está confirmado.
- Los impuestos y lo legal salen de normas públicas, no de un contador ni de un abogado.
- Los precios cambian: están al 29-oct-2026.
