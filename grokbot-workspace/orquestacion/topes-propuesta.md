## Alcance comprobado en auditoría local — 2026-11-01

En `bin/onia-tarea` se implementaron reservas atómicas conservadoras: US$3 por
identificador de tarea y US$20 por día local. Las reservas incluyen llamadas
fallidas y no se liberan tras caídas. La suite verifica límites exactos y carreras
entre procesos. No son mediciones de gasto real ni topes globales de OnIA.

El `onia-llm` instalado no permite imponer un máximo monetario total por llamada.
El harness bloquea por defecto el coste desconocido; para habilitarlo falta un
adaptador que garantice `--max-cost-usd` y una cota configurada por el operador.
No debes tratar el coste ausente de Codex como cero. Las pruebas usan stubs sin gasto.
Sergio debe decidir el adaptador y la coordinación con loops/llamadas directas.
La propuesta y cifras históricas siguientes se conservan como antecedente.

---

# Propuesta de topes de gasto (NO aplicada)

Fecha de los datos: 2026-11-01 11:43 (hora -04). Nada de esto se ha cambiado en `onia-loop`, `onia-central` ni `onia-llm`.

## 1. Datos leídos
- `onia-loop`: tope por corrida **US$ 1.50** (`max_costo_usd`, por defecto) y **US$ 10/día** para todos los loops (`ONIA_LOOP_TOPE_DIA_USD`). Solo cuentan tareas que empiezan con `loop:`. Codex no informa costo, así que solo lo frena un tope de **2 ciclos por corrida** (`ONIA_LOOP_MAX_CICLOS_CODEX`) y el ritmo semanal. Antes de cada ciclo `onia-loop` pregunta a `onia-central ritmo --puede <motor>` (falla cerrado).
- `onia-central ritmo` (D-20261101-007: meta 90 %, tope duro 95 %):

| Motor | Usado | Reinicio | Horas que faltan | Puntos a 90 % | Presupuesto | Ritmo actual |
|---|---|---|---|---|---|---|
| Claude | 41 % | 5 nov 03:59 | 88.3 h (3.68 días) | 49 | 0.56 %/h (13.3 %/día) | 0.51 %/h |
| Codex | 23 % | 4 nov 02:59 | 63.3 h (2.64 días) | 67 | 1.06 %/h (25.4 %/día) | 0.22 %/h |

- `uso.jsonl` (139 llamadas, desde 31 oct 18:27): Claude US$ 88.40 (62.84 el 31 oct, 25.56 el 1 nov hasta las 11:12); Codex 69.3 M de tokens, sin costo. **Los loops todavía no gastaron nada** (US$ 0 en tareas `loop:`): todo el gasto viene de llamadas directas y de `onia-central`.
- Costo medio por llamada de Claude: ≈ US$ 0.96 (ONIA Platform ≈ 1.31, SUM ≈ 4.4, Talleres ≈ 0.55).

## 2. Cálculo: ¿los topes dejan llegar a ~90 %?

### Claude
- Faltan 49 puntos. Sin conocer cuántos dólares vale un punto, solo hay una cota: `uso.jsonl` empieza el 31 oct y la semana empezó el 29 oct, así que los US$ 88.40 registrados caen dentro de los 41 puntos o menos. Por tanto **1 punto cuesta al menos US$ 2.16** (equivalente API; la cuota es de suscripción, no se paga eso).
- Llegar a 90 % cuesta **al menos US$ 106 en 3.68 días ≈ US$ 29/día** (si un punto vale más, sube; con US$ 4/punto serían ≈ US$ 53/día).
- Con los topes actuales los loops pueden gastar como máximo US$ 10/día × 3.68 = **US$ 37 ≈ 17 puntos, el 35 % de lo que falta**. El resto tendría que salir de llamadas directas y del orquestador (hoy ya gastan US$ 25–60/día, así que el total sí alcanza).
- El tope de US$ 1.50 por corrida corta casi siempre tras 1 ciclo: una llamada cuesta ≈ US$ 0.96 y cada ciclo hace 2 (ejecutar + verificar). `onia-loop` se frena con "otro ciclo pasaría el tope".
- **Conclusión Claude:** los topes en dólares *no* impiden llegar a 90 % (el total diario ya lo supera), pero sí dejan a los loops muy cortos. Quien realmente protege el 95 % es el ritmo semanal, no los dólares.

### Codex
- Faltan 67 puntos en 63.3 h. Los 69.3 M de tokens registrados cubren ≤ 23 puntos, es decir **al menos 3.0 M de tokens por punto**; llegar a 90 % pide **≈ 200 M de tokens (≈ 3.2 M tokens/h)**.
- Una corrida de Codex hace como máximo 2 ciclos (≈ 4 llamadas ≈ 4 M de tokens ≈ 1.3 puntos). Para gastar 67 puntos harían falta ≈ 50 corridas, casi una por hora, algo que ninguna política actual busca.
- Un tope en dólares no sirve para Codex (siempre US$ 0). **Conclusión Codex:** hoy no hay tope diario propio; solo lo frena el ritmo (0.22 %/h real contra 1.06 %/h permitido), así que ni de cerca llega a 90 % y sobra cuota. No hay riesgo de pasarse, y no se aprovecha ~50 % de lo disponible.

## 3. Topes propuestos (a decidir por Sergio)
| Tope | Hoy | Propuesto | Por qué |
|---|---|---|---|
| Claude, por corrida de loop | US$ 1.50 | **US$ 3.00** | Permite 2 ciclos completos; con 1.50 se corta tras uno |
| Claude, por día, todos los loops | US$ 10 | **US$ 20** | ≈ 68 % de lo que hace falta para 90 %; deja el resto a lo manual y al orquestador |
| Claude, total diario de alerta (solo aviso, no frena) | no existe | **US$ 35** | Referencia del gasto esperado (≈ US$ 29/día para llegar a 90 %) |
| Claude, freno real | ritmo semanal | **mantener** (meta 90 %, tope 95 %) | Es lo que de verdad protege la cuota |
| Codex, ciclos por corrida | 2 | **3** | Aprovecha la cuota que sobra; sigue frenado por el ritmo |
| Codex, por día | ninguno | **tokens: 30 M/día por loops** (≈ 9 puntos) y el ritmo como freno | Sin costo en US$, el tope tiene que ser en tokens |
| Codex, paralelo | — | **máx. 3** (ver `politica-codex.md`) | Consistente con la política |

## 4. Cómo se aplicaría (cuando Sergio lo decida)
- Corrida: `max_costo_usd: 3.00` en cada `OBJETIVO.md` o `--max-costo 3.00`.
- Día: variable `ONIA_LOOP_TOPE_DIA_USD=20`.
- Codex por ciclos: `ONIA_LOOP_MAX_CICLOS_CODEX=3`.
- El tope en tokens de Codex y la alerta de US$ 35 **no existen todavía**: requieren cambiar `onia-loop`/`onia-central`.

## 5. Límites de este análisis
- La relación US$ por punto es una cota inferior, no una medición. Hay que medirla: guardar cada hora `usado %` (ya se hace en `ritmo-historial.jsonl`) y compararlo con el gasto de `uso.jsonl`. Con 1 día de datos se afina esta propuesta.
- `ritmo-historial.jsonl` solo tiene 6 lecturas; el "ritmo" actual es un promedio de la semana.
- Si un ciclo se corta por tiempo, su costo no queda en `uso.jsonl` (lo dice el propio script), así que el tope puede subestimar.
- Los números de Claude son costo equivalente de API, no lo que se paga.
