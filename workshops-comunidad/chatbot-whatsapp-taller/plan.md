# Plan: chatbot de WhatsApp para vender el taller (n8n + Chatwoot)

3-nov-2026, hilo "Planear el chatbot de WhatsApp en n8n" del proyecto Onia (Claude). Lo pidió Sergio Urcullo esa madrugada: dejar investigado qué hace falta para que el chatbot venda el taller (número, cuentas, n8n en el VPS, flujo, costos) y qué tiene que resolver él a la mañana.

**Es un plan.** No se tocó producción, ni Meta, ni Chatwoot, ni n8n. Lo de Meta se leyó con sus herramientas de desarrollador, en solo lectura. Nada se carga ni se manda sin el sí de Sergio Urcullo, como dicen los "Frenos" del `AGENTS.md`.

## Palabras que aparecen acá

- **Cloud API:** la puerta oficial de Meta para que un programa mande y reciba mensajes de un número de WhatsApp.
- **Chatwoot:** la bandeja que ya corre en el VPS (`chat.onia.com.bo`). Junta los chats y deja contestarlos desde la compu o el celular.
- **Agent Bot de Chatwoot:** un bot enchufado a una bandeja. Cada mensaje nuevo le llega como aviso (webhook), y el bot contesta por la API de Chatwoot. Cuando hace falta una persona, le pasa el chat ("handoff").
- **Ventana de 24 horas:** después de que alguien escribe, durante 24 horas se le puede contestar cualquier cosa. Desde el 1-oct-2026 esas respuestas se cobran, con 1.000 gratis por número al mes (ver "Costos"). Pasadas las 24 horas, solo con una plantilla aprobada por Meta, que también se cobra.
- **Coexistencia:** usar el mismo número en la app WhatsApp Business del celular y en la Cloud API a la vez.

## Lo que ya existe (comprobado hoy)

| Qué | Dónde se vio | Qué dice |
|---|---|---|
| n8n en el VPS | `docs/equipo-agentes/producto.md` (3-nov) y `docs/env-vars-reference.md` de `onia-platform` | Ya está subido y andando: contenedor `n8n-sergio_n8n` en Easypanel. **No hay que instalarlo.** |
| Chatwoot en el VPS | Mismo estado de Desarrollo | Andando, en `chat.onia.com.bo`. |
| App de Meta con WhatsApp | Herramientas de desarrollador de Meta, solo lectura, 3-nov | La app **"Onia Bot"** tiene el caso de uso de WhatsApp y un webhook de mensajes **activo hacia `chat.onia.com.bo`**, o sea, a Chatwoot. "onia-mensajes" y "Onia Agency Chatbots" también tienen WhatsApp, pero sin webhook. "OnIA Social API" es de Instagram (la usa el hilo de los DMs) y no tiene WhatsApp. |
| Bandeja del "número de ventas" en Chatwoot | `onia-platform`: `docs/env-vars-reference.md` y skill `onia-deploy` | Es la bandeja 5 de Chatwoot, y la plataforma ya manda plantillas desde ahí (código de alta y activación de la prueba). |
| Qué número es | `onia-platform`: `lib/contact.ts` | Dice que el número de ONIA es el **+591 75414930**, elegido por Sergio Urcullo el 1-sep, y que "está en Cloud API con el bot atendiendo". |
| Textos del taller | `workshops-comunidad/whatsapp-taller-3-4-5-borrador.md` (en `main`, aprobados el 2-nov) | Saludo, precio, QR, comprobante, confirmación, recordatorio y preguntas frecuentes. Tienen las fechas viejas 4, 5 y 6-nov. |
| Saludo nuevo sin fechas | Rama del hilo del embudo, `workshops-comunidad/embudo-taller/textos.md`, sección 3 | Reemplaza al saludo viejo hasta que Sergio Urcullo elija la fecha nueva. Ese texto dice que el saludo lo cambia él "en la app de WhatsApp Business". |

### Actualización del 3-nov a la mañana: duda cerrada

Sergio Urcullo confirmó en el hilo, el 3-nov a las 13:47 UTC, que el 75414930 "es un número que está conectado mediante API", no por la app WhatsApp Business, y que se usa ese. Va la opción A. El saludo, entonces, no se cambia en la app: lo manda el bot. El flujo y su guía están en [`README.md`](README.md) y [`workflow-n8n.json`](workflow-n8n.json), en esta carpeta. Lo que sigue abajo queda como estaba la mañana del 3-nov.

### La duda que hay que cerrar primero

Dos fuentes no cierran entre sí:

- el código de la plataforma dice que el 75414930 está en la Cloud API, conectado a Chatwoot y "con el bot atendiendo";
- los textos de venta dicen que Sergio Urcullo lo usa en la app WhatsApp Business del celular.

Las dos pueden ser ciertas si el número está en coexistencia, pero eso **no está comprobado**: ver el webhook activo no prueba qué número está en la bandeja 5, ni si sigue registrado. Y si hay un bot viejo contestando ahí, puede estar respondiendo a los interesados del taller con textos de la plataforma. Un análisis del 28-oct (`plataforma/2026-10-28-seguir-con-onia-platform.md`) nombra un motor de chatbot, `onia-center`, que corre en el VPS; si sigue conectado a esa bandeja, **sin confirmar**.

Todo el plan de abajo depende de esto, así que es el paso 1 de la mañana.

## Qué número usar

**Recomendado: el mismo +591 75414930.** Ya está en los anuncios, en la página `/taller`, en los enlaces `wa.me`, en la web de la plataforma y en los estados. Cambiarlo a 3 días del lanzamiento rompe todo eso.

| Opción | A favor | En contra |
|---|---|---|
| **A. El 75414930 por la Cloud API, como parece que ya está (recomendada si se confirma)** | No cambia nada para quien escribe. Chatwoot ya lo recibe. | Si no está en coexistencia, en el celular no se ve: se atiende desde la app de Chatwoot. |
| B. El 75414930 sigue solo en la app del celular, sin bot | Cero riesgo y cero trabajo técnico | Todo a mano: mensaje de bienvenida y respuestas rápidas de la app. Alcanza hasta unas 100 a 150 conversaciones por día, según una agencia (`workshops-comunidad/investigacion-campana-taller-2026-11-03.md`, rama del embudo), sin dato propio. |
| C. Un chip nuevo en la Cloud API, solo para el bot | No toca el número de hoy | Hay que cambiar el número en anuncios, página y textos. Según el mapa de operación, un portfolio nuevo puede escribir primero a 250 personas distintas por día hasta verificar la empresa (`docs/decisiones/2026-10-29-mapa-operacion-onia.md`). Con qué límite arranca un número nuevo dentro del portfolio de ONIA está **sin confirmar**. Cuesta el chip. |
| D. Una API no oficial que imita a WhatsApp Web (como Baileys) sobre el número | Gratis y rápido | **No se recomienda.** El mapa de operación dice que eso "arriesga que den de baja el número" (`docs/decisiones/2026-10-29-mapa-operacion-onia.md`, por el adaptador de Hermes con Baileys). Otras herramientas parecidas, como Evolution o WAHA, no se revisaron. Perder el 75414930 en plena campaña es lo peor que puede pasar. |

**Sobre el baneo:** con la Cloud API oficial no hay riesgo de baja por usar un bot. El riesgo es la **calidad**: si mucha gente bloquea o denuncia, Meta baja los límites del número. Se evita contestando solo a quien escribió y mandando plantillas solo a quien dio su número para eso.

**Si resulta que el 75414930 está solo en el celular (opción B):** pasarlo a la Cloud API sin perder la app pide coexistencia, y Meta la da solo a través de un proveedor oficial (BSP) o de un Tech Provider ([guía de coexistencia de Meta](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users)). Si Chatwoot autohospedado la soporta, **sin confirmar**. Para el viernes 6 conviene quedarse en B y hacer la migración después del taller, con calma.

## Qué cuentas de Meta hacen falta

- **El portfolio de negocio de ONIA** (id `1451773736711697`), que ya tiene la app "Onia Bot", y la cuenta de WhatsApp Business (WABA) con el número.
- **La app "Onia Bot"** (id `1078962684709749`): es la que ya manda los mensajes a Chatwoot. **No hace falta crear otra app.** Las otras dos con WhatsApp ("onia-mensajes" y "Onia Agency Chatbots") no se usan para esto.
- Que para un número propio no haga falta la revisión de Meta (App Review) está **sin confirmar** en una guía oficial de WhatsApp. La app ya recibe mensajes hoy, así que no debería frenar el plan.

## Cómo se arma (opción A)

```
Persona escribe al 75414930
        │  (Cloud API, app "Onia Bot")
        ▼
Chatwoot, bandeja 5 (ya existe) ── la conversación entra "pendiente"
        │  aviso de mensaje nuevo
        ▼
Agent Bot de Chatwoot → webhook de n8n (VPS)
        │  n8n decide la respuesta por reglas
        ▼
n8n contesta por la API de Chatwoot
        │
        ├─ casos normales: sigue el bot
        └─ comprobante, pregunta rara o "quiero hablar con Sergio":
           el bot pasa el chat a "abierto" y Sergio lo ve en la app de Chatwoot
```

Así lo describe la [guía de Agent Bots de Chatwoot](https://www.chatwoot.com/hc/user-guide/articles/1677497472-how-to-use-agent-bots): el bot se crea en Configuración → Bots con la URL del webhook, se elige en la bandeja, recibe `message_created`, las conversaciones nuevas entran "pendientes" y, para pasarlas a una persona, el bot las cambia a "abiertas" con la API.

**Por qué n8n detrás de Chatwoot, y no n8n directo con Meta:** Chatwoot ya recibe el número, guarda el historial y tiene app de celular para que Sergio conteste. Si n8n se conectara directo a Meta, habría que mover el webhook de "Onia Bot" fuera de Chatwoot, y la plataforma dejaría de ver esa bandeja.

**Bot por reglas, sin IA, para el viernes.** Contesta con los textos ya aprobados según palabras y botones. No paga un modelo de IA, hace siempre lo mismo y no inventa precios ni promesas (`docs/lecciones.md`, "Anuncios y venta" y los límites de los textos de WhatsApp). Un modelo de IA para preguntas fuera del guion va después del taller, y **es gasto** porque cobra por uso.

## El flujo de la conversación

Los textos salen de `whatsapp-taller-3-4-5-borrador.md` y del saludo nuevo del embudo. Acá no se copian: se nombran por su sección. Lo que va entre corchetes lo completa Sergio Urcullo.

| Paso | Cuándo | Qué hace el bot | Etiqueta en Chatwoot |
|---|---|---|---|
| 1. Saludo | Primer mensaje de la persona | Saludo nuevo sin fechas (embudo, `textos.md` sección 3) con la fecha que elija Sergio, y pregunta para qué lo quiere: trabajo, estudios o negocio | `taller-consulta` |
| 2. Precio | Contesta para qué, o pregunta el precio | Sección 2, "Precio", con la devolución dicha antes de pagar | `taller-consulta` |
| 3. QR | Dice que sí, "quiero", "QR" o toca el botón | Sección 3, "QR", con la imagen del QR de Yolo Pago | `taller-qr-enviado` |
| 4. Comprobante | Manda una foto o un PDF | Sección 4, "Comprobante recibido". **Pasa el chat a Sergio** | `taller-comprobante` |
| 5. Confirmación | Sergio ve el pago en el banco y pone la etiqueta `taller-pagado` | Sección 5, "Confirmación", con el enlace del grupo o de Meet | `taller-pagado` |
| 6. Preguntas | Palabras como "grabado", "certificado", "cuotas" | Sección 7, "Preguntas frecuentes". Si no entiende: "Le paso tu consulta a Sergio y te responde lo antes posible", y pasa el chat | — |
| 7. Recordatorio | 20 horas sin pagar, dentro de las 24 horas | Sección 6, una sola vez. Pasadas las 24 horas, solo con plantilla (gasto, decisión de Sergio) | — |

- **El pago lo confirma siempre Sergio Urcullo**, mirando el banco. El bot nunca dice "pago confirmado" solo. Que el cobro sea automático pide una pasarela, y eso es gasto (`embudo-taller/README.md`, rama del embudo).
- **Botones:** la Cloud API tiene mensajes con botones de respuesta; cuántos entran está **sin confirmar** en la guía oficial. Si Chatwoot los pasa por su API, **sin confirmar**: si no, el bot pide "Responde 1, 2 o 3".
- **Cuenta de inscriptos:** las etiquetas de Chatwoot dan los números del corte de cada día (consultas, QR enviados, comprobantes, pagados) sin sacar nombres ni teléfonos del VPS.

## Costos (en dólares, por mensaje, tarifa de Meta para "Resto de Latinoamérica", donde entra Bolivia)

| Qué | Costo | Fuente |
|---|---|---|
| Contestar dentro de las 24 horas (todo el flujo de arriba) | **1.000 mensajes gratis por número al mes**; después, US$0,0113 cada uno | [Precios de Meta](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing), leída el 3-nov: desde el 1-oct-2026 se cobran, con "a free tier of 1,000 service messages per month". La tarifa, de `docs/decisiones/2026-10-29-mapa-operacion-onia.md` (29-oct) |
| Plantilla de utilidad dentro de las 24 horas | Se cobra desde el 1-oct-2026 (US$0,0113) | Misma página y misma tarifa |
| Quien llega por un anuncio que abre WhatsApp | Gratis mientras dure esa ventana, si se contesta dentro de las primeras 24 horas | Misma página: "The FEP window may remain open for up to 7 days", igual que el mapa de operación |
| Plantilla de marketing fuera de la ventana (por ejemplo, el seguimiento) | US$0,0740 | `docs/decisiones/2026-10-29-mapa-operacion-onia.md`, leído de Meta el 29-oct, tarifa del 1-oct |
| Plantilla de utilidad fuera de la ventana (recordatorio de clase) | US$0,0113 | Misma fuente |
| n8n, Chatwoot, VPS | Ya se pagan; nada nuevo | — |
| Modelo de IA (solo si se suma después) | Por uso: **gasto** | — |

**Cuenta aproximada, sin dato propio.** Si el bot manda unos 8 mensajes por persona (saludo, precio, QR, comprobante, confirmación y alguna pregunta), los 1.000 gratis alcanzan para unas 125 personas al mes. El plan de venta habla de 240 a 600 conversaciones para llegar a 60 pagos (`plan-venta-taller-4-5-6.md`, en los archivos del proyecto): serían unos 1.900 a 4.800 mensajes, o sea entre US$10 y US$43 en el mes, menos lo que entre por anuncios, que es gratis. Además, el mismo número ya manda plantillas de la plataforma, que comparten ese cupo. **Contestar con el bot es gasto** pasado el cupo: lo aprueba Sergio Urcullo antes de encenderlo.

## Lo que tiene que hacer Sergio Urcullo a la mañana

En este orden, porque cada paso depende del anterior:

1. **Ver qué número está conectado (5 minutos).** En [WhatsApp Manager](https://business.facebook.com/wa/manage/phone-numbers/), con el portfolio de ONIA: qué números aparecen, su estado y su calidad. Y en Chatwoot, Configuración → Bandejas: qué número tiene la bandeja de WhatsApp y si tiene un bot elegido en "Configuración del bot". Con una captura alcanza; sin claves en el chat. Si preferís no hacerlo vos, Desarrollo lo puede leer en solo lectura desde la PC.
2. **Elegir:** opción A (bot con Chatwoot y n8n, recomendada si el paso 1 confirma la Cloud API) u opción B (todo a mano en la app hasta después del taller).
3. **Elegir la fecha del taller**, porque el saludo no la tiene.
4. **Hacer el pago de prueba con el QR** de Yolo Pago, que sigue pendiente (`docs/equipo-agentes/negocio.md`).
5. **Si va la A:** en Chatwoot, crear el bot (Configuración → Bots → "Agregar bot", nombre `Bot taller`, con la URL del webhook que deja armada el flujo de n8n) y sacar un token de acceso de Chatwoot para n8n. Los dos son secretos: van a la credencial de n8n y a tu bóveda, como dice `docs/credenciales.md`, nunca al chat ni a Git.
6. **Dar el sí a cargar el flujo en n8n**, primero apagado y probado con tu número, y después a enchufar el bot a la bandeja. Las dos cosas son producción.

## Lo que sigue después de tu sí (lo hacen los agentes)

1. Armar el flujo de n8n en el repo, en esta carpeta, apagado y en modo prueba, como hizo el hilo de los DMs de Instagram.
2. Una revisión independiente del flujo.
3. Prueba con un número tuyo antes de enchufarlo a la bandeja real.

## Fuentes

- [Agent Bots de Chatwoot](https://www.chatwoot.com/hc/user-guide/articles/1677497472-how-to-use-agent-bots), leída el 3-nov.
- [Precios de la plataforma de WhatsApp](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing), leída el 3-nov con las herramientas de desarrollador de Meta.
- [Coexistencia de WhatsApp Business app y Cloud API](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users), leída el 3-nov.
- Apps de Meta, casos de uso y webhooks: herramientas de desarrollador de Meta (`devtools_app_list`, `devtools_app_use_cases`, `devtools_webhook_list`), solo lectura, 3-nov.
- Repo `onia-platform`, rama `master` en el commit `a0488f0`: `lib/contact.ts`, `lib/whatsapp-onia/enviar.ts`, `docs/env-vars-reference.md`, `.claude/skills/onia-deploy/SKILL.md`.
