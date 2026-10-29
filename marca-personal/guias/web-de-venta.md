# Cómo hacer una web de venta para un workshop de ONIA

29-oct-2026, por Claude Code, para el [issue #6](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/6). Sale de las secciones "Web de venta, desarmada" de las fichas de `marca-personal/referentes/` y del [resumen](../referentes/resumen-2026-10-29.md).

**Frenos:**
- Publicar la página y cualquier cambio en producción (Vercel, el dominio, la base de datos) piden el sí de Sergio Urcullo.
- Lo mismo los textos que va a leer un cliente, el precio y la política de devolución, que es un tema legal.

## ¿Hace falta una web?
- **Para vender en Bolivia, al principio no.** Los talleres que hoy se anuncian en Bolivia no tienen página: el anuncio abre un chat de WhatsApp, ahí se pasa el temario y se cobra con QR (ver el resumen).
- **Sí hace falta cuando:**
  - se vende fuera de Bolivia;
  - hay que medir qué anuncio trae cada compra;
  - o hay que juntar correos para la próxima edición.

  Erik Taveras y Enrique Rocha venden cada workshop con una página corta. Iman Gadzhi y Santiago Muñoz usan páginas largas, con mucha prueba social.

## La estructura

Toma lo que se repite en las páginas de Erik Taveras ([ficha](../referentes/erik-taveras.md)) y Enrique Rocha ([ficha](../referentes/enrique-rocha.md)). Le suma lo que a ellos les falta para vender a gente que no los conoce: testimonios, preguntas frecuentes y una política de devolución clara, que puede ser "sin devolución" si se dice antes de pagar. Esas tres cosas las tienen las páginas de Iman Gadzhi y Santiago Muñoz.

| # | Sección | Qué dice | De dónde sale |
|---|---|---|---|
| 1 | Cartel | El nombre del taller, la promesa en una línea, la fecha, el horario de Bolivia, la duración, por Meet o Zoom, y el cupo | Erik: cartel con fecha, 2 horas, 25 cupos y Zoom |
| 2 | Botón | "Reservar mi cupo", que lleva al pago o a WhatsApp. Se repite al medio y al final | Iman lo repite 8 veces |
| 3 | El problema | Lo que le pasa al cliente, con sus palabras y sin culparlo | Enrique: "Y ahí te quedaste" |
| 4 | Con qué salís | El resultado concreto del mismo día | Erik: "Con qué sales el mismo día" |
| 5 | Esto no es | Cuatro o cinco cosas que no es: una charla de venta, algo grabado, algo para expertos | Enrique: "Esto NO es" |
| 6 | Temario | De 6 a 8 bloques numerados | Erik y Enrique |
| 7 | Para quién es y qué necesitás | Perfiles, y requisitos que se pueden marcar | Erik: requisitos que se pueden marcar |
| 8 | Quién enseña | Sergio Urcullo y ONIA, en 3 líneas, con una foto | Erik y Enrique |
| 9 | Prueba | Una demo en video o en capturas, y testimonios desde la segunda edición | Santiago: testimonios en video; Iman: casos con número |
| 10 | Precio y qué incluye | El precio de fundador, lo que incluye (grabación, plantilla, grupo de soporte) y el cupo que queda | Enrique: precio con ancla y lo que incluye |
| 11 | Garantía y devolución | En simple: hasta cuándo se devuelve y si se puede pasar el lugar a otra persona | Enrique: 100% hasta 7 días antes, 50% hasta 48 horas antes, se puede ceder el lugar |
| 12 | Preguntas frecuentes | 5 a 8: horario, qué pasa si falto, cómo pago, si sirve para mi rubro | Iman: 9 a 10 preguntas |
| 13 | Botón final | El mismo de arriba | — |

**Tono:** prosa corta, con voseo y sin promesas de plata. Meta pide que la página diga lo mismo que el anuncio ([normas de publicidad de Meta](https://transparency.meta.com/policies/ad-standards)).

## Cobro y formulario
- **En Bolivia:**
  - El QR interbancario es el medio más usado ([PagosYa](https://www.pagosya.com.bo/guias/pasarelas-de-pago-bolivia), 19-oct-2026).
  - Para no revisar capturas a mano, hay pasarelas que generan un QR por pedido y confirman el pago solas. Por ejemplo, PagosYa desde Bs 249 por mes, o EnlazateOnline con 2,15% por cobro más Bs 27 por mes ([EnlazateOnline](https://www.enlazateonline.com/)). Son ejemplos para comparar, no una recomendación: la elección es de Sergio Urcullo.
- **Fuera de Bolivia:**
  - Stripe no está disponible para empresas de Bolivia: no figura en su lista de países ([Stripe](https://stripe.com/global), consultada el 29-oct-2026). Por eso Luma, que cobra con Stripe, no sirve tal cual.
  - Un sitio de terceros dice que Mercado Pago tampoco las acepta, y que PayPal no las da de alta ([The Internet's Money](https://www.theinternets.money/countries/bolivia), consultada el 29-oct-2026). Lo de PayPal queda a confirmar con PayPal.
  - La misma fuente lista algunas plataformas que sí aceptan empresas de Bolivia, como Payoneer, dLocal, Gumroad, Paddle y Polar. Hay que confirmarlo en cada una antes de elegir.
- **Por WhatsApp:**
  - El botón puede abrir un chat con el mensaje ya escrito, con un enlace `https://wa.me/<número>?text=<mensaje>` ([ayuda de WhatsApp](https://faq.whatsapp.com/5913398998672934/?locale=es_LA)).
  - El número va en formato internacional, sin "+", ceros, espacios ni guiones.
  - El mensaje va codificado para URL: los espacios pasan a `%20`, por ejemplo.
- **El formulario pide lo mínimo:**
  - nombre, WhatsApp y rubro del negocio;
  - el rubro sirve para adaptar el taller, como hace Enrique con sus preguntas en Luma.

  Iman pide nombre, correo y teléfono, y suma a cada uno a un grupo de WhatsApp.

## Medición
- **El píxel de Meta y su API de conversiones,** con un evento "Lead" al enviar el formulario y "Purchase" al confirmar el pago. Así se ve qué anuncio vende. Iman y Santiago lo tienen puesto; Erik y Enrique no, porque no anuncian.
- **Una herramienta simple de visitas,** como Umami, que usa Erik.
- **UTM en cada enlace,** para saber de qué video o red llegó cada persona.
- **Frenos:**
  - El token de la API de conversiones es un secreto. Va en la credencial del servicio que lo use, según [`docs/credenciales.md`](../../docs/credenciales.md), y nunca en el código, en el repo ni en el chat.
  - El ID del píxel tampoco va al repo.
  - Medir visitas y datos de quien se inscribe pide un aviso de privacidad en la página. Es un tema legal y lo aprueba Sergio Urcullo.

## Cómo construirla con código
1. **Una página estática** con las 13 secciones. Los datos que cambian en cada edición salen de un archivo: fecha, cupo, precio y si está abierta o en lista de espera.
   - Santiago la tiene en Next.js; Erik, en Django; Iman, en Framer.
   - Una página estática alcanza.
2. **El botón de reserva** lleva al pago, o a WhatsApp con el mensaje armado.
   - Si hay pasarela, su aviso de pago confirmado (webhook) resta un cupo y manda la confirmación.
   - Erik aparta el cupo unos minutos mientras se paga.
3. **Un día antes,** se manda el enlace de Meet o Zoom y el recordatorio por WhatsApp.
   - **A mano,** desde la app de WhatsApp Business, no cuesta.
   - **Automático,** necesita la API de WhatsApp Business. Ahí los mensajes de plantilla que manda la empresa se cobran por mensaje entregado ([precios de WhatsApp](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/)). Es gasto y es un mensaje a clientes: el gasto y el texto los aprueba Sergio Urcullo.
4. **Cuando no hay fecha,** el botón se cambia por una lista de espera, como hace Erik.
5. **El píxel, la API de conversiones y la herramienta de visitas,** como en "Medición".

Publicarla en un dominio de ONIA es producción, así que pide el sí de Sergio Urcullo.

## Lista para revisar antes de pedir el sí
- [ ] La fecha, el horario, el cupo y el precio coinciden con los del anuncio y con la respuesta de WhatsApp.
- [ ] Dice la política de devolución antes de pagar, también si es "sin devolución".
- [ ] No promete ingresos.
- [ ] No muestra datos de clientes sin su permiso.
- [ ] El botón funciona en el celular y abre el pago o WhatsApp.
- [ ] El píxel registra "Lead" y "Purchase".
- [ ] Se ve bien en un celular de pantalla chica.
