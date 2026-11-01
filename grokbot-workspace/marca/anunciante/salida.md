No creé `resumen.md` ni el video. Esta sesión está en modo plan y la escritura está desactivada, igual que la regla de SOLO LECTURA que pusiste, y tampoco tengo terminal para correr ffmpeg ni Whisper. Ni siquiera pude guardar el plan en un archivo, así que te lo dejo aquí con lo que ya saqué de la skill.

## Lo que encontré en la skill (solo lectura)

Los precios son de la propia skill (`scripts/lib/costo.mjs`, `INSTALACION.md` y las 4 recetas). Están en USD y se midieron con APIMART en 2026-09. Todavía no los comparé con las páginas oficiales de APIMART.

| Plantilla | Qué hace | Qué necesita | Costo por anuncio |
|---|---|---|---|
| 1 · B-roll con voz | Clips a pantalla completa que cambian cada ~1,5 s, voz en off, subtítulos karaoke negro sobre blanco, título-gancho de 3 a 5 s, música, íconos de resalte con campanita, todo a 1,25x. Se arma con Remotion. | Node 18 o más, ffmpeg, `APIMART_API_KEY`, `npm install` (Remotion más Chrome, ~700 MB), 10-15 clips verticales, una pista de música y el guion en `ad-NN.json` | $0,09 el primero con clips descargados; ~$0,04 los siguientes; tanda de 7 ≈ $1. Si se generan los clips, +$0,07 cada uno |
| 2 · UGC | Persona hablando a cámara con lip-sync generado (veo3.1-fast), clips cosidos a 1,18x, subtítulos palabra por palabra, insertos de B-roll y 6 variantes. Solo ffmpeg. | APIMART, guion por escenas con una descripción física muy detallada del personaje, música obligatoria | ≈ $1,30 (6 escenas + 6 B-roll); ≈ $1,60 con reintentos; el ejemplo costó $0,95 |
| 3 · Claymation | Tomas de plastilina (una imagen gpt-image-2 por toma, animada con Veo), voz en off, planos de 3 s o menos, un golpe de sonido en cada corte, 1,15x | APIMART, guion con la descripción del personaje repetida idéntica en cada toma, música | ≈ $1,10 (7 tomas + 7 B-roll); ≈ $1,30 con 3 tomas de transición; +15 % de reintentos; el ejemplo costó $0,64 |
| 4 · Zack D Films | Animación 3D tipo Pixar en 4 capítulos (situación, producto, mecanismo, resultado), música fija del estilo, 1,12x | Lo mismo que la 3, con `"estilo": "zack"` | Anuncio base de 11 tomas + 11 B-roll ≈ $2,1 (medido: $2,41); set de 4 variantes ≈ $3,1 |

Precios por pieza:
- Clip veo3.1-fast (con lip-sync o transición entre dos imágenes): $0,14
- Clip veo3.1-lite: $0,07
- Imagen gpt-image-2: $0,0085
- Música Suno: $0,05
- Voz y transcripción: ~$0,01 por línea

**No se sabe:** el precio de ElevenLabs (es opcional y la skill no lo da) y los precios oficiales actuales de APIMART.

## Plan para la prueba gratis de la plantilla 1

1. **Revisar el entorno:** que estén ffmpeg y el `faster_whisper` que usa `/workspace/marca/transcribe.py`, y buscar un TTS gratis ya instalado (espeak-ng, piper, pico2wave, festival).
2. **Clips de prueba:** en `/workspace/marca/` no hay ningún video, solo mp3 de referentes, que son de terceros y no voy a usar. Haría 8 clips de 1080×1920 con los generadores de ffmpeg.
3. **Guion:** sobre el taller «Claude de 0 a 100» de `guion-muestra-clase1.md`, sin precio. Generar la voz y sacar los tiempos de cada palabra con Whisper local.
4. **Montaje:** imitar la plantilla 1 con ffmpeg en vez de Remotion, porque Remotion obliga a hacer `npm install` dentro de la skill. Iría así:
   - cortes cada 1,4 a 1,9 s;
   - subtítulos karaoke en grupos de 3 palabras;
   - gancho en caja blanca durante 4 s;
   - voz ×1,4, música ×0,22, el efecto `intro-rev` y la campanita de la skill;
   - todo a 1,25x y a 30 fps constantes.
5. **Revisar el video:** medidas con ffprobe y algunos cuadros sueltos. Después escribir `resumen.md` con las 3 líneas arriba, lo que salió y lo que falta.

Lo que ya sé que va a faltar respecto a la versión real: los íconos de resalte (salen de gpt-image-2, que se paga), Remotion, clips reales y una voz de calidad.

## Para que lo pueda hacer

- **Quitar el modo plan y el SOLO LECTURA** para la carpeta `/workspace/marca/anunciante/`. Solo crearía archivos nuevos ahí; no tocaría la skill.
- **El TTS:** si no hay ninguno instalado, ¿me dejas instalar `piper-tts` en un entorno temporal en `/tmp`? Es gratis y funciona sin internet, aunque baja la voz una vez de HuggingFace. Si no, uso espeak.
- **Los precios oficiales:** ¿quieres que los compare con las páginas de APIMART (solo leerlas, sin gastar)?
