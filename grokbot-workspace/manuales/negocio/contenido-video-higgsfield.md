---
tarea: contenido-video-higgsfield
version: 1
dueno: Negocio
ejecuta: claude
nivel_modelo: 2
max_vueltas: 2
escala_a_sergio: cualquier generación con créditos, usar cara/voz de Sergio, anuncios, saldo bajo
---
# Preparar video con IA (Higgsfield / anunciante-supremo)

## Objetivo
Dejar listo el paquete previo (modelo, prompt, costo, saldo) para b-roll o anuncios con IA, esperando el sí de Sergio. En este manual no se genera nada.

## Cuándo se usa
Cuando un guion pide b-roll con IA (ej. el vie 13-nov, opcional en `calendario-3reels.md`) o Sergio pide un anuncio con `anunciante-supremo`.

## Entrada
- Guion o toma que necesita el clip.
- Saldo leído de `/workspace/operaciones/higgsfield-saldo.json` (si no existe, POR CONFIRMAR: saldo).

## Pasos
1. Revisar si se puede resolver sin créditos (grabación de pantalla, Canva, b-roll propio). Si sí, hacerlo así.
2. Si hace falta IA, elegir modelo en la tabla de `higgsfield-guia.md` y anotar duración, resolución y 9:16.
3. Armar el paquete: modelo, prompt, duración, resolución, costo estimado y saldo. Los costos son de fuentes externas: el que manda es el botón Generate (`higgsfield-guia.md`). Si es "?", escribir POR CONFIRMAR.
4. Para anuncios: seguir `SKILL.md` y entregar el paquete completo (ángulo, guion, prompts, costo) antes de gastar.
5. Entregar 2 o 3 opciones como borrador y detenerse a esperar el sí.

## Salida (JSON)
{"estado":"ok|falla|necesita_sergio","borrador":"/workspace/marca/<paquete>.md","motivo":"..."}

## Fuentes
- `/workspace/marca/higgsfield-guia.md`
- `/workspace/marca/AGENTS.md`
- `/workspace/skill-contenido/anunciante-supremo/SKILL.md`
- `/workspace/marca/calendario-3reels.md`
- `/workspace/operaciones/higgsfield-saldo.json` (existe; releer el saldo antes de cada paquete)

## Reglas
- Ninguna generación sin el sí de Sergio; para muchas piezas, pedir primero presupuesto (`AGENTS.md`).
- Saldo de referencia: 432,93 créditos, plan Pro, leído el 31-oct (`higgsfield-guia.md`). Puede estar desactualizado: POR CONFIRMAR al usarlo.
- Cara o voz de Sergio (menor de 16 años): también el sí de su adulto responsable; el avatar nunca dice algo que él no aprobó.
- TikTok Ads solo para mayores de 18: no pautar con la cuenta de Sergio.
- Llaves (APIMART, Higgsfield) nunca en chat, Git ni archivos. Videos pesados no van a Git.

## Checklist de terminado
- [ ] Paquete con modelo, costo, saldo y fuente del costo.
- [ ] Sin llaves ni datos sensibles.
- [ ] 2 o 3 opciones, nada generado.
- [ ] Pide el sí explícito de Sergio.

## Prohibido
publicar, enviar, pautar, gastar créditos, push, deploy

## Cuándo escalar
- Siempre antes de generar: pasa a Sergio con el costo.
- El costo es "?" o el saldo no alcanza.
- Se pide usar su cara o su voz.
