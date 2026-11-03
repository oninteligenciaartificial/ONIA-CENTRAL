# DM automático cuando alguien comenta una palabra en un reel

Para el funnel del taller "Claude de 0 a 100". Alguien comenta la palabra clave en un reel de Sergio Urcullo y le llega un mensaje privado (DM) con el link. Armado el 3-nov-2026. **Todavía no manda nada:** el flujo queda apagado y en modo prueba hasta el sí de Sergio Urcullo.

Archivos de esta carpeta:

- `README.md`: esta guía.
- [`workflow-n8n.json`](workflow-n8n.json): el flujo de n8n, para importar.

## Palabras que aparecen acá

- **API:** la puerta oficial por la que un programa le pide cosas a Instagram, como "dame los comentarios de este reel" o "mandale este mensaje a esta persona". Sin API, habría que hacerlo a mano.
- **Token (de acceso):** una clave larga que demuestra que el programa tiene permiso de Sergio para usar su cuenta. Es un secreto: va en n8n, nunca en el chat ni en Git.
- **Webhook:** un aviso que Instagram le manda a n8n apenas pasa algo ("acaban de comentar"). Es instantáneo.
- **Consulta cada X minutos (polling):** lo contrario del webhook. n8n pregunta cada 3 minutos "¿hay comentarios nuevos?". Tarda un poco más, pero no depende del aviso.
- **Respuesta privada (private reply):** la función oficial de Instagram para mandar **un** DM a quien comentó, usando el comentario. Le llega a la bandeja de entrada si sigue a la cuenta, o a "Solicitudes" si no.
- **App de Meta:** el registro, en developers.facebook.com, que le da permisos a un programa para usar la API.
- **Revisión de la app (App Review):** cuando Meta revisa la app antes de darle permisos amplios (acceso avanzado).

## Qué vía se eligió y por qué

| Vía | A favor | En contra |
|---|---|---|
| **A. API oficial + n8n, consultando cada 3 minutos (recomendada)** | Gratis. Usa n8n, que ya corre en el VPS. La app de Meta ya existe y está lista (ver abajo). No necesita la revisión de Meta. Todo queda en el repo para Codex. | El DM llega hasta 3 minutos después, no al instante. Que mande DMs a gente que no tiene rol en la app se comprueba recién en la prueba real (ver "Riesgo principal"). |
| B. API oficial + n8n con webhook | DM al instante. | Meta pide **acceso avanzado** para mandar avisos de comentarios, y eso pide la revisión de la app, que lleva días y no está asegurada para el viernes 6. |
| C. ManyChat | Se arma en una hora, sin código. Es socio oficial de Meta, así que anda desde el primer día. | Es otra cuenta más, fuera del repo. El plan gratis tiene topes que no pude confirmar en la página oficial (la página de ManyChat no cargó): un sitio de terceros dice 25 contactos activos por mes y "Powered by Manychat" en el primer mensaje. El plan pago es **gasto** (US$29 a US$39 por mes, según la misma fuente, sin confirmar). |

**Recomendación:** A para el viernes, y C solo como plan de emergencia si la prueba de A falla y no hay tiempo de arreglarlo. B queda para después: se pide la revisión de la app y, si Meta la aprueba, se pasa al webhook.

### Riesgo principal de la vía A

La guía oficial dice dos cosas que hay que comprobar en la práctica:

- Para una app que usa solo una cuenta propia, alcanza el **acceso estándar** y no hace falta la revisión ([App Review for Instagram API](https://developers.facebook.com/documentation/instagram-platform/app-review), tabla "Development scenarios": "My app is only for a business I own or manage … Standard Access … Not required").
- Pero también avisa que, con acceso estándar, "some features might not work properly until your app has been granted Advanced Access" ([Overview de Instagram Platform](https://developers.facebook.com/docs/instagram-platform/overview/), "Advanced Access"), y que los avisos de comentarios por webhook piden acceso avanzado ([Webhooks](https://developers.facebook.com/docs/instagram-platform/webhooks/): "Advanced Access is required to receive comments and live_comments webhook notifications").

Por eso este flujo no usa webhook, y por eso la prueba con una segunda cuenta (paso 4 de "Cómo se prueba") es obligatoria antes del viernes: comprueba que el DM le llega a alguien que no tiene ningún rol en la app.

## Qué ya está (comprobado el 3-nov-2026 con las herramientas de desarrollador de Meta, solo lectura)

- Sergio Urcullo es administrador de 7 apps de Meta. La que sirve es **"OnIA Social API"**:
  - está en modo **Live** (publicada);
  - tiene el caso de uso **"Manage messaging & content on Instagram"**;
  - es del portfolio de negocio que pasa la **verificación del negocio**, y tiene política de privacidad cargada;
  - no tiene webhooks ni permisos con acceso avanzado.
- Las otras seis no hacen falta para esto. "OnIA Chatwoot" también tiene el caso de uso de Instagram, pero está en modo desarrollo.

## Qué tiene que hacer Sergio Urcullo (unos 15 minutos, desde la PC)

Con el método nuevo de Meta, "Instagram API with Instagram Login", **no hace falta unir Instagram a una página de Facebook.**

1. **Cuenta profesional y pública.** En la app de Instagram, en la cuenta de marca personal: Configuración → "Tipo de cuenta y herramientas" → tiene que decir cuenta profesional (de creador o de empresa). Y la cuenta tiene que ser pública, porque Meta lo pide ([Webhooks](https://developers.facebook.com/docs/instagram-platform/webhooks/): "The Instagram professional account that owns the media objects must be public").
2. **Permitir los mensajes de herramientas.** En la app de Instagram: Configuración → "Mensajes y respuestas a historias" → "Controles de mensajes" → "Herramientas conectadas" → activar "Permitir acceso a los mensajes". Sin eso, la API no puede mandar DMs ([Instagram Messaging, Getting Started](https://developers.facebook.com/documentation/business-messaging/instagram-messaging/get-started): "Instagram Settings > Messages and story replies > Message controls > Connected Tools > toggle Allow Access to Messages").
3. **Sacar el token.** En [developers.facebook.com/apps](https://developers.facebook.com/apps) → "OnIA Social API" → "Instagram" → "API Setup with Instagram login" → "Generate access tokens" → agregar la cuenta de Instagram, entrar con ella y aceptar los permisos ([Create an app](https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/create-a-meta-app-with-instagram), paso "Generate access tokens", que nombra "Instagram > API Setup with Instagram login" y pide que la cuenta sea pública). Si el panel muestra otros nombres, buscá "API Setup with Instagram login" dentro de los casos de uso de la app. Copiá el token apenas aparezca: que se muestre una sola vez está **sin confirmar** en la guía oficial, así que mejor no cerrar la ventana antes de guardarlo.
   - Los permisos que tiene que pedir son `instagram_business_basic` e `instagram_business_manage_comments` ([Private Replies](https://developers.facebook.com/docs/instagram-platform/private-replies/), "Requirements"), y `instagram_business_manage_messages`, el permiso de mensajes de Instagram Login ([Overview de Instagram Platform](https://developers.facebook.com/docs/instagram-platform/overview/), "Features and permissions").
4. **Guardar el token en n8n, no en el chat.** En el n8n del VPS: "Credentials" → "Add credential" → "Header Auth" → nombre `Instagram ONIA (token)`, en "Name" va `Authorization` y en "Value" va `Bearer ` (con espacio) seguido del token. También guardalo en tu bóveda, como dice [credenciales](../../../docs/credenciales.md).
5. **Anotar en el calendario: renovar el token antes de 60 días.** Un token largo dura 60 días y se renueva ([Refresh Access Token](https://developers.facebook.com/docs/instagram-platform/reference/refresh_access_token/): "Refreshed tokens are valid for 60 days").
6. **Tener una segunda cuenta de Instagram para probar**, que no sea administradora de la app. Puede ser una secundaria tuya o la de alguien de confianza.

## Qué hace el flujo, nodo por nodo

1. **Cada 3 minutos:** arranca solo, cuando el flujo está activo.
2. **Configuración:** todo lo que se cambia sin tocar el resto (tabla de abajo).
3. **Leer mi cuenta:** pide el ID y el usuario de la cuenta, para no responderle a Sergio cuando él mismo comenta.
4. **Traer publicaciones:** las últimas 3 publicaciones o reels.
5. **Traer comentarios:** hasta 50 por publicación, los más nuevos primero ([Comments](https://developers.facebook.com/docs/instagram-platform/instagram-graph-api/reference/ig-media/comments/): "Returns a maximum of 50 comments per query").
6. **Elegir a quién responder:** se queda con los comentarios que tienen la palabra clave sola (no cuenta "ia" dentro de "familia"), sin importar mayúsculas ni acentos. Descarta los propios, los anteriores a `SOLO_DESDE` y los que tienen casi 7 días, porque Meta deja responder solo dentro de 7 días ([Private Replies](https://developers.facebook.com/docs/instagram-platform/private-replies/), "Limitations"). Recuerda los que ya vio, para no mandar dos veces.
7. **¿Enviar de verdad?:** según el `MODO`, va a "Enviar DM" o a "Solo simulado (no se envió nada)".
8. **Enviar DM:** la respuesta privada oficial, `POST https://graph.instagram.com/v25.0/<ID de la cuenta>/messages`, con `recipient.comment_id` y `message.text` ([Private Replies](https://developers.facebook.com/docs/instagram-platform/private-replies/), "Send a Private Reply"). Si uno falla (token vencido, demasiadas consultas o falta de permisos), sigue con los demás, y el error queda en la salida del nodo "Enviar DM", no como ejecución fallida. **Ese comentario no se vuelve a intentar:** el flujo ya lo dio por visto. Por eso, los primeros días hay que mirar la salida de "Enviar DM" en el historial de ejecuciones.

### Configuración (nodo "Configuración")

| Campo | Qué es | Valor hoy |
|---|---|---|
| `MODO` | `prueba`: no manda nada, solo muestra qué mandaría. `solo_testers`: manda solo a los usuarios de `TESTERS`. `real`: manda a todos. | `prueba` |
| `PALABRAS_CLAVE` | La palabra que hay que comentar. Si son varias, separadas por coma. | Pendiente: sale de la investigación de funnels del hilo de la campaña. |
| `TEXTO_DM` | El mensaje. Puede usar `{usuario}` y `{link}`. | Pendiente, igual que la palabra. Lo aprueba Sergio Urcullo, porque lo ve un cliente. |
| `LINK` | El link al que lleva el DM. | Pendiente. |
| `TESTERS` | Usuarios de prueba, separados por coma, sin `@`. | vacío |
| `SOLO_DESDE` | Fecha y hora desde la que cuentan los comentarios, para no contestarle de golpe a los viejos. Formato `2026-11-06T00:00:00-04:00` (hora de Bolivia). Si queda vacío o con otro formato, el flujo se corta con un error, para no descartar comentarios en silencio. | 6-nov, 00:00 |
| `CANTIDAD_PUBLICACIONES` | Cuántas publicaciones recientes mira. | 3 |
| `MAX_POR_CORRIDA` | Cuántos DMs como mucho cada 3 minutos; el resto va en la vuelta siguiente. | 20 |
| `API_VERSION` | Versión de la API de Meta. | `v25.0` |

Ojo: el flujo recuerda también los comentarios que solo simuló. Al pasar de `prueba` a `real`, poné `SOLO_DESDE` en la hora del cambio, para que quede claro desde cuándo cuenta.

## Cómo se prueba (antes del viernes 6, con el sí de Sergio Urcullo en cada paso que toca producción)

Importar el flujo al n8n del VPS es tocar producción, así que pide el sí de Sergio Urcullo (`AGENTS.md`, "Lo aprueba Sergio Urcullo, siempre"). Lo hace Desarrollo.

1. **Importar:** en n8n, "Workflows" → "Import from File" → `workflow-n8n.json`. Queda **apagado**. En los 4 nodos de Instagram ("Leer mi cuenta", "Traer publicaciones", "Traer comentarios", "Enviar DM"), elegir la credencial `Instagram ONIA (token)`.
   - El archivo no se pudo probar importándolo en un n8n de verdad desde la nube: el paquete de n8n no se pudo instalar ahí. La lógica del nodo "Elegir a quién responder" sí se probó, con comentarios inventados (palabra con acento y mayúsculas, "familia", comentario propio, comentario viejo, tester y no tester, `SOLO_DESDE` inválido).
2. **Prueba en seco:** completar `PALABRAS_CLAVE` y poner `SOLO_DESDE` en una fecha de ayer. Con `MODO` en `prueba`, apretar "Test workflow". Tiene que mostrar en "Solo simulado" los comentarios con la palabra y **no mandar nada**. Si "Leer mi cuenta" da error, el token o sus permisos están mal.
3. **Probar con la segunda cuenta:** desde la segunda cuenta, comentar la palabra en un reel. Poner su usuario en `TESTERS` y `MODO` en `solo_testers`. Apretar "Test workflow". Le tiene que llegar el DM a la segunda cuenta, en "Solicitudes" si no sigue a Sergio.
4. **Si el paso 3 anduvo, la vía A está comprobada.** Si "Enviar DM" da un error de permisos, se pasa a la vía C (ManyChat) para el viernes, y se pide la revisión de la app para más adelante.
5. **Activar:** con el sí de Sergio Urcullo al texto y al link, `MODO` en `real`, `SOLO_DESDE` en la hora del lanzamiento, y se activa el flujo (interruptor "Active"). Mientras está activo, recuerda los comentarios ya vistos; en las corridas a mano ("Test workflow") no los recuerda.

## Límites que hay que conocer

- **Un solo DM por comentario.** Para seguir hablando, la persona tiene que contestar, y después hay 24 horas para responderle ([Private Replies](https://developers.facebook.com/docs/instagram-platform/private-replies/), "Limitations"). Por eso el DM tiene que llevar el link y una pregunta que invite a contestar.
- **Hasta 3 minutos de demora.** Si hace falta que sea instantáneo, es la vía B, con la revisión de Meta.
- **Cuántas consultas por día:** cada vuelta hace 5 llamadas (cuenta, publicaciones y 3 comentarios), unas 2.400 por día. Meta pone topes de consultas por cuenta; cuánto da para esta cuenta está **sin confirmar** (no se leyó la página oficial de topes). Si n8n muestra errores de "rate limit", subir a 5 minutos o bajar `CANTIDAD_PUBLICACIONES`.
- **No mira comentarios de anuncios.** Los comentarios de un anuncio son de otro tipo y no salen por esta vía ([Comments](https://developers.facebook.com/docs/instagram-platform/instagram-graph-api/reference/ig-media/comments/), "Non-Organic Comments").
- **Solo comentarios principales.** Las respuestas a otros comentarios no entran.

## Qué falta, y quién lo hace

| Qué | Quién |
|---|---|
| Pasos 1 a 6 de "Qué tiene que hacer Sergio Urcullo" | Sergio Urcullo |
| Palabra clave, texto del DM y link | El hilo de la campaña (investigación de funnels); lo aprueba Sergio Urcullo |
| Importar a n8n, probar y activar | Desarrollo, con el sí de Sergio Urcullo |
| Pedir la revisión de la app para el webhook (vía B) | Más adelante, si hace falta el DM instantáneo |
