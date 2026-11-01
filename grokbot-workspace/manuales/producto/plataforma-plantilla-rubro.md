---
tarea: plataforma-plantilla-rubro
version: 1
dueno: Producto
ejecuta: codex
nivel_modelo: 2
max_vueltas: 2
escala_a_sergio: precios reales o tarifas, activar el rubro importadora, conectar el alta a producción, mensajes que requieren plantilla aprobada por Meta
---
# Agregar o ajustar una plantilla por rubro

## Objetivo
Dejar una plantilla de rubro (agente, catálogo de EJEMPLO, horarios, mensajes) como semilla pura, editable y sin sobrescribir datos del negocio.

## Cuándo se usa
Cuando se agrega un rubro nuevo (hoy: dental y comercio; importadora figura pendiente para la fase 5) o se corrige una existente.

## Entrada
- Rubro y qué cambia.
- Documento del módulo: `plantillas/work/docs/plantillas-rubro.md`.
- Referencia del PR #185 (`plantillas/pr185.diff`).

## Pasos
1. Claude escribe el encargo (ver `plataforma-encargar-cambio-codex`), partiendo de `plantillas/p-importadora.md` como modelo.
2. Codex crea el archivo del rubro en `lib/plantillas/` y lo registra en `registro.ts`.
3. Cada artículo lleva `esEjemplo: true` y SKU estable con prefijo `EJEMPLO-<RUBRO>-`; `precio: null` = pendiente, nunca gratis.
4. Horario de EJEMPLO en `America/La_Paz`, semana completa; mensajes en tuteo, sin prometer atención continua.
5. `aplicarPlantilla` solo devuelve un plan (crear/saltar), sin Prisma ni red; idempotente.
6. Tests en `lib/plantillas/*.test.ts`: estructura, SKU únicos, tuteo, idempotencia, cruce de rubro.
7. Revisión con `plataforma-revisar-patch`.

## Salida (JSON)
{"estado":"ok|falla|necesita_sergio","borrador":"ruta del .patch","motivo":"..."}

## Fuentes
- `/workspace/platform/plantillas/work/docs/plantillas-rubro.md`
- `/workspace/platform/plantillas/p-importadora.md`
- `/workspace/platform/plantillas/p-tuteo.md`
- `/workspace/platform/plantillas/feat-plantillas-rubro.patch`
- `/workspace/platform/plantillas/feat-plantilla-importadora.patch`
- `/workspace/platform/plantillas/pr185.diff`

## Reglas
- Los importes de ejemplo son ilustrativos, no tarifas. Precios del producto: POR CONFIRMAR con Sergio (ver `/workspace/platform/precios-competencia.md`, montos son PROPUESTA).
- Un solo inventario: productos, insumos y servicios salen del mismo `catalogo` con `tipo`.
- Nunca actualizar ni borrar datos existentes del negocio.

## Checklist de terminado
- [ ] Marcas de EJEMPLO en catálogo y horario
- [ ] Sin voseo ni promesa 24/7
- [ ] Idempotente y sin mutar entradas
- [ ] Tests listados; tsc/vitest corridos por quien los ejecuta

## Prohibido
push, merge, deploy, producción, tocar .env/secretos

## Cuándo escalar
Si piden precios reales, enviar mensajes a clientes, tocar el alta en producción o decidir qué rubros entran al corte comercial.
