# Campaña de Meta Ads del taller 3-4-5-nov: qué cambia y qué falta

2-nov-2026, por la sesión Marketing (Claude Code). Parte de la oferta de `docs/decisiones/2026-11-01-oferta-taller-3-4-5.md` y corrige, para la campaña, el [plan de Meta Ads](plan-meta-ads-borrador.md) (secciones "Estructura de la campaña", "Mensaje" y "Creativos con su cara") y el texto del anuncio del [PR #72 (temario, WhatsApp y guiones)](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/72), que siguen con 3 clases a Bs 50 o Bs 120 y fechas del 3, 5 y 7.

**Estado: borrador.** Lo ve un cliente y es gasto: Sergio Urcullo aprueba los textos y los creativos con captura, y la campaña queda en pausa hasta su sí.

## Lo que decidió Sergio Urcullo el 2-nov-2026

Con botones, en la sesión Marketing (sin enlace):

- **Presupuesto:** "US$10/día hasta el 5-nov (Recomendada)". Son unos US$30 en 3 días (3, 4 y 5-nov), si arranca el 3-nov.
- **Creativos:** "Grabás 2 videos con los guiones del plan (Recomendada)". Los graba él; los guiones son los de abajo.
- **Nombre:** "claude de 0 a 100 y no es ilegal, no creo que este registrado, solo fue usado una vez, no habra problemas". Queda ese nombre, **sin confirmar con un abogado** (`docs/lecciones.md`). El anuncio dice "Taller independiente, no oficial de Anthropic" y no usa el logo de Claude.
- **PR de estado de Marketing (#102):** "Actualizarlo".

## Comprobado hoy en Meta (conector de Meta Ads, 2-nov)

| Qué | Resultado |
|---|---|
| Cuentas publicitarias | Dos, activas y en USD. "ONIA Ads" (1073680778314945, negocio OniaAgency): **sin método de pago**. Otra, sin nombre (679613631427810, sin negocio): **con método de pago** |
| Páginas de Facebook | **Ninguna** en las dos cuentas (`ads_get_ad_account_pages`) |
| Cuentas de Instagram | **Ninguna** en las dos (`ads_get_ig_accounts`) |
| Campañas | Nada creado |

Sin una página no se puede crear el anuncio de mensajes a WhatsApp, así que **todavía no hay nada cargado**. Lo que sigue lo hace Sergio Urcullo, porque son sus logins y sus pagos:

1. Crear la página con su nombre y conectarle el WhatsApp del taller (+591 75414930), y dejarla disponible en la cuenta que se use ([ayuda de Meta](https://www.facebook.com/business/help/1583303048513172)).
2. Elegir la cuenta: "ONIA Ads" (hay que cargarle la tarjeta) o la que ya tiene método de pago.
3. Grabar los 2 videos (1080 × 1920, .mp4 o .mov) y dejarlos en E: o Drive.

## Cambios al anuncio

- **Fechas fuera del anuncio**, como dice el plan: la campaña corre hasta el 5-nov y un anuncio con "martes 3" quedaría viejo el 4. Las fechas van en el saludo de WhatsApp.
- **Un solo precio:** "Un solo pago de Bs 50 por las 3 clases". Sin Bs 120 ni cupos (decisión del 1-nov).
- **Grabaciones:** "grabaciones incluidas", sin plazo, porque hasta cuándo y dónde no está decidido.
- **Nada de "devolución"** ni certificado en el anuncio: no están decididos.

### Texto principal

> ¿Usás la IA solo para hacerle preguntas? "Claude de 0 a 100" son 3 clases en vivo esta semana, por Meet, para usar Claude con tus archivos y tus proyectos, y dejarle trabajo armado. Sin programar {y con la cuenta gratis}.
> 🎥 Grabaciones incluidas
> 💵 Un solo pago de Bs 50 por las 3 clases
> Taller independiente, no oficial de Anthropic.
> Tocá el botón y escribime: te paso las fechas, el temario y el QR.

Título: "Claude de 0 a 100 · 3 clases en vivo".

### Videos

Los guiones son los del [PR #72](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/72) (`anuncio.md`), con estos cambios en el cierre.

- **Video 1, el contraste, 25 a 35 s:** "En vivo, con grabaciones. Un solo pago de Bs 50 por las tres clases. Tocá el botón y escribime." Texto en pantalla: "Bs 50 · 3 clases · Grabaciones incluidas".
- **Video 2, la demo, 20 a 35 s:** "Esto lo armás vos en Claude de 0 a 100: 3 clases en vivo, con grabaciones, por Bs 50 en total. Tocá el botón y escribime." Texto en pantalla: "Claude de 0 a 100 · Bs 50 las 3 clases".
- **Datos de la demo:** `ventas-octubre-ejemplo.csv` del PR #72 (panadería inventada), sin datos de clientes.
- **"Con la cuenta gratis"** va solo si el temario se probó con una cuenta gratis (`docs/lecciones.md`, "Datos y fuentes"). Hoy no hay constancia de esa prueba en `main`.

## Texto que llega al chat (coincide con el llamado a la acción)

El llamado del anuncio es "Tocá el botón y escribime", y el mensaje sugerido de la plantilla es **"Hola, quiero info del taller de Claude"**. La respuesta es el saludo del [PR #110 (textos de WhatsApp)](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/110), sección 1, que da las fechas 3, 4 y 5, el pago único y las grabaciones. Está **sin comprobar** que ese saludo se dispare con esa frase: lo confirma Boss No-Code. Los reels usan "escribí TALLER" por WhatsApp; ese es otro canal y no se mezcla con el anuncio.

## Campaña (a cargar en pausa cuando haya página)

Sigue la estructura del plan (ayuda de Meta: [anuncios a WhatsApp](https://www.facebook.com/business/help/447934475640650)), con estos valores:

| Nivel | Valor |
|---|---|
| Campaña | "Claude 0 a 100 · V1 · WhatsApp". Interacción, destino WhatsApp |
| Conjunto | Toda Bolivia, 18 años o más, sin intereses, ubicaciones automáticas. Presupuesto diario US$10. Inicio martes 3-nov, fin jueves 5-nov. Hora de inicio y zona horaria de la cuenta: **sin confirmar** (Bolivia es UTC−4) |
| Anuncios | "Video 1 · contraste" y "Video 2 · demo", con el texto de arriba |
| Estado | Borrador o en pausa. Publicar es activar (`ads_activate_entity`): solo con el sí de Sergio Urcullo con captura |

La plantilla de mensaje no la carga el conector (PR #72); la escribe Sergio Urcullo en el Administrador de anuncios antes de activar.

## Cuándo se pausa

Como el plan, acortado a 3 días: el 4-nov se pausa el video con menos conversaciones por dólar. Seguir después del 5-nov, o subir el presupuesto, pide otro sí de Sergio Urcullo.

## Avisos

- La meta de 60 pagos en 3 días con US$30 no tiene dato propio que la sostenga: son unos Bs 363 de anuncio (a Bs 12,12 por dólar, cambio del plan del 29-oct) para llegar a Bs 3.000 brutos. Se mide con el costo por conversación del Administrador de anuncios, y lo orgánico (perfil, estados, grupos) tiene que poner el resto.
- Sergio Urcullo tiene 16 años según sus propios guiones de reels (rama `grokbot/workspace-20261101`). Si Meta pide mayoría de edad para la cuenta publicitaria o la página, está sin comprobar y puede frenar el 3-nov.
