# Workshop — candidato local

`index.html` es autónomo, sin fuentes, analítica ni dependencias de red. No se publicó.

## CONFIG pendiente

Editar el bloque `CONFIG` al final de `index.html`:

- `precioLanzamiento`: precio aprobado en Bs (número positivo); `null` muestra «Precio por confirmar».
- `precioRegular` y `cambioPrecio`: opcionales; si hay cambio, completar ambos. La fecha usa ISO con `-04:00` y se muestra con hora de Bolivia.
- `devolucion`: texto aprobado. Vacío muestra el pendiente antes del pago.
- `fotoSergio`: nombre o ruta relativa de una foto local aprobada, por ejemplo `sergio.jpg`. El archivo debe acompañar al HTML. Vacío conserva el placeholder.

`borrador: true` conserva el aviso interno. Cambiarlo únicamente al preparar una publicación autorizada; los campos pendientes o una foto que no carga mantienen el aviso. Esta opción no publica nada.

El WhatsApp configurado se conserva del archivo original. Los botones abren un mensaje, no lo envían automáticamente. Al acabar la tercera clase, todos ofrecen la próxima edición. El calendario se descarga localmente.

## Verificación

Desde esta máquina, con las dependencias existentes del repositorio:

```bash
node /workspace/entregables-workshop/web/verificar-logica.mjs
node /workspace/entregables-workshop/web/verificar.mjs
```

La primera prueba ejecuta la lógica con DOM simulado. La segunda requiere Chromium permitido, intercepta toda navegación, bloquea recursos externos y genera `workshop-desktop.png` y `workshop-mobile.png` en `/workspace/estado/capturas/`. No envía mensajes ni publica. El reloj de evidencia se fija al 1 de noviembre de 2026; también se comprueban clase en curso y edición terminada.

El entorno actual bloquea Chromium (`Operation not permitted`), por lo que la verificación visual y las nuevas capturas están pendientes; no confundir las pruebas de lógica con una validación visual.
