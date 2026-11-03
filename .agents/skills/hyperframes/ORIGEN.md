# Origen

- **De dónde:** [HyperFrames](https://github.com/heygen-com/hyperframes), de HeyGen, carpeta `skills/hyperframes`, commit `dec465949b89a97084595ed336708c3e8ad6e3fa`. Copiada el 3-nov-2026.
- **Licencia:** Apache-2.0, en `LICENSE`.
- **La aprobó** Sergio Urcullo el 3-nov-2026, como parte de las skills del taller (`docs/skills-inventario.md`).
- **Cambio respecto del original:** se sacó la carpeta `scripts/`. `locate.mjs` llama a la API de Gemini con `GEMINI_API_KEY`, que cobra; `bake-basemap.mjs` baja mapas de Esri y Carto; y `plugin-cli.mjs` corre comandos. Si una tarea los necesita, se leen y se suman por PR con el sí de Sergio Urcullo.
- **Lo que carga de internet:** los `caption-skin.html` y `frame-showcase.html` de `assets/frame-presets/` cargan GSAP desde cdn.jsdelivr.net y traen fuentes `.woff2`. No cobran.
- **Reglas:** rige la skill `editar-video`, en "Frenos": la CLI fijada en la versión `0.9.6`, sin telemetría, `init` con `--skip-skills` y `--skip-transcribe`, y nada pago ni de HeyGen (`reverse`, `cloud`, `lambda`, `cloudrun`, `publish`, `billing`, `auth`, `transcribe --engine heygen`, `media-use`). Si esta skill dice otra cosa, como instalar más skills con `npx hyperframes skills`, rige `editar-video`.
- **Para actualizarla:** se lee qué cambió en el repo de origen y entra por PR, con un commit nuevo fijado acá.
