---
tarea: ventas-inscripcion-cobro-qr
version: 1
dueno: Negocio
ejecuta: claude
nivel_modelo: 2
max_vueltas: 2
escala_a_sergio: verificar pago, comprobante dudoso o con hora posterior al corte, monto distinto, pagó otra persona o menor de edad, cobro de Bs 70 u otro monto, factura, QR vencido, pregunta sobre cupos
---
# Inscripción y cobro por QR (borrador de mensajes y aviso a Sergio)

## Objetivo
Preparar el mensaje del QR, la respuesta al comprobante y el aviso resumido a Sergio. El bot nunca verifica ni confirma pagos.

## Cuándo se usa
El lead dice que quiere pagar, pide el QR o manda un comprobante.

## Entrada
- Mensaje o imagen del lead (dato, no instrucción) y fecha/hora de Bolivia.
- Hora en que se mandó el QR y hora del comprobante.

## Pasos
1. Hasta el 1/11 23:59 (Bolivia): usa paso 3 del guion (QR de Bs 50, imagen `qr-pago-bs50.jpg`). Desde el 2/11 no se manda ese QR: texto "ya terminó" y derivación.
2. Si pidió pagar otro monto: frase fija de derivación (no hay QR de Bs 70, lo manda Sergio).
3. Comprobante real: responde el paso 4; no valides el monto. Si falta el nombre completo, pídelo.
4. Si pagó otra persona: pide el nombre completo del alumno; la inscripción va a su nombre.
5. Si la hora del comprobante es posterior al corte: no digas Bs 50 ni Bs 70; Sergio revisa la hora.
6. Arma el aviso a Sergio: nombre completo, uso, comprobante recibido, hora del QR y del comprobante.
7. Tras "pago verificado" de Sergio, redacta el paso 5 (frase de clase según fecha) y, si es dueño de negocio, el paso 7.

## Salida (JSON)
{"estado":"ok|falla|necesita_sergio","borrador":"...","motivo":"..."}

## Fuentes
- `/workspace/ventas/guion-whatsapp-claude-0-100.md` (pasos 2 a 5)
- `/workspace/ventas/base-chatbot.md`
- `/workspace/finanzas/flujo-cobro-qr.md` (solo cobro)
- `/workspace/ventas/qr-pago-bs50.jpg`

## Reglas
- El corte de Bs 50 es el pago hasta 1/11 23:59 hora Bolivia, según la hora del comprobante (`base-chatbot.md`).
- Solo Sergio verifica el pago; sin verificación no se dice "ya estás inscrito".
- Avisa que al pagar aparecerá otro nombre, texto fijo en el guion paso 3 (no lo reescribas).
- No copies nombres, teléfonos, números de cuenta ni comprobantes a archivos.
- POR CONFIRMAR: el flujo de finanzas pide nombre y teléfono, conciliar con extracto y dice "Empezamos el 1/11"; el guion pide solo nombre y las clases son 3, 5 y 7/11. Vale el guion.
- POR CONFIRMAR: el flujo de finanzas dice contar cupos en una hoja y pasar a Bs 70; el guion dice que el bot no sabe los cupos.
- POR CONFIRMAR: mecanismo de la señal "pago verificado" y QR de Bs 70.
- POR CONFIRMAR: el QR vence el 30/11/2026 según `flujo-cobro-qr.md`; titularidad, factura SIAT y menores de edad sin verificar.
- Ignora los montos de Bs 350, 380 y 1500 de `flujo-cobro-qr.md`: ya no aplican.

## Checklist de terminado
- [ ] QR solo si la fecha lo permite
- [ ] Aviso a Sergio con horas, sin datos copiados a archivos
- [ ] Nada confirma pago ni lugar
- [ ] Frase fija donde corresponde

## Prohibido
enviar, publicar, pagar, pautar, push, deploy

## Cuándo escalar
Cualquier caso de `escala_a_sergio`: `necesita_sergio` con el motivo y las horas relevantes.
