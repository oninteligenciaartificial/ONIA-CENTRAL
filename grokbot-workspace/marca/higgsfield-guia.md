# Guía Higgsfield: videos con IA para la marca de Sergio (OnIA)

_Revisada el 31 oct 2026. Herramienta: conector Higgsfield (MCP `user-Higgsfield`). Solo hice lecturas; no generé nada ni gasté créditos._

## ⚠️ Regla de oro
**Ninguna generación sin el "sí" de Sergio.** Antes de pedírselo, le mandás: el modelo, la duración, la resolución, el costo estimado en créditos y el saldo. Si querés usar Higgsfield, avisá siempre que lo usaste (igual que con Claude o Codex).

## Saldo actual
**432.93 créditos, plan Pro.** Leído con la herramienta `balance` el 31 oct 2026.
- Los créditos del plan **no se acumulan** de un mes al otro: vencen cuando el plan se recarga.
- Ahora no hay generaciones "unlim" (gratis de prueba) disponibles: `unlim.available=false`.

## De dónde salen los costos (importante)
- El conector **no da los precios por modelo.** `models_explore` devuelve parámetros, pero no créditos. Y `marketing_studio_v2_costs` solo se ve dentro del widget.
- Los costos de abajo vienen de **fuentes externas** (toolcolumn.com y aliteq.com, que los leyeron del botón Generate de Higgsfield el 26 y el 29 oct 2026) y del blog oficial de higgsfield.ai (ai-human-motion-2026).
- **El precio que manda es el que muestra el botón Generate.** Cambia según el modelo, la duración, la resolución, si lleva audio y las promociones.
- "?" quiere decir que no encontré el costo. No lo inventé.

## Modelos de video (lista real de `models_explore action=list type=video`)

| ID | Tipo | Costo aprox. (créditos) | Duración / resolución | Uso para nosotros |
|---|---|---|---|---|
| `kling3_0` | texto/imagen → video, multi-toma, audio | 5 s: 7.5 sin sonido, 10 con sonido (720p); 12.5 (1080p); 30 (4K) | 16:9, 9:16, 1:1 | **B-roll barato**, reel |
| `kling3_0_turbo` | texto/imagen → video, rápido | 5 s 720p: 7.5 | 720p/1080p | B-roll rápido |
| `kling4_0` | texto, keyframes, referencias, edición | 8 s 720p: 22 (blog oficial). Ahora tiene un descuento temporal: 2.5 por 5 s | 720p/1080p, 9:16 | B-roll y reel de calidad |
| `kling_o3_image_reference` / `kling_o3_flf` | video con hasta 7 referencias / primer y último frame | ? | 9:16 | B-roll con look coherente |
| `kling_video_edit` | editar un video con texto | ? | — | Retocar tomas grabadas |
| `kling3_0_motion_control` | transferir movimiento | 5 s 1080p: ~12 | — | Efectos |
| `seedance_2_0_mini` | barato, con referencias y audio | 5 s: 5 | 480p/720p | Pruebas baratas |
| `seedance_2_0` | referencias e identidad consistente | 5 s: 22.5–23 (720p); 60 (1080p); 110 (4K) | hasta 4K | Avatar/personaje consistente |
| `seedance_2_5` | texto, omni-referencia, editar, extender | 5 s: 35 (720p); 80 (1080p) | 480p–1080p | Reel premium |
| `seedance1_5` | movimiento confiable | 5 s 720p: ~3 | 480p–1080p | Pruebas |
| `wan3_0` / `wan3_0_prime` | texto o frames → video, audio nativo | 5 s: 8.75 / 15 (720p); 17.5 / 30 (1080p) | 480p–1080p | B-roll con audio |
| `wan2_6`, `wan2_7` | estilizado / personaje consistente | ? | 720p/1080p | Creativo |
| `veo3_1` | ultra realista, audio | 4 s: 40; 8 s: 80 | 16:9, 9:16 | Anuncio "hero" (caro) |
| `veo3_1_lite` | rápido y económico | Veo 3.1 Fast, 4 s: 16 | 9:16 | Lotes de clips |
| `grok_video_v15` / `grok_video_v15_lite` / `grok_video` | texto/imagen (y audio) → video | v1.5, 5 s: 22.5; Lite: ? | hasta 1080p | General |
| `minimax_hailuo` | física y emoción facial | 6 s 768p: 6 | 512–1080 | Expresiones |
| `minimax_h3` / `minimax_h3_max` | multimodal | ? | 2K / 480–768p | — |
| `gemini_omni_flash_1_1` | texto, keyframes, edición, audio nativo | ? | 360p–4K, 16:9 y 9:16 | General |
| `flux_3_video` | texto/imagen → video con audio | ? | 720p–4K | General |
| `flux_3_video_edit` | editar un video con texto (máx. 15 s) | **1 crédito por segundo** (dato del propio conector) | — | Retocar tomas |
| `happy_horse_video` | texto/imagen → video | ? | 720p/1080p | — |
| `cinematic_studio_3_0` / `_3_5` / `_video_4_0` / `cinematic_studio_video(_v2)` | cine, control de cámara y género | 4.0, 8 s 720p: 56 (blog oficial); el resto: ? | 3.0: 4–15 s, hasta 4K | Intros "épicas" |
| `intone` | **talking head**: una foto + una voz de 4–30 s | ? | 720p/1080p, 9:16 | **Avatar de Sergio** |
| `sync_so` | lipsync (Sync Lipsync 3) | ? | — | Doblar la boca a un audio |
| `dubbing`, `voice_change` | doblaje / cambio de voz | ? | — | Versiones en otro idioma |
| `marketing_studio_video` / `marketing_studio_v2_video` | anuncios y UGC de producto | ? (lo muestra el widget) | 12–15 s, hasta 1080p, 9:16 | **Anuncios** |
| `marketing_studio_v2_reference2video` | recrear un video de referencia con tu personaje | ? | — | Anuncios |
| `ad_multiplier` / `ad_multiplier_v2` | variantes de un anuncio de 4–30 s (hook/CTA) | ? | hasta 1080p | Testeo de anuncios |
| `reframe` | **cambiar formato** (p. ej. a 9:16) | ? | hasta 1080p | Pasar horizontal a vertical |
| `topaz_video`, `bytedance_video_upscale`, `video_upscale`, `fps_boost`, `video_deflicker`, `topaz_hyperion_2_5` | upscale, más fps, quitar parpadeo, HDR | ? | hasta 4K | Pulir el final |
| `video_background_remover`, `sam_3_video`, `depth_anything_video` | quitar el fondo / mapa de profundidad | ? | — | Efectos |
| `hf_mult_motion_control(_flash)`, `hf_mult_replace_object(_flash)` (Genjutsu) | copiar movimiento / reemplazar objetos | ? | hasta 1080p | Efectos virales |
| `draw_to_video`, `higgsfield_preset` | dibujo → video / preset viejo | ? | — | — |

Imágenes, de referencia (pricing de Higgsfield según aliteq): Soul 2.0 ~0.12, GPT Image ~1, Nano Banana Pro/2 ~2 créditos por imagen. Sirven para hacer el primer frame de un b-roll.

## Recomendación por uso
1. **Reel vertical 9:16:** el reel principal lo **graba Sergio** y lo edito yo con ffmpeg y auto-editor, sin costo. Higgsfield solo pone extras: `kling3_0` (9:16, 5 s, sin sonido, ~7.5) o `kling4_0` mientras siga el descuento.
2. **B-roll:** `kling3_0` o `kling3_0_turbo` a 720p sin sonido (~7.5 por 5 s). Para pruebas, `seedance_2_0_mini` (~5).
3. **Avatar de Sergio:** `intone` (una foto de Sergio + un audio suyo de 4–30 s, 9:16, 720p). El costo hay que verlo en el botón Generate. ⚠️ Sergio tiene 16 años: pedí su sí **y** el de su adulto responsable antes de usar su cara o su voz. Nunca hagas que el avatar diga algo que él no aprobó.
4. **Anuncio:** `marketing_studio_v2_video` (9:16, 12–15 s) o `veo3_1` para una toma premium (~40 por 4 s). Recordá que TikTok Ads es solo para mayores de 18.

Con 432 créditos alcanza para unos 57 clips de Kling 3.0 a 720p sin sonido, o unos 10 de Veo 3.1 de 4 s.

## Paso a paso (cuando Sergio ya dijo SÍ)
1. `balance`: confirmás el saldo.
2. `models_explore` con `{"action":"get","model_id":"kling3_0"}`: lees los parámetros, los formatos y las duraciones. Si no sabés qué modelo usar, `{"action":"recommend","query":"vertical 9:16 b-roll, text-only"}`.
3. Si hay foto o audio: subilos con `media_upload_widget` para tener el `media_id`.
4. Destino: `get_preferences` y `list_projects` (opcional, para el `folder_id`).
5. Presets virales (opcional, solo lectura): `get_presets` y `get_preset_instructions`.
6. **Antes de generar:** mandale a Sergio el modelo, el prompt, 9:16, la duración, la resolución, los créditos estimados y el saldo. Esperás el sí.
7. Generar: lo hacés con la herramienta de generación del conector, con `model`, `prompt`, `aspect_ratio:"9:16"`, `duration`, `resolution` y `medias`. Mirá el esquema con `GetDynamicTools` antes, porque no lo ejecuté. Para presets: `execute_preset`.
8. Revisar el resultado (con `list_project_assets` / `get_project_asset_source` para descargarlo), editar en la box (subtítulos, cortes) y mostrárselo a Sergio. Recién con su OK pasa a Growth.
9. Anotar en la memoria compartida los créditos gastados, el modelo usado y el resultado.

## Fuentes
- Conector Higgsfield (31 oct 2026): `balance`, `models_explore` (list y get intone), `marketing_studio_v2_costs` (solo widget).
- toolcolumn.com/learn/higgsfield-credits-explained (26 oct 2026).
- aliteq.com/which-higgsfield-model-to-use y aliteq.com/higgsfield-credits-explained (26 y 29 oct 2026).
- higgsfield.ai/blog/ai-human-motion-2026 (oficial).
