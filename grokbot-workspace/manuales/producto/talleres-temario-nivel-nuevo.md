---
tarea: talleres-temario-nivel-nuevo
version: 1
dueno: Producto
ejecuta: claude
nivel_modelo: 3
max_vueltas: 2
escala_a_sergio: fechas, precio, cupos y público del nivel nuevo; usar el taller de WhatsApp; cualquier anuncio
---
# Temario de un nivel o taller nuevo
## Objetivo
Armar en borrador el temario de un taller nuevo (ej.: nivel 2 o "Tu negocio contesta solo por WhatsApp") con opciones de fechas y precio para que Sergio decida.
## Cuándo se usa
Cuando Sergio pide un taller nuevo o los resultados de la encuesta del 7/11 muestran demanda. Es trabajo pesado: va a la cola de `onia-llm`.
## Entrada
- Nombre del taller y público.
- Resultados reales de la encuesta (si existen; no los inventes).
- Plantilla: formato de `temario-nivel2.md`.
## Pasos
1. Lee `temario-nivel2.md` y `aprendizajes-y-nuevos-talleres.md`. Para WhatsApp, `borradores.md`.
2. Mantén el formato: 3 clases (o las sesiones que indique Sergio), Bloque 1 (~50 min) + pausa + Bloque 2 (~50 min), una sala de Meet por bloque.
3. Escribe promesa, temario por clase, tarea, requisitos y "lo que NO hay que prometer".
4. Deja fechas y precio como 2 o 3 opciones marcadas "propuesta", nunca como hechos.
5. Cita la fuente de cada cifra externa (plan de Claude, comparables); si no hay fuente, `POR CONFIRMAR`.
6. Cierra con "Lo que tiene que decidir Sergio".
7. Un verificador distinto contrasta el temario con las fuentes. Máximo 2 vueltas.
## Salida (JSON)
{"estado":"ok|falla|necesita_sergio","borrador":"ruta del temario","motivo":"opciones y decisiones pendientes"}
## Fuentes
- `/workspace/taller-claude/temario-nivel2.md`
- `/workspace/taller-claude/aprendizajes-y-nuevos-talleres.md`
- `/workspace/taller-claude/temario.md` (formato del primer taller)
- `/workspace/taller-whatsapp/borradores.md` (taller de WhatsApp; no copies nada de `inscriptos.csv`)
- `/workspace/finanzas/terminos-taller.md` y `/workspace/finanzas/reembolso-taller.md` (referencia de términos)
## Reglas
- Nivel 2: fechas A (17, 19 y 21/11) o B (10, 12 y 14/11), y Bs 90 / Bs 70 son estimaciones de `temario-nivel2.md`, no aprobadas.
- WhatsApp: 17 y 19/11, cupo 30; hora, precio, sala, grabación y devolución están `POR CONFIRMAR` en `borradores.md`. Choca con las fechas del nivel 2 (17 y 19/11): POR CONFIRMAR cuál va primero.
- Plan de Claude y precios de terceros cambian: verifica en la página oficial el mismo día.
- Nada de ingresos, ventas ni "respuestas automáticas" en el nivel 2.
## Checklist de terminado
- [ ] Mismo formato de bloques que el taller 1.
- [ ] Fechas y precios solo como opciones.
- [ ] Cada cifra tiene fuente o `POR CONFIRMAR`.
- [ ] Sección "Lo que tiene que decidir Sergio" presente.
- [ ] Sin anuncio ni mensajes a inscriptos.
## Prohibido
enviar, publicar, cobrar, push, deploy
## Cuándo escalar
Siempre que haya que fijar fechas, precio, cupos o público; si dos talleres chocan en fecha; o si pagar algo (plan, sala) sería necesario.
