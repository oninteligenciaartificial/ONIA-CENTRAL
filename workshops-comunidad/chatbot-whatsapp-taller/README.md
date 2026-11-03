# Bot del taller por WhatsApp (n8n + Chatwoot)

3-nov-2026. Arma lo que decidió Sergio Urcullo ese día: el bot contesta en el +591 75414930, que está conectado por la API ("es un número que está conectado mediante API… quiero que lo uses ese", hilo "Planear el chatbot de WhatsApp en n8n", 13:47 UTC). El porqué de cada elección está en el [plan](plan.md).

**Todavía no manda nada.** El flujo se importa **apagado** y en **modo prueba**. Cargarlo en el n8n del VPS y enchufarlo a Chatwoot es producción: pide el sí de Sergio Urcullo.

Archivos de esta carpeta:

- `plan.md`: número, cuentas, costos y por qué se armó así.
- `workflow-n8n.json`: el flujo, para importar en n8n.
- `probar-decisiones.js`: prueba local de las decisiones del bot, sin n8n ni Chatwoot (`node probar-decisiones.js`).

## Cómo funciona, en simple

1. Alguien escribe al 75414930. Meta se lo pasa a Chatwoot, como ya pasa hoy.
2. Con el bot enchufado a la bandeja, la conversación entra como **pendiente** y Chatwoot le avisa a n8n.
3. n8n lee la conversación, decide qué contestar según las reglas de abajo y contesta por la API de Chatwoot.
4. Cuando hace falta una persona, el bot pasa la conversación a **abierta**, y Sergio la ve en la app de Chatwoot como cualquier chat.

Así lo describe la [guía de Agent Bots de Chatwoot](https://www.chatwoot.com/hc/user-guide/articles/1677497472-how-to-use-agent-bots).

## Qué contesta

Cada respuesta es **un** mensaje. Los textos están en el nodo "Textos" y salen de los textos aprobados (`whatsapp-taller-3-4-5-borrador.md`) y del saludo nuevo sin fechas (`workshops-comunidad/embudo-taller/textos.md`, sección 3, en la rama del hilo del embudo, `claude/project-thread-dnmeq4`). Hay un solo cambio frente al texto aprobado: la respuesta sobre las grabaciones decía "el viernes 6, al terminar la última clase", y esa fecha ya no vale, así que quedó `[CUÁNDO SE ENTREGAN]`.

| Qué escribe la persona | Qué hace el bot | Etiqueta |
|---|---|---|
| Primer mensaje, si habla del taller ("taller", "Claude", "curso", "clases", "vengo de la web"…) | Saludo | `taller-consulta` |
| Primer mensaje que no habla del taller (por ejemplo, alguien de la plataforma) | No contesta: pasa el chat a Sergio | — |
| Contesta el saludo (trabajo, estudios, negocio) | Precio | `taller-precio` |
| Dice que sí después del precio ("sí", "dale", "QR", "reservar"…) | QR. Si no hay imagen del QR configurada, manda el texto y pasa el chat a Sergio para que adjunte el QR | `taller-qr-enviado` |
| Manda una foto o un PDF | "Recibí tu comprobante" y pasa el chat a Sergio, que verifica en el banco | `taller-comprobante` |
| Pregunta si queda grabado, si hay devolución, descuento o cuotas, si es por clase, si hay que saber algo antes, o por qué el QR sale a otro nombre | La respuesta de "Preguntas frecuentes" | — |
| Certificado, "quiero hablar con Sergio", "no me interesa", o cualquier otra cosa que no entienda | "Le paso tu consulta a Sergio…" y pasa el chat | — |
| BAJA, "no me escriban", "no gracias"… | No contesta y pasa el chat. La plataforma registra la baja, con las mismas palabras que `lib/whatsapp-onia/baja.ts` de `onia-platform` | — |

**Lo que no hace el bot:** confirmar el pago, mandar el enlace del grupo o de Meet ni escribir primero. Eso lo hace Sergio desde Chatwoot. Para ir más rápido conviene que guarde la sección 5 ("Confirmación") como respuesta guardada de Chatwoot. Escribir primero, como un recordatorio pasadas las 24 horas, pide plantillas, y eso es gasto (plan, "Costos").

### Seguros que trae

- **Modo prueba (`MODO = prueba`):** solo le contesta al número de `TELEFONO_PRUEBA`. A los demás no les contesta y pasa sus chats a "abierto" al instante, para que a Sergio le sigan llegando como hoy.
- **Textos sin completar:** en modo real, un texto con algo `[ENTRE CORCHETES]` no sale. En su lugar va "Le paso tu consulta a Sergio…" y el chat pasa a él. Antes de pasar a real hay que completar `[TITULAR]` en "QR" y en "FAQ_TITULAR", y `[CUÁNDO SE ENTREGAN]` en "FAQ_GRABADO".
- **Solo chats pendientes:** si Sergio ya tomó un chat (está "abierto"), el bot no se mete.
- **Solo la bandeja 5**, la del número de ventas.
- **Si una llamada a Chatwoot falla,** el resto sigue: por ejemplo, el chat igual pasa a Sergio.

## Qué tiene que hacer Sergio Urcullo (unos 20 minutos, desde la PC)

1. **Mirar si la bandeja ya tiene un bot.** En Chatwoot: Configuración → Bandejas → la de WhatsApp del 75414930 → "Configuración del bot". Si ya hay uno elegido, avisá cuál antes de seguir. Una bandeja tiene un solo bot, así que poner este reemplaza al que esté, y eso lo decidís vos. El repo nombra un bot viejo de ventas, `onia-center`, que se armó en el repo viejo y del que no se sabe si sigue andando (`plataforma/2026-10-28-seguir-con-onia-platform.md`).
2. **Crear las 4 etiquetas** en Chatwoot (Configuración → Etiquetas): `taller-consulta`, `taller-precio`, `taller-qr-enviado` y `taller-comprobante`. Agregá también `taller-pagado`, para marcar a mano a quien ya pagó.
3. **Importar el flujo en n8n** (`https://n8n-sergio-n8n.hqdqgh.easypanel.host`, la dirección que figura en `onia-platform`, `docs/env-vars-reference.md`): Workflows → "Import from file" → `workflow-n8n.json`. Queda apagado.
4. **Cambiar la dirección secreta del aviso.** En el nodo "Aviso de Chatwoot", reemplazá `CAMBIAR-POR-UNA-CLAVE-LARGA` por una clave larga al azar. Así nadie de afuera puede hacer hablar al bot. Copiá la "Production URL" que muestra el nodo.
5. **Crear el bot en Chatwoot:** Configuración → Bots → "Agregar bot", con el nombre `Bot taller` y, en la URL del webhook, la del paso 4. Chatwoot le da un token de acceso. Es un secreto: va a tu bóveda (`docs/credenciales.md`) y a n8n, nunca al chat ni a Git.
6. **Cargar el token en n8n:** Credentials → "Add credential" → "Header Auth". Nombre: `Chatwoot bot taller (token)`. En "Name" va `api_access_token` y en "Value", el token. Después elegí esa credencial en los 5 nodos HTTP que la usan ("Leer conversación", "Enviar mensaje", "Enviar QR", "Poner etiquetas" y "Pasar a Sergio"). Va `api_access_token` y no `Authorization: Bearer` porque, según la guía de Chatwoot, el bot puede entrar con `Bearer` recién desde la versión 4.19, y el VPS tenía la 4.12.1 según `HANDOFF_CLAUDE.md` de `onia-platform` ([agregar etiquetas](https://developers.chatwoot.com/api-reference/conversations/add-labels.md)).
7. **Completar el nodo "Configuración":**
   - `CUENTA_ID`: el número que aparece en la dirección de Chatwoot, en `/app/accounts/<número>/`.
   - `TELEFONO_PRUEBA`: el WhatsApp desde el que vas a probar, con el código de país (por ejemplo `591` y tu número). Tiene que ser otro número, no el 75414930.
   - `QR_IMAGEN_URL`: opcional. Una dirección de donde n8n pueda bajar la imagen del QR. Si queda vacía, el bot avisa y vos adjuntás el QR a mano.
8. **Dar el sí para la prueba.** Con ese sí: se activa el flujo, se elige `Bot taller` en la bandeja y probás desde tu número. Mientras tanto, los demás siguen llegando a "abierto" como siempre.

## Cómo se prueba (con `MODO = prueba`)

Desde el número de prueba, en este orden, mirando qué contesta y qué etiqueta aparece en Chatwoot:

1. "Hola, quiero info del taller de Claude" → saludo y `taller-consulta`.
2. "para mi negocio" → precio y `taller-precio`.
3. "sí" → QR y `taller-qr-enviado`.
4. Una foto → "Recibí tu comprobante". El chat pasa a "abierto" con `taller-comprobante`.
5. Desde Chatwoot, devolvé el chat a "pendiente" y escribí "queda grabado?" → la respuesta de grabaciones.
6. "quiero hablar con Sergio" → "Le paso tu consulta…" y el chat pasa a "abierto".
7. Desde otro número, cualquier mensaje → sin respuesta, y el chat aparece "abierto" como hoy.

Si algo no anda, el historial de ejecuciones de n8n muestra en qué nodo falló. Hay cuatro puntos que no se pudieron confirmar sin la prueba real:

- que el token del bot pueda leer la conversación y poner etiquetas (la guía de Chatwoot dice que el token de un bot "can access only bot-permitted APIs");
- que el aviso traiga los adjuntos en `attachments`;
- que la imagen del QR salga bien como adjunto;
- que Chatwoot mande el tipo del mensaje como `incoming`. El flujo también acepta `0`, por las dudas.

## Pasar a real

Con la prueba bien: completar los corchetes de los textos, cambiar `MODO` a `real` y avisar. Pasar a real hace que el bot conteste a la gente: pide el sí de Sergio Urcullo y que se haya elegido la fecha del taller, porque el saludo habla de "la próxima edición".

**Costo:** cada mensaje del bot es un mensaje de servicio. Hay 1.000 gratis por número al mes y después se cobran. La cuenta está en el plan, en "Costos".
