---
tarea: plataforma-automatizaciones
version: 1
dueno: Producto
ejecuta: codex
nivel_modelo: 2
max_vueltas: 2
escala_a_sergio: encender interruptores, abrir PR, usar n8n para lógica que arme el cliente, vender un add-on de automatizaciones, plantillas Meta
---
# Automatizaciones nativas de la plataforma (y cuándo usar n8n)

## Objetivo
Construir o ajustar automatizaciones (recordatorio de cita, seguimiento post-cita, stock bajo, pedido listo) dentro de la plataforma, apagadas por defecto, y decidir si algo va a n8n.

## Cuándo se usa
Al pedir una automatización nueva o al corregir una existente en `lib/automatizaciones/`. Regla: pasos fijos sin decisión van a n8n interno; lo que ve el cliente va nativo.

## Entrada
- Automatización pedida, rubro y disparador.
- Estado actual: `automatizaciones/plan.md`.

## Pasos
1. Revisa `plan.md`: motor puro con reloj inyectado, idempotencia por evento, enviador falso en tests.
2. Escribe el encargo con `plataforma-encargar-cambio-codex` (modelo: `automatizaciones/p-codigo.md`; correcciones: `p-fix.md`).
3. Interruptor por env (`AUTOMATIZACION_*`), activo solo si vale exactamente `encendido`; documentado en `.env.example` sin valores.
4. Respeta ventana de 24 h, plantillas aprobadas y consentimiento/baja; textos en tuteo.
5. Tests: flag apagado no envía, idempotencia, casos borde.
6. Si propones n8n, revisa antes `automatizaciones/licencia-n8n.md`: ONIA define la lógica, el cliente no entra al editor.
7. Revisión con `plataforma-revisar-patch`.

## Salida (JSON)
{"estado":"ok|falla|necesita_sergio","borrador":"patch o plan","motivo":"..."}

## Fuentes
- `/workspace/platform/automatizaciones/plan.md`
- `/workspace/platform/automatizaciones/p-codigo.md`
- `/workspace/platform/automatizaciones/p-fix.md`
- `/workspace/platform/automatizaciones/licencia-n8n.md`
- `/workspace/platform/automatizaciones/feat-automatizaciones.patch`
- `/workspace/platform/repo-automatizaciones/CLAUDE.md`

## Reglas
- En n8n, secretos solo por credencial o `$env`, nunca escritos en un nodo.
- Pendientes conocidos: conectar productores (cron, pedido a "listo"), consentimiento y baja, plantilla Meta del seguimiento.
- Si pasa a producto cobrado: POR CONFIRMAR con Sergio el precio del add-on.

## Checklist de terminado
- [ ] Flags apagados y documentados sin valores
- [ ] Idempotencia probada
- [ ] Sin red en tests
- [ ] Licencia n8n considerada si aplica

## Prohibido
push, merge, deploy, producción, tocar .env/secretos

## Cuándo escalar
Encender interruptores, abrir PR, que el cliente configure lógica (licencia comercial n8n, caso c) o vender el add-on: `necesita_sergio`.
