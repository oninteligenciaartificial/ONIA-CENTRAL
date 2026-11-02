# Funnel y FOMO de los 4 referentes, mirado el 2-nov-2026

Qué es esto: lo que se ve hoy en las páginas de venta públicas de Enrique Rocha, Erik Taveras, Santiago Muñoz e Iman Gadzhi, y qué cambiar en la página `/taller` de Sergio Urcullo (PR 1 de `oninteligenciaartificial/sergiourcullo`). Todo lo de abajo se miró el 2-nov-2026, solo lectura: no se completó ningún formulario, no se dejó correo ni teléfono, no se compró nada y no se inició sesión. Lo que no se vio va como "sin confirmar".

Cómo se miró: navegador integrado de la app, texto completo de cada página con `get_page_text` y, en varias, una consulta al código de la página (el contador de Iman). Las capturas del navegador fallaron seguido por tiempo de espera (ver "Qué no se pudo ver"), así que **solo hubo capturas de**: portada de Luma de Enrique (V14), su calendario, el aviso emergente de lista de espera de Erik y la parte de arriba de la página de Iman, con el contador y la barra fija. El resto es texto.

Los datos marcados "29-oct" salen de las fichas de este mismo directorio: [Enrique Rocha](enrique-rocha.md), [Erik Taveras](erik-taveras.md), [Santiago Muñoz](santiago-munoz.md) e [Iman Gadzhi](iman-gadzhi.md), cada una con sus fuentes. Lo del 2-nov se vio en las URLs citadas en cada hallazgo.

## 1. Tabla comparativa

| | Enrique Rocha | Erik Taveras | Santiago Muñoz | Iman Gadzhi |
|---|---|---|---|---|
| Página vista | luma.com/sgkl6gxl (0 a 100 V14) | workshops.eriktaveras.com/w/sistema-de-edicion-17-oct/ | horizontesia.com, skool.com/horizontes-ia-9992/about, forjabots.com/membresia, masterclassia.crd.co | event.monetise.com |
| Estado hoy | "Inscripción cerrada"; el calendario dice "Sin eventos próximos" | "YA SE DICTÓ" (17-oct); la portada dice "no hay fecha abierta" | Skool abierto; la masterclass es vieja | Abierta: reto gratis del 7 al 15-nov |
| Qué vende | Taller pago de 3 h (US$97) | Taller pago de 2 h, 25 cupos | Membresía de US$64 por mes | Reto gratis; la venta viene después |
| Cuenta regresiva | No | Antes tenía (29-oct); hoy cerrada | Sí, en la masterclass, pero rota (marca "581 D") | Sí, hasta el 7-nov, 1 PM hora del Este (consistente con el evento; que el registro cierre ahí, sin confirmar) |
| ¿Verdadera? | n/a | Fecha fija (visto el 29-oct) | Sin confirmar (marca una fecha lejana que no cuadra) | Consistente: sigue bajando tras recargar y cuadra con la fecha del evento; cierre real del registro, sin confirmar |
| Cupos | Luma: cupo y "Agotado"; antes 60 (29-oct) | 25, y se liberan si no pagás | "Limitado a 50" (masterclass vieja); "786 / 800, faltan 14" (Forja) | Ninguno; "cerramos el registro antes" |
| Precio que sube | No | No | Skool: "Precio sube a $79 30 de Octubre". Hoy (2-nov) sigue en $64 | No |
| Prueba social | "20 asistieron" y nombres (Luma) | Ninguna en la página | Cifras, muro de testimonios, 4,8 en 37 reseñas | Cifras en dólares ($155M+), un caso con edad y monto |
| Garantía | Política de reembolso de Luma | Ninguna; sin devolución | 30 días 1 a 1 (Forja) | 7 días en la oferta posterior (visto el 29-oct) |
| CTA | 1 botón "Reservar mi lugar" al final; la caja de registro arriba | "Reserva tu cupo" (cuando hay fecha) y lista de espera | "Unirme por $64/mes", repetido | "SAVE MY FREE SPOT", 7 botones contados más la barra fija |
| Cobro | Stripe dentro de Luma | PayPal | Skool (Stripe) | Gratis; formulario con nombre, correo y teléfono |

## 2. Hallazgo por referente

### Enrique Rocha
Fuentes (2-nov-2026): https://luma.com/sgkl6gxl, https://luma.com/soyenriquerocha, https://www.tododeia.com/tienda/claude-de-cero-a-cien. Capturas: parte de arriba de la página V14 y del calendario.

1. **Orden.** Portada con su cara y el título; prueba social de Luma ("20 asistieron" y tres nombres, abajo en la ficha); caja de entradas, hoy "Inscripción cerrada"; etiqueta "Edición 2026"; titular "Claude desde 0 A 100 V14"; "3 horas + En vivo conmigo"; problema ("ChatGPT hace lo mismo… Y ahí te quedaste"); agitación (tutoriales en inglés y desactualizados); lo que vas a aprender (10 puntos); "Esto NO es" (5 puntos); "Para quién es" (4 perfiles); "Lo que incluye tu lugar"; precio con ancla de comparación ("una salida a cenar"); botón final; anfitrión; política de reembolso.
2. **FOMO.** Es sobrio: el número de edición (V14) y que cada edición es en vivo con fecha. Hoy no hay cuenta regresiva ni cupo visible, solo el estado "cerrada". El calendario no tiene eventos próximos, así que **hoy no hay venta abierta para copiar el cierre**, solo la estructura. Lo único numérico es "20 asistieron", que parece el contador automático de Luma; que salga de inscriptos reales, sin confirmar. En esta página no vimos testimonios escritos ni preguntas frecuentes.
3. **CTA.** 1 botón de texto largo al final: "RESERVAR MI LUGAR — $97 USD". Arriba, la caja de Luma ("Obtener entradas", hoy "Inscripción cerrada"). Cita corta: "Y ahí te quedaste."
4. **Precio y garantía.** Precio visible, con ancla emocional (comparación con una cena y con "el último curso de Hotmart"). La garantía no está en la página: está en la política de reembolso de Luma (7 días antes: 100%, entre 6 días y 48 horas: 50%, antes de eso, nada; datos del 29-oct, no se reabrieron hoy).
5. **ONIA puede tomar:** el esqueleto problema-agitación-temario-"esto NO es"-para quién-qué incluye-precio; "esto NO es" para desarmar la desconfianza de quien ya se quemó con cursos; la comparación de precio con algo cotidiano. **No copiar:** "Certificado para LinkedIn" y "oferta exclusiva" si ONIA no los tiene; "por qué lo prefieren los que saben" (afirmación sin prueba); "Grabación de por vida" solo si se cumple (ONIA sí lo dice).

### Erik Taveras
Fuentes (2-nov-2026): https://workshops.eriktaveras.com/ y https://workshops.eriktaveras.com/w/sistema-de-edicion-17-oct/. Capturas: el aviso emergente de lista de espera que se abre al entrar en la página vieja (lo cerré, no lo completé). El resto, por texto.

1. **Orden** (hoy, con la fecha ya pasada): marcas "NIVEL INICIAL / YA SE DICTÓ"; titular y promesa ("Graba tú. La IA edita con tu estilo. Tú publicas."); fecha, "2 H", "GRUPO DE 25", Zoom; "Con qué sales el mismo día"; "Qué es esto"; "Antes del taller" (guía de instalación por correo); plan de las dos horas, 8 bloques; "Qué necesitas" con casillas "0 DE 9" y "¿Esto es para ti?"; "Quién te lo enseña". El bloque de compra y el precio no están hoy: cambiaron por aviso emergente de lista de espera (nombre y correo).
2. **FOMO.** Cupo fijo (25) y fecha fija. La cuenta regresiva y el apartado de cupo por unos minutos eran de la versión abierta (ficha del 29-oct, no reconfirmado hoy). Hoy la urgencia es el cartel "YA SE DICTÓ" más "Suelo repetir los que se llenan": se usa el pasado para prometer escasez futura.
3. **CTA.** Con fecha abierta, "Reserva tu cupo" (ficha del 29-oct). Hoy, "Avisarme a la lista" (aviso emergente) y "Ver mis enlaces y avisarme" en la portada. No lo contamos más allá de eso.
4. **Precio y garantía.** Precio no visible hoy. Sin garantía: el cupo no se devuelve; se puede cambiar de fecha una vez o ceder (términos, ficha del 29-oct). Su filtro, el autodiagnóstico, puede hacer sentir que el taller "es para vos"; que baje las devoluciones, sin confirmar.
5. **ONIA puede tomar:** "Con qué sales el mismo día" (resultado concreto) como primera sección después del encabezado; "Antes del taller" (qué traer y qué hacer antes, en una línea); lista de requisitos marcables; poner quién enseña. Los requisitos le sirven a ONIA: avisar que hace falta cuenta de Claude. **No copiar:** nada que ONIA no pueda cumplir (cupo de 25 si no se controla), ni el diseño de cartel.

### Santiago Muñoz
Fuentes (2-nov-2026): https://www.horizontesia.com/, https://www.skool.com/horizontes-ia-9992/about, https://forjabots.com/membresia, https://masterclassia.crd.co/. Capturas: ninguna (solo texto).

1. **Orden** (horizontesia.com): titular con 4 números (posts, lecciones, miembros, plantillas); muro de testimonios; producto estrella (Forja, "bot de WhatsApp en 90 minutos — véndelo en $2,000"); oferta única de US$64 por mes; curso de Claude Code; qué incluye; temario de 15 módulos; "Tu camino" en 3 pasos; "Datos reales" con contador y cinta "LIVE"; testimonios; precio; preguntas frecuentes; llamado final. Todos los botones van a Skool.
2. **FOMO.**
   - **Precio que sube con fecha vencida.** Skool dice "Precio sube a $79 30 de Octubre" y hoy, 2-nov, sigue mostrando $64. La fecha ya pasó y el precio no subió. Para un visitante nuevo, eso desmiente la urgencia.
   - **Barra de miembros que no se movió.** Forja muestra "786 / 800 miembros, faltan 14". La ficha del 29-oct tenía exactamente la misma cifra, 786. En 4 días no se movió; se ve escrita a mano (inferencia mía, sin confirmar).
   - **Contador roto.** En masterclassia.crd.co, el contador marca "581 D 19 H 08 M 24 S" hacia "30 de Marzo": un número de días que no cuadra con ninguna fecha cercana. Parece una página vieja con el contador sin actualizar; no se verificó por qué marca eso.
   - **Cinta "LIVE"** con eventos como "@martinezlab se unió". Está en la misma página que dice "datos reales, se actualizan cada 72 horas": si la cinta "LIVE" es en vivo no se pudo comprobar; que sus eventos se repitan es una sospecha, no un hallazgo.
   - Lo que sí parece real: reseñas de Skool con "sigue siendo miembro de pago después de N meses" (4,8 en 37 reseñas) y la garantía de 30 días 1 a 1.
3. **CTA.** "Unirme por $64/mes", "Unirme a la comunidad", "Quiero el curso", "UNIRME $64/mes" (Skool). Se repite 5 o más veces en horizontesia.com; todos al mismo destino.
4. **Precio y garantía.** Un solo precio, "cancela cuando quieras", "sin upsells ni extras". Garantía de 30 días trabajando 1 a 1 si el primer bot no está corriendo. "La cuenta honesta" (tabla de comparación de costos con rangos de mercado) vende sin gritar.
5. **ONIA puede tomar:** un solo checkout (el WhatsApp) en todos los botones; preguntas frecuentes cortas (¿hace falta saber programar?, ¿cuánto tiempo?, ¿puedo faltar?); "La cuenta honesta" como idea: una comparación real de qué recibís por Bs 50. **No copiar:** contadores y barras de cupos escritos a mano; fechas de "sube de precio" que no se cumplen; cifras como "+$7,000 USD" de valor; promesas de ingresos ("véndelo en $2,000").

### Iman Gadzhi
Fuentes (2-nov-2026): https://event.monetise.com/ (se abre en `?country=US`). Capturas: parte de arriba (portada con foto, titular, etiqueta de fechas, barra fija con botón) y una posición más abajo.

1. **Orden:** barra superior fija con texto de apoyo y botón; encabezado con etiqueta "LIVE VIRTUAL EVENT: NOV 7TH - NOV 15TH"; titular ("Build A $373/Day AI Side Hustle In Just 5 Days"); botón y contador "REGISTRATION CLOSES IN"; dos "No" (sin mostrar la cara, sin experiencia); cinta de autoridad (Higgsfield: US$5.400 M); temario en 5 episodios con fecha y hora; prueba en escalera de dólares ($8,9 M, $15 M, $31 M, $41 M, $155 M+); caja de detalles (qué, cuándo, dónde, "replays dentro de 24 horas"); beneficios; biografía como historia; "If This Works, Why Is It Free?"; resumen, botón y pie.
2. **FOMO.**
   - **Cuenta regresiva consistente con el evento.** Dice "5 DAYS 1 HRS 51 MINS" el 2-nov a las 16:08 UTC (12:08 hora de Bolivia). Sumando eso da el 7-nov a las 18:00 UTC, es decir 1 PM hora del Este, que es la hora del primer episodio. Después de recargar la página siguió bajando (51:05, luego 50:58) y no se reinició. Se repite 4 veces en la página, mismo valor. Que el registro cierre ahí, sin confirmar.
   - **Fecha límite** (cierre de registro sin confirmar) más "Replays available within 24 hours" (alivia el miedo a perderse).
   - **Prueba social con cifras enormes** ($155M+ "tracked earnings") que no se pueden verificar desde la página: son datos propios. Un caso con edad y monto ("19 year old… $111K in 45 days").
   - "Its Now or NEVER" y otras frases de urgencia dura.
3. **CTA.** "SAVE MY FREE SPOT": 7 botones contados con el DOM (la ficha del 29-oct decía 8; diferencia sin explicar) más un botón en la barra fija. Abre un formulario con nombre, correo y teléfono (no lo abrí). Cita corta: "Claim Your Spot Below".
4. **Precio y garantía.** Es gratis; el precio y la garantía están en la oferta posterior (ficha del 29-oct: kit de US$9 con garantía de 7 días; no se reabrió hoy). Responde a "¿por qué es gratis?" con su comisión en Whop: la objeción más dura va dicha de frente.
5. **ONIA puede tomar:** una cuenta regresiva **atada a la fecha real**; poner el horario del primer episodio en el temario, con fecha y hora; el aviso de que habrá repetición; responder de frente "¿por qué cuesta tan poco?". **No copiar:** promesas de plata ("$373 por día"), números de ganancias, "Now or NEVER", pedir teléfono antes de pagar, la autoridad prestada (Higgsfield) y la historia de vida adaptada a ingresos.

## 3. Lo que se repite entre los 4

- Todos ponen **fecha y hora fijas** arriba, no en el pie. Dos de cuatro dejan la fecha pasada visible como prueba de que "se llena".
- Los que mejor suenan (Enrique, Erik) **no tienen contador**: venden resultado, requisitos y "esto NO es".
- La urgencia que se ve inventada o vencida (Santiago: $79 el 30-oct, "faltan 14", contador "581 D") es la que **más daña la confianza** de un visitante frío.
- La única cuenta regresiva consistente con el evento que vimos (Iman) está **atada a una fecha real**; que cierre el registro ahí no se comprobó.
- Ninguno promete el resultado en la primera línea con plata, salvo Iman y Santiago ("véndelo en $2,000"); eso no se puede copiar sin prueba.

## 4. La página actual de Sergio (PR 1): qué falta y qué sobra

Fuente: [PR 1 de `oninteligenciaartificial/sergiourcullo`](https://github.com/oninteligenciaartificial/sergiourcullo/pull/1), versión leída el 2-nov-2026 con `gh pr diff`, sin revisión de código mía, , archivo `taller/index.html` (leído el 2-nov-2026; no estaba mergeado). Orden actual: encabezado con eyebrow "Taller en vivo · 4, 5 y 6 de noviembre de 2026", titular, bajada, 1 botón WhatsApp, foto; 3 cifras (3 clases, 19:00, Bs 50); caja "Antes de pagar" (cuenta de Claude, no oficial de Anthropic, sin devolución); temario previsto en 3 tarjetas con fecha; sección de inscripción con la lista de lo que incluye y 1 botón WhatsApp. Total: **2 botones iguales**.

**Qué ya está bien (no tocar):** fecha y hora arriba; precio visible; "Antes de pagar" honesta; temario por fecha; botón con el mensaje ya escrito; no promete ingresos; aclara que no es oficial de Anthropic.

**Qué falta** (según lo visto en los referentes):
- Una cuenta regresiva real hasta el miércoles 4-nov 19:00 (hora de Bolivia), como la de Iman, con la hora mostrada también en texto. No hay ninguna.
- "Con qué salís" (resultado concreto) en el primer tercio de la página (Erik).
- "Esto NO es" (Enrique): hoy hay un "No es oficial", pero no está armado como lista de objeciones.
- "Para quién es" (Enrique, Erik): hoy no existe.
- Qué traer antes de la primera clase, con pasos (Erik): hoy dice "te conviene llegar con tu cuenta de Claude", sin más.
- Preguntas frecuentes cortas (Santiago): ¿tengo que saber programar?, ¿y si no puedo en vivo?, ¿cómo pago?
- Quién da el taller: una bio corta de Sergio (Erik la tiene). Hoy hay solo la foto y la firma.
- Un tercer botón fijo en la parte de arriba del celular (barra con el botón) como en Iman, y uno más después de "Para quién es".
- Una línea sobre cuándo vence la inscripción, con la fecha real.

**Qué sobra o se puede achicar:**
- El texto del segundo botón, igual que el primero: conviene uno más concreto ("Pagar Bs 50 por WhatsApp").
- El "Temario previsto" tan largo: la bajada ya promete bastante. Conviene dejar 1 línea por clase y el resultado.
- La frase "Te quedan para siempre" en dos lugares distintos: dejarla una sola vez.
- Nada para quitar por falso: la página no tiene cupos, testimonios ni contadores inventados. Eso hay que mantenerlo.

## 5. Qué cambiar en la página `/taller`

### 5.1 Secciones, en este orden
1. **Barra fija** con "Miércoles 4, jueves 5 y viernes 6 · 19:00 · Bs 50" y el botón de WhatsApp.
2. **Encabezado:** eyebrow con las fechas, titular, bajada de 2 líneas, **cuenta regresiva real** al miércoles 4-nov a las 19:00 (hora de Bolivia, UTC-4), botón.
3. **Con qué salís** (3 resultados concretos, uno por clase), sin promesas de plata ni de ahorro.
4. **Cómo son las 3 clases:** fecha, hora y 1 línea por clase. Es el temario hoy, más corto.
5. **Esto NO es** (3 o 4 puntos): no es un curso oficial de Anthropic; no es para programadores; no es una charla de venta; no hay devolución salvo que ONIA no dé la clase.
6. **Para quién es** (3 perfiles) y **qué traer**: cuenta de Claude creada (y qué plan hace falta, ver 5.4), una compu o celular y las 3 noches libres.
7. **Qué incluye por Bs 50:** 3 clases por Meet, grabaciones el viernes 6 y para siempre, pago por QR.
8. **Quién lo da:** 3 o 4 líneas de Sergio, con la foto. Sin cifras que no se puedan mostrar.
9. **Preguntas frecuentes** (4): ¿y si no puedo en vivo? (grabación el viernes 6); ¿cómo pago? (QR por WhatsApp); ¿hay devolución? (no, salvo que ONIA no dé la clase, y se pasa a otra fecha); ¿es oficial de Anthropic? (no).
10. **Cierre:** misma fecha de inscripción, un botón.

### 5.2 Textos de los llamados a la acción (todos al mismo WhatsApp con el mensaje ya escrito)
- Barra fija y encabezado: **"Reservar mi lugar por WhatsApp"**.
- Después de "Para quién es": **"Quiero entrar a las 3 clases"**.
- Cierre: **"Pagar Bs 50 y entrar"** (aclarar abajo: "Te paso el QR por el chat; cuando confirmo tu pago, te mando el enlace de Meet").
- Debajo de cada botón, una línea chica: "El chat se abre con el mensaje ya escrito."
- Cantidad: 4 apariciones (barra fija, encabezado, medio, cierre). Hoy son 2.

### 5.3 Urgencia honesta que ONIA sí puede decir
- "Empieza el miércoles 4 a las 19:00 (Bolivia)", con la cuenta regresiva a ese momento. La fecha es real (decisión del 2-nov, [PR #136 (taller al 4, 5 y 6-nov)](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/136)).
- "Las clases son el 4, 5 y 6; la inscripción por WhatsApp se cierra el miércoles 4 a las 19:00." **Solo si Sergio confirma que cierra a esa hora** (ver decisión B abajo).
- "Bs 50 por las 3 clases" como oferta de la campaña. Si Sergio quiere decir que es precio de lanzamiento, tiene que ser cierto: **no se escribe "después sube" a menos que Sergio decida subirlo y lo cumpla**.
- "Las grabaciones llegan el viernes 6 y quedan para siempre": es un hecho de la oferta (PR 136).

### 5.4 Lo que NO se pone
- Cupos ("quedan 12 lugares") ni barras de "inscriptos" inventadas. Si hay un límite real de Meet o de atención, se dice cuál es y se cumple.
- Contadores que se reinician, "precio que sube" sin decisión de Sergio, bonos por tiempo.
- Testimonios o "N personas ya se inscribieron" hasta que haya reales y con permiso de quien los dio.
- Promesas de ingresos, ahorros o horas ahorradas; "aprendé a ganar plata con IA".
- "Certificado", "oferta exclusiva", "valor de US$X": ONIA no los tiene dicho.
- Presentarlo como oficial de Anthropic o como un curso de Anthropic: la página ya dice que no lo es y debe seguir diciéndolo.
- "Con la cuenta gratis": no se probó (PR 1 lo dice). Dice "traé tu cuenta de Claude" y no promete qué plan alcanza hasta probarlo. Enrique y Erik piden plan pago; no se sabe si hace falta en el temario de ONIA, **sin confirmar**.

### 5.5 Qué decide Sergio
- **A. El nombre "Claude de 0 a 100".** Es casi igual al de Enrique Rocha ("Claude desde 0 A 100") y usa la marca Claude en un producto pago. Sigue "a confirmar con un abogado". Opción sin la marca en el título: "De 0 a 100 con IA: taller de 3 clases". Recomendada: dejar el nombre a confirmar y no crecerlo en anuncios hasta que haya respuesta (lección de "Anuncios y venta").
- **B. Hasta cuándo se inscribe la gente.** Recomendada: hasta el miércoles 4 a las 19:00, con la cuenta regresiva a esa hora. Alternativa: hasta el viernes 6 (se entra con grabación). Sin decisión no se escribe "se cierra".
- **C. Si hay un límite de personas.** Sin decisión no se escribe ninguno.
- **D. Si Bs 50 es "precio de lanzamiento" y se sube la próxima vez.** Si sí, se dice "precio de esta edición" (verdadero) sin prometer el precio futuro.
- **E. Si se muestra bio y foto con datos de Sergio** y qué datos.
- **F. Qué plan de Claude hace falta** (gratis, Pro): probarlo antes de escribirlo.

### 5.6 Del lado de lo técnico (para Boss Code, no para Sergio)
La cuenta regresiva se hace con una fecha fija escrita en el código (4-nov-2026 19:00, UTC-4), y al pasar la fecha, el texto cambia a "El taller ya empezó: escribinos por la grabación". No se reinicia. Si el JavaScript falla, la página igual dice la fecha en texto. Después del 6-nov hay que bajar la página (ya está dicho en el PR).

## 6. Qué no se pudo ver
- Capturas: el navegador integrado dio tiempo agotado en la mayoría de los intentos. Solo hubo capturas de la portada de Enrique (Luma), su calendario, el aviso emergente de Erik y la parte de arriba de Iman. De Santiago no hubo ninguna. Texto: sí, completo, de las 7 páginas.
- Las páginas de Enrique y Erik estaban cerradas (sin fecha abierta). No se vio hoy el bloque de compra, el precio de Erik ni el cierre de Luma abierto; esas partes vienen de las fichas del 29-oct y van marcadas así.
- No se vio la oferta posterior de Iman (kit de US$9) ni su formulario: no se abrió para no dejar datos. No se vio qué pasa al "anotarse" en ningún referente.
- "1965 personas ya tienen esta guía" (ficha de Enrique del 29-oct) no apareció en el texto de la ficha del libro hoy; sin confirmar si se quitó o carga después.
- La cinta "LIVE" de Santiago no se pudo comprobar como real o decorativa.
- No se midió si el contador de Santiago o el "786 / 800" cambia entre días distintos; solo se comparó con el valor del 29-oct.
- Las reseñas, los números de miembros y las cifras de ganancias son datos de los propios referentes, sin verificar por afuera.
