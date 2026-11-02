# Estado de Recepción

2-nov-2026. Recepción es la sesión a la que Sergio Urcullo le manda imágenes, PDF, enlaces y videos. Dice qué hay, con un resumen corto, y pasa lo útil a la sesión del área con `SendMessage`, con copia en el tablero del [issue #111](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/111). No hace el trabajo de las áreas.

## Cómo mandarle cosas

- **Videos:** en `E:\ONIA\recepcion\` o con la ruta. Se miran con la skill [`ver-video`](../../.agents/skills/ver-video/SKILL.md).
- **Imágenes y PDF:** con la ruta.
- **Enlaces:** se abren con el navegador de WSL ([decisión](../decisiones/2026-11-01-navegador-wsl.md)), que usa una sesión a la vez.

## Estado

- La skill `ver-video` está escrita y probada el 2-nov con `/tmp/onia-prueba-video/prueba.mp4` (5 s, sin voz): salieron cuadros, WAV y transcripción vacía, sin errores. Falta probarla con un video real con voz.
- Tope de trabajo: unos 200.000 tokens después de lo que lee al arrancar. Modelo hoy, Sonnet; desde el 3-nov, Codex.
