---
tarea: contenido-calendario-dashboard
version: 1
dueno: Negocio
ejecuta: claude
nivel_modelo: 1
max_vueltas: 2
escala_a_sergio: aprobar el calendario, cambiar frecuencia de reels, decidir la V2 del taller
---
# Calendario e índice de contenido

## Objetivo
Mantener ordenados el calendario de reels, el índice de guiones y los datos del panel (`dashboard-contenido.json`) para que Sergio vea qué grabar y aprobar.

## Cuándo se usa
- Cuando el loop pida un ítem del checklist: `indice-guiones.md`, `calendario-2-semanas.md` (`/workspace/onia-cola/contenido-y-marca/OBJETIVO.md`).
- Cuando cambie un guion, una fecha o un estado.

## Entrada
- `calendario-3reels.md` como base (no se edita; se parte de él).
- Todos los `guion*.md`, `reel*.md` y `guiones-semana-*.md` de `/workspace/marca/`.
- Decisiones de Sergio en `/workspace/decisiones-pendientes.md`.

## Pasos
1. Listar los archivos de guion y reel de `/workspace/marca/` (no leer `lists/`, `referentes-audio/`, `brutos/`, `transcripciones/`).
2. Para cada uno anotar archivo, tema y estado: borrador / final / listo para revisión. Si no se sabe, escribir `POR CONFIRMAR: estado`.
3. Armar el calendario por día con: pieza, hora, guion de origen y "pendiente de aprobación".
4. Si cambia el JSON del panel, mantener el esquema de `dashboard-contenido.json` (`schema_version`, `estado`, `ctas`...).
5. Verificar que cada guion citado exista en disco y que el calendario no choque con días de taller (3, 5 y 7-nov a las 19:00: no se graba de noche).
6. Guardar el borrador y reportar. Máximo 2 vueltas.

## Salida (JSON)
{"estado":"ok|falla|necesita_sergio","borrador":"/workspace/marca/<archivo>.md","motivo":"..."}

## Fuentes
- `/workspace/marca/AGENTS.md`
- `/workspace/onia-cola/contenido-y-marca/OBJETIVO.md`
- `/workspace/marca/calendario-3reels.md`
- `/workspace/marca/dashboard-contenido.md` y `/workspace/marca/dashboard-contenido.json`
- `/workspace/marca/guiones-semana-2-8nov.md`
- `/workspace/estado-equipo.md` (última tarea: 21 guiones semana 2-8nov)
- `/workspace/decisiones-pendientes.md`

## Reglas
- No editar `OBJETIVO.md` (lo marca el script) ni `calendario-3reels.md`.
- Horarios en hora de Bolivia, programados con Meta Business Suite / TikTok, nunca a mano (`calendario-3reels.md`).
- Frecuencia actual: 3 reels por día. Bajar a 2 es decisión de Sergio (D1 en `aprendizajes-referentes.md`, aún sin respuesta: POR CONFIRMAR).
- V2 del taller (10-15 nov): POR CONFIRMAR, depende de Sergio; los reels con asterisco cambian si no la aprueba.
- Nada sin fuente: no inventar métricas de seguidores o vistas.
- Todo queda "pendiente de aprobación de Sergio".

## Checklist de terminado
- [ ] Lista todos los `guion*.md` y `reel*.md` existentes.
- [ ] Cada día tiene pieza, guion de origen y "pendiente de aprobación".
- [ ] Sin choques con el horario del taller.
- [ ] Los POR CONFIRMAR están visibles arriba del archivo.

## Prohibido
publicar, enviar, pautar, gastar créditos, push, deploy

## Cuándo escalar
- Dos guiones contradicen fecha, precio o CTA.
- Hay que decidir frecuencia, V2 del taller o cambiar horarios.
- Falta el guion de origen de una pieza del calendario.
