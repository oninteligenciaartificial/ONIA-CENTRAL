# Plan de marca personal y escalera de ventas

29-oct-2026, por Claude Code, para el [issue #65](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/65).

**Estado: borrador para que lo apruebe Sergio Urcullo.** No se publica nada, no se gasta y no se crea nada a su nombre sin su sí con captura: páginas, cuentas, grupos, comunidad. Lo que es decisión suya va al final, con tres opciones y la recomendada marcada.

Sale de:
- lo que pidió Sergio Urcullo en el #65, también en el [comentario del 29-oct](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/65) que suma 3 videos por día, YouTube, clases y llamadas gratis o pagas, y el análisis de enseñar contra el producto;
- las fichas de cuatro referentes y su resumen, en [`referentes/`](referentes/resumen-2026-10-29.md) (PR #40). Las cifras de los referentes son al 29-oct-2026 y cada ficha trae sus fuentes;
- el plan del primer taller, `workshops-comunidad/plan-meta-ads-borrador.md` (PR #41), en su versión del 29-oct-2026 (commit `4e48f5a`). Ahí está, con sus palabras, lo que decidió Sergio Urcullo sobre el taller, la sala, la grabación, la devolución, los costos y los grupos. Lo lleva otra sesión, y este plan no lo cambia;
- el mapa para operar ONIA, `docs/decisiones/2026-10-29-mapa-operacion-onia.md`, ya en `main`.

Los dólares se pasan a bolivianos a Bs 12,12, el cambio oficial vigente desde el 29-oct-2026 ([BCB](https://www.bcb.gob.bo/librerias/indicadores/dolar/bolsin.php), consultada el 29-oct-2026).

## En corto

Lo pidió Sergio Urcullo en el #65: que el taller escale a una comunidad, la comunidad a llamadas 1 a 1, y la marca personal venda todo. La escalera queda así:

| Escalón | Qué es | Precio | Cobro | Estado |
|---|---|---|---|---|
| 1. Gratis | 3 videos cortos por día, un video de YouTube por semana, guías por palabra clave, una clase abierta por mes y su comunidad grande de WhatsApp | Gratis | — | La comunidad grande la decidió él; el resto, propuesto (decisiones 2 y 5) |
| 2. Taller de entrada | "Claude de 0 a 100": una serie de 3 clases distintas por Meet, con la grabación incluida | Bs 50 cada clase, o Bs 120 las tres | QR, a mano | Decidido el 29-oct (PR #41) |
| 3. Grupo de miembros | Dentro de su comunidad de WhatsApp: una clase en vivo por semana, una plantilla por semana y dudas | Bs 99 por mes. Fundadores: Bs 79 | QR, cada mes | Propuesto (decisiones 3, 4 y 9) |
| 4a. Llamadas | Diagnóstico gratis de 20 minutos para negocios. Sesión 1 a 1 paga, de 60 minutos | Gratis y Bs 350 | QR por adelantado | Propuesto (decisiones 6 y 7) |
| 4b. Implementación para negocios | 3 sesiones de 90 minutos para dejar la IA andando en un negocio | Desde Bs 2.500 | QR, mitad al empezar | Propuesto (decisión 7) |
| Después | ONIA Platform. El asistente de WhatsApp viene incluido desde el plan Completo, de Bs 1.290; en los otros va aparte, a Bs 390 por mes | Planes desde Bs 320 por mes | — | Cuando se cierren los issues #27 y #28 |

Los precios de ONIA Platform salen de [onia.com.bo/precios](https://onia.com.bo/precios), consultada el 29-oct-2026, y de `plataforma/2026-10-28-seguir-con-onia-platform.md`.

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
| Cuándo trae caja | Con el primer taller, la primera semana de noviembre | Cuando se cierren los issues #27 y #28 y salga la prueba con clínicas (#61) |
| Cuánto por venta | Bs 50 una clase o Bs 120 la serie, de Bs 79 a Bs 99 por mes el grupo de miembros, Bs 350 una sesión y desde Bs 2.500 una implementación | De Bs 320 a Bs 2.900 por mes por cliente, más el asistente de WhatsApp en los planes que no lo traen (mismo documento) |
| De qué depende | De las horas de Sergio Urcullo: grabar, dar clases y llamadas. Si deja de publicar, deja de vender | De que el producto ande y se venda a negocios. Cada cliente paga todos los meses, pero mantenerla pide horas aunque no haya clientes (mismo documento) |
| Riesgo | Mucha competencia en IA en español, y los temas de moda cambian | Tarda, y depende del VPS y de que le funcione al cliente |

**¿Alcanza una sola?**
- **El piso de gastos:** Claude, Codex, el VPS y Higgsfield suman "Más de US$300" por mes, según Sergio Urcullo (PR #41). Son unos Bs 3.636 o más. Hoy Claude es el plan de US$200 y baja a US$100 el 3-nov (#30).
- **Enseñando,** ese piso se cubre con 43 miembros (los 30 fundadores a Bs 79 y 13 más a Bs 99), 11 sesiones o 2 implementaciones por mes (ver "Cómo se mide").
- **Con el producto,** con 14 clientes del plan básico. La plataforma factura (mismo documento): con IVA e IT, cada cliente de Bs 320 deja unos Bs 269. El documento de precios de junio ponía el punto de equilibrio en 7 u 8 clientes del básico, con la infraestructura de entonces: hay que recalcularlo (#60).
- **Ninguna alcanza sola para siempre.** Enseñar trae caja rápido, pero depende de sus horas. El producto cobra todos los meses, pero hoy no cobra y su mantenimiento ya pide horas.

**Los referentes hacen las dos cosas,** salvo uno:
- Erik Taveras vende TalosFlow, un CRM de WhatsApp a US$49 por mes, además de su Skool y sus talleres, y vende con la demo de su propio producto ([ficha](referentes/erik-taveras.md)).
- Santiago Muñoz mete Forja+, 14 chatbots listos para revender, dentro de su Skool, y vende consultoría desde US$2.500 ([ficha](referentes/santiago-munoz.md)).
- Iman Gadzhi es copropietario de Whop, donde venden sus alumnos, y dice que por eso su reto es gratis ([ficha](referentes/iman-gadzhi.md)).
- Enrique Rocha vive solo de enseñar, con 292 mil seguidores en Instagram ([ficha](referentes/enrique-rocha.md)).

**Cómo cada una le da prueba a la otra:**
- **El producto prueba que sabe hacer.** Aparece en los videos "voy a un negocio" y en la implementación, cuando esté listo para clientes.
- **Enseñar prueba que sabe enseñar,** y trae confianza y contactos. De cada taller y cada video salen dueños de negocio que pueden pasar a la implementación y, después, a la plataforma.
- **La implementación para negocios es el puente** entre las dos.
- **Lo grabado y lo recurrente** hacen que enseñar dependa menos de sus horas. El grupo de miembros cobra todos los meses. Y las grabaciones de cada serie se pueden volver a vender: "El curso puede vender las grabaciones para que lo tengan para siempre" (Sergio Urcullo, #65). Eso lo define el #6.

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
- **Es práctico:** en el taller y en el grupo de miembros se trabaja con los archivos de cada uno. Contra los webinars gratis de venta, como el de Eduardo Vázquez, es la misma diferencia que usa el plan del taller (PR #41).

**Qué no promete:** ingresos ni ahorros en plata. Meta pide que los anuncios no prometan resultados económicos irreales ([guía de políticas de Meta](https://en-gb.facebook.com/business/m/small-business/ad-policy-guidance)). A Iman Gadzhi, que promete "$373 por día", Meta le dio de baja varios anuncios sin decir el motivo ([ficha](referentes/iman-gadzhi.md)). Además, lo legal lo aprueba Sergio Urcullo.

**Marca personal y ONIA:** la marca personal vende lo que enseña Sergio Urcullo: taller, grupo de miembros y llamadas. ONIA vende la plataforma. La implementación para negocios une las dos.

**La página ya está decidida.** Sergio Urcullo eligió anunciar desde "mi marca personal, perfil personal" (PR #41, 29-oct-2026). Como los anuncios que abren WhatsApp piden una página de Facebook, sale de una página con su nombre, y su perfil personal se usa para publicar gratis (PR #41). La ayuda de Meta lo confirma:
- un anuncio que abre WhatsApp se arma eligiendo una página, con el número conectado a esa página o al portafolio ([ayuda de Meta](https://www.facebook.com/business/help/447934475640650), consultada el 29-oct-2026);
- un perfil en modo profesional no se integra con Meta Business Suite, y Meta recomienda una página a quien quiere manejar su presencia con un equipo ([ayuda de Meta](https://www.facebook.com/business/help/1608528132896450) y [preguntas frecuentes](https://www.facebook.com/business/help/251342092572308), consultadas el 29-oct-2026).

Con el modo profesional, su perfil personal puede tener seguidores sin límite y estadísticas (mismas fuentes). Activarlo es un cambio en su cuenta: lo decide él.

## 3. Contenido

### Lo que pidió

"3 videos diarios, un video horizontal de YouTube enseñando algo gratis, pero luego se enseña más avanzado o todo completo en el curso" (Sergio Urcullo, #65, 29-oct-2026).

**Este plan lo lee como 3 cortos por día y un video de YouTube por semana.** Un video largo por día serían unas 40 horas por semana solo de YouTube, con las horas de abajo. Si quiso decir otra cosa, se cambia.

**La regla de qué es gratis y qué es pago:**
- **Gratis, en YouTube y en los cortos:** un tema entero, con un ejemplo. Qué es y cómo se hace el primer paso.
- **Pago, en el taller:** el sistema completo, en vivo y con tus archivos, con la grabación incluida.
- **Pago, en el grupo de miembros:** lo nuevo de cada semana y tu caso.

Así lo hacen Santiago Muñoz, con tutoriales gratis de 15 a 60 minutos que mandan a su Skool ([ficha](referentes/santiago-munoz.md)), y Erik Taveras, que pone el enlace a su Skool en la primera línea de la descripción de sus videos ([ficha](referentes/erik-taveras.md)). El tutorial largo de Claude de Iman Gadzhi tiene 1,77 millones de vistas ([resumen](referentes/resumen-2026-10-29.md)).

### Dónde

- **Facebook va primero.** En Bolivia tenía 8.632.400 usuarios en septiembre de 2026, contra 2.834.600 de Instagram ([NapoleonCat, Facebook](https://napoleoncat.com/stats/facebook-users-in-bolivia/) e [Instagram](https://napoleoncat.com/stats/instagram-users-in-bolivia/), un sitio de terceros, consultadas el 29-oct-2026). Además, su perfil personal y su página son donde eligió anunciar y publicar (PR #41).
- **Cada corto va a seis lugares:** su perfil y su página de Facebook, sus estados de WhatsApp, TikTok, Instagram y YouTube Shorts. Para TikTok en Bolivia no se encontró una cifra confiable.
- **El video horizontal va a YouTube.** Los Shorts de Enrique Rocha rinden poco, con 1,7 mil vistas el mejor de sus últimos 48 ([ficha](referentes/enrique-rocha.md)); lo que trae audiencia en YouTube es el video largo, como en Santiago Muñoz.
- **Punto de partida:** falta saber cuántos seguidores tiene hoy en cada red y si tiene Instagram profesional. "ONIA Ads" no tiene un Instagram conectado (PR #41).

### Los 3 cortos de cada día

| Corto | Qué es | Cierra con |
|---|---|---|
| 1. Tutorial | Un truco o una herramienta, con la pantalla. Es la pieza fuerte | Una palabra clave |
| 2. Recorte del video de YouTube de la semana | Un minuto del video largo | "El video completo está en mi YouTube" |
| 3. Liviano | Detrás de escena, una novedad de Claude, la respuesta a un comentario o un testimonio con permiso | Seguirlo, o la próxima clase |

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
  3. La guía termina con la próxima clase y un enlace a su WhatsApp.

  Así lo hacen Erik Taveras, Santiago Muñoz y Enrique Rocha. Con ese llamado, los comentarios de Enrique llegan al 40-80% de los "me gusta"; sin él, al 3-8% ([resumen](referentes/resumen-2026-10-29.md)).
- **Dónde viven las guías:** en documentos de Google públicos de su Drive, sin pedir correo, como las de Santiago Muñoz ([ficha](referentes/santiago-munoz.md)). No cuesta nada y no pide herramientas nuevas. El contacto se junta en WhatsApp, que es donde se vende en Bolivia.
- **Quién contesta:** en Instagram, como diga la decisión 7 del mapa de operación: el agente propone y Sergio Urcullo aprueba cada tanda, o sale solo con un texto aprobado una vez. Lo arma el issue #51. Por la API de Instagram, cada comentario recibe una sola respuesta privada, dentro de 7 días (mapa de operación). En Facebook y TikTok, y en Instagram mientras no esté el #51, contesta él a mano.
- **Reglas:**
  - una palabra por tutorial, corta y en mayúsculas;
  - la guía dice exactamente lo que prometió el video. A Enrique Rocha le reclaman en los comentarios que lo que llega por mensaje no coincide con el video ([ficha](referentes/enrique-rocha.md));
  - a quien escribe por WhatsApp se le contesta lo que pidió. Para mandarle mensajes después, hace falta su permiso (ver "El camino, paso a paso").
- **Las palabras del primer mes:**

  | Palabra | Qué recibe |
  |---|---|
  | CLAUDE | Guía de primeros pasos: cuenta, proyectos y archivos |
  | PROYECTO | Las instrucciones de proyecto que usa Sergio Urcullo |
  | ARCHIVOS | 5 pedidos para hacerle a Claude con tus archivos |
  | TALLER | Las fechas, el temario y el precio de la serie, por WhatsApp |
  | NEGOCIO | Qué incluye la implementación para negocios, por WhatsApp |

### Frecuencia y horas

**Recomendado: llegar a los 3 cortos por día en cuatro semanas, y un video de YouTube por semana desde la segunda** (decisión 2).

| Semana | Cortos por día | YouTube |
|---|---|---|
| 1: 31-oct al 8-nov, la primera serie | 1, el tutorial | No |
| 2: 9 al 15 | 1 | El primero |
| 3: 16 al 22 | 2: tutorial y recorte | Sí |
| 4: 23 al 29 | 3 | Sí |

**Por qué de a poco:** la primera semana Sergio Urcullo da la primera serie y atiende sus ventas. Y arranca su plan de aprendizaje el 2-nov. Si las horas no dan, se queda en 2 por día.

**Las horas de la semana,** estimación propia, porque no hay datos suyos:
- un corto propio: 15 minutos de grabación, 20 de edición y 15 de publicación en los seis lugares;
- un recorte del video de YouTube: 15 minutos de edición y 15 de publicación;
- un video de YouTube: 2,5 horas de grabación, 3 de edición y un cuarto de hora de publicación;
- comentarios y mensajes del contenido: 15 minutos por día;
- aprobar guiones: una hora por semana;
- el taller, cada semana que haya serie: unas 5 horas en vivo, si la primera clase dura 2 y las otras 1,5 (PR #41, que deja la primera a decidir entre 2 y 3 horas); una hora para preparar cada clase; y 45 minutos por día para atender, confirmar pagos y mandar los mensajes uno por uno;
- el grupo de miembros: la clase de 50 minutos, una hora para prepararla, media hora para la plantilla y dos rondas de dudas de media hora;
- la clase abierta: 45 minutos y 45 de preparación.

| Semana | Contenido | Taller, si hay serie | Miembros | Clase abierta | Total |
|---|---|---|---|---|---|
| 1 | 8,6 h | 13,3 h | — | — | Unas 22 h |
| 2 | 14,3 h | 13,3 h | — | — | Unas 27,5 h |
| 3 | 17,8 h | 13,3 h | 3,3 h | — | Unas 34,5 h |
| 4 | 23,7 h | 13,3 h | 3,3 h | 1,5 h | Unas 42 h |

A eso se suman las sesiones 1 a 1, hasta 5 horas por semana, y cada implementación: unas 3,5 horas por semana durante dos semanas, entre las sesiones, la preparación y el soporte. **La peor semana llega a unas 50 horas.** Y no cuenta la prueba con clínicas que recomienda la decisión 8, el plan de aprendizaje desde el 2-nov ni el resto de ONIA. Si no hay serie después de la semana 1, la semana 4 baja a unas 28,5 horas.

**Para bajar horas:**
- una herramienta que saque los recortes del video largo, como Opus Clip Pro, US$29 por mes. Es parte de la opción "completo" de la decisión 4 del mapa, que con Canva Pro y ElevenLabs suma unos US$47 por mes. Es gasto y pide su sí. Además, lo de afuera se paga con una tarjeta de crédito con límite de Bs 7.000, unos US$578, que ya carga Claude, Codex, el VPS, Higgsfield y los anuncios (PR #41);
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
- **Qué se da:** un tema entero, por ejemplo "tu primer proyecto en Claude", y preguntas. Al final, 5 minutos: la próxima serie y el grupo de miembros.
- **Por qué YouTube Live:** queda en el canal como un video gratis más. Pide el canal verificado, y se puede transmitir desde la computadora con la cámara ([ayuda de YouTube](https://support.google.com/youtube/answer/2474026?hl=es-419), consultada el 29-oct-2026).
- **Cuándo:** un día sin clase del taller. La primera, el lunes 23 de noviembre a las 19:30, avisada en la comunidad grande.
- **Referencias:**
  - Santiago Muñoz da masterclasses gratis de 4 a 5 horas, con regalos para quien está en vivo y una oferta de 24 horas después ([ficha](referentes/santiago-munoz.md)).
  - Iman Gadzhi hace un reto gratis de 5 días ([ficha](referentes/iman-gadzhi.md)).
  - Enrique Rocha no hace webinars gratis de venta, y se diferencia por eso: sus páginas dicen que su taller no es "una masterclass de 47 minutos con 40 de venta" ([ficha](referentes/enrique-rocha.md)). Por eso la clase abierta enseña de verdad, y la oferta dura 5 minutos al final.

## 5. El taller y el camino hasta la comunidad grande

### El taller

**Lo que decidió Sergio Urcullo** el 29-oct-2026, con sus palabras en el PR #41:
- el taller y el nombre, "Claude de 0 a 100", para todo público de Bolivia y sin factura: "el curso low ticket sera informal";
- "3 clases distintas": una serie por semana, a Bs 50 cada clase o Bs 120 las tres, el martes 3, el jueves 5 y el sábado 7 de noviembre;
- "que la primera sea larga para introducir y que haya preguntas y demás, pero las demás, digamos que sea máximo una hora y media de clase";
- la grabación, "Incluida en los Bs 50";
- la sala: "Algo free, puede ser meet y de que se venza lo abrimos el nuevo link";
- el cobro, "QR a mano", y la devolución: "que no haya nunca reembolso";
- la cuenta "ONIA Ads", la página con su nombre y US$10 por día de anuncios durante 7 días.

**Cómo queda la sala** (PR #41): Meet gratis corta a los 60 minutos las reuniones de 3 o más personas, y admite hasta 100 ([ayuda de Google Meet](https://support.google.com/meet/answer/7317473?hl=es-419), consultada el 29-oct-2026). A la hora, el enlace nuevo va por el grupo de WhatsApp de esa fecha. Meet gratis no graba ([ayuda de Google Meet](https://support.google.com/meet/answer/9308681?hl=es-419), consultada el 29-oct-2026): se graba con un grabador de pantalla en la PC, que si hay que instalarlo pide el OK de Sergio Urcullo, y se sube a YouTube como no listado.

### Lo que pidió para la comunidad

"Primero vamos armando grupos, grupos grupos por cada fecha y por cada taller pero luego armemos una comunidad grande en donde siempre se envíen cosas. Por ejemplo ya tengo una comunidad en WhatsApp, así que este punto hay que analizarlo bien, cómo sería el [funnel] para luego moverlo hacia otra clase y seguir escalando eso" (Sergio Urcullo, 29-oct-2026). El PR #41 trae la primera parte; la cita entera está en el comentario "Arreglos de la revisión 2" de este PR, que trajo la sesión del #6.

### Cómo se arma en WhatsApp

**La comunidad grande es la comunidad de WhatsApp que ya tiene,** si sirve. "Hay que analizarlo bien":
- **Faltan cuatro datos:** desde qué número la creó, cuántos miembros tiene, cómo se llama y para qué entraron.
- **Si entraron por otra cosa,** el primer aviso explica el cambio: que ahí van a llegar clases y guías de IA, y cómo salir.
- **Si no sirve,** por ejemplo porque es de la familia o de otro negocio, se crea una comunidad nueva desde un número de WhatsApp normal. La app WhatsApp Business no puede crear comunidades ([ayuda de WhatsApp](https://faq.whatsapp.com/438859978317289), leída el 29-oct-2026 por la revisión 2 y por la sesión del #6).
- **El número que administra la comunidad lo ven los miembros** en los grupos donde escribe. Los grupos de cada clase se crean desde ese número.
- **El número que vende el taller** todavía es una decisión del PR #41 (su decisión 1). Si es otro, ese número manda los enlaces en la confirmación del pago.

**Las partes:**
- **El grupo de avisos es "donde siempre se envían cosas".** Todos los miembros de la comunidad están en él, y solo los administradores mandan avisos ([ayuda de WhatsApp](https://faq.whatsapp.com/582420703681043/?locale=es_LA), consultada el 29-oct-2026). Los miembros pueden responder debajo de cada aviso, y los demás ven esas respuestas, sin el número de quien responde ([revisión 3](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/66), ayuda de WhatsApp 1859295147860069): hay que moderarlas.
  - Solo los administradores ven quiénes son los miembros (misma ayuda). No se menciona a nadie con @ en los avisos, porque eso muestra su número a toda la comunidad ([guía de WhatsApp](https://www.whatsapp.com/communities/learning/buildingasafecommunity), consultada el 29-oct-2026).
  - Van 2 o 3 avisos por semana: la guía de la semana, la próxima clase o serie, y la clase abierta del mes. Más que eso empuja a silenciar o a salir; es un supuesto a medir con cuántos salen.
- **Un grupo por clase y por fecha,** dentro de la comunidad. Por ejemplo, "Clase 1 · Claude de 0 a 100 · mar 3-nov".
  - **Por qué por clase y no por serie:** cada grabación le llega solo a quien pagó esa clase. Quien compra las tres entra a tres grupos.
  - **Solo entra quien pagó.** En una comunidad, los miembros ven los grupos y pueden pedir entrar (ayuda de WhatsApp 967457667545238, revisión 3). Por eso los grupos de clase piden aprobación, y se aprueba solo a quien está en la lista "Pagó".
  - En el grupo, los miembros se ven entre sí: se avisa al invitar.
- **Un grupo de miembros,** también dentro de la comunidad, solo para los que pagan (decisión 3). También pide aprobación.

**Los límites:**
- Una comunidad admite hasta 2.000 miembros, contando el grupo de avisos, y hasta 100 grupos ([ayuda de WhatsApp](https://faq.whatsapp.com/438859978317289), leída por las revisiones 2 a 4 y por la sesión del #6). Una guía más vieja de WhatsApp decía 50 grupos.
- Con el grupo de miembros, quedan unos 98 lugares para clases. A 3 grupos de clase por semana, se llenan en unas 33 semanas; antes, si una clase pasa de 80 inscriptos y se abre otra fecha (PR #41). Los grupos viejos se cierran y se sacan.
- **Al sacar un grupo no se marca "Remove group members".** Así su gente sigue en la comunidad grande (ayuda de WhatsApp 970281987938470, revisión 3).
- Si la comunidad se acerca a los 2.000, se abre una segunda comunidad o un canal de WhatsApp. En un canal, el número de cada seguidor no lo ven los demás seguidores, y el administrador lo ve solo si lo tiene guardado ([WhatsApp](https://www.whatsapp.com/channels), consultada el 29-oct-2026).

### El camino, paso a paso

1. **Te ve:** los cortos, YouTube, los anuncios del taller (PR #41) y la clase abierta.
2. **Escribe o se suma gratis:** por la palabra clave y la guía, o por el botón del anuncio, que abre WhatsApp. La guía, la respuesta automática y la clase abierta llevan el enlace a la comunidad grande: "Sumate gratis a mi comunidad: una guía por semana y las clases nuevas." Así la comunidad grande es el escalón gratis, también para quien todavía no pagó.
3. **Paga:** con QR, Bs 50 una clase o Bs 120 las tres.
4. **Entra:** la confirmación del pago trae el enlace al grupo de su clase y dice, claro:
   > El grupo de tu clase está dentro de mi comunidad de WhatsApp. Al entrar, recibís sus avisos: una guía por semana y las clases nuevas. Los podés silenciar. En el grupo de tu clase, los demás ven tu número. Si preferís no estar en la comunidad, avisame y te mando el enlace de la clase y la grabación por acá.

   - Quien está en una comunidad recibe siempre sus avisos (ayuda de WhatsApp 1131457590844955), y quien sale de la comunidad sale de todos sus grupos (ayuda de WhatsApp 1312647189536807), según la revisión 3. Por eso se dice antes, y a quien no quiere estar se le manda todo uno a uno, porque es lo que pagó.
   - **Y una pregunta aparte,** para los mensajes uno a uno: "¿Querés que te escriba por WhatsApp cuando haya una clase o una oferta nueva? Respondé SÍ." Solo a quien responde SÍ se le escribe con ofertas, y cada uno de esos mensajes cierra con "Si no querés más mensajes, respondé NO y no te escribo más". El DS 1793 pide consentimiento expreso para usar datos (art. 56) y, en los mensajes, un remitente identificable y una forma de darse de baja (art. 57) ([lexivox](https://www.lexivox.org/norms/BO-RE-DSN1793.html), consultada el 29-oct-2026, citado también en el mapa).
   - Estos textos se aprueban con los del PR #41, el jueves 29 y el viernes 30, antes de que se cobre la primera inscripción. A quien pagó antes, la pregunta va en el recordatorio del día de su clase. Son legales: los aprueba Sergio Urcullo.
5. **Toma la clase:** en el grupo de su clase, antes, el enlace de Meet; después, la grabación, una tarea y 7 días de dudas.
6. **Al final de las clases, 5 minutos:**
   - **la clase siguiente de la serie,** al final de las clases 1 y 2, como dice el PR #41. Quien compró clases sueltas completa la serie pagando la diferencia hasta Bs 120. Es una propuesta de este plan; como es el precio del taller, lo decide Sergio Urcullo con la sesión del #6;
   - **el grupo de miembros.** Arranca el lunes 16 de noviembre. Los primeros 30 que paguen hasta el viernes 13 a las 23:59 entran a Bs 79 por mes, congelado mientras sigan pagando. Desde el sábado 14, Bs 99.

   Son límites reales, como el cupo de fundador de Erik Taveras, que se llenó antes de la primera llamada ([ficha](referentes/erik-taveras.md)), y la oferta de 24 horas de Santiago Muñoz después de su masterclass ([ficha](referentes/santiago-munoz.md)).
7. **Se queda:** a los 7 días de cada clase, su grupo queda solo para avisos de los administradores, y más adelante se saca. La persona sigue en la comunidad grande.
8. **Vuelve:** cada serie o edición nueva se avisa primero en la comunidad grande, con un precio para quienes ya fueron, que decide Sergio Urcullo. Después, en los anuncios.
9. **Sube:** del grupo de miembros a las sesiones 1 a 1 y a la implementación.

Todos los mensajes los aprueba Sergio Urcullo, porque llegan a clientes.

**La preventa trae caja antes del 14 de noviembre,** cuando vence Codex (PR #41).

**Con las recomendaciones de antes:** lo que decidió Sergio Urcullo, grupos por fecha y una comunidad grande gratis, va en la línea de la decisión 9 del mapa, que recomendaba un grupo de WhatsApp gratis después del taller. Lo que queda abierto es si, además, se abre un grupo pago (decisión 3). Si lo elige, la fila "Comunidad después del taller" del mapa se pone al día por un issue.

## 6. El grupo de miembros

### Qué trae cada semana

- **Una clase en vivo de 50 minutos,** los miércoles a las 19:30: un tema nuevo y después "traé tu caso". Dura 50 minutos para entrar en Meet gratis, que corta a los 60 (ayuda de Google Meet, arriba). Va el miércoles para no chocar con las clases del taller, que son martes, jueves y sábado. Erik Taveras da una llamada por semana en su comunidad paga, y Santiago Muñoz dos ([resumen](referentes/resumen-2026-10-29.md)).
- **La grabación de la clase,** como en el taller: con el grabador de pantalla de la PC (PR #41).
- **Una plantilla los lunes,** lista para copiar: instrucciones de proyecto, un prompt o una tarea armada.
- **Dudas en el grupo.** Sergio Urcullo contesta dos veces por semana, no a toda hora, para que se pueda sostener.
- **Un objetivo por mes,** por ejemplo "dejale a Claude tu reporte semanal armado".
- **Para miembros:** la sesión 1 a 1 a Bs 250 en vez de Bs 350.

### Dónde (decisión 3)

**Recomendado: un grupo de miembros dentro de su comunidad de WhatsApp, con la clase por Meet y el cobro por QR.**
- **A favor:** en Bolivia todos tienen WhatsApp, se paga con QR sin tarjeta, y está al lado de la comunidad grande, donde ya está la gente.
- **En contra:** está menos ordenado que Skool, y el cobro se confirma a mano.
- **Las grabaciones y las plantillas,** en una carpeta de Drive compartida con cada miembro, y no en YouTube como no listado: un video no listado lo puede ver y compartir cualquiera que tenga el enlace ([ayuda de YouTube](https://support.google.com/youtube/answer/157177?hl=es-419), citada en el PR #41). Quien deja de pagar sale de la carpeta. Para compartirla hace falta el correo de Google de cada miembro: se pide con su permiso al entrar y se anota en la planilla de su Drive, nunca en Git.

**Las otras dos opciones:**
- **Skool Hobby:** US$9 por mes, más 10% y US$0,30 por cobro ([precios](https://www.skool.com/pricing) y [preguntas frecuentes de Skool](https://help.skool.com/article/86-subscriptions-faq), consultadas el 29-oct-2026).
  - Skool le paga a cuentas de Bolivia, pero los miembros pagan en dólares (misma fuente). Hace falta una tarjeta habilitada para el exterior.
  - Con 10 miembros a Bs 99, unos US$8,17 cada uno, Skool se lleva cerca del 25%: los US$9 fijos, el 10% y los US$0,30 de cada cobro.
  - Es lo que usan Erik Taveras y Santiago Muñoz, con clases en vivo, grabaciones y reseñas (fichas de [Erik](referentes/erik-taveras.md) y [Santiago](referentes/santiago-munoz.md)).
- **Todavía no:** solo la comunidad grande gratis, y el grupo pago se decide de nuevo el 29-nov con los números del mes. Junta audiencia, pero no trae caja ahora.

### Precio (decisión 4)

**Recomendado: Bs 99 por mes, unos US$8,17. Los fundadores pagan Bs 79, congelado.**

| Referencia | Precio | En bolivianos |
|---|---|---|
| Skool de Erik Taveras ([ficha](referentes/erik-taveras.md)) | US$59 por mes | Unos Bs 715 |
| Skool de Santiago Muñoz ([ficha](referentes/santiago-munoz.md)) | US$64 por mes | Unos Bs 776 |
| Digital Launchpad de Iman Gadzhi ([ficha](referentes/iman-gadzhi.md)) | US$37 por mes | Unos Bs 448 |
| Skool de Benjamín Cordero, "Imperio Agéntico" ([resumen](referentes/resumen-2026-10-29.md)), con 3,5 mil miembros | US$59 por mes | Unos Bs 715 |
| Talleres que hoy se anuncian en Bolivia ([resumen](referentes/resumen-2026-10-29.md)) | Pago único | Bs 250 a Bs 550 |
| La serie del taller de entrada (PR #41) | Pago único | Bs 120, o Bs 50 por clase |
| Salario mínimo de Bolivia en 2026 ([Bloomberg Línea](https://www.bloomberglinea.com/latinoamerica/bolivia/rodrigo-paz-aumenta-un-20-el-salario-minimo-en-bolivia/), 18-dic-2025) | Por mes | Bs 3.300 |

- **Por qué Bs 99:** son dos clases del taller por mes. Es el 3% del salario mínimo, y menos de la mitad de lo que cobran los talleres de Bolivia por una sola vez.
- **Por qué el precio de fundador:** es la escalera que usan Erik Taveras (US$59, que sube a US$79 a los 250 miembros) y Santiago Muñoz (fundador a US$57, ahora US$64 y después US$79), con el precio congelado para quien entra antes (fichas de [Erik](referentes/erik-taveras.md) y [Santiago](referentes/santiago-munoz.md)).
- **Qué cuesta:** con Meet gratis, nada fijo. Si la clase necesita más de 50 minutos o grabar en la nube, Zoom Pro cuesta US$16,99 por mes, unos Bs 206 ([precios de Zoom](https://zoom.us/pricing), citada en el mapa de operación), y se paga con 3 miembros a Bs 79.

### Cómo se cobra con QR

1. **Cada miembro tiene su día de cobro:** el día que entra. Los de la preventa, el 16. El pago de la preventa cubre del 16 de noviembre al 15 de diciembre.
2. Ese día, el miembro recibe por WhatsApp un mensaje con el QR de la cuenta, el monto y el mes que paga. El texto lo aprueba Sergio Urcullo una vez.
3. El miembro manda el comprobante por el mismo chat.
4. Sergio Urcullo confirma que el pago llegó a su banco, y el agente lo anota en la planilla de cobros de su Drive, nunca en Git (skill `registrar-movimiento`, issue #54). La planilla dice a quién le toca cada día.
5. Quien no pagó a los 5 días recibe un recordatorio. Si no paga a los 7, sale del grupo de miembros y de la carpeta, pero sigue en la comunidad grande, con un mensaje que le dice cómo volver.

Confirmar a mano alcanza para las primeras decenas de miembros. Si crece, el mapa de operación lista cómo confirmar solo: la API de QR del BNB, OpenBCB o una pasarela local desde Bs 249 por mes.

**Antes de cobrar la preventa** se deciden la devolución y la factura del grupo de miembros (decisión 9), como Sergio Urcullo ya decidió las del taller antes de cobrarlo (PR #41).

## 7. Llamadas 1 a 1 e implementación para negocios

"Luego las llamadas gratuitas o cobrarlas", pidió Sergio Urcullo (#65, 29-oct-2026).

### Gratis o pagas (decisión 6)

**Recomendado: el diagnóstico gratis es solo para negocios; la sesión 1 a 1 se paga.**
- **Diagnóstico gratis de 20 minutos,** solo para negocios que quieren la implementación.
  - Antes, tres preguntas por WhatsApp: rubro, qué quiere resolver y cuántas personas trabajan.
  - Hasta 3 por semana, para que no le coman la semana.
  - Se filtra antes de dar horas, como hacen los referentes. Erik Taveras ofrece gratis un cuestionario, Radar IA, y cobra US$75 su llamada de diagnóstico de 15 minutos. Su página "Trabajemos" manda a cada uno a lo que le toca ([ficha](referentes/erik-taveras.md)). Santiago Muñoz agenda una cita de 30 minutos antes de su consultoría ([ficha](referentes/santiago-munoz.md)).
- **Sesión 1 a 1 paga,** de 60 minutos, para cualquiera.

Las llamadas van por Meet: entre dos personas, Meet gratis dura hasta 24 horas (ayuda de Google Meet, arriba).

### Sesión 1 a 1

- **Qué es:** 60 minutos con pantalla compartida, sobre un caso de la persona. Termina con un plan escrito.
- **Precio:** Bs 350, unos US$28,88. Bs 250 para miembros (decisión 7).
- **Cómo se compra:** escribe por WhatsApp, paga con QR por adelantado y elige el horario. El cobro adelantado es como en Erik Taveras, que cobra al reservar ([ficha](referentes/erik-taveras.md)).
- **Cuántas:** hasta 4 por semana.

### Implementación para negocios

- **Qué es:** dejar la IA trabajando en un negocio, con el dueño y su equipo. Son 3 sesiones de 90 minutos en dos semanas:
  1. **Diagnóstico y proyecto:** se arma un proyecto de Claude con la información del negocio: precios, preguntas frecuentes y procesos.
  2. **Tres tareas armadas,** por ejemplo respuestas a clientes, un reporte y contenido.
  3. **Práctica con el equipo** y el plan de lo que sigue.

  Incluye soporte por WhatsApp durante esas dos semanas.
- **Precio:** desde Bs 2.500, unos US$206. La mitad se paga al empezar y la otra mitad en la sesión 3, con QR (decisión 7).
- **De dónde salen los clientes:** del diagnóstico gratis, del contenido "voy a un negocio", de la palabra NEGOCIO y de los miembros que tienen negocio.
- **Con ONIA Platform:** cuando esté lista para clientes (issues #27 y #28), la implementación puede sumar el asistente de WhatsApp, con su plan mensual aparte. La prueba con clínicas dentales del #61 va por su lado. Si se hace después del taller, como recomienda la decisión 14 del mapa, esta implementación puede ser su puerta de entrada.

**Los precios son sin factura.** Si se factura, el IVA es 13% y el IT 3% (mapa de operación): de cada Bs 2.500 quedan unos Bs 2.100, antes del IUE o del RC-IVA. Los negocios suelen pedir factura. Se decide con el contador, y es legal.

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

Del sábado 31 de octubre al domingo 29 de noviembre de 2026. Usa las fechas que decidió Sergio Urcullo para la primera serie. **Si cambian, todo se corre igual.** Las series de las semanas 2 a 4 van solo si da el sí a seguir con anuncios, porque es gasto.

**Todas las semanas:**
- **Domingo y miércoles:** tandas de grabación, con los guiones aprobados el día antes.
- **Todos los días:** los cortos de la semana (ver "Frecuencia y horas") y unos 15 minutos para comentarios y mensajes.
- **En la comunidad grande:** 2 o 3 avisos, como la guía de la semana y la próxima clase.
- **Desde la semana 2:** un video de YouTube, que sale el viernes.
- **Desde la semana 3:** la plantilla de miembros el lunes y su clase el miércoles a las 19:30.

| Cuándo | Qué | Quién |
|---|---|---|
| **Antes** | | |
| Jue 29 y vie 30-oct | Revisar su comunidad con los cuatro datos y, si sirve, mandar el primer aviso que explica el cambio. Crear en ella los grupos de las tres clases, con aprobación para entrar. Aprobar, con los textos del PR #41, la confirmación con el enlace al grupo, el aviso de la comunidad y la pregunta de permiso | Agente redacta; Sergio Urcullo aprueba y crea los grupos |
| Vie 30 | Empieza la venta gratis en su perfil, sus estados, sus grupos y su comunidad de WhatsApp (PR #41). Primer corto: quién es y qué va a mostrar, con TALLER | Sergio Urcullo publica |
| **Semana 1: la primera serie** | | |
| Sáb 31 | Arrancan los anuncios (PR #41). Corto CLAUDE | Sergio Urcullo publica |
| Dom 1-nov | Grabación de los cortos de la semana. El agente deja los textos de la preventa | Sergio Urcullo graba; agente redacta |
| Lun 2 | A más tardar hoy: las decisiones 3, 4 y 9, que hacen falta para la preventa. Aprueba los textos de la preventa. Corto PROYECTO | Sergio Urcullo |
| Mar 3 | Clase 1. Al final, la clase siguiente y la preventa | Sergio Urcullo |
| Mié 4, vie 6 y dom 8 | En el grupo de la clase anterior: la grabación y la tarea. Mensaje a quien respondió SÍ | Sergio Urcullo manda lo aprobado |
| Jue 5 | Clase 2 | Sergio Urcullo |
| Sáb 7 | Clase 3 | Sergio Urcullo |
| Dom 8 | Balance de la serie (PR #41). Grabación del primer video de YouTube | Sergio Urcullo |
| **Semana 2: la preventa** | | |
| Mar 10, jue 12 y sáb 14 | Segunda serie o segunda edición, si da el sí | Sergio Urcullo |
| Durante la semana, si da el sí | Ofrecer el diagnóstico gratis y la implementación a sus contactos con negocio | Agente redacta, Sergio Urcullo aprueba y manda |
| Mié 11, vie 13 y dom 15 | Los grupos de las clases 1, 2 y 3 quedan solo para avisos, pasados los 7 días de dudas. Su gente sigue en la comunidad grande | Sergio Urcullo |
| Jue 12 | Aviso en la comunidad grande: la preventa cierra el viernes | Sergio Urcullo manda lo aprobado |
| Vie 13 | Primer video de YouTube. A las 23:59 cierra la preventa | Sergio Urcullo |
| Dom 15 | Grabación. Preparar la primera clase de miembros | Sergio Urcullo |
| **Semana 3: arranca el grupo de miembros** | | |
| Lun 16 | Bienvenida y primera plantilla | Agente arma, Sergio Urcullo aprueba |
| Mar 17, jue 19 y sáb 21 | Serie, si da el sí | Sergio Urcullo |
| Mié 18 | Primera clase de miembros, de 19:30 a 20:20 | Sergio Urcullo |
| Vie 20 | Segundo video de YouTube | Sergio Urcullo |
| **Semana 4: los 3 por día** | | |
| Lun 23 | Clase abierta gratis en YouTube Live, de 19:30 a 20:15 | Sergio Urcullo |
| Mar 24, jue 26 y sáb 28 | Serie, si da el sí | Sergio Urcullo |
| Mié 25 | Clase de miembros | Sergio Urcullo |
| Vie 27 | Tercer video de YouTube | Sergio Urcullo |
| Sáb 28 | Ofrecer sesiones 1 a 1 a los miembros, a Bs 250. Pedirle a un negocio el primer "voy a un negocio" | Agente redacta, Sergio Urcullo aprueba y manda |
| Dom 29 | Los números del mes (ver abajo) y qué sigue, incluido el grupo de miembros si eligió "todavía no" | Agente arma, Sergio Urcullo decide |

## 9. Cómo se mide

| Paso | Qué se cuenta | Dónde |
|---|---|---|
| Contenido | Seguidores nuevos por red, comentarios con palabra clave y guías enviadas | Cada red |
| Clase abierta | Personas en vivo y vistas de la grabación | YouTube |
| Taller | Chats, inscriptos que pagaron por clase, series completas y asistentes | WhatsApp con etiquetas y la planilla (PR #41) |
| Comunidad grande | Miembros, cuántos entran por clase y cuántos salen cada semana | La comunidad de WhatsApp |
| Grupo de miembros | Miembros que pagaron, y cuántos asistentes del taller entraron | La planilla de cobros |
| Llamadas e implementación | Diagnósticos, sesiones e implementaciones vendidas | La planilla de cobros |
| Todo | Caja neta del mes: cobros menos anuncios y herramientas | La planilla de cobros |

**Supuestos a medir, porque no hay datos propios:**
- **Del taller al grupo de miembros:** entre el 10% y el 20% de los asistentes. Es un supuesto: los referentes no publican esa cifra. Como pista, Erik Taveras tiene 3.056 personas en su comunidad gratis y 126 en la paga, un 4% ([ficha](referentes/erik-taveras.md)). Quien pagó una clase ya compró una vez, así que debería pasar más.
- **Cuánta caja hace falta:** Claude, Codex, el VPS y Higgsfield suman "Más de US$300" por mes, según Sergio Urcullo (PR #41). Son unos Bs 3.636 o más (ver "Enseñar y el producto").

  | Cómo se llega a Bs 3.636 por mes | |
  |---|---|
  | Solo grupo de miembros | 43 miembros: los 30 fundadores a Bs 79 y 13 más a Bs 99 |
  | Solo sesiones 1 a 1 | 11 sesiones a Bs 350 |
  | Solo implementación | 2 implementaciones a Bs 2.500 |

  El grupo de miembros da ingreso todos los meses, pero tarda en llegar. Las sesiones y las implementaciones traen caja antes.

## 10. Lo que tiene que hacer Sergio Urcullo

1. Contestar las decisiones de abajo. La 3, la 4 y la 9, a más tardar el lunes 2, porque la preventa arranca el martes 3.
2. Pasar los datos que faltan:
   - de su comunidad de WhatsApp: desde qué número la creó, cuántos miembros tiene, cómo se llama y para qué entraron;
   - cuántos seguidores tiene hoy en cada red, y si tiene Instagram profesional.
3. Crear los grupos de cada clase en su comunidad, con aprobación para entrar, y aprobar a quien está en la lista "Pagó".
4. Grabar en las tandas, y dar las clases y las sesiones.
5. Aprobar con captura todo lo que sale: guiones, guías y mensajes.
6. Confirmar cada pago en su banco.

## Decisiones para Sergio Urcullo

Tres opciones por decisión, con la recomendada marcada. Su respuesta se cita con sus palabras en un comentario del PR.

1. **¿De qué habla?**
   - **IA práctica para el trabajo y el negocio: Claude en el trabajo, la IA en negocios bolivianos y detrás de escena (recomendada).**
   - Solo Claude para el trabajo, como Enrique Rocha. ONIA Platform queda afuera de la marca personal.
   - Solo IA para dueños de negocio. Queda más cerca de ONIA Platform, pero el taller es para todo público.
2. **¿Cómo llega a 3 videos por día?**
   - **De a poco: 1 por día las dos primeras semanas, 2 la tercera y 3 la cuarta, con YouTube semanal desde la segunda (recomendada).** De unas 9 a unas 24 horas por semana solo de contenido.
   - 3 por día y YouTube semanal desde el primer día: unas 24 horas por semana de contenido, en la misma semana de la primera serie.
   - Quedarse en 1 por día, con YouTube cada dos semanas: unas 11,5 horas por semana.
3. **¿Además de la comunidad grande gratis, abre un grupo pago?**
   - **Sí: un grupo de miembros dentro de su comunidad de WhatsApp, con clase semanal por Meet y cobro por QR, en preventa desde la primera clase (recomendada).**
   - Sí, pero en Skool Hobby: US$9 por mes, 10% y US$0,30 por cobro, y los miembros pagan en dólares con tarjeta.
   - Todavía no: solo la comunidad grande, y se decide de nuevo el 29-nov con los números del mes.
4. **¿Cuánto cuesta el grupo de miembros?**
   - **Bs 99 por mes, y Bs 79 para los primeros 30 de la preventa (recomendada).**
   - Bs 49 por mes: se vende más fácil, pero hacen falta el doble de miembros para lo mismo.
   - Bs 149 por mes: más margen, más difícil para público general.
5. **¿Clases gratis?**
   - **Una clase abierta por mes, de 45 minutos, en YouTube Live (recomendada).**
   - Una por semana: trae más gente, pero suma unas 4,5 horas más por mes.
   - Ninguna por ahora: lo gratis son los videos y la comunidad grande.
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
9. **¿Devolución y factura del grupo de miembros?** Es legal, y va antes de cobrar la preventa.
   - **Sin factura y sin devolución, como el taller, del que dijo "que no haya nunca reembolso" (PR #41). Quien no quiere seguir no paga el mes siguiente (recomendada).** Desde cuándo se factura se ve con el contador.
   - Sin factura, y se devuelve el primer pago a quien lo pida en los primeros 7 días de su mes: para la preventa, del 16 al 22 de noviembre. Se parece a la garantía de 14 días de Erik Taveras en Skool ([ficha](referentes/erik-taveras.md)).
   - Con factura desde el primer pago, y sin devolución.

## Lo que queda para después

- **El nombre del grupo de miembros.** Lo ve el cliente. El taller no usa el logo de Claude ni da a entender que es un curso oficial de Anthropic (PR #41, "Mensaje"). Lo mismo vale para el grupo, y conviene que su nombre no lleve "Claude".
- **Los textos de permiso para usar testimonios y para grabar en un negocio.** Son legales.
- **El mapa de operación:** si elige el grupo pago, su fila "Comunidad después del taller" se pone al día por un issue.

## Límites de este plan

- **No hay datos propios.** Las conversiones y las horas son supuestos o estimaciones; se corrigen con los números del 29-nov.
- **El precio del grupo de miembros no se probó en Bolivia.** No se encontró una comunidad paga de IA en Bolivia para comparar.
- **Faltan cuatro referentes.** Sergio Urcullo eligió sumar a Benjamín Cordero, Academi365, Eduardo Vázquez y Liam Ottley (resumen del PR #40, commit `16f3f8c`). Todavía no tienen ficha. Cuando la tengan, se revisan los precios y el camino de este plan.
- **El taller lo define el PR #41,** que sigue abierto. Por ejemplo, la primera clase puede durar 2, 2,5 o 3 horas (su decisión 2). Si cambia, se ajustan las horas y el calendario.
- **Los datos de Instagram y TikTok** de los referentes son los de sus fichas, que no pudieron ver los reels sin iniciar sesión.
- **Lo legal** se cita de normas públicas, sin la opinión de un abogado.
