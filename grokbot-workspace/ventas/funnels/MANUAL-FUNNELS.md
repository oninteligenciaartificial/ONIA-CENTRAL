# Manual de funnels, webinars y lanzamientos (para OnIA)

*Versión 1, 1/11/2026. Es un borrador de estudio: no se publica nada.*
Cada idea lleva su código de fuente **[F#]** o **[I#]** (detalle y links en `FUENTES.md`). Si una idea es una recomendación propia de OnIA sin fuente externa, dice **(criterio OnIA)**.

---

## 1. Glosario simple

| Palabra | Qué significa, en simple | Ejemplo con OnIA |
|---|---|---|
| **Funnel (embudo de venta)** | Es el camino que recorre una persona desde que te descubre hasta que te compra. Se llama embudo porque en cada paso quedan menos personas [F1] | Ve un reel → escribe "TALLER" por WhatsApp → recibe el QR → paga → entra al taller |
| **Lead (interesado)** | Una persona que te dio un dato de contacto o te escribió, pero todavía no compró [F5] | Alguien que escribe al WhatsApp preguntando por el taller |
| **Lead magnet (imán de interesados)** | Algo gratis y útil que regalas a cambio del contacto [F5] | Una guía de "10 prompts de Claude para tu negocio", o el diagnóstico gratis |
| **Tripwire** | Un primer producto muy barato. Sirve para que el interesado pase a ser cliente: quien compra una vez compra más fácil la segunda [F1] | El taller de Bs 50 cumple esa función |
| **Escalera de valor (*value ladder*)** | Tus productos ordenados de menor a mayor precio y valor. Cada escalón lleva al siguiente [F1] | Contenido gratis → taller → diagnóstico → ONIA Platform → sistema a medida |
| **Oferta** | Todo lo que recibe el cliente: producto, bonos, garantía, precio y plazo. No es solo el precio [F4] | 3 clases en vivo + grabaciones hasta el 7/12 + grupo de WhatsApp |
| **Ecuación de valor** | Lo que algo "vale" para el cliente sube con el resultado que sueña y con la seguridad de lograrlo. Baja con el tiempo que tarda y el esfuerzo que le pide [F4, F25] | "Arrancas desde cero y practicas en clase" baja el esfuerzo percibido |
| **Hook – Story – Offer** | Un gancho que frena el scroll, una historia que sube el valor y una oferta clara [F1, F20] | Reel: gancho de 3 segundos → historia corta → "escribe TALLER" |
| **Webinar** | Una clase en vivo por internet que enseña algo y termina con una oferta [F2] | Las clases del taller por Google Meet |
| **Perfect Webinar** | El guion de webinar de Brunson: una gran idea, 3 secretos que rompen creencias falsas y una oferta "apilada" [F2] | Ver la sección 3 |
| **Stack (apilado)** | Mostrar uno por uno todo lo que incluye la oferta antes de decir el precio [F2] | "Te llevas 1… 2… 3…" y recién ahí el precio |
| **VSL (video de ventas)** | Un video que hace el trabajo de una carta de venta [F10] | Un video de 2-3 min del diagnóstico para mandar por WhatsApp |
| **Lanzamiento** | Vender algo en una ventana corta: se calienta antes con contenido gratis, se abre la venta unos días y se cierra [F3] | El taller tiene fecha de inicio y un precio que sube: es un lanzamiento chico |
| **Challenge (reto) de 5 días** | 5 días seguidos de clases o tareas gratis (o baratas) que terminan en una oferta [F27] | "5 días usando Claude en tu negocio" |
| **Show-up rate (asistencia)** | El % de inscritos que de verdad se conecta en vivo [F11] | De 40 inscritos, ¿cuántos entran el 3/11? |
| **Tasa de conversión** | El % de personas que pasa de un paso al siguiente [F14] | De 100 que escriben, ¿cuántos pagan? |
| **Ventana de 24 h** | En WhatsApp Business (API), puedes escribir libre solo dentro de las 24 h desde el último mensaje del cliente. Después, solo con plantillas aprobadas [F29, F33] | Por eso el seguimiento sale unas 20 h después |
| **Plantilla (WhatsApp)** | Un mensaje que Meta aprueba antes. Las categorías son marketing, utilidad, autenticación y servicio [F31] | `pago_pendiente` (utilidad), `seguimiento` (marketing) |
| **Opt-in (consentimiento)** | Cuando la persona acepta recibir tus mensajes. Sin eso no puedes escribirle [F29] | Quien escribió primero, o marcó "sí" en el formulario |
| **CTWA (Click-to-WhatsApp)** | Un anuncio de Meta que, al tocarlo, abre un chat de WhatsApp contigo [F30] | Anuncio del taller → chat con el bot |
| **Etiqueta (Chatwoot)** | Una marca que pones a cada chat para saber en qué paso está [F32] | `taller-qr-enviado`, `diag-agendado` |
| **Cierre** | El momento de pedir la decisión de compra [F2] | "¿Arrancamos la prueba esta semana?" |
| **Urgencia / escasez** | Razones reales para decidir ahora (fecha, cupos). Si son falsas, es engaño y puede ser sancionado [F4, F36] | "Bs 50 hasta el 1/11 a las 23:59" es real; "últimos 3 cupos" sin contarlos, no |

---

## 2. Tipos de funnel y cuándo usar cada uno

Los nombres vienen de *DotCom Secrets* [F1, F21]. La columna "Cuándo te conviene" es criterio OnIA aplicado al libro.

| Funnel | Cómo funciona | Cuándo te conviene | Costo para armarlo en Bolivia |
|---|---|---|---|
| **1. Lead funnel (captar contactos)** | Regalas algo (guía, plantilla, diagnóstico) → la persona deja su WhatsApp → le das seguimiento [F1, F5] | Cuando nadie te conoce todavía y necesitas una lista de gente interesada | Casi cero: un PDF + un formulario (Cal.com o Google Forms) + WhatsApp |
| **2. Tripwire (producto barato de entrada)** | Producto de bajo precio → después se ofrece el siguiente escalón [F1] | Para que alguien te compre por primera vez y pierda el miedo | Bajo: el taller de Bs 50/70 ya cumple esta función |
| **3. Webinar funnel** | Inscripción → recordatorios → clase en vivo que enseña → oferta al final [F1, F2] | Para vender algo de precio medio o alto que hay que explicar, como un servicio o una plataforma | Bajo: Google Meet gratis + WhatsApp |
| **4. Lanzamiento (Product Launch)** | 3 o 4 contenidos gratis durante varios días → se abre la venta → se cierra en una fecha real [F3, F23] | Cuando tienes una audiencia (aunque sea chica) y un producto con fecha de inicio | Bajo en plata, alto en tiempo: hay que producir contenido |
| **5. Challenge de 5 días** | 5 días de tareas cortas en un grupo → la última sesión hace la oferta [F27] | Para crear comunidad y hábito y vender un programa o una membresía | Bajo: un grupo de WhatsApp + 5 videos o lives |
| **6. High-ticket (aplicación + llamada)** | Formulario de filtro → llamada → propuesta [F1] | Para ventas caras (Bs 390+/mes) que se cierran 1 a 1 | Bajo: formulario + Meet + tiempo de Sergio |
| **7. VSL** | Anuncio o mensaje → video de ventas → botón de compra o de WhatsApp [F10] | Cuando no tienes tiempo de hacer webinars en vivo y quieres que un video venda solo | Medio: hay que grabar y editar bien el video |
| **8. Funnel por WhatsApp (LatAm)** | Reel o anuncio CTWA → chat (bot + persona) → QR → comprobante → confirmación [F29, F30, I1] | Casi siempre en Bolivia, porque la gente compra hablando, no en una web de checkout | Bajo: ya existen el bot (n8n) y Chatwoot |

**Regla de oro (criterio OnIA basado en F1):** empieza con un solo funnel y hazlo funcionar antes de abrir otro. Para OnIA, el 8 (WhatsApp) es la base, y el 2, el 3 y el 6 se montan encima.

### Las 4 formas de conseguir interesados (Core Four de Hormozi) [F5, F26]

| | Uno a uno | Uno a muchos |
|---|---|---|
| **Gente que ya te conoce (caliente)** | Escribirles en persona (contactos, ex alumnos, chats en espera) | Publicar contenido (reels, estados de WhatsApp) |
| **Gente que no te conoce (fría)** | Escribir en frío (DM a negocios, con respeto y sin spam) | Anuncios pagados (Meta CTWA) |

Con poco presupuesto, el orden lógico es: primero los contactos calientes uno a uno (es gratis y es donde más rápido aparece la venta), después contenido y recién después anuncios **(criterio OnIA)**.

---

## 3. Estructura de un webinar que vende (minuto a minuto)

**De dónde sale:** el orden de los bloques es el de *Perfect Webinar* de *Expert Secrets* [F2, F22]. **Los minutos son una propuesta de OnIA (criterio OnIA):** no se encontró una fuente primaria con tiempos por bloque. Un newsletter de Amy Porterfield recomendaría arrancar la oferta cerca del minuto 45, pero no está verificado [F28].

**Datos que ayudan a diseñarlo:** en promedio la gente ve 26 minutos, alrededor del 38 % del webinar [F11]. Por eso lo valioso tiene que estar al principio y la oferta no puede quedar para el minuto 80.

### Webinar de 60 minutos (modelo base)

| Minuto | Bloque | Qué haces | Por qué [fuente] |
|---|---|---|---|
| 0-3 | **Bienvenida y gancho** | Saludas, dices qué se van a llevar hoy y pides que se queden hasta el final porque hay algo especial. Pregunta para el chat: "¿Desde qué ciudad nos ves?" | Hacer que la gente participe desde el primer minuto [F2] |
| 3-6 | **La gran idea (gran dominó)** | La UNA creencia que, si la persona la acepta, hace que todo lo demás caiga solo. Ej.: "Usar IA no es para programadores: es para quien sabe pedir bien" | Brunson: si tumbas esa ficha, las demás objeciones caen [F2, F22] |
| 6-12 | **Tu historia (Epiphany Bridge)** | Cómo descubriste esto: el problema que tenías, el momento en que lo entendiste y qué cambió. Corta y real, sin inventar cifras | La historia hace sentir lo que una lista de datos no [F2] |
| 12-22 | **Secreto 1: el vehículo** | Rompe la creencia "esto no funciona" con una demo en vivo | Los 3 secretos atacan 3 creencias falsas: el método, uno mismo y lo externo [F2] |
| 22-32 | **Secreto 2: creencia interna** | Rompe "yo no puedo" con alguien sin experiencia haciéndolo, o con un paso que todos hacen en vivo | [F2] |
| 32-40 | **Secreto 3: creencia externa** | Rompe "no tengo tiempo, plata o herramientas" mostrando que alcanza con un celular y una cuenta gratis | [F2] |
| 40-42 | **Transición** | "¿Quieres que te ayude a aplicar esto en tu caso?" Pides permiso antes de presentar la oferta | Pasar de enseñar a ofrecer sin un corte brusco [F2] |
| 42-52 | **Stack (oferta apilada)** | Muestras cada parte de la oferta, una por una, con lo que resuelve. Al final, el resumen de todo junto. Recién ahí el precio | Apilar sube el valor percibido antes de decir el número [F2, F4] |
| 52-55 | **Garantía, urgencia real y llamado** | Lo que reduce el riesgo (prueba gratis, garantía si existe) + fecha límite real + UN solo paso ("escribe DIAGNÓSTICO al WhatsApp") | Reducir riesgo y dar razones honestas para decidir hoy [F4, F36] |
| 55-60 | **Preguntas y cierres de prueba** | Respondes dudas y repites el llamado cada 2 o 3 respuestas | Las preguntas son objeciones: cada respuesta es un mini cierre [F2] |

### Antes y después del webinar (criterio OnIA, usando los datos de F11)
- **Promoción:** el 49,7 % de los inscritos se suma en los últimos 7 días y el 15 %, el mismo día [F11]. La semana previa y el mismo día son los momentos clave para promocionar.
- **Día:** el martes tuvo la mejor asistencia en la muestra de Livestorm (51,7 %) [F11]. El taller de OnIA arranca un martes (3/11).
- **Recordatorios:** en salud, un recordatorio bajó la inasistencia de 26 % a 19 % [F18]. Es otro contexto, pero apoya mandar un recordatorio el día anterior y otro 1 h antes, como plantilla de *utilidad* [F31].
- **Repetición:** manda la grabación solo a quienes la pidieron o están inscritos y dale fecha de vencimiento real (en OnIA: 7/12).

---

## 4. Lanzamientos (Jeff Walker, *Launch*) [F3, F6, F23, F24]

**Idea central:** en vez de "abrir la venta y esperar", calientas a la audiencia con contenido gratis y útil durante varios días, abres la venta por un tiempo corto y la cierras de verdad.

| Fase | Qué es | Cuánto dura (referencia) | Versión OnIA de bajo presupuesto |
|---|---|---|---|
| **Pre-prelanzamiento** | Anticipas que viene algo y preguntas qué le interesa a tu audiencia [F3] | Días o semanas | Una encuesta en estados de WhatsApp: "¿Qué te gustaría que la IA te resuelva?" |
| **Prelanzamiento (PLC 1-3)** | 3 contenidos gratis: (1) **la oportunidad**: por qué esto importa ahora; (2) **la transformación**: cómo se ve el cambio; (3) **la experiencia de tenerlo**: cómo sería usarlo [F3, F23] | Varios días, uno por contenido | 3 reels o lives de 10 min, uno por día |
| **Apertura del carrito** | Se abre la venta con la oferta completa [F3] | Una ventana corta. Un resumen de terceros habla de 5 a 7 días (sin verificar) [F23] | Un mensaje al grupo/lista + el link de WhatsApp |
| **Cierre del carrito** | La venta se cierra de verdad en la fecha anunciada [F3] | El último día concentra mucha venta, por la urgencia real | "Cierra el domingo a las 23:59" y se cumple |
| **Seed launch** | Un lanzamiento chico para validar antes de tener el producto completo: vendes primero y creas mientras enseñas [F3] | — | **El taller de noviembre es justamente un seed launch** |

**Disparadores mentales que usa Walker** [F3, F24]: autoridad, reciprocidad (das valor gratis primero), anticipación (fechas que la gente espera), comunidad (la gente participa junta), escasez real y prueba social. Aquí todos tienen que ser **honestos**: nada de testimonios ni cupos inventados [F36, I1].

**Cifras de Walker:** sus números (por ejemplo, "casi 4 millones de dólares en un día" en 2009) son autoreportados y de un solo caso [F7]. No sirven como meta ni como promesa.

### Challenge de 5 días (variante del lanzamiento) [F27]
Estructura típica (orden variable según la fuente): días 1 a 4 con una tarea concreta por día y un pequeño logro diario; día 5 con un resumen y la oferta. No se encontraron datos públicos medidos de cuánto vende un challenge, así que **no hay benchmark**.

---

## 5. La oferta (Hormozi, *$100M Offers*) [F4, F25]

**Ecuación de valor:**
> Valor = (Resultado soñado × Probabilidad percibida de lograrlo) ÷ (Tiempo hasta el resultado × Esfuerzo y sacrificio)

Cómo usarla sin bajar el precio:
- **Subir el resultado soñado:** habla del resultado ("te vas con tu sistema armado"), no de la actividad ("charla de 45 min") [I2].
- **Subir la probabilidad:** muestra una demo en vivo, da una garantía o una prueba gratis (ONIA Platform: 7 días).
- **Bajar el tiempo:** un resultado rápido ("en la clase 1 ya haces X").
- **Bajar el esfuerzo:** "te lo dejamos configurado", "si sabes mandar un WhatsApp, puedes".

**Grand Slam Offer:** una oferta tan completa que comparada con otras parece una locura decir que no. Se arma con el problema → las soluciones → bonos con nombre → garantía → urgencia y escasez reales → un nombre atractivo [F4].

---

## 6. Métricas y benchmarks

**Advertencia:** casi todos los benchmarks públicos son de EE. UU. o Europa y de empresas que venden la herramienta. Sirven para orientarse, no como meta. La mejor referencia son **tus propios números** de cada semana.

| Métrica | Fórmula | Benchmark público | Fuente |
|---|---|---|---|
| Asistencia en vivo | asistentes ÷ inscritos | 47,7 % (martes: 51,7 %) | F11 (vendedor) |
| Asistencia en vivo o grabada (B2B) | — | 57 % | F13 (secundaria, sin verificar) |
| Minutos vistos | promedio de minutos por asistente | 26 min (~38 % del webinar) | F11 |
| Conversión de landing | conversiones ÷ visitas | Mediana de 6,6 % (de 3,8 % a 12,3 % según industria) | F14 (primaria) |
| Apertura de email | aperturas ÷ entregados | 35,63 % (inflado por Apple Mail) | F15 |
| Apertura de WhatsApp | leídos ÷ entregados | 90-98 % según blogs de proveedores; **no hay dato oficial de Meta** | F17 (vendedor, sin verificar) |
| Velocidad de respuesta | minutos hasta la 1.ª respuesta | Contactar en la 1.ª hora da muchas más chances de una conversación útil | F19 (secundaria) |
| Inasistencia a citas con recordatorio | no asistieron ÷ agendados | Bajó de 26 % a 19 % (salud) | F18 |
| % que compra en un webinar | compradores ÷ asistentes | **Sin fuente pública seria** | — |
| Cierre de llamadas de venta | ventas ÷ llamadas hechas | **Sin fuente pública seria** | — |

**Las 6 métricas que OnIA debería anotar cada día (criterio OnIA, a partir de I1):**
1. Chats nuevos.
2. Tiempo hasta la primera respuesta.
3. % que pide el QR.
4. % que paga, después de que Sergio verifica.
5. Formularios del diagnóstico → diagnósticos hechos → pruebas de 7 días → planes pagados.
6. Asistencia a cada clase del taller.

**Contexto Bolivia:** 9,00 millones de usuarios de internet (71,3 %) y 9,43 millones de identidades en redes sociales a octubre de 2025 [F16]. No se encontró una cifra pública de usuarios de WhatsApp en Bolivia.

---

## 7. Errores comunes (y cómo evitarlos)

| Error | Por qué daña | Qué hacer | Fuente |
|---|---|---|---|
| Urgencia o escasez falsas ("últimos 3 cupos" sin contarlos, temporizadores que se reinician) | Es engaño. En EE. UU. hubo una multa de USD 2,6 millones por temporizadores falsos | Usar solo fechas y cupos reales, y cumplirlos | F36, I1 |
| Escribir a quien no dio permiso, o no respetar una "BAJA" | Va contra la política de WhatsApp: pueden bloquear el número | Opt-in claro, botón "Ahora no" y cortar al primer "no" | F29 |
| Mandar texto libre fuera de las 24 h | No se entrega | Usar plantillas aprobadas fuera de la ventana | F29, F33 |
| Bot sin salida a una persona | Lo exige la política y se pierden ventas que solo cierra un humano | Frase fija de derivación + resumen a Sergio | F29, I1 |
| Enseñar 55 minutos y ofrecer en los últimos 5 | La mayoría ya se fue: el promedio ve 26 min | Ofrecer hacia la mitad o los 2/3 y repetir el llamado en las preguntas | F11, F2 |
| Varias llamadas a la acción a la vez ("compra, sígueme, mira esto") | La gente no hace nada | Una sola acción por mensaje y por webinar | I1, F1 |
| Inventar testimonios, alumnos o resultados | Destruye la confianza y es engañoso | Usar solo testimonios reales con permiso; si no hay, no se mencionan | F36, I1 |
| Competir con descuentos | Baja el valor percibido y acostumbra a esperar rebajas | Subir el valor (bonos, garantía, menos esfuerzo) en vez de bajar el precio | F4 |
| Abrir 3 funnels a la vez | No sabes cuál funciona y te quedas sin tiempo | Uno a la vez y medir | F1 (criterio OnIA) |
| Tardar horas en responder | El interés se enfría rápido | Bot inmediato + Sergio en la franja del día | F19 |
| No pedir la venta en el diagnóstico | La llamada termina en "qué buena charla" | Recomendar UN plan y hacer una pregunta de cierre | I4, F2 |
| Seguir escribiendo después de 2 mensajes sin respuesta | Molesta, hace que te bloqueen y puede afectar el número | Máximo 1 texto libre + 1 plantilla por lead | I3, F29 |
