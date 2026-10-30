# Claude de 0 a 100: temario de la serie

29-oct-2026, por Claude Code. Sale del [plan del taller](../plan-meta-ads-borrador.md), del [PR #41 (plan de Meta Ads)](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/41), que trae las decisiones de Sergio Urcullo.

**Estado: borrador.** Lo prueba Sergio Urcullo con una cuenta gratis el jueves 29 (lista al final) y lo aprueba él, porque lo ve un cliente. Lo que no pase la prueba se saca o se cambia antes de vender.

## Lo que trae el plan gratis

Según la [página de precios de Claude](https://claude.com/pricing), consultada el 29-oct-2026, el plan gratis trae chat en la web, la compu y el celular; búsqueda web, crear archivos y correr código; memoria entre chats; conectores; artefactos; Claude Design, Slides y Docs; skills; y hasta 5 proyectos. Programar tareas, Claude Code, Research y los modelos Opus son de los planes pagos.

- **Subir archivos** no figura en esa página. Se prueba el jueves.
- **Las skills** están en el plan gratis y necesitan prendido "crear y editar archivos" ([ayuda de Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude)).
- **Gmail, Google Calendar y Google Drive** están "para todos los usuarios", según la [ayuda de Claude](https://support.claude.com/en/articles/10166901-use-google-workspace-connectors). Se prueba igual el jueves.
- **El límite de uso del plan gratis** es por sesión y se renueva cada 5 horas ([ayuda de Claude](https://support.claude.com/en/articles/8114491-get-started-with-claude)). Gastan más los mensajes largos, los archivos grandes, los chats largos, la búsqueda web, los artefactos y las tareas de varios pasos ([ayuda de Claude](https://support.claude.com/en/articles/9797557-usage-limit-best-practices)).

Los nombres de los menús salen de la ayuda en inglés, como "Customize > Skills". En español pueden decir otra cosa: la prueba del jueves anota cómo se llaman.

## Cómo es cada clase

- **Ritmo:** muestro, lo hacés vos, preguntas. Cada clase termina con un ejercicio que se hace en vivo.
- **Las demos se hacen con la cuenta gratis de prueba,** para que se vea lo mismo que tienen los inscriptos. La cuenta paga queda abierta en otra ventana por si la de prueba llega al límite.
- **Material de práctica,** inventado y sin datos reales: [`ventas-octubre-ejemplo.csv`](material/ventas-octubre-ejemplo.csv) y [`mi-negocio-ejemplo.txt`](material/mi-negocio-ejemplo.txt), de una panadería que no existe. Se mandan al grupo de la clase para quien no quiera subir archivos propios.
- **Para que el uso alcance,** se dice al empezar: un chat nuevo por tema, archivos chicos y la búsqueda web solo cuando hace falta.

### Las salas de Meet

Meet gratis corta a los 60 minutos las reuniones de 3 o más personas, avisa a los 50 y deja entrar hasta 100 ([ayuda de Google Meet](https://support.google.com/meet/answer/7317473?hl=es-419)). Por eso cada clase usa varias salas, con un enlace nuevo cada una, y se cambia antes de los 60 minutos:

| Clase | Sala 1 | Sala 2 | Sala 3 |
|---|---|---|---|
| 1, martes 3 | 18:50 a 19:45 | 19:45 a 20:40 | 20:40 a 21:00 |
| 2, jueves 5 | 18:50 a 19:45 | 19:45 a 20:30 | — |
| 3, sábado 7 | 8:50 a 9:45 | 9:45 a 10:30 | — |

En cada cambio, el enlace de la sala que sigue va al grupo de la clase (respuesta rápida "/sala", en [whatsapp.md](whatsapp.md)).

### Antes de cada clase (Sergio Urcullo)

- **La víspera:** crear los enlaces de las salas en Meet, uno por sala, con Nueva reunión > "Crear una reunión para más tarde" ([ayuda de Google Meet](https://support.google.com/meet/answer/9302870?hl=es-419)), y pegar el de la sala 1 en el recordatorio. Los crea Sergio Urcullo con su cuenta: con una cuenta personal, solo quien crea la reunión puede admitir a los que no tienen invitación (misma ayuda).
- **30 minutos antes:**
  - abrir Claude con la cuenta gratis de prueba, con los dos archivos de práctica a mano;
  - cerrar todo lo que tenga datos de clientes y prender "No molestar" en Windows;
  - Meet en una ventana y Claude en otra, para que la grabación tome solo la de Claude;
  - WhatsApp Web cerrado: "/sala" y los avisos salen del celular. Recortes graba un rectángulo de la pantalla, y si algo queda encima de Claude, se graba.
- **18:50 (8:50 el sábado):** abrir la sala 1, compartir la ventana de Claude y empezar a grabar con la Herramienta Recortes (Win + Shift + R) solo esa ventana, con el micrófono prendido y el sonido de la compu apagado. Se graba una toma por sala: se corta en cada cambio y se arranca otra, así ningún archivo pasa de una hora. Que Recortes aguante 2 horas seguidas no está probado.
- **En la sala:** se acepta solo a quien está en la lista de "Pagó". El enlace va solo al grupo de los que pagaron. Las solicitudes se ven en "Ver a todos", que tiene "Admitir a todos" ([ayuda de Google Meet](https://support.google.com/meet/answer/9303164?hl=es-419)). Desde 2026, Meet separa algunas solicitudes en una segunda lista y propone rechazarlas ([Google](https://workspaceupdates.googleblog.com/2026/02/safeguarded-guest-admit-flow-in-google-meet.html)): esa se mira una por una. Con una cuenta personal no hay coorganizadores ([ayuda de Google Meet](https://support.google.com/meet/answer/10885841?hl=es-419)), así que admite solo Sergio Urcullo, y tiene que seguir en la sala.
- **Al terminar:** cortar la grabación, subir las tomas a YouTube como no listados ("Parte 1", "Parte 2") y mandar los enlaces al grupo con el mensaje de después de la clase ([whatsapp.md](whatsapp.md)). Después de la clase 1 del martes 3, antes de contestar chats, van los cambios del martes 3 de [whatsapp.md](whatsapp.md), en "Los cambios del martes 3 y del miércoles 4": quien oyó los Bs 70 escribe enseguida.

**La grabación:** se avisa al empezar que se graba solo la pantalla y la voz de Sergio Urcullo. No se graban las caras ni los nombres de los inscriptos, ni el chat de Meet. Las preguntas se leen en voz alta, sin el nombre de quien pregunta.

## Clase 1: Claude desde cero

**Martes 3 de noviembre, de 19:00 a 21:00.** Al final, cada uno tiene su primer proyecto con sus documentos.

| Hora | Min | Qué | Cómo |
|---|---|---|---|
| 19:00 | 5 | Bienvenida | Quién soy, en 30 segundos. Cómo es la clase. Aviso de que se graba solo la pantalla y mi voz. Las preguntas van al chat de Meet. A las 19:45 y a las 20:40 cambiamos de sala: el enlace llega al grupo |
| 19:05 | 10 | Qué es Claude y qué lo hace distinto | Un asistente de IA de la empresa Anthropic. Qué trae el plan gratis y qué no. Qué hace bien: leer y escribir mucho, trabajar con tus archivos, armar documentos. Qué no: puede inventar un dato con total seguridad, así que las cifras y los nombres se revisan siempre. Privacidad: no subas datos sensibles de clientes, y en la configuración elegís si tus chats se usan para entrenar a Claude |
| 19:15 | 5 | Todos adentro | Cada uno abre claude.ai y escribe "Hola, trabajo en [tu rubro]". Avisa en el chat de Meet cuando le contesta. Quien no tiene cuenta, la crea ahora |
| 19:20 | 20 | Pedirle bien las cosas | Demo: el mismo pedido dicho mal y dicho bien. Las 4 partes: el contexto (quién sos y para qué), la tarea, el formato y cómo te das cuenta de que está bien. Si no sale, se corrige en el mismo chat; para otro tema, un chat nuevo. **Ejercicio rápido, 5 minutos:** reescribí con las 4 partes algo que le pedirías a Claude esta semana |
| 19:40 | 5 | Preguntas y aviso de sala | — |
| 19:45 | 5 | Cambio a la sala 2 | "/sala" en el grupo, desde el celular. Toma nueva de grabación |
| 19:50 | 15 | Subirle archivos | Demo con `ventas-octubre-ejemplo.csv`: "Resumime en 3 líneas cómo nos fue", "Armame una tabla de ventas por producto" y "¿Qué producto conviene hacer más?". Se comprueba la respuesta con las cifras de abajo. Qué más se puede subir: un PDF, un Excel, la foto de un documento |
| 20:05 | 10 | Búsqueda web y memoria | Cuándo prender la búsqueda web y pedirle las fuentes. La memoria: qué recuerda de un chat a otro, dónde se ve y cómo se borra. El chat de incógnito, para lo que no querés que recuerde |
| 20:15 | 20 | Tu primer proyecto | Demo: proyecto "Panadería La Esquina", con instrucciones y los dos archivos de práctica. Pedido: "Un cliente pide una torta para mañana a las 10. Contestale". Claude debería decir que hacen falta 48 horas, porque está en las instrucciones. **Ejercicio de la clase,** 10 minutos (abajo) |
| 20:35 | 5 | Aviso de sala | — |
| 20:40 | 5 | Cambio a la sala 3 | "/sala" en el grupo, desde el celular. Toma nueva de grabación |
| 20:45 | 10 | Preguntas | — |
| 20:55 | 5 | Cierre | La tarea. La grabación llega al grupo. Pedido de testimonio: "Si te sirvió, contame en una frase qué armaste". La clase 2: qué se ve y cómo se paga. El martes 3, la oferta: "Tu clase 1 ya cuenta: completá la serie por Bs 70 (sueltas son Bs 100)", hasta que empiece la clase 2 |

**Las cifras del archivo de práctica,** para comprobar lo que contesta Claude:
- Del 1 al 28 de octubre se vendieron Bs 17.766.
- Por semana: Bs 4.220, 4.321, 4.220 y 5.005. La última fue la mejor.
- Lo que más se vende en unidades es la marraqueta (9.950), pero lo que más plata deja es la salteña (Bs 5.180).

**Ejercicio de la clase: tu proyecto de trabajo.**
1. Creá un proyecto con el nombre de tu trabajo o tu negocio.
2. En sus instrucciones escribí, con las 4 partes: quién sos, para quién trabajás y cómo querés que te conteste.
3. Subile de 1 a 3 documentos tuyos sin datos sensibles. Si no tenés, los dos de práctica.
4. Hacele 2 pedidos de tu trabajo real.

Lo tenés cuando Claude te contesta usando tus documentos, sin que se los expliques de nuevo.

**Tarea:** usá tu proyecto en 3 tareas reales esta semana y anotá cuál te ahorró más tiempo. Contala en el chat de la clase 2.

## Clase 2: Trabajo armado

**Jueves 5 de noviembre, de 19:00 a 20:30.** Al final, de un archivo salen un artefacto, un documento y una presentación.

| Hora | Min | Qué | Cómo |
|---|---|---|---|
| 19:00 | 5 | Bienvenida | Aviso de grabación. A las 19:45 cambiamos de sala |
| 19:05 | 5 | Repaso de la tarea | 2 o 3 cuentan en el chat qué tarea le pasaron a su proyecto |
| 19:10 | 15 | Artefactos | Qué son: lo que Claude arma aparte del chat, como una página, una planilla que calcula, un diagrama o una mini app. Demo: "Armame una calculadora para presupuestar tortas por encargo: tamaño, sabor y precio". Cómo pedirle cambios. Si se publica, el enlace lo puede abrir cualquiera: nada privado. **Ejercicio rápido, 5 minutos:** un artefacto para algo de tu trabajo |
| 19:25 | 15 | Documentos | Pedirle un Word, un Excel o un PDF para bajar. Demo con el archivo de práctica: "Informe de octubre en Word, con una tabla y 3 recomendaciones" y "Excel con los totales por semana". Claude Docs, si la prueba del jueves 29 lo confirma. Se revisan los números antes de mandar nada |
| 19:40 | 5 | Preguntas y aviso de sala | — |
| 19:45 | 5 | Cambio a la sala 2 | "/sala" en el grupo, desde el celular. Toma nueva de grabación |
| 19:50 | 15 | Presentaciones | Demo: "Con este informe, armame 5 diapositivas para mi equipo". Con Slides o como archivo de PowerPoint, según lo que confirme la prueba. Cómo pedirle que cambie una sola diapositiva |
| 20:05 | 10 | Skills que ya vienen | Una skill es un paquete de instrucciones que Claude usa solo cuando hace falta. Ya vienen las de Excel, Word, PowerPoint y PDF, y Claude las usa solo ([ayuda de Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude)). Dónde se ven y se prenden. En la clase 3 armás la tuya |
| 20:15 | 10 | Ejercicio de la clase | Abajo |
| 20:25 | 5 | Cierre | La tarea, la grabación, el testimonio y la clase 3 |

**Ejercicio de la clase: de un archivo a tres entregas.** Con un archivo tuyo, o con el de práctica:
1. un artefacto: una tabla o un tablero;
2. un documento de Word o PDF;
3. una presentación de 5 diapositivas.

Lo tenés cuando bajaste el documento y la presentación, y después de revisarlos los podrías mandar tal cual.

**Tarea:** armá con Claude algo que entregás seguido, como un informe, una cotización o un presupuesto, y guardá el pedido que usaste. Lo usás en la clase 3.

## Clase 3: Conectá Claude a lo que usás

**Sábado 7 de noviembre, de 9:00 a 10:30.** Al final, Claude trabaja con una app tuya y con una skill propia.

| Hora | Min | Qué | Cómo |
|---|---|---|---|
| 9:00 | 5 | Bienvenida | Aviso de grabación. A las 9:45 cambiamos de sala. 2 o 3 cuentan en el chat el pedido que guardaron |
| 9:05 | 20 | Conectores | Qué son y qué permiso le das. Claude pide tu OK antes de mandar o borrar algo, y lo que lee queda guardado con el chat ([ayuda de Claude](https://support.claude.com/en/articles/10166901-use-google-workspace-connectors)). Demo con Google Drive, en una cuenta de Google sin datos de clientes que tiene en Drive el documento de Google "Precios de la panadería", con el texto de `mi-negocio-ejemplo.txt`: "Buscá mi documento de precios y resumilo". Gmail y Google Calendar, si la prueba los confirma. El directorio con las demás apps. **Ejercicio rápido, 5 minutos:** conectá Drive u otra app tuya y pedile algo |
| 9:25 | 15 | Pedidos que se reusan | Tres lugares: las instrucciones de un proyecto; tus preferencias, que Claude lee en todos los chats; y tu "recetario" de pedidos en un documento. Demo: "Convertí lo que hicimos en un pedido que pueda pegar la próxima vez" |
| 9:40 | 5 | Preguntas y aviso de sala | — |
| 9:45 | 5 | Cambio a la sala 2 | "/sala" en el grupo, desde el celular. Toma nueva de grabación |
| 9:50 | 20 | Tu propia skill | Demo: la skill "respuestas de la panadería". Se le pide a Claude que la escriba como una carpeta con un `SKILL.md`, comprimida en .zip. Se sube en Customize > Skills, con "+", "Create skill" y "Upload a skill" ([ayuda de Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude)), y se prueba en un chat nuevo. **Ejercicio de la clase** (abajo) |
| 10:10 | 10 | Tu plan para seguir | Elegí 3 tareas de tu semana y a dónde va cada una: un proyecto, una skill o un conector. Cuándo conviene un plan pago: más uso y programar tareas. El Pro cuesta US$20 por mes, o US$17 por mes pagando el año ([precios de Claude](https://claude.com/pricing), 29-oct-2026). {Con el gratis se hace todo lo de esta serie}, si la prueba del jueves 29 lo confirma |
| 10:20 | 10 | Preguntas y cierre | El testimonio, la grabación y cómo seguir |

**Ejercicio de la clase: tu skill.**
1. Elegí una tarea que repetís cada semana, por ejemplo contestar un tipo de consulta o armar un informe.
2. Pedile a Claude: "Armame una skill para [la tarea]. Que sea una carpeta con un SKILL.md, comprimida en .zip para subir a Claude".
3. Subila y prendela.
4. En un chat nuevo, pedile la tarea sin explicarle nada.

Lo tenés cuando Claude hace la tarea con tu formato sin que se lo expliques. Si la skill no se sube, las mismas instrucciones van en un proyecto.

**Tarea final:** tu plan de 7 días. Cada día, una de tus 3 tareas con Claude. Contá en el grupo cómo te fue.

## Ejercicio de reserva, por si llegás al límite

Si te sale el aviso de que llegaste al límite, no te frenes: seguí la demo y hacé esto en un bloc de notas o en papel. El límite del plan gratis se renueva cada 5 horas ([ayuda de Claude](https://support.claude.com/en/articles/8114491-get-started-with-claude)). Cuando se renueve, lo pegás en Claude.

- **Clase 1:** escribí las instrucciones de tu proyecto con las 4 partes, la lista de documentos que le vas a subir y los 2 pedidos que le vas a hacer.
- **Clase 2:** escribí los 3 pedidos (el artefacto, el documento y la presentación) con las 4 partes. Para la presentación, el título de cada una de las 5 diapositivas y una línea de qué dice.
- **Clase 3:** escribí tu skill a mano con este molde. Cuando se renueve tu límite, pegala en Claude y pedile: "Convertí esto en una skill: una carpeta llamada `respuestas-panaderia` con este SKILL.md, comprimida en .zip".
  - Si la armás vos, la carpeta se llama igual que el `name` y el .zip lleva esa carpeta adentro ([ayuda de Claude](https://support.claude.com/en/articles/12512198-how-to-create-custom-skills)).
  - Si la escribís en el Bloc de notas de Windows 11, guardala en modo "Syntax": en "Formatted" agrega `\` antes de los guiones y rompe el `---` del principio.

  ```
  ---
  name: respuestas-panaderia
  description: Usala cuando haya que contestar un pedido o una consulta de un cliente de la Panadería La Esquina.
  ---
  # Cómo contestar a los clientes

  1. Saludá corto y de vos.
  2. Si piden una torta entera, avisá que se encarga con 48 horas.
  3. Nunca confirmes un encargo sin decir "te confirmo en un rato".

  Ejemplo: "¡Hola! La torta se encarga con 48 horas. ¿Para qué día la querés?"
  ```

## Qué probar el jueves 29 con una cuenta gratis

Lo hace Sergio Urcullo con una cuenta gratis nueva, no con la suya paga, porque la paga trae cosas que el gratis no tiene. Crear la cuenta lo hace él. Los pasos para abrirla aparte están en la [lista del jueves y el viernes](lista-jueves-viernes.md).

Para cada punto, anotá si anduvo y cómo se llama el menú en español. Si algo no anda, se saca del temario.

**Clase 1:**
- [ ] Crear la cuenta: ¿pide número de teléfono?
- [ ] Cambiar el idioma a español, si se puede.
- [ ] Subir `ventas-octubre-ejemplo.csv` y un PDF cualquiera. ¿Contesta las cifras de arriba?
- [ ] Prender la búsqueda web y pedirle algo con fuentes.
- [ ] Ver la memoria: dónde se prende, se ve y se borra. Abrir un chat de incógnito.
- [ ] Dónde se elige si los chats se usan para entrenar.
- [ ] Crear un proyecto con instrucciones y los dos archivos de práctica, y hacerle el pedido de la torta.

**Clase 2:**
- [ ] Un artefacto: la calculadora de tortas. ¿Se puede publicar? ¿Qué avisa?
- [ ] Un Word y un Excel para bajar, desde el archivo de práctica. ¿Hace falta prender "crear y editar archivos"?
- [ ] Claude Docs y Slides: ¿aparecen? ¿Cómo se usan?
- [ ] Una presentación de 5 diapositivas.
- [ ] Las skills que ya vienen: ¿están en Customize > Skills?

**Clase 3:**
- [ ] Conectar Google Drive, Gmail y Google Calendar con una cuenta de Google sin datos de clientes, que tenga en su Drive el documento de Google "Precios de la panadería", con el texto de `mi-negocio-ejemplo.txt` ([lista](lista-jueves-viernes.md), paso 7). ¿Entran los tres en el plan gratis? ¿Encuentra el documento?
- [ ] Pedirle a Claude la skill en .zip, subirla y probarla en un chat nuevo.
- [ ] Guardar algo en las preferencias.

**El límite:**
- [ ] Hacer seguido todo lo de la clase 1, como un inscripto. ¿Aparece el aviso de límite? ¿En qué paso y a qué hora?
- [ ] Lo mismo con la clase 2.

**En el celular:**
- [ ] En la app de Claude, ¿se ve el proyecto, se sube un archivo, se conecta Drive y se sube el .zip de una skill? Si las 3 clases andan en el celular, "/taller" puede sumarlo.

**Qué hacer con el resultado:** mandale a un agente la lista marcada con capturas, sin datos personales. El agente corrige este temario. Si todo anda con la cuenta gratis, el anuncio puede decir "con la cuenta gratis" ([anuncio.md](anuncio.md)), y "/taller" y la confirmación, "cuenta gratis" ([whatsapp.md](whatsapp.md)).
