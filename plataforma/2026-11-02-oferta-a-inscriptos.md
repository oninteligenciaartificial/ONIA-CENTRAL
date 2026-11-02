# Qué de ONIA Platform se les ofrece a los inscriptos del taller

2-nov-2026. Es el objetivo que eligió Sergio Urcullo ese día, con botones, en la sesión ONIA Platform: "Oferta a inscriptos (Recomendada)". Vale desde el miércoles 4-nov, cuando ya pasó la clase 1 del taller ([oferta del 1-nov](../docs/decisiones/2026-11-01-oferta-taller-3-4-5.md)).

El texto lo ve un cliente, así que lo aprueba Sergio Urcullo. Después lo usa Boss No-Code en la respuesta automática y en los mensajes a los inscriptos.

## Qué se puede decir

Sale del [análisis del 28-oct](2026-10-28-seguir-con-onia-platform.md) y del [estado del área](../docs/equipo-agentes/platform.md), comprobado el 2-nov.

- ONIA está armando un sistema de gestión para negocios de Bolivia, por rubro: agenda, clientes, caja y cobros, con agentes que proponen mensajes y el dueño los aprueba (análisis, punto 1).
- Está en desarrollo (decisión A del 29-oct, análisis, punto 7).

## Qué no se promete

- **Que esté listo para usar.** No está listo para clientes: siguen abiertos la operación para el primer cliente ([#27](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/27)) y el cobro y lo legal ([#28](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/28)). El cobro por QR y la renovación no se probaron de punta a punta (análisis, punto 2).
- **Un precio.** La escalera del código y la propuesta de Grok Bot están sin decidir (estado, "Le falta decidir").
- **Una fecha** de apertura o de prueba.
- **El chatbot de WhatsApp, la facturación SIAT ni atención "24/7".** El chatbot depende del repo viejo, SIAT no está cerrado (análisis, puntos 1 y 4), y el PR que saca "24/7" del texto del chatbot ([onia-platform #188](https://github.com/oninteligenciaartificial/onia-platform/pull/188)) sigue abierto.
- **Que en el taller se use o se arme algo con la plataforma.** El taller enseña Claude. El plan deja que un negocio pase después a la implementación con ONIA Platform, pero dice que hoy no está lista para clientes ([plan de Meta Ads](../workshops-comunidad/plan-meta-ads-borrador.md), "Por qué este tema sirve para escalar").

## Opciones para Sergio Urcullo

| Opción | Qué se hace | A favor | En contra |
|---|---|---|---|
| **Lista de interesados (recomendada)** | Una línea en el mensaje a los inscriptos desde el 4-nov (texto abajo). Quien contesta queda anotado como interesado | No promete nada, no cuesta y junta negocios para la prueba comercial (paso 7 del análisis) y la escalera del [#65](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/65) | Esta semana no suma plata |
| Mostrarla en la clase 3 | Unos minutos del jueves 5, como caso real de agentes en un negocio | Muestra en vivo lo que enseña el taller | No consta qué versión corre en producción, y habría que preparar una cuenta de prueba sin datos de clientes. Le quita tiempo a la clase |
| Nada esta semana | La plataforma no se nombra en el taller | Cero riesgo de prometer de más | Se pierde el momento en que los inscriptos están atentos |

## Texto propuesto

Para el mensaje a los inscriptos, desde el miércoles 4:

> ¿Tenés un negocio? En ONIA estamos armando un sistema de gestión con agentes para negocios de Bolivia. Todavía no está abierto ni tiene precio. Si querés que te avisemos cuando abramos lugares para probarlo, respondé NEGOCIO.

## Quién hace qué

- **Boss No-Code** pone el texto aprobado en la respuesta automática y en los mensajes, y responde a quien escriba NEGOCIO. Lleva la lista de interesados donde ya guarda sus contactos. Nombres y números no van a Git (`AGENTS.md`, "Qué no entra a Git").
- **ONIA Platform** toma la lista para la prueba comercial cuando la plataforma esté lista para clientes.
