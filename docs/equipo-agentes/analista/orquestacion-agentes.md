# Cómo orquestar un equipo de agentes de IA: guía para OnIA (nov 2026)

Sergio: investigué docs oficiales, GitHub, Hugging Face, Reddit, YouTube y papers. Abrí cada link de la lista "verificados" y confirmé que carga. La idea que más se repite es esta: **pocos agentes, cada uno con un rol claro, un solo agente que escribe, la verificación automática y lo fijo programado sin IA.**

---

## 1) 11 prácticas que se repiten (con fuente y cómo aplicarlas en OnIA)

### 1. Empieza simple. Usa un agente solo cuando un flujo fijo no alcanza
- **Qué dicen:** Anthropic recomienda "la solución más simple posible" y agregar complejidad solo si mejora resultados medibles. Hugging Face (smolagents) dice que si un flujo fijo cubre todos los casos, lo programes directo, sin agente.
- **Fuentes:** [Anthropic – Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) · [HF – smolagents](https://huggingface.co/blog/smolagents)
- **En OnIA:** hazle una pregunta a cada uno de tus 7 bots: "¿esto se puede escribir como if/else?". Si la respuesta es sí, va a n8n o a un script, no a un agente.

### 2. Lo repetitivo y fijo va a n8n, no a un agente
- **Qué dicen:** alguien armó el mismo flujo de n8n de dos formas, una determinista y otra con agente. La versión con agente tuvo bucles, errores de esquema y respuestas distintas para la misma entrada, y no aportó nada nuevo.
- **Fuente:** [Comunidad n8n – "the agent lost" (abr 2026)](https://community.n8n.io/t/agentic-vs-deterministic-i-built-the-same-n8n-workflow-both-ways-the-agent-lost/291065)
- **En OnIA:** a n8n van los recordatorios, mover leads de WhatsApp a una hoja, el reporte diario de `uso.jsonl` y la actualización del panel. La IA entra solo en el paso que necesita criterio, como redactar una respuesta, y como un nodo LLM puntual, no como agente.

### 3. Patrón jefe y trabajadores, con un solo agente que escribe
- **Qué dicen:** en 2025, Cognition (los de Devin) publicó "no construyas multiagentes". Su argumento: cada acción lleva decisiones implícitas, y cuando varios agentes deciden por su cuenta, esas decisiones chocan. En 2026 revisaron su postura: lo que funciona es **un loop principal que guarda el estado**, con subagentes sin estado y de alcance chico, donde **solo uno escribe**. Anthropic usa el mismo patrón de orquestador y trabajadores.
- **Fuentes:** [Cognition – Don't Build Multi-Agents](https://cognition.com/blog/dont-build-multi-agents) · [Anthropic – Multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system)
- **En OnIA:** SUM es el único que decide y guarda el estado. Los demás investigan, hacen borradores o revisan, pero no tocan el mismo archivo o repo a la vez.

### 4. Uno construye y otro, que no vio el proceso, revisa
- **Qué dicen:** la doc de Claude Code pide que revise "alguien que no escribió el código", porque así no se deja llevar por el razonamiento que lo produjo. En r/ClaudeAI se repite el combo: Claude planea y construye, Codex revisa. OpenAI publicó un plugin oficial para Claude Code con `/codex:review` y `/codex:adversarial-review`.
- **Fuentes:** [Claude Code – Best practices](https://code.claude.com/docs/en/best-practices) · [openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc) · [r/ClaudeAI (mirror)](https://reddit.sentinel-team.org/posts/1r3v7gl/snapshots/2026-02-13T19%3A15%3A55.121623Z) · [Pablo Stanley (ene 2026)](https://pablostanley.substack.com/p/a-heated-rivalry-claude-code-openai)
- **En OnIA:** nunca dejes que el mismo modelo revise su propio trabajo. Al pedir la revisión, pide "solo errores que importan, ignora el estilo". La doc avisa que un revisor siempre encuentra *algo*, y si arreglas todo terminas complicando el código.

### 5. Dale al agente una forma de comprobar su trabajo
- **Qué dicen:** la línea más útil de un CLAUDE.md es el comando que corre los tests. Antes de construir, escribe un SPEC.md que diga qué significa "terminado". Anthropic evalúa con un LLM-juez que usa una rúbrica y da una nota de 0 a 1 más aprobado o reprobado.
- **Fuentes:** [Best practices](https://code.claude.com/docs/en/best-practices) · [Anthropic – Multi-agent](https://www.anthropic.com/engineering/multi-agent-research-system)
- **En OnIA:** el paso "revisar" de cada loop tiene que ser un checklist fijo escrito en el manual de la tarea. Si una tarea no tiene checklist, no se automatiza.

### 6. Las reglas sin excepciones van en hooks o permisos, no en el prompt
- **Qué dicen:** CLAUDE.md y AGENTS.md son *guías*, y el modelo puede decidir ignorarlas. Lo que tiene que cumplirse siempre va en un hook o en una regla de bloqueo (deny). Por ejemplo, un hook `PreToolUse` que termina con exit code 2 frena la acción. Un hook de `Notification` te avisa cuando Claude espera tu respuesta.
- **Fuentes:** [Claude Code – Hooks guide](https://code.claude.com/docs/en/hooks-guide) · [Best practices](https://code.claude.com/docs/en/best-practices)
- **En OnIA:** "nunca push", "nunca leer .env", "nunca producción" y "nunca pagar ni publicar" van como hooks o reglas de bloqueo. En Codex, `codex exec` arranca en solo lectura; como máximo usa `--sandbox workspace-write` y nunca `danger-full-access`.

### 7. CLAUDE.md y AGENTS.md cortos; lo largo, en manuales o skills
- **Qué dicen:** cada línea de CLAUDE.md gasta atención en *todas* las tareas. La recomendación es menos de unas 200 líneas, solo con lo que el agente no puede deducir del código. Los procesos largos van en skills, que se cargan solo cuando hacen falta. AGENTS.md es un estándar abierto que leen Codex, Cursor, Jules, Devin y otros. Codex corta el archivo en 32 KiB, y si hay varios, gana el más cercano a la carpeta donde trabaja.
- **Fuentes:** [Claude Code – Costs](https://code.claude.com/docs/en/costs) · [agents.md](https://agents.md/) · [Codex – AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md)
- **En OnIA:** un AGENTS.md corto por área con reglas, comandos y lo prohibido. CLAUDE.md solo dice "lee AGENTS.md" más lo propio de Claude. Los manuales viven en `manuales/<area>/<tarea>.md`.

### 8. Modo headless con salida JSON, para que el script controle todo
- **Qué dicen:** `claude -p --output-format json` devuelve el resultado, el `session_id` y `total_cost_usd`. `--json-schema` obliga a responder con un formato fijo. `--bare` hace que la corrida salga igual en cualquier máquina. En Codex, `codex exec --json` y `--output-schema` hacen lo mismo, y `resume` retoma una sesión.
- **Fuentes:** [Claude Code – Headless](https://code.claude.com/docs/en/headless) · [Codex – Non-interactive](https://learn.chatgpt.com/docs/non-interactive-mode)
- **En OnIA:** esto es el corazón de `onia-llm`. Cada llamada pide un JSON fijo (`{estado, resumen, archivos, decision_para_sergio}`) y guarda costo y tokens en `uso.jsonl`. Así el panel se arma solo y ningún bot gasta cuota "resumiendo".

### 9. Ajusta el esfuerzo a la tarea; para lo simple, el modelo barato
- **Qué dicen:** Anthropic llegó a lanzar 50 subagentes para preguntas simples. Lo corrigió con reglas: una consulta simple usa 1 agente con 3 a 10 llamadas. Un sistema multiagente gasta **unas 15 veces más tokens** que un chat. La doc recomienda `model: haiku` para subagentes simples y Sonnet en vez de Opus para lo rutinario.
- **Fuentes:** [Anthropic – Multi-agent](https://www.anthropic.com/engineering/multi-agent-research-system) · [Costs](https://code.claude.com/docs/en/costs) · [Subagents](https://code.claude.com/docs/en/sub-agents)
- **En OnIA:** el nivel de modelo lo fija el manual de cada tarea, no el bot en el momento. Arranca en nivel 1 y sube un nivel solo si falla el checklist, como máximo una vez.

### 10. Contexto mínimo al delegar, resúmenes cortos de vuelta
- **Qué dicen:** el contexto es un "presupuesto de atención": con más tokens, el modelo recuerda peor. Los subagentes deberían devolver resúmenes de unos 1.000 a 2.000 tokens y guardar notas en archivos, por ejemplo NOTES.md. Cada encargo necesita objetivo, formato de salida, herramientas y límites. Si las instrucciones son vagas, el trabajo se duplica.
- **Fuentes:** [Anthropic – Context engineering (sep 2025)](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) · [Anthropic – Multi-agent](https://www.anthropic.com/engineering/multi-agent-research-system)
- **En OnIA:** el buzón entre agentes usa una plantilla fija (objetivo, entrada, salida, límite), no chat libre. Los mensajes de "solo para actualizar" gastan cuota y distraen. Es uno de los errores que reportó Anthropic.

### 11. Loops con tope y vencimiento; lo que dura, fuera de la sesión
- **Qué dicen:** en Claude Code, `/loop` vive dentro de la sesión y vence a los 7 días. Para lo que tiene que seguir corriendo están las tareas en la nube o de escritorio, y GitHub Actions. Un loop sigue gastando aunque no escribas nada, y `/usage` te muestra cuáles son los más caros.
- **Fuentes:** [Scheduled tasks / loop](https://code.claude.com/docs/en/scheduled-tasks) · [Costs](https://code.claude.com/docs/en/costs)
- **En OnIA:** cada loop de planear, hacer y revisar lleva **máximo 3 vueltas** y una condición de parada escrita. Lo diario lo dispara n8n o cron llamando a `onia-llm`, en vez de dejar un bot "despierto".

---

## 2) Errores comunes a evitar

| Error | Por qué duele | Fuente |
|---|---|---|
| Muchos agentes "por si acaso" | Gastan unas 15 veces más tokens. Con el mismo presupuesto, un solo agente iguala o supera a varios en razonamiento | [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system) · [arXiv 2604.02460](https://arxiv.org/abs/2604.02460) |
| Varios agentes escribiendo a la vez | Toman decisiones implícitas que se contradicen | [Cognition](https://cognition.com/blog/dont-build-multi-agents) |
| Culpar al modelo | De más de 1.600 trazas analizadas, la mayoría de las fallas vienen del diseño, la coordinación entre agentes y la falta de verificación | [Why Do Multi-Agent LLM Systems Fail? (NeurIPS 2025)](https://arxiv.org/abs/2503.13657) |
| Agentes que se mandan actualizaciones todo el tiempo | Se distraen entre sí y queman cuota | [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system) |
| Delegar con instrucciones vagas | El trabajo sale duplicado o desenfocado | [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system) |
| CLAUDE.md gigante o lleno de "IMPORTANTE" | La regla se pierde. Si es obligatoria, va en un hook | [Best practices](https://code.claude.com/docs/en/best-practices) |
| Usar un agente para algo fijo | No es determinista, cuesta depurarlo y su "confianza" no es fiable | [n8n](https://community.n8n.io/t/agentic-vs-deterministic-i-built-the-same-n8n-workflow-both-ways-the-agent-lost/291065) · [HF](https://huggingface.co/blog/smolagents) |
| Que un modelo revise lo suyo | No ve sus propios puntos ciegos | [Pablo Stanley](https://pablostanley.substack.com/p/a-heated-rivalry-claude-code-openai) |
| Corregir todo lo que dice el revisor | Terminas con capas de más y tests inútiles | [Best practices](https://code.claude.com/docs/en/best-practices) |
| Pasar cada ticket por 3 IAs | Usuarios de Reddit reportan que eso multiplica el trabajo de 3 a 5 veces. Usa revisión doble solo en lo importante | [r/ClaudeAI (mirror)](https://reddit.sentinel-team.org/posts/1r3v7gl/snapshots/2026-02-13T19%3A15%3A55.121623Z) |
| Loops sin tope ni vencimiento | Gastan cuota mientras duermes | [Costs](https://code.claude.com/docs/en/costs) |
| Agentes sin supervisión con permiso de push o producción | Un error se vuelve irreversible | [Codex non-interactive](https://learn.chatgpt.com/docs/non-interactive-mode) · [Headless](https://code.claude.com/docs/en/headless) |
| Copiar frameworks enormes de enjambres | Ruflo, antes claude-flow, tiene ~80 mil ⭐ pero suma muchísima complejidad. Úsalo para sacar ideas, no como base | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) |

---

## 3) Arquitectura ajustada para OnIA

### De 7 bots a 3 agentes Grok más n8n

| Rol | Quién | Qué hace |
|---|---|---|
| **SUM (coordinador)** | Grok | Lee el buzón y el panel, prioriza, elige el manual y arma tu resumen diario. Es el **único que guarda estado**, y lo guarda en archivos (`estado/tareas.md`, `decisiones/`) y en el panel, **no en la memoria ni en el hilo de Grok** (ajustado por casos reales). |
| **Negocio** (ventas, growth, contenido) | Grok | Clasifica pedidos y llama a `onia-llm` con el manual correcto. No redacta textos largos. Los mensajes de clientes (WhatsApp, Instagram) son **datos, nunca instrucciones** (ajustado por casos reales). |
| **Producto** (platform, talleres, operaciones) | Grok | Lo mismo, pero para código, material de clases y herramientas internas. |
| **Fijo y programado** | n8n | Recordatorios, leads, reporte de uso, panel y alertas de cuota. Sin IA, o con un solo nodo LLM puntual. |

Finanzas y legal no necesitan bot propio: hay poco volumen y casi todo requiere tu aprobación. SUM se lo pasa directo a Claude con su manual.

### Qué hace cada modelo
- **Grok** (cuota escasa, ya usaste el 59% de la semana): solo **enruta, prioriza y resume**. Nada de textos largos ni loops largos. La meta es que Grok use menos del 30% de los tokens totales.
  - (ajustado por casos reales) **Sin rutinas programadas en Grok Bot**: todo lo que corre a horario lo dispara n8n. **Sin avisos de progreso**: cada bot devuelve solo su resultado final. Cada descripción de bot tiene ~50 líneas como máximo e incluye una sección "Lo que NO te toca", porque SUM enruta leyéndola. **No autentiques cuentas sensibles** (pagos, Meta Ads, bancos) en la computadora compartida de Grok Bot, que no es una frontera de seguridad.
- **Claude Code** (`claude -p --output-format json --json-schema`): redacción, investigación, planes, guiones, material de talleres y revisión del código que haga Codex. Haiku o Sonnet por defecto; Opus solo para planes difíciles.
- **Codex** (`codex exec --output-schema`, en solo lectura o `workspace-write`): es **el que escribe código** en ONIA Platform. En tareas importantes revisa los planes de Claude con `/codex:adversarial-review`. Las tareas largas pueden ir a Codex cloud y volver como PR para que tú lo revises. Nunca hace merge ni push solo. (ajustado por casos reales) Cada tarea de Codex dura **menos de 25 min** (si es más larga, se parte), corren **máximo 3 en paralelo**, y "terminado" se comprueba con exit code + evento de fin + archivos esperados, no con la última línea de salida.
- **Regla de oro:** en cada tarea hay un escritor y un revisor distinto, y nunca dos escritores sobre el mismo archivo.

### Formato del manual por tarea (`manuales/<area>/<tarea>.md`)
```markdown
---
tarea: responder-lead-whatsapp
version: 3
dueno: Negocio          # qué agente lo dispara
ejecuta: claude         # n8n | claude | codex
nivel_modelo: 1         # 1 barato · 2 medio · 3 fuerte
max_vueltas: 2
escala_a_sergio: precio especial, reembolso o queja
---
## Cuándo se usa       (disparador concreto)
## Entrada             (qué datos y de dónde)
## Pasos               1. … 2. …
## Salida (JSON)       {"estado":"ok|falla|necesita_sergio","borrador":"...","motivo":"..."}
## Checklist de terminado (lo marca el revisor)
- [ ] Tono OnIA, sin prometer fechas
- [ ] Precio = tabla vigente
## Prohibido           enviar, publicar, pagar, push
## Ejemplos buenos / malos
```
Regla práctica: **si una tarea se repite 3 veces, le escribes un manual. Si el manual tiene puros pasos fijos y ninguna decisión, la tarea se pasa a n8n.**

### Métricas (salen de `uso.jsonl`; n8n arma el panel)
1. **Costo por tarea completada**, separado por Grok, Claude y Codex.
2. **% de tareas aprobadas a la primera** en cada manual.
3. **Vueltas promedio por loop.** Alerta si pasa de 2.
4. **Minutos de Sergio por semana.** Este número tiene que bajar.
5. **Cuota de Grok usada contra el % de la semana que ya pasó.** Si va adelantada, SUM entra en "modo ahorro" y solo enruta.
6. **Tareas que se pasaron a n8n** en el mes. Este número tiene que subir. (ajustado por casos reales) Suma **ejecuciones y % de fallas por workflow** de n8n, como hace TUP. Cada automatización o producto nuevo nace con un **umbral de cierre** (número + fecha): si no lo alcanza, se apaga.
7. **Set de prueba de unas 20 tareas reales por área** para comparar cada vez que cambies un manual o un modelo. Anthropic dice que 20 casos alcanzan para notar cambios grandes.

### Cómo te llegan las decisiones
- **Un solo resumen diario de SUM** a hora fija, en el panel y por WhatsApp vía n8n. Nada de avisos sueltos.
- **Máximo 3 decisiones por día**, cada una con este formato:
  `Decisión: … | A / B | Recomiendo A porque … | Evidencia: link/captura | Si no respondes: queda en borrador | Riesgo/costo: …` (ajustado por casos reales: se suma "Evidencia" para poder aprobar desde el celular sin abrir nada más)
- **Siempre pasa por ti:** publicar, pagar o pautar, firmar, push o merge, producción, precios y reembolsos. Esto se bloquea con hooks y permisos, no solo con instrucciones.
- **Urgencias** (algo se cayó, un cliente molesto): aviso inmediato, como máximo 1 por día salvo emergencia real.
- **Cada semana:** una tabla con las métricas y los 3 manuales que más fallaron, para que decidas qué mejorar.

---

## 4) Casos reales

Sergio: aquí hay 25 casos de gente que usa agentes de verdad. Abrí cada link con WebFetch y el contenido coincidía. Casi todo es autorreportado (blogs personales, casos de cliente de n8n), así que las cifras son lo que *ellos dicen*, no datos auditados. Si la fuente no da un número, lo escribo así.

### A. Fundadores solos con "equipo" de agentes

### 1. Una empresa donde Claude Code es el CEO
- **Quién:** Ryu0705 (DEV Community, 2026)
- **Link:** https://dev.to/ryu0705/how-i-built-a-fully-autonomous-ai-company-using-only-claude-code-16ob
- **Qué montó:** una jerarquía de CLAUDE.md como "estatuto". Hay carpetas por departamento (`ceo/`, `research/`, `engineering/`, `operations/`), cada una con su CLAUDE.md. El CEO deja propuestas en `ceo/proposals/`, avisa por Slack y espera aprobar, rechazar o devolver. Lanzar o cerrar líneas de negocio, publicar y cambiar el estatuto requieren su aprobación.
- **Resultado:** infraestructura de "$0/month" (GitHub Pages + plan gratis de Resend). No reporta ingresos ni usuarios. Lección: "cada vez que intenté agregar complejidad (bases de datos, APIs, nube), creó fragilidad".
- **Qué copiamos para OnIA:** las decisiones de SUM salen como **archivo de propuesta** (`decisiones/AAAA-MM-DD-*.md`) con tres salidas: aprobar, rechazar con motivo o devolver. Así queda historial y n8n solo avisa.

### 2. 20 agentes, 7 productos… y cero usuarios externos
- **Quién:** Noel Himer, Unbearable Labs
- **Link:** https://dev.to/unbearablelabs/i-run-my-one-person-company-as-a-20-agent-ai-org-heres-what-broke-2ik4
- **Qué montó:** unos 20 agentes con rol y lista de prohibiciones (jefe de gabinete con resumen diario, finanzas, seguridad que busca secretos filtrados, investigador con límite de uso, etc.). Comparten un backlog, un "vault" de conocimiento y una consola de voz que lo interrumpe si una métrica vigilada empeora. Tiene dos reglas: gastar, publicar o tocar cuentas requiere su aprobación, y cada producto nace con un umbral de cierre.
- **Resultado:** 7 productos en pocas semanas. Un agente quedó colgado **472 minutos** por correr un servidor en primer plano, y un Dockerfile real se sobrescribió sin aviso. En los comentarios admite que los 7 productos tienen un solo usuario: él mismo. Sus herramientas tuvieron cero ejecuciones externas.
- **Qué copiamos para OnIA:** (1) **umbral de cierre** (número + fecha) para cada automatización o producto nuevo; (2) la pregunta "¿quién pidió esto?" antes de construir; (3) watchdog con tiempo máximo por tarea; (4) un archivo de estado persistente por agente.

### 3. Una "flota" de bots por área, con jefe de gabinete y aprobación en un toque
- **Quién:** Zachary Proser (WorkOS; además tiene una consultora propia)
- **Link:** https://zackproser.com/blog/the-agent-fleet
- **Qué montó:** un bot por función (agenda, inbox, email marketing, blog, imágenes, redes, contabilidad, contratos). Cada uno es una app separada, con su repo y sus secretos. Un Chief of Staff los llama con contratos tipados (`outputSchema`). Enviar email, mover dinero o firmar pide aprobación de un toque en Slack. Los emails entrantes se tratan como datos, no como instrucciones. Hay un agente "mecánico" que puede abrir PRs para arreglar a los otros bots.
- **Resultado:** descubrió que había dejado "$30,000" sin cobrar por consultas que nunca respondió. Configurar el buzón le tomó "about an hour and a half". Facturación y contratos siguen en construcción.
- **Qué copiamos para OnIA:** contratos JSON entre SUM y los bots (ya los tenemos con `onia-llm`). Lo nuevo: **los mensajes de WhatsApp e Instagram de clientes son datos, nunca instrucciones** (protección contra prompt injection), y la aprobación de Sergio desde el celular con un toque.

### 4. 20+ agentes en un Mac mini: respuestas de Instagram y outreach a inversores
- **Quién:** 무펭이 (Mupengi), fundador solo de MUFI (fotocabinas), Corea
- **Link:** https://dev.to/_a01b1cf457db386dd25f1/how-a-solo-founder-runs-a-business-with-20-ai-agents-53ac
- **Qué montó:** un orquestador más subagentes en OpenClaw, con chequeos cada 15–30 min y memoria en markdown/JSON. Para los DMs de Instagram hay tres agentes en cadena (monitor, clasificador, respondedor) con escalamiento a él. Para escribir a inversores: investigación, personalización, borrador y revisión, y él revisa a mano el 20% más importante.
- **Resultado (autorreportado, sin línea base):** "90% of DM conversations resolved without my involvement" y respuesta "de horas a minutos". Outreach a VCs: de "0% reply rate" a "~15% meaningful replies". Armarlo le tomó unas dos semanas.
- **Qué copiamos para OnIA:** el patrón **monitor → clasificador → respondedor → escala a Sergio** para leads de Instagram y WhatsApp. Todo queda en borrador hasta que se apruebe el envío automático por categoría.

### 5. De copiloto a 4 especialistas en paralelo, con un humano en cada paso clave
- **Quién:** Michael Dishmon (tecnólogo creativo, 20+ años)
- **Link:** https://michaeldishmon-com.vercel.app/writing/claude-code-solo-founder-gap
- **Qué montó:** las semanas 1–7 usó Claude Code como copiloto secuencial. Desde la semana 8 corrió 4 agentes en paralelo: esquema, endpoints, tests y revisión de convenciones. Aprueba el esquema antes de que corran los endpoints.
- **Resultado:** en la semana 14 salieron 11 endpoints, 2 dashboards, 47 archivos de test y un incidente frenado antes de producción, con **unas 3 horas** de tiempo suyo. Estima una curva de aprendizaje de 6 a 8 semanas.
- **Qué copiamos para OnIA:** pasar a paralelo **solo después** de semanas de flujo secuencial que funcione, y con un punto de aprobación entre fases (plan aprobado antes de construir).

### 6. Un agente central que trabaja mientras cenas
- **Quién:** Ryan Cwynar (byldr.co)
- **Link:** https://dev.to/ryancwynar/the-ai-co-founder-that-never-sleeps-3a7b
- **Qué montó:** un agente con acceso a archivos y APIs, tareas programadas (prospectos, borradores, monitoreo), memoria entre sesiones y avisos por mensaje cuando hace falta una decisión.
- **Resultado:** un borrador de blog en "10 minutes" (antes, "2 hours"). "15 prospects" encontrados en una cena. No reporta conversiones ni ingresos.
- **Qué copiamos para OnIA:** **empieza en solo lectura** y da permiso de escritura a medida que gana confianza. Una tarea repetitiva primero: documéntala, prográmala y recién después agrega memoria.

### 7. Un fundador serial que opera solo con agentes en la nube
- **Quién:** Ryan Carson (Untangle), entrevistado por Peter Yang (Behind the Craft) y por Claire Vo (How I AI)
- **Links:** https://creatoreconomy.so/p/how-this-5x-founder-runs-his-startup-solo-with-ai-agents-ryan-carson · https://www.youtube.com/watch?v=IDqdVZwAwjw · https://www.chatprd.ai/how-i-ai/how-ryan-carson-manages-40-prs-a-day-with-devin-and-codex
- **Qué montó:** un "jefe de gabinete" (OpenClaw) con 4 skills en markdown: asistente ejecutivo, desarrollo de negocio, gestor de tareas diarias y preparación del día. Hay crons: revisar email cada 15 min y buscar prospectos cada noche. Codex y Devin construyen. Para el código usa un playbook "Land PR": revisión automática (máx. 2 vueltas), el agente graba un **video probando la función** con checklist de pasa/no pasa, y él aprueba con la frase exacta "Video approved. Land it." Otro playbook, "Watchdog", saca los 3 problemas principales entre sus clientes.
- **Resultado:** "10 PRs a day solo" (Behind the Craft) y unos 40 PRs al día (How I AI). Su primera versión para consumidores no funcionó; el encaje llegó hablando con una abogada.
- **Qué copiamos para OnIA:** "los agentes son crons y archivos markdown". Además: **una sola lista de tareas canónica** (no inferida del chat), evidencia visual para aprobar (captura o video corto) y máximo 2 vueltas de revisión. Con los clientes habla Sergio, no los agentes.

### B. Claude Code y Codex en pareja (uno escribe, otro revisa)

### 8. Claude manda, Codex implementa, otro Claude revisa (3 semanas en producción)
- **Quién:** Penna (blog Penchan)
- **Link:** https://penchan.co/en/ai/openclaw/cc-orchestrator/
- **Qué montó:** Claude Code guarda el spec, parte el trabajo y decide qué es "terminado". Codex CLI escribe y un subagente de Claude revisa el diff.
- **Resultado:** la tarea de Codex más estable dura "under 25 minutes". Un refactor de "forty minutes" murió por timeout de compactación. Una corrida sin supervisión se quedó "twenty minutes" esperando una aprobación. "Three is the sweet spot" en paralelo; el cuarto carril chocó con la cuota.
- **Qué copiamos para OnIA:** tareas de Codex de **menos de 25 min**, **máximo 3 en paralelo**, y no fiarse de la última línea de salida: comprobar exit code, el evento de fin y que existan los archivos esperados. Que Codex revise su propio código no sirve; revisa otra familia de modelos.

### 9. Claude construye, Codex hace de escéptico
- **Quién:** Mejba Ahmed (ingeniero, 8+ años en Laravel/Python/AWS)
- **Link:** https://www.mejba.me/blog/claude-code-codex-plugin-dynamic-duo-workflow-2026
- **Qué montó:** con el plugin oficial de Codex para Claude Code: plan de Claude atacado por Codex antes de implementar, auditorías de fondo, revisión adversarial del diff antes de cada release y, para bugs sutiles, al revés (Claude planea, Codex implementa).
- **Resultado:** en una migración, la revisión del plan encontró una foreign key faltante, un desajuste de soft-delete y un índice que podía causar deadlock, en "two rounds". Costo: Claude $100 + OpenAI $20, un aumento neto de "20 percent" frente a usar solo Claude.
- **Qué copiamos para OnIA:** **si un plan necesita una 3.ª ronda de revisión, se descarta y se re-planea** desde otro ángulo. Las auditorías se limitan a la carpeta tocada, no a todo el repo. El "review gate" en cada turno gasta muchos tokens: solo antes de algo sensible.

### 10. 16 roles con un orquestador que no escribe código
- **Quién:** Creative Brain Inc (fundador solo, Toronto)
- **Link:** https://dev.to/creative_brain_inc/i-gave-claude-code-16-specialist-roles-now-i-ship-full-stack-features-before-lunch-4l50
- **Qué montó:** subagentes en bandas de planificación, construcción, auditoría (en paralelo) y operaciones. Cada prompt tiene ~80 líneas o menos. La memoria va en `memory/` (`activity-log.md`, `current-sprint.md`, `known-issues.md`), no en una base vectorial. Hay hooks PreToolUse que bloquean force push, `rm -rf /` y `DROP DATABASE`, y el deploy se frena en staging hasta que él aprueba.
- **Resultado:** un ejemplo de flujo de 08:30 a producción "by 11:15". No da benchmarks. Ojo: dice 16 roles pero lista 15.
- **Qué copiamos para OnIA:** el estado de SUM va en **archivos markdown versionados**, con un log de actividad que llena un hook PostToolUse. El orquestador no ejecuta trabajo.

### 11. Varias terminales de Claude Code y Codex a la vez
- **Quién:** Simon Willison (oct 2025)
- **Link:** https://simonwillison.net/2025/Oct/5/parallel-coding-agents/
- **Qué montó:** varias terminales con Claude Code y Codex CLI, más Codex Cloud para lo riesgoso. Les manda investigación, explicar código, mantenimiento chico y trabajo con spec escrito. También usa agentes "exploradores" que no se mergean: solo muestran dónde está lo difícil.
- **Resultado:** no reporta resultado medible. Dice que la revisión es el cuello de botella: solo puede aterrizar "one significant change at a time".
- **Qué copiamos para OnIA:** en paralelo, solo lo que cuesta poco revisar. Las tareas "exploradoras" no se mergean, sirven para planificar.

### 12. Spec → plan → ejecución en pasos chicos
- **Quién:** Harper Reed (feb 2025)
- **Link:** https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/
- **Qué montó:** un LLM le hace preguntas de a una hasta armar `spec.md`. Un modelo de razonamiento convierte eso en `prompt_plan.md` + `todo.md`, y lo ejecuta con aider o Claude, con tests.
- **Resultado:** el planeamiento le toma "maybe 15 minutes". No reporta métricas. Avisa que en equipo "the bots collide, the merges are horrific".
- **Qué copiamos para OnIA:** el manual de cada tarea nueva nace de una entrevista corta (una pregunta a la vez) y termina en un `todo.md` con checkboxes que el revisor marca.

### 13. Codex solo, en 3 a 8 proyectos, sin orquestación
- **Quién:** Peter Steinberger (steipete; el post no firma, pero el sitio es suyo)
- **Link:** https://steipete.me/posts/2025/shipping-at-inference-speed
- **Qué montó:** de 3 a 8 proyectos a la vez con un solo modelo (gpt-5.2-codex, esfuerzo alto) y una cola de ideas en Codex en lugar de orquestación multiagente. Cada proyecto tiene una carpeta `docs/` que el modelo lee primero.
- **Resultado:** una conversión a Zig de más de 5 horas funcionó al primer intento. Codex a veces tarda ~4x más que Opus, pero dice que termina antes porque no tiene que "arreglar los arreglos".
- **Qué copiamos para OnIA:** **una cola de tareas** en vez de más agentes. Y que el agente tenga una CLI para comprobar su propio trabajo.

### 14. Pocas herramientas, rápidas y con logs legibles
- **Quién:** Armin Ronacher (jun 2025)
- **Link:** https://lucumr.pocoo.org/2025/6/12/agentic-coding/
- **Qué montó:** Claude Code (plan Max de $100, solo Sonnet), un Makefile con `make dev`, logs de todos los servicios a un archivo que el agente lee, y MCP casi nunca.
- **Resultado:** no reporta resultado medible.
- **Qué copiamos para OnIA:** un Makefile o script con los comandos de ONIA Platform y **logs en archivo** para que Codex y Claude depuren solos. Prefiere el modelo barato para lo rutinario (confirma la práctica 9).

### C. Grok Bot en modo equipo

### 15. 10 compañeros en Grok Bot armados desde el iPhone
- **Quién:** Chris Lema (24 ago 2026)
- **Link:** https://chrislema.com/grok-bot-ten-ai-teammates
- **Qué montó:** 10 bots en un fin de semana (Listener, Domain Expert, Trends Scout, Content Creator, Hold-Up Scorer, Chief of Staff y otros). Cada uno arrancó con unos dos párrafos de instrucciones, y cada instrucción incluye una sección "What you do NOT own".
- **Resultado:** al final todos hablaban entre sí y "only my 'Chief of Staff' was talking to me". No reporta métricas de calidad.
- **Qué copiamos para OnIA:** cada bot de Grok lleva una sección **"Lo que NO te toca"** en su descripción, y solo SUM le habla a Sergio.

### 16. Grok Bot: buena delegación, mucho ruido
- **Quién:** blog de Brian Lovin (13 ago 2026; el texto no firma con nombre)
- **Link:** https://brianlovin.com/writing/grok-bot-first-impressions-kcJun01
- **Qué montó:** varios agentes con nombre que delegan entre la computadora en la nube, su máquina local y sesiones de Cursor. Les pidió usar una base de Notion como memoria.
- **Resultado:** los agentes crearon unas 20–30 páginas de memoria. Problemas: no se pueden encolar mensajes durante una tarea larga, no se ven los pasos de pensamiento, no hay selector de modelo, a veces entran en bucle hablando entre ellos y mandan muchos avisos de progreso.
- **Qué copiamos para OnIA:** **prohibir los avisos de progreso** en las instrucciones de cada bot (solo resultado final) y **no dejar el estado de SUM dentro del hilo de Grok**, que es opaco: va a archivo o panel.

### 17. 6 bots de Grok para un canal de YouTube
- **Quién:** Ryan Robinson (RyRob.com)
- **Link:** https://www.ryrob.com/grok-bot-ai-agents/
- **Qué montó:** jefe de gabinete (el único con quien habla), investigación, guion (con regla de no inventar datos), packaging (títulos y miniaturas), dinero (outreach a sponsors, nada sale sin su OK) y QA/analítica.
- **Resultado:** un guion "scored a solid A-minus". No da datos de crecimiento del canal. Avisos: "Building a single super bot always fails". Seis bots con rutinas complejas "can chew through a week's allowance in a single afternoon". Según la doc que cita, los bots comparten una computadora en la nube que no es una frontera de seguridad. (El post promociona otro producto.)
- **Qué copiamos para OnIA:** ojo con las **rutinas programadas de Grok**, que son las que más cuota queman. Lo programado va a n8n, no a rutinas de Grok Bot. Y **no autentiques cuentas sensibles** (pagos, Meta Ads) en la computadora compartida de Grok Bot.

### 18. Curso de 2 horas: ejecutivos que enrutan a especialistas
- **Quién:** Nate Herk (YouTube), resumido por openclawdatabase.com
- **Links:** https://www.youtube.com/watch?v=4hKJ9X6rGFo (título "Build & Sell Grok Bots (2 Hour Course)" verificado; el canal lo saco del resumen) · https://openclawdatabase.com/news/videos/2026-08-31-grok-bot-agent-team-setup/index.md
- **Qué montó:** la descripción de cada bot funciona como **tabla de enrutamiento**, porque es lo que leen los otros para decidir si le pasan trabajo. Propone una capa ejecutiva: hablas con pocos ejecutivos y cada uno enruta a 2 o 3 especialistas. El Chief of Staff primero busca dueño y delega, y solo hace el trabajo si no hay especialista. Usa una rutina semanal de archivo y refleja los proyectos en un gestor de tareas externo para que un humano los revise.
- **Resultado:** no reporta resultado medible (es un curso).
- **Qué copiamos para OnIA:** escribe la descripción de Negocio y Producto como **lista de "qué me llega / qué no"**, porque SUM enruta leyéndola. Encaja con la estructura de la sección 3: SUM es el ejecutivo y debajo hay 2 especialistas.

### D. n8n en negocios reales

### 19. Asistente de WhatsApp que carga leads al CRM (inmobiliaria)
- **Quién:** System AI (Amr Hasanin) para The Srama Group, caso oficial de n8n
- **Link:** https://n8n.io/case-studies/system-ai
- **Qué montó:** el personal manda texto o audio por WhatsApp (Twilio). n8n transcribe, detecta la intención y crea o actualiza el lead en Zoho CRM o la propiedad en Google Sheets. Responde por WhatsApp con **link directo a la pestaña** de la hoja para verificar. LangSmith registra los pasos de IA.
- **Resultado:** cada tarea administrativa bajó de 4–5 min a 10–20 s ("97%"). Ahorran ~1 día por semana. El tiempo de alta a venta pasó de 62 a 44 días.
- **Qué copiamos para OnIA:** **es casi exactamente el flujo de leads de OnIA.** WhatsApp/audio → n8n → hoja de leads, con confirmación + link para revisar. Un solo nodo LLM (clasificar intención), no un agente.

### 20. 3 workflows internos medidos al detalle
- **Quién:** TUP (software de almacenes), equipo de IA y automatización de Julian Stock, caso oficial de n8n
- **Link:** https://n8n.io/case-studies/tup/
- **Qué montó:** la IA lee avisos de enfermedad por email y n8n crea el evento y los mensajes. También aprueba el trabajo remoto según reglas, y un chatbot interno responde con la base de conocimiento.
- **Resultado:** 1.282 ejecuciones en 30 días con 12 fallas (0,94%) y 26 horas ahorradas.
- **Qué copiamos para OnIA:** medir **ejecuciones y % de fallas** de cada workflow de n8n, no solo "horas ahorradas".

### 21. 200 workflows y "AI Champions" por área
- **Quién:** Huel (marca de nutrición), caso oficial de n8n
- **Link:** https://n8n.io/case-studies/huel
- **Qué montó:** asistentes en Slack (legal, facturas), workflows que leen datos, los analizan con IA y los publican en otro sistema, y herramientas internas sobre n8n + Airtable. Lo arma un equipo central de 3 personas más "campeones" por departamento.
- **Resultado:** de 75 a casi 200 workflows activos. Más de £100.000 ahorrados en licencias y más de 1.000 horas en 9 meses. Arrancaron con 5 casos de prueba.
- **Qué copiamos para OnIA:** **gobernanza desde el día 1**: monitorean los workflows por API, tienen puertas de aprobación y alertan cuando alguien usa un webhook. Para OnIA, n8n avisa si aparece un workflow nuevo con webhook público.

### 22. Una gestoría contable y un negocio que respondía 40–50 clientes a mano
- **Quién:** usuarios Glorious y Parintele_Damaskin, foro de n8n (sep 2025)
- **Link:** https://community.n8n.io/t/has-anyone-actually-automated-a-real-business-problem-and-saved-thousands-in-time/189030
- **Qué montó:** (a) una gestoría contable automatizó documentos y seguimientos a clientes; (b) un agente de IA responde preguntas básicas de 40–50 clientes.
- **Resultado:** (a) "600 hours" al año y, al crecer 4x en clientes sin contratar, "2,400 hours" y "approximately $30,000" (parte del logro es de otro software); (b) antes gastaba "at last 2 hours a day". No da cifra después de automatizar.
- **Qué copiamos para OnIA:** las **preguntas frecuentes de alumnos** (horarios, precio, link de clase) son el primer candidato para un nodo LLM con base de respuestas fija.

### 23. Pedidos de e-commerce en 6 pasos sin IA
- **Quién:** MC BLADE (DEV Community; cuenta nueva y con producto promocionado, tómalo con pinzas)
- **Link:** https://dev.to/mc_blademcblade_f2a7921/how-i-automated-an-e-commerce-business-using-n8n-and-saved-20-hoursweek-4219
- **Qué montó:** un trigger de Gmail extrae el pedido, lo carga en Sheets/Airtable, confirma al cliente, avisa a fulfillment por Slack/WhatsApp y envía el email de tracking.
- **Resultado:** "Saved 20+ hours/week" y "Zero missed orders", sin método de medición.
- **Qué copiamos para OnIA:** la **inscripción a un taller** es el mismo flujo: pago por QR confirmado → hoja → mensaje de bienvenida → aviso a Sergio. Es determinista, sin agente.

### E. Equipos y comunidad

### 24. Growth Marketing de Anthropic: 2 subagentes para anuncios
- **Quién:** equipos internos de Anthropic
- **Link:** https://claude.com/blog/how-anthropic-teams-use-claude-code
- **Qué montó:** un flujo que lee CSVs con cientos de anuncios, marca los que rinden mal y genera reemplazos respetando el límite de caracteres, con **dos subagentes especializados**. Además, un plugin de Figma que genera hasta 100 variaciones.
- **Resultado:** "hundreds of new ads in minutes instead of hours". Otros equipos reportan: seguridad ~3x más rápido e inferencia con 80% menos tiempo de búsqueda.
- **Qué copiamos para OnIA:** para Growth y Anuncios, **un subagente que critica** (marca los peores según métricas) **y otro que reescribe** con los límites de Meta, todo en borrador.

### 25. "Simplicity always wins": 13 lecciones de un año con agentes
- **Quién:** u/helk1d en r/ClaudeAI (mirror)
- **Link:** https://reddit.sentinel-team.org/posts/1r0dxob/snapshots/2026-02-10T16%3A30%3A17.793552Z
- **Qué montó:** un año escribiendo el 100% de su código con agentes. Revisa los diffs de lógica crítica y evita llamadas a LLM innecesarias.
- **Resultado:** no reporta resultado medible. Comentario destacado: "An agent with 50 lines of focused instructions outperforms one with 500 lines of comprehensive guidance every time."
- **Qué copiamos para OnIA:** **descripciones de bot de ~50 líneas como máximo.** Si hace falta más, va a un manual que se carga solo cuando hace falta.

### Qué cambia en la arquitectura

**Lo que confirman los casos (sin cambios):**
- **Un solo jefe que habla contigo.** Lema, Robinson, Proser, Herk y Himer terminan con un Chief of Staff como único interlocutor. Es el rol de SUM.
- **Un bot = un trabajo.** "Building a single super bot always fails" (Robinson). Instrucciones de ~50 líneas (Reddit). Lo mismo dicen Lema, Herk y Creative Brain.
- **Escribe uno y revisa otro de distinta familia.** Penna y Mejba lo confirman con Codex y Claude, igual que nuestra regla de oro.
- **Máximo 2 vueltas.** Carson usa 2 vueltas de revisión y Mejba descarta el plan si pide una 3.ª. Coincide con `max_vueltas: 2` y la alerta de la métrica 3.
- **Prohibiciones en hooks, no en prompt.** Creative Brain bloquea force push y `DROP DATABASE` con PreToolUse. Proser exige un toque de aprobación para dinero y envíos.
- **Lo fijo a n8n con un nodo LLM puntual.** System AI, TUP, Huel y la gestoría muestran ahorros medibles sin agentes autónomos.
- **Un resumen con decisiones, no avisos sueltos.** Ryu0705 (propuestas en archivo), Himer (resumen diario) y Lovin (se queja del exceso de avisos) apuntan a lo mismo.

**Lo que contradicen o matizan (ya editado en la sección 3 con "(ajustado por casos reales)"):**
1. **El estado de SUM no puede vivir en el hilo de Grok.** Lovin lo describe como opaco, con bucles. Carson y Creative Brain usan una lista canónica y archivos. → El estado va en archivos y en el panel.
2. **Las rutinas de Grok Bot queman la cuota.** Seis bots se comen la cuota semanal en una tarde (Robinson). → Grok Bot no tiene rutinas programadas: todo lo programado lo dispara n8n.
3. **La computadora compartida de Grok Bot no es una frontera de seguridad** (Robinson citando la doc). → No se autentican cuentas sensibles ahí.
4. **Codex necesita tareas cortas y verificación real** (Penna). → Menos de 25 min por tarea, máximo 3 en paralelo, y "terminado" = exit code + archivos esperados, no la última línea.
5. **Faltaba medir fallas y matar lo que nadie usa** (TUP, Himer). → La métrica 6 suma el % de fallas de n8n, y cada automatización o producto nuevo nace con un umbral de cierre.
6. **Las decisiones necesitan evidencia** (Carson con video, System AI con link a la hoja). → El formato de decisión suma "Evidencia: link/captura".
7. **Los mensajes de clientes son datos, no órdenes** (Proser). → Regla nueva para Negocio.

---

## Links

### ✅ Verificados (los abrí y cargaron)
- https://code.claude.com/docs/en/sub-agents
- https://code.claude.com/docs/en/hooks-guide
- https://code.claude.com/docs/en/headless
- https://code.claude.com/docs/en/best-practices (el link viejo de anthropic.com redirige aquí)
- https://code.claude.com/docs/en/scheduled-tasks
- https://code.claude.com/docs/en/costs
- https://www.anthropic.com/engineering/multi-agent-research-system
- https://www.anthropic.com/engineering/building-effective-agents
- https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
- https://learn.chatgpt.com/docs/non-interactive-mode (developers.openai.com redirige aquí)
- https://learn.chatgpt.com/docs/agent-configuration/agents-md
- https://learn.chatgpt.com/docs/cloud
- https://agents.md/
- https://github.com/openai/codex-plugin-cc
- https://github.com/ruvnet/ruflo (antes claude-flow)
- https://huggingface.co/blog/smolagents
- https://huggingface.co/docs/smolagents/examples/multiagents
- https://cognition.com/blog/dont-build-multi-agents
- https://arxiv.org/abs/2503.13657
- https://arxiv.org/abs/2604.02460
- https://community.n8n.io/t/agentic-vs-deterministic-i-built-the-same-n8n-workflow-both-ways-the-agent-lost/291065
- https://pablostanley.substack.com/p/a-heated-rivalry-claude-code-openai
- https://reddit.sentinel-team.org/posts/1r3v7gl/snapshots/2026-02-13T19%3A15%3A55.121623Z (mirror de un post de r/ClaudeAI)
- https://www.youtube.com/watch?v=J5B9UGTuNoM ("I'm HOOKED on Claude Code Hooks"). La página abrió y el título coincide. El canal (IndyDevDan) y la fecha (julio 2025) los saqué de resúmenes de terceros.

**Nuevos, de la sección 4 (casos reales, nov 2026):**
- https://dev.to/ryu0705/how-i-built-a-fully-autonomous-ai-company-using-only-claude-code-16ob
- https://dev.to/unbearablelabs/i-run-my-one-person-company-as-a-20-agent-ai-org-heres-what-broke-2ik4
- https://zackproser.com/blog/the-agent-fleet
- https://dev.to/_a01b1cf457db386dd25f1/how-a-solo-founder-runs-a-business-with-20-ai-agents-53ac
- https://michaeldishmon-com.vercel.app/writing/claude-code-solo-founder-gap
- https://dev.to/ryancwynar/the-ai-co-founder-that-never-sleeps-3a7b
- https://creatoreconomy.so/p/how-this-5x-founder-runs-his-startup-solo-with-ai-agents-ryan-carson
- https://www.youtube.com/watch?v=IDqdVZwAwjw (título coincide: "How This 5x Founder Runs His Startup Solo With AI Agents")
- https://www.chatprd.ai/how-i-ai/how-ryan-carson-manages-40-prs-a-day-with-devin-and-codex
- https://penchan.co/en/ai/openclaw/cc-orchestrator/
- https://www.mejba.me/blog/claude-code-codex-plugin-dynamic-duo-workflow-2026
- https://dev.to/creative_brain_inc/i-gave-claude-code-16-specialist-roles-now-i-ship-full-stack-features-before-lunch-4l50
- https://simonwillison.net/2025/Oct/5/parallel-coding-agents/
- https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/
- https://steipete.me/posts/2025/shipping-at-inference-speed
- https://lucumr.pocoo.org/2025/6/12/agentic-coding/
- https://chrislema.com/grok-bot-ten-ai-teammates
- https://brianlovin.com/writing/grok-bot-first-impressions-kcJun01
- https://www.ryrob.com/grok-bot-ai-agents/
- https://www.youtube.com/watch?v=4hKJ9X6rGFo (título coincide: "Build & Sell Grok Bots (2 Hour Course)"; la página no mostró el canal)
- https://openclawdatabase.com/news/videos/2026-08-31-grok-bot-agent-team-setup/index.md (resumen del video anterior; atribuye el curso a Nate Herk)
- https://n8n.io/case-studies/system-ai
- https://n8n.io/case-studies/tup/
- https://n8n.io/case-studies/huel
- https://community.n8n.io/t/has-anyone-actually-automated-a-real-business-problem-and-saved-thousands-in-time/189030
- https://dev.to/mc_blademcblade_f2a7921/how-i-automated-an-e-commerce-business-using-n8n-and-saved-20-hoursweek-4219
- https://claude.com/blog/how-anthropic-teams-use-claude-code (anthropic.com/news redirige aquí)
- https://reddit.sentinel-team.org/posts/1r0dxob/snapshots/2026-02-10T16%3A30%3A17.793552Z (mirror de r/ClaudeAI)

### ⚠️ No pude verificar
- **reddit.com directo** (r/ClaudeAI, r/LocalLLaMA): mi herramienta no puede abrir reddit.com, así que usé el mirror de arriba. No encontré ningún hilo de r/LocalLLaMA que sirviera para citar.
- **Cognition, "Multi-Agents: What's Actually Working" (abril 2026):** el link (https://x.com/walden_yan/article/2047054401341370639) dio error 402. Lo de "un solo escritor más subagentes sin estado" lo saqué de resúmenes de terceros.
- **LinkedIn:** no encontré ningún post concreto y verificable sobre el tema, así que no cito ninguno.
- **Grok Bot:** ~~no hay documentación pública sobre cómo coordinar varios bots de Grok~~. Actualización: ya hay casos de practicantes con el modo equipo (casos 15 a 18 de la sección 4). Vi que existe doc oficial (`docs.x.ai/grok-bot/...`, `cursor.com/docs/grok-bot/teams`) en resultados de búsqueda, pero **no la abrí**. Lo de "la computadora compartida no es frontera de seguridad" lo cita Ryan Robinson de esa doc.
- **Casos descartados (404 o sin abrir):** dev.to/pat9000 (startup AI-native en Tennessee) y olelehmann.beehiiv.com ("army of AI agents") dieron 404. La nota de pulse.bot sobre Ryan Carson no la abrí; usé la fuente original. Los casos de n8n de Metizsoft, Delivery Hero y Vodafone solo aparecieron en buscadores o páginas de agencias, y no los verifiqué.
- **Repo lcsmas/orchestra** (Claude Code + Codex en worktrees, con un hook que impide al orquestador editar archivos de sus hijos): abrió bien, pero tiene 0 ⭐ y no reporta uso real, así que no lo cuento como caso.
- **codex.danielvaughan.com** (flags como `codex cloud exec --attempts`): es un blog no oficial y no lo abrí.

