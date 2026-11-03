# Relevo de Claude a Codex: cómo funciona, a dónde mudarse y cómo se comparte lo aprendido

3-nov-2026. Lo pidió Sergio Urcullo en el proyecto Onia de claude.ai: "quiero que vos vayas armando el relevo a codex, mira como funciona la app, o donde deberiamos de mudarnos, tambien temas economicos, o decisiones futuras en donde las veo, y estamos compartiendo learning entre sesiones no?" (sin enlace).

Este documento no repite los pasos para abrir las tres áreas en Codex: están en el [README de los tres proyectos](../equipo-agentes/README.md), "En Codex, después" y "Relevo a Codex". Acá va lo que faltaba: qué es Codex hoy, cuánto cuesta cada opción, dónde se miran las decisiones y cómo pasa lo aprendido de una sesión a otra.

## 1. Cómo funciona Codex

Fuentes: [precios de Codex](https://learn.chatgpt.com/docs/pricing), [AGENTS.md en Codex](https://learn.chatgpt.com/docs/agent-configuration/agents-md), [Codex Cloud (Legacy)](https://learn.chatgpt.com/docs/environments/cloud-environment) y [subagentes](https://learn.chatgpt.com/docs/agent-configuration/subagents.md), leídas el 3-nov.

**Dónde corre.** La página de Codex Cloud lista: la app de escritorio de ChatGPT (con una sección para Windows, su sandbox y WSL), la app del celular, ChatGPT en la web, la CLI (`codex`), la extensión para el editor y Codex Cloud. Esa página se titula "Legacy" y dice que sigue sirviendo para Code Review y las integraciones con GitHub y Linear; para lo nuevo remite a los entornos en la nube "en web, celular y escritorio".

**Qué usa ONIA y por qué.** La CLI en la PC, una ventana de PowerShell por área, con su carpeta y su perfil (README, "En Codex, después"). Es lo único probado: el 2-nov se probó `codex -p <perfil> exec --sandbox read-only` en cada carpeta ([coordinacion](../equipo-agentes/coordinacion.md), "Ensayo del 2-nov"). Corre en la PC, así que llega a WSL, al navegador de Ubuntu y a PowerShell, que un proyecto de Claude no ve. La nube de Codex no ve la PC, y la app de escritorio no se probó: quedan para más adelante.

**Qué lee al arrancar.** Codex carga solo los `AGENTS.md`: el global (`~/.codex`), y desde la raíz del repo hasta la carpeta donde se abre, uno por carpeta, con un tope de 32 KiB entre todos. El `AGENTS.md` de ONIA-CENTRAL pesa 13 KB, entra. La página no dice que siga enlaces ni los `@` del `CLAUDE.md`: el resto (Núcleo de lecciones, "Ahora" del estado, tablero) Codex lo lee porque el `AGENTS.md` se lo pide en "Cada jefe lee al arrancar", no porque se cargue solo. Por eso la línea de cada área le dice "Leé solo lo que pide el AGENTS.md".

**Las tres áreas en Codex,** igual que en Claude:

| | En Claude (hasta el corte) | En Codex |
|---|---|---|
| El jefe | El chat del proyecto | Una ventana de PowerShell con `codex -p <perfil>` |
| Una tarea larga | Un hilo del proyecto | Un subagente o la skill [`encargar`](../../.agents/skills/encargar/SKILL.md) (sin probar en la PC) |
| La revisión | Un agente nuevo | `codex exec --sandbox read-only` |
| La PC | No llega: se pide en un issue | Llega, con los mismos frenos |
| Lo que dura | El repo, por PR | El repo, por PR |

## 2. A dónde mudarse y cuánto cuesta

Meta: Bs 3.000 cobrados con el taller del 4, 5 y 6-nov ([`negocio.md`](../equipo-agentes/negocio.md)). El criterio de abajo, no sumar gasto hasta tener ventas, es la recomendación de este documento, no una decisión de Sergio Urcullo. Hoy se paga ChatGPT Pro de US$100, activo hasta el 14-nov: lo dijo Sergio Urcullo el 2-nov en el proyecto Onia de claude.ai (sin enlace). Ese día tenía el 62% del cupo semanal y 3 restablecimientos completos, que caducan el 6-nov, el 30-nov y el 1-dic. Con eso queda contestado el "Plus o Pro" de `docs/decisiones/2026-10-29-mapa-operacion-onia.md`. Precios en dólares por mes, con pago mensual, de las páginas oficiales del 3-nov: [Codex](https://learn.chatgpt.com/docs/pricing) y [Claude](https://claude.com/pricing). En bolivianos, al cambio de Bs 12,12 del 29-oct que usa el plan del taller (`workshops-comunidad/plan-meta-ads-borrador.md`, línea 120); el banco puede cobrar con otro.

| Opción | US$/mes | Bs/mes | Qué da | Contra |
|---|---|---|---|---|
| A. ChatGPT Pro (el de hoy) | 100 | 1.212 | Todo lo de Plus, sin tope de 5 horas | Es caro para hoy: unas 25 inscripciones de Bs 50, antes de impuestos, solo para pagarlo |
| B. ChatGPT Plus | 20 | 242 | CLI, web, extensión, celular y nube. Tope por 5 horas: 15 a 160 mensajes con GPT-6.1 Sol, 350 a 3.000 con GPT-6 Luna | Unas 5 inscripciones de Bs 50 por mes. Con tres áreas a la vez puede quedarse corto en el modelo grande |
| C. ChatGPT Go o Free | 8 o 0 | 97 o 0 | Solo la app de escritorio, con GPT-6 Luna, "sujeto a despliegue" | No trae la CLI, que es lo que está armado y probado |
| D. Volver a Claude Pro | 20 | 242 | Claude Code incluido | Hay que rehacer en Claude lo que se armó para Codex (perfiles, `encargar`); tope de uso propio |
| E. Claude Max | 100 | 1.212 | Claude Code con más uso | Mismo costo que A, sin ventaja para lo ya armado |
| F. API por uso (Codex o Claude) | Variable | Variable | La CLI de Codex con una clave, sin funciones en la nube | Cobra por uso: es gasto sin tope fijo ("Plata y gasto", [lecciones](../lecciones.md)) |

**Recomendación:**

1. **Hasta el 14-nov, nada cambia:** el Pro ya está pago y es el que tiene más margen. Los restablecimientos que caducan el 6-nov conviene usarlos antes, en el taller. Se usa para el taller y para dejar todo andando en Codex.
2. **El 12-nov, cuando Sergio Urcullo decide** ([plan del 1-nov](2026-11-01-plan-equipo-y-paso-a-codex.md), "Codex también vence"):
   - si el taller llegó a la meta, seguir con A, porque tres áreas a la vez gastan mucho;
   - si vendió algo pero no la meta, bajar a B (US$20), que mantiene la CLI y lo armado;
   - si no vendió, B igual o cortar: con C se pierde la CLI, y sin motor el equipo se frena.
3. **No volver a Claude por ahora** (D o E): cuesta lo mismo que B o A y obliga a rehacer el armado. Tiene sentido solo si Codex no rinde en el trabajo real; eso se ve hasta el 12-nov.

Sin comprobar y fuera de la tabla: otras herramientas gratis (por ejemplo, otras CLI de agentes). No se probaron con este repo, y cambiar de herramienta en plena venta del taller es el riesgo más grande.

## 3. Dónde se ven las decisiones

En un solo archivo fijo: [`docs/pendientes-de-sergio.md`](../pendientes-de-sergio.md). Tiene lo que espera a Sergio Urcullo, por área, con enlace a dónde está el detalle, y abajo las decisiones futuras con fecha. Para verlo sin entrar a GitHub, le pide a cualquier jefe "¿qué decisiones tengo pendientes?" y el jefe lo lee.

Hoy el archivo es una foto del 3-nov: cada estado sigue teniendo su lista. Que cada jefe lo lea al arrancar y lo ponga al día al cerrar es un cambio al `AGENTS.md`, así que lo decide Sergio Urcullo.

## 4. Cómo se comparte lo aprendido entre sesiones

Sí, pero solo lo que entra al repo. Una sesión no aprende sola: sabe lo que lee al arrancar.

- **Lo que vale para todas:** el "Núcleo" de [`docs/lecciones.md`](../lecciones.md). El `AGENTS.md` se lo hace leer a Claude y a Codex.
- **Lo de un área:** "Ahora" y "Correcciones de Sergio" de su estado, en `docs/equipo-agentes/`. Cada corrección de Sergio Urcullo se anota en el mismo turno (`AGENTS.md`, "Errores y lecciones").
- **Entre áreas:** el tablero del [issue #111](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/111).
- **Lo que no pasa a Codex:** la memoria de los proyectos de Claude y lo que quedó solo en un hilo. Por eso, antes del corte, cada proyecto deja su "Ahora" mergeado (README, "Relevo a Codex", paso 1).

Un riesgo a mirar: `docs/lecciones.md` pesa 41 KB y crece. Codex no lo carga solo, lo lee porque se lo pide el `AGENTS.md`, y el Núcleo está arriba para que alcance con leer ese tramo. Si el Núcleo pasa de unas 20 líneas, conviene podarlo.
