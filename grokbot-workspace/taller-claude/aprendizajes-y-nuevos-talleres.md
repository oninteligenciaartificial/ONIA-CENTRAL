# Informe OnIA: seguimiento de "Claude de 0 a 100", demanda de IA en Bolivia/LatAm e ideas de próximos talleres

*Preparado el 31/10/2026 para Sergio Urcullo (OnIA). Respeté el modo solo lectura: no creé ni modifiqué ningún archivo y todo el informe va en este mensaje.*

**Cómo leer las cifras:**
- Cada dato lleva su link.
- Lo que no tiene fuente va marcado como **[estimación]**.
- Para pasar dólares a bolivianos usé **Bs 11,73 por USD**, que es el tipo de cambio oficial del BCB para el 10–12/10/2026 según [Correo del Sur](https://correodelsur.com/economia/20261010/el-dolar-oficial-baja-a-bs-11-73-para-este-fin-de-semana.html). Desde junio de 2026 el tipo de cambio es flexible, así que esas conversiones son aproximadas.

---

## 1) Seguimiento de "Claude de 0 a 100" (plantilla, todavía sin datos)

**Datos del taller:** 3, 5 y 7/11/2026 · Google Meet · 60 cupos · Bs 50 fijo por las 3 clases (decisión de Sergio, 1/11/2026) · meta de Bs 3.000.

### 1.1 Tablero principal

| Métrica | Fórmula / cómo se mide | Herramienta sugerida | Meta | Real |
|---|---|---|---|---|
| Inscritos | Filas del formulario de inscripción (sin duplicados por WhatsApp o correo) | Google Forms → Sheets | 60 | — |
| Pagos verificados | Inscritos con comprobante revisado contra el extracto o la app del banco (fecha, monto y nombre) | Columna "Pago verificado (Sí/No)" + captura del comprobante | 43–60 (ver 1.2) | — |
| Conversión inscrito → pago | Pagos verificados ÷ inscritos | Sheets | ≥ 80 % **[estimación]** | — |
| Ingresos | Pagos verificados × Bs 50 | Sheets | Bs 3.000 | — |
| Avance contra la meta | Ingresos ÷ 3.000 | Sheets | 100 % | — |
| Ocupación | Pagos verificados ÷ 60 | Sheets | 100 % | — |
| Asistencia clase 1, 2 y 3 | Pagados que estuvieron conectados ≥ 30 min ÷ pagos verificados | Informe de asistencia de Meet, o conteo manual a los 10 y a los 40 min | ≥ 70 % **[estimación]** | — |
| Retención | Asistentes de la clase 3 ÷ asistentes de la clase 1 | Sheets | ≥ 80 % **[estimación]** | — |
| Satisfacción | Las 3 preguntas de 1.3 | Google Forms al cierre de la clase 3 | ver 1.3 | — |
| Origen del alumno | "¿Cómo te enteraste?" (Facebook, TikTok, WhatsApp, referido) | Pregunta en el formulario de inscripción | — | — |

### 1.2 Cuántos pagos necesitas para llegar a Bs 3.000

- Con el precio fijo de Bs 50 hacen falta **60 pagos**, o sea el cupo lleno (60 × 50 = 3.000).
- No hay un segundo escalón de precio que compense: la meta depende solo de llenar los 60 cupos.

Al ingreso bruto todavía tienes que restarle comisiones de cobro y publicidad. No encontré fuente de esos costos, así que **[estimación]**: anótalos en una columna aparte de "costos".

### 1.3 Encuesta de satisfacción (3 preguntas)

1. **Recomendación (NPS):** "Del 0 al 10, ¿qué tanto recomendarías este taller a un amigo?"
   - NPS = % de 9–10 menos % de 0–6.
2. **Resultado concreto:** "¿Usaste Claude en una tarea real durante el taller o después? ¿Cuál?" (Sí/No + texto)
   - Mide el % que responde Sí. Esta es la mejor prueba de que la promesa "de 0 a 100" se cumplió.
3. **Próximo taller:** "¿Cuál de estos talleres tomarías?" (opción múltiple con las ideas de la sección 3, más "Otro")
   - Te sirve para validar demanda con datos propios antes de lanzar.

Manda el formulario en los últimos 5 minutos de la clase 3, con el link en el chat de Meet. Así la tasa de respuesta suele ser más alta que si lo mandas después **[estimación]**.

---

## 2) Demanda: qué quieren aprender de IA las personas y los negocios

### 2.1 Bolivia

- **Mercado digital:** a fines de 2025 había **9,0 millones de usuarios de internet (71,3 %)**.
  - Facebook llega a 7,55 millones (92,8 % de los adultos).
  - TikTok registró 9,43 millones de adultos según su alcance publicitario, una cifra que el mismo informe califica de anómala.
  - Fuente: [DataReportal Digital 2026 Bolivia](https://datareportal.com/reports/digital-2026-bolivia).
  - Ese informe **no trae datos de WhatsApp ni de uso de ChatGPT**.
- **Uso todavía incipiente:** según [Bolivia en la era de la IA (FES / Internet Bolivia, sep. 2025)](https://internetbolivia.org/wp-content/uploads/2026/03/Bolivia-en-la-era-de-la-IA.pdf):
  - Hay un "uso incipiente de las IA en Bolivia, predominando aún el entusiasmo y mayor curiosidad … que el uso aplicado".
  - Muchas empresas usan chatbots de atención al cliente hechos sobre modelos de terceros.
  - En el Índice Latinoamericano de IA 2024, Bolivia sacó 26/100.
- **Temor:** 7 de cada 10 personas encuestadas creen que la IA va a hacer perder empleos ([Correo del Sur / Ipsos Ciesmori, ene. 2025](https://correodelsur.com/sociedad/20250115/encuesta-sobre-perdida-de-empleos-en-bolivia-el-71-teme-impacto-de-la-inteligencia-artificial.html)). Ojo: el titular dice 71 %, pero solo verifiqué la redacción "siete de cada diez". Este temor es un buen gancho para talleres de "aprendé antes de que te reemplacen".
- **Estudiantes:** en un piloto en El Alto (2024), **60 % de los estudiantes de quinto de secundaria usaba IA para las tareas** ([Correo del Sur](https://correodelsur.com/sociedad/20250126/cual-es-el-estado-de-la-ia-en-bolivia.html)). No informa el tamaño de la muestra.
- **Señal de demanda de emprendedores y competencia gratuita:** Fundación Emprender Futuro, con apoyo del BCP, da talleres **gratuitos** por Zoom.
  - Ejemplo: "Marketing con IA para emprendedores" el 29/09/2026.
  - Reporta **32.000 emprendedores capacitados en más de 65 talleres**.
  - Su edición "Precios Inteligentes" juntó **más de 700 participantes**.
  - Fuente: [Ecosistema Startup](https://ecosistemastartup.com/taller-24e-ensena-marketing-con-ia-a-emprendedores-en-bolivia/).
  - **Implicancia:** un taller genérico de "marketing con IA" compite contra algo gratis. Te conviene diferenciarte con resultados prácticos y nichos concretos.
- **Google Trends Bolivia:** no logré sacar datos por país; no aparecen en las fuentes que encontré. **Pendiente:** entrá a trends.google.com, filtrá por Bolivia y los últimos 12 meses, y compará "ChatGPT", "Gemini", "Claude", "curso inteligencia artificial" y "WhatsApp Business".
  - A nivel global, **Gemini fue la búsqueda en tendencia número 1 de 2025**, y las búsquedas se movieron hacia "cómo usar la IA para el trabajo y el estudio" ([RouteNote sobre el Year in Search 2025](https://routenote.com/blog/googles-year-in-search-reveals-how-the-world-worked-in-2025/)).

### 2.2 Latinoamérica

- **Las inscripciones a cursos de IA generativa en LatAm crecieron 425 % interanual**, la suba más alta de todas las regiones. Colombia creció +1.017 % y México +356 % ([Coursera Global Skills Report 2025](https://blog.coursera.org/presenting-courseras-2025-global-skills-report-the-skills-trends-shaping-the-future-of-education-and-employment), [Mexico Business News](https://mexicobusiness.news/talent/news/mexico-leads-latin-america-generative-ai-courses-coursera?tag=talent)).
- **En la región prima el aprendizaje de fundamentos sobre los cursos avanzados** ([Mexico Business News](https://mexicobusiness.news/talent/news/mexico-leads-latin-america-generative-ai-courses-coursera?tag=talent)). Eso respalda el formato "de 0 a 100".
- **Adopción en empresas:** según CEPAL, solo **9,1 % de las empresas de LatAm usaba IA en 2025** ([Diario El Mundo SV](https://diario.elmundo.sv/economia/solo-el-5-9-de-las-empresas-salvadorenas-ha-adoptado-inteligencia-artificial)). Hay mucho espacio para la alfabetización de pymes.
- **Productividad de oficina:** Udemy reporta **11 millones de inscripciones en IA generativa** y una suba de **3.400 % en contenido de Microsoft Copilot** ([TechIntelPro, Udemy 2026 Trends](https://techintelpro.com/HR/AI/udemy-2026-trends-report-ai-fluency-adaptive-skills)).
- **WhatsApp como canal de ventas:**
  - Meta lanzó **Business AI** dentro de WhatsApp Business en febrero de 2026 en Argentina y otros 16 países de LatAm. El artículo no dice si Bolivia está incluida.
  - En Argentina, 8 de cada 10 personas prefieren WhatsApp para hablar con empresas.
  - Fuente: [El Cronista](https://www.cronista.com/infotechnology/it-business/asi-funciona-la-novedad-de-whatsapp-que-usan-las-pymes-para-vender-mas-sin-sumar-personal/).
  - Más de 200 millones de pequeños negocios usan WhatsApp Business en el mundo ([Forbes México](https://forbes.com.mx/?p=1339657)).

### 2.3 Qué se ofrece en las plataformas de cursos

| Plataforma | Qué encontré | Precio | Fuente |
|---|---|---|---|
| Platzi | Suscripción con curso de "ChatBot con WhatsApp API" que integra ChatGPT (28 clases, 5 h) | Expert anual **Bs 1.790**; Basic Bs 329/mes | [Precios Platzi](https://platzi.com/precios/), [curso WhatsApp API](https://platzi.com/cursos/whatsapp-api/opiniones/) |
| Domestika | "Using ChatGPT for Work" con etiqueta *Best seller* | Cursos de USD 10–40 (≈ Bs 117–469), según una reseña de un competidor | [Domestika (espejo)](https://api-domestika.x-solutions.workers.dev/en/courses/5455-using-chatgpt-for-work), [Coderhouse](https://www.coderhouse.com/coderlibrary/que-tal-es-domestika-review-completa-para-creativos-en-espanol) |
| Udemy | "N8N Masterclass" con 8.744 alumnos (automatizaciones con WhatsApp, Calendar y Sheets) | No encontré el precio vigente (cambia por promociones) | [Udemy n8n basics](https://www.udemy.com/course/n8n-basics/) |
| Hotmart | "IA para vender por WhatsApp" (microcurso para emprendedores) y "Domina la IA y Automatización 2026" | Sin precio visible; el primero hoy da 404 | [Hotmart 1](https://hotmart.com/es/marketplace/productos/ia-para-vender-por-whatsapp/M105276387C), [Hotmart 2](https://hotmart.com/es/marketplace/productos/domina-la-ia-y-automatizacion-para-impulsar-tu-exito-en-2026/Q105848384J) |
| Crehana | No encontré su ranking de IA ni un precio oficial | Premium USD 99–199/año, según un tercero sin verificar | [Subger](https://subger.com/es/service/crehana) |

**Lectura:** los temas que se repiten son ChatGPT/IA para el trabajo, chatbots y ventas por WhatsApp, automatización sin código (n8n) y marketing con IA. Coinciden con lo que pide el emprendedor boliviano.

---

## 3) Ideas de talleres nuevos

**Comparables de precio en Bolivia** (se repiten en la tabla):
- UPSA "IA para empresas nivel básico": **Bs 1.300 por 21 horas**, presencial u online ([CENACE-UPSA](https://cenace-demo.upsa.edu.bo/img/curso/164/29-01-2026-ia-para-empresas-nivel-basico-1.pdf)).
- Taller 24E: **gratis** ([Ecosistema Startup](https://ecosistemastartup.com/taller-24e-ensena-marketing-con-ia-a-emprendedores-en-bolivia/)).
- Academia Innova, Canva para profesores: **Bs 80** ([Academia Innova](https://academiainnova.online/ofertas)).
- ChatGPT Go en Bolivia: **Bs 34,50/mes** (fuente de terceros: [OpenTheRank](https://opentherank.com/ai-pricing/chatgpt/bolivia/)).

| # | Taller | Público | Problema | Promesa | Precio sugerido y comparables | Dificultad |
|---|---|---|---|---|---|---|
| 1 | **Tu negocio contesta solo por WhatsApp** | Emprendedores y pymes que venden por WhatsApp (tiendas, salones, comida, servicios) | Pierden ventas por no responder rápido y repiten las mismas respuestas todo el día | "Sales con respuestas automáticas, catálogo, etiquetas y mensajes armados con IA funcionando en tu WhatsApp Business" | **Precio por definir.** Comparables: kit "IA para WhatsApp Business" USD 12,99 de oferta / 37 normal (≈ Bs 152 / 434) ([G-Talent](https://www.g-talent.net/products/ia-para-whatsapp-business-kit-profesional)); curso de Platzi dentro de una suscripción de Bs 1.790 ([Platzi](https://platzi.com/precios/)) | Media. La versión con API o n8n es alta; mantén el taller en la app de WhatsApp Business. Antes verifica si Business AI está activo en Bolivia ([El Cronista](https://www.cronista.com/infotechnology/it-business/asi-funciona-la-novedad-de-whatsapp-que-usan-las-pymes-para-vender-mas-sin-sumar-personal/)) |
| 2 | **Claude nivel 2: tu asistente de negocio** (Proyectos, instrucciones, documentos propios) | Egresados de "Claude de 0 a 100" | Ya saben chatear, pero no tienen un sistema que puedan repetir | "Armas 3 asistentes listos: ventas, contenido y administración" | **Precio por definir**, posible descuento para egresados. Comparable: UPSA Bs 1.300 / 21 h ≈ Bs 62 por hora ([UPSA](https://cenace-demo.upsa.edu.bo/img/curso/164/29-01-2026-ia-para-empresas-nivel-basico-1.pdf)) | Baja: reusa tu material y tu audiencia |
| 3 | **Campaña de fin de año con IA en 2 horas** | Emprendedores con redes sociales | Llega diciembre sin plan de publicaciones ni promociones | "Sales con tu calendario de diciembre, 20 textos y tus promos listas" | **Precio por definir.** El competidor Taller 24E es gratis ([Ecosistema Startup](https://ecosistemastartup.com/taller-24e-ensena-marketing-con-ia-a-emprendedores-en-bolivia/)), así que diferénciate con práctica guiada y un nicho estacional | Baja |
| 4 | **Precios, costos e inventario con IA + Google Sheets** | Comerciantes y pequeños productores | No saben cuánto ganan por producto, y los precios cambian con el dólar | "Tu planilla de costos y precios armada con IA, que se ajusta sola si cambia el tipo de cambio" | **Precio por definir.** Demanda probada: "Precios Inteligentes" (24E) juntó más de 700 personas ([Ecosistema Startup](https://ecosistemastartup.com/taller-24e-ensena-marketing-con-ia-a-emprendedores-en-bolivia/)). Contexto: cambio flexible desde 06/2026 ([Correo del Sur](https://correodelsur.com/economia/20261010/el-dolar-oficial-baja-a-bs-11-73-para-este-fin-de-semana.html)) | Media |
| 5 | **IA para tu trabajo de oficina** (correos, informes, Excel, actas) | Empleados públicos y privados, profesionales | Pierden horas en documentos y tienen miedo de quedar atrás (7 de cada 10 temen perder empleos: [Correo del Sur](https://correodelsur.com/sociedad/20250115/encuesta-sobre-perdida-de-empleos-en-bolivia-el-71-teme-impacto-de-la-inteligencia-artificial.html)) | "Haces en 15 minutos el informe que te llevaba 2 horas" | **Precio por definir.** Comparables: UPSA Bs 1.300 ([UPSA](https://cenace-demo.upsa.edu.bo/img/curso/164/29-01-2026-ia-para-empresas-nivel-basico-1.pdf)); Domestika "Using ChatGPT for Work" ≈ Bs 117–469 ([Coderhouse](https://www.coderhouse.com/coderlibrary/que-tal-es-domestika-review-completa-para-creativos-en-espanol)) | Baja |
| 6 | **IA para docentes: planifica y crea material** | Profesores de colegio y universidad | Mucha carga administrativa, y los alumnos ya usan IA (60 % en el piloto de El Alto: [Correo del Sur](https://correodelsur.com/sociedad/20250126/cual-es-el-estado-de-la-ia-en-bolivia.html)) | "Planificación, evaluaciones y rúbricas en una tarde, más cómo detectar el mal uso" | **Precio por definir.** Comparable: Canva para profesores, Bs 80 ([Academia Innova](https://academiainnova.online/ofertas)) | Baja |
| 7 | **Automatiza sin programar con n8n + IA** | Emprendedores más técnicos y freelancers | Tareas repetitivas entre formularios, planillas y WhatsApp | "Tu primera automatización funcionando: formulario → planilla → aviso" | **Bs 150–250 [estimación].** Comparables: N8N Masterclass con 8.744 alumnos en Udemy ([Udemy](https://www.udemy.com/course/n8n-basics/)); curso de IA de Coderhouse ≈ USD 220 (≈ Bs 2.580) ([Coderhouse](https://www.coderhouse.com/en/mejores-cursos/mejores-cursos-de-inteligencia-artificial-de)) | Alta: requiere cuentas, APIs y soporte |

---

## 4) Ranking: los 3 talleres que recomiendo para noviembre–diciembre 2026

1. **Tu negocio contesta solo por WhatsApp**
   - Es el problema más concreto y más fácil de vender: el negocio lo ve en su propio celular.
   - Hay evidencia de que WhatsApp es el canal preferido para hablar con empresas en LatAm ([El Cronista](https://www.cronista.com/infotechnology/it-business/asi-funciona-la-novedad-de-whatsapp-que-usan-las-pymes-para-vender-mas-sin-sumar-personal/)) y de que es un tema que la gente busca en Platzi y Hotmart.
   - Diciembre trae más consultas por las compras de fin de año **[estimación]**.
   - No compite de frente con los talleres gratis de marketing.
   - Fecha sugerida: **fines de noviembre**.
2. **Claude nivel 2**
   - Es la venta más barata, porque ya tienes hasta 60 egresados del primer taller y la pregunta 3 de la encuesta te dice cuántos lo quieren.
   - Hazlo **1–2 semanas después del 7/11**, mientras el entusiasmo está fresco.
3. **Campaña de fin de año con IA**
   - Es estacional y urgente, y fácil de dar con lo que ya sabes.
   - El riesgo es la competencia gratuita del Taller 24E. Por eso conviene a precio bajo (por definir) y muy práctico, a **inicios de diciembre**.
   - **Alternativa** si la encuesta lo pide: "Precios, costos e inventario", que tiene demanda probada de más de 700 personas.

No recomiendo para estas fechas:
- **Docentes:** diciembre coincide con el cierre del año escolar **[estimación]**; es mejor en enero–febrero.
- **n8n:** demasiado soporte técnico para un formato low ticket.

---

## 5) Fuentes

- DataReportal, Digital 2026 Bolivia: https://datareportal.com/reports/digital-2026-bolivia
- FES / Internet Bolivia, "Bolivia en la era de la IA" (sep. 2025): https://internetbolivia.org/wp-content/uploads/2026/03/Bolivia-en-la-era-de-la-IA.pdf
- Correo del Sur, encuesta sobre temor a perder empleos (ene. 2025): https://correodelsur.com/sociedad/20250115/encuesta-sobre-perdida-de-empleos-en-bolivia-el-71-teme-impacto-de-la-inteligencia-artificial.html
- Correo del Sur, estado de la IA en Bolivia: https://correodelsur.com/sociedad/20250126/cual-es-el-estado-de-la-ia-en-bolivia.html
- Correo del Sur, dólar oficial Bs 11,73 (oct. 2026): https://correodelsur.com/economia/20261010/el-dolar-oficial-baja-a-bs-11-73-para-este-fin-de-semana.html
- Ecosistema Startup, Taller 24E (sep. 2026): https://ecosistemastartup.com/taller-24e-ensena-marketing-con-ia-a-emprendedores-en-bolivia/
- CENACE-UPSA, IA para empresas nivel básico: https://cenace-demo.upsa.edu.bo/img/curso/164/29-01-2026-ia-para-empresas-nivel-basico-1.pdf
- Academia Innova: https://academiainnova.online/ofertas
- OpenTheRank, precio de ChatGPT en Bolivia: https://opentherank.com/ai-pricing/chatgpt/bolivia/
- Platzi, precios: https://platzi.com/precios/ · Curso WhatsApp API: https://platzi.com/cursos/whatsapp-api/opiniones/
- Domestika, "Using ChatGPT for Work" (espejo): https://api-domestika.x-solutions.workers.dev/en/courses/5455-using-chatgpt-for-work
- Coderhouse, reseña de Domestika: https://www.coderhouse.com/coderlibrary/que-tal-es-domestika-review-completa-para-creativos-en-espanol
- Coderhouse, cursos de IA: https://www.coderhouse.com/en/mejores-cursos/mejores-cursos-de-inteligencia-artificial-de
- Udemy, n8n: https://www.udemy.com/course/n8n-basics/
- Hotmart: https://hotmart.com/es/marketplace/productos/ia-para-vender-por-whatsapp/M105276387C · https://hotmart.com/es/marketplace/productos/domina-la-ia-y-automatizacion-para-impulsar-tu-exito-en-2026/Q105848384J
- Subger, Crehana: https://subger.com/es/service/crehana
- G-Talent, kit IA para WhatsApp Business: https://www.g-talent.net/products/ia-para-whatsapp-business-kit-profesional
- El Cronista, Business AI en WhatsApp (may. 2026): https://www.cronista.com/infotechnology/it-business/asi-funciona-la-novedad-de-whatsapp-que-usan-las-pymes-para-vender-mas-sin-sumar-personal/
- Forbes México, WhatsApp Business: https://forbes.com.mx/?p=1339657
- Coursera, Global Skills Report 2025: https://blog.coursera.org/presenting-courseras-2025-global-skills-report-the-skills-trends-shaping-the-future-of-education-and-employment
- Mexico Business News, IA generativa en LatAm: https://mexicobusiness.news/talent/news/mexico-leads-latin-america-generative-ai-courses-coursera?tag=talent
- Diario El Mundo SV (dato de CEPAL, 9,1 %): https://diario.elmundo.sv/economia/solo-el-5-9-de-las-empresas-salvadorenas-ha-adoptado-inteligencia-artificial
- TechIntelPro, Udemy 2026 Trends: https://techintelpro.com/HR/AI/udemy-2026-trends-report-ai-fluency-adaptive-skills
- RouteNote, Google Year in Search 2025: https://routenote.com/blog/googles-year-in-search-reveals-how-the-world-worked-in-2025/

**Datos que no encontré:**
- Google Trends filtrado por Bolivia.
- El porcentaje de bolivianos que usan WhatsApp o ChatGPT.
- Rankings oficiales de lo más vendido en Crehana, Hotmart y Domestika.
- Precios vigentes en Udemy y Hotmart.

Si quieres, el próximo paso es revisar Google Trends a mano y cruzarlo con los resultados de la encuesta del 7/11.
