No escribí ningún archivo. Me pediste modo solo lectura, pero el encargo es crear `sistema-guiones-taller.json` y `.md`, así que no podía hacer las dos cosas. Dame el visto bueno, o cambia el modo, y los escribo.

Lo que leí fue `calendario-3reels.md`, `salida-referentes.md`, `guion-muestra-clase1.md` y las transcripciones de referentes que ya tienes en `/workspace/marca/transcripciones/`. También hice búsquedas web.

## Qué encontré en la web
- **Iman Gadzhi, Liam Ottley, Academi365 y Benjamín Cordero:** la web no documenta cómo escriben sus guiones cortos. Los resultados fueron guías genéricas de "gancho, valor, CTA", como [faceless.so](https://faceless.so/blog/hook-value-cta-script-formula-for-shorts-1), que cita el gancho en 0–3 s y el CTA ligado al valor que acabas de dar.
- **Cómo lo resuelvo:** saco el patrón de las transcripciones reales, con sus URLs, y lo marco en el documento como observación mía, no como método declarado por ellos.
- **Qué copiar y qué no:**
  - **Liam Ottley, [ulJqlCPNGKI](https://www.youtube.com/watch?v=ulJqlCPNGKI):** abre con una comparación de dos personas, Dave y Marcus, con los mismos $20. Sirve para ganchos de contraste. Su "garantizo que es mejor que el 99%" no se copia.
  - **Enrique Rocha, [LS4N4WfWuGc](https://www.youtube.com/watch?v=LS4N4WfWuGc):** analogía de "jefe y empleado" más un CTA de "comenta X".
  - **Santiago Muñoz, [e12dyuugo-Y](https://www.youtube.com/watch?v=e12dyuugo-Y):** demo en un negocio real con CTA al perfil.
  - **BenCorde, [KxNADsod-D0](https://www.youtube.com/watch?v=KxNADsod-D0):** demo de pantalla de 59 s, con 554.939 vistas según tu archivo.
  - **Academi365, [GhkDgkktsXQ](https://www.youtube.com/watch?v=GhkDgkktsXQ):** tutorial de pantalla en contexto boliviano.
  - **Iman Gadzhi, [YZ6OyZKrRh8](https://www.youtube.com/watch?v=YZ6OyZKrRh8):** sirve solo como ejemplo de lo que no copiar, porque vende ingresos con IA.

## Tipos de contenido (campos fijos)
Cada tipo llevará `id, tipo, objetivo, formato, duracion_s, orientacion, estructura, plantilla_guion, ejemplo_referente, quien_graba, edicion, frecuencia, cta`.

| id | Tipo | Función |
|---|---|---|
| T01 | Fundador de 16 | Marca |
| T02 | Demo de pantalla (fórmula rol, contexto, tarea, formato, ejemplo) | Valor y venta suave |
| T03 | IA explicada / mito | Marca |
| T04 | Logística (fechas, Meet, grabadas, WhatsApp/QR) | Venta |
| T05 | Objeción (¿no sé programar?, ¿y si no puedo a las 19:00?) | Venta |
| T06 | Muestra de clase | Venta |
| T07 | Detrás de escena de clase | Marca y venta suave |
| T08 | Recordatorio del día de clase / cierre | Venta |
| T09 | Slideshow en Canva | Marca |
| T10 | Corte horizontal de YouTube | Marca |

## Reparto de los 3 slots (21 reels, 1 al 7 nov)
- **R1 07:30 = marca** (T01, T03, T09): tiene que enganchar y suele ir sin CTA o con uno suave.
- **R2 12:30 = venta directa** (T04, T05, T08), todos los días.
- **R3 20:30 = valor y proceso.** En los días de clase (3, 5 y 7) va detrás de escena (T07), porque la clase es a las 19:00 y no se graba de noche. El resto de los días va demo o T10.
- **Resultado:** 7 reels de venta directa, 3 de venta suave y 11 de marca, sin contar los cortes de YouTube.

Borrador de calendario:

| Día | R1 07:30 | R2 12:30 | R3 20:30 |
|---|---|---|---|
| Dom 1 | T03 | T04 | T05 |
| Lun 2 | T01 | T04, "mañana 19:00" | T02 |
| Mar 3 | T03 | T08, "hoy clase 1" | T07 |
| Mié 4 | T01 | T05, "grabadas" | T10 o T09 |
| Jue 5 | T03 | T08, "hoy clase 2" | T07 |
| Vie 6 | T01 | T08, "mañana última clase" | T02 |
| Sáb 7 | T03 | T08, "hoy última clase, 60 lugares" | T07 |

Los 21 guiones completos, en tuteo, irían en `calendario_1_7_nov`. El único reel que cita los 60 lugares es el del sáb 7 12:30: dirá "son 60 lugares" y nunca "quedan pocos". El resto de las reglas se cumple así:
- **Precio:** no aparece en ningún video, solo en el texto del anuncio.
- **Ingresos y testimonios:** no hay promesas de ingresos ni testimonios.
- **Cifras:** no uso cifras inventadas.

## Conflictos que encontré
1. **Voseo y precio en el calendario actual.** `calendario-3reels.md` usa voseo ("Escribime", "podés") y dice "por Bs 50" en el gancho del lunes 2 a las 12:30. Lo reescribo en tuteo y sin precio en el video.
2. **Horarios del sábado 7.** El calendario los tiene a las 09:00, 13:00 y 21:00. Uso 07:30, 12:30 y 20:30 como pediste.
3. **Domingo 1 nov.** No está en el calendario y su R1 de las 07:30 sale antes del lote de grabación de las 10:00. Ese reel tiene que ser de pantalla, preparado hoy.

## Preguntas que cambian los guiones
- ¿Quien se inscriba después del martes 3 recibe la grabación de la clase 1? Eso decide si puedo decir "si llegas tarde, igual entras".
- ¿Confirmas que "primera edición" y "hoy cierra" son ciertos? Sin eso, los reels de cierre quedan como recordatorio simple.

Si me confirmas el modo de escritura, creo los dos archivos y valido el JSON con `python -m json.tool`.

Fuentes: [faceless.so](https://faceless.so/blog/hook-value-cta-script-formula-for-shorts-1), más los videos de referentes enlazados arriba.
