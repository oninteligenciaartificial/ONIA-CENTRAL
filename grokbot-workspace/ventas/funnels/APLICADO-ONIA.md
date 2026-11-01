# Funnels aplicados a OnIA (BORRADOR, 1/11/2026, nada enviado ni publicado)

Base teórica: `MANUAL-FUNNELS.md`. Fuentes: `FUENTES.md` (códigos [F#] e [I#]).
Todos los mensajes son **borradores**: necesitan el sí de Sergio y respetan las reglas que ya existen.
- **Silencio:** si Sergio escribió a mano en un chat, el bot no manda nada más ahí [I2].
- **Límite:** como máximo 1 texto libre + 1 plantilla de seguimiento por lead [I3].
- **Sin inventos:** sin cupos, testimonios ni resultados inventados [F36].
- **Ventana de 24 h:** fuera de ella, solo plantillas aprobadas [F29, F33].
- **Tono:** tuteo, nunca voseo [I6].

---

## 0. Dónde estamos (1/11, unas 17:30) y la cuenta honesta de la meta

- **Meta:** Bs 3.000 al martes 3/11 [I6].
- **Precio del taller:** Bs 50 hasta **hoy, domingo 1/11, a las 23:59**. Desde el 2/11, Bs 70: así está en el guion, pero en `ESTADO-ACTUAL.md` sigue POR CONFIRMAR (D-009) [I2, I6].
- **Inscritos pagados al día de hoy:** **no está en ningún archivo**. `finanzas/control-diario.md` está vacío. Sin ese dato no se puede saber cuánto falta.
- **Fórmula para Sergio:** lo que falta = 3.000 − lo cobrado. Desde mañana, la cantidad de inscritos que necesitas = lo que falta ÷ 70.
  Ejemplo: si llevas Bs 1.000 cobrados, faltan Bs 2.000, o sea unos 29 inscritos a Bs 70.
- **Dato clave:** el diagnóstico → ONIA Platform **casi no suma plata antes del 3/11**. La prueba es de 7 días gratis [I4], así que el primer pago mensual llega como pronto unos 7 días después del diagnóstico. Hasta el 3/11, la meta depende casi entera del **taller**. El diagnóstico se siembra ahora y se cobra en noviembre (criterio OnIA).
- **Inconsistencia que hay que resolver hoy:** el guion del bot manda un QR de **Yolo Pago / Banco Ganadero** [I2], pero `ESTADO-ACTUAL.md` habla de un **QR BCP** pendiente de verificar (D-019) [I6]. Hay que confirmar cuál es el que vale **antes** de mandar más QR.

---

## Funnel 1: Taller "Claude de 0 a 100" (funnel por WhatsApp + tripwire + webinar)

**Qué tipo es:** el funnel de WhatsApp (8) con un tripwire (2). Las clases funcionan como webinar (3) y se venden como un seed launch (4) [F1, F3].
**Objetivo:** que el interesado pague Bs 50/70 y llegue a la clase 1. Ahí descubre que puede ir al siguiente escalón.

### Pasos y etiquetas de Chatwoot (las etiquetas aceptan letras, números, `-` y `_`) [F32]

| # | Paso | Quién lo hace | Etiqueta |
|---|---|---|---|
| 1 | Llega el interesado: reel con "escribe TALLER", estado de WhatsApp, contacto directo de Sergio o, más adelante, anuncio CTWA [F5, F30] | Contenido / Sergio | `taller-nuevo` |
| 2 | El bot responde en segundos: datos + "¿trabajo, estudios o negocio?" [I2, F19] | Bot | `taller-calificado` y, si tiene negocio, `negocio` |
| 3 | Precio y "¿te reservo el lugar?" [I2] | Bot | — |
| 4 | QR + pedido de comprobante [I2] | Bot (hasta el 1/11) / Sergio (desde el 2/11) | `taller-qr-enviado` |
| 5 | Comprobante → Sergio verifica → confirmación + grupo del taller [I2] | Bot + Sergio | `taller-pagado` |
| 6 | Seguimiento a quien no pagó: ya está escrito en `seguimientos-leads.md` y `aviso-fin-bs50.md` [I3] | Bot | `taller-seguimiento` |
| 7 | Recordatorios de clase: el día anterior y 1 h antes, con plantilla de utilidad [F18, F31] | Bot | — |
| 8 | En clase: valor + una mención corta del diagnóstico (ver el bloque de la clase 3 más abajo) | Sergio | — |

### Mensajes nuevos (BORRADOR). No repiten los que ya existen en I2/I3

**1A. Mensaje personal de Sergio a sus contactos (hoy, uno por uno, desde su WhatsApp).**
Es contacto caliente uno a uno, el canal más rápido y gratis [F5]. Se manda solo a gente que conoce a Sergio. Nada de envíos masivos ni de listas compradas [F29].
> ¡Hola [nombre]! Te escribo yo, Sergio 🙂 El martes empiezo un taller en vivo que se llama *Claude de 0 a 100*: 3 clases por Meet (3, 5 y 7/11, a las 19:00), desde cero y con práctica. Hoy es el último día a Bs 50 (hasta las 23:59). Después pasa a Bs 70. ¿Te sirve para tu trabajo o tu negocio? Si no es para ti, ¿se te ocurre alguien a quien le pueda servir?

**1B. Plantilla de recordatorio de clase (Utilidad, sin promoción, para que Meta no la pase a marketing [I1]).** Nombre sugerido: `recordatorio_clase_v2`.
> Hola {{1}}, te recuerdo que tu clase de "Claude de 0 a 100" es {{2}} a las 19:00 (hora Bolivia). El link de Meet está en el grupo del taller. ¡Nos vemos!

**1C. Mensaje al grupo del taller, 1 h antes de la clase 1 (lo manda Sergio).**
> ¡Hoy arrancamos! 🚀 En 1 hora, a las 19:00, te espero en el Meet (el link está aquí arriba). Ten a mano el celular o la compu y una cuenta de Google. En la primera parte ya vas a hacer tu primer ejercicio con Claude.

**1D. Mensaje al grupo después de la clase 1 (prueba social real, sin inventar).**
> ¡Gracias por venir hoy! 🙌 Si hiciste el ejercicio, comparte aquí una captura de lo que te salió: así nos inspiramos entre todos. La grabación te la paso mañana. Próxima clase: jueves 5/11 a las 19:00.

### Estructura de las clases como webinar que vende (adaptación de Perfect Webinar [F2])
Cada clase son 2 partes de menos de 60 min [I2]. En promedio la gente ve ~26 min de un webinar [F11], así que lo práctico va al comienzo.
- **Clases 1 y 2:** 100 % enseñanza. Al final, una sola línea sin vender: "Si tienes un negocio y quieres ver qué te conviene automatizar, escribe *DIAGNÓSTICO* al WhatsApp: hago pocos y son gratis."
- **Clase 3 (sábado 7/11), en la segunda parte:**
  1. **Gran idea:** "La IA que aprendiste aquí la usas tú. El siguiente paso es que tu negocio la use solo".
  2. **Demo en vivo** de ONIA Platform respondiendo un WhatsApp (secreto 1: el vehículo funciona).
  3. **Caso cercano real**, solo si existe. Si no hay, se muestra la demo (secreto 2).
  4. **Costo:** "no necesitas saber programar ni contratar a nadie" (secreto 3).
  5. **Stack:** diagnóstico gratis + recomendación de plan + 7 días de prueba.
  6. **Un solo llamado:** "escribe DIAGNÓSTICO". Cierre real: la fecha hasta la que Sergio abre diagnósticos esa semana [F2, F4].
  No se presentan precios de los planes en la clase: se dan en la llamada [I4].

**Métricas del funnel 1:** chats nuevos/día · % que pide el QR · % que paga · asistencia a la clase 1 (referencia externa: 47,7 % [F11]; la tuya va a ser distinta).

---

## Funnel 2: Diagnóstico gratis → ONIA Platform (funnel high-ticket: aplicación + llamada)

**Qué tipo es:** funnel 6 (high-ticket) de *DotCom Secrets*: un filtro, una llamada y una propuesta [F1]. El diagnóstico funciona además como lead magnet [F5].
**Objetivo:** que un negocio que califica haga la prueba de 7 días y después pague el plan Inicial, Negocio o Plus (Bs 390/590/990 al mes; anual Bs 3.900/5.900/9.900) [I4].

### Pasos

| # | Paso | Detalle | Etiqueta |
|---|---|---|---|
| 1 | **Entrada** | Alumnos del taller con negocio, palabra "DIAGNÓSTICO" en reels o clases, chats en espera (D-012), chat 35 de la clínica [I6] | `diag-interesado` |
| 2 | **Formulario de 3 preguntas** | Rubro, qué resolver primero, cuánto puede invertir. Califica con Bs 300 o más al mes [I4] | `diag-formulario` |
| 3 | **Filtro** | Califica → se le ofrece horario. No califica → taller. Prioridad: dental/salud y comercio [I4] | `diag-califica` / `diag-no-califica` |
| 4 | **Agenda** | Máximo 2 o 3 por día [I4]. Se confirma por WhatsApp | `diag-agendado` |
| 5 | **Recordatorios** | El día anterior y 1 h antes (con recordatorio bajan las inasistencias en salud: 26 % → 19 % [F18]) | — |
| 6 | **Llamada de 20-30 min** | Guion de `diagnostico/guion-llamada.md`: preguntas → resumen → 1 o 2 cosas a automatizar → recomendar UN plan → "¿arrancamos la prueba esta semana?" [I4, F2] | `diag-hecho` |
| 7 | **Prueba de 7 días** | Alta con plantilla del rubro. Sergio revisa en el día 2 o 3 que esté funcionando | `platform-prueba` |
| 8 | **Cierre en el día 6 o 7** | Mostrar lo que hizo el agente con sus mensajes reales → elegir plan → QR | `platform-cliente` |
| 9 | **Sin respuesta** | Un solo seguimiento a las 48 h y nada más [I4] | `diag-frio` |

**Por qué funciona (fuentes):** la prueba gratis sube la "probabilidad percibida" y baja el riesgo [F4]. El filtro evita llamadas con gente que no puede pagar [F1]. Una sola recomendación cierra mejor que un menú abierto (criterio OnIA, basado en I4).

### Mensajes (BORRADOR)

**2A. Confirmación de agenda (lo manda Sergio).**
> ¡Listo, [nombre]! Quedamos el [día] a las [hora] por Meet: [link]. Son 20-30 min. Ya leí tus respuestas: vamos directo a [lo que marcó en P2]. Si te surge algo, avísame y lo movemos 🙂

**2B. Recordatorio 1 h antes (texto libre si la ventana está abierta; si no, plantilla de utilidad).**
> Hola [nombre], te recuerdo nuestro diagnóstico de hoy a las [hora]. Link: [link]. ¡Nos vemos!

**2C. Resumen después de la llamada (el mismo día) [I4].**
> ¡Gracias por tu tiempo hoy! Te dejo el resumen:
> • Lo principal: [problema]
> • Lo que te conviene automatizar primero: [1-2 cosas]
> • Plan recomendado: *[plan]* (Bs [precio]/mes), con 7 días de prueba gratis
> Siguiente paso: [día de alta]. Para dejarlo listo necesito [rubro, productos/servicios, horarios]. ¿Te parece?

**2D. Día 3 de la prueba (revisión, sin vender).**
> ¡Hola [nombre]! ¿Cómo va el agente? Vi que ya respondió [n] mensajes. ¿Hay alguna respuesta que quieras que ajustemos?
> (Solo con el número real del panel. Si no hay dato, se quita esa frase.)

**2E. Día 6 de la prueba (cierre).**
> ¡Hola [nombre]! Mañana termina tu prueba de 7 días. En esta semana el agente [dato real del panel]. Si quieres seguir, eliges el plan y pagas con QR: Inicial Bs 390, Negocio Bs 590 o Plus Bs 990 al mes (o el año completo, pagando 10 meses). Para tu caso te recomiendo *[plan]*. ¿Lo dejamos activo?
> Si no responde: un solo seguimiento a las 48 h y se corta [I4].

**Métricas del funnel 2:** formularios → califican → agendados → asistieron → pruebas → pagaron. No hay benchmark público confiable para el cierre de llamadas [ver el manual §6], así que esta tabla es la que vale.

---

## Funnel 3: Comunidad + escalera de valor (lanzamiento continuo)

**Qué tipo es:** la escalera de valor [F1], con lead magnet y contenido [F5], más un challenge mensual como mini lanzamiento [F3, F27]. Referentes de LatAm: una comunidad gratis grande que alimenta una paga chica (Skool, US$59-64/mes) [I5].

### La escalera de OnIA

| Escalón | Producto | Precio | Para qué sirve | Estado |
|---|---|---|---|---|
| 0. Gratis | Reels, estados, guía de prompts, comunidad gratis | Bs 0 | Generar confianza y conseguir contactos | Reels listos, sin publicar [I6] |
| 1. Entrada | Taller *Claude de 0 a 100* | Bs 50 / 70 | Primer pago (tripwire) [F1] | En venta |
| 2. Filtro | Diagnóstico de IA gratis | Bs 0 | Detectar negocios con dolor y presupuesto | Borrador [I4] |
| 3. Núcleo | ONIA Platform | Bs 390 / 590 / 990 al mes | Ingreso recurrente | Precios propuestos [I6] |
| 4. Alto | Sistema a medida | Cotiza Sergio | Casos que la plataforma no cubre | Caso por caso [I4] |
| (Futuro) | Comunidad paga o taller nivel 2 | **Por decidir** | Ingreso recurrente para quien no tiene negocio | Idea, decisión de Sergio |

### Pasos
1. **Al cerrar la clase 3 (7/11):** el grupo del taller pasa a ser la **Comunidad OnIA** gratis. Se invita también a los que no compraron, siempre que hayan dado su permiso [F29].
2. **Una vez por semana:** un live corto de 20-30 min con "un truco de IA" + preguntas. Así la comunidad se mantiene activa y Sergio no se quema (criterio OnIA; las comunidades de los referentes hacen 1 o 2 clases por semana [I5]).
3. **Una vez por mes:** un challenge de 5 días ("5 días usando IA en tu negocio") que cierra con la oferta del próximo taller y del diagnóstico [F27, F3].
4. **Cada nuevo taller** se lanza dentro de la comunidad con las 3 piezas de Walker: oportunidad → transformación → cómo se siente usarlo → apertura → cierre real [F3].
5. **Quien tiene negocio** siempre recibe la invitación al diagnóstico (funnel 2).

### Mensajes (BORRADOR)

**3A. Invitación a la comunidad (en la clase 3 y por el grupo).**
> ¡Terminamos el taller! 🎉 Gracias por llegar hasta aquí. Este grupo sigue vivo como *Comunidad OnIA*: cada semana comparto un truco de IA en un live corto y respondo dudas. Es gratis. Si prefieres no seguir, puedes salirte sin problema 🙂

**3B. Anuncio del challenge (cuando haya fecha real).**
> Del [fecha] al [fecha] hacemos el *Reto de 5 días: IA en tu negocio*. Cada día, una tarea de 15 minutos que haces desde el celular. Es gratis para la comunidad. ¿Te anotas? Responde *RETO*.

**3C. Lead magnet para reels (palabra clave).**
> ¡Hola! Aquí tienes la guía *[nombre de la guía]* 📄 [link]. Si tienes un negocio y quieres ver qué te conviene automatizar, dime y te cuento del diagnóstico gratis.

---

## 5 acciones para las próximas 48 h (del 1/11 a las 17:30 al 3/11 a las 17:30)

Ordenadas por impacto en los Bs 3.000. Todas requieren el **sí de Sergio**; el agente no envía nada.

| # | Cuándo | Acción | Por qué [fuente] | Quién |
|---|---|---|---|---|
| 1 | **Hoy, antes de las 21:00** | Decidir 3 cosas que hoy bloquean la venta: (a) el QR que vale (Yolo/Ganadero o BCP, D-019); (b) el precio desde el 2/11, Bs 70 o no (D-009); (c) anotar en `finanzas/control-diario.md` lo cobrado hasta hoy | Sin QR claro no hay cobro, y sin el número no se sabe cuánto falta [I6] | Sergio |
| 2 | **Hoy, de 19:00 a 23:00** | Último aviso de Bs 50: el bot manda `aviso-fin-bs50.md` (a) o (c) a quienes corresponda, y Sergio manda el **mensaje 1A** uno por uno a 20-30 contactos personales | El cierre de un plazo real concentra ventas [F3]; contacto caliente 1 a 1, gratis [F5]. Los mensajes ya respetan el límite de envíos [I3] | Bot (tras el sí) + Sergio |
| 3 | **Lunes 2/11, en la mañana** | Mandar el mensaje de diagnóstico a los chats en espera y al chat 35 de la clínica (D-012, ya redactado en `diagnostico/mensaje-chats-espera.md`) y crear de verdad el link de Cal.com con las 3 preguntas | Son contactos calientes que ya pidieron algo [F5]. Agendar ahora permite cobrar Platform en noviembre [I4] | Sergio |
| 4 | **Lunes 2/11, todo el día** | Publicar el reel R1 (07:30) y los estados de WhatsApp con un solo llamado ("escribe TALLER") y, a la noche, un mensaje "empezamos mañana" a quienes preguntaron (solo dentro de la ventana de 24 h y sin pasar el límite) | El 15 % de las inscripciones a webinars llega el mismo día o justo antes [F11]. Responder rápido sube las chances [F19] | Sergio / bot |
| 5 | **Martes 3/11, hasta las 18:00** | Recordatorio de clase 1 (plantilla 1B a los pagados y mensaje 1C al grupo), crear las 6 salas de Meet (T-14) y preparar la línea "escribe DIAGNÓSTICO" para el final de la clase | Los recordatorios bajan las inasistencias [F18]. Si la clase 1 sale bien, alimenta los funnels 2 y 3 [F2] | Sergio |

**Qué NO hacer en estas 48 h:** inventar "últimos cupos", ofrecer descuentos o cuotas, mandar QR de Bs 50 después de las 23:59 de hoy, o escribir a gente que no dio su permiso [F29, F36, I2].

---

## Checklist de revisión (hecha por el agente al cerrar)

| Pregunta | Resultado |
|---|---|
| ¿Todo tiene fuente? | Sí. Cada idea lleva un código [F#]/[I#] que está en `FUENTES.md`. Lo que es criterio propio dice "(criterio OnIA)". Los tiempos del webinar no tienen fuente primaria y así lo dice el manual. Las cifras que no se encontraron (cierre de llamadas, % que compra en un webinar, uso de WhatsApp en Bolivia, resultados de challenges) se dejaron como **hueco**, sin inventar. Las fuentes F13, F17, F18 y F20-F28 no se abrieron: están marcadas "verificada: no" |
| ¿Está en español claro, con tú? | Sí: tuteo en todo, sin voseo, y glosario para quien empieza. Los términos en inglés (funnel, lead, stack) están explicados |
| ¿Es aplicable en Bolivia con poco presupuesto? | Sí. Todo se hace con WhatsApp, Chatwoot (ya instalado), Google Meet gratis, Cal.com gratis y QR. Las 5 acciones de 48 h no gastan plata. Los anuncios CTWA quedan como opción a futuro (presupuesto POR CONFIRMAR, US$5 o US$10) [I6] |
| ¿Respeta las reglas de OnIA? | Sí. Todo es borrador, no se envió ni publicó nada y no hay datos de clientes. La regla de silencio y el límite de 1 texto + 1 plantilla siguen vigentes |
