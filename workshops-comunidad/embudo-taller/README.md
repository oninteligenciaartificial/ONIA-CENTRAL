# Embudo del taller "Claude de 0 a 100" y de la comunidad paga

3-nov-2026, hilo "Armar el embudo de venta del taller" del proyecto Onia (Claude). Lo pidió Sergio Urcullo, que dijo "Lanza" a la propuesta del coordinador: lanzamiento el viernes 6-nov y "investigar funnels y la oferta del taller". Lo técnico (respuestas automáticas por Instagram con n8n) lo arma el hilo "Responder DMs de Instagram con n8n". Este archivo le pasa los textos y la página.

**Estado: borrador.** Lo ve un cliente: los textos, la página y el precio de la comunidad los aprueba Sergio Urcullo, con captura (`AGENTS.md`, "Frenos"). Lo que dice "Recomiendo" es una opción, no una decisión.

Archivos de esta carpeta:

| Archivo | Qué es |
|---|---|
| `README.md` | La recomendación, el recorrido completo y qué es automático |
| `textos.md` | Textos del DM de Instagram, del mensaje automático de WhatsApp, de la oferta de la comunidad paga y un cuestionario opcional |

Fuentes: las fichas de `marca-personal/referentes/` (29-oct), la [investigación de la campaña](../investigacion-campana-taller-2026-11-03.md) (3-nov) y lo que sume la revisión de Instagram del 3-nov, en `../referentes-como-venden-2026-11-03.md` cuando esté.

## 1. Qué hacen los referentes (resumen)

Sale del [resumen de referentes](../../marca-personal/referentes/resumen-2026-10-29.md) y de las fichas de cada uno.

| Referente | Qué pide en el reel | Qué llega al DM | Qué abre | Qué vende al final |
|---|---|---|---|---|
| Erik Taveras | "Comentá PALABRA y te lo mando" (AUTOMATA, BASE, PLUGIN, LOCAL) | Mensaje automático (ManyChat y un agente propio en n8n) con la guía | La guía, dentro de su comunidad gratis, que pide cuenta con correo. Aparte, un cuestionario de madurez en IA (iaradar.com) | Workshops en vivo de 90 min a 2 h con 25 cupos; Skool a US$59 por mes, que sube a US$79 a los 250 miembros |
| Enrique Rocha | "Comentá [respuesta a una pregunta personal] y te mando la guía" | La guía | Su bóveda de guías, que pide nombre y correo una vez | Workshop "Claude de 0 a 100", 3 h por Meet, a US$97 (arrancó en US$69), repetido 14 veces; nivel 2 de US$167 a US$297. No vende comunidad |
| Santiago Muñoz | Palabra clave; bio: "DM Comunidad para empezar" | No se vio | Mini curso gratis que primero pregunta para qué querés aprender, y pide el correo en la lección 4 | Skool a US$64 por mes, que sube a US$79; precio congelado para el que entra |
| Iman Gadzhi | Anuncios masivos, no palabra clave | No aplica | Registro a un reto gratis de 5 días con grupo de WhatsApp, y un kit de US$9 justo después | Programa de US$1.995, vendido solo durante el reto |

Lo que se repite:

1. **Reel con "comentá PALABRA"** y un DM automático. En Enrique, los comentarios llegan al 40-80% de los "me gusta" con ese llamado, y al 3-8% sin él.
2. **Algo gratis a cambio del contacto:** una guía o un mini curso.
3. **Algunos preguntan antes de recomendar:** Santiago pregunta para qué querés aprender; Erik tiene un cuestionario de diagnóstico.
4. **El workshop se vende directo,** sin clase gratis antes (Erik y Enrique). La clase gratis o el reto la usan los que venden algo caro (Santiago, Iman).
5. **La comunidad paga tiene precio de fundador** que sube por fecha o por cantidad de miembros, y queda congelado para quien entra antes (Erik y Santiago).

### Lo que se vio en Instagram el 3-nov (solo lectura)

Detalle y fuentes en [`referentes-como-venden-2026-11-03.md`](../referentes-como-venden-2026-11-03.md). Sobre 9 cuentas:

- **5 de 9 venden con palabra clave en los comentarios y respuesta automática:** Víctor Heras, Santi Muñoz, Erik Taveras, softgirlnocode y Hormozi (de Hormozi se vio la palabra, no la respuesta). El pie del reel dice "Comenta X y te mando…".
- **La respuesta pública rota varias frases**, por ejemplo Erik: "Te lo envié por mensaje privado 📩 si no lo ves, revisa tus solicitudes de mensaje". Es lo que ya dejé en `textos.md`, sección 1a.
- **Dos mandan a un cuestionario** antes de vender: Hormozi (nombre y contacto, para su equipo de ventas) y Víctor Heras (admisión para una consultoría 1 a 1). Erik tiene un centro de enlaces con tres caminos ("No sé por dónde empezar", "Tengo un problema concreto", "Quiero un proyecto completo"). Las preguntas siguientes de los dos primeros no se vieron.
- **Las comunidades de IA en español cobran de US$59 a US$64 por mes:** Erik a US$59 (sube a US$79 a los 250 miembros) y Santi a US$64. Las dos con una clase en vivo y una garantía (14 y 30 días).
- **El producto de entrada barato existe:** Jorge Darek vende una guía a 4,95 € como lanzamiento con sorteo; softgirlnocode, un curso de US$89 con preventa a US$71,20.
- **No se pudo ver** qué mensaje llega por DM ni las preguntas siguientes de los cuestionarios: habría que comentar o contestar, y eso necesita el sí de Sergio Urcullo.

Qué cambia en esta recomendación: nada de fondo. Se confirma la palabra clave con respuesta automática rotativa. El cuestionario de `textos.md`, sección 2, sigue como opción: dos de nueve lo usan, pero para vender consultoría o llamadas, que no es lo que se vende acá.

## 2. Recomendación

**Recomiendo vender el taller directo, sin clase gratis antes, y usar el taller como la clase que vende la comunidad.** Es lo que hacen los dos referentes más parecidos a ONIA (en español, workshop barato y sin anuncios). Una clase gratis suma una noche más de Sergio Urcullo y un paso más antes de un pago de Bs 50. Esto cambia lo que dije en la [investigación de la campaña](../investigacion-campana-taller-2026-11-03.md), sección 6, opción 2: ahí recomendaba probar una clase gratis porque es lo más repetido en los anuncios de la región, pero esos anuncios venden cosas más caras.

### El modelo de Sergio Urcullo (3-nov)

Lo dijo así: "primero, en el video vertical explico más o menos el tema, en el horizontal lo explico a un poquito más, y luego en la comunidad envío un recurso exclusivo que te da el beneficio de estar en la comunidad". Y después, "que el curso sea más extenso sobre ese tema, pero que tu ancho sea el video gratuito". Además: "cada guión tiene que tener una palabra clave".

Ese modelo ya tiene casi todo armado en su sitio (repo `sergiourcullo`, rama `main`, 3-nov):

- **La bóveda:** guías largas con video y archivos (`/claude-code`, `/stack`, `/homelab`, `/vps`), como las de Erik y Enrique.
- **La comunidad gratis:** "Onia Community", un grupo de WhatsApp. El sitio lo enlaza arriba de cada página con "Cada día subo un recurso a Onia Community · entrá gratis".
- **La llamada 1 a 1 gratis** de 20 minutos (`/llamada`, en Cal.com), con horario de 19:00 a 22:00 los días de semana.
- **La página del taller** (`/taller`).

Por eso este embudo **no usa un cuestionario aparte:** el DM manda a la guía de la bóveda, como hacen Erik y Enrique, y la guía manda a la comunidad gratis. El cuestionario de `textos.md`, sección 2, queda como opción para más adelante. No se armó la página: una pieza menos para el viernes.

### El recorrido

```
Reel vertical con "Comentá PALABRA"      Anuncio de Meta (opcional, con gasto)
        │                                        │
        ▼                                        │
DM automático por Instagram (n8n)                │
  con el enlace a la guía de ese tema            │
        │                                        │
        ▼                                        │
Guía en la bóveda (sitio de Sergio Urcullo)      │
  con el video horizontal, más a fondo           │
  → "el recurso exclusivo está en                │
     Onia Community, entrá gratis"               │
        │                                        │
        ▼                                        │
Onia Community (WhatsApp, gratis)                │
  recurso exclusivo + aviso del taller           │
        │                                        │
        ▼                                        ▼
WhatsApp: mensaje automático con precio, fecha y QR
        │
        ▼
Comprobante → Sergio verifica a la noche → confirmación y grupo
        │
        ▼
Taller: 3 clases en vivo a las 19:00
        │
        ▼
Al final de la clase 3: oferta de la comunidad con precio de fundador (48 h)
        │
        ▼
Mensaje automático por WhatsApp a quien no entró, una sola vez
```

### Qué es automático y qué hace Sergio Urcullo

Sergio Urcullo está libre desde las 19:00. Todo lo de antes de esa hora tiene que andar solo.

| Paso | Automático | Sergio Urcullo, desde las 19:00 |
|---|---|---|
| Responder el comentario y mandar el DM | Sí, con n8n (hilo de Instagram) | — |
| La guía de la bóveda | Sí, es una página fija | Grabar el video horizontal y escribir la guía, una vez por tema |
| El recurso en Onia Community | Se puede programar el mensaje | Elegir el recurso, una vez por tema |
| Saludo, precio y QR por WhatsApp | El saludo, sí, con el mensaje de bienvenida de WhatsApp Business. El QR, con respuestas rápidas | Responder lo que no sea pregunta frecuente |
| Verificar el pago | **No.** Hoy se mira en el banco | Una vez por noche, todos juntos |
| Confirmar y sumar al grupo | **No**, depende de la verificación | Una vez por noche |
| Recordatorio a quien no pagó | Solo con la API de WhatsApp, que cobra por mensaje | O a mano, una vez por noche |
| Oferta de la comunidad | El mensaje sale a una hora fija | La dice en vivo al final de la clase 3 |

**Para que el pago también sea automático** hace falta una pasarela que genere un QR por pedido y confirme sola, y eso es gasto. La [guía de web de venta](../../marca-personal/guias/web-de-venta.md) da dos ejemplos para comparar: PagosYa, desde Bs 249 por mes, y EnlazateOnline, con 2,15% por cobro más Bs 27 por mes. Lo decide Sergio Urcullo.

### Una palabra clave por guion

Cada guion cierra con su propia palabra (la regla es de Sergio Urcullo, 3-nov), y cada palabra lleva a su guía, como hace Erik con AUTOMATA, BASE, PLUGIN y LOCAL. El hilo de n8n necesita una tabla con la palabra y su enlace. La arma el hilo de guiones a medida que escribe cada uno. Para el primer reel del taller, la palabra es `CLAUDE` y la guía es `/claude-code`, que ya existe. Ojo: esa guía es de Claude Code, que pide plan pago (lo dice la propia página), y el taller enseña Claude desde cero. Si el reel es del taller, conviene una guía nueva de Claude para empezar. Mientras no exista, `/claude-code` es la que hay.

## 3. La comunidad paga (la oferta después del taller)

Sin esto, cada persona deja Bs 50 y nada más (investigación de la campaña, sección 2).

**Qué ofrecen los referentes:** Erik y Santiago cobran de US$59 a US$64 por mes en Skool, con una clase en vivo por semana (Erik) o dos (Santiago), plantillas y cursos. Con el cambio de Bs 12,12 por dólar (plan del 29-oct), son unos Bs 715 a 776 por mes. Es un precio para otro mercado.

**La gratis y la paga son dos cosas distintas,** como en Erik: Onia Community sigue gratis y es donde llegan los recursos de cada reel; la paga es un grupo aparte, con la clase semanal.

**¿Cobrarla o no? (pregunta de Sergio Urcullo, 3-nov; sin decidir).** Tres caminos, medidos contra la meta de Bs 3.000 del taller (60 pagos de Bs 50):

| Camino | Qué suma a la meta del taller | Qué cuesta |
|---|---|---|
| Paga desde el primer día | Nada. Aparte, si entra entre un 10% y un 20% de los 60 (supuesto, sacado de cifras de webinars B2B en inglés), son 6 a 12 personas: Bs 600 a 1.200 por mes a Bs 100 | 4 clases por mes, comprometidas antes de saber si alguien viene |
| Gratis | Nada. Ya existe Onia Community, que es gratis | Lo mismo, sin ingreso |
| **Primer mes incluido con el taller, después paga (recomiendo)** | El taller pasa a ser "3 clases + 1 mes de comunidad": vale más por los mismos Bs 50 | 4 clases el primer mes, sin cobrar. Da el dato de cuántos vienen de verdad antes de cobrar |

Si se elige el primer mes incluido, el texto 4a de `textos.md` cambia: el precio de fundador se ofrece al terminar ese mes, no al final de la clase 3.

**Qué se propone para ONIA (opciones, nada decidido):**

- **Qué incluye:** una clase en vivo por semana a las 19:00, las grabaciones, las plantillas y los prompts del taller, y un grupo para preguntas. Todo lo que ya se arma para el contenido.
- **Precio de fundador, congelado para quien entra en las primeras 48 horas.** Opciones de precio, a decidir por Sergio Urcullo:
  - Bs 70 por mes: poco más que el taller, así el que pagó Bs 50 no lo piensa mucho.
  - **Bs 100 por mes (recomiendo):** el doble del taller, que es más o menos el salto de los workshops de Enrique a su nivel 2 (de US$97 a US$167 o más).
  - Bs 150 por mes: deja margen para subir, pero entran menos.
- **Dónde vive:** un grupo o una comunidad de WhatsApp, más Meet, para arrancar sin gasto. Skool cobra una suscripción mensual: su precio actual está **sin confirmar** en su página oficial, y se marca como gasto.
- **Cómo se cobra:** el mismo QR, una vez por mes. Sin pasarela, se verifica a mano.

## 4. Qué tiene que estar antes del viernes 6

Para Sergio Urcullo, todo junto:

1. Aprobar los textos de `textos.md`, con captura.
2. Elegir el precio de la comunidad y la fecha del taller.
3. Cambiar el mensaje de bienvenida de WhatsApp Business por el de `textos.md`, sección 3, **antes del primer video**. El de hoy da las fechas viejas del 4, 5 y 6.
4. Conectar Instagram a la página de Onia (lo necesita el hilo de n8n).
5. Decidir si se paga una pasarela de pagos o si se verifica a mano cada noche.

Para los hilos:

- El de Instagram con n8n usa los textos de `textos.md`, sección 1, y la tabla de palabras y guías. La primera fila es `CLAUDE` → `/claude-code`.
- El de guiones cierra cada guion con su palabra y suma la fila a esa tabla.
