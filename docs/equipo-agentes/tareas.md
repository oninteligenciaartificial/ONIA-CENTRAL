# Tareas — estado al 2026-11-01

Fuentes: /workspace/pendientes-sum.md, /workspace/decisiones-pendientes.md, /workspace/tablero/tablero.json (originales intactos).
Decisiones abiertas: ver /workspace/decisiones/INDICE.md (D-009 a D-020 esperan a Sergio).

| id | tarea | área | dueño | estado | bloqueo | siguiente paso |
|---|---|---|---|---|---|---|
| T-01 | Loops agénticos Claude/Codex | Operaciones | Operaciones | hecho | — | Prueba en seco OK el 1 nov; respaldo onia-loop.bak-20261101 |
| T-02 | Sistema central con buzón entre agentes y guía | Operaciones | Operaciones | hecho (apagado) | — | Encender solo con reloj tras 1 vuelta real (D-006) |
| T-03 | Panel empresa: diseño + datos reales | ONIA Platform | ONIA Platform (Codex) | en curso | Datos de Finanzas, credenciales Chatwoot, fuente de ganancia en USD, nombres de agente sin unificar | Conectar fuentes (T-08) y unificar nombres (Operaciones/operaciones/desconocido/prueba) |
| T-04 | Contestar decisiones pendientes D-009 a D-020 | SUM | Sergio | pendiente | Espera a Sergio | Responder con `onia-central decidir <id> A\|B` |
| T-05 | Higgsfield: fotos + ok del papá | Growth/Contenido | Sergio | pendiente | Ok del papá (D-011) | Confirmar el ok; sin él no se generan fotos |
| T-06 | Ventas manda la respuesta de la llamada 1:1 a Bs 350 | Ventas | Sergio (aprueba) | pendiente | Aprobación (D-020) | Aprobar o ajustar el borrador |
| T-07 | Ejecutar build y suite completa del panel | ONIA Platform | ONIA Platform (Codex) | pendiente | — | Correr build y tests en feat/panel-interno; luego decidir PR (D-014) |
| T-08 | Conectar fuentes: cobros del taller, credenciales Chatwoot, ganancia en USD | Finanzas/Operaciones | Finanzas/Operaciones | pendiente | Credenciales y fuente de datos | Definir de dónde sale cada dato; Sergio entrega credenciales por canal seguro |
| T-09 | Prueba real con Talleres | Operaciones | Operaciones | en curso | — | D-008 aprobada (2 salas Meet gratis); falta que Sergio cree las 6 salas antes del martes |
| T-10 | Aplicar D-001 a D-007 | SUM/Operaciones | Operaciones | hecho | — | Todas aprobadas el 1 nov y aplicadas (ver APLICADO-decisiones.md); marcar cerrado en tablero |
| T-11 | Grabar los 21 guiones en bloques B1 a B5 | Contenido | Sergio | pendiente | Confirmar historia L1/L16 (D-010) y precio (D-009) | Grabar B1 a B5 |
| T-12 | Decir a Operaciones y a Ventas en su chat que SUM habla por Sergio en aprobaciones | Operaciones | Sergio | pendiente | — | Sergio lo escribe en esos chats |
| T-13 | Escribir al chat 35 de la clínica odontológica | Ventas | Sergio | pendiente | Decisión D-012 | Ventas deja borrador; Sergio aprueba el envío |
| T-14 | Crear 6 salas de Meet (2 por clase, clases del 3, 5 y 7 nov) | Talleres | Sergio | pendiente | — | Crearlas antes del martes 3 nov |
| T-15 | Probar los flujos n8n en instancia de prueba | Operaciones | Operaciones | pendiente | Decisión D-017 y credenciales | Ver /workspace/orquestacion/n8n/LEEME.md |
| T-16 | Revisar y decidir topes nuevos de gasto | Operaciones | Sergio | pendiente | Decisión | Leer /workspace/orquestacion/topes-propuesta.md (nada aplicado) |

## Prueba e2e 1 nov

| área | tarea | motor | resultado revisión | archivo |
|---|---|---|---|---|
| Negocio | Responder lead de WhatsApp (borrador) | Claude | APROBADO | /workspace/orquestacion/pruebas/e2e-negocio.md |
| Producto | Verificador de reglas de bots (Python + pytest) | Codex | APROBADO (pytest sin re-ejecutar; patch pendiente de revisión independiente) | /workspace/orquestacion/pruebas/e2e_producto.py |
| Finanzas | Checklist de control diario | Claude | APROBADO tras vuelta 2 (sigue necesita_sergio: faltan cantidades) | /workspace/orquestacion/pruebas/e2e-finanzas.md |
