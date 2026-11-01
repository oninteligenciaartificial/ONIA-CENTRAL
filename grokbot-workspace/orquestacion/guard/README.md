# Guard fijo OnIA

`./onia-guard check <accion> '<texto-comando>'` devuelve 0 si permite y 3 si bloquea. Nunca ejecuta el texto recibido. Reconoce push, deploy, pago, publicar y mensaje-cliente; normaliza mayúsculas, acentos y comillas. En prompts admite negaciones iniciales inequívocas. Es un filtro determinista conservador, no un intérprete completo de lenguaje natural ni un aislamiento de seguridad contra código arbitrario.

## Aprobaciones

Lee exclusivamente `/workspace/decisiones/aprobaciones.jsonl`. No se ha creado ni modificado ese registro. Cada línea debe contener `id` no vacío, `accion`, `alcance`, `aprobado_por` exactamente `Sergio`, `ts` y `expira` en ISO 8601 con zona horaria. Debe cumplirse `ts <= ahora < expira`.

`alcance` debe ser exactamente el texto revisado, quitando espacios exteriores: no se aceptan comodines ni coincidencias parciales. `accion` puede ser una categoría (`push`, `deploy`, `pago`, `publicar`, `mensaje-cliente`) o el nombre de la entrada que realiza la comprobación (`onia-llm`, `onia-central`, `onia-loop`, `onia-llm-comando`, `onia-central-prompt`, `onia-loop-prompt`). Una aprobación de categoría no cubre otras categorías de un comando compuesto. Una aprobación de entrada cubre únicamente ese texto exacto en esa entrada. Un registro ausente, ilegible o inválido no autoriza acciones.

El registro debe administrarse por Sergio mediante permisos externos: el campo `aprobado_por` no es una firma criptográfica. No guardar secretos en los alcances.

## Integraciones

- `/workspace/onia-central-sistema/bin/onia-central`: comprueba argumentos antes del despacho, órdenes antes de subprocess y prompts antes del motor. `--guard-seco '<texto>'` comprueba sin ejecutar.
- `/workspace/harness/bin/onia-loop`: comprueba argumentos y cada llamada al motor; `comando --seco '<comando>'` valida sin ejecutar. `comando '<comando>'` pasa por el guard y una lista cerrada antes de ejecutar sin shell. Solo acepta `ls`, `mkdir` con rutas dentro de `/workspace`, y `git status/diff/log` con opciones limitadas. No admite tuberías, redirecciones, sustituciones ni comandos compuestos. Las aprobaciones no amplían esta lista.
- Ambos usan por defecto `/workspace/orquestacion/guard/onia-llm.preparado`, por lo que reciben la nueva protección aunque el lanzador externo siga pendiente. Una variable `ONIA_LLM_BIN` puede seleccionar otro lanzador; esa selección es configuración de confianza y no garantiza los hooks del preparado.
- `onia-llm.preparado`: copia modificada del lanzador original. Revisa prompt por argumentos o stdin antes del motor y del lanzamiento en segundo plano; avisa en escritura. `--guard-seco` termina tras validar, sin motor. Añade `claude-settings.json` y `claude-hook` para comprobar cada Bash; en loops se aplica también la lista cerrada. Los hooks solo cubren Bash, no herramientas externas o conectores.
- Codex no dispone aquí del hook Bash de Claude: los loops Codex se rechazan con 3 y sin reintento de motor, también en lectura. Esta limitación requiere resolver la intercepción del motor antes de habilitarlo en loops. Fuera del loop, Codex conserva su sandbox original y solo recibe el control previo del prompt.

**Pendiente:** aplicar `onia-llm.patch` a `/home/box/.local/bin/onia-llm` desde un entorno autorizado para escribir allí. Esta sesión no puede modificar esa ruta. El parche y la copia están preparados; no se ha instalado fuera de `/workspace`.

## Registro y pruebas

`bloqueos.jsonl` registra fecha, entrada, categorías, resultado y SHA-256 del texto. No conserva comandos, prompts, identificadores de aprobación ni valores secretos. Escritura en append con candado; si falla el registro, el bloqueo permanece.

Ejecutar `bash /workspace/orquestacion/guard/test-guard.sh` desde cualquier carpeta. Usa dry-run, inspección del hook y fixtures locales; nunca motores ni comandos externos sensibles. `test-salida.txt` contiene la última ejecución. Las carpetas `pruebas-*` conservan fixtures de aprobaciones y bloqueos, aislados del registro real; no se borraron archivos. Las pruebas cubren las cinco categorías en cada herramienta, permitidos, variantes, negaciones, lista cerrada, aprobación vigente y caducada, alcance/autor/acción incorrectos, fechas inválidas, registros malformados y sintaxis. Los hooks del CLI no se probaron lanzando Claude para evitar gasto.
