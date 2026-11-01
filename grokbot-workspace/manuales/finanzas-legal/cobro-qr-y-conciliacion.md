---
tarea: cobro-qr-y-conciliacion
version: 1
dueno: SUM (directo a Claude)
ejecuta: claude
nivel_modelo: 2
max_vueltas: 2
escala_a_sergio: comprobante dudoso, monto distinto, pago de tercero, menor de edad, factura, QR por vencer
---
# Cobro por QR: registro y conciliación (en borrador)

## Objetivo
Preparar el registro de un cobro por QR y la lista de verificación para que una persona autorizada concilie contra el extracto. Claude no cobra ni confirma accesos.

## Cuándo se usa
Cuando llega un comprobante o un lead dice "quiero pagar", y en el cierre diario de pendientes.

## Entrada
- Datos del comprobante ya transcritos por una persona: monto, fecha, hora, N.° de operación.
- Producto y cupos usados según la planilla.

## Pasos
1. Revisa el flujo en `/workspace/finanzas/flujo-cobro-qr.md` (secciones 1 y 4).
2. Compara monto con el producto, fecha coherente y que el N.° de operación no esté repetido.
3. Arma la fila de registro SIN nombre, teléfono ni correo: fecha, monto, código de inscripción, producto, Verificado = No.
4. Redacta el mensaje al cliente usando los modelos de la sección 3 de la fuente (solo borrador).
5. Indica que "Verificado = Sí" lo marca una persona autorizada tras mirar el extracto; nunca Claude ni el bot.
6. Pendientes: más de 24 h sin conciliar se avisan al cliente; más de 72 h pasan a revisión (según la fuente).

## Salida (JSON)
{"estado":"ok|falla|necesita_sergio","borrador":"fila de registro y mensaje","motivo":"..."}

## Fuentes
- `/workspace/finanzas/flujo-cobro-qr.md`
- `/workspace/finanzas/aprendizajes.md` (titular del NIT, cuenta y QR; consentimiento de datos)
- `/workspace/onia-cola/finanzas-y-legal/OBJETIVO.md` (ítem 3: registro sin datos personales)
- `/workspace/finanzas/terminos-taller.md` (precios Bs 50 y Bs 70)

## Reglas
- La verdad es el extracto, no la captura. Sin conciliar no hay acceso.
- No copies cuentas, QR ni nombres de titulares.
- POR CONFIRMAR: cupos de lanzamiento (la fuente dice ~60, no verificado).
- POR CONFIRMAR: el QR de la fuente es solo de Bs 50 y vence el 30/11/2026; otros montos necesitan otro QR. No se sabe si es reutilizable.
- POR CONFIRMAR: la fuente pide nombre y teléfono en la hoja, pero el objetivo pide registro sin datos personales.
- POR CONFIRMAR: la titular de la cuenta es un tercero y se desconoce su relación con el negocio; consulta contador.
- POR CONFIRMAR: facturación SIAT y quién es titular del NIT.

## Checklist de terminado
- [ ] La fila no contiene datos personales
- [ ] Monto = producto
- [ ] Operación no repetida
- [ ] Dice quién debe conciliar (persona autorizada)
- [ ] Ningún acceso prometido antes de Verificado = Sí

## Prohibido
pagar, cobrar, reembolsar, firmar, publicar términos, push

## Cuándo escalar
- Monto distinto, comprobante dudoso o editado, o pago de otra persona.
- Cliente menor de edad.
- Duda de factura o del titular de la cuenta.
- QR cerca del vencimiento.
