# Auditoría local del harness de OnIA — 2026-11-01

## Resultado

Se corrigió `bin/onia-tarea` y se agregó `pruebas/test-onia-tarea.sh`.
Resultados ejecutados: **83/83** comprobaciones del guard y **46/46** del harness,
**129 comprobaciones correctas** en la ejecución final de ambas suites.
No se llamaron motores reales ni se consumió cupo. No hubo push, publicaciones,
mensajería, remoto git, VPS, n8n, cron, producción ni borrados.

**Limitación operativa importante:** el lanzador instalado no garantiza una cota
monetaria por llamada. `onia-tarea` ahora bloquea llamadas de coste desconocido
(exit 75). Los topes están probados con adaptador falso; habilitar motores reales
requiere un adaptador que imponga la cota, no una estimación optimista.

## Evidencia y alcance

Se leyeron el harness, guard, suite de guard, propuesta de topes, política, plan
del reloj, investigación local y el script resuelto por
`readlink -f ~/.local/bin/onia-llm`: `/home/box/.local/bin/onia-llm`.
No se editaron ese lanzador, la investigación ni `estado/actividad.jsonl`.
No se consultaron los enlaces externos de la investigación.

El registro histórico tiene 60 eventos válidos; los cinco eventos `simplificado`
contienen `onia-llm:` en su detalle. Los últimos estados por tarea son tres
`hecho`, uno `escalado` y uno `commit-local`: no se encontró una tarea histórica
con último estado `corriendo`. Se conservó todo el historial sin reescribirlo.

Antes de editar cada archivo existente se conservó su copia adyacente
`NOMBRE.bak-20261101-audit`: `bin/onia-tarea`, `politica-codex.md`,
`topes-propuesta.md`, `plan-reloj.md`. También se copió `guard/bloqueos.jsonl`
antes de que la suite del guard añadiera sus bloqueos de prueba. La suite nueva
conserva una copia de su primera versión antes de ampliarla. Los archivos nuevos
no tenían una versión anterior. No se modificó el backup global proporcionado.

## Fallas y arreglos

1. **Resumen contaminado.** `onia-llm` ya dirigía el aviso a stderr, pero el
   harness concatenaba `stdout + stderr`. La prueba ejecuta la función anterior
   con un subprocess falso y reproduce el fallo; luego ejecuta la función nueva
   contra un proceso stub real y obtiene solo `Resumen útil`. Además filtra
   avisos antiguos con prefijo `onia-llm:` en stdout. El registro persistente
   contiene estados, códigos, presencia de avisos y huella de salida; no guarda
   texto arbitrario del motor ni mensajes de clientes.
2. **Timeout incompleto.** Ahora se limita cada llamada a 1500 segundos como
   máximo; `ONIA_TAREA_TIMEOUT` permite reducirlo. El timeout mata el grupo de
   procesos, incluidos hijos. Se probó a 0,15 segundos con un hijo que intentaría
   crear un marcador después: el marcador no apareció.
3. **Sin idempotencia ni recuperación durable.** Se añadieron estados JSON
   atómicos y locks por tarea. Un ID registrado no vuelve a ejecutarse, aunque
   cambie su ficha. `onia-tarea recuperar` marca como `interrumpido` un estado
   en curso sin lock vivo. No reintenta efectos automáticamente. El hijo hereda
   los locks, evitando recuperar mientras termina una llamada huérfana.
4. **Escritores que pueden chocar.** Se conservó el máximo de tres tareas y se
   añadió exclusión por carpeta. Cinco procesos con carpetas distintas llegaron
   a un pico medido de exactamente tres llamadas. Dos IDs en la misma carpeta
   no escribieron simultáneamente.
5. **“Hecho” demasiado permisivo.** Ahora exige exit 0, archivos esperados
   presentes dentro de la carpeta, comprobación exit 0 y última línea exacta
   `VEREDICTO: OK`. Se verifica antes y después de simplificar y después de revisar.
   Se admite la clave `comprobación`, además de `comprobacion`. Un OK seguido de
   otra línea se rechaza. Dos rondas sin cumplir los criterios escalan a Sergio
   mediante estado local y salida, sin enviar mensajes.
6. **Comprobación con shell y rollback destructivo.** La comprobación usa argv,
   sin `shell=True`; se rechazan operadores de shell y acciones de la lista del
   guard. Se rechazan rutas esperadas que escapan mediante symlink. Se retiraron
   el borrado de temporales y la restauración mediante checkout/eliminación de
   archivos del flujo de simplificación. Si falla, se conserva el trabajo para
   corregirlo en la siguiente ronda o inspeccionarlo tras escalar.
7. **Presupuesto inexistente.** Reservas atómicas en microdólares antes de cada
   llamada: US$3 por ID y US$20 por día local. Incluyen escritor, simplificador y
   revisor; una reserva no se devuelve tras fallo o caída. Se comprobó el límite
   exacto, el bloqueo antes de excederlo y la carrera entre cuatro procesos con
   solo US$1 disponible. Coste ausente, cero, negativo, infinito, NaN y registro
   corrupto impiden llamar al motor.
8. **Documentación contradictoria.** Se añadieron aclaraciones prevalentes a la
   política, topes y plan del reloj. No se certifican como globales frenos que
   solo se probaron en este harness; el reloj no se encendió.

## Cuatro mejoras contrastadas con la investigación local

- **Recuperación tras caída:** estado canónico en archivos, coherente con las
  conclusiones sobre Carson, Creative Brain y Lovin. Prueba con proceso padre
  terminado, hijo activo y posterior recuperación sin repetir llamadas.
- **Idempotencia:** IDs persistentes y locks, para hacer segura la cola de tareas
  propuesta en el caso Steinberger. Pruebas de duplicado terminado y concurrente.
- **Logs legibles:** `onia-tarea log [tarea]`, siguiendo el caso Ronacher. Muestra
  fecha, tarea, estado, vuelta y código; filtra por ID y tolera líneas inválidas.
- **Verificación de hecho:** comando de la ficha y evidencias locales, conforme
  al caso Penna y la conclusión 4. La prueba incluso modifica el archivo desde
  el revisor falso: aunque responda OK, la verificación final impide “hecho”.

Estas son aplicaciones de la investigación guardada, no una nueva verificación
externa de sus afirmaciones o métricas.

## Pruebas ejecutadas

| Suite | Resultado final | Evidencia |
|---|---:|---|
| `bash /workspace/orquestacion/guard/test-guard.sh` | 83/83 | `pruebas/resultado-guard-20261101.txt` |
| `bash /workspace/orquestacion/pruebas/test-onia-tarea.sh` | 46/46 | `pruebas/resultado-tarea-20261101.txt` |

La primera ejecución de la suite nueva dio 39/39; luego se añadieron siete
comprobaciones de verificación final, carreras de presupuesto, carpeta compartida
y valores de coste inválidos. No se suman reejecuciones al total de 129.

El guard original conserva sus 83 tests. Cubre las cinco categorías externas y
variantes, aprobaciones con alcance exacto, expiración y registro sin texto de
entrada. Su prueba de `onia-llm` usa la copia preparada, como declara la suite.
Los tests nuevos ejercitan directamente la clasificación real del guard desde
`onia-tarea`, sin ejecutar los comandos prohibidos ni aceptar excepciones por
aprobaciones: este harness se limita a trabajo local.

Fixtures finales: `pruebas/audit-4svj8ptd/`. Se conservaron también los de la
primera ejecución; no se borró nada. Actividad, presupuesto y estado de la suite
nueva son aislados mediante variables de entorno. El historial real de actividad
no recibe eventos de estas pruebas.

## Uso y límites pendientes

- `onia-tarea log [ID]` consulta el registro; `onia-tarea recuperar` recupera
  estados creados por esta versión. Los IDs históricos sin archivo de estado
  requieren reconciliación antes de relanzar fichas antiguas.
- Estado predeterminado: `/workspace/estado/onia-tarea`; actividad predeterminada:
  `/workspace/estado/actividad.jsonl`. `ONIA_TAREA_ESTADO` debe ser compartido por
  todos los ejecutores que deban compartir slots y presupuesto. Cambiarlo divide
  ambos controles. No se coordinan automáticamente otros harnesses o loops.
- El adaptador recibe `--max-cost-usd`; `ONIA_TAREA_COSTE_MAX_USD` declara una
  cota superior por llamada. **El `onia-llm` instalado no implementa ese contrato.**
  No debes apuntar esa variable a él ni tratar una media histórica como garantía.
- Las fichas y comandos de comprobación son entrada del operador de confianza.
  Evitar shell no convierte un programa Python/npm arbitrario en seguro. El guard
  de patrones tampoco es un sandbox general ni una defensa completa contra
  ofuscación. Hace falta aislamiento efectivo del motor para una garantía fuerte
  frente a acciones externas y modificaciones fuera del alcance.
- La prueba de inyección demuestra que el harness transmite la regla de datos a
  las tres etapas y no ejecuta el mensaje como shell. **No demuestra resistencia
  semántica de modelos reales**, porque no se usaron modelos. Esa evaluación y
  la revisión de herramientas/permisos del lanzador quedan pendientes.
- El lock de carpeta evita la coincidencia exacta; carpetas padre/hija y enlaces
  que compartan archivos necesitan aislamiento adicional por worktree o alcance.
- No se conserva un resumen libre del motor en actividad; se priorizó no copiar
  información sensible. Si necesitas resúmenes persistentes, conviene definir un
  esquema permitido con campos controlados.

## Decisiones para Sergio

1. Elegir e implementar un adaptador que imponga el coste máximo, incluyendo
   fallback, y decidir cómo unificar el presupuesto con llamadas directas y loops.
   Hasta entonces el harness falla cerrado; esta auditoría no habilita gasto.
2. Definir el procedimiento para revisar tareas interrumpidas/escaladas y crear
   un nuevo ID sin repetir efectos ya realizados. Migrar IDs históricos si se
   pretende relanzar fichas anteriores.
3. Decidir el aislamiento de comandos y motores, el alcance de verificación y la
   política de resúmenes antes de usar datos sensibles o encender el reloj.

Tú puedes revisar código, copias, fixtures y resultados locales antes de tomar
estas decisiones. No se publicó ni se activó ningún servicio.

## Continuación local — 2026-11-01, respaldo 1540

### Resultado y límites efectivos

Se añadió `bin/onia-costo`, con el argv que ya entrega `onia-tarea`:
`--motor`, `--nivel`, `--dir`, `--agente`, `--tarea`, `--escritura`,
`--max-cost-usd` y prompt tras `--`. Sin fallback. Retorna 75 si falta precio,
límite nativo, medición, resultado válido o si excede el presupuesto. No se
modificó el harness ni su reserva conservadora por tarea/día.

`precios.json` documenta USD **por token**, fecha y fuente por modelo. Ambos
modelos quedan **desconocidos**, sin precio inventado ni consulta externa.
Para pruebas se usan precios sintéticos identificados explícitamente como tales.
El adaptador estima entrada por bytes UTF-8 más el tope de salida configurado;
reserva el máximo monetario completo antes de inferencia, para cubrir también
contexto interno y turnos adicionales. El registro JSONL conserva ID aleatorio,
estimación, reserva y costo, nunca prompts ni respuestas. Al terminar registra
costo real; tras error conserva la reserva y distingue costo observado de final.
No reembolsa reservas del harness ni pretende unificar llamadas directas.

Claude usa `--output-format json`, lee `total_cost_usd` y `usage`, y exige que
su ayuda anuncie `--max-budget-usd`. Propaga el tope de salida por
`CLAUDE_CODE_MAX_OUTPUT_TOKENS`; desactiva herramientas con `--tools ''`.
Codex usa `exec --json` y calcula costo acumulado con eventos
`event_msg/payload/type=token_count`, `info.total_token_usage`; cobra entrada
cacheada a tarifa normal conservadora. También exige un límite monetario nativo
anunciado por `exec --help`. **Si la versión no lo ofrece, bloquea**: los eventos
al final de un turno no garantizan que ese turno no exceda el máximo. No se afirma
que Codex instalado soporte esa opción. Las ayudas y los motores de esta auditoría
fueron stubs; no se ejecutaron binarios reales, ni siquiera para consultar ayuda.

El lector incremental mata el grupo de procesos al observar sobrecosto, JSON
inválido, contador decreciente o timeout. Claude JSON solo informa al terminar:
la protección durante inferencia depende de su límite nativo, no de sondeo de
costo en tiempo real. **El adaptador queda implementado y probado con stubs,
pero bloqueado para uso real** hasta verificar tarifas, capacidades y semántica
de los límites. Observar `--help` por sí solo no certifica un límite comercial.

### Guard y colas

El guard distingue negaciones iniciales, reglas numeradas, listas bajo
`Prohibido:`, infinitivos coordinados y una orden posterior introducida por
`pero`, punto, punto y coma o `y` con nuevo imperativo. El modo comando mantiene
los bloqueos estrictos. No es un analizador semántico universal ni un sandbox.
Las regresiones ejecutan también el guard respaldado y demuestran que varias
negaciones nuevas eran falsos positivos antes del cambio.

En `guard/onia-llm.preparado` se corrigieron el filtro heredado `ONIA_AGENTE`,
la validación de `--agente`, el rechazo sin identidad y el ámbito local de `d`
en `cola_pendientes`. Worker, recuperación, locks y PID quedan por agente.
La suite conserva pendientes y tareas en curso de un segundo agente; reproduce
además que el lanzador anterior enumeraba su cola al procesar desde otro agente.

**Instalación pendiente por restricción del entorno:** `/home/box/.local/bin`
no está entre las raíces escribibles y no hay escalamiento disponible. No se
intentó eludir esa restricción. Se conservó el original dentro del workspace en
`guard/onia-llm.instalado.bak-20261101-1540`. Se dejó
`guard/onia-llm.instalable-1540` y `guard/onia-llm.cola-1540.patch`, derivados del
instalado y conservando sus diferencias previas respecto de la copia preparada.
Ambas variantes corregidas pasan las pruebas de cola. El ejecutable instalado
**sigue sin corregirse**. Cuando exista acceso autorizado, su copia adyacente
`/home/box/.local/bin/onia-llm.bak-20261101-1540` debe preceder a la instalación.

### Evidencia de pruebas

| Suite ejecutada | Resultado | Evidencia local en `pruebas/` |
|---|---:|---|
| `bash guard/test-guard.sh` | 83/83 | `resultado-guard-definitivo-1540.txt` |
| `bash pruebas/test-onia-tarea.sh` | 46/46 | `resultado-tarea-1540.txt` |
| pytest: auditoría nueva | 51/51 | `resultado-suites-definitivo-1540.txt` |
| pytest: producto existente | 27/27 | mismo archivo |
| pytest: suma existente | 2/2 | mismo archivo |

**209 comprobaciones correctas distintas**; no se suman reejecuciones. Comando
pytest final, desde `/workspace/orquestacion`:

```bash
python3 -m pytest -q pruebas/test_auditoria_1540.py pruebas/test_e2e_producto.py pruebas/e2e-tarea/test_suma.py
```

La recolección inicial de todo `pruebas/` produjo seis errores al seguir enlaces
históricos de fixtures hacia `/tmp`: permisos y una apertura de socket denegada
al importar un test ajeno. Una segunda recolección desde la raíz del workspace
se interrumpió (130). Se conservan esos resultados; no se cuentan como éxitos.
`pytest.ini` delimita las suites y excluye `audit-*`; el comando final usa además
archivos explícitos. No se hicieron llamadas externas ni inferencias reales.

Se preservó el backup global proporcionado, sin alterarlo. Archivos existentes
editados: informe, guard, copia preparada; todos con copia adyacente
`.bak-20261101-1540`. También se respaldó `guard/bloqueos.jsonl` antes de las
pruebas y la primera versión del test nuevo antes de ampliarlo. Los archivos
nuevos carecían de versión anterior. Fixtures del harness: `pruebas/audit-jjs69bv3`.

### Prueba real de punta a punta: comando preparado, NO ejecutado

Pendiente de decidir y verificar: precios con fuente y fecha, límites nativos
con garantía suficiente para ambos motores, aislamiento de herramientas y
habilitación explícita de gasto. Con la configuración actual el siguiente
comando **bloqueará antes de inferencia**. No habilitar precios ficticios para
forzarlo a pasar. No afirmar éxito real hasta contar con evidencia del recorrido
escritor → comprobación → simplificador → revisor → verificación final.

```bash
mkdir -p /workspace/pruebas-e2e
E2E_DIR=$(mktemp -d /workspace/pruebas-e2e/costo-XXXXXXXX)
cat > "$E2E_DIR/ficha.md" <<EOF
---
tarea: e2e-$(basename "$E2E_DIR")
agente: auditoria-local
dir: $E2E_DIR
meta: crear un archivo local mínimo
fecha_corte: 2026-12-01
archivos_esperados: resultado.txt
comprobacion: test -s resultado.txt
---
Crea resultado.txt con una línea que diga hola local. Trabaja solo en esta carpeta.
No uses red, servicios externos, mensajería, git remoto ni archivos ajenos.
EOF
ONIA_TAREA_LLM=/workspace/orquestacion/bin/onia-costo \
ONIA_TAREA_COSTE_MAX_USD=0.10 \
ONIA_PRECIOS=/workspace/orquestacion/precios.json \
ONIA_COSTO_LOG="$E2E_DIR/costo.jsonl" \
ONIA_TAREA_ESTADO="$E2E_DIR/estado" \
ONIA_ACTIVIDAD="$E2E_DIR/actividad.jsonl" \
/workspace/orquestacion/bin/onia-tarea "$E2E_DIR/ficha.md"
```

El comando aísla registros para esta prueba; no representa un presupuesto global
compartido con otras ejecuciones. No se creó ni ejecutó esta ficha real.

## Prueba real de punta a punta — 2026-11-01 15:56 (hora de Bolivia)

Cambios previos (backups `.bak-20261101-1600`):
- `precios.json`: claude-sonnet-5-5 y gpt-6.1-sol verificados a US$2 / US$10 por millón de tokens (entrada / salida). Fuentes: platform.claude.com/docs/en/about-claude/pricing y developers.openai.com/api/docs/models/gpt-6.1-sol, consultadas el 2026-11-01.
- `onia-costo`:
  - Codex se corta por el uso medido (decisión de Sergio). Codex 0.166 no tiene un tope nativo.
  - Codex reporta el uso en `turn.completed.usage`, no en `token_count`. Se cobra todo como entrada normal, más la salida y el razonamiento (cálculo conservador). Hay un test nuevo que falla con la versión anterior y pasa con la actual.
  - Claude revisor: herramientas de solo lectura (antes `--tools ''`, que le impedía leer los archivos).
- `onia-llm` instalado con la corrección de colas (backup `~/.local/bin/onia-llm.bak-20261101-1540`).
- pytest: 81/81. guard: 83/83. onia-tarea: 46/46.

Resultado (`/workspace/pruebas-e2e/costo-duVDGay0`, tope de US$0,50 por llamada):

| Paso | Motor | Costo medido | Estado |
|---|---|---:|---|
| Escritor | Codex gpt-6.1-sol | US$0,0587 | Hecho; comprobación OK (`resultado.txt` = "hola local") |
| Simplificación | Codex | US$0,1944 | Hecho; comprobación OK |
| Revisión | Claude Sonnet 5.5 | US$3,4995 (reportado al terminar) | **Bloqueado**: supera el tope de US$0,50 → exit 75 |

- **Hallazgo:** `--max-budget-usd 0.5` de Claude Code 2.1.316 **no frenó** la llamada. Claude reportó US$3,50 en 31 s, siete veces el tope. El adaptador lo detectó al final y bloqueó el "hecho", pero no pudo evitar el consumo.
- Claude está autenticado con la suscripción claude.ai, así que ese costo es el equivalente en API (consumo del cupo), no un cargo en dinero. Con Codex pasa probablemente lo mismo.
- La prueba anterior (`costo-pWFOiIae`) falló porque el adaptador no reconocía el formato real de Codex. Codex escribió el archivo, pero la tarea quedó bloqueada por no poder medir el costo. Ya está corregido.
