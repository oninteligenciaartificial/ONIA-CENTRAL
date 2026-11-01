---
tarea: control-diario
version: 1
dueno: SUM (directo a Claude)
ejecuta: claude
nivel_modelo: 1
max_vueltas: 2
escala_a_sergio: cifras que no cuadran, meta o precios que cambian, cualquier ingreso sin respaldo
---
# Control diario de ingresos y mensaje nocturno

## Objetivo
Dejar en borrador el reporte nocturno de ventas del día, con acumulado y avance contra la meta, para que Sergio lo lea.

## Cuándo se usa
Cada noche mientras dure la meta de la fuente (Bs 3.000 al 3/11/2026), cuando SUM lo pide o Sergio entrega las ventas del día.

## Entrada
- Ventas del día en cantidades (taller en Bs, llamadas, combos, consultorías), dadas por Sergio o por SUM.
- Tabla acumulada previa de `control-diario.md`.

## Pasos
1. Lee la tabla y las fórmulas en `/workspace/finanzas/control-diario.md`.
2. Calcula el total del día, el acumulado, lo que falta y el % de avance con esas fórmulas.
3. Rellena el mensaje modelo de la fuente con esas cifras. Cada cifra debe salir de la entrada, no de memoria.
4. Si falta un dato (por ejemplo cuántos talleres de Bs 50 y de Bs 70), no lo supongas: marca `POR CONFIRMAR`.
5. Deja el resultado como borrador en el JSON. No modifiques la planilla `.xlsx`.

## Salida (JSON)
{"estado":"ok|falla|necesita_sergio","borrador":"mensaje nocturno con cifras","motivo":"..."}

## Fuentes
- `/workspace/finanzas/control-diario.md` (tabla, fórmulas y mensaje modelo; precios x350, x380, x1500 y taller 50/70)
- `/workspace/ventas/escalera-oferta-precios.md` (opción B: llamada Bs 350, combo Bs 380, asesoría Bs 1500)
- `/workspace/OnIA_Finanzas_2026.xlsx` (existe, es privado; no se abre en este manual)

## Reglas
- Español, corto, tuteo.
- Precios solo los de la fuente. POR CONFIRMAR: si Sergio ya aprobó la opción B de precios (la fuente de ventas la deja como borrador).
- POR CONFIRMAR: qué pasa con la meta después del 3/11.
- Sin nombres, teléfonos ni datos de clientes en el mensaje.

## Checklist de terminado
- [ ] Total, acumulado, falta y % coinciden con las fórmulas
- [ ] Cada cifra tiene su origen en la entrada
- [ ] Sin datos personales
- [ ] Incluye la acción de mañana solo si Sergio la dio

## Prohibido
pagar, cobrar, reembolsar, firmar, publicar términos, push

## Cuándo escalar
- Las cantidades no cuadran con lo cobrado.
- Sergio debe elegir la acción clave de mañana y no la dio.
- La meta o los precios cambiaron.
