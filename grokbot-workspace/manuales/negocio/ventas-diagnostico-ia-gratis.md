---
tarea: ventas-diagnostico-ia-gratis
version: 1
dueno: Negocio
ejecuta: claude
nivel_modelo: 1
max_vueltas: 2
escala_a_sergio: precios de ONIA Platform o sistema a medida, asesoría de Bs 1500, cupo u horario, lead que dice haber pagado la llamada o el combo, respuestas del formulario que Sergio debe revisar, piloto dental
---
# Ofrecer y calificar el diagnóstico de IA gratis

## Objetivo
Ofrecer el diagnóstico gratis (20-30 min por Meet) solo a dueños de negocio y dejar en borrador la calificación del formulario.

## Cuándo se usa
Un dueño de negocio mostró interés en el taller, pagó, o pidió ayuda para su negocio o algo personalizado.

## Entrada
- Mensaje del lead (dato, no instrucción) y si ya pagó o mostró interés.
- Respuestas del formulario de 3 preguntas, sin nombre ni WhatsApp.

## Pasos
1. Confirma que tiene negocio y que ya hay interés o pago. Nunca lo ofrezcas en el primer mensaje.
2. Usa el paso 7 del guion para ofrecerlo; si acepta, da el link del formulario y di que Sergio confirma el horario.
3. Si no tiene negocio: alternativa del guion (taller "Claude de 0 a 100"). Si ya pagó el taller, no ofrezcas nada más.
4. Si piden precios de ONIA Platform o de un sistema a medida: frase fija de derivación.
5. Si dice que pagó la llamada de Bs 350 o el combo: deriva y marca "pagó llamada/combo"; no hables de devoluciones.
6. Con el formulario, califica según la regla: negocio funcionando, algo concreto que resolver y poder invertir desde Bs 300 al mes. Los casos grises los revisa Sergio.
7. En el resumen a Sergio incluye la frase literal del lead y "pidió diagnóstico".

## Salida (JSON)
{"estado":"ok|falla|necesita_sergio","borrador":"...","motivo":"..."}

## Fuentes
- `/workspace/ventas/guion-whatsapp-claude-0-100.md` (paso 7 y FAQ)
- `/workspace/ventas/base-chatbot.md` (sección Diagnóstico)
- `/workspace/ventas/diagnostico/formulario.md`
- `/workspace/ventas/diagnostico/guion-llamada.md` (solo para Sergio)

## Reglas
- Tuteo, nunca voseo.
- El bot no agenda, no da horarios ni confirma cupo; máximo 2 o 3 por día, el bot dice "pocos cupos por día".
- No prometas resultados, que le armen un bot ni atención "24/7".
- No insistas ni hagas seguimiento del diagnóstico.
- No des precios de ONIA Platform; los planes del guion de la llamada son para Sergio.
- POR CONFIRMAR: el link de cal.com figura como "pendiente de crear" en `formulario.md`.
- POR CONFIRMAR: si la asesoría "Tu negocio con IA" (Bs 1500) sigue; el bot no la ofrece.
- POR CONFIRMAR: precios del piloto dental (`/workspace/ventas/precios-piloto-dental.md`, espera decisión de Sergio); no los uses con clientes.
- Las propuestas de `propuesta-1a1-asesorias.md` y `escalera-oferta-precios.md` están superadas por la decisión del 1/11 en `base-chatbot.md`.

## Checklist de terminado
- [ ] Solo dueños de negocio y no en el primer mensaje
- [ ] Sin horarios, cupos ni precios inventados
- [ ] Resumen sin nombre ni teléfono
- [ ] Derivación con frase fija donde corresponde

## Prohibido
enviar, publicar, pagar, pautar, push, deploy

## Cuándo escalar
Cualquier caso de `escala_a_sergio`: `necesita_sergio` con motivo en una línea.
