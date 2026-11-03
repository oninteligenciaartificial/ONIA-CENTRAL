# Plan para aprender IA y agentes

> **Hermes es historia desde el 31-oct-2026,** y el 1-nov ya no estaba en la PC (`AGENTS.md`, "Hermes y Grok Bot: historia"). Ningún ejercicio corre `hermes`: los que lo hacían ahora usan Claude Code o Codex. Lo demás que el plan cuenta de Hermes (lo que ya viste, las lecturas y las tablas que lo comparan) queda como ejemplo de un agente que se usó; no hace falta tenerlo instalado.

Para Sergio Urcullo. Lo pidió el 28-oct-2026 en el [issue #8](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/8). Arranca el lunes 2-nov-2026.

**Para qué:** entender qué hacen por dentro Claude Code, Codex y Hermes, y poder hacer a mano lo básico, sin IA: moverte en la terminal, usar git, revisar un PR y leer lo que devuelve una API. No hace falta programar.

**Tema actual:** el que marca el calendario. Si Sergio Urcullo se atrasa o se adelanta, se cambia esta línea, por ejemplo: "Tema actual: 4, desde el 18-ene". El agente que se entera lo anota en un issue, y el cambio entra por PR, como todo.

## Desde dónde arranca

- Usa agentes todos los días.
- Hoy no hace a mano git ni PRs, no programa, no llamó nunca a una API y no sabría explicar qué es un token o la ventana de contexto. Lo contestó él el 28-oct.
- Tiene de 1 a 2 horas por semana.
- Supuesto: aprende mejor haciendo. Por eso cada tema arranca de algo que ya vio con sus agentes. Si no es así, se cambia el plan.

## Ritmo

- **Alcanza con una sesión de 45 minutos por semana.** En un tema de 2 semanas, la primera es para "Lo básico" y la segunda para el ejercicio. Los temas de 3 semanas suman una semana más de práctica.
- **Si en la semana hay una segunda sesión,** es para lo que dice "Si te sobra tiempo". No hace falta para pasar de tema.
- **Cada tema termina con la prueba "Lo tenés cuando".** Si no sale, se repite el ejercicio antes de seguir.
- **Son 11 temas en unos 6 meses**, del 2-nov-2026 al 16-may-2027, con dos semanas libres en las fiestas.
- **Si una semana no hay tiempo,** todo se corre una semana y se actualiza "Tema actual". No se recupera de golpe.
- **Muchas fuentes oficiales están solo en inglés.** Se puede pedir a un agente que traduzca o explique un párrafo, pero el ejercicio se hace a mano.

## Para practicar sin riesgo

- Ningún ejercicio gasta plata ni pide claves nuevas.
- Ningún ejercicio corre `hermes`: ver el aviso del inicio.
- Los ejercicios de git se hacen en una carpeta de práctica, `C:\dev\practica-git`, no en ONIA-CENTRAL. En ONIA-CENTRAL solo se mira.
- Donde dice "solo mirar", no se cambia nada.
- Ningún secreto va al chat ni a un archivo, tampoco para practicar.

## Calendario

| # | Tema | Semanas |
|---|---|---|
| 1 | El bucle de un agente | 2-nov al 15-nov |
| 2 | Qué es un modelo y qué es un token | 16-nov al 29-nov |
| 3 | La ventana de contexto | 30-nov al 13-dic |
| – | Repaso de 1 a 3 | 14-dic al 20-dic |
| – | Libre | 21-dic al 3-ene |
| 4 | La terminal: PowerShell | 4-ene al 24-ene |
| 5 | Git y PRs a mano | 25-ene al 14-feb |
| 6 | Las instrucciones del agente: AGENTS.md, SOUL.md, memoria y skills | 15-feb al 28-feb |
| 7 | Herramientas y MCP | 1-mar al 14-mar |
| 8 | Aprobaciones, sandbox y prompt injection | 15-mar al 28-mar |
| 9 | HTTP y APIs con curl | 29-mar al 11-abr |
| 10 | Credenciales: logins, OAuth y claves de API | 12-abr al 25-abr |
| 11 | Arquitecturas de agentes | 26-abr al 16-may |

## Temas

### 1. El bucle de un agente

**Ya lo viste:** Claude Code o Hermes te piden aprobar un comando, lo corren y siguen solos.

**Qué vas a entender:** un agente es un modelo más un programa que repite un bucle: el modelo lee todo lo que tiene delante, decide, pide una herramienta (leer un archivo, correr un comando); el programa la ejecuta, a veces con tu aprobación, y el resultado vuelve al modelo. Sigue hasta que el modelo decide que terminó. La diferencia entre un flujo fijo, con pasos escritos de antemano, y un agente, que elige sus pasos.

**Lo básico:**
- [Cómo funciona Claude Code](https://code.claude.com/docs/es/how-claude-code-works), docs de Anthropic, en español.

**Ejercicio:**
1. Pedile a Claude Code, en ONIA-CENTRAL: "¿cuál fue el último commit y qué hay en la carpeta `otros/`?". Para contestar tiene que usar herramientas. Anotá en papel cada paso: qué herramienta pidió, qué aprobaste y qué volvió.
2. Repetilo con Codex, abierto en ONIA-CENTRAL para que lea el `AGENTS.md`. Compará los dos papeles.

**Si te sobra tiempo:**
- [Building effective AI agents](https://www.anthropic.com/research/building-effective-agents), Anthropic, dic-2024. Hasta "When (and when not) to use agents": flujo fijo o agente.
- [Agent Loop Internals](https://hermes-agent.nousresearch.com/docs/developer-guide/agent-loop), docs de Hermes. Solo la lista "Core Responsibilities".
- Curso: [Claude Code 101](https://academy.claude.com/courses/claude-code-101), Anthropic Academy, gratis, en inglés.

**Lo tenés cuando:** le podés explicar a otra persona, sin mirar, qué pasa entre que escribís un pedido y el agente contesta, y qué parte hace el modelo y qué parte el programa.

### 2. Qué es un modelo y qué es un token

**Ya lo viste:** el cupo de tu plan se gasta en tokens; los agentes a veces "piensan" antes de contestar; la misma pregunta da respuestas distintas.

**Qué vas a entender:**
- Un modelo de lenguaje predice el pedazo de texto que sigue, y esos pedazos son los tokens. Cada modelo corta el texto a su manera.
- Primero se entrena con muchísimo texto y después se ajusta con personas que califican respuestas. Por eso puede inventar con seguridad: predice algo que suena bien, no consulta una base de datos.
- Elige cada token con algo de azar: por eso la misma pregunta da respuestas distintas.
- "Pensar" es escribir tokens de razonamiento antes de la respuesta. También se cuentan.
- El agente y el modelo son cosas distintas. Hermes Agent es el programa; tu Hermes piensa con un modelo de OpenAI, por la suscripción de ChatGPT. Nous Research, que hace Hermes Agent, también entrena modelos propios que se llaman Hermes.

**Lo básico:**
- [Tokenizer](https://platform.openai.com/tokenizer), OpenAI. Anda sin login.
- [Large Language Models explained briefly](https://www.3blue1brown.com/lessons/mini-llm/), 3Blue1Brown, 8 minutos. No es de un proveedor, pero es la referencia para entenderlo sin matemática.

**Ejercicio:**
1. En el tokenizador de OpenAI, pegá la misma frase en español y en inglés y contá los tokens de cada una. Después pegá el primer párrafo del `AGENTS.md`.
2. Mirá el video corto de 3Blue1Brown y anotá en una línea qué es un token y qué es entrenar.

**Si te sobra tiempo:**
- [Transformers, the tech behind LLMs](https://www.3blue1brown.com/lessons/gpt/), 3Blue1Brown, no oficial.
- Curso: [AI capabilities and limitations](https://academy.claude.com/courses/ai-capabilities-and-limitations), Anthropic Academy, gratis, en inglés.
- Papers, solo el resumen del principio: [Attention Is All You Need](https://arxiv.org/abs/1706.03762) (2017, el Transformer) y [InstructGPT](https://arxiv.org/abs/2203.02155) (2022, el ajuste con personas).
- [Hermes 4 Technical Report](https://arxiv.org/abs/2508.18255), Nous Research, solo el resumen: cómo entrenan sus modelos.
- [Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g), charla de una hora de Andrej Karpathy en su canal, no oficial. Mirala en dos sesiones.

**Lo tenés cuando:** podés explicar qué es un token, por qué el español gasta más que el inglés y por qué un modelo puede inventar un dato.

### 3. La ventana de contexto

**Ya lo viste:** "contexto y tokens"; las sesiones largas que se compactan; el agente que se olvida de algo que dijiste al principio; tu regla de un objetivo por sesión.

**Qué vas a entender:** el modelo no tiene memoria entre mensajes. Cada vez recibe de nuevo todo junto: sus instrucciones, el `AGENTS.md`, la lista de herramientas y la conversación entera. Eso es la ventana de contexto. Cuando se llena, el programa resume lo viejo (compactar) y se pierden detalles. Lo que queda en el medio de una ventana larga se aprovecha peor.

**Lo básico:**
- [Explorar la ventana de contexto](https://code.claude.com/docs/es/context-window), docs de Claude Code, en español. Explica `/context`.

**Ejercicio:**
1. En una sesión de Claude Code, escribí `/context` y anotá qué ocupa más lugar.
2. Escribí en una frase por qué conviene una sesión nueva para cada objetivo.

**Si te sobra tiempo:**
- [Ventanas de contexto](https://platform.claude.com/docs/es/build-with-claude/context-windows), docs de la API de Claude, en español.
- [Effective context engineering for AI agents](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents), Anthropic, sep-2025.
- [Context Compression and Caching](https://hermes-agent.nousresearch.com/docs/developer-guide/context-compression-and-caching), docs de Hermes.
- Paper: [Lost in the Middle](https://arxiv.org/abs/2307.03172) (2023), solo el resumen y la primera figura.

**Lo tenés cuando:** podés decir qué llena la ventana de tu sesión de Claude Code y por qué una sesión larga empieza a fallar.

### 4. La terminal: PowerShell

**Ya lo viste:** los comandos que te preparan los agentes para pegar en una PowerShell abierta desde Inicio.

**Qué vas a entender:** la carpeta actual y las rutas; qué es un comando, sus argumentos y sus opciones; las variables de entorno y el `PATH`, que es por qué `codex` anda desde cualquier carpeta; la codificación de un archivo; por qué un comando que baja y corre un script de internet (`irm … | iex`) pide más cuidado que uno que solo lee.

**Lo básico:**
- PowerShell 101, Microsoft Learn, en español: [Introducción a PowerShell](https://learn.microsoft.com/es-es/powershell/scripting/learn/ps101/01-getting-started?view=powershell-5.1) y [Detección de objetos, propiedades y métodos](https://learn.microsoft.com/es-es/powershell/scripting/learn/ps101/03-discovering-objects?view=powershell-5.1). Saltá los pasos que piden abrir PowerShell como administrador o correr `Set-ExecutionPolicy` o `Update-Help`: cambian el sistema y no hacen falta.

**Ejercicio:**
1. Corré, de a uno, y anotá qué hace cada uno: `Get-Location`, `Set-Location C:\dev\proyectos\ONIA-CENTRAL`, `Get-ChildItem`, `Get-Content AGENTS.md -TotalCount 10 -Encoding UTF8`, `Get-Command codex -All` y `$env:PATH -split ';'`.
2. Probá el `Get-Content` sin `-Encoding UTF8` y mirá cómo salen los acentos. Un archivo es una fila de números, y la codificación dice qué letra es cada uno. PowerShell 5.1 no adivina UTF-8.
3. Con `Get-Help Get-ChildItem -Online`, abrí la ayuda oficial de un comando sin preguntarle a nadie.
4. Tomá un comando largo de `docs/decisiones/2026-10-28-hermes-oficial.md` y, sin correrlo, explicá en papel cada parte.

**Si te sobra tiempo:**
- [Sistema de ayuda](https://learn.microsoft.com/es-es/powershell/scripting/learn/ps101/02-help-system?view=powershell-5.1), el capítulo 2 de PowerShell 101. En esta PC la ayuda local no está instalada: usá `Get-Help <comando> -Online`.
- [about_Environment_Variables](https://learn.microsoft.com/es-es/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-5.1), Microsoft Learn, en español: variables de entorno y `PATH`.

**Lo tenés cuando:** antes de pegar un comando que te pasó un agente, podés decir qué hace cada parte, o buscarlo con `Get-Help <comando> -Online`.

### 5. Git y PRs a mano

**Ya lo viste:** los PRs que abren los agentes; la regla de que `main` cambia solo por PR; los worktrees donde trabaja cada sesión de Claude.

**Qué vas a entender:** un repositorio guarda la historia de una carpeta. Un commit es una foto con mensaje; una rama, una línea de trabajo aparte; un diff, lo que cambió; un PR, el pedido de sumar una rama a `main`, con revisión antes del merge. Un worktree es otra carpeta con el mismo repo en otra rama: así cada sesión de Claude trabaja sin pisar a las demás.

**Lo básico:**
- Pro Git, el libro oficial de git, en español: [Guardando cambios en el repositorio](https://git-scm.com/book/es/v2/Fundamentos-de-Git-Guardando-cambios-en-el-Repositorio) y [Procedimientos básicos para ramificar y fusionar](https://git-scm.com/book/es/v2/Ramificaciones-en-Git-Procedimientos-B%C3%A1sicos-para-Ramificar-y-Fusionar).

**Ejercicio:**
1. En ONIA-CENTRAL, solo mirar: `git status`, `git log --oneline -10`, `git show --stat HEAD`, `git branch -a` y `git worktree list`.
2. En la carpeta de práctica, pegá los comandos de a uno. Cuando se abre Notepad, PowerShell no lo espera: escribí una línea, guardá y cerrá Notepad antes de pegar el comando siguiente. Si pregunta si crea el archivo, decile que sí.

   ```powershell
   New-Item -ItemType Directory C:\dev\practica-git
   Set-Location C:\dev\practica-git
   git init
   notepad notas.txt
   git add notas.txt
   git commit -m "Primera nota"
   git switch -c prueba
   notepad notas.txt
   git diff
   git commit -am "Cambio la nota"
   git switch master
   git merge prueba
   git log --oneline
   ```

   En esta PC, `git init` arranca en la rama `master`. El archivo se edita con Notepad y no con `'hola' > notas.txt`, porque PowerShell 5.1 lo guardaría en otra codificación y `git diff` lo tomaría como un archivo binario.
3. En GitHub, abrí un PR que te haya hecho un agente y leé "Files changed" línea por línea antes de darle el OK.

**Si te sobra tiempo:**
- [Pro Git](https://git-scm.com/book/es/v2) entero, los capítulos 1 a 3.
- [Pull requests](https://docs.github.com/es/pull-requests/reference/pull-requests), GitHub Docs, en español.
- [GitHub Skills](https://github.com/skills), cursos interactivos de GitHub, en inglés. Crean repos de práctica en tu cuenta que pueden quedar públicos: no pongas nada privado.

**Lo tenés cuando:** podés hacer un commit en una rama sin ayuda y contar qué cambia un PR leyendo su diff.

### 6. Las instrucciones del agente: AGENTS.md, SOUL.md, memoria y skills

**Ya lo viste:** el `AGENTS.md` de este repo, el `SOUL.md` de Hermes, la memoria de Claude, la skill `investigar-referente` y el canario "Sergio Urcullo,".

**Qué vas a entender:** qué lee cada agente siempre (sus instrucciones y el `AGENTS.md`) y qué lee solo cuando hace falta (una skill: el agente ve su nombre y su descripción, y abre el resto si le sirve). En qué se diferencian una instrucción, una memoria y una skill. Por qué el canario avisa que el agente perdió sus reglas: está en el archivo global de cada agente (`~/.claude/CLAUDE.md`, `~/.codex/AGENTS.md` y el `SOUL.md` de Hermes); si no lo cargó, por ejemplo en otra cuenta o en una sesión en la nube, o si en una sesión muy larga o compactada las instrucciones pierden peso, deja de saludar así.

**Lo básico:**
- [Which File Does What?](https://hermes-agent.nousresearch.com/docs/user-guide/which-file-does-what), docs de Hermes.
- Cómo Claude recuerda tu proyecto, docs de Claude Code, en español. Solo dos secciones: [CLAUDE.md y la memoria automática](https://code.claude.com/docs/es/memory#claude-md-vs-auto-memory) y [AGENTS.md](https://code.claude.com/docs/es/memory#agents-md).

**Ejercicio:**
1. Armá una tabla con Claude Code, Codex y Hermes: qué archivo de instrucciones lee cada uno, de dónde y si tiene memoria. La respuesta de Hermes está en su página "Which File Does What?".
2. Leé `.agents/skills/investigar-referente/SKILL.md`, la skill de ONIA que cargan los tres agentes. Marcá qué parte ve siempre el agente (el nombre y la descripción de arriba) y qué parte abre solo si la necesita (el resto).

**Si te sobra tiempo:**
- [Use SOUL.md with Hermes](https://hermes-agent.nousresearch.com/docs/guides/use-soul-with-hermes), docs de Hermes.
- [Extender Claude con skills](https://code.claude.com/docs/es/skills), docs de Claude Code, en español.
- [Custom instructions with AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md), docs de Codex, y [agents.md](https://agents.md/), el estándar que comparten.
- [Equipping agents with Agent Skills](https://www.anthropic.com/research/equipping-agents-for-the-real-world-with-agent-skills), Anthropic, oct-2025.
- Curso: [Introduction to agent skills](https://academy.claude.com/courses/introduction-to-agent-skills), Anthropic Academy, gratis, en inglés.

**Lo tenés cuando:** sabés dónde escribir una regla para que la lea un solo agente o los tres, y por qué.

### 7. Herramientas y MCP

**Ya lo viste:** los conectores de Claude (Gmail, Notion, Supabase, Vercel) y las herramientas de Hermes que elegiste con `hermes tools`.

**Qué vas a entender:** una herramienta es una función con nombre, descripción y datos de entrada. El modelo no la ejecuta: pide usarla, y el programa la corre. MCP es el enchufe estándar para sumar herramientas: el agente es el cliente y cada conector es un servidor. En Hermes, cada herramienta ocupa lugar en la ventana aunque no se use. Claude Code puede cargar primero solo los nombres de las herramientas MCP y buscar el resto cuando le hacen falta.

**Lo básico:**
- [What is MCP?](https://modelcontextprotocol.io/docs/getting-started/intro), docs oficiales de MCP. La versión vigente es la del 28-jul-2026.
- [Cómo funciona el uso de herramientas](https://platform.claude.com/docs/es/agents-and-tools/tool-use/how-tool-use-works), docs de la API de Claude, en español.

**Ejercicio:**
1. Elegí un conector y leé la lista de sus herramientas con sus descripciones. Marcá cuáles solo leen y cuáles cambian algo.
2. En Claude Code, escribí `/mcp`, elegí ese conector y contá cuántas herramientas tiene.

**Si te sobra tiempo:**
- [Architecture overview](https://modelcontextprotocol.io/docs/learn/architecture), docs de MCP.
- [Conectar Claude Code a herramientas mediante MCP](https://code.claude.com/docs/es/mcp), en español, y [MCP en Hermes](https://hermes-agent.nousresearch.com/docs/user-guide/features/mcp).
- [Writing effective tools for AI agents](https://www.anthropic.com/research/writing-tools-for-agents), Anthropic, sep-2025.
- Curso: [Introduction to Model Context Protocol](https://academy.claude.com/courses/introduction-to-model-context-protocol), Anthropic Academy, gratis, en inglés. Las primeras lecciones; la parte de programar, para después.
- Paper: [Toolformer](https://arxiv.org/abs/2302.04761) (2023), solo el resumen: cómo un modelo aprende a pedir herramientas.

**Lo tenés cuando:** podés explicar la diferencia entre una skill, una herramienta y un servidor MCP.

### 8. Aprobaciones, sandbox y prompt injection

**Ya lo viste:** `approvals.mode: manual` en Hermes; la aprobación "always" que quedó guardada por error el 28-oct; los modos de sandbox de Codex; los modos de permisos de Claude Code; que se sacó Gmail de Codex.

**Qué vas a entender:** qué frena cada mecanismo y qué no. Una lista de comandos prohibidos no es un sandbox: un sandbox encierra al programa, una lista solo compara texto. Prompt injection: un texto en una página, un mail o un archivo que intenta darle órdenes al agente. La combinación peligrosa es un agente con datos privados, que lee contenido de afuera y puede mandar cosas hacia afuera.

**Lo básico:**
- [Los modos de permisos](https://code.claude.com/docs/es/permissions#permission-modes) de Claude Code, en español. Solo esa sección.
- [Sandbox and approvals](https://learn.chatgpt.com/docs/agent-approvals-security#sandbox-and-approvals), docs de Codex. Solo esa sección.

**Ejercicio:**
1. Compará en una tabla los modos de Codex y los de Claude Code: qué puede hacer el agente sin preguntarte en cada uno.
2. Escribí en una frase por qué a una aprobación de Hermes se contesta "once" y no "always".

**Si te sobra tiempo:**
- [Configurar permisos](https://code.claude.com/docs/es/permissions) entera y [Seguridad](https://code.claude.com/docs/es/security), docs de Claude Code, en español.
- [Agent approvals & security](https://learn.chatgpt.com/docs/agent-approvals-security) entera, docs de Codex.
- [Sandbox](https://learn.chatgpt.com/docs/sandboxing), docs de Codex.
- [Security](https://hermes-agent.nousresearch.com/docs/user-guide/security), docs de Hermes: aprobaciones, `approvals.deny` y por qué una lista no es un sandbox.
- [Making Claude Code safer with sandboxing](https://www.anthropic.com/research/claude-code-sandboxing), Anthropic, oct-2025.

**Lo tenés cuando:** ante un pedido de aprobación, sabés qué puede romper ese comando antes de decir que sí.

### 9. HTTP y APIs con curl

**Ya lo viste:** todo lo anterior viaja por HTTP. Cada vez que un agente piensa, manda la ventana entera a la API del modelo y recibe la respuesta.

**Qué vas a entender:** un pedido y una respuesta; la URL; el método (GET para leer, POST para mandar); los encabezados, donde viaja la clave; el JSON, que es como vienen los datos; los códigos de estado:
- 200: salió bien;
- 401: falta la clave o no vale;
- 403: la clave vale, pero no alcanza para eso;
- 404: no está;
- 429: demasiados pedidos seguidos;
- 529: la API de Claude está sobrecargada. Lo ves en Claude Code como "Overloaded".

**Lo básico:**
- MDN, en español: [Generalidades del protocolo HTTP](https://developer.mozilla.org/es/docs/Web/HTTP/Guides/Overview) y [Códigos de estado](https://developer.mozilla.org/es/docs/Web/HTTP/Reference/Status).

**Ejercicio:**
1. Corré `curl.exe -i https://api.github.com/repos/NousResearch/hermes-agent` y buscá en el JSON la licencia y las estrellas.
2. Corré lo mismo con `oninteligenciaartificial/ONIA-CENTRAL`. Da 404 porque el repo es privado: GitHub contesta "no está" en vez de "no tenés permiso" para no confirmar que existe.
3. Repetí el primero con `Invoke-RestMethod` en PowerShell y compará.
4. En la documentación de la API de Claude, señalá dónde van el modelo, los mensajes y la clave. No la llames: cuesta plata.

**Si te sobra tiempo:**
- [Trabajar con JSON](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Scripting/JSON), MDN, en español.
- [Tutorial de curl](https://curl.se/docs/tutorial.html), del proyecto curl.
- [Invoke-RestMethod](https://learn.microsoft.com/es-es/powershell/module/microsoft.powershell.utility/invoke-restmethod?view=powershell-5.1), Microsoft Learn, en español.
- [API de repositorios](https://docs.github.com/es/rest/repos/repos), GitHub Docs, en español.
- [Mensajes](https://platform.claude.com/docs/es/api/messages), referencia de la API de Claude, en español.

**Lo tenés cuando:** ves un error 401, 403, 404, 429 o 529 en un agente y sabés qué significa.

### 10. Credenciales: logins, OAuth y claves de API

**Ya lo viste:** el "Sign in with ChatGPT" de Hermes; `hermes auth`; el token de `gh`; las claves que quedaron en variables de Windows ([#7](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/7)); la bóveda de KeePassXC y `docs/credenciales.md`.

**Qué vas a entender:** la diferencia entre una contraseña, una clave de API y un token de OAuth. Con OAuth le das permiso a una app sin darle tu contraseña, y ese permiso tiene alcance (scopes), vence y se puede revocar. Por qué una variable de entorno de Windows la puede leer cualquier programa que corra con tu usuario. Por qué borrar un secreto de GitHub no alcanza: hay que revocarlo donde se creó.

**Lo básico:**
- [`docs/credenciales.md`](../docs/credenciales.md), de este repo: dónde vive cada secreto de ONIA.
- [Authentication](https://learn.chatgpt.com/docs/auth), docs de Codex: login con ChatGPT o con clave de API, y dónde se guarda.

**Ejercicio:**
1. Corré `gh auth status` y explicá qué muestra. Nunca le sumes `--show-token`.
2. Armá una tabla: con qué login entra cada agente (Hermes, Codex, Claude Code y `gh`) y cómo se le corta el acceso. Comparala con `docs/credenciales.md`.
3. Solo mirar: en GitHub, Settings > Applications, revisá qué apps tienen acceso a tu cuenta.

**Si te sobra tiempo:**
- [OAuth 2.0](https://oauth.net/2/) y [Getting started](https://oauth.net/getting-started/), en oauth.net. Es el sitio de referencia del estándar, pero no es del IETF.
- [RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749), el estándar de OAuth 2.0 (IETF). Solo la sección 1 y su primera figura.
- [Authentication](https://code.claude.com/docs/en/iam), docs de Claude Code, en inglés.
- [LLM and Model Providers](https://hermes-agent.nousresearch.com/docs/integrations/providers), docs de Hermes.
- [Revisar las aplicaciones OAuth autorizadas](https://docs.github.com/es/apps/oauth-apps/using-oauth-apps/reviewing-your-authorized-oauth-apps), GitHub Docs, en español.
- [Understanding Authorization in MCP](https://modelcontextprotocol.io/docs/tutorials/security/authorization), docs de MCP: cómo un conector pide permiso con OAuth. Está escrito para programadores.

**Lo tenés cuando:** podés decir, para cada agente, con qué se identifica y cómo le cortarías el acceso.

### 11. Arquitecturas de agentes

**Ya lo viste:** Hermes lanza a Claude Code y a Codex; las sesiones de Claude que abren otras sesiones; las revisiones de un agente nuevo, que no comparte el contexto del autor.

**Qué vas a entender:** los patrones de base: cadena de pasos, enrutador, tareas en paralelo, orquestador con trabajadores y evaluador que corrige. Los cinco son flujos: el programa fija la forma, aunque en el orquestador y en el evaluador el modelo decide más. Un agente es otra cosa: el bucle del tema 1, que elige sus propios pasos. Ese bucle tiene nombre: ReAct (razonar, actuar, mirar el resultado). Por qué un agente nuevo revisa mejor: no arrastra los supuestos del que escribió. Cuánto cuestan varios agentes: cada uno gasta su propia ventana.

**Lo básico:**
- [Building effective AI agents](https://www.anthropic.com/research/building-effective-agents), Anthropic, otra vez: ahora la parte de los patrones.

**Ejercicio:**
1. Dibujá en papel cómo está armado ONIA hoy: los tres proyectos, cada uno con su jefe en Claude o en Codex (`AGENTS.md`, "Equipo de agentes"), qué ve cada uno, quién aprueba y dónde queda el resultado.
2. Ubicá cada patrón en algo que ya hiciste. Por ejemplo, la revisión independiente es un evaluador.
3. Marcá en el dibujo dónde se podría romper y qué lo frenaría.

**Si te sobra tiempo:**
- [How we built our multi-agent research system](https://www.anthropic.com/research/multi-agent-research-system), Anthropic, jun-2025.
- [A practical guide to building agents](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf), OpenAI, PDF. La parte de orquestación.
- [Subagent Delegation](https://hermes-agent.nousresearch.com/docs/user-guide/features/delegation) y [la skill que lanza a Claude Code](https://hermes-agent.nousresearch.com/docs/user-guide/skills/bundled/autonomous-ai-agents/autonomous-ai-agents-claude-code), docs de Hermes.
- [Crear subagentes personalizados](https://code.claude.com/docs/es/sub-agents), docs de Claude Code, en español.
- Curso: [Introduction to subagents](https://academy.claude.com/courses/introduction-to-subagents), Anthropic Academy, gratis, en inglés.
- Paper: [ReAct](https://arxiv.org/abs/2210.03629) (2022), el resumen y la figura 1.

**Lo tenés cuando:** podés dibujar tu sistema de agentes y señalar sus puntos débiles.

## Al terminar

Sin IA, vas a poder:
- moverte en PowerShell y leer cualquier comando antes de correrlo;
- usar git (commit, rama, diff, merge) y revisar un PR;
- leer lo que devuelve una API y entender sus errores;
- revisar a mano la configuración de un agente: sus instrucciones, sus herramientas, sus aprobaciones y su login;
- explicar qué hace cada agente, qué ve y con qué permisos.

**Después, si querés seguir:**
- [El tutorial de Python](https://docs.python.org/es/3/tutorial/), oficial y en español, para leer y escribir scripts chicos.
- [Hugging Face Agents Course](https://huggingface.co/learn/agents-course/es/unit0/introduction), en español. No es de un proveedor, pero es gratis y arma agentes paso a paso.
- [Building with the Claude API](https://academy.claude.com/courses/building-with-the-claude-api), Anthropic Academy. Pide una clave de API y gasta créditos: con tu OK.

**Sobre las fuentes:** se verificaron el 28-oct-2026. Si un enlace se rompe, se busca la página nueva en el sitio del mismo proveedor, no en otro lado. Los artículos de Anthropic se mudaron de `anthropic.com/engineering` a `anthropic.com/research`, y la documentación de Codex, a `learn.chatgpt.com`.

## Cómo lo usan los agentes

El `AGENTS.md` les pide a Claude Code y a Codex que lean este archivo al empezar cada sesión con Sergio Urcullo y que cierren cada respuesta a Sergio Urcullo con un bloque corto, "Para aprender". Reglas para ese bloque:

- **Qué tema:** el de "Tema actual", arriba de todo. Antes del 2-nov, el 1. En la semana de repaso, cualquiera del 1 al 3. En las semanas libres, nada nuevo: una idea de lo ya visto. Si Sergio Urcullo dice en la conversación en qué tema está, vale eso para esa sesión.
- **Otro tema:** si lo que hizo el agente se conecta mejor con un tema anterior, puede usar ese. De un tema que todavía no vio, solo la idea en palabras simples, sin jerga.
- **Cuánto:** una idea o un ejercicio, en una o dos líneas, conectado con lo que se acaba de hacer. No es una clase.
- **Ejercicios:** el agente no los hace por él. Explica, corrige y pregunta.
- **Fuentes:** si cita una, sale de la lista del tema.
- **Cambio de tema:** si Sergio Urcullo pasa el "Lo tenés cuando" de un tema antes o después de lo que marca el calendario, el agente abre un issue para actualizar "Tema actual". No lo cambia en esa misma sesión, porque es otro objetivo.
