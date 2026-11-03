# Campañas de Meta Ads y guiones de cada anuncio

2-nov-2026, a la noche (hora de Bolivia), por Marketing y ventas (Claude Code). Lo pidió Sergio Urcullo, desde la cuenta de ONIA: "arma las campanas de meta y los guiones de cada uno" (2-nov, a las 22:59, en el proyecto Marketing y ventas, sin enlace). Parte del [issue #6](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/6).

**Estado: borrador.** Lo ve un cliente y es gasto: Sergio Urcullo aprueba los textos y los videos con captura, y no se activa nada en Meta sin su sí. Este documento completa la campaña del taller que está en borrador en el [PR #120](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/120) (`workshops-comunidad/meta-ads-campana-3-4-5.md`, sin mergear todavía) y no la reemplaza: los valores de la campaña A y los guiones de sus 2 videos son los del #120. Si el #120 cambia antes de mergearse, se actualiza acá.

**Oferta vigente:** miércoles 4, jueves 5 y viernes 6-nov a las 19:00 (hora de Bolivia), por Google Meet, un solo pago de Bs 50 por las 3 clases, con grabaciones que se entregan el viernes 6 y quedan para siempre ([oferta del 1-nov](../docs/decisiones/2026-11-01-oferta-taller-3-4-5.md) y [cambio del 2-nov](../docs/decisiones/2026-11-02-taller-4-5-6.md)). Los Bs 70 del [PR #72](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/72) eran de una oferta vieja (lo que pagaba quien ya había hecho la clase 1 para completar la serie), y la decisión del 1-nov la reemplazó: no se usan.

## En corto

- **Una sola campaña paga ahora: la del taller (A).** Con los US$30 que Sergio Urcullo ya decidió, partirlos en dos campañas deja a cada una con muy pocos resultados para que Meta optimice. Es un criterio de este documento, no un dato de Meta.
- **Otras dos quedan armadas, apagadas y sin gasto** para después del 6-nov: audiencia (B) y segunda edición (C). Las enciende Sergio Urcullo, con los números de A y su sí.
- **Guiones:** 2 videos para A, que son los del #120; 2 para C, con lo que solo Sergio Urcullo sabe entre [corchetes]; B usa un reel que ya existe.
- **Para lanzar A falta casi todo lo que depende de Sergio Urcullo.** Comprobado en Meta esta noche: las dos cuentas siguen sin página asociada ni Instagram, "ONIA Ads" sigue sin tarjeta y no hay anuncios publicados. Sí hay un borrador de campaña en "ONIA Ads" (ver "Qué hay hoy"). Los pasos están en "Qué falta para lanzar A".
- **Los anuncios solos no llegan a los Bs 3.000.** Con US$30, solo el mejor caso de la tabla de "Números" da 60 pagos. Si no llegan, el resto tiene que venir del perfil, los estados y los grupos de Sergio Urcullo.

## Qué hay hoy

Comprobado el 2-nov entre las 23:00 y las 23:15 (hora de Bolivia), solo lectura, con el conector de Meta Ads de la app. Los datos de Meta son de esa hora.

| Qué | Resultado | Herramienta |
|---|---|---|
| Cuentas publicitarias | Dos, activas y en USD. "ONIA Ads" (1073680778314945, negocio OniaAgency): sin método de pago. Otra, sin nombre (679613631427810, sin negocio): con método de pago | `ads_get_ad_accounts` |
| Páginas | Ninguna asociada a las dos cuentas. La única que ve el usuario es "Onia" (1140384625819526), que es de la empresa OniaAgency, la misma de "ONIA Ads" | `ads_get_ad_account_pages`, `ads_get_user_pages`, `ads_get_pages_for_business` |
| Instagram | Ninguna cuenta conectada en las dos | `ads_get_ig_accounts` |
| Campañas publicadas | Ninguna en las dos cuentas | `ads_get_ad_entities` |
| Borradores | En "ONIA Ads": una campaña "Claude 0 a 100 - WhatsApp", objetivo Interacción, creada con la "creación rápida" del Administrador y modificada por última vez el 31-oct a las 17:57 (hora de Bolivia). No tiene conjunto, anuncios, presupuesto ni fechas, y figura con estado ACTIVE. Qué pasa si se publica así no se comprobó: se lo pasa a pausa antes de publicar. En la otra cuenta, la herramienta no responde todavía ("se está habilitando de a poco") | `ads_get_ad_entities` con `object_state=draft` |
| Web del taller | `sergiourcullo.vercel.app/taller`, publicada el 2-nov con el sí de Sergio Urcullo. Sus 4 botones abren el WhatsApp +591 75414930 con "Hola Sergio, vengo de la web y quiero inscribirme al taller Claude de 0 a 100" | [Tablero #111, comentario de Boss Code del 2-nov](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/111#issuecomment-6582395284) |
| Textos de WhatsApp | Aprobados por Sergio Urcullo el 2-nov y en `main`: `workshops-comunidad/whatsapp-taller-3-4-5-borrador.md`. Si ya están cargados en la app WhatsApp Business, sin comprobar: no hay conector de WhatsApp | `docs/equipo-agentes/negocio.md` |
| Otros anuncios de IA en Bolivia | Búsqueda "taller inteligencia artificial": unos 191 anuncios activos, estimación de la Biblioteca de anuncios por texto (cuenta también lo que no es un taller). Dos títulos vistos: un taller presencial en La Paz a Bs 250 con "Últimos 20 cupos" (Academi365 Latam) y "Domina la IA en 28 Días, aunque empieces desde cero" (Educly App AI) | `ads_library_search`, país BO |

## Mapa de campañas

| | A. Taller V1 | B. Audiencia | C. Segunda edición |
|---|---|---|---|
| Estado | **Decidida.** Falta lo de "Qué falta para lanzar A" | Propuesta, sin gasto aprobado | Propuesta, sin gasto aprobado |
| Para qué | Vender el taller del 4, 5 y 6-nov, Bs 50 por las 3 clases. Meta de Sergio Urcullo: 60 pagos, Bs 3.000 brutos, conciliados con el banco al 6-nov | Sumar seguidores y gente para la próxima edición, sin vender de frente | Vender una segunda edición, si Sergio Urcullo la decide, y volver a mostrarle el anuncio a quien ya vio los videos de A |
| Objetivo en Meta | Interacción, destino WhatsApp, optimizado a conversaciones | A elegir al armarla (Interacción o Tráfico al perfil). Sin comprobar: hoy no hay Instagram conectado y no se decidió dónde se publican los reels | Igual que A |
| Público | Toda Bolivia, 18 años o más, sin intereses, ubicaciones automáticas ("todo publico, y de todo bolivia", Sergio Urcullo, 29-oct; el piso de 18 lo agregó el plan) | Igual que A | Dos conjuntos: (1) quien vio los videos de A, audiencia de interacción con video; (2) el público amplio de A |
| Presupuesto | US$10 por día hasta el 5-nov: unos US$30 ("US$10/día hasta el 5-nov" y "Empecemos hasta el 5 de noviembre", Sergio Urcullo, 2-nov) | Sin decidir. Un gasto chico por día, salido de lo cobrado; el monto se fija con los números de A | Sin decidir. Se sube solo si en A cada pago salió a menos de Bs 25 (ver "Números") |
| Cuándo | Inicio martes 3-nov a la mañana ("La campaña la lanzamos mañana en la mañana", Sergio Urcullo, 2-nov), fin jueves 5-nov | Propuesta: desde el 9-nov | Sin decidir: depende de las fechas de la segunda edición |
| Anuncios | "Video 1 · contraste" y "Video 2 · demo" | El reel orgánico que mejor funcione de los del 3 al 8-nov, sin guion nuevo | "Video 3 · por qué lo enseño" y "Video 4 · todavía estás a tiempo" |

**Por qué B y C esperan:** del 3 al 5-nov hay US$30, y cada dólar que va a otra cosa es un dólar menos para llegar a los 60 pagos antes del 6-nov. B y C necesitan datos de A (qué video funcionó y cuánto cuesta cada pago). Y C necesita las fechas de la segunda edición, que no están decididas.

## Campaña A: qué se carga

Sigue la estructura del #120 (ayuda de Meta: [anuncios a WhatsApp](https://www.facebook.com/business/help/447934475640650)). Lo que agrega este documento va marcado "Nuevo".

| Nivel | Valor |
|---|---|
| Campaña | "Claude 0 a 100 · V1 · WhatsApp". Interacción, sin categoría especial. Nuevo: el borrador que ya existe en "ONIA Ads" tiene ese objetivo y se puede seguir en vez de crear otra campaña (sin comprobar que el conector pueda agregarle conjunto y anuncios). Hay que cambiarle el nombre y pasarlo a pausa antes de publicarlo: figura ACTIVE y no se comprobó qué pasa al publicarlo así |
| Conjunto | Destino WhatsApp, optimizado a conversaciones. Toda Bolivia, 18 años o más, sin intereses, ubicaciones automáticas. US$10 por día. Inicio martes 3-nov, fin jueves 5-nov a las 23:59. La zona horaria de la cuenta está sin confirmar (Bolivia es UTC−4). Nuevo: puja de mayor volumen, sin tope de costo, como ya está en el borrador |
| Anuncios | "Video 1 · contraste" y "Video 2 · demo", con el mismo texto y título |
| Mensaje de WhatsApp | Plantilla con saludo y una pregunta sugerida, que escribe Sergio Urcullo en el Administrador porque el conector no la carga (#120). Nuevo: el saludo dice "el precio" y no "los precios", porque hay un solo precio |
| Mejoras automáticas | Nuevo: apagadas, si el Administrador las ofrece (texto, música, efectos), para que salga lo que Sergio Urcullo aprobó, con "Taller independiente, no oficial de Anthropic" |
| Estado al cargar | Borrador o pausa. Publicar es activar (`ads_activate_entity`): solo con su sí con captura. Se carga con los frenos que eligió Sergio Urcullo el 30-oct en el [issue #55](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/55) |

**Dinero.** US$30 son unos Bs 363,6, a Bs 12,12 por dólar (cambio del BCB vigente desde el 29-oct-2026, tomado del plan de Meta Ads, sin reconfirmar hoy). Meta puede gastar un poco más del diario un día y menos otro; el margen no se comprobó. Si Sergio Urcullo quiere un máximo firme de US$30, se carga como presupuesto total del conjunto y no como diario. Es decisión suya porque es gasto.

### Cuenta, página y WhatsApp: lo que elige Sergio Urcullo

Con la recomendada primero. Sin elección no se carga nada.

1. **Cuenta de anuncios.**
   - **"ONIA Ads", cargándole la tarjeta (recomendada).** La eligió el 29-oct, es de la misma empresa que la página "Onia" y ya tiene el borrador.
   - La cuenta sin nombre, que ya tiene método de pago. Es la más rápida, pero no tiene empresa ni borrador. De quién es esa tarjeta lo sabe él.
2. **Página.**
   - **"Onia" (recomendada para el 3-nov).** Ya existe y es de la misma empresa que "ONIA Ads". El anuncio sale con el nombre "Onia" y con su cara en los videos.
   - Una página con su nombre, como se decidió el 29-oct. Es mejor para la marca personal, pero hay que crearla y conectarle el WhatsApp, y eso no entra esta noche. Se puede para la segunda edición.
3. **WhatsApp.** Conectar el +591 75414930 a la página elegida ([ayuda de Meta](https://www.facebook.com/business/help/1583303048513172)). El #72 anotó, leyendo las herramientas del conector el 29-oct, que sin un número de WhatsApp verificado en la página el anuncio se crea pero no se puede activar. Si "Onia" ya lo tiene conectado, no se comprobó.

## Guiones de la campaña A

Los dos videos son los del #120 (que parte de los del #72), con el mismo contenido: vertical 9:16, 1080 × 1920, .mp4 o .mov, unos 35 segundos, subtítulos grandes y texto dentro de la zona segura ([guía de anuncios](../marca-personal/guias/anuncios.md)). De vos, como los reels. Cómo grabarlos y con qué: `workshops-comunidad/que-grabar-claude-0-a-100.md`, que arma otra sesión y todavía no está en `main`. Los videos pesados van a E: o a Drive, no a Git. Nada de Higgsfield: cobra por generación.

Los dos videos y el texto pasan la lista de la guía de anuncios ("Lista para revisar antes de pedir el sí") antes de pedirle el sí a Sergio Urcullo, salvo el cupo, que no se nombra porque no está decidido.

### Texto del anuncio (igual que el #120)

> ¿Usás la IA solo para hacerle preguntas? "Claude de 0 a 100" son 3 clases por Meet, en vivo y grabadas, para aprender a usar Claude con tus archivos y tus proyectos. Sin programar.
> 🎥 Si te sumás tarde, las clases que ya pasaron te quedan grabadas
> 💵 Un solo pago de Bs 50 por las 3 clases
> Taller independiente, no oficial de Anthropic.
> Tocá el botón y escribime: te paso las fechas, el temario y el QR.

Título: "Claude de 0 a 100 · en vivo y grabado". Sin fechas: van en el saludo de WhatsApp, así el anuncio no ofrece un día que ya pasó. Sin "con la cuenta gratis" ni promesas de plata, tiempo o resultados.

**Texto que llega al chat.** Saludo de la plantilla: "¡Hola! Soy Sergio Urcullo. Tocá la pregunta de abajo y te paso las fechas, el temario y el precio del taller." Pregunta sugerida: "Hola, quiero info del taller de Claude". La respuesta es el saludo 1 de `workshops-comunidad/whatsapp-taller-3-4-5-borrador.md` (fechas, Bs 50 y grabaciones), que está de tú: si se unifica con el voseo, lo decide Sergio Urcullo.

### Video 1 · contraste (a cámara)

| Segundos | Qué dice | Texto en pantalla |
|---|---|---|
| 0 a 3 | "Si a la IA solo le hacés preguntas, la estás usando a medias." | ¿Solo le hacés preguntas a la IA? |
| 3 a 12 | "Le preguntás algo, copiás, pegás… y la próxima vez le volvés a explicar todo de cero." | Copiar, pegar y explicar todo otra vez |
| 12 a 25 | "En 3 clases te enseño a usar Claude con tus archivos y tus proyectos. Sin programar." | Claude de 0 a 100 · 3 clases |
| 25 a 35 | "En vivo y grabadas: si te sumás tarde, te quedan las que ya pasaron. Un solo pago de Bs 50 por las tres clases. Tocá el botón y escribime." | Bs 50 · 3 clases · Grabaciones incluidas |

### Video 2 · demo (pantalla del celular y a cámara)

| Segundos | Qué se ve | Qué dice | Texto en pantalla |
|---|---|---|---|
| 0 a 3 | Claude abierto en el celular | "Mirá lo que le pido a Claude un lunes a la mañana." | Un lunes a la mañana, con Claude |
| 3 a 20 | La pantalla grabada, acelerada: sube el archivo, pega el pedido y aparecen el resumen, la tabla y el mensaje | "Le subo las ventas del mes y le pido tres cosas: un resumen, una tabla por producto y un mensaje para mi equipo. Y lo tengo listo." | Ventas del mes → resumen, tabla y mensaje · Datos de ejemplo |
| 20 a 35 | Sergio Urcullo a cámara | "Esto lo practicamos en Claude de 0 a 100: 3 clases en vivo y grabadas, y si te sumás tarde te quedan las que ya pasaron. Bs 50 en total. Tocá el botón y escribime." | Claude de 0 a 100 · Bs 50 las 3 clases |

**La demo** usa `ventas-octubre-ejemplo.csv`, de la panadería inventada del temario (en el [PR #131](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/131)), sin datos de clientes. Si la respuesta de Claude no trae bien las cifras (Bs 17.766 del 1 al 28 de octubre, y la salteña primera en plata, con Bs 5.180), la toma no se usa: así lo pide el #72 y el #120 lo mantiene.

### Si le sobra tiempo: otros ganchos (opcional)

Se cambian solo los primeros 3 segundos y el resto del video queda igual. Se suben como anuncios aparte solo si Sergio Urcullo quiere probar más de 2, porque con US$30 más anuncios reparten el gasto. Ninguno promete ahorro de plata ni de tiempo.

- **Video 1:** "Hacerle preguntas a la IA es la parte fácil." (en pantalla: Preguntar es lo fácil) o "Cada vez que abrís la IA, ¿le explicás todo otra vez?" (en pantalla: ¿Explicás todo otra vez?).
- **Video 2:** "Le pasé las ventas de un mes a Claude y mirá lo que armó." (en pantalla: Ventas del mes → Claude) o "Esto es lo que Claude hace con un archivo, sin que yo programe nada." (en pantalla: Sin programar).

## Guiones de B y C (propuestas, sin gasto aprobado)

**B, audiencia.** Sin guion nuevo. El candidato natural es el Reel 8 del [PR #139](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/139) (viernes 6, noche, "Tres cosas que Claude hace con un archivo tuyo"), que ya no vende este taller y cierra con "seguime". Se confirma con los datos de la semana: se impulsa el reel que más seguidores o conversaciones trajo por vista. Dónde se publican los reels (página o perfil) lo decide Sergio Urcullo, porque solo se puede impulsar lo publicado donde Meta ofrezca el botón (sin comprobar hoy).

**C, segunda edición.** Lo que va [entre corchetes] está pendiente: no se graba ni se carga hasta completarlo.

*Video 3 · por qué lo enseño (a cámara, unos 40 s).* Es el Video 3 del [plan del 29-oct](plan-meta-ads-borrador.md), "para la segunda tanda".

| Segundos | Qué dice | Texto en pantalla |
|---|---|---|
| 0 a 3 | "Uso Claude todos los días para trabajar en ONIA." | Lo uso todos los días |
| 3 a 25 | [Para qué lo usa, con una tarea real y sin datos de clientes. Qué le costó aprender. Qué cambió cuando dejó de hacerle solo preguntas.] Lo cuenta Sergio Urcullo con sus palabras, sin cifras que no pueda mostrar | [Una línea con la idea central] |
| 25 a 40 | "Por eso armé Claude de 0 a 100: [fechas de la edición 2]. [Precio de la edición 2]. Tocá el botón y escribime." | [Edición 2 · fechas · precio] |

*Video 4 · todavía estás a tiempo (a cámara, unos 20 s).*

| Segundos | Qué dice | Texto en pantalla |
|---|---|---|
| 0 a 3 | "Todavía estás a tiempo de entrar a Claude de 0 a 100." | Todavía estás a tiempo |
| 3 a 15 | "[Lo que queda: la edición que arranca el (fecha) y, si se mantiene lo decidido para la primera, las grabaciones de lo que ya pasó.] Sin programar." | [Una línea con lo que queda] |
| 15 a 20 | "[Precio]. Tocá el botón y escribime." | [Precio · fecha] |

La urgencia es solo la real. Si hay una fecha y hora de cierre de inscripción decidida, se pone; si no, no se escribe "última llamada" ni "quedan pocos lugares" ([funnel de los referentes, PR #141](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/141), "Urgencia honesta").

## Qué falta para lanzar A

Estado al 2-nov a las 23:00 (hora de Bolivia). Los pasos 1 a 7 son de Sergio Urcullo: son sus cuentas, su tarjeta, su WhatsApp y su cara.

| # | Qué | Estado |
|---|---|---|
| 1 | Aceptar los guiones y textos de este documento | Pendiente |
| 2 | Grabar los 2 videos | Pendiente |
| 3 | Probar cómo se graban las clases, 10 minutos con audio. El anuncio promete grabaciones | Pendiente. Bloquea activar (revisión del #120) |
| 4 | Cargar la tarjeta en "ONIA Ads" | Pendiente: la cuenta figura sin método de pago |
| 5 | Dejar la página "Onia" disponible en "ONIA Ads" y conectarle el WhatsApp | Pendiente: las dos cuentas figuran sin páginas |
| 6 | Escribir en el Administrador la plantilla de mensaje | Pendiente |
| 7 | Cargar en WhatsApp Business el saludo y las respuestas rápidas aprobados, y hacer el pago de prueba con el QR de Yolo Pago. Sin eso, quien escribe desde el anuncio no recibe respuesta o no puede pagar | Sin comprobar: no hay conector de WhatsApp (`docs/equipo-agentes/negocio.md`). El pago de prueba figura pendiente |
| 8 | Cargar la campaña y los 2 anuncios en pausa (sobre el borrador, si el conector lo permite) y pasarle la vista previa | Esta área, con su sí y cuando estén 1 a 7 |
| 9 | Ver la vista previa, con captura, y dar el sí | Pendiente |
| 10 | Activar | Sergio Urcullo, o esta área con su sí, solo después del paso 9 |
| 11 | Revisión de Meta | La ayuda de Meta dice que revisa la mayoría de los anuncios en 24 horas ([ayuda de Meta](https://www.facebook.com/business/help/204798856225114), leída el 29-oct). Lanzar "mañana a la mañana" puede terminar en un anuncio que sale el 4-nov |

**Quién carga el paso 8.** Con el conector de Meta Ads, mientras haya una sesión de Claude: la cuenta vence el 3-nov ([README de los tres proyectos](../docs/equipo-agentes/README.md)). Después, Codex no tiene ese conector y carga con el navegador del perfil `marketing`, cuando Sergio Urcullo cargue ahí su cuenta de Meta (`docs/equipo-agentes/marketing.md`, "Meta Ads en Codex"). Si ninguna de las dos llega a tiempo, lo carga él a mano en el Administrador, con la tabla de "Campaña A: qué se carga" como lista.

**Plan B si a media mañana del 3-nov la página no tiene el WhatsApp conectado.** Anuncios con el mismo texto que llevan a `sergiourcullo.vercel.app/taller`, que ya está publicada y tiene 4 botones a WhatsApp. No hace falta conectar el WhatsApp a la página, pero sí la tarjeta y la página. Mide peor: Meta optimiza a visitas y no a conversaciones, y los chats se distinguen por su primer mensaje ("vengo de la web"). Es una contingencia: la página se escribió para quien viene de un reel, y cambiarle un texto es publicar, así que va por PR y con el sí de Sergio Urcullo.

## Números

Son supuestos para dimensionar, no datos: no hay costos propios ni de Bolivia. El costo real lo da el Administrador en las primeras horas.

- **Anuncios:** US$30 (decidido el 2-nov) son Bs 363,6 (Bs 12,12 por dólar, BCB, desde el 29-oct-2026).
- **Precio:** Bs 50 por persona, brutos y sin factura. Los impuestos los ve Sergio Urcullo con el contador (decisión del 1-nov y plan del 29-oct).
- **Equilibrio de los anuncios:** 8 pagos de Bs 50 (Bs 400) cubren los Bs 363,6.
- **Meta de Sergio Urcullo:** 60 pagos, Bs 3.000 brutos, conciliados con el banco al 6-nov.

Pagos que salen de los US$30, según cuánto cuesta cada conversación y qué parte de las conversaciones termina en pago (conversaciones = US$30 ÷ costo; pagos = conversaciones × parte):

| Costo por conversación | 10% pagan | 20% pagan | 30% pagan |
|---|---|---|---|
| US$0,10 (300 conversaciones) | 30 | 60 | 90 |
| US$0,20 (150) | 15 | 30 | 45 |
| US$0,30 (100) | 10 | 20 | 30 |
| US$0,50 (60) | 6 | 12 | 18 |

- Solo US$0,10 con 20% o más llega a los 60 pagos. Es un caso optimista, sin dato que lo sostenga.
- **Cuándo proponer más presupuesto:** mientras cada pago que viene del anuncio cueste menos de Bs 25 (la mitad del precio; criterio de este documento, no de Meta). Bs 25 son US$2,06. Con 20% de pagos, equivale a un costo por conversación de hasta unos US$0,41. Cada subida la decide Sergio Urcullo: es gasto.
- **Costo por pago** = gasto del anuncio ÷ pagos de los chats con la etiqueta "Anuncio". Con pocos pagos la cuenta es ruido: se espera.

## Cómo se mide y cuándo se pausa

- **Dónde:** Administrador de anuncios: gasto, conversaciones iniciadas y costo por conversación, por anuncio. Esta área lo lee con el conector (solo lectura, `ads_get_ad_entities`) y lo anota en el panel. Pausar o activar es de Sergio Urcullo, o de esta área con su sí.
- **En WhatsApp Business:** las etiquetas "Anuncio" y "Pagó" del plan. La plata cuenta cuando el pago se ve en el banco, como dice el registro de `docs/equipo-agentes/negocio.md`.
- **Cuándo se pausa un video** (supuestos a medir): como en el #120, el 4-nov se pausa el que trae menos conversaciones por dólar, siempre que cada uno haya gastado al menos US$4. Antes de eso es ruido y no se toca. Con US$5 gastados y ninguna conversación, primero se revisa que el botón abra el chat con el mensaje y que el saludo conteste, antes de culpar al video. Un video nuevo vuelve a pedir el sí con captura.
- **Si al terminar el 5-nov cada pago cuesta más de Bs 50,** se cambia el mensaje o la oferta antes de gastar más.
- **Separar el origen en el chat (propuesta; la decide Sergio Urcullo porque es un texto que ve un cliente):** el reel y el anuncio mandan hoy el mismo mensaje, "Hola, quiero info del taller de Claude" (guiones del PR #139), y el chat no dice de dónde vino. Si el link de la bio manda "Hola, quiero info del taller de Claude (vengo de tus reels)", se pueden contar aparte.

## Riesgos que pueden frenar

- **La promesa de grabaciones.** La prueba de cómo grabar sigue pendiente (paso 3).
- **La edad de quien abre la cuenta o la página.** Si Meta exige mayoría de edad, puede frenar el 3-nov: sin comprobar (ver el aviso del #120). Esta sesión no pudo leer las condiciones de Meta (la página bloquea la lectura automática).
- **El nombre "Claude de 0 a 100".** Sigue sin confirmar con un abogado (decisión de Sergio Urcullo del 2-nov; [lecciones](../docs/lecciones.md), "Anuncios y venta"). Si Meta rechaza un anuncio por la marca, la opción sin la marca es "Taller de IA de 0 a 100". Los anuncios dicen "no oficial de Anthropic" y no usan el logo de Claude.
- **Fechas.** Los anuncios terminan el 5-nov, pero se puede entrar hasta el viernes 6 con las grabaciones. Seguir un día más es gasto: lo decide Sergio Urcullo.
- **Cierre de inscripción.** No está decidido (la propuesta de Boss No-Code es el miércoles 4 a las 19:00). Los anuncios no lo nombran.

## Lo que decide Sergio Urcullo

Con la recomendada primero. Lo que no decida no se escribe como decidido.

1. **Cuántas campañas ahora:** una, la del taller (recomendada); dos, partiendo los US$30; o subir el presupuesto, con los números de "Números".
2. **Cuenta y página:** "ONIA Ads" con tarjeta y la página "Onia" (recomendadas); la cuenta que ya tiene tarjeta; o una página con su nombre.
3. **Cómo se carga el tope:** US$10 por día, como lo dijo (recomendado), o US$30 en total.
4. **Vos o tú** en los guiones y en los textos de WhatsApp, y si dice su edad.
5. **El mensaje de la bio** con el origen separado.

Después de que acepte, esta área carga todo en pausa y le pasa la vista previa para que dé el sí con captura.
