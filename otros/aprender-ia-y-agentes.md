# Plan para aprender IA y agentes

Para Sergio Urcullo. Lo pidió el 28-oct-2026 en el [issue #8](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/8). Arranca el lunes 2-nov-2026.

**Para qué:** entender qué hacen por dentro Claude Code, Codex y Hermes, y poder hacer a mano lo básico, sin IA: moverte en la terminal, usar git, revisar un PR y leer lo que devuelve una API. No hace falta programar.

## Desde dónde arranca

- Usa agentes todos los días.
- Hoy no hace a mano git ni PRs, no programa, no llamó nunca a una API y no sabría explicar qué es un token o la ventana de contexto. Lo contestó él el 28-oct.
- Tiene de 1 a 2 horas por semana.
- Supuesto: aprende mejor haciendo. Por eso cada tema arranca de algo que ya vio con sus agentes. Si no es así, se cambia el plan.

## Ritmo

- **Cada semana:** una sesión de 45 minutos y, si hay tiempo, una segunda. La primera es para leer o mirar; la segunda, para el ejercicio.
- **Cada tema dura 2 o 3 semanas.** Termina con la prueba "Lo tenés cuando". Si no sale, se repite el ejercicio antes de pasar al siguiente.
- **Son 11 temas en unos 6 meses**, del 2-nov-2026 al 16-may-2027, con dos semanas libres en las fiestas.
- **Si una semana no hay tiempo,** todo se corre una semana. No se recupera de golpe.
- **Muchas fuentes oficiales están solo en inglés.** Se puede pedir a un agente que traduzca o explique un párrafo, pero el ejercicio se hace a mano.

## Para practicar sin riesgo

- Ningún ejercicio gasta plata ni pide claves nuevas.
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
| 9 | Credenciales: logins, OAuth y claves de API | 29-mar al 11-abr |
| 10 | HTTP y APIs con curl | 12-abr al 25-abr |
| 11 | Arquitecturas de agentes | 26-abr al 16-may |

## Temas

### 1. El bucle de un agente

**Ya lo viste:** Claude Code o Hermes te piden aprobar un comando, lo corren y siguen solos.

**Qué vas a entender:** un agente es un modelo más un programa que repite un bucle: el modelo lee todo lo que tiene delante, decide, pide una herramienta (leer un archivo, correr un comando); el programa la ejecuta, a veces con tu aprobación, y el resultado vuelve al modelo. Sigue hasta que el modelo decide que terminó. La diferencia entre un flujo fijo, con pasos escritos de antemano, y un agente, que elige sus pasos.

**Ejercicio:**
1. Pedile a Claude Code algo chico en ONIA-CENTRAL, por ejemplo "resumime el AGENTS.md en tres líneas". Anotá en papel cada paso: qué leyó, qué herramienta pidió, qué aprobaste y qué volvió.
2. Repetilo con Hermes (`hermes --tui` desde ONIA-CENTRAL) y compará los dos papeles.

**Fuentes:**
- [Cómo funciona Claude Code](https://code.claude.com/docs/es/how-claude-code-works), docs de Anthropic, en español.
- [Building effective AI agents](https://www.anthropic.com/research/building-effective-agents), Anthropic, dic-2024. Hasta "When (and when not) to use agents": flujo fijo o agente.
- [Agent Loop Internals](https://hermes-agent.nousresearch.com/docs/developer-guide/agent-loop), docs de Hermes. Solo la lista "Core Responsibilities".
- Curso: [Claude Code 101](https://academy.claude.com/courses/claude-code-101), Anthropic Academy, gratis, en inglés.

**Lo tenés cuando:** le podés explicar a otra persona, sin mirar, qué pasa entre que escribís un pedido y el agente contesta, y qué parte hace el modelo y qué parte el programa.

### 2. Qué es un modelo y qué es un token

**Ya lo viste:** el cupo de tu plan se gasta en tokens; los agentes a veces "piensan" antes de contestar; la misma pregunta da respuestas distintas.

**Qué vas a entender:** un modelo de lenguaje predice el pedazo de texto que sigue, y esos pedazos son los tokens. Primero se entrena con muchísimo texto y después se ajusta con personas que califican respuestas. Por eso puede inventar con seguridad: predice algo que suena bien, no consulta una base de datos.

**Ejercicio:**
1. En el tokenizador de OpenAI, pegá la misma frase en español y en inglés y contá los tokens de cada una. Después pegá el primer párrafo del `AGENTS.md`.
2. Mirá los dos videos de 3Blue1Brown y anotá en una línea qué es un token y qué es entrenar.

**Fuentes:**
- [Tokenizer](https://platform.openai.com/tokenizer), OpenAI. Anda sin login.
- Videos de 3Blue1Brown: [Large Language Models explained briefly](https://www.3blue1brown.com/lessons/mini-llm/) y [Transformers, the tech behind LLMs](https://www.3blue1brown.com/lessons/gpt/). No son de un proveedor, pero son la referencia para entenderlo sin matemática.
- Curso: [AI capabilities and limitations](https://academy.claude.com/courses/ai-capabilities-and-limitations), Anthropic Academy, gratis, en inglés.
- Papers, solo el resumen del principio: [Attention Is All You Need](https://arxiv.org/abs/1706.03762) (2017, el Transformer) y [InstructGPT](https://arxiv.org/abs/2203.02155) (2022, el ajuste con personas).
- Para ver cómo entrena sus modelos Nous Research, la empresa de Hermes: [Hermes 4 Technical Report](https://arxiv.org/abs/2508.18255), solo el resumen.
- Si te quedan ganas: [Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g), charla de una hora de Andrej Karpathy. Mirala en dos sesiones.

**Lo tenés cuando:** podés explicar qué es un token, por qué el español gasta más que el inglés y por qué un modelo puede inventar un dato.

### 3. La ventana de contexto

**Ya lo viste:** "contexto y tokens"; las sesiones largas que se compactan; el agente que se olvida de algo que dijiste al principio; tu regla de un objetivo por sesión.

**Qué vas a entender:** el modelo no tiene memoria entre mensajes. Cada vez recibe de nuevo todo junto: sus instrucciones, el `AGENTS.md`, la lista de herramientas y la conversación entera. Eso es la ventana de contexto. Cuando se llena, el programa resume lo viejo (compactar) y se pierden detalles. Lo que queda en el medio de una ventana larga se aprovecha peor.

**Ejercicio:**
1. En una sesión de Claude Code, escribí `/context` y anotá qué ocupa más lugar.
2. Desde ONIA-CENTRAL, corré `hermes prompt-size` y compará: qué carga Hermes antes de que le escribas nada.
3. Escribí en una frase por qué conviene una sesión nueva para cada objetivo.

**Fuentes:**
- [Explorar la ventana de contexto](https://code.claude.com/docs/es/context-window), docs de Claude Code, en español. Explica `/context`.
- [Ventanas de contexto](https://platform.claude.com/docs/es/build-with-claude/context-windows), docs de la API de Claude, en español.
- [Effective context engineering for AI agents](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents), Anthropic, sep-2025.
- [Context Compression and Caching](https://hermes-agent.nousresearch.com/docs/developer-guide/context-compression-and-caching), docs de Hermes.
- Paper: [Lost in the Middle](https://arxiv.org/abs/2307.03172) (2023), solo el resumen y la primera figura.

**Lo tenés cuando:** podés decir qué llena la ventana de tu Hermes y por qué una sesión larga empieza a fallar.

### 4. La terminal: PowerShell

**Ya lo viste:** los comandos que te preparan los agentes para pegar en una PowerShell abierta desde Inicio.

**Qué vas a entender:** la carpeta actual y las rutas; qué es un comando, sus argumentos y sus opciones; las variables de entorno y el `PATH`, que es por qué `hermes` anda desde cualquier carpeta; por qué un comando que baja y corre un script de internet (`irm … | iex`) pide más cuidado que uno que solo lee.

**Ejercicio:**
1. Corré, de a uno, y anotá qué hace cada uno: `Get-Location`, `Set-Location C:\dev\proyectos\ONIA-CENTRAL`, `Get-ChildItem`, `Get-Content AGENTS.md -TotalCount 10`, `Get-Command hermes -All` y `$env:PATH -split ';'`.
2. Con `Get-Help Get-ChildItem -Examples`, aprendé a leer la ayuda sin preguntarle a nadie.
3. Tomá un comando largo de `docs/decisiones/2026-10-28-hermes-oficial.md` y explicá en papel cada parte.

**Fuentes:**
- [PowerShell 101](https://learn.microsoft.com/es-es/powershell/scripting/learn/ps101/00-introduction), Microsoft Learn, en español. Los capítulos 1 a 3.
- [about_Environment_Variables](https://learn.microsoft.com/es-es/powershell/module/microsoft.powershell.core/about/about_environment_variables), Microsoft Learn, en español: variables de entorno y `PATH`.

**Lo tenés cuando:** antes de pegar un comando que te pasó un agente, podés decir qué hace cada parte, o buscarlo en `Get-Help`.

### 5. Git y PRs a mano

**Ya lo viste:** los PRs que abren los agentes; la regla de que `main` cambia solo por PR; los worktrees donde trabaja cada sesión de Claude.

**Qué vas a entender:** un repositorio guarda la historia de una carpeta. Un commit es una foto con mensaje; una rama, una línea de trabajo aparte; un diff, lo que cambió; un PR, el pedido de sumar una rama a `main`, con revisión antes del merge.

**Ejercicio:**
1. En ONIA-CENTRAL, solo mirar: `git status`, `git log --oneline -10`, `git show --stat HEAD`, `git branch -a` y `git worktree list`.
2. En `C:\dev\practica-git`: `git init`, creá un archivo de texto, `git add`, `git commit`, creá una rama, cambiá el archivo, mirá `git diff` y hacé el merge.
3. En GitHub, abrí un PR que te haya hecho un agente y leé "Files changed" línea por línea antes de aprobarlo.

**Fuentes:**
- [Pro Git](https://git-scm.com/book/es/v2), el libro oficial de git, en español. Los capítulos 1 a 3.
- [Pull requests](https://docs.github.com/es/pull-requests), GitHub Docs, en español.
- Si querés más práctica: [GitHub Skills](https://github.com/skills), cursos interactivos de GitHub, en inglés. Crean repos de práctica en tu cuenta.

**Lo tenés cuando:** podés hacer un commit en una rama sin ayuda y contar qué cambia un PR leyendo su diff.

### 6. Las instrucciones del agente: AGENTS.md, SOUL.md, memoria y skills

**Ya lo viste:** el `AGENTS.md` de este repo, el `SOUL.md` de Hermes, la memoria de Claude, las skills y el canario "Sergio Urcullo,".

**Qué vas a entender:** qué lee cada agente siempre (sus instrucciones y el `AGENTS.md`) y qué lee solo cuando hace falta (una skill: el agente ve su nombre y su descripción, y abre el resto si le sirve). En qué se diferencian una instrucción, una memoria y una skill. Por qué el canario avisa que el agente perdió sus reglas: si no cargó su archivo, por ejemplo porque se abrió en otra carpeta, o si en una sesión muy larga las instrucciones pierden peso, deja de saludar así.

**Ejercicio:**
1. Armá una tabla con Claude Code, Codex y Hermes: qué archivo de instrucciones lee cada uno, de dónde y si tiene memoria. La respuesta de Hermes está en su página "Which file does what".
2. Leé el `SKILL.md` de una skill oficial y marcá qué parte ve siempre el agente y qué parte abre solo si la necesita.

**Fuentes:**
- [Which File Does What?](https://hermes-agent.nousresearch.com/docs/user-guide/which-file-does-what) y [Use SOUL.md with Hermes](https://hermes-agent.nousresearch.com/docs/guides/use-soul-with-hermes), docs de Hermes.
- [Cómo Claude recuerda tu proyecto](https://code.claude.com/docs/es/memory) y [Extender Claude con skills](https://code.claude.com/docs/es/skills), docs de Claude Code, en español.
- [Custom instructions with AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md), docs de Codex, y [agents.md](https://agents.md/), el estándar que comparten.
- [Equipping agents with Agent Skills](https://www.anthropic.com/research/equipping-agents-for-the-real-world-with-agent-skills), Anthropic, oct-2025.
- Curso: [Introduction to agent skills](https://academy.claude.com/courses/introduction-to-agent-skills), Anthropic Academy, gratis, en inglés.

**Lo tenés cuando:** sabés dónde escribir una regla para que la lea un solo agente o los tres, y por qué.

### 7. Herramientas y MCP

**Ya lo viste:** los conectores de Claude (Gmail, Notion, Supabase, Vercel) y las herramientas de Hermes que elegiste con `hermes tools`.

**Qué vas a entender:** una herramienta es una función con nombre, descripción y datos de entrada. El modelo no la ejecuta: pide usarla, y el programa la corre. MCP es el enchufe estándar para sumar herramientas: el agente es el cliente y cada conector es un servidor. Cada herramienta ocupa lugar en la ventana, aunque no se use.

**Ejercicio:**
1. Elegí un conector y leé la lista de sus herramientas con sus descripciones. Marcá cuáles solo leen y cuáles cambian algo.
2. Con `hermes prompt-size`, contá cuántas herramientas ve el modelo de Hermes.

**Fuentes:**
- [What is MCP?](https://modelcontextprotocol.io/docs/getting-started/intro) y [Architecture overview](https://modelcontextprotocol.io/docs/learn/architecture), docs oficiales de MCP. La versión vigente es la del 28-jul-2026.
- [Cómo funciona el uso de herramientas](https://platform.claude.com/docs/es/agents-and-tools/tool-use/how-tool-use-works), docs de la API de Claude, en español.
- [Conectar Claude Code a herramientas mediante MCP](https://code.claude.com/docs/es/mcp), en español, y [MCP en Hermes](https://hermes-agent.nousresearch.com/docs/user-guide/features/mcp).
- [Writing effective tools for AI agents](https://www.anthropic.com/research/writing-tools-for-agents), Anthropic, sep-2025.
- Curso: [Introduction to Model Context Protocol](https://academy.claude.com/courses/introduction-to-model-context-protocol), Anthropic Academy, gratis, en inglés. Las primeras lecciones; la parte de programar, para después.
- Paper: [Toolformer](https://arxiv.org/abs/2302.04761) (2023), solo el resumen: cómo un modelo aprende a pedir herramientas.

**Lo tenés cuando:** podés explicar la diferencia entre una skill, una herramienta y un servidor MCP.

### 8. Aprobaciones, sandbox y prompt injection

**Ya lo viste:** `approvals.mode: manual` en Hermes; la aprobación "always" que quedó guardada por error el 28-oct; los modos de sandbox de Codex; los modos de permisos de Claude Code; que se sacó Gmail de Codex.

**Qué vas a entender:** qué frena cada mecanismo y qué no. Una lista de comandos prohibidos no es un sandbox: un sandbox encierra al programa, una lista solo compara texto. Prompt injection: un texto en una página, un mail o un archivo que intenta darle órdenes al agente. La combinación peligrosa es un agente con datos privados, que lee contenido de afuera y puede mandar cosas hacia afuera.

**Ejercicio:**
1. Solo mirar: leé tu lista de bloqueos con `hermes config get approvals.deny` y comprobá con `hermes config get command_allowlist` que la otra lista está vacía.
2. Compará en una tabla los modos de Codex y los de Claude Code: qué puede hacer el agente sin preguntarte en cada uno.
3. Escribí en una frase por qué a una aprobación de Hermes se contesta "once" y no "always".

**Fuentes:**
- [Configurar permisos](https://code.claude.com/docs/es/permissions) y [Seguridad](https://code.claude.com/docs/es/security), docs de Claude Code, en español.
- [Agent approvals & security](https://learn.chatgpt.com/docs/agent-approvals-security) y [Sandbox](https://learn.chatgpt.com/docs/sandboxing), docs de Codex.
- [Security](https://hermes-agent.nousresearch.com/docs/user-guide/security), docs de Hermes: aprobaciones, `approvals.deny` y por qué una lista no es un sandbox.
- [Making Claude Code safer with sandboxing](https://www.anthropic.com/research/claude-code-sandboxing), Anthropic, oct-2025.

**Lo tenés cuando:** ante un pedido de aprobación, sabés qué puede romper ese comando antes de decir que sí.

### 9. Credenciales: logins, OAuth y claves de API

**Ya lo viste:** el "Sign in with ChatGPT" de Hermes; `hermes auth`; el token de `gh`; las claves que quedaron en variables de Windows ([#7](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/7)); la bóveda de KeePassXC.

**Qué vas a entender:** la diferencia entre una contraseña, una clave de API y un token de OAuth. Con OAuth le das permiso a una app sin darle tu contraseña, y ese permiso tiene alcance (scopes), vence y se puede revocar. Por qué una variable de entorno la puede leer cualquier programa. Por qué borrar un secreto de GitHub no alcanza: hay que revocarlo donde se creó.

**Ejercicio:**
1. Corré `gh auth status` y explicá qué muestra. Nunca le sumes `--show-token`.
2. Armá una tabla: con qué login entra cada agente (Hermes, Codex, Claude Code y `gh`) y cómo se le corta el acceso.
3. Solo mirar: en GitHub, Settings > Applications, revisá qué apps tienen acceso a tu cuenta.

**Fuentes:**
- [OAuth 2.0](https://oauth.net/2/) y [Getting started](https://oauth.net/getting-started/), en oauth.net, el sitio de referencia del estándar.
- [RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749), el estándar de OAuth 2.0 (IETF). Solo la sección 1 y su primera figura.
- [Authentication](https://learn.chatgpt.com/docs/auth), docs de Codex: login con ChatGPT o con clave de API, y dónde se guarda.
- [Authentication](https://code.claude.com/docs/en/iam), docs de Claude Code, en inglés.
- [LLM and Model Providers](https://hermes-agent.nousresearch.com/docs/integrations/providers), docs de Hermes.
- [Understanding Authorization in MCP](https://modelcontextprotocol.io/docs/tutorials/security/authorization), docs de MCP: cómo un conector pide permiso con OAuth.
- [Revisar las aplicaciones OAuth autorizadas](https://docs.github.com/es/apps/oauth-apps/using-oauth-apps/reviewing-your-authorized-oauth-apps), GitHub Docs, en español.

**Lo tenés cuando:** podés decir, para cada agente, con qué se identifica y cómo le cortarías el acceso.

### 10. HTTP y APIs con curl

**Ya lo viste:** todo lo anterior viaja por HTTP. Cada vez que un agente piensa, manda la ventana entera a la API del modelo y recibe la respuesta.

**Qué vas a entender:** un pedido y una respuesta; la URL; el método (GET para leer, POST para mandar); los encabezados, donde viaja la clave; el código de estado (200 bien, 401 sin permiso, 404 no está, 429 demasiados pedidos); el JSON, que es como vienen los datos.

**Ejercicio:**
1. Corré `curl.exe -i https://api.github.com/repos/NousResearch/hermes-agent` y buscá en el JSON la licencia y las estrellas.
2. Corré lo mismo con `oninteligenciaartificial/ONIA-CENTRAL`. Da 404 porque el repo es privado: GitHub contesta "no está" en vez de "no tenés permiso" para no confirmar que existe.
3. Repetí el primero con `Invoke-RestMethod` en PowerShell y compará.
4. En la documentación de la API de Claude, señalá dónde van el modelo, los mensajes y la clave. No la llames: cuesta plata.

**Fuentes:**
- MDN, en español: [Generalidades del protocolo HTTP](https://developer.mozilla.org/es/docs/Web/HTTP/Guides/Overview), [Códigos de estado](https://developer.mozilla.org/es/docs/Web/HTTP/Reference/Status) y [Trabajar con JSON](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Scripting/JSON).
- [Tutorial de curl](https://curl.se/docs/tutorial.html), del proyecto curl.
- [Invoke-RestMethod](https://learn.microsoft.com/es-es/powershell/module/microsoft.powershell.utility/invoke-restmethod), Microsoft Learn, en español.
- [API de repositorios](https://docs.github.com/es/rest/repos/repos), GitHub Docs, en español.
- [Mensajes](https://platform.claude.com/docs/es/api/messages), referencia de la API de Claude, en español.

**Lo tenés cuando:** ves un error 401, 404 o 429 en un agente y sabés qué significa.

### 11. Arquitecturas de agentes

**Ya lo viste:** Hermes lanza a Claude Code y a Codex; las sesiones de Claude que abren otras sesiones; las revisiones de un agente nuevo, que no comparte el contexto del autor.

**Qué vas a entender:** los patrones de base: cadena de pasos, enrutador, tareas en paralelo, orquestador con trabajadores y evaluador que corrige. Por qué un agente nuevo revisa mejor: no arrastra los supuestos del que escribió. Cuánto cuestan varios agentes: cada uno gasta su propia ventana. El patrón ReAct (razonar, actuar, mirar el resultado), que es la base de todo lo anterior.

**Ejercicio:**
1. Dibujá en papel cómo está armado ONIA hoy: Hermes, `claude -p`, `codex exec`, qué ve cada uno, quién aprueba y dónde queda el resultado.
2. Ubicá cada patrón en algo que ya hiciste. Por ejemplo, la revisión independiente es un evaluador.
3. Marcá en el dibujo dónde se podría romper y qué lo frenaría.

**Fuentes:**
- [Building effective AI agents](https://www.anthropic.com/research/building-effective-agents), Anthropic, otra vez: ahora la parte de los patrones.
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

El `AGENTS.md` les pide a Claude Code, Codex y Hermes que cierren cada respuesta con un bloque corto, "Para aprender", tomado de este plan. Reglas para ese bloque:

- **Qué tema:** el que toca según el calendario. Si Sergio Urcullo dice en qué tema está, vale eso. Si lo que hizo el agente se conecta mejor con un tema anterior, puede usar ese.
- **Cuánto:** una idea o un ejercicio, en una o dos líneas, conectado con lo que se acaba de hacer. No es una clase.
- **Temas que todavía no vio:** se puede nombrar la idea, explicada en palabras simples, sin jerga.
- **Ejercicios:** el agente no los hace por él. Explica, corrige y pregunta.
- **Fuentes:** si cita una, sale de la lista del tema.
