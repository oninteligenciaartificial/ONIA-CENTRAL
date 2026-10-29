# Cómo hacer un anuncio para ONIA

29-oct-2026, por Claude Code, para el [issue #6](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/6). Sale de las fichas de `marca-personal/referentes/` y de los anuncios de talleres que hoy corren en Bolivia ([resumen](../referentes/resumen-2026-10-29.md)).

**Frenos:**
- Publicar un anuncio, gastar en anuncios y generar con Higgsfield, que gasta créditos, piden el sí de Sergio Urcullo con captura.
- Instalar una herramienta nueva, como Remotion, FFmpeg o Whisper, pide su OK antes.
- Esta guía solo explica cómo se hace.

## Lo que funciona, según los referentes
- **Un video vertical, con la cara del autor hablando a cámara y subtítulos palabra por palabra.** Iman Gadzhi tiene unos 490 anuncios de video activos, la mayoría de 1 a 2 minutos. En los que se pudieron ver, habla él a cámara con subtítulos ([ficha](../referentes/iman-gadzhi.md)). En Bolivia, Pankarita usa videos de 21 a 24 segundos ([Biblioteca](https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=BO&media_type=all&search_type=page&view_all_page_id=540883439100967)).
- **Pocos textos y muchos videos.** Iman combina 4 textos con decenas de videos. Pankarita prueba el mismo video con distintos ángulos: 50% de descuento para el segundo que se anota, un mes de soporte, bonos.
- **Trabajar por olas.** Iman prende los anuncios 3 o 4 semanas antes de cada evento y los apaga después. Ninguno de sus anuncios activos lleva meses.
- **En Bolivia el botón abre un chat de WhatsApp,** y el texto trae fecha, horario, precio y cupos (Academi365, Diego Bravo, Pankarita).
- **No prometer ingresos.** Meta le dio de baja a Iman varios de los anuncios con más impresiones de la ola anterior, sin decir el motivo, y sus anuncios prometen ingresos. Meta pide que los anuncios no prometan resultados económicos irreales ([guía de políticas de Meta](https://en-gb.facebook.com/business/m/small-business/ad-policy-guidance)).

## El guion

Para un video de 30 a 60 segundos:

1. **Gancho, de 0 a 3 segundos.** Una sola idea, dicha y escrita en pantalla. Cuatro tipos que usan los referentes:
   - el dolor: "¿Cuántos clientes perdiste por contestar tarde?";
   - la prueba: "Mirá lo que contesta mi asistente a las 11 de la noche";
   - la noticia: "Ahora la IA puede contestar tu WhatsApp con tus precios";
   - el reto: "Te desafío a dejar tu WhatsApp contestando solo esta semana".
2. **El problema con palabras del cliente,** sin culparlo.
3. **Qué cambió:** la IA ya lo hace, y no hace falta programar.
4. **La prueba:** la demo en pantalla o un caso real. Sin datos de clientes.
5. **La oferta:** qué es, cuándo, cuántos cupos y el precio.
6. **El llamado a la acción:** una sola cosa, por ejemplo "Tocá el botón y escribime". En un anuncio que abre WhatsApp, el chat llega con el texto de la plantilla, no con una palabra clave.

## Especificaciones
- **Formato:** 9:16 y 1080 × 1920 px, en .mp4 o .mov ([Meta, buenas prácticas de video en Instagram](https://en-gb.facebook.com/business/help/188534925073536)).
- **Pensado para verse sin sonido:** subtítulos y texto grande en pantalla (misma fuente).
- **Zona segura** ([zona segura de Meta](https://www.facebook.com/business/help/980593475366490)):
  - En 9:16, los bordes de arriba, de abajo y de los costados libres de texto, logos y elementos clave.
  - Si el anuncio lleva un aviso legal, el 40% de abajo libre.
  - Para comprobarlo, en el Administrador de anuncios se prende "Safe zone guardrail", que marca en amarillo la zona segura.
- **Que se sienta como un reel y no como una publicidad** ([Meta, buenas prácticas de video en Instagram](https://en-gb.facebook.com/business/help/188534925073536)).

## Tres formas de hacerlo

### 1. Grabado con el celular y editado a mano (recomendada para empezar)
- Celular en vertical, a la altura de los ojos, con luz de frente y micrófono de solapa o el del celular cerca.
- Una toma por guion. Si sale mal, se repite entera.
- Los subtítulos, con el editor que ya use Sergio Urcullo o con el que trae Instagram.
- **Costo:** cero, más el tiempo de grabar.

### 2. Editado con código
Así editan Erik Taveras, con Claude Code y una skill propia, y Santiago Muñoz, con Claude Code y Remotion o Hyperframes ([ficha de Erik](../referentes/erik-taveras.md), [ficha de Santiago](../referentes/santiago-munoz.md)).

1. **Grabar** el video con el celular, como en la forma 1.
2. **Transcribir** el audio a texto con marcas de tiempo, con un modelo de voz a texto como Whisper, de código abierto.
3. **Armar los subtítulos palabra por palabra** con la palabra que se dice resaltada. Se puede de dos maneras:
   - **Remotion:** video escrito en React. Es gratis para una persona y para empresas con fines de lucro de hasta 3 empleados; si no, hace falta la licencia de empresa. La misma licencia avisa que cambia en la versión 5.0, así que hay que leerla antes de usarla ([licencia de Remotion](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md)).
   - **FFmpeg:** quema un archivo de subtítulos sobre el video.
4. **Sumar** tarjetas con el precio, un contador de cupos y el logo, dentro de la zona segura.
5. **Exportar** las variantes: el mismo video con 3 ganchos distintos sale cambiando solo los primeros 3 segundos.

- **Costo:** cero en licencias mientras ONIA tenga hasta 3 empleados.
- **Hace falta:** el OK de Sergio Urcullo para instalar Remotion, FFmpeg o Whisper en la PC.

### 3. Con Higgsfield
Higgsfield genera video con IA y está conectado a la sesión de Claude. Santiago Muñoz lo usa para el b-roll ([ficha](../referentes/santiago-munoz.md)). Iman Gadzhi es inversor y lo promociona en sus anuncios y en el tráiler de su reto ([ficha](../referentes/iman-gadzhi.md)).

- **Para el b-roll:** planos cortos que acompañan la voz, por ejemplo un celular con un chat de WhatsApp o un negocio de noche, de 5 segundos cada uno. Sirven modelos como Seedance 2.0.
- **Para que "hable" una imagen de Sergio Urcullo:** modelos que mueven los labios con una foto y un audio, como Higgsfield Speak.
  - Conviene usarlo solo para pruebas.
  - La cara real grabada genera más confianza, y es lo que hacen los cuatro referentes.

**Cuánto cuesta**, según el blog oficial de Higgsfield de fines de octubre de 2026, consultado el 29-oct-2026 ([precios de Higgsfield](https://higgsfield.ai/blog/higgsfield-pricing-explained)):

| Qué | Créditos |
|---|---|
| Seedance 2.0, 5 segundos a 720p | 30 |
| Seedance 2.0, 5 segundos a 1080p | 60 |
| Higgsfield Speak 2.0, 5 segundos a 720p | unos 14 |
| Wan 2.5 Speak, 5 segundos a 480p | unos 6 |

Los planes son: Starter, US$15 por mes con 200 créditos; Plus, US$49 con 1.000; Ultra, US$129 con 3.000. Los créditos no se acumulan de un mes al otro, y una generación terminada no se devuelve aunque no guste.

**Ejemplo para un anuncio de 30 segundos:**
- 4 planos de b-roll con Seedance 2.0 a 720p: 4 × 30 = 120 créditos.
- 30 segundos de Speak 2.0 a 720p: 6 × 14 = unos 84 créditos.
- Total: unos 204 créditos por anuncio, sin contar los intentos que salen mal.

La cuenta tenía 432,93 créditos el 29-oct-2026 (herramienta `balance` de Higgsfield). Con ese saldo entran dos anuncios así, no tres. Un solo anuncio ya no entra en los 200 créditos del plan Starter. Además, Higgsfield Speak no está en Starter: el ejemplo pide Plus o Ultra ([precios de Higgsfield](https://higgsfield.ai/blog/higgsfield-pricing-explained)).

## Publicarlo para que abra WhatsApp

Sigue los pasos de Meta ([ayuda de Meta](https://www.facebook.com/business/help/447934475640650)):

1. Tener WhatsApp Business conectado a la página de Facebook.
2. En el Administrador de anuncios, crear una campaña con objetivo Tráfico o Interacción.
3. En "Ubicación de la conversión", elegir "Destinos de mensajes" y marcar WhatsApp. Con Interacción, en "Objetivo de rendimiento" se elige en un menú el que busca más conversaciones.
4. Elegir presupuesto, calendario y público, y subir el video y el texto.
5. Escribir en la plantilla de mensaje el texto que llega armado, por ejemplo "Hola, quiero info del taller".

**Antes de publicar,** Sergio Urcullo ve la vista previa, con captura, y da el sí.

## Lista para revisar antes de pedir el sí
- [ ] El gancho se entiende en 3 segundos y sin sonido.
- [ ] No promete ingresos ni resultados económicos.
- [ ] No muestra datos de clientes reales.
- [ ] Dice cupo, precio y que hay fechas para elegir. Las fechas y el horario de Bolivia van en la respuesta automática de WhatsApp, así el anuncio no ofrece un día que ya pasó.
- [ ] Tiene un solo llamado a la acción.
- [ ] El texto y los logos están dentro de la zona segura.
- [ ] Hay 2 o 3 variantes de gancho para probar.
- [ ] Están anotados el presupuesto y la regla para pausar ([plan de campaña](../../workshops-comunidad/plan-meta-ads-borrador.md)).
