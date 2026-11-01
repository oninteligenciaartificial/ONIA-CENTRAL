# ESTADO ACTUAL de OnIA (para los 3 bots nuevos)
Actualizado: 2026-11-01 16:45 (hora de Caracas, UTC-4; Bolivia = misma hora). Reemplaza el chat de SUM como memoria.
Regla: si algo no está en un archivo, va como POR CONFIRMAR. Este archivo se actualiza; el chat no es fuente.

## 1. Metas y fechas
- **Meta de caja:** Bs 3.000 al martes 3 nov.
- **Workshop "Claude de 0 a 100":** 3 clases a las 19:00 (Bolivia), mar 3, jue 5 y sáb 7 nov, Google Meet, 2 salas por clase (D-008). Precio de lanzamiento Bs 50 (después Bs 70: POR CONFIRMAR, D-009).
- Inscripción: WhatsApp wa.me/59175414930 con "TALLER". Cobro con QR BCP (D-019, Sergio debe verificar).
- Reels: 3 por día desde lun 2 nov 07:30 (R1). Lote a grabar: `entregables-workshop/reels-dias1-3.md` §4.

## 2. Equipo (desde 1 nov, 16:00)
- Se pasa de 7 agentes a 3 bots NUEVOS con contexto limpio: **Secretario**, **Jefe de Negocio**, **Jefe de Producto**.
- SUM queda de archivo (chat de +2.700 mensajes). Negocio (ex Ventas y Atención) y Producto (ex Agus) viejos también quedan de archivo.
- Para borrar (lo hace Sergio, barra lateral > Delete): Talleres, Operaciones, Growth y Anuncios, Contenido y Marca, Finanzas y Legal.
- Respaldo completo de los 7 agentes: `/workspace/respaldo-agentes-20261101.tgz` (transcripts, memorias, rutinas).
- Ojo: Operaciones tenía el respaldo semanal del VPS como rutina; hay que pasarlo a n8n o cron antes de borrarlo (POR CONFIRMAR).
- Rutinas Grok de SUM ("resumen-diario-del-equipo", "estado-de-agentes-cada-5-minutos"): PAUSADAS. No reactivar.
- Por qué falló SUM: un solo chat gigante, rutinas que gastaban cuota, coordinador de todo. Ver `/workspace/investigacion/orquestacion-agentes.md`.

## 3. Decisiones ya tomadas
- D-001..D-008 y D-021 aprobadas (ver `/workspace/decisiones/INDICE.md`). D-007: sin tope fijo, ritmo semanal por motor (meta 90%, tope 95%). D-021: topes loops US$3/corrida, US$20/día.
- D-008: 2 salas Meet gratis por clase; Sergio crea las 6 salas.
- 1 nov: la llamada 1:1 de Bs 350 se reemplazó por **diagnóstico gratis** con cierre a la oferta completa (planes ONIA Platform). Borradores en `/workspace/ventas/diagnostico/` con link Cal.com. El mensaje a chats en espera NO salió (falta envío aprobado y acceso Chatwoot bandeja 5).
- Precios ONIA Platform (31 oct, todo PROPUESTA): créditos a Bs 12,09/US$; planes Bs 390/590/990; recargas opción B Bs 100/289/569/1.099. Fuente: `/workspace/platform/precios-competencia.md` §8.
- Motor por defecto de onia-llm: Claude hasta 2 nov, Codex desde 3 nov. Código → Codex; textos → Claude.
- Tuteo siempre, nunca voseo.

## 4. Hecho
- Workshop: guiones finales de las 3 clases, 9 reels días 1-3, web de invitación (`entregables-workshop/web/index.html`, local en http://localhost:3200/), referentes aplicados. Nada publicado. Ver `entregables-workshop/LEEME.md`.
- 21 guiones semana 2-8 nov (`marca/guiones-semana-2-8nov.md`).
- 33 manuales por área en `/workspace/manuales/` (INDICE.md).
- Harness: onia-llm con niveles, cola, --fondo; onia-tarea (Codex escribe 2 vueltas + simplifica); medidor de costo; prueba e2e Negocio/Producto/Finanzas APROBADA (`estado/tareas.md`).
- Panel local en http://localhost:3100/panel-local.
- ONIA Platform: muchos patches validados en local, sin push (ver `platform/estado-v1.md`): inventario único, webhook Cloud API WhatsApp, evals 38/38, robustez, plantillas por rubro, automatizaciones, límite de prueba, prueba 7 días, panel interno, guard tuteo.

## 5. A medias
- Prueba real onia-tarea: Codex escribió bien (~US$0,25) pero la revisión de Claude pasó su tope (gastó ~US$3,50 de cupo); la tarea no quedó "hecha". Falta adaptador con tope duro para la revisión.
- T-03 panel empresa: faltan datos de Finanzas, credenciales Chatwoot, fuente de ganancia USD, unificar nombres de agente. T-07 build y suite del panel antes de PR (D-014).
- T-15 n8n en instancia de prueba (D-017). Resúmenes 8:00/20:00 iban a pasar a n8n por Telegram: no armado.
- 11 mejoras de seguridad del harness sin aplicar (bloquear `.env`, `git push`…): `orquestacion/comparativa-harness-20261101.md`.
- `onia-cola/talleres/OBJETIVO.md` no existe (hay .bak y error/).

## 6. Pendientes de Sergio (orden de urgencia)
1. Precio vigente del workshop: Bs 50 o Bs 70 desde 2/11 (D-009). Bloquea captions y web.
2. Crear las 6 salas de Meet y pasar los links (T-14), antes del mar 3.
3. Verificar el QR del BCP para cobrar (D-019).
4. Grabar el lote de reels (R1 sale lun 2 07:30). Confirmar historia L1/L16 y "no sé programar" (D-010).
5. Ok del papá para fotos Higgsfield (D-011); foto aprobada para la web.
6. Aprobar envío del mensaje de diagnóstico gratis a chats en espera y chat 35 clínica odontológica (D-012).
7. Política de devolución (D-013); combos (D-016); plantillas WhatsApp (D-015); migración WhatsApp (D-018).
8. Dónde publicar la web (Vercel u onia.com.bo = producción, necesita su sí). Tema legal del nombre "Claude de 0 a 100".
9. PR/merge/deploy del panel (D-014) y lista de 10 PRs de la plataforma (orden: #70, #188, #154, #124, #113, #185, #184, #168, #170, #140).
10. n8n (D-017), topes nuevos (T-16, `orquestacion/topes-propuesta.md`), borrar los 5 agentes.

## 7. Rutas clave
- Estado y reglas: `/workspace/estado/` (este archivo, COMO-TRABAJAR.md, negocio.md, producto.md, secretario.md, tareas.md, actividad.jsonl)
- Decisiones: `/workspace/decisiones/INDICE.md`, `/workspace/decisiones-pendientes.md`
- Investigación: `/workspace/investigacion/orquestacion-agentes.md`
- Orquestación: `/workspace/orquestacion/` (bin/onia-tarea, politica-codex.md, stack.md, bots/*.md, tareas/)
- Manuales: `/workspace/manuales/{negocio,producto,finanzas-legal}/`
- Workshop: `/workspace/entregables-workshop/`, `/workspace/taller-claude/`
- Ventas: `/workspace/ventas/` (guion-whatsapp-claude-0-100.md, diagnostico/, escalera-oferta-precios.md)
- Marca: `/workspace/marca/`
- Plataforma: `/workspace/platform/` (estado-v1.md, precios-competencia.md, patches)
- Uso de IA: `python3 /workspace/operaciones/uso-ia.py` → `/workspace/operaciones/uso-ia.md`
- Respaldo agentes: `/workspace/respaldo-agentes-20261101.tgz`
