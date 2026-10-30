# Prueba: cuándo frena el paso 9 por las revisiones

Comprueba que el paso 9 de `SKILL.md` y el prompt del merge lean todos los comentarios "Revisión" y que un "Reservado: sí" no quede anulado por un "no" posterior.

Cómo se corre: quien prueba, persona o agente, lee el paso 9 y el prompt del merge, aplica cada caso y compara con el resultado esperado. No se mergea, no se usa `gh` ni la red. Pasa si los cinco casos dan lo esperado y el paso 9 y el prompt del merge dan lo mismo.

Los casos son inventados. `<SHA-1>` y `<SHA-2>` son commits del PR, y `<SHA-2>` es el último. "Habilitado" quiere decir que las revisiones no frenan el merge: sigue sujeto a las dos listas del `AGENTS.md` y a las demás comprobaciones del paso 9. Ningún caso es una aprobación real de Sergio Urcullo.

## Caso 1: "sí" antes, "no" al final, sin aprobación

- Revisión 1, sobre `<SHA-1>`: `Veredicto: cambios`, `Reservado: sí, porque cambia cómo trabaja la empresa`.
- Revisión 2, sobre `<SHA-2>`: `Veredicto: aprobar`, `Reservado: no`.
- No hay comentario que cite a Sergio Urcullo.

Esperado: **frena.** La revisión 1 hace reservado al PR y falta la aprobación citada.

## Caso 2: igual al 1, con aprobación citada

- Las mismas revisiones del caso 1.
- Hay un comentario del PR que cita con sus palabras textuales, y con fecha, la aprobación de Sergio Urcullo de lo que la revisión 1 marcó como reservado, y cubre todo lo reservado.

Esperado: **habilitado, sujeto al `AGENTS.md`.** La última revisión aprueba `<SHA-2>`, que es el último commit.

## Caso 3: todas "no"

- Revisión 1, sobre `<SHA-1>`: `Veredicto: cambios`, `Reservado: no`.
- Revisión 2, sobre `<SHA-2>`: `Veredicto: aprobar`, `Reservado: no`.

Esperado: **habilitado, sujeto al `AGENTS.md`.** Sin preguntar, solo si los archivos y el diff entran en "Lo mergea Claude sin preguntar" y en nada de "Lo aprueba Sergio Urcullo, siempre".

## Caso 4: "sí" y solo el pedido de resolver

- Revisión 1, sobre `<SHA-2>`: `Veredicto: aprobar`, `Reservado: sí, porque toca una regla de merge`.
- Lo único de Sergio Urcullo es el pedido de llevar o resolver el issue, por ejemplo el `/goal` de "Cómo lo arranca Sergio Urcullo".

Esperado: **frena.** El pedido de llevar el issue no es la aprobación de lo reservado.

## Caso 5: información incompleta

- Revisión 1, sobre `<SHA-1>`: sin la línea `Reservado:`.
- Revisión 2, sobre `<SHA-2>`: `Veredicto: aprobar`, `Reservado: no`.
- No hay comentario que cite a Sergio Urcullo.

Esperado: **frena.** Una revisión sin `Reservado:` cuenta como duda, y no se da el permiso por supuesto. Lo mismo si la lista de comentarios se ve cortada.
