---
tarea: plan-inversion
version: 1
dueno: SUM (directo a Claude)
ejecuta: claude
nivel_modelo: 3
max_vueltas: 2
escala_a_sergio: gastar o reinvertir, cambio de etapa, precios de plataforma, contradicción entre planes
---
# Plan de inversión y estado de finanzas

## Objetivo
Actualizar, con ventas reales, en qué escenario y etapa está OnIA, y preparar el borrador de `estado-finanzas.md` con cada cifra rotulada (cuenta, moneda, origen, fecha).

## Cuándo se usa
Al cierre de cada mes, o cuando Sergio pide el estado o una decisión de reinversión.

## Entrada
- Ingresos reales del mes (de `control-diario.md` o dados por Sergio).
- Gastos fijos y pago de tarjeta confirmados por Sergio.

## Pasos
1. Lee `/workspace/finanzas/plan-inversion-v2.md` (versión más reciente) y `plan-inversion.md` solo para comparar.
2. Ubica el escenario con los umbrales de la sección 3 de v2, usando ingresos reales.
3. Revisa los disparadores de la sección 5 de v2 y di si se cumple alguno.
4. Marca cada cifra: ESTIMACIÓN (del plan) o REAL (de Sergio), con moneda, fuente y fecha.
5. Si hay diferencias entre v1 y v2, listalas como POR CONFIRMAR.
6. Redacta el resumen con 2 opciones de destino del dinero si hay decisión. Orden fijo del plan: tarjeta, costos fijos, colchón, reinversión.

## Salida (JSON)
{"estado":"ok|falla|necesita_sergio","borrador":"estado y escenario","motivo":"..."}

## Fuentes
- `/workspace/finanzas/plan-inversion-v2.md`
- `/workspace/finanzas/plan-inversion.md`
- `/workspace/finanzas/control-diario.md`
- `/workspace/ventas/escalera-oferta-precios.md` (Bs 350, 380, 1500)
- `/workspace/ventas/precios-piloto-dental.md` (borrador, sin decisión)
- `/workspace/operaciones/uso-ia.md` (costo de planes de IA)
- `/workspace/OnIA_Finanzas_2026.xlsx` (existe, privado; no se abre)

## Reglas
- Las proyecciones son ESTIMACIÓN; no las presentes como hechos.
- POR CONFIRMAR: tipo de cambio (v1 usa 6,96; v2 usa 12,09).
- POR CONFIRMAR: costos fijos en Bs (v1 ~Bs 1.086; v2 Bs 1.886 con US$156).
- POR CONFIRMAR: tarjeta de Bs 3.581 (v1 dice cada mes; v2 dice un solo pago en noviembre).
- POR CONFIRMAR: precios de ONIA Platform (PROPUESTA sin aprobar, #168) y precios del piloto dental (borrador).
- POR CONFIRMAR: formalización y titular del NIT.
- No copies cuentas ni datos bancarios.

## Checklist de terminado
- [ ] Cada cifra dice cuenta, moneda, origen y fecha
- [ ] ESTIMACIÓN y REAL separadas
- [ ] Contradicciones listadas
- [ ] Ningún gasto recomendado como ya aprobado

## Prohibido
pagar, cobrar, reembolsar, firmar, publicar términos, push

## Cuándo escalar
- Toda propuesta de gastar, pautar o pasar de etapa.
- Contradicción de cifras sin resolver.
- Consultas de formalización o impuestos: contador.
