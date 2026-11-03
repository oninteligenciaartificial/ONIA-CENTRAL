# Punto 2: ONIA Platform

**Versión del 3-nov-2026.** Es lo que piensa Sergio Urcullo hoy y puede cambiar. Si cambia, este archivo se pone al día y el cambio se anota en el [historial](historial.md), con fecha, qué cambió y por qué.

Cerrado por Sergio Urcullo el 3-nov-2026, en el chat del proyecto Onia. El código vive en el repo `onia-platform`; acá va solo la dirección del producto.

## Qué es

Un solo sistema en la nube (el VPS), pensado desde el principio para varios rubros.

- **El core** (la parte que usan todos los clientes): inventario, chatbot de WhatsApp, usuarios y créditos.
- **Los módulos de rubro** (lo que solo usa un tipo de negocio): por ejemplo, el odontograma de las clínicas dentales o las sucursales.

## Qué se hace ahora

- **Se termina solo el core,** empezando por lo que Sergio Urcullo nombró: inventario y chatbot de WhatsApp andando sin errores. Qué falta en usuarios y créditos, sin comprobar.
- **Los módulos de rubro quedan congelados** hasta que el core esté listo.

## Cómo se adapta a cada cliente

- Por configuración y módulos sobre el mismo core.
- **Nunca** una copia del código para un cliente: con copias, cada arreglo hay que hacerlo muchas veces.
- **Un módulo nuevo se hace cuando un cliente lo paga.**

## Instalación local

En la computadora o el servidor del cliente: solo a futuro, cara, para una empresa grande. Hoy no se ofrece.

## Cómo se vende

1. **Auditoría** del negocio.
2. **Implementación** de ONIA.
3. **Suscripción por créditos.**

La página web del cliente la puede hacer ONIA y se cobra como extra (ver [ventas](ventas.md)). Que el cliente se registre solo y pague con Stripe queda para más adelante.

## Abierto

- Cuándo el core se da por "listo" (qué prueba tiene que pasar).
- Precio de la auditoría, de la implementación y de los créditos: sin decidir.
