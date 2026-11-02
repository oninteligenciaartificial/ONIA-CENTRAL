# Campaña de Meta Ads del taller (clases 4-5-6-nov): qué cambia y qué falta

2-nov-2026, por la sesión Marketing (Claude Code). Parte de la oferta de `docs/decisiones/2026-11-01-oferta-taller-3-4-5.md` y de la [decisión del 2-nov que pasa las clases al miércoles 4, jueves 5 y viernes 6, a las 19:00](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/136) (el precio no cambia; las grabaciones se entregan el viernes 6 y quedan para siempre, y no hay devolución salvo que ONIA no dé una clase, que se pasa a otra fecha). Corrige, para la campaña, el [plan de Meta Ads](plan-meta-ads-borrador.md) (secciones "Estructura de la campaña", "Mensaje" y "Creativos con su cara") y el texto del anuncio del [PR #72 (temario, WhatsApp y guiones)](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/72), que siguen con Bs 50 o Bs 120 y fechas del 3, 5 y 7.

**Estado: borrador.** Lo ve un cliente y es gasto: Sergio Urcullo aprueba los textos y los creativos con captura, y la campaña queda en pausa hasta su sí.

## Lo que decidió Sergio Urcullo el 2-nov-2026

Con botones, en la sesión Marketing (sin enlace):

- **Presupuesto:** "US$10/día hasta el 5-nov (Recomendada)", elegido cuando las clases eran 3-4-5. Son unos US$30 en 3 días (3, 4 y 5-nov), si arranca el 3-nov. Con las clases del 4 al 6, el 2-nov lo confirmó: "Empecemos hasta el 5 de noviembre".
- **Fechas (2-nov, después):** clases miércoles 4, jueves 5 y viernes 6, a las 19:00. La campaña arranca el martes 3-nov a la mañana, un día antes de la primera clase: "La campaña la lanzamos mañana en la mañana" (Sergio Urcullo, 2-nov, sesión Marketing).
- **Creativos:** "Grabás 2 videos con los guiones del plan (Recomendada)". Los graba él; los guiones son los de abajo.
- **Nombre:** "claude de 0 a 100 y no es ilegal, no creo que este registrado, solo fue usado una vez, no habra problemas". Queda ese nombre, **sin confirmar con un abogado** (`docs/lecciones.md`). El anuncio dice "Taller independiente, no oficial de Anthropic" y no usa el logo de Claude.
- **PR de estado de Marketing (#102):** "Actualizarlo".

## Comprobado hoy en Meta (conector de Meta Ads, 2-nov)

| Qué | Resultado |
|---|---|
| Cuentas publicitarias | Dos, activas y en USD. "ONIA Ads" (1073680778314945, negocio OniaAgency): **sin método de pago**. Otra, sin nombre (679613631427810, sin negocio): **con método de pago** |
| Páginas de Facebook | **Ninguna** asociada a las dos cuentas (`ads_get_ad_account_pages`). Sí hay una página "Onia" (1140384625819526) entre las del usuario (`ads_get_user_pages`), que no es la página con su nombre que pidió el plan |
| Cuentas de Instagram | **Ninguna** en las dos (`ads_get_ig_accounts`) |
| Campañas | Nada creado |

Para anunciar con una página hay que asociarla a la cuenta, y no se comprobó si la página "Onia" tiene el WhatsApp del taller conectado. Por eso **todavía no hay nada cargado**. Lo que sigue lo hace Sergio Urcullo, porque son sus logins y sus pagos:

1. Decidir si se usa la página "Onia" o una con su nombre, conectarle el WhatsApp del taller (+591 75414930) y dejarla disponible en la cuenta que se use ([ayuda de Meta](https://www.facebook.com/business/help/1583303048513172)).
2. Elegir la cuenta: "ONIA Ads" (hay que cargarle la tarjeta) o la que ya tiene método de pago.
3. Grabar los 2 videos (1080 × 1920, .mp4 o .mov) y dejarlos en E: o Drive.

## Cambios al anuncio

- **Fechas fuera del anuncio**, como dice el plan: la campaña corre varios días y un anuncio con "miércoles 4" quedaría viejo el 5. Las fechas van en el saludo de WhatsApp.
- **Un solo precio:** "Un solo pago de Bs 50 por las 3 clases". Sin Bs 120 (decisión del 1-nov). Los cupos: el [PR #110](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/110) no los usa y la decisión del 1-nov no dice nada; sin decidir, por eso el anuncio no los nombra.
- **Grabaciones:** "grabaciones incluidas". Quedan para siempre (decisión del 2-nov); dónde se comparten sigue sin decidir.
- **Cómo se graban las clases** no está decidido (Meet gratis no graba, según la decisión del 1-nov). El anuncio promete grabaciones: hay que resolverlo antes del miércoles 4. Las grabaciones se entregan el viernes 6, al terminar la última clase (decisión del 2-nov).
- **Devolución:** ninguna, salvo que ONIA no dé una clase, que se pasa a otra fecha (decisión del 2-nov). No va en el anuncio: la dicen el saludo de WhatsApp y la web. El certificado no está decidido y no se nombra.

### Texto principal

> ¿Usás la IA solo para hacerle preguntas? "Claude de 0 a 100" son 3 clases por Meet, en vivo y grabadas, para aprender a usar Claude con tus archivos y tus proyectos. Sin programar.
> 🎥 Si te sumás tarde, las clases que ya pasaron te quedan grabadas
> 💵 Un solo pago de Bs 50 por las 3 clases
> Taller independiente, no oficial de Anthropic.
> Tocá el botón y escribime: te paso las fechas, el temario y el QR.

Título: "Claude de 0 a 100 · en vivo y grabado".

La campaña sigue el 5-nov, después de la primera clase: por eso el texto no promete las 3 clases en vivo, y el saludo de WhatsApp dice qué clases quedan en vivo según el día.

### Videos

Los guiones son los del [PR #72](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/72) (`anuncio.md`), con estos cambios en el cierre.

- **Video 1, el contraste, 12 a 25 s:** "En 3 clases te enseño a usar Claude con tus archivos y tus proyectos. Sin programar." Sin "{y con la cuenta gratis}" ni la lista de trabajos armados.
- **Video 1, el contraste, 25 a 35 s:** "En vivo y grabadas. Un solo pago de Bs 50 por las tres clases. Tocá el botón y escribime." Texto en pantalla: "Bs 50 · 3 clases · Grabaciones incluidas".
- **Video 2, la demo, 20 a 35 s:** "Esto lo practicamos en vivo en Claude de 0 a 100: 3 clases, con grabaciones, por Bs 50 en total. Tocá el botón y escribime." Texto en pantalla: "Claude de 0 a 100 · Bs 50 las 3 clases".
- **Datos de la demo:** `ventas-octubre-ejemplo.csv` del PR #72 (panadería inventada), sin datos de clientes.
- **La demo:** el anuncio no promete resultados; el Video 2 muestra la demo real, grabada por Sergio Urcullo. Si la toma no sale con las cifras correctas (PR #72), no se usa.
- **"Con la cuenta gratis"** no va: no hay constancia en `main` de que el temario se haya probado con una cuenta gratis (`docs/lecciones.md`, "Datos y fuentes"). Si Sergio Urcullo lo prueba, se puede sumar después.

## Texto que llega al chat (coincide con el llamado a la acción)

El llamado del anuncio es "Tocá el botón y escribime", y el mensaje sugerido de la plantilla es **"Hola, quiero info del taller de Claude"**. La respuesta es el saludo del [PR #110 (textos de WhatsApp)](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/110), sección 1, que da las fechas 4, 5 y 6 (Boss No-Code las actualizó el 2-nov), el pago único y las grabaciones. Boss No-Code confirmó el 2-nov que ese saludo contesta a esa frase y, tras pedírselo, ahora dice "un solo pago de Bs 50 por las 3 clases y las grabaciones incluidas", igual que el anuncio. Falta su revisión de Codex y el sí de Sergio Urcullo con captura. Los reels usan "escribí TALLER" por WhatsApp; ese es otro canal y no se mezcla con el anuncio.

## Campaña (a cargar en pausa cuando haya página)

Sigue la estructura del plan (ayuda de Meta: [anuncios a WhatsApp](https://www.facebook.com/business/help/447934475640650)), con estos valores:

| Nivel | Valor |
|---|---|
| Campaña | "Claude 0 a 100 · V1 · WhatsApp". Interacción, destino WhatsApp |
| Conjunto | Toda Bolivia, 18 años o más, sin intereses, ubicaciones automáticas. Presupuesto diario US$10. Inicio martes 3-nov. Fin jueves 5-nov. Hora de inicio y zona horaria de la cuenta: **sin confirmar** (Bolivia es UTC−4) |
| Anuncios | "Video 1 · contraste" y "Video 2 · demo", con el texto de arriba |
| Estado | Borrador o en pausa. Publicar es activar (`ads_activate_entity`): solo con el sí de Sergio Urcullo con captura |

La plantilla de mensaje no la carga el conector (PR #72); la escribe Sergio Urcullo en el Administrador de anuncios antes de activar.

## Cuándo se pausa

Como el plan, acortado: el 4-nov se pausa el video con menos conversaciones por dólar. Seguir después de la fecha de fin, o subir el presupuesto, pide otro sí de Sergio Urcullo.

## Avisos

- La meta de 60 pagos en 3 días con US$30 no tiene dato propio que la sostenga: son unos Bs 363 de anuncio (a Bs 12,12 por dólar, cambio del plan del 29-oct) para llegar a Bs 3.000 brutos. Se mide con el costo por conversación del Administrador de anuncios, y lo orgánico (perfil, estados, grupos) tiene que poner el resto.
- Sergio Urcullo tiene 16 años según sus propios guiones de reels (rama `grokbot/workspace-20261101`). Si Meta pide mayoría de edad para la cuenta publicitaria o la página, está sin comprobar y puede frenar el 3-nov.
