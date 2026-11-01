## Estado tras auditoría local — 2026-11-01

Esta sección prevalece sobre las notas históricas de abajo para `bin/onia-tarea`.
Implementado y probado: 1500 s por llamada (configurable solo hacia abajo), tres tareas
concurrentes en un mismo directorio de estado, exclusión de escritores por carpeta,
dos rondas, objetivo `meta` y `fecha_corte` obligatorios, archivos esperados y comando
de comprobación antes y después de simplificar y después de revisar. Se acepta
`comprobacion` o `comprobación`; es un comando con argumentos, sin sintaxis de shell.
La última línea del revisor debe ser exactamente `VEREDICTO: OK`.

`onia-tarea log [tarea]` muestra actividad legible. `onia-tarea recuperar` marca como
interrumpidos los estados en curso cuyo lock ya está libre; no repite efectos.
Los identificadores son únicos: una tarea registrada no se vuelve a ejecutar.
Tras fallo o caída, tú revisas los archivos y creas una nueva ficha con otro ID si
corresponde. Los locks se heredan en la llamada hija para no recuperar mientras siga viva.
No hay rollback destructivo de simplificación: sus fallos conservan evidencia local.

Presupuesto: reserva atómica conservadora por llamada, US$3 por ID y US$20 por día
local, compartida por las tareas que usan el mismo estado. No se devuelve una reserva
tras timeout o caída. El lanzador actual `onia-llm` no garantiza una cota monetaria;
por eso el harness falla cerrado por defecto (exit 75). Antes de habilitar llamadas
reales falta un adaptador que imponga `--max-cost-usd`, incluyendo fallback y llamadas
internas. Configuración del operador: `ONIA_TAREA_LLM` y
`ONIA_TAREA_COSTE_MAX_USD`; no deben proceder de mensajes de clientes ni fichas.
Las pruebas usan exclusivamente un adaptador falso local.

Aislamiento de pruebas: `ONIA_ACTIVIDAD`, `ONIA_TAREA_ESTADO`,
`ONIA_TAREA_TIMEOUT`. Cambiar el directorio de estado divide locks y presupuesto:
no debes hacerlo entre ejecutores reales. Estos topes no cubren invocaciones directas,
loops ni otros orquestadores. No se ha encendido reloj alguno.

Consulta `auditoria-harness-20261101.md` para resultados y límites de seguridad.

---

# Política Codex (borrador para OnIA)

Aplica a tareas de código que se delegan a Codex (por `onia-llm` o `onia-loop`). Nada de esto cambia permisos: siguen vigentes no hacer `git push`, no deploy, no mensajes, no borrar y no secretos.

## Reglas
1. **Tamaño:** cada tarea debe poder terminar en **menos de 25 minutos**. Si es más grande, se parte en tareas con un resultado verificable cada una. (El tiempo máximo por llamada de `onia-loop` hoy es 30 min: `ONIA_LOOP_TIMEOUT=1800`; conviene bajarlo a 1500 s para que coincida.)
2. **Paralelo:** máximo **3 tareas de Codex a la vez**. Dos tareas no tocan los mismos archivos; si chocan, van en secuencia.
3. **Terminado =** el comando de Codex sale con **exit code 0** **y** existen todos los archivos esperados. Ambas condiciones. Cada tarea declara de antemano la lista de archivos esperados.
   - Exit 0 sin los archivos: no está terminada.
   - Archivos presentes con exit distinto de 0: no está terminada.
4. **Revisión:** máximo **2 vueltas** de revisión por tarea (la 1.ª tras la entrega, la 2.ª tras la corrección). Si la 2.ª no pasa, se detiene y se escala a Sergio como decisión (qué cambiar o abandonar); no hay tercera vuelta automática.
5. **Quién revisa:** otra llamada independiente, solo lectura (como el verificador de `onia-loop`), que responde `VEREDICTO: OK` o `VEREDICTO: NO` con motivo.

## Ficha mínima de una tarea
```
tarea: <una línea>
dir: <carpeta de trabajo>
archivos_esperados: <rutas>
comprobación: <comando que debe dar exit 0, p. ej. un test>
tiempo_máx: 25 min
```

## Qué hacer cuando falla
| Situación | Acción |
|---|---|
| Pasa de 25 min | Cortar, anotar qué quedó hecho y partir la tarea |
| Exit distinto de 0 | Cuenta como vuelta de revisión (corrección) si se reintenta |
| Faltan archivos esperados | Igual: es vuelta de revisión |
| 3 tareas ya corriendo | La nueva espera en cola |
| Ritmo semanal de Codex sin cupo (`onia-central ritmo --puede codex`) | No lanzar; esperar o pasar a otro motor |

## Pendiente de Sergio
- Aprobar esta política (hoy es un borrador; nada la hace cumplir automáticamente).
- El límite de 3 paralelos y las 2 vueltas **no están implementados** en `onia-loop`; hoy se aplican por disciplina. Implementarlo es un cambio de código (va por Codex, por PR, sin push).

## Actualización 2026-11-01 14:00 (Bolivia): ya implementada
`onia-tarea <ficha.md>` (/workspace/orquestacion/bin/onia-tarea) la hace cumplir: Codex escribe → comprobación (exit 0 + archivos esperados + comando) → Claude revisa (última línea VEREDICTO) → máx 2 vueltas y luego escala a Sergio; 25 min por llamada; máx 3 tareas a la vez (global, /workspace/estado/.slots); meta y fecha_corte obligatorias; registro en /workspace/estado/actividad.jsonl (lo muestra el panel). Ejemplos: /workspace/orquestacion/tareas/.
