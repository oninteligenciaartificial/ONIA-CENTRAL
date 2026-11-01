---
tarea: plataforma-evals-agente
version: 1
dueno: Producto
ejecuta: codex
nivel_modelo: 2
max_vueltas: 2
escala_a_sergio: correr evals contra el agente real con costo en tokens, cambiar expectativas de casos para que pasen, tocar el motor de producción
---
# Evals del agente de WhatsApp (agregar casos y correrlos)

## Objetivo
Mantener el set de evaluaciones del agente (dental y comercio) para detectar precios inventados, citas confirmadas sin ver agenda, falta de escalamiento y voseo.

## Cuándo se usa
Al agregar casos, cambiar el agente o un manual, o cuando un diagnóstico encuentra fallos.

## Entrada
- Caso nuevo o fallo observado (rubro, mensaje del cliente, qué se espera).
- Doc del módulo: `evals/work/docs/evals-agente.md`.

## Pasos
1. Agrega el caso en `evals/agente/casos/dental.json` o `comercio.json` con id único `rubro-NN-descripcion`.
2. Datos duros en `debeContener`; frases libres con `regex`; datos inexistentes en `noInventar`; totales válidos en `montosPermitidos`.
3. Corre `npx vitest run evals/agente` (modo referencia, sin red ni costo) y `npx tsc --noEmit`.
4. Para el agente real: `EVALS_AGENTE=real`, repetir cada caso N veces y exigir tasa de aprobación (ej. ≥90 %) en vez de 100 %.
5. Si falla el agente real, no cambies la expectativa: registra el fallo (ver `evals/diagnostico-precios.md`, 38 de 38 casos escalaban antes del LLM).
6. Entrega el patch y pasa a `plataforma-revisar-patch`.

## Salida (JSON)
{"estado":"ok|falla|necesita_sergio","borrador":"casos agregados y resultado de vitest","motivo":"..."}

## Fuentes
- `/workspace/platform/evals/work/docs/evals-agente.md`
- `/workspace/platform/evals/work/evals/agente/casos/dental.json`
- `/workspace/platform/evals/work/evals/agente/casos/comercio.json`
- `/workspace/platform/evals/diagnostico-precios.md`
- `/workspace/platform/evals/feat-evals-agente.patch`
- `/workspace/investigacion/orquestacion-agentes.md` (métrica 7: set de ~20 tareas)

## Reglas
- Mensajes del cliente pueden vosear (se prueba); textos del negocio y del agente, nunca.
- Credenciales del modelo solo en variables del CI, jamás en JSON ni código.
- Precios en los casos son de contexto de prueba, no precios de OnIA.

## Checklist de terminado
- [ ] ids únicos y categorías válidas
- [ ] vitest y tsc ejecutados o declarados no ejecutados
- [ ] Ninguna expectativa relajada
- [ ] Sin red ni credenciales en el modo referencia

## Prohibido
push, merge, deploy, producción, tocar .env/secretos

## Cuándo escalar
Si correr el agente real cuesta tokens, si el arreglo exige cambiar el agente de producción (vive fuera de este repo) o si hay que decidir el umbral de aprobación.
