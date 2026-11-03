# Investigación: qué funciona hoy para vender el taller "Claude de 0 a 100"

3-nov-2026, hilo "Investigar para la campaña del taller" del proyecto Onia (Claude). Lo pidió Sergio Urcullo: "Quiero que investigue funnels, webinars, ads, anuncios que funcionan, tipos de anuncios, gastos, ordenar todo y demas, primero se investiga". Después aclaró que la fecha del taller queda en pausa: "no definimos fecha tenemos tiempo armemos todo primero".

Parte del borrador de campaña de la rama `marketing/meta-ads-textos-3-4-5` (`workshops-comunidad/meta-ads-campana-3-4-5.md`) y del plan de venta de los archivos del proyecto (`venta-taller/plan-venta-taller-4-5-6.md`). No repite lo que ya dicen.

**Estado: investigación, nada decidido.** Lo que dice "Recomiendo" es una opción para Sergio Urcullo. Nada se publica ni se gasta sin su sí.

## Resumen

1. En Bolivia, las academias que anuncian cursos llevan el anuncio a WhatsApp, y ya hay un competidor a **Bs 50** ("Antes Bs 320, ahora Bs 50"). El precio solo ya no alcanza para diferenciarse.
2. En la región, la entrada más repetida para vender cursos de IA es la **clase gratis en vivo con fecha y hora**. El reto de varios días aparece menos.
3. Meta pide variar los anuncios. Según agencias, dos videos de la misma persona que cambian solo el texto pueden contar como uno.
4. No hay ningún dato confiable del costo por conversación en Bolivia. El primer gasto de prueba es para medirlo.
5. Al embudo de ONIA le falta **lo que se vende después del taller**. Sin eso, cada persona deja Bs 50 y nada más.

## Fuentes y sus límites

- **Biblioteca de anuncios de Meta**, por el conector de Meta Ads (`ads_library_search`), 3-nov entre las 04:20 y las 04:40 UTC, solo anuncios **activos**. Búsquedas: "inteligencia artificial curso" en BO (789 anuncios estimados), "taller IA" en BO (282), "ChatGPT curso" en BO (149), "Claude IA clase en vivo" en BO, PE, AR, MX y CO (368), "masterclass gratuita inteligencia artificial" en BO, PE, AR, MX, CO, CL y EC (150) y "reto 5 días inteligencia artificial" en esos 7 países (50). Se miraron 30 a 40 por búsqueda. **El conector da página, título, moneda y fecha. No da el texto completo, el video, el gasto ni el resultado.** Lo que sigue sale solo de los títulos. Que una página tenga muchos anuncios activos no dice que le vaya bien.
- **Páginas web**, citadas en cada punto. Las cifras de webinars son de mercados en inglés, sobre todo B2B: sirven de orden de magnitud, no como dato de Bolivia.
- La página oficial de Meta sobre la fase de aprendizaje ([ayuda de Meta](https://www.facebook.com/business/help/112167992830700/)) no se pudo leer desde la nube porque el sitio bloquea la lectura automática. Lo que se dice de ella va como **sin confirmar**.

## 1. Qué se ve hoy en la competencia

| Qué | Ejemplos (página · título · moneda) | Qué dice para ONIA |
|---|---|---|
| Anuncios a WhatsApp en educación | ISI Estudio (6 anuncios, BOB), Doctor Marketing PRO (BOB) y Primework Solutions (PEN): "Chatea con nosotros". Go Prompts AI (MXN) enlaza a `api.whatsapp.com` | Apoya mantener el destino WhatsApp del borrador |
| Mismo precio que el taller | Datax-Premium (PEN), con bandera de Bolivia: "Análisis de Datos · Antes Bs 320, ahora Bs 50" (5 anuncios) | Bs 50 ya no es único en Bolivia. Hace falta otra diferencia: Claude, en vivo y la demo real |
| Precio alto de referencia | Academi365 Latam (BOB): "14 de noviembre · En La Paz · 100% presencial · 100% práctico · Bs 250 · Últimos 20 cupos" | Contra el presencial, Bs 50 sigue viéndose barato |
| Clase gratis con fecha y hora | Juan Duque Barreto (8 anuncios): "Masterclass GRATUITA 3 de noviembre a las 19:00 H". Konstruedu (5): "Masterclass en vivo gratis". Clara Perez (7): "Clase gratis en vivo · Sábado 7/11, 11 h". CLICK Academy (BOB): "Webinar gratuito · 18 de noviembre". Soyluistoledo (MXN): "12 de noviembre: IA para tu negocio" | En la búsqueda de masterclass, 18 de 40 títulos dicen gratis o gratuita (la búsqueda ya incluía "gratuita", así que el conteo está sesgado). Es un formato muy repetido |
| Masterclass con un problema concreto | Andres Soto (CLP): "Masterclass Gratuita: Automatiza tus Minutas e Informes con IA". PRQ (CLP): "Aprende a escribir proyectos extensos usando la IA" | Un resultado concreto para un público concreto, no "aprendé IA" |
| Reto de varios días | Andremprende (COP, 3 anuncios): "Reto: Crea 5 videos con IA en 7 días" | Existe, pero la búsqueda dio solo 50 anuncios estimados contra 150 de masterclass |
| Escasez | Jorge Ivan Buitrago (USD, 17 anuncios): "Cupos Limitados". Ingeniería - Bolivia (BOB): "Cupos limitados!!". Academi365: "Últimos 20 cupos" | Común. Solo sirve si los cupos son reales (`docs/lecciones.md`, "Datos y fuentes") |
| "Desde cero", "sin código", "pago único" | Educly: "Domina la IA en 28 días, aunque empieces desde cero". IA Paso a Paso (BRL): "15 minutos al día, aunque empieces desde cero · Pago único · sin suscripción". Inside Studios (ARS): "2 clases, 2 entregables · Cero código" | El borrador ya dice "Sin programar". "Pago único" y "2 clases, 2 entregables" son ganchos para sumar |
| Claude en español | Nino Director (USD): "Aprende a usar Claude para tu contenido" | "Claude de 0 a 100" no es el único curso de Claude que se anuncia |
| Muchas versiones del mismo anuncio | Jorge Ivan Buitrago, 17; JUAN-Adss, 11; Juan Duque Barreto, 8; Clara Perez, 7 (en las muestras) | Los anunciantes de cursos cargan varias versiones a la vez. No dice cuánto gastan |

## 2. Embudos que se usan hoy

| Embudo | Cómo va | Para qué sirve | Qué se sabe |
|---|---|---|---|
| **Anuncio a WhatsApp** | Anuncio → chat → QR → pago | Precio bajo y venta por chat. Es el embudo actual | Es lo que usan las academias de Bolivia (sección 1). Sin cifras de conversión públicas |
| **Clase gratis en vivo (webinar o masterclass)** | Anuncio → registro (o WhatsApp) → recordatorios → clase → oferta al final | Vender algo más caro que lo que se puede vender en frío | Asiste un **~40% de los inscriptos** (mediana de 41,6%; otras fuentes dan 38 a 49%) y compra un **5 a 20% de los que asisten**. Fuente: [resumen de mean.ceo](https://blog.mean.ceo/?p=10250), que cita a Livestorm, EasyWebinar y Wave Connect; parte de sus cifras no dicen la fuente. Datos de B2B en inglés |
| **Reto de 3 a 7 días** | Anuncio → grupo → una tarea por día → oferta el último día | Público que ya conoce al creador y temas prácticos | Una guía de cursos dice que convierte mejor que el webinar con público "tibio", por los compromisos chicos de cada día ([course-coach](https://course-coach.pages.dev/courses/challenge-funnels/02-why-challenges-convert/)). Sus cifras son anécdotas sin fuente |
| **Taller pago barato** | Anuncio → pago chico → taller → oferta mayor al final | Filtrar a los que pagan y venderles algo más | Coaches en podcasts dicen que quien paga asiste y presta más atención ([Tiny Marketing, ep. 182](https://tinymarketing.buzzsprout.com/1852915/episodes/18923004-ep182-people-pay-attention-when-they-pay-for-it-rewind-episode-with-annmarie-rose)). Es opinión, **sin cifra** |
| **Contenido con palabra clave** | Reel → "escribí TALLER" → chat | Sin gasto. Ya está en los reels | Sin dato propio |

**Lectura para ONIA:** el taller de Bs 50 ya es un "taller pago barato". Lo que le falta es **la oferta del final** (comunidad, curso grabado, segunda edición o servicio). Las opciones para armar el embudo están en la sección 6.

## 3. Tipos de anuncio

- **Video con cara** (habla a cámara): lo que tiene el borrador.
- **Demo de pantalla**: el Video 2 del borrador.
- **Imagen fija con la oferta** (precio, qué incluye, fecha): no está en el borrador. No pide grabar.
- **Carrusel con el temario**: una tarjeta por clase.
- **Testimonio**: recién después de la primera edición, con permiso de quien lo da.

Qué cuenta como "distinto":

- Meta, por su vocera, el 28-sep-2026: diversificar los creativos es "una buena práctica de siempre", y su consejo es "diversificá, probá y dejá que el sistema optimice". **No dio un número de anuncios.**
- Agencias contaron, sin confirmación de Meta, que dos videos de la misma persona que cambian solo el texto en pantalla cuentan como el mismo anuncio, y que conviene mezclar video e imagen y cambiar el gancho.
- Relevant Audience propone 3 a 5 conceptos distintos. Es su propuesta, no una regla de Meta.

Fuente de los tres puntos: [Relevant Audience, sobre la nota de Marketing Brew](https://www.relevantaudience.com/meta/meta-ad-creative-diversification-same-hook-same-ad/).

## 4. Cómo se arma la campaña en Meta

- **Objetivo y destino:** Interacción, con destino WhatsApp, rendimiento "maximizar conversaciones", ubicaciones automáticas y un mensaje sugerido corto. Unos 4 anuncios por conjunto, que cambien formato y ángulo. Es lo que recomienda una agencia que trabaja con cuentas en Colombia ([Felipe Vergara](https://felipevergara.co/blogs/whatsapp/campanas-de-mensajes-a-whatsapp-en-facebook-ads/)). El borrador ya cumple objetivo, destino, ubicaciones y mensaje corto.
- **Fase de aprendizaje, sin confirmar en la página oficial:** según una agencia que cita a Meta ([JumpFly, 22-jun-2023](https://www.jumpfly.com/blog/what-can-you-learn-from-the-meta-learning-phase/)), un conjunto sale de aprendizaje con unas **50 conversiones** (aquí, conversaciones) desde su último cambio importante. Ese cambio puede ser el público, el creativo, sumar un anuncio, pausar 7 días o más, o mover el presupuesto más del 20%. Con US$10 por día y conversaciones de US$0,30 a 1, un conjunto junta unas 10 a 33 por día: sale de aprendizaje en 2 a 5 días si no se toca. Hay que comprobarlo en la [ayuda de Meta](https://www.facebook.com/business/help/112167992830700/) antes de usarlo para decidir.
- **Consecuencia práctica:** cambiar el título o sumar un anuncio a mitad de campaña puede reiniciar el aprendizaje (sin confirmar, misma fuente). Conviene cargar todas las versiones desde el principio.
- **Destino del público caliente:** la misma agencia arma una segunda campaña para quienes interactuaron con Instagram o Facebook en los últimos 180 días, con mensajes que responden objeciones (cómo se paga, qué pasa si falto). Sirve cuando la página y el Instagram ya tienen movimiento.

## 5. Gastos y presupuesto

### Qué cobra y qué no

| Qué | ¿Cobra? | Fuente |
|---|---|---|
| Anuncios de Meta | Sí, por uso. El borrador pone un tope de US$10 por día | Borrador de campaña |
| App de WhatsApp Business | No. Según la agencia, alcanza hasta unas 100 a 150 conversaciones por día | [Felipe Vergara](https://felipevergara.co/blogs/whatsapp/campanas-de-mensajes-a-whatsapp-en-facebook-ads/) |
| API de WhatsApp (recordatorios automáticos) | Sí, por mensaje. Los precios cambiaron el 1-oct-2026; no se leyó la tabla oficial | Título de [Mercately](https://blog.mercately.com/nuevos-precios-whatsapp-api-octubre-2026/), sin verificar en Meta |
| Clase en vivo por Meet o en vivo de Instagram | **Sin confirmar** en las páginas oficiales. Grabar en Meet gratis no se puede, según la decisión del 1-nov | `docs/decisiones/2026-11-01-oferta-taller-3-4-5.md` |

### Costo por conversación

- La agencia dice que las cuentas que maneja promedian **US$0,10 a 0,12 por conversación**, sin decir el rubro. En otra cifra, unas cuentas de ropa infantil de Colombia, "con anuncios bien optimizados", llegaron a 320 a 346 pesos colombianos por conversación ([Felipe Vergara](https://felipevergara.co/blogs/whatsapp/campanas-de-mensajes-a-whatsapp-en-facebook-ads/)).
- El plan de venta supone **US$0,30 a 1**. Una cuenta nueva, sin historial, va a estar más cerca del rango del plan que del de la agencia. **Sin dato propio, el supuesto del plan sigue siendo el razonable.**

### Cómo calcular el presupuesto

Presupuesto = pagos buscados × costo por conversación ÷ porcentaje de conversaciones que pagan.

Con los supuestos del plan (conversación de US$0,30 a 1; paga 1 de cada 10 a 1 de cada 4), un pago cuesta entre **US$1,20 y US$10** de anuncio. A Bs 12,12 por dólar (cambio del plan del 29-oct), son Bs 15 a Bs 121 por pago, contra Bs 50 de precio. El rango es tan ancho que el anuncio puede ganar o perder plata: **solo la prueba lo dice.**

Recomiendo hacerlo en dos etapas:

1. **Prueba:** US$10 por día durante 3 a 5 días, sin tocar nada, para medir el costo por conversación y el porcentaje que paga.
2. **Escala:** solo si un pago cuesta menos de Bs 25 de anuncio (la mitad del precio, como dice el plan), subir el presupuesto de a poco. La agencia citada por JumpFly dice que menos del 20% por vez no reinicia el aprendizaje (sin confirmar). Cada suba pide el sí de Sergio Urcullo.

## 6. Qué cambiaría del borrador (opciones para Sergio Urcullo)

Como ya no hay fecha, primero va el embudo y después el anuncio.

1. **Recomiendo: decidir la oferta del final del taller antes de anunciar.** Puede ser una comunidad paga, el curso grabado o un servicio. Sin eso, la campaña solo puede aspirar a empatar. Es una decisión de negocio de Sergio Urcullo.
2. **Recomiendo: probar una clase gratis de 30 a 45 minutos como entrada**, con fecha y hora en el anuncio, que cierra con la venta del taller de Bs 50. Es el formato que más se repite en la región. Alternativa: dejar el anuncio directo a WhatsApp y usar la clase gratis solo para los que ya escribieron.
3. **Recomiendo: 4 anuncios distintos desde el principio**, en vez de 2 videos parecidos: el video con cara, la demo de pantalla, una imagen fija con la oferta y un carrusel con el temario. Lo que muestre cada uno tiene que ser real (`docs/lecciones.md`, "Datos y fuentes").
4. **Recomiendo: un resultado concreto en el gancho**, como hacen las masterclass que nombran un problema ("Automatizá tus informes con IA"). Además del precio, porque ya hay otro curso a Bs 50 en Bolivia.
5. **Opción: fecha y hora en el título.** Ahora que no hay apuro, la campaña puede durar lo mismo que la venta, y la fecha no queda vieja.
6. **Opción: "pago único" y "2 clases, 2 entregables"** como ganchos, solo si el temario tiene entregables concretos y comprobados.

## 7. Orden propuesto

1. Sergio Urcullo decide la oferta del final y si hay clase gratis de entrada.
2. Se fija la fecha del taller y, si va, la de la clase gratis.
3. Se arman los 4 anuncios y los textos de WhatsApp de ese embudo.
4. Sergio Urcullo conecta la página con la cuenta que tiene tarjeta. Al 2-nov a las 20:55 UTC no estaba conectada (plan de venta, sección 1).
5. Prueba de 3 a 5 días con US$10 por día, sin tocar nada. Después se decide si se escala.

## 8. Qué falta investigar

- Abrir en la Biblioteca los anuncios de arriba para ver el texto y el video completos. Las URL tienen la forma `https://www.facebook.com/ads/library/?id=<id>`: Datax-Premium `984543564092116`, Academi365 `2045804676095043`, Juan Duque Barreto `974432295184348`, Andremprende `2200869993876611` y Nino Director `1114297771407298`.
- Leer la página oficial de Meta sobre la fase de aprendizaje, desde un navegador.
- Leer la tabla oficial de precios de la API de WhatsApp para Bolivia.
- Medir el costo por conversación real. Es el único dato que vale para Bolivia.
