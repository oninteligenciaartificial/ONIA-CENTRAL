# Plan de marca personal y escalera de ventas

29-oct-2026, por Claude Code, para el [issue #65](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/65).

**Estado: borrador para que lo apruebe Sergio Urcullo.** No se publica nada, no se gasta y no se crea nada a su nombre sin su sí con captura: páginas, cuentas, comunidad. Lo que es decisión suya va al final, con tres opciones y la recomendada marcada.

Sale de:
- lo que pidió Sergio Urcullo en el #65, también en el [comentario del 29-oct](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/65) que suma 3 videos por día, YouTube, clases y llamadas gratis o pagas, y el análisis de enseñar contra el producto;
- las fichas de cuatro referentes y su resumen, en [`referentes/`](referentes/resumen-2026-10-29.md) (PR #40). Las cifras de los referentes son al 29-oct-2026 y cada ficha trae sus fuentes;
- el plan del primer taller, `workshops-comunidad/plan-meta-ads-borrador.md` (PR #41), en su versión del 29-oct-2026 (commit `a1d74c3`). Lo lleva otra sesión, y este plan no lo cambia;
- el mapa para operar ONIA, `docs/decisiones/2026-10-29-mapa-operacion-onia.md`, ya en `main`.

Los dólares se pasan a bolivianos a Bs 12,12, el cambio oficial vigente desde el 29-oct-2026 ([BCB](https://www.bcb.gob.bo/librerias/indicadores/dolar/bolsin.php), consultada el 29-oct-2026).

## En corto

Lo pidió Sergio Urcullo en el #65: que el taller escale a una comunidad, la comunidad a llamadas 1 a 1, y la marca personal venda todo. La escalera queda así:

| Escalón | Qué es | Precio | Cobro | Estado |
|---|---|---|---|---|
| 1. Gratis | 3 videos cortos por día, un video de YouTube por semana, guías por palabra clave y una clase abierta por mes | Gratis | — | Propuesto (decisiones 2 y 5) |
| 2. Taller de entrada | "Claude de 0 a 100": 3 horas en vivo, para todo público de Bolivia | Bs 50. La grabación para siempre, aparte | QR del banco | Decidido el 29-oct; el resto lo define el PR #41 |
| 3. Comunidad paga | Una clase en vivo por semana, una plantilla por semana y un grupo para dudas | Bs 99 por mes. Fundadores: Bs 79 | QR, el 16 de cada mes | Propuesto (decisiones 3 y 4) |
| 4a. Llamadas | Diagnóstico gratis de 20 minutos para negocios. Sesión 1 a 1 paga, de 60 minutos | Gratis y Bs 350 | QR por adelantado | Propuesto (decisiones 6 y 7) |
| 4b. Implementación para negocios | 3 sesiones de 90 minutos para dejar la IA andando en un negocio | Desde Bs 2.500 | QR, mitad al empezar | Propuesto (decisión 7) |
| Después | ONIA Platform, el asistente de WhatsApp | Desde Bs 320 por mes ([onia.com.bo](https://onia.com.bo), consultada el 29-oct-2026) | — | Cuando se cierren los issues #27 y #28 |

**Por qué esta forma:** es la escalera que ya funciona en los referentes en español, con precios de Bolivia y cobro con QR.
- Erik Taveras: workshop, después Skool a US$59 por mes, y llamadas de US$75 y US$397 ([ficha](referentes/erik-taveras.md)).
- Santiago Muñoz: masterclass gratis, después Skool a US$64 por mes, y consultoría desde US$2.500 ([ficha](referentes/santiago-munoz.md)).
- Enrique Rocha: un reel por día con palabra clave, después el workshop a US$97 y el nivel 2 ([ficha](referentes/enrique-rocha.md)).

**Lo que cambia en Bolivia:** se vende por WhatsApp y se cobra con QR. Stripe, PayPal y Mercado Pago no aceptan empresas de Bolivia ([resumen](referentes/resumen-2026-10-29.md)).

## 1. Enseñar y el producto: dos fuentes de ingresos

Sergio Urcullo pidió analizar si enseñar es la vía correcta, "ya que no va a generar ingresos para siempre", o seguir con la startup, y cómo cada una le sirve de prueba a la otra.

| | Enseñar: contenido, taller, comunidad y llamadas | El producto: ONIA Platform |
|---|---|---|
| Dónde está hoy | Arranca sin audiencia | Sin clientes que paguen: el tablero del 27-sep mostraba 5 organizaciones registradas, 0 pagos aprobados y Bs 0 cobrados ese mes (`plataforma/2026-10-28-seguir-con-onia-platform.md`) |
| Cuándo trae caja | Con el primer taller, la primera semana de noviembre (PR #41) | Cuando se cierren los issues #27 y #28 y salga la prueba con clínicas (#61) |
| Cuánto por venta | Bs 50 el taller, de Bs 79 a Bs 99 por mes la comunidad, Bs 350 una sesión y desde Bs 2.500 una implementación | De Bs 320 a Bs 2.900 por mes por cliente, y el chatbot aparte a Bs 390 (mismo documento) |
| De qué depende | De las horas de Sergio Urcullo: grabar, dar clases y llamadas. Si deja de publicar, deja de vender | De que el producto ande y se venda a negocios. Una vez instalado, cobra todos los meses sin sus horas, salvo el soporte |
| Riesgo | Mucha competencia en IA en español, y los temas de moda cambian | Tarda, y depende del VPS y de que le funcione al cliente |

**¿Alcanza una sola?**
- **El piso de gastos** son los US$120 por mes de Claude y Codex del plan de arranque, unos Bs 1.454 (mismo documento). No cuenta el VPS ni Higgsfield, que no tienen monto en el repo.
- **Enseñando,** con Zoom Pro sumado, son unos Bs 1.660 por mes (ver "Cómo se mide"). Se cubren con 22 miembros de la comunidad, 5 sesiones o una implementación.
- **Con el producto,** el piso se cubre con 5 clientes del plan básico. El documento de precios de junio ponía el punto de equilibrio de la plataforma en 7 u 8 clientes del básico, con la infraestructura de entonces: hay que recalcularlo (#60).
- **Ninguna alcanza sola para siempre.** Enseñar trae caja rápido, pero depende de sus horas. El producto escala sin sus horas, pero hoy no cobra.

**Los referentes hacen las dos cosas,** salvo uno:
- Erik Taveras vende TalosFlow, un CRM de WhatsApp a US$49 por mes, además de su Skool y sus talleres, y vende con la demo de su propio producto ([ficha](referentes/erik-taveras.md)).
- Santiago Muñoz mete Forja+, 14 chatbots listos para revender, dentro de su Skool, y vende consultoría desde US$2.500 ([ficha](referentes/santiago-munoz.md)).
- Iman Gadzhi es copropietario de Whop, donde venden sus alumnos, y dice que por eso su reto es gratis ([ficha](referentes/iman-gadzhi.md)).
- Enrique Rocha vive solo de enseñar, con 292 mil seguidores en Instagram ([ficha](referentes/enrique-rocha.md)).

**Cómo cada una le da prueba a la otra:**
- **El producto prueba que sabe hacer.** Aparece en los videos "voy a un negocio" y en la implementación, cuando esté listo para clientes.
- **Enseñar prueba que sabe enseñar,** y trae confianza y contactos. De cada taller y cada video salen dueños de negocio que pueden pasar a la implementación y, después, a la plataforma.
- **La implementación para negocios es el puente** entre las dos.
- **Lo grabado y lo recurrente** hacen que enseñar dependa menos de sus horas: la comunidad cobra todos los meses, y el taller vende su grabación para siempre (decisión 3 del PR #41).

**Lo que recomienda este plan (decisión 8):** las dos, en orden.
1. Noviembre y diciembre: enseñar, para hacer caja.
2. Después del primer taller: la prueba con clínicas del #61, como recomienda la decisión 14 del mapa.
3. El 31-ene-2027, en el hito de la plataforma (#62): comparar con números la caja y las horas de cada una, y decidir cuánto tiempo va a cada una.

## 2. Posicionamiento

**De qué habla Sergio Urcullo:** de usar la IA de verdad en el trabajo y en el negocio, con lo que él usa todos los días para dirigir ONIA. Tres temas, en este orden de peso (decisión 1):
1. **Claude en el trabajo:** proyectos, archivos, conectores y tareas armadas. Es el tema del taller de entrada.
2. **La IA en un negocio boliviano:** contestar por WhatsApp, ordenar pedidos, hacer seguimiento. Es el puente a la implementación y, cuando esté lista, a ONIA Platform.
3. **Detrás de escena:** cómo dirige su empresa con agentes que trabajan y él aprueba. Es la prueba de que lo usa, como el homelab de Erik Taveras, su tema con más vistas ([ficha](referentes/erik-taveras.md)).

**Para quién:** profesionales, emprendedores y dueños de negocios chicos de toda Bolivia que ya probaron ChatGPT o Claude, pero le hacen preguntas sueltas y no le dejan trabajo. Es el público que eligió para el taller: "todo publico, y de todo bolivia" (PR #41).

**La promesa:** "Te enseño a dejarle trabajo armado a la IA, sin programar." Es la idea central del plan del taller (PR #41), y se repite en toda la escalera.

**Qué lo diferencia:**
- **Es de Bolivia:** precios en bolivianos, cobro con QR, horarios de Bolivia y ejemplos de negocios de acá. Erik Taveras, Santiago Muñoz y Enrique Rocha le hablan a toda Latinoamérica y cobran en dólares; Enrique, también en pesos mexicanos (fichas de [Erik](referentes/erik-taveras.md), [Santiago](referentes/santiago-munoz.md) y [Enrique](referentes/enrique-rocha.md)).
- **Lo usa para su propia empresa:** no enseña desde la teoría.
- **Es práctico:** en el taller y en la comunidad se trabaja con los archivos de cada uno. Contra los webinars gratis de venta, como el de Eduardo Vázquez, es la misma diferencia que usa el plan del taller (PR #41).

**Qué no promete:** ingresos ni ahorros en plata. Meta pide que los anuncios no prometan resultados económicos irreales ([guía de políticas de Meta](https://en-gb.facebook.com/business/m/small-business/ad-policy-guidance)). A Iman Gadzhi, que promete "$373 por día", Meta le dio de baja varios anuncios sin decir el motivo ([ficha](referentes/iman-gadzhi.md)). Además, lo legal lo aprueba Sergio Urcullo.

**Marca personal y ONIA:** la marca personal vende lo que enseña Sergio Urcullo: taller, comunidad y llamadas. ONIA vende la plataforma. La implementación para negocios une las dos.

**La página ya está decidida.** Sergio Urcullo eligió anunciar desde "mi marca personal, perfil personal" (PR #41, 29-oct-2026). Como los anuncios que abren WhatsApp piden una página de Facebook, sale de una página con su nombre, y su perfil personal se usa para publicar gratis (PR #41). La ayuda de Meta lo confirma:
- un anuncio que abre WhatsApp se arma eligiendo una página, con el número conectado a esa página o al portafolio ([ayuda de Meta](https://www.facebook.com/business/help/447934475640650), consultada el 29-oct-2026);
- un perfil en modo profesional no se integra con Meta Business Suite, y Meta recomienda una página a quien quiere manejar su presencia con un equipo ([ayuda de Meta](https://www.facebook.com/business/help/1608528132896450) y [preguntas frecuentes](https://www.facebook.com/business/help/251342092572308), consultadas el 29-oct-2026).

Con el modo profesional, su perfil personal puede tener seguidores sin límite y estadísticas (mismas fuentes). Activarlo es un cambio en su cuenta: lo decide él.

## 3. Contenido

### Lo que pidió

"3 videos diarios, un video horizontal de YouTube enseñando algo gratis, pero luego se enseña más avanzado o todo completo en el curso" (Sergio Urcullo, #65, 29-oct-2026).

**La regla de qué es gratis y qué es pago:**
- **Gratis, en YouTube y en los cortos:** un tema entero, con un ejemplo. Qué es y cómo se hace el primer paso.
- **Pago, en el taller:** el sistema completo, en vivo y con tus archivos. La grabación queda para siempre si la comprás (decisión 3 del PR #41).
- **Pago, en la comunidad:** lo nuevo de cada semana y tu caso.

Así lo hacen Santiago Muñoz, con tutoriales gratis de 15 a 60 minutos que mandan a su Skool ([ficha](referentes/santiago-munoz.md)), y Erik Taveras, que pone el enlace a su Skool en la primera línea de la descripción de sus videos ([ficha](referentes/erik-taveras.md)). El tutorial largo de Claude de Iman Gadzhi tiene 1,77 millones de vistas ([resumen](referentes/resumen-2026-10-29.md)).

### Dónde

- **Facebook va primero.** En Bolivia tenía 8.632.400 usuarios en septiembre de 2026, contra 2.834.600 de Instagram ([NapoleonCat, Facebook](https://napoleoncat.com/stats/facebook-users-in-bolivia/2025/07) e [Instagram](https://napoleoncat.com/stats/instagram-users-in-bolivia/2025/08), un sitio de terceros, consultadas el 29-oct-2026). Además, su perfil personal y su página son donde eligió anunciar y publicar (PR #41).
- **Cada corto va a seis lugares:** su perfil y su página de Facebook, sus estados de WhatsApp, TikTok, Instagram y YouTube Shorts. Publicar el mismo video en otra red cuesta solo el tiempo de subirlo. Para TikTok en Bolivia no se encontró una cifra confiable.
- **El video horizontal va a YouTube.** Los Shorts de Enrique Rocha rinden poco, con 1,7 mil vistas el mejor de sus últimos 48 ([ficha](referentes/enrique-rocha.md)); lo que trae audiencia en YouTube es el video largo, como en Santiago Muñoz.
- **Punto de partida:** falta saber cuántos seguidores tiene hoy en cada red y si tiene Instagram profesional. "ONIA Ads" no tiene un Instagram conectado (PR #41).

### Los 3 cortos de cada día

| Corto | Qué es | Cierra con |
|---|---|---|
| 1. Tutorial | Un truco o una herramienta, con la pantalla. Es la pieza fuerte | Una palabra clave |
| 2. Recorte del video de YouTube de la semana | Un minuto del video largo | "El video completo está en mi YouTube" |
| 3. Liviano | Detrás de escena, una novedad de Claude, la respuesta a un comentario o un testimonio con permiso | Seguirlo, o el próximo taller |

Duran de 45 a 90 segundos, como los de Enrique Rocha, que duran de 46 a 113 ([ficha](referentes/enrique-rocha.md)). Enrique sube a YouTube hasta tres Shorts por día, a horas fijas ([ficha](referentes/enrique-rocha.md)).

Una vez por mes, en vez del tutorial de un día, va **"voy a un negocio y le dejo la IA andando"**: un negocio real, con el dueño en cámara. Es el formato con más confianza de Santiago Muñoz, con 113.870 vistas en el de la cafetería ([ficha](referentes/santiago-munoz.md)). De cada visita salen 2 o 3 cortos.

### Guiones tipo

Son plantillas. Los guiones de cada semana los escribe un agente y los aprueba Sergio Urcullo (skill `escribir-guion`, issue #46). Van en voseo, como los del PR #41; la guía de voz del #46 lo puede cambiar.

**A. Tutorial con palabra clave.** Sigue el guion de Enrique Rocha ([ficha](referentes/enrique-rocha.md)).
1. Gancho de contraste o de dolor, en la primera frase.
2. La objeción con las palabras del público: "Pero Sergio…".
3. Una comparación simple.
4. Los pasos, nombrando qué tocar.
5. Un límite honesto.
6. La palabra clave, con una pregunta personal, para que cada comentario sea distinto.
7. Cierre fijo: "Seguime, que todos los días te muestro una."

Ejemplo, unos 70 segundos:
- 0-3 s: "Si cada vez que abrís Claude le volvés a explicar todo, lo estás usando a medias."
- 3-8 s: "'Pero Sergio, ¿cómo hago para que se acuerde?' Con un proyecto."
- 8-15 s: "Un proyecto es como la carpeta de un cliente: lo que pongas adentro, Claude lo lee antes de contestarte."
- 15-50 s, la pantalla: "Entrá a claude.ai, tocá Proyectos y después Crear proyecto. En las instrucciones escribí quién sos y cómo querés que te conteste. Subí tus archivos: tu lista de precios, tu manual. Desde ahí, cada chat ya sabe todo eso."
- 50-58 s: "Con la cuenta gratis tenés hasta 5 proyectos." Es dato de la [página de precios de Claude](https://claude.com/pricing), que cita el PR #41.
- 58-70 s: "Te armé una guía con las instrucciones que uso yo. Comentá PROYECTO y contame para qué lo usarías, y te la mando."

**B. Video de YouTube, de 15 a 20 minutos.** Sigue el guion de los videos más vistos de Santiago Muñoz ([ficha](referentes/santiago-munoz.md)).
1. En los primeros 10 segundos, el resultado: "Al final de este video vas a tener tu primer proyecto de Claude armado."
2. Una credencial corta: "Uso Claude todos los días para dirigir mi empresa."
3. El pedido de suscribirse, al principio y no al final.
4. Las objeciones, como si se las hicieran: "Sergio, ¿esto sirve con la cuenta gratis?"
5. Los pasos numerados, con la pantalla.
6. El cierre: lo que no entró y dónde está completo, el taller.
7. En la primera línea de la descripción, el WhatsApp del taller.

**C. Voy a un negocio.** Sigue el formato de Santiago Muñoz ([ficha](referentes/santiago-munoz.md)).
1. Gancho con el negocio y el resultado: "Fui a una [ferretería] de [ciudad] y le dejé la IA contestando las preguntas de precios."
2. El problema, contado por el dueño.
3. Qué se armó, en pantalla.
4. La reacción del dueño.
5. "Comentá NEGOCIO si querés que vaya al tuyo."

El dueño firma su permiso antes de grabar, y no se muestran datos de clientes del negocio.

**D. Detrás de escena.**
1. Gancho: "Mi empresa la trabajan tres agentes de IA, y yo apruebo."
2. Una tarea real de la semana, de punta a punta.
3. Qué hizo el agente y qué decidió él.
4. Qué aprendió.

No se muestran pantallas con logins, claves ni datos de clientes.

**Los guiones del anuncio del taller** están en el PR #41 y no se repiten acá.

### La palabra clave

- **Cómo funciona:**
  1. El tutorial cierra con "Comentá PALABRA".
  2. Quien comenta recibe por mensaje el enlace a la guía.
  3. La guía termina con el próximo taller y un enlace a su WhatsApp.

  Así lo hacen Erik Taveras, Santiago Muñoz y Enrique Rocha. Con ese llamado, los comentarios de Enrique llegan al 40-80% de los "me gusta"; sin él, al 3-8% ([resumen](referentes/resumen-2026-10-29.md)).
- **Dónde viven las guías:** en documentos de Google públicos de su Drive, sin pedir correo, como las de Santiago Muñoz ([ficha](referentes/santiago-munoz.md)). No cuesta nada y no pide herramientas nuevas. El contacto se junta en WhatsApp, que es donde se vende en Bolivia.
- **Quién contesta:** en Instagram, como diga la decisión 7 del mapa de operación: el agente propone y Sergio Urcullo aprueba cada tanda, o sale solo con un texto aprobado una vez. Lo arma el issue #51. Por la API de Instagram, cada comentario recibe una sola respuesta privada, dentro de 7 días (mapa de operación). En Facebook y TikTok, y en Instagram mientras no esté el #51, contesta él a mano.
- **Reglas:**
  - una palabra por tutorial, corta y en mayúsculas;
  - la guía dice exactamente lo que prometió el video. A Enrique Rocha le reclaman en los comentarios que lo que llega por mensaje no coincide con el video ([ficha](referentes/enrique-rocha.md));
  - a quien escribe por WhatsApp se le contesta lo que pidió. Para mandarle avisos después, hace falta su permiso (ver "El paso a la comunidad").
- **Las palabras del primer mes:**

  | Palabra | Qué recibe |
  |---|---|
  | CLAUDE | Guía de primeros pasos: cuenta, proyectos y archivos |
  | PROYECTO | Las instrucciones de proyecto que usa Sergio Urcullo |
  | ARCHIVOS | 5 pedidos para hacerle a Claude con tus archivos |
  | TALLER | Las fechas, el temario y el precio del taller, por WhatsApp |
  | NEGOCIO | Qué incluye la implementación para negocios, por WhatsApp |

### Frecuencia y horas

**Recomendado: llegar a los 3 cortos por día en cuatro semanas, y un video de YouTube por semana desde la segunda** (decisión 2).

| Semana | Cortos por día | YouTube |
|---|---|---|
| 1: 31-oct al 8-nov, el primer taller | 1, el tutorial | No |
| 2: 9 al 15 | 1 | El primero |
| 3: 16 al 22 | 2: tutorial y recorte | Sí |
| 4: 23 al 29 | 3 | Sí |

**Por qué de a poco:** la primera semana Sergio Urcullo da 9 horas de clase en vivo y atiende las ventas del taller (PR #41). Y arranca su plan de aprendizaje el 2-nov. Si las horas no dan, se queda en 2 por día.

**Las horas de la semana,** estimación propia, porque no hay datos suyos:
- un corto propio: 15 minutos de grabación, 20 de edición y 10 de publicación en los seis lugares;
- un recorte del video de YouTube: 15 minutos de edición y 10 de publicación;
- un video de YouTube: 2,5 horas de grabación, 3 de edición y un cuarto de hora de publicación;
- comentarios y mensajes del contenido: 15 minutos por día;
- aprobar guiones: una hora por semana;
- el taller, cada semana que se dé: 9 horas en vivo, una de preparación y media hora por día de ventas por WhatsApp;
- la comunidad: la clase, una hora para prepararla, media hora para la plantilla y dos rondas de dudas de media hora;
- la clase abierta: 45 minutos y 45 de preparación.

| Semana | Contenido | Taller, si sigue | Comunidad | Clase abierta | Total |
|---|---|---|---|---|---|
| 1 | 8 h | 13,5 h | — | — | Unas 21,5 h |
| 2 | 13,8 h | 13,5 h | — | — | Unas 27 h |
| 3 | 16,7 h | 13,5 h | 3,5 h | — | Unas 34 h |
| 4 | 21,9 h | 13,5 h | 3,5 h | 1,5 h | Unas 40 h |

A eso se suman las sesiones 1 a 1, hasta 5 horas por semana. Si el taller no sigue después de la semana 1, la semana 4 baja a unas 27 horas.

**Para bajar horas:**
- una herramienta que saque los recortes del video largo, como Opus Clip Pro, US$29 por mes. Es la opción "completo" de la decisión 4 del mapa: es gasto y pide su sí;
- la publicación por API, cuando estén los issues #49 y #50.

**Quién hace qué:**

| Paso | Quién | Issue |
|---|---|---|
| Calendario de la semana | Agente, con lo que diga este plan | #45 |
| Guiones | Agente redacta, Sergio Urcullo aprueba | #46 |
| Grabar | Sergio Urcullo, en tandas: el domingo y el miércoles | — |
| Editar | Sergio Urcullo en CapCut el primer mes, según la decisión 4 del mapa | #48 |
| Publicar | Sergio Urcullo a mano, hasta que estén las apps de Meta y de TikTok | #49 y #50 |
| Comentarios con palabra clave | Según la decisión 7 del mapa | #51 |
| Números de la semana | Agente | #52 |

## 4. Clases gratis

"Clases gratuitas", pidió Sergio Urcullo (#65, 29-oct-2026).

**Recomendado: una clase abierta por mes, de 45 minutos, en YouTube Live** (decisión 5).
- **Qué se da:** un tema entero, por ejemplo "tu primer proyecto en Claude", y preguntas. Al final, 5 minutos: el próximo taller y la comunidad.
- **Por qué YouTube Live:** queda en el canal como un video gratis más, y no ocupa la sala de Zoom del taller. Pide el canal verificado, y se puede transmitir desde la computadora con la cámara ([ayuda de YouTube](https://support.google.com/youtube/answer/2474026?hl=es-419), consultada el 29-oct-2026).
- **Cuándo:** la semana en que no hay taller, o un lunes, que no tiene clase del taller. La primera, el lunes 23 de noviembre a las 19:30.
- **Referencias:**
  - Santiago Muñoz da masterclasses gratis de 4 a 5 horas, con regalos para quien está en vivo y una oferta de 24 horas después ([ficha](referentes/santiago-munoz.md)).
  - Iman Gadzhi hace un reto gratis de 5 días ([ficha](referentes/iman-gadzhi.md)).
  - Enrique Rocha no hace webinars gratis de venta, y se diferencia por eso: sus páginas dicen que su taller no es "una masterclass de 47 minutos con 40 de venta" ([ficha](referentes/enrique-rocha.md)). Por eso la clase abierta enseña de verdad, y la oferta dura 5 minutos al final.

## 5. El taller de entrada y el paso a la comunidad

### El taller

**Lo que decidió Sergio Urcullo** el 29-oct-2026, citado en el PR #41:
- el taller y el nombre: "Claude de 0 a 100";
- Bs 50, sin factura: "el curso low ticket sera informal";
- para todo público de Bolivia;
- la cuenta "ONIA Ads" y la página con su nombre;
- US$10 por día de anuncios durante 7 días.

**Lo que propone el PR #41 y falta decidir:** tres clases por semana, el martes 3 y el jueves 5 de noviembre de 19:00 a 22:00 y el sábado 7 de 9:00 a 12:00, con anuncios del 31 de octubre al 6 de noviembre; la grabación para siempre, a Bs 30 aparte; la sala, el cobro con QR, la devolución y qué se ofrece al final. Este plan usa esas fechas. **Si cambian, el calendario se corre igual.**

### El paso a la comunidad

1. **Al inscribirse,** en la confirmación del pago, una pregunta aparte: "¿Querés que te avise por WhatsApp de las próximas clases y de la comunidad? Respondé SÍ." Si no contesta, no se le mandan avisos.
   - El DS 1793 pide consentimiento expreso para usar datos (art. 56) y, en los mensajes, un remitente identificable y una forma de darse de baja (art. 57) ([lexivox](https://www.lexivox.org/norms/BO-RE-DSN1793.html), consultada el 29-oct-2026, citado también en el mapa de operación).
   - La confirmación la redacta el PR #41: esta pregunta se le pasa a esa sesión. El texto es legal y lo aprueba Sergio Urcullo.
2. **Al final de cada clase,** 5 minutos:
   - **el grupo gratis de avisos,** que es lo que recomienda la decisión 8 del PR #41. Entra quien quiere, con el enlace;
   - **la comunidad paga:** qué trae cada semana, que arranca el lunes 16 de noviembre y que hay preventa de fundador. Los primeros 30 que paguen hasta el viernes 13 a las 23:59 entran a Bs 79 por mes, congelado mientras sigan pagando. Después, Bs 99.

   Son límites reales, como el cupo de fundador de Erik Taveras, que se llenó antes de la primera llamada ([ficha](referentes/erik-taveras.md)), y la oferta de 24 horas de Santiago Muñoz después de su masterclass ([ficha](referentes/santiago-munoz.md)).
3. **Al día siguiente de cada clase,** solo a quien dijo que sí a los avisos: gracias, el pedido de testimonio y la preventa, con el QR.
4. **El jueves 12,** un aviso en el grupo: la preventa cierra el viernes.
5. **La preventa trae caja antes del 14 de noviembre,** cuando vence Codex (PR #41).

Todos los mensajes los aprueba Sergio Urcullo, porque llegan a clientes.

**La grabación no se cruza:** la del taller se vende aparte (decisión 3 del PR #41). La comunidad no la incluye; tiene sus propias clases grabadas.

**Choca con dos recomendaciones,** y Sergio Urcullo elige una sola en la decisión 3:
- la decisión 8 del PR #41 recomienda un grupo gratis de WhatsApp para los inscriptos, "sin prometer todavía algo pago";
- la decisión 9 del mapa de operación recomienda un grupo gratis de WhatsApp después del taller.

Este plan suma las dos cosas: el grupo gratis de avisos y, aparte, la comunidad paga desde la primera clase. El #65 pide una escalera con comunidad paga, y Sergio Urcullo quiere caja pronto: "tener caja al menos hasta en 7 dias" (PR #41). Si elige la comunidad paga, la decisión 9 del mapa queda vieja y se abre un issue para actualizarla.

## 6. La comunidad paga

### Qué trae cada semana

- **Una clase en vivo de 60 minutos,** los miércoles a las 19:30, por Zoom: un tema nuevo y después "traé tu caso". Se graba. Va el miércoles para no chocar con las clases del taller, que son martes, jueves y sábado (PR #41). Erik Taveras da una llamada por semana en su comunidad, y Santiago Muñoz dos ([resumen](referentes/resumen-2026-10-29.md)).
- **Una plantilla los lunes,** lista para copiar: instrucciones de proyecto, un prompt o una tarea armada.
- **Un grupo para dudas.** Sergio Urcullo contesta dos veces por semana, no a toda hora, para que se pueda sostener.
- **Un objetivo por mes,** por ejemplo "dejale a Claude tu reporte semanal armado".
- **Para miembros:** la sesión 1 a 1 a Bs 250 en vez de Bs 350.

### Dónde (decisión 3)

**Recomendado: los dos grupos en una comunidad de WhatsApp, las clases por Zoom y el cobro por QR.**
- **Una comunidad de WhatsApp** con su grupo de avisos, donde solo escriben los administradores, y un grupo para charlar, solo para los que pagan. Se pueden sumar hasta 2.000 miembros a una comunidad y a su grupo de avisos. En el grupo de avisos, solo los administradores ven quiénes son los miembros ([ayuda de WhatsApp](https://faq.whatsapp.com/582420703681043/?locale=es_LA), consultada el 29-oct-2026). En el grupo para charlar los miembros sí se ven entre sí: se avisa al invitar.
- **Las clases, por Zoom Pro,** la misma cuenta que se pague para el taller: US$16,99 por mes, unos Bs 206 ([precios de Zoom](https://zoom.us/pricing), consultada el 29-oct-2026 en el PR #41). Google Meet gratis corta a los 60 minutos cuando hay 3 o más personas (mapa de operación), y la clase dura 60.
- **Las grabaciones y las plantillas,** en una carpeta de Drive compartida solo con los miembros.
- **A favor:** en Bolivia todos tienen WhatsApp, y se paga con QR sin tarjeta.
- **En contra:** está menos ordenado que Skool, y el cobro se confirma a mano.

**Las otras dos opciones:**
- **Skool Hobby:** US$9 por mes, más 10% y US$0,30 por cobro ([precios](https://www.skool.com/pricing) y [preguntas frecuentes de Skool](https://help.skool.com/article/86-subscriptions-faq), consultadas el 29-oct-2026).
  - Skool le paga a cuentas de Bolivia, pero los miembros pagan en dólares (misma fuente). Hace falta una tarjeta habilitada para el exterior.
  - Con 10 miembros a Bs 99, unos US$8,17 cada uno, Skool se lleva cerca del 25%: los US$9 fijos, el 10% y los US$0,30 de cada cobro.
  - Es lo que usan Erik Taveras y Santiago Muñoz, con clases en vivo, grabaciones y reseñas (fichas de [Erik](referentes/erik-taveras.md) y [Santiago](referentes/santiago-munoz.md)).
- **Solo el grupo gratis por ahora,** como recomiendan la decisión 8 del PR #41 y la 9 del mapa, y la comunidad paga recién con 50 miembros activos. Junta audiencia, pero no trae caja ahora.

### Precio (decisión 4)

**Recomendado: Bs 99 por mes, unos US$8,17. Los fundadores pagan Bs 79, congelado.**

| Referencia | Precio | En bolivianos |
|---|---|---|
| Skool de Erik Taveras ([ficha](referentes/erik-taveras.md)) | US$59 por mes | Unos Bs 715 |
| Skool de Santiago Muñoz ([ficha](referentes/santiago-munoz.md)) | US$64 por mes | Unos Bs 776 |
| Digital Launchpad de Iman Gadzhi ([ficha](referentes/iman-gadzhi.md)) | US$37 por mes | Unos Bs 448 |
| Talleres que hoy se anuncian en Bolivia ([resumen](referentes/resumen-2026-10-29.md)) | Pago único | Bs 250 a Bs 550 |
| El taller de entrada (PR #41) | Pago único | Bs 50 |
| Salario mínimo de Bolivia en 2026 ([Bloomberg Línea](https://www.bloomberglinea.com/latinoamerica/bolivia/rodrigo-paz-aumenta-un-20-el-salario-minimo-en-bolivia/), 18-dic-2025) | Por mes | Bs 3.300 |

- **Por qué Bs 99:** son dos talleres por mes. Es el 3% del salario mínimo, y menos de la mitad de lo que cobran los talleres de Bolivia por una sola vez.
- **Por qué el precio de fundador:** es la escalera que usan Erik Taveras (US$59, que sube a US$79 a los 250 miembros) y Santiago Muñoz (fundador a US$57, ahora US$64 y después US$79), con el precio congelado para quien entra antes ([resumen](referentes/resumen-2026-10-29.md)).
- **Cuándo se cubre el costo:** Zoom Pro, unos Bs 206 por mes, se paga con 3 miembros a Bs 79. Si el taller sigue, el taller ya lo paga.

### Cómo se cobra con QR

1. **Un solo día de cobro: el 16 de cada mes,** el día que arranca la comunidad. El pago de la preventa cubre del 16 de noviembre al 15 de diciembre.
2. El 16, cada miembro recibe por WhatsApp un mensaje con el QR de la cuenta, el monto y el mes que paga. El texto lo aprueba Sergio Urcullo una vez.
3. El miembro manda el comprobante por el mismo chat.
4. Sergio Urcullo confirma que el pago llegó a su banco, y el agente lo anota en la planilla de cobros de su Drive, nunca en Git (skill `registrar-movimiento`, issue #54).
5. Quien no pagó el día 21 recibe un recordatorio. Si no paga el 23, sale del grupo para charlar y de la carpeta, con un mensaje que le dice cómo volver.

Confirmar a mano alcanza para las primeras decenas de miembros. Si crece, el mapa de operación lista cómo confirmar solo: la API de QR del BNB, OpenBCB o una pasarela local desde Bs 249 por mes.

## 7. Llamadas 1 a 1 e implementación para negocios

"Luego las llamadas gratuitas o cobrarlas", pidió Sergio Urcullo (#65, 29-oct-2026).

### Gratis o pagas (decisión 6)

**Recomendado: el diagnóstico gratis es solo para negocios; la sesión 1 a 1 se paga.**
- **Diagnóstico gratis de 20 minutos,** solo para negocios que quieren la implementación.
  - Antes, tres preguntas por WhatsApp: rubro, qué quiere resolver y cuántas personas trabajan.
  - Hasta 3 por semana, para que no le coman la semana.
  - Así filtra Erik Taveras: su página "Trabajemos" manda a cada uno a un diagnóstico gratis, a una sesión paga o a un proyecto ([ficha](referentes/erik-taveras.md)). Santiago Muñoz agenda una cita de 30 minutos antes de su consultoría ([ficha](referentes/santiago-munoz.md)).
- **Sesión 1 a 1 paga,** de 60 minutos, para cualquiera.

### Sesión 1 a 1

- **Qué es:** 60 minutos por Zoom con pantalla compartida, sobre un caso de la persona. Termina con un plan escrito y la grabación.
- **Precio:** Bs 350, unos US$28,88. Bs 250 para miembros de la comunidad (decisión 7).
- **Cómo se compra:** escribe por WhatsApp, paga con QR por adelantado y elige el horario. El cobro adelantado es como en Erik Taveras, que cobra al reservar ([ficha](referentes/erik-taveras.md)).
- **Cuántas:** hasta 4 por semana.

### Implementación para negocios

- **Qué es:** dejar la IA trabajando en un negocio, con el dueño y su equipo. Son 3 sesiones de 90 minutos en dos semanas:
  1. **Diagnóstico y proyecto:** se arma un proyecto de Claude con la información del negocio: precios, preguntas frecuentes y procesos.
  2. **Tres tareas armadas,** por ejemplo respuestas a clientes, un reporte y contenido.
  3. **Práctica con el equipo** y el plan de lo que sigue.

  Incluye soporte por WhatsApp durante esas dos semanas.
- **Precio:** desde Bs 2.500, unos US$206. La mitad se paga al empezar y la otra mitad en la sesión 3, con QR (decisión 7).
- **De dónde salen los clientes:** del diagnóstico gratis, del contenido "voy a un negocio", de la palabra NEGOCIO y de los miembros de la comunidad que tienen negocio.
- **Con ONIA Platform:** cuando esté lista para clientes (issues #27 y #28), la implementación suma el asistente de WhatsApp, con su plan mensual aparte, desde Bs 320. La prueba con clínicas dentales del #61 va por su lado. Si se hace después del taller, como recomienda la decisión 14 del mapa, esta implementación puede ser su puerta de entrada.

**Los precios son sin factura.** Si se factura, el IVA es 13% y el IT 3% (mapa de operación): de cada Bs 2.500 quedan unos Bs 2.100. Los negocios suelen pedir factura. Se decide con el contador, y es legal.

### Referencias de precio

| Referencia | Qué | Precio | En bolivianos |
|---|---|---|---|
| Enrique Rocha ([ficha](referentes/enrique-rocha.md)) | Llamada Express de 20 minutos | 299 MXN, unos US$15 | Unos Bs 182 |
| Enrique Rocha ([ficha](referentes/enrique-rocha.md)) | Quick Call de 45 minutos | US$79 | Unos Bs 957 |
| Erik Taveras ([ficha](referentes/erik-taveras.md)) | Diagnóstico de 15 minutos | US$75 | Unos Bs 909 |
| Erik Taveras ([ficha](referentes/erik-taveras.md)) | Power Session de 60 minutos | US$397 | Unos Bs 4.812 |
| Erik Taveras ([ficha](referentes/erik-taveras.md)) | Mentoría de 4 semanas, en su página vieja | US$1.200 | Unos Bs 14.544 |
| Santiago Muñoz ([ficha](referentes/santiago-munoz.md)) | Consultoría para empresas | Desde US$2.500 | Unos Bs 30.300 |
| Agencias con sede en Bolivia en [Clutch](https://clutch.co/bo/agencies/digital), un directorio de terceros (consultada el 29-oct-2026) | Hora de trabajo | De menos de US$25 a US$50-99; de las 6 que publican tarifa, 5 cobran menos de US$50 | Hasta unos Bs 600, la mayoría |

Bs 350 la hora queda en el rango de las agencias de Bolivia, y muy por debajo de los referentes, que cobran a toda Latinoamérica.

## 8. Calendario de 30 días

Del sábado 31 de octubre al domingo 29 de noviembre de 2026. Arranca el día que arrancan los anuncios del taller y usa las fechas que propone el PR #41. **Si cambian, todo se corre igual.** Los talleres de las semanas 2 a 4 van solo si Sergio Urcullo da el sí a seguir con anuncios, porque es gasto.

**Todas las semanas:**
- **Domingo y miércoles:** tandas de grabación, con los guiones aprobados el día antes.
- **Todos los días:** los cortos de la semana (ver "Frecuencia y horas") y unos 15 minutos para comentarios y mensajes.
- **Desde la semana 2:** un video de YouTube, que sale el viernes.
- **Desde la semana 3:** la plantilla de la comunidad el lunes y la clase en vivo el miércoles a las 19:30.

| Cuándo | Qué | Quién |
|---|---|---|
| **Semana 1: el primer taller** | | |
| Antes, jue 29 y vie 30-oct | La página, WhatsApp, el pago de los anuncios y los videos del anuncio, según el PR #41 | Sergio Urcullo, con la sesión del #6 |
| Sáb 31 | Arrancan los anuncios. Primer corto, grabado con los videos del anuncio, en su perfil, su página y sus estados: quién es y qué va a mostrar, con TALLER | Sergio Urcullo publica |
| Dom 1-nov | Grabación de los tutoriales de la semana. El agente deja los textos de la comunidad, de la preventa y del permiso para avisos | Sergio Urcullo graba; agente redacta |
| Lun 2 | Aprueba los textos de la comunidad, la preventa y el permiso. Corto CLAUDE | Sergio Urcullo |
| Mar 3 | Clase 1 del taller, de 19:00 a 22:00. Al final, el grupo de avisos y la preventa. Corto PROYECTO | Sergio Urcullo |
| Mié 4, vie 6 y dom 8 | Mensaje a los asistentes de la clase anterior que dijeron sí a los avisos | Sergio Urcullo manda lo aprobado |
| Mié 4 | Grabación | Sergio Urcullo |
| Jue 5 | Clase 2 del taller, de 19:00 a 22:00 | Sergio Urcullo |
| Sáb 7 | Clase 3 del taller, de 9:00 a 12:00 | Sergio Urcullo |
| Dom 8 | Balance del taller (PR #41). Grabación del primer video de YouTube | Sergio Urcullo |
| **Semana 2: la preventa** | | |
| Mar 10, jue 12 y sáb 14 | Segundo taller, si da el sí | Sergio Urcullo |
| Durante la semana, si da el sí | Ofrecer el diagnóstico gratis y la implementación a sus contactos con negocio | Agente redacta, Sergio Urcullo aprueba y manda |
| Jue 12 | Aviso en el grupo: la preventa cierra el viernes | Sergio Urcullo manda lo aprobado |
| Vie 13 | Primer video de YouTube. A las 23:59 cierra la preventa de fundador | Sergio Urcullo |
| Dom 15 | Grabación. Preparar la primera clase de la comunidad | Sergio Urcullo |
| **Semana 3: arranca la comunidad** | | |
| Lun 16 | Bienvenida en la comunidad y primera plantilla | Agente arma, Sergio Urcullo aprueba |
| Mar 17, jue 19 y sáb 21 | Tercer taller, si da el sí | Sergio Urcullo |
| Mié 18 | Primera clase de la comunidad, de 19:30 a 20:30 | Sergio Urcullo |
| Vie 20 | Segundo video de YouTube | Sergio Urcullo |
| **Semana 4: los 3 por día** | | |
| Lun 23 | Clase abierta gratis en YouTube Live, de 19:30 a 20:15 | Sergio Urcullo |
| Mar 24, jue 26 y sáb 28 | Cuarto taller, si da el sí | Sergio Urcullo |
| Mié 25 | Clase de la comunidad | Sergio Urcullo |
| Vie 27 | Tercer video de YouTube | Sergio Urcullo |
| Sáb 28 | Ofrecer sesiones 1 a 1 a los miembros, a Bs 250. Pedirle a un negocio el primer "voy a un negocio" | Agente redacta, Sergio Urcullo aprueba y manda |
| Dom 29 | Los números del mes (ver abajo) y qué sigue | Agente arma, Sergio Urcullo decide |

## 9. Cómo se mide

| Escalón | Qué se cuenta | Dónde |
|---|---|---|
| Contenido | Seguidores nuevos por red, comentarios con palabra clave y guías enviadas | Cada red |
| Clase abierta | Personas en vivo y vistas de la grabación | YouTube |
| Taller | Chats, inscriptos que pagaron, asistentes y grabaciones vendidas | WhatsApp con etiquetas y la planilla (PR #41) |
| Comunidad | Miembros que pagaron, y cuántos asistentes del taller entraron | La planilla de cobros |
| Llamadas e implementación | Diagnósticos, sesiones e implementaciones vendidas | La planilla de cobros |
| Todo | Caja neta del mes: cobros menos anuncios y herramientas | La planilla de cobros |

**Supuestos a medir, porque no hay datos propios:**
- **Del taller a la comunidad:** entre el 10% y el 20% de los asistentes. Es un supuesto: los referentes no publican esa cifra. Como pista, Erik Taveras tiene 3.056 personas en su comunidad gratis y 126 en la paga, un 4% ([ficha](referentes/erik-taveras.md)). Quien pagó el taller ya compró una vez, así que debería pasar más.
- **Cuánta caja hace falta:** el piso son los US$120 por mes de Claude y Codex del plan de arranque (`plataforma/2026-10-28-seguir-con-onia-platform.md`), más Zoom Pro, US$16,99. Son US$136,99, unos Bs 1.660. No cuenta el VPS ni Higgsfield, que no tienen monto en el repo. El plan de Claude baja a Max 5x, US$100 por mes (#30).

  | Cómo se llega a Bs 1.660 por mes | |
  |---|---|
  | Solo comunidad | 22 miembros a Bs 79 |
  | Solo sesiones 1 a 1 | 5 sesiones a Bs 350 |
  | Solo implementación | 1 implementación a Bs 2.500 |

  La comunidad da ingreso todos los meses, pero tarda en llegar. Las sesiones y las implementaciones traen caja antes.

## 10. Lo que tiene que hacer Sergio Urcullo

1. Contestar las decisiones de abajo.
2. Grabar en las tandas, y dar las clases y las sesiones.
3. Aprobar con captura todo lo que sale: guiones, guías y mensajes.
4. Confirmar cada pago en su banco.
5. Contar el punto de partida: cuántos seguidores tiene hoy en cada red y si tiene Instagram profesional.

## Decisiones para Sergio Urcullo

Tres opciones por decisión, con la recomendada marcada. Su respuesta se cita con sus palabras en un comentario del PR.

1. **¿De qué habla?**
   - **IA práctica para el trabajo y el negocio: Claude en el trabajo, la IA en negocios bolivianos y detrás de escena (recomendada).**
   - Solo Claude para el trabajo, como Enrique Rocha. ONIA Platform queda afuera de la marca personal.
   - Solo IA para dueños de negocio. Queda más cerca de ONIA Platform, pero el taller de Bs 50 es para todo público.
2. **¿Cómo llega a 3 videos por día?**
   - **De a poco: 1 por día las dos primeras semanas, 2 la tercera y 3 la cuarta, con YouTube semanal desde la segunda (recomendada).** De unas 8 a unas 22 horas por semana solo de contenido.
   - 3 por día y YouTube semanal desde el primer día: unas 22 horas por semana de contenido, en la misma semana de las 9 horas de clase del primer taller.
   - Quedarse en 1 por día, con YouTube cada dos semanas: unas 11 horas por semana.
3. **¿Qué pasa al final del taller?**
   - **Las dos cosas: el grupo gratis de avisos y una comunidad paga aparte, en WhatsApp, con clases por Zoom y cobro por QR, en preventa desde la primera clase (recomendada).**
   - La comunidad paga en Skool Hobby: US$9 por mes, 10% y US$0,30 por cobro, y los miembros pagan en dólares con tarjeta.
   - Solo el grupo gratis por ahora, como recomiendan la decisión 8 del PR #41 y la 9 del mapa. La paga, con 50 miembros activos.
4. **¿Cuánto cuesta la comunidad?**
   - **Bs 99 por mes, y Bs 79 para los primeros 30 de la preventa (recomendada).**
   - Bs 49 por mes: se vende más fácil, pero hacen falta el doble de miembros para lo mismo.
   - Bs 149 por mes: más margen, más difícil para público general.
5. **¿Clases gratis?**
   - **Una clase abierta por mes, de 45 minutos, en YouTube Live (recomendada).**
   - Una por semana: trae más gente, pero suma unas 4,5 horas más por mes.
   - Ninguna por ahora: lo gratis son los videos.
6. **¿Las llamadas, gratis o pagas?**
   - **Diagnóstico gratis de 20 minutos solo para negocios que quieren la implementación, y la sesión 1 a 1 paga (recomendada).**
   - Todo pago, también el diagnóstico, como Erik Taveras, que cobra US$75 el suyo de 15 minutos.
   - Una llamada gratis de 20 minutos para cualquiera, y la sesión paga después. Trae más gente, pero son horas sin cobrar.
7. **¿Cuánto cuestan las llamadas y la implementación?** Sin factura.
   - **Sesión 1 a 1 a Bs 350, Bs 250 para miembros, e implementación desde Bs 2.500 (recomendada).**
   - Más bajo: Bs 200 la sesión e implementación desde Bs 1.500.
   - Más alto: Bs 600 la sesión e implementación desde Bs 4.000.
8. **¿Enseñar o el producto?**
   - **Las dos, en orden: enseñar en noviembre y diciembre, la prueba con clínicas después del primer taller, y comparar con números el 31-ene-2027 (recomendada).**
   - Las dos a la vez desde ya: la prueba con clínicas antes del 30-nov, como dice la decisión de la plataforma.
   - Solo enseñar hasta tener audiencia; la plataforma espera.

## Lo que queda para después

- **El nombre de la comunidad.** Lo ve el cliente. El taller no usa el logo de Claude ni da a entender que es un curso oficial de Anthropic (PR #41, "Mensaje"). Lo mismo vale para la comunidad, y conviene que su nombre no lleve "Claude".
- **La devolución de la comunidad y de las sesiones,** por ejemplo devolver el primer mes si no sirvió, como la garantía de 14 días de Erik Taveras en Skool ([ficha](referentes/erik-taveras.md)). Es legal: la decide Sergio Urcullo.
- **La factura de la comunidad, las sesiones y la implementación.** Se ve con el contador. Es legal.
- **Los textos de permiso:** para los avisos, para usar testimonios y para grabar en un negocio. Son legales.
- **El mapa de operación:** si elige la comunidad paga, su decisión 9 queda vieja. Va a un issue.

## Límites de este plan

- **No hay datos propios.** Las conversiones y las horas son supuestos o estimaciones; se corrigen con los números del 29-nov.
- **El precio de la comunidad no se probó en Bolivia.** No se encontró una comunidad paga de IA en Bolivia para comparar.
- **Los datos de Instagram y TikTok** de los referentes son los de sus fichas, que no pudieron ver los reels sin iniciar sesión.
- **Lo legal** se cita de normas públicas, sin la opinión de un abogado.
