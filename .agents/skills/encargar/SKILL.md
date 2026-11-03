---
name: encargar
description: Pasa una tarea acotada de un área (un borrador, un análisis, un cambio de archivos) a un Codex nuevo con una ficha cerrada, en vez de hacerla en el chat largo de la sesión, y lee el resultado antes de usarlo. Usala cuando la sesión de un área tenga una tarea que se pueda describir entera en una ficha, o cuando su contexto ya esté cargado y la tarea no necesite la conversación.
---

# Encargar una tarea a un Codex nuevo

La sesión del área decide qué se hace y revisa el resultado. El trabajo lo hace un Codex que arranca con el contexto limpio y solo recibe la ficha. Es el mismo patrón que usaba Grok Bot con `onia-llm`: un encargo cerrado por tarea ([onia-llm](../../../docs/harness/onia-llm.md), historia).

Para llevar un issue de GitHub de punta a punta, hasta el PR y el merge, se usa [`llevar-issue`](../llevar-issue/SKILL.md). Esta skill es para lo de todos los días dentro de un área.

## Frenos

- Rigen los frenos y la lista "Lo aprueba Sergio Urcullo, siempre" del `AGENTS.md`. Se leen ahí y no se copian acá.
- **Cada encargo es una sola tarea, de unos 30 minutos como mucho,** como dice el `AGENTS.md`. Si no entra, se parte en varios.
- **Quien recibe el encargo no hace commit, push, merge ni deploy, y no publica ni envía nada.** Eso lo hace la sesión del área, por PR, después de revisar el resultado.
- **Nunca** se usan `danger-full-access`, `--dangerously-bypass-approvals-and-sandbox` ni `--yolo`.
- **La ficha no lleva secretos ni datos de clientes.** Si la tarea los necesita, no se encarga.
- **Lo que devuelve el encargo es un borrador.** No se le pasa a Sergio Urcullo ni a otra área sin leerlo.

## Cuándo sí y cuándo no

| Sí | No |
|---|---|
| Un borrador de texto, guion, mensaje o página, con su formato | Algo que necesita lo que Sergio Urcullo dijo en el chat y todavía no está en el repo: primero se anota en el estado del área |
| Un análisis de archivos del repo o de una carpeta | Una decisión que le toca a Sergio Urcullo |
| Un cambio chico de archivos en el worktree del área | Algo que pide un login, una cuenta o el navegador con sesión |
| Una revisión en solo lectura de lo que hizo otro | Una tarea de menos de 2 minutos: se hace directo |

## Pasos

1. **Carpeta de notas,** fuera del worktree para que no entre al commit: `C:/dev/worktrees/ONIA-CENTRAL/<sesión>-notas/<AAAA-MM-DD>-<tarea>/`.
2. **Ficha** en `ficha.md`, con la plantilla de abajo. Tiene que alcanzar sola: quien la recibe no ve el chat.
3. **Lanzar** desde el worktree del área, con el prompt en el archivo. El modo depende de la tarea:
   - leer y devolver un texto: `--sandbox read-only`, que es el modo por defecto de `codex exec`;
   - cambiar archivos del worktree: `--sandbox workspace-write`.

   Se lanza desde Git Bash, como en `llevar-issue`:

   ```bash
   codex exec --sandbox read-only --ephemeral --json -o <notas>/resultado.md - < <notas>/ficha.md > <notas>/uso.jsonl
   ```

   No se lanza desde PowerShell 5.1: `<` no redirige la entrada, `>` guarda en UTF-16 y, por tubería, las tildes de la ficha le llegarían a Codex como `?`.

   Fuente de las opciones `--sandbox`, `--json`, `-o`, `--ephemeral` y `-`: [modo no interactivo de Codex](https://learn.chatgpt.com/docs/non-interactive-mode). Va sin `-p <área>`: ese perfil trae el navegador del área, que ya usa la sesión, y cada perfil lo usa una sola sesión a la vez (`AGENTS.md`). El encargo no usa el navegador.
4. **Leer lo que devolvió,** con los controles de "Cómo se lee lo que devuelven", de `llevar-issue`: código de salida 0 y `resultado.md` no vacío; con `--json`, además, al menos un `turn.completed` y ningún `turn.failed` ni `error` en `uso.jsonl`. Con `workspace-write`, además, `git status --porcelain` en el worktree, que muestra también los archivos nuevos: tiene que tocar solo los de la ficha.
5. **Revisar contra la ficha:** se cumple cada punto de "Terminado cuando", los datos tienen fuente y no aparecen secretos ni datos de clientes. Si falta algo, se lanza un encargo nuevo con una ficha corregida que dice qué faltó. No se sigue la conversación del encargo anterior.
6. **Revisión independiente, una sola,** si el resultado va a un PR: la pide el `AGENTS.md` ("Una sola revisión escrita en cada PR"), y la hace otro Codex nuevo en solo lectura, con una ficha de revisión que lleva el encargo, el cambio y la evidencia, sin el razonamiento del autor.
7. **Anotar en el estado del área** qué se encargó, dónde quedó el resultado y qué sigue. Si Sergio Urcullo corrigió algo durante la tarea, la corrección se anota en el estado en ese mismo momento, para que el próximo encargo la lleve.

## Plantilla de la ficha

```markdown
# Encargo: <qué, en una línea>

Sos un Codex que recibe un encargo de la sesión <área> de ONIA. No ves su conversación: todo lo que necesitás está acá.
Leé el AGENTS.md y respetá sus frenos. No hagas commit, push, merge ni deploy, y no publiques ni envíes nada.

## Objetivo
<qué hay que lograr y para qué, en dos o tres líneas>

## Leé primero
- <ruta del archivo 1>: <qué sacar de ahí>
- <ruta del archivo 2>
- Lecciones que aplican: <copiá solo las líneas de docs/lecciones.md o del estado del área que tocan esta tarea>

## Podés tocar
- <archivos o carpeta>; nada más. (O "Nada: solo leé y devolvé texto".)

## Terminado cuando
- [ ] <comprobación 1, que se pueda verificar>
- [ ] <comprobación 2>

## Devolvé
<formato exacto: un archivo, una tabla, un borrador con N opciones, etc.>
Al final, una sección "No pude comprobar" con lo que quedó sin verificar.
```

## Errores comunes

- **La ficha dice "como hablamos" o "lo de antes".** Quien la recibe no vio el chat. Se escribe el dato o la ruta donde está.
- **Encargar algo que todavía depende de una decisión de Sergio Urcullo.** El encargo inventa la decisión. Primero se le pregunta a él, después se encarga.
- **Seguir la conversación del encargo para corregirlo.** Así se pierde el contexto limpio. Se lanza uno nuevo, con la ficha corregida.

## Sin probar todavía

Esto quedó sin comprobar al escribir la skill, el 2-nov. La primera sesión que lo pruebe lo anota acá, por PR:

- lanzar `codex exec` desde dentro de una sesión de Codex abierta con `codex -p <área>`. Puede necesitar el permiso de Codex para correr el comando;
- que esa sesión, abierta desde PowerShell, pueda correr el comando en Git Bash;
- `codex exec --sandbox workspace-write` en la PC de ONIA, que `llevar-issue` también marca como no probado.
