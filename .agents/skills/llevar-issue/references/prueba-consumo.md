# Prueba: freno por cuota, lectura de lo que devuelven y procesos

Comprueba que "Freno por cuota", "Cómo se lee lo que devuelven", "Procesos, notificaciones y vistas" y los pasos 4, 5, 7 y 9 de `SKILL.md` frenen cuando tienen que frenar.

Cómo se corre: quien prueba, persona o agente, lee esas partes de `SKILL.md`, aplica cada caso y compara con el resultado esperado. No se lanza nada, no se corre `claude`, `codex` ni `gh`, ni un comando de cuota, y no se usa la red. Pasa si todos los casos dan lo esperado.

**Los casos son ejemplos inventados, no mediciones.** Ningún porcentaje, campo o salida de abajo se leyó de una cuenta real. `<SHA-1>` y `<SHA-2>` son commits del PR, y `<SHA-2>` es el último. Ningún caso es una aprobación real de Sergio Urcullo.

## Caso 1: 79 sigue, 80 frena

- Lectura A, pasada por Sergio Urcullo con hora: sesión 79.0 y semanal 12.5.
- Lectura B: igual, con la sesión en 80.0.

Esperado: **A sigue** para un lanzamiento de Codex. Para uno de Claude Code falta además la lectura de Claude (caso 3). **B frena** y avisa con `Session`, `80.0` y su `resets_at`.

## Caso 2: falta el dato

- Lectura C: la semanal no trae porcentaje.
- Lectura D: solo viene la sesión; falta la semanal.
- Lectura E: dice que no se pudo leer, sin porcentajes.

Esperado: **frenan las tres.** No se supone que hay cuota libre.

## Caso 3: cuota de Claude desconocida

- Lectura de ChatGPT como la A del caso 1.
- Toca lanzar a Claude Code para escribir, y Sergio Urcullo no pasó su lectura de `/usage`.

Esperado: **frena el lanzamiento de Claude Code** y se le pide la lectura. No se lanza Codex en su lugar por eso, ni se usa `claude -p "/usage"`.

## Caso 4: no hay comando de cuota

- Operaciones no tiene la lectura de ChatGPT y no hay un comando vigente para leerla.

Esperado: **frena.** No inventa un comando, no corre `hermes usage` y no supone cuota libre. Se le pide a Sergio Urcullo la lectura, junto con lo demás que le toque, en un solo mensaje.

## Caso 5: JSON inválido

- `uso-claude-escritor-1.json` está cortado a la mitad. O la lectura de cuota que se pegó no se puede leer.

Esperado: **frena.** No hay commit ni lanzamiento.

## Caso 6: error de Claude Code con exit 0

- Caso 6a: exit 0, `"type": "result"`, `is_error: true`, `subtype: success`, y `result` avisa de un límite de uso.
- Caso 6b: exit 0, `is_error: false`, `subtype: error_max_turns`.
- Caso 6c: exit 0, todo en orden, pero `permission_denials` con una entrada.

Esperado: **frenan los tres;** no hay commit (paso 5) ni se da por mergeado (paso 9). En 6a se frena y se avisa, como un límite (caso 7). En 6b se relanza con lo que falta, sin subir `--max-turns`. En 6c se anota qué se negó y no se amplían permisos.

## Caso 7: límite sin respaldo

- El `.jsonl` del revisor Codex trae un `turn.failed` por límite de uso. La lectura menciona un reinicio guardado.

Esperado: **frena y avisa.** Esa revisión no cuenta. No se lanza un revisor Claude Code en su lugar por eso, no se pasa a una API ni a un proveedor de respaldo, y no se usa `/usage reset` sin el sí citado de Sergio Urcullo.

## Caso 8: revisión con reservado previo

- Revisión 1, sobre `<SHA-1>`: `Veredicto: cambios`, `Reservado: sí, porque cambia cómo trabaja la empresa`.
- Revisión 2, sobre `<SHA-2>`: `Veredicto: aprobar`, `Reservado: no`.
- Cuota y salidas en orden. No hay comentario que cite a Sergio Urcullo.

Esperado: **frena.** Que la cuota y las salidas estén bien no habilita el merge: rige el paso 9, igual que el caso 1 de `prueba-reserva.md`.

## Caso 9: notificación repetida

- Operaciones esperó el proceso del escritor, leyó su salida, la anotó como leída en `procesos.md` e hizo el commit.
- Sergio Urcullo escribe: "pausá esto".
- Llega después la notificación de fin de ese mismo proceso.

Esperado: **no se contesta ni cuenta como resultado nuevo.** No se relanza ni se repite el commit. Sigue lo último que pidió Sergio Urcullo: pausar.

## Caso 10: trabajador visible, solo lectura

- Sergio Urcullo abre la pestaña de terminal del revisor 1, que terminó hace una hora, y pregunta si está trabajando.

Esperado: Operaciones distingue el escritor o revisor terminado de la sesión abierta solo para mirar, que puede seguir viva. No la presenta como ejecución activa del trabajo, y no promete que otra conversación sea la misma.

## Caso 11: porcentaje inválido

- En cada variante, una ventana contiene `-1`, `true`, `"79"`, un valor no finito o un número mayor a 100.

Esperado: **frena en todas.** No convierte cadenas ni trata booleanos o valores negativos como cuota libre. Un 0 numérico sí puede pasar junto con los demás requisitos.

## Contraste adicional con salidas reales

Esto no es otro caso inventado ni prueba de cuota. En el [cierre real del PR #86](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/86#issuecomment-6539096095), el primer intento de merge salió con código 0, `is_error=false` y `subtype=success`, pero con `permission_denials` no vacío: GitHub seguía OPEN. El segundo usó el comando literal, sin ampliar permisos, devolvió la lista vacía y GitHub dio MERGED. Es evidencia real para el caso 6c y la lectura posterior del estado externo. La revisión de Codex del mismo PR dejó JSONL válido, `turn.completed` y texto de `-o` no vacío. Las ventanas del plan no se midieron: el piloto con el freno nuevo sigue pendiente.
