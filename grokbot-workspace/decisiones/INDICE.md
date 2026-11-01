# Índice de decisiones

Generado el 2026-11-01 desde decisiones-pendientes.md, tablero.json y pendientes-sum.md (originales intactos). D-001 a D-008 vienen del archivo original; D-009 en adelante, del tablero y de pendientes-sum.

| id | decisión | área | estado | recomendación |
|---|---|---|---|---|
| [D-20261101-001](D-20261101-001.md) | Aplico el parche a ~/.local/bin/onia-llm para tener "onia-llm loop" y la lista estricta de… | Operaciones | aprobada | A: sin el parche, un loop en escritura todavía puede correr npm/node/p |
| [D-20261101-002](D-20261101-002.md) | Hay dos orquestadores para los mismos 7 agentes: onia-central (buzón + ciclos cada 4 h) y … | Operaciones | aprobada | A: onia-central sirve para mensajes y el reporte; onia-loop, para term |
| [D-20261101-003](D-20261101-003.md) | onia-loop es un script propio y el AGENTS.md de ONIA-CENTRAL dice "la automatización la ar… | Operaciones | aprobada | A: lo pediste tú y ya está armado; queda escrito por PR |
| [D-20261101-004](D-20261101-004.md) | Un solo formato para decisiones-pendientes.md: hoy hay tabla y onia-loop solo se frena con… | Operaciones | aprobada | A: así cada pregunta abierta frena de verdad al agente |
| [D-20261101-005](D-20261101-005.md) | Aplico el enganche de onia-llm (onia-llm msg/buzon/orquestar/decidir) y el parche para que… | Operaciones | aprobada | A: el loop encendido a mano también lee su buzón primero |
| [D-20261101-006](D-20261101-006.md) | Cómo enciendo el orquestador automático (cada 45 min + reporte 8:00 y 20:00)? El box no ti… | Operaciones | aprobada | A: no instala nada y se apaga con un archivo APAGAR |
| [D-20261101-007](D-20261101-007.md) | Topes de gasto diario: onia-central US$ 5 (buzón + loops) y onia-loop US$ 10 (solo loops).… | Operaciones | aprobada | A: el más bajo manda y es más fácil de vigilar |
| [D-20261101-008](D-20261101-008.md) | Meet gratis corta a los 60 min con 3+ personas, y el temario ya parte cada clase en 2 bloq… | Talleres | aprobada | A, porque no gasta nada, el temario y los materiales ya están armados  |
| [D-20261101-009](D-20261101-009.md) | Precio del taller Claude 0 a 100: Bs 50 o Bs 70 desde el 2/11 | Ventas | pendiente | Sin recomendación documentada en el tablero; Ventas/Finanzas deben apo |
| [D-20261101-010](D-20261101-010.md) | Confirmar que la historia de L1 y L16 es real | Contenido | pendiente | Solo Sergio puede confirmarlo; no se asume. |
| [D-20261101-011](D-20261101-011.md) | Ok del papá para las fotos de Higgsfield | Growth/Contenido | pendiente | No usar las fotos hasta tener el ok. Cualquier generación de pago requ |
| [D-20261101-012](D-20261101-012.md) | Escribirle al chat 35 de la clínica odontológica (Chatwoot bandeja 5) | Ventas | pendiente | B: borrador de Ventas, envío tras aprobación. |
| [D-20261101-013](D-20261101-013.md) | Política de devoluciones del taller | Finanzas | pendiente | Sin recomendación documentada; Finanzas y Legal debe proponer el texto |
| [D-20261101-014](D-20261101-014.md) | PR, merge y deploy del panel interno (rama feat/panel-interno) | ONIA Platform | pendiente | B primero, luego A: no aprobar sin build y suite verdes. |
| [D-20261101-015](D-20261101-015.md) | Aprobar las plantillas de WhatsApp | Ventas | pendiente | Revisar el borrador antes de decidir; sin recomendación documentada. |
| [D-20261101-016](D-20261101-016.md) | Aprobar los combos | Ventas | pendiente | Decidir junto con el precio del taller; sin recomendación documentada. |
| [D-20261101-017](D-20261101-017.md) | Cómo seguir con n8n | Operaciones | pendiente | A en una instancia de prueba, sin credenciales de envío. |
| [D-20261101-018](D-20261101-018.md) | Aprobar la migración de WhatsApp | Operaciones | pendiente | Posponer hasta aprobar las plantillas; sin recomendación documentada. |
| [D-20261101-019](D-20261101-019.md) | Revisar el QR del BCP para cobros del taller | Finanzas | pendiente | Solo Sergio puede verificarlo. |
| [D-20261101-020](D-20261101-020.md) | Que Ventas mande la respuesta de la llamada 1:1 a Bs 350 | Ventas | pendiente | Sin recomendación documentada. |
| D-20261101-021 | Topes de gasto de los loops (US$3/corrida, US$20/día, aviso US$35, Codex 3 ciclos y 30 M tokens/día) | Orquestación | aprobada y aplicada | — |
