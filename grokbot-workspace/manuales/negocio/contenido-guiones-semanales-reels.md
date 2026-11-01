---
tarea: contenido-guiones-semanales-reels
version: 1
dueno: Negocio
ejecuta: claude
nivel_modelo: 2
max_vueltas: 2
escala_a_sergio: aprobar guion final, dato sin fuente, promesa de ingresos, uso de cara/voz de Sergio, cualquier gasto de créditos
---
# Guiones semanales de reels

## Objetivo
Dejar la semana de guiones lista para que Sergio grabe en lote y apruebe sin buscar archivos.

## Cuándo se usa
Cada semana (la anterior ya hecha: 21 guiones del 2 al 8-nov) o cuando Sergio o SUM pidan guiones nuevos. Si el guion es largo, va a la cola `onia-llm` con Claude (`/workspace/marca/AGENTS.md`).

## Entrada
- Semana y foco (taller, diagnóstico, etc.) y el slot de cada reel (R1/R2/R3) de `calendario-3reels.md`.
- Plantillas T01-T15 y CTAs de `dashboard-contenido.md`.
- Datos reales vigentes (fechas, precio del taller): solo de las fuentes.

## Pasos
1. Leer el calendario y listar los slots de la semana con su tema y formato (V 9:16 / H 16:9).
2. Elegir plantilla y CTA de `dashboard-contenido.md` según el pilar. Revisar que el CTA siga vigente (ej. `cta_taller` vence 2026-11-07).
3. Escribir cada guion: gancho (0-3 s), texto literal, tomas/b-roll, CTA, bloque de grabación.
4. Agrupar por bloques de locación y vestuario (como en `guiones-semana-2-8nov.md`) para grabar en un día.
5. Escribir en tuteo. Marcar con `[CORCHETES]` lo que falte completar con datos reales.
6. Revisar contra las reglas (abajo) y corregir. Máximo 2 vueltas.
7. Guardar borrador en `/workspace/marca/` (md, y json si es para el panel) y reportar.

## Salida (JSON)
{"estado":"ok|falla|necesita_sergio","borrador":"/workspace/marca/guiones-semana-<fechas>.md","motivo":"..."}

## Fuentes
- `/workspace/marca/AGENTS.md`
- `/workspace/marca/calendario-3reels.md`
- `/workspace/marca/guiones-semana-2-8nov.md` y `/workspace/marca/guiones-semana-2-8nov.json` (modelo de formato)
- `/workspace/marca/dashboard-contenido.md` (plantillas T01-T15, CTAs, reglas)
- `/workspace/marca/sistema-salida.md` (tipos de contenido y reglas comunes)
- `/workspace/marca/guion-muestra-clase1.md`
- `/workspace/onia-central-sistema/agentes/contenido-y-marca/.claude/agents/guionista-reels.md`

## Reglas
- Tuteo siempre (`AGENTS.md`, `guiones-semana-2-8nov.md`). El calendario aún tiene voseo ("Escribime", "Mirá"): al pasarlo a guion, pasarlo a tuteo. POR CONFIRMAR: si Sergio quiere el calendario corregido también.
- No prometer ingresos ni mostrar ingresos de Sergio o su familia; sin ganchos que ataquen inseguridades; sin escasez falsa; sin testimonios inventados (`dashboard-contenido.md`, `calendario-3reels.md`).
- Cada dato dicho en cámara lleva fuente; sin fuente, no se dice.
- Sin compañeros, profes, clientes ni claves en cámara.
- Duraciones: son propuestas, no metas de referentes.
- Precio del taller (Bs 50), fechas (3, 5 y 7-nov, 19:00) solo tal cual están en `calendario-3reels.md`; cupos (60): POR CONFIRMAR, solo aparece en un borrador de `taller-salida.md`.

## Checklist de terminado
- [ ] Todos los slots de la semana tienen guion y bloque de grabación.
- [ ] Tuteo en todo el texto; ningún "vos/mirá/escribime".
- [ ] CTAs vigentes y sin escasez falsa.
- [ ] Cada cifra o fecha tiene fuente citada.
- [ ] Marcado "BORRADOR pendiente de aprobación".

## Prohibido
publicar, enviar, pautar, gastar créditos, push, deploy

## Cuándo escalar
- Falta un dato real (fecha, precio, cupo) y no está en las fuentes.
- El guion usa la cara o voz de Sergio en IA, o un tema sensible.
- Tras 2 vueltas sigue sin pasar la checklist.
- Pasar a Sergio: la aprobación final de cada guion (con captura).
