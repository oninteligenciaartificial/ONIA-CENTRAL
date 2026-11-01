# Plantillas de WhatsApp para que el bot escriba primero (BORRADOR, no subir a Meta sin el sí de Sergio)
Idioma: es. Variables de Meta: {{1}} = nombre, {{2}} = número de clase, {{3}} = link de Meet (solo en `recordatorio_clase`).
Las plantillas de Utilidad no llevan texto promocional (ni precios, ni ofertas, ni urgencia), para que Meta no las recategorice como Marketing.

**Regla general de silencio:** si Sergio u otra persona escribió en el chat, el bot no envía ninguna plantilla ni texto libre en esa conversación (ni `seguimiento`, ni `pago_pendiente`, ni `recordatorio_clase`) y cancela los envíos programados. Antes de cada envío se revisa el chat.

## 1. recordatorio_clase (categoría Utilidad)
Hola {{1}} 👋 Hoy a las 19:00 (hora Bolivia) es la clase {{2}} de "Claude de 0 a 100". Entras por este link de Meet: {{3}}
Si no llegas, después te mandamos la grabación.
Botón: "Ahí estaré"

## 2. pago_pendiente (categoría Utilidad)
Hola {{1}}, tu lugar en "Claude de 0 a 100" todavía no está confirmado porque falta el pago. Si ya pagaste, mándame el comprobante por acá y lo confirmo.
Botones: "Ya pagué" / "Pásame el QR"

## 3. seguimiento (categoría Marketing, solo si pasaron más de 24 h desde el último mensaje del lead y ninguna persona escribió en el chat)
Hola {{1}}, soy de OnIA. Hace poco preguntaste por el taller "Claude de 0 a 100", que empieza el 3/11 a las 19:00 y queda grabado. ¿Te reservo un lugar?
Si no quieres más mensajes, responde BAJA.
Botones: "Sí, quiero" / "Ahora no"

## Seguimiento dentro de las 24 h (texto libre, sin plantilla; solo si ninguna persona escribió en el chat)
"¿Pudiste ver lo del taller? Si quieres te paso el QR y te reservo tu lugar 🙌" (uno solo, unas 20 h después del **último mensaje del lead**, mientras la ventana de 24 h sigue abierta)

## Orden exacto de seguimientos (por lead, como máximo 2 mensajes en total)
0. Condición previa de cada paso: si Sergio u otra persona escribió en el chat, no se envía nada y se cancelan los pasos pendientes.
1. Si el lead no responde: como máximo **un** mensaje de texto libre, unas 20 h después de su último mensaje.
2. Si sigue sin responder y ya pasaron las 24 h: como máximo **una** plantilla `seguimiento`, solo antes del 1/11.
3. Después, nada más. No se repite ningún paso.

Reglas: si responde "Ahora no", "no" o "BAJA", no se le escribe más; nada de cupos inventados. Las plantillas de Utilidad (`recordatorio_clase`, `pago_pendiente`) no cuentan como seguimiento de venta, pero también se omiten si Sergio u otra persona ya escribió en el chat.
