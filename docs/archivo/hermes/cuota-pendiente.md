> Archivado 31-oct-2026: Hermes fue reemplazado por los agentes Grok Bot. Esto no se aplica: era el pendiente para que Hermes leyera su cuota. No cambia permisos ni configuración.

# Lo que falta afuera para leer la cuota desde Hermes

Esto no está aplicado. Es lo que falta para que Hermes corra `hermes usage --provider openai-codex --json` por su cuenta, en vez de pedirle la salida a Sergio Urcullo, como dice "Freno por cuota" en `SKILL.md`. Tocar `approvals.deny` es cambiar los permisos: lo aprueba Sergio Urcullo, siempre, como dice el `AGENTS.md`.

## Qué pasa hoy

- Según lo visto en la sesión del #70 (31-oct, sin enlace), `approvals.deny` tiene un patrón `hermes*` que frena todos los comandos de Hermes, también `hermes usage`. Hay que confirmarlo con la lectura de abajo.
- La lista que documenta `docs/decisiones/2026-10-28-hermes-oficial.md` (líneas 171-195) tiene 21 patrones y no ese. Si la lectura lo confirma, la lista aplicada no coincide con la documentada.
- Hermes no rodea el bloqueo. La documentación dice que un comando frenado devuelve BLOCKED y que el agente no lo reintenta ni lo reformula (`user-guide/security.md`, línea 178).

## Por qué no alcanza con sacar `hermes*`

- `approvals.deny` es una lista de bloqueo. La documentación no describe una excepción que deje pasar un solo comando que la lista frena (`user-guide/security.md`, líneas 157-184). `command_allowlist` es otra cosa: aprueba solos los comandos peligrosos y tiene que seguir vacía, como dice `docs/lecciones.md`.
- Sacar `hermes*` no deja pasar solo `hermes usage`: deja pasar cualquier comando de Hermes que no frene otro patrón. La decisión de Hermes nombra varios que los 21 patrones no cubren, como `hermes --oneshot`, `dashboard`, `import`, `fallback`, `pairing`, `logout` y `uninstall`, y avisa que esa lista no es completa (líneas 183-194).
- Un patrón no es un sandbox (`user-guide/security.md`, línea 183). Aun bien armada, la lista frena texto, no capacidades.

## Qué hace falta, en orden

1. **Leer lo aplicado.** Sergio Urcullo corre, en una PowerShell abierta desde el menú Inicio, `hermes config get approvals.deny` (`reference/cli-commands.md`, línea 1351) y pega la salida. Solo lee.
2. **Proponer la lista nueva entera por PR,** no una receta para reemplazar `approvals.deny`. El PR dice qué patrón cambia, qué comandos de Hermes deja pasar y cuáles siguen frenados, con las reglas de la documentación: globs `fnmatch`, sin distinguir mayúsculas, contra el comando entero y contra cada comando que contiene (`user-guide/security.md`, líneas 171-175).
3. **Probar sin ejecutar.** La versión instalada sí trae `hermes approvals test --json -- <comando>`, un diagnóstico oficial sin ejecutar el comando, sin prompts ni persistencia (`hermes_cli/approvals_test.py:1-10,132-147`; despacho en `hermes_cli/approvals_suggest.py:374-376`). Sergio lo corre desde su PowerShell porque el bloqueo general también impide al agente usar este diagnóstico. La prueba usa la lista aplicada, no una lista propuesta: primero se revisan los patrones propuestos; después de la aprobación y aplicación se comprueba con este diagnóstico que `hermes usage --provider openai-codex --json` y `hermes insights` pasen, y que configuración, logins, `--oneshot`, `-z` y demás operaciones reservadas sigan frenadas. La tabla incluye variantes de push a main/master, merge por API y el comando restringido de Claude. Si no hay un resultado comprobado, el freno queda manual. No se ejecutan operaciones peligrosas para probarlas.
4. **Aprobación específica de Sergio Urcullo,** citada con sus palabras en el PR, que nombre el cambio de `approvals.deny`. El pedido de llevar el #70 no es esa aprobación.
5. **La aplica Sergio Urcullo,** con `hermes config set approvals.deny`, desde su PowerShell, como dice el `AGENTS.md` en "Hermes". Va entre comillas dobles con los elementos entre simples, como dice `docs/lecciones.md`, y antes se prueba que PowerShell la lea con `ParseInput`, sin correrla.
6. **Leer después.** Sergio Urcullo vuelve a correr `hermes config get approvals.deny` y pega la salida. Recién ahí Hermes corre una vez `hermes usage --provider openai-codex --json` y se anota el resultado en el PR. Los cambios en `approvals.deny` valen al instante (`user-guide/security.md`, línea 180).

Mientras falte algo de esto, rige el pedido manual de `SKILL.md`.

## Claude Max

No hay un comando probado para leer la cuota de Claude Max desde Hermes. `claude -p "/usage"` no está probado, y `hermes usage --provider anthropic` lee la credencial de Anthropic de Hermes, no el login de Claude Code (`reference/cli-commands.md`, línea 719). Hasta que haya un mecanismo probado y aprobado, sigue la lectura manual de Sergio Urcullo.
