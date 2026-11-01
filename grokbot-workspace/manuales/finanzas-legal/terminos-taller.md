---
tarea: terminos-taller
version: 1
dueno: SUM (directo a Claude)
ejecuta: claude
nivel_modelo: 3
max_vueltas: 2
escala_a_sergio: publicar, elegir opciones, puntos legales no verificados, datos que faltan
---
# Términos y condiciones del taller y lista legal a confirmar

## Objetivo
Mantener el borrador de términos del taller y la lista de temas que deben ver un contador o abogado. Nada se publica.

## Cuándo se usa
Cuando cambia una condición del taller (precio, fecha, reembolso, factura) o Sergio pide revisar o ampliar los términos.

## Entrada
- Cambio pedido por Sergio o SUM.
- Decisiones ya tomadas por Sergio (si las hay por escrito).

## Pasos
1. Lee `/workspace/finanzas/terminos-taller.md` completo.
2. Aplica solo el cambio pedido. No toques secciones no relacionadas.
3. Deja intactas las marcas [A DECIDIR POR SERGIO], [NO VERIFICADO] y [PENDIENTE] hasta que haya respuesta escrita.
4. Si hay 2 o 3 formas de redactar algo, ofrece opciones y recomienda una.
5. Actualiza la lista "a confirmar con contador/abogado" (ítem 2 del objetivo): un tema por línea.
6. Marca todo como borrador y sugiere revisión profesional.

## Salida (JSON)
{"estado":"ok|falla|necesita_sergio","borrador":"texto o lista de cambios","motivo":"..."}

## Fuentes
- `/workspace/finanzas/terminos-taller.md`
- `/workspace/finanzas/reembolso-taller.md` (opciones A y B)
- `/workspace/finanzas/aprendizajes.md` (menor de edad, titular del NIT, privacidad)
- `/workspace/onia-cola/finanzas-y-legal/OBJETIVO.md`

## Reglas
- No inventes artículos, leyes, plazos ni precios. Cita solo lo que está en las fuentes y deja su marca [NO VERIFICADO].
- A confirmar con contador/abogado: cobro por cuenta de un tercero, facturación y régimen, reembolsos y protección al consumidor, datos personales, límite de responsabilidad, aviso de marca, jurisdicción.
- POR CONFIRMAR: WhatsApp y correo oficiales, titular del NIT, plazo de reembolso.
- POR CONFIRMAR: el precio de lanzamiento dice "hasta el 1/11/2026" y hoy es 1/11; ¿se extiende o cierra?
- Los términos mencionan a la titular de la cuenta por nombre; al publicar, Sergio decide si va con nombre (no lo copies a otros archivos).

## Checklist de terminado
- [ ] Encabezado BORRADOR presente
- [ ] Marcas pendientes intactas
- [ ] Sin cifras nuevas
- [ ] Lista legal con "a confirmar con contador/abogado" en cada tema

## Prohibido
pagar, cobrar, reembolsar, firmar, publicar términos, push

## Cuándo escalar
- Cualquier intención de publicar o enviar los términos.
- Elección de opción A o B, o datos faltantes.
- Un tema legal que las fuentes no cubren.
