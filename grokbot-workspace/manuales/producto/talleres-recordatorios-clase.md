---
tarea: talleres-recordatorios-clase
version: 1
dueno: Producto
ejecuta: claude
nivel_modelo: 1
max_vueltas: 2
escala_a_sergio: enviar cualquier recordatorio; links de Meet; cambio de hora/fecha; cupos o precio
---
# Recordatorios de clase (borrador, coordinado con Contenido y Ventas)
## Objetivo
Dejar redactados los recordatorios de cada clase (día anterior, 2 h antes, en vivo, después) con datos del material, sin enviarlos.
## Cuándo se usa
Una a dos semanas antes de cada tanda de clases, o cuando Ventas o Contenido piden "qué material mencionar".
## Entrada
- Clase (1, 2 o 3) y sus datos de `temario.md`.
- Pedido de Ventas o Contenido (buzón), si lo hay.
## Pasos
1. Toma de `temario.md` fecha, hora (19:00, hora de Bolivia) y tarea de la clase. Cita la ruta.
2. Pasa a Contenido el material a mencionar: la clase y sus diapositivas (`claseN-diapositivas.md`), y que son 2 bloques de ~50 min, cada uno con su sala.
3. Contenido redacta los textos; Ventas aporta lo de inscripción. Tú no escribes por ellos: revisas que los datos coincidan.
4. Usa como base los recordatorios de `comunidad.md` y el calendario de `plan-comunidad.md`. Tuteo.
5. Por cada recordatorio deja `[LINK BLOQUE 1]` y `[LINK BLOQUE 2]`; el del Bloque 2 va después de la pausa.
6. Revisa que no haya nombres ni teléfonos de inscriptos.
7. Entrega el borrador a Sergio; no se envía nada.
## Salida (JSON)
{"estado":"ok|falla|necesita_sergio","borrador":"ruta o texto de los recordatorios","motivo":"qué quedó POR CONFIRMAR"}
## Fuentes
- `/workspace/taller-claude/temario.md`, `comunidad.md`, `plan-comunidad.md`
- `/workspace/taller-claude/clase1-material.md` (checklist técnico y salas)
- `/workspace/taller-whatsapp/borradores.md` (recordatorios del taller de WhatsApp: otro producto, otras fechas)
- `/workspace/decisiones-pendientes.md` (D-20261101-008), `/workspace/reporte-equipo.md`
## Reglas
- Hay tres calendarios de horarios que no coinciden: `comunidad.md` (día anterior, 2 h antes, al empezar), `plan-comunidad.md` (17:00, 18:55, 19:00) y `clase1-material.md` (24 h, 2 h, 10 min). POR CONFIRMAR: cuál usa Sergio.
- POR CONFIRMAR: cuántos inscritos hay. Ventas reportó 0 en `reporte-equipo.md`; no escribas cifras de cupos llenos.
- No digas el precio vigente de memoria: el precio lo fija `temario.md` y cambia después del 1/11; confírmalo antes.
- El taller de WhatsApp (17 y 19/11) tiene hora, lugar y precio sin definir; no lo mezcles con estos recordatorios.
## Checklist de terminado
- [ ] Fecha, hora y tarea copiadas de `temario.md`.
- [ ] Links como placeholders; nada enviado.
- [ ] Contenido y Ventas confirmaron sus partes.
- [ ] Un solo calendario de horarios, o marcado POR CONFIRMAR.
## Prohibido
enviar, publicar, cobrar, push, deploy
## Cuándo escalar
Si Sergio no ha elegido calendario de recordatorios, si faltan los links de Meet (los crea él), o si Ventas y tú no coinciden en datos.
