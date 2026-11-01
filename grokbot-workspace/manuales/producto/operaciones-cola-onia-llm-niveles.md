---
tarea: operaciones-cola-onia-llm-niveles
version: 1
dueno: Producto
ejecuta: claude
nivel_modelo: 1
max_vueltas: 2
escala_a_sergio: tarea con gasto, producción o legal; cambiar el script onia-llm; un nivel falla
---
# Cola de onia-llm y niveles de modelo
## Objetivo
Encolar trabajo pesado en `onia-llm` con el nivel de modelo más bajo que sirva, y comprobar que terminó.

## Cuándo se usa
- Una tarea larga (informe, reescritura, investigación) que no debe correr en el hilo de Grok.
- Código: va a Codex, por la cola, con `--agente operaciones`.

## Entrada
- Un archivo `tarea.md` con la instrucción; el frontmatter puede traer `nivel`.
- Niveles (de `uso-ia.md`): `rapido` (haiku-5-5 / gpt-6-luna), `liviano` (sonnet-5-5 / gpt-6.1-sol), `pesado` (opus-5-5 / gpt-6-astra). Equivalen a nivel_modelo 1, 2, 3.

## Pasos
1. Elige el nivel más bajo que sirva (rápido por defecto; pesado solo para planes difíciles).
2. Encola: `onia-llm cola encolar operaciones tarea.md`.
3. Procesa: `onia-llm cola procesar`.
4. Revisa `onia-llm cola estado` (pendiente, en-curso, hecho, error).
5. Lee el resultado, confirma en `uso.jsonl` motor, nivel y modelo, y exit 0.
6. Si un modelo no existe, `onia-llm` pasa al otro motor: revisa que no sea falla repetida.
7. Entrega el resultado como borrador.

## Salida (JSON)
{"estado":"ok|falla|necesita_sergio","borrador":"ruta del resultado","motivo":"..."}

## Fuentes
- `/workspace/operaciones/cola-llm/pruebas-nivel.md` (prueba de 6 combos y cola)
- `/workspace/operaciones/cola-llm/pendiente-nivel.sh` (solo para entender la prueba)
- `/workspace/harness/docs/harness/onia-llm.md`
- `/workspace/operaciones/uso-ia.md`
- `/workspace/onia-central-sistema/GUIA.md` (secciones 1 y 7)
- `/workspace/operaciones/AGENTS.md`

## Reglas
- Desde el 3-nov-2026 `onia-llm --motor auto` usa Codex por defecto (`memoria.md`).
- Escritor y revisor distintos; nunca dos escritores sobre el mismo archivo.
- Tarea de Codex: menos de 25 min, máx. 3 en paralelo; "terminado" = exit code + archivos esperados (investigación, sección 3).
- No pongas secretos ni datos de clientes en `tarea.md`.
- El tope por corrida de `onia-loop` es US$ 1,50 y US$ 10 por día (GUIA sección 5).

## Checklist de terminado
- [ ] Estado `hecho`, no `error`.
- [ ] Nivel usado figura en `uso.jsonl`.
- [ ] Archivo de salida existe.
- [ ] Nivel no más alto de lo necesario.

## Prohibido
enviar, gastar, borrar, push, deploy, tocar producción o secretos

## Cuándo escalar
- Estado `error` dos veces seguidas.
- La tarea implica publicar, pagar o tocar producción.
- Hay que modificar `/home/box/.local/bin/onia-llm`.
- Uso semanal del motor sobre 90%.
