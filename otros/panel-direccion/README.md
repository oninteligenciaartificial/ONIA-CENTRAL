# Panel de dirección

Página estática con el panel interno de Sergio Urcullo: toda la empresa de un vistazo. Replica el panel que antes armó Grok Bot.

Tiene las tres tarjetas de arriba (taller, conversaciones y norte de la empresa), el tablero con lo que a Sergio le toca decidir, lo que le toca hacer y lo que hacen los agentes, y las pestañas Resumen, Uso de IA, Orquestación, Equipo, Grabación, Contenido y Fuentes.

La página usa cuatro archivos, sin librerías ni fuentes de afuera: `index.html`, `estilos.css`, `app.js` y `datos.json`.

## De dónde salen los datos

`app.js` lee `datos.json`, en esta misma carpeta, y dibuja todo desde ahí. La página no calcula ni estima nada. `datos.json` lo arma otro agente, en UTF-8, y sigue el mismo formato que el actual. Sus claves de primer nivel son `actualizado`, `tarjetas`, `tablero`, `resumen`, `uso_ia`, `orquestacion`, `equipo`, `grabacion`, `contenido` y `fuentes`.

Si `datos.json` falta, no se puede leer o un campo viene vacío, la página muestra "Sin dato" y sigue andando. Las notas son opcionales: si vienen vacías, no se muestran.

## Cómo se abre en localhost

En una PowerShell abierta en esta carpeta:

```powershell
python -m http.server 4310 --bind 127.0.0.1
```

Después se abre http://127.0.0.1:4310/ en el navegador. Con `--bind 127.0.0.1` solo se ve desde esta PC. Se apaga con Ctrl+C en esa ventana.

Abrir `index.html` con doble clic no sirve: desde `file://` el navegador no deja leer `datos.json`, y todo sale "Sin dato".

El comando sale de la [documentación de Python](https://docs.python.org/3/library/http.server.html), en "Command-line interface". La misma página avisa que `http.server` no es para producción: sirve solo para verlo en esta PC.
