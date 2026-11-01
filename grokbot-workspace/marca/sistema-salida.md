No escribí `/workspace/marca/sistema-guiones.md`. Tu mensaje pide "SOLO LECTURA: no modifiques ningún archivo", el modo plan bloquea las ediciones y la herramienta Write está desactivada en esta sesión. Te dejo el documento completo aquí abajo. Si quieres que lo guarde en esa ruta, dame permiso de escritura y lo copio tal cual.

Leí `aprendizajes-referentes.md` y `calendario-3reels.md`. `analisis-guiones.md` no existe. Busqué en la web ejemplos de cada tipo de contenido. El calendario está en voseo ("Escribime", "Mirá"), así que habría que pasar esos ganchos a tuteo.

---

# Sistema de guiones — Sergio Urcullo (OnIA)

**Resumen en 3 líneas**
1. Hay cinco tipos de contenido (noticia del día, lifestyle, educativo, la startup, tendencias). Cada uno tiene objetivo, formato, ejemplo real, armado paso a paso, plantilla y frecuencia.
2. Sergio graba y aprueba con captura. El equipo y la IA arman guion, cortes, subtítulos y 9:16. Nada se publica sin su sí.
3. No hay promesas de ingresos ni cifras inventadas. Lo que no pude verificar dice **"sin dato verificado"**. Las duraciones y frecuencias son **propuestas mías**, no cifras de referentes.

## Reglas comunes
- **Gancho en los primeros 3 s.** Las guías que encontré son blogs de herramientas y sus cifras no coinciden, así que no uso ninguna ([ejemplo](https://tlinky.com/3-second-hook/)). Lo medible es tu curva de retención en YouTube Studio.
- **Subtítulos quemados.** Esas mismas guías repiten que mucha gente mira sin sonido.
- **Vertical 9:16, 1080×1920.** Es el estándar según guías de terceros ([argil](https://argil.ai/blog/instagram-reel-size-e350f)). El largo máximo de un Reel aparece como 90 s en una guía y 3 min en otra: **sin dato verificado**. Confírmalo con una subida de prueba. Mis duraciones quedan muy por debajo de ambos.
- **CTA:** "Escríbeme por WhatsApp" (link en bio), pago con QR y precio claro. Sin escasez falsa y sin ingresos como gancho.
- **Privacidad:** sin compañeros ni profes en cámara sin permiso, sin uniforme ni dirección visibles. Los lives solo con un adulto presente (ver `aprendizajes-referentes.md` §4).
- **Fuentes:** varios ejemplos son resúmenes de terceros, porque no pude abrir el video original. Lo marco en cada caso.

---

## 1) Noticia de IA del día

- **Objetivo:** que te vean como quien explica la IA en español desde Bolivia. Busca constancia y confianza, no venta.
- **Formato:** vertical 9:16, **30–45 s (propuesta)**.
- **Estructura por segundos:**
  - 0–3: titular en una frase ("Hoy [empresa] sacó [cosa]").
  - 3–15: qué pasó, con 1 dato verificado y su fuente.
  - 15–30: qué significa para un estudiante o negocio de Bolivia.
  - 30–40: tu opinión en 1 frase y un CTA suave ("¿Lo probamos mañana? Comenta").
- **Ejemplo real:** *The AI Daily Brief* (Nathaniel Whittemore) es un show diario de noticias de IA. Alterna ediciones de titulares y monólogos ([Apple Podcasts](https://podcasts.apple.com/podcast/id1680633614), [stationlm](https://stationlm.com/analysis/064123a1-a83c-4815-969f-4b8c5890ee4c)). No es corto ni de un joven, pero sirve de modelo de **regularidad diaria**. Dot CSV divulga IA en español en formatos breves ([creatordb](https://creatordb.app/creatorstats/dotcsv/)). No encontré un video de noticias suyo concreto: **sin dato verificado**.
- **Cómo se arma:**
  1. (Equipo/IA, 07:00) busca 3 noticias en fuentes primarias, como el blog oficial de la empresa, y propone 1.
  2. (IA) escribe el guion con la plantilla y deja el enlace de la fuente.
  3. (Sergio) verifica la fuente, lo ajusta a su voz y graba de una toma al mediodía.
  4. (Equipo) auto-editor quita silencios, ffmpeg + whisper subtitulan y se reencuadra a 9:16.
  5. (Sergio) aprueba con captura y se programa.
- **Plantilla:** `[TITULAR_1_FRASE]` · `[EMPRESA/HERRAMIENTA]` · `[QUÉ_PASÓ]` · `[DATO_VERIFICADO + URL_FUENTE]` · `[QUÉ_SIGNIFICA_PARA_BOLIVIA]` · `[OPINIÓN_1_FRASE]` · `[CTA]`
- **Frecuencia (propuesta):** 3 por semana (lun, mié, vie), solo si hay una noticia real. No hace falta forzar los 7 días.

## 2) Lifestyle, semi-guionado (lo arma Sergio)

- **Objetivo:** humanizar la marca. Es un chico de 16 que estudia, hace deporte y dirige una startup.
- **Formato:** vertical 9:16, **20–40 s (propuesta)**, con clips de 2–5 s cosidos y voz en off o texto.
- **Estructura:**
  - 0–3: promesa del día ("Un martes de founder de 16").
  - 3–25: 4–6 clips (hora + acción: colegio, gym, código, cena).
  - 25–35: una lección o dato curioso.
  - Cierre: pregunta a la audiencia.
- **Ejemplo real:** Garry Tan publica "un día en la vida" como presidente de YC ([rosetta.to](https://rosetta.to/u/garrytan/day-in-the-life-of-y-combinator-president-ceo-garry-tan-during-the-first-week-of)). Un análisis de terceros dice que Iman Gadzhi mezcla estilo de vida, contenido útil y detrás de escena ([ark.beehiiv](https://ark.beehiiv.com/p/iman-gadzhi-broke-youtube-made-millions)). Ese mismo análisis critica sus ganchos que apelan a inseguridades. **Eso no se copia.**
- **Cómo se arma:**
  1. (Sergio) graba clips sueltos de 3–5 s durante el día, sin gente ajena.
  2. (Sergio) los sube a una carpeta y anota 1 línea por clip en la plantilla.
  3. (Equipo/IA) ordena, corta, pone texto y subtítulos, y elige música sin copyright.
  4. (Sergio) aprueba con captura.
- **Plantilla:** `[DÍA/TÍTULO]` · `[CLIP_1..4 hora+acción]` · `[LECCIÓN_O_DATO]` · `[PREGUNTA_FINAL]` · `[ENCUADRES_PROHIBIDOS_CHEQUEADOS: sí/no]`
- **Frecuencia (propuesta):** 2 por semana (por ejemplo mar y dom), como en el calendario.

## 3) Educativo

- **Objetivo:** enseñar una cosa de IA o Claude que se entienda en menos de un minuto. Es el contenido que más lleva al taller y a la guía gratis.
- **Formato:** reel vertical de **30–60 s (propuesta)**, con pantalla o cara a cámara. El YouTube largo (calendario: 15 min, horizontal 16:9) se corta en reels.
- **Estructura:**
  - 0–3: problema o error común ("El error al escribirle a la IA").
  - 3–10: la idea en una frase.
  - 10–40: demo en pantalla con 1 ejemplo real.
  - 40–50: resumen en 1 línea.
  - 50–60: CTA ("Comenta CLAUDE y te mando la guía gratis").
- **Ejemplo real:** un resumen describe un video de Riley Brown donde Claude Code arma un "Tinder para películas" en 2 prompts ([recapio](https://recapio.com/digest/claude-code-builds-tinder-for-movies-in-2-prompts-by-riley-brown)). Es un resumen de terceros, no el video. Garry Tan enseña con una charla de 7 min, "3 tips para aplicar a YC" ([rosetta.to](https://rosetta.to/u/garrytan/applying-to-y-combinator-3-tips-from-a-former-yc-partner)). En español: BenCorde con cursos y demos gratis ([bencorde.com](https://bencorde.com/sobre-mi/)) y Erik Taveras con n8n paso a paso ([YouTube](https://www.youtube.com/@ErikTaverasT)).
- **Cómo se arma:**
  1. (Equipo/IA) propone el tema desde las preguntas del taller y los comentarios.
  2. (IA) escribe el guion con el prompt exacto que se va a mostrar.
  3. (Sergio) prueba el prompt **antes** de grabar. Si falla, lo muestra igual y lo corrige, por honestidad.
  4. (Sergio) graba pantalla (OBS o celular) y la voz en una toma.
  5. (Equipo) recorta, hace zoom a lo importante y subtitula. Del largo salen cortes de 30–60 s.
  6. (Sergio) aprueba con captura.
- **Plantilla:** `[ERROR_O_PROBLEMA]` · `[IDEA_EN_1_FRASE]` · `[PROMPT_EXACTO]` · `[RESULTADO_REAL]` · `[RESUMEN_1_LÍNEA]` · `[CTA_GUÍA_O_TALLER]` · `[HERRAMIENTA_Y_VERSIÓN]`
- **Frecuencia (propuesta):** 5–6 por semana, es el pilar principal. Más 1 YouTube largo por semana del que salen varios cortes.

## 4) La startup (construir en público)

- **Objetivo:** mostrar el proceso real de OnIA, errores incluidos, para generar confianza. Muestra métricas de **aprendizaje**, no de dinero. Un menor no debe exponer ingresos propios ni de su familia.
- **Formato:** vertical 9:16, **30–45 s (propuesta)**. Una vez al mes, 1 resumen horizontal.
- **Estructura:**
  - 0–3: resultado o problema de la semana.
  - 3–20: qué hicieron, mostrando pantalla (agentes, repo, panel).
  - 20–35: qué salió mal y qué cambia.
  - 35–45: qué sigue y una pregunta.
- **Ejemplo real:** Marc Lou construye en público y hace videos de lanzamiento con humor ([indiehackers](https://www.indiehackers.com/post/133k-m-selling-nextjs-boiler-plates-9ef56e28d3)). Pieter Levels comparte el proceso y cifras que él mismo reporta ([ppc.land](https://ppc.land/how-one-photo-ai-app-generates-132k-monthly-after-70-failed-startups/)). **No copies la parte de ingresos.** Entre jóvenes, un fundador de 16 años cuenta cómo construye WizeTale en una incubadora ([peerlist](https://peerlist.io/dadrout/articles/im-16-and-building-an-ai-startup-in-an-incubator-here-are-my)). Un boletín describe a fundadores jóvenes que presentan su idea en videos cortos ([thedigitalnative](https://thedigitalnative.substack.com/p/2-building-in-public-and-tiktok-for)). Ambos son textos de terceros. Sus videos originales: **sin dato verificado**.
- **Cómo se arma:**
  1. (Sergio) el viernes anota 3 cosas de la semana: lo hecho, un error y lo siguiente.
  2. (IA) las convierte en el guion de 1 reel.
  3. (Sergio) graba cara a cámara y 10 s de pantalla. Revisa que no aparezcan claves ni datos de clientes.
  4. (Equipo) edita y (Sergio) aprueba con captura.
- **Plantilla:** `[LOGRO_O_PROBLEMA_SEMANA]` · `[QUÉ_HICIMOS + PANTALLA]` · `[ERROR_Y_APRENDIZAJE]` · `[PRÓXIMO_PASO]` · `[PREGUNTA_A_LA_AUDIENCIA]` · `[REVISIÓN_SIN_CLAVES_NI_DATOS: sí/no]`
- **Frecuencia (propuesta):** 2–3 por semana.

## 5) Tendencias del momento

- **Objetivo:** aparecer en lo que ya se busca, pero solo si encaja con IA, aprendizaje o emprendimiento. No te subas a tendencias que no son tuyas.
- **Formato:** vertical 9:16, **15–30 s (propuesta)**, con el formato y el audio de la tendencia.
- **Estructura:**
  - 0–3: el gancho de la tendencia aplicado a IA.
  - 3–20: tu versión, con el mismo ritmo.
  - 20–30: remate o chiste y un CTA mínimo.
- **Ejemplo real:** no pude verificar un video de tendencia de ningún referente: **sin dato verificado**. Lo verificable es la herramienta. TikTok Creative Center muestra hashtags, sonidos, creadores y videos en tendencia, filtrados por región, industria y periodo ([TikTok Ads Help](https://ads.tiktok.com/help/article/how-to-use-trends)). Como referencia de estilo, Riley Brown hace material específico para IG y TikTok ([yespress](https://yespress.io/riley-brown)).
- **Cómo se arma:**
  1. (Equipo/IA) revisa Creative Center, filtrando por Bolivia, 1–2 veces por semana y propone 2 candidatas.
  2. (Sergio) elige 1 solo si le encaja y es apropiada para su edad y su audiencia.
  3. (IA) adapta el guion y verifica que el sonido sea de uso libre. Según una guía de terceros, el filtro "Approved for business use" sirve para eso ([aivideocut](https://www.aivideocut.com/blog/tiktok-creative-center-complete-guide)).
  4. (Sergio) graba rápido, el mismo día. (Equipo) edita y (Sergio) aprueba con captura.
- **Plantilla:** `[TENDENCIA + LINK]` · `[FORMATO_DE_LA_TENDENCIA]` · `[TU_ÁNGULO_IA]` · `[SONIDO_Y_PERMISO_DE_USO]` · `[GANCHO_3S]` · `[REMATE]` · `[FECHA_LÍMITE_VIGENCIA]`
- **Frecuencia (propuesta):** 1–2 por semana. Si ninguna tendencia encaja, 0.

---

## Reparto semanal sugerido (propuesta)
Encaja con 3 reels por día. Si Sergio elige la opción D1-B del documento de referentes (2 por día), baja los educativos primero.

| Tipo | Por semana |
|---|---|
| Noticia del día | 3 |
| Lifestyle | 2 |
| Educativo | 5–6 |
| Startup | 2–3 |
| Tendencia | 1–2 |

## Tabla estructurada (para cargar en un panel)

| Tipo | Formato | Duración (propuesta) | Campos de la plantilla |
|---|---|---|---|
| 1. Noticia de IA del día | Vertical 9:16, cara a cámara | 30–45 s | titular_1_frase, empresa_herramienta, que_paso, dato_verificado, url_fuente, que_significa_para_bolivia, opinion_1_frase, cta |
| 2. Lifestyle semi-guionado | Vertical 9:16, clips cosidos + voz o texto | 20–40 s | dia_titulo, clip_1, clip_2, clip_3, clip_4, leccion_o_dato, pregunta_final, encuadres_prohibidos_chequeados |
| 3. Educativo | Vertical 9:16 (pantalla o cámara); largo 16:9 | 30–60 s (largo: 10–15 min) | error_o_problema, idea_en_1_frase, prompt_exacto, resultado_real, resumen_1_linea, cta_guia_o_taller, herramienta_y_version |
| 4. La startup | Vertical 9:16; resumen mensual 16:9 | 30–45 s | logro_o_problema_semana, que_hicimos_pantalla, error_y_aprendizaje, proximo_paso, pregunta_audiencia, revision_sin_claves_ni_datos |
| 5. Tendencias | Vertical 9:16, formato de la tendencia | 15–30 s | tendencia_link, formato_tendencia, angulo_ia, sonido_y_permiso_uso, gancho_3s, remate, fecha_limite_vigencia |

## Fuentes
- https://tlinky.com/3-second-hook/
- https://argil.ai/blog/instagram-reel-size-e350f
- https://podcasts.apple.com/podcast/id1680633614
- https://stationlm.com/analysis/064123a1-a83c-4815-969f-4b8c5890ee4c
- https://creatordb.app/creatorstats/dotcsv/
- https://rosetta.to/u/garrytan/day-in-the-life-of-y-combinator-president-ceo-garry-tan-during-the-first-week-of
- https://rosetta.to/u/garrytan/applying-to-y-combinator-3-tips-from-a-former-yc-partner
- https://ark.beehiiv.com/p/iman-gadzhi-broke-youtube-made-millions
- https://recapio.com/digest/claude-code-builds-tinder-for-movies-in-2-prompts-by-riley-brown
- https://bencorde.com/sobre-mi/
- https://www.youtube.com/@ErikTaverasT
- https://yespress.io/riley-brown
- https://www.indiehackers.com/post/133k-m-selling-nextjs-boiler-plates-9ef56e28d3
- https://ppc.land/how-one-photo-ai-app-generates-132k-monthly-after-70-failed-startups/
- https://peerlist.io/dadrout/articles/im-16-and-building-an-ai-startup-in-an-incubator-here-are-my
- https://thedigitalnative.substack.com/p/2-building-in-public-and-tiktok-for
- https://ads.tiktok.com/help/article/how-to-use-trends
- https://www.aivideocut.com/blog/tiktok-creative-center-complete-guide
