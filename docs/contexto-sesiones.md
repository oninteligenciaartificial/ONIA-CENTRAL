# Contexto de las sesiones e hilos del proyecto Onia (2 y 3-nov-2026)

Foto del 3-nov-2026, 17:00 UTC (13:00 en Bolivia). Resume los hilos del proyecto "Onia" de claude.ai, para que Codex, Grok Bot o un Claude nuevo sepan qué se hizo sin leer los chats, que no se ven desde el repo. Sale de leer cada hilo, la memoria del proyecto de Claude y los PRs abiertos de este repo a esa hora.

Es una foto: no se pone al día sola. Lo que vale hoy para cada área está en su estado de `docs/equipo-agentes/`, en [`docs/pendientes-de-sergio.md`](pendientes-de-sergio.md) y en el [plan del taller](plan/taller-3000.md). Si algo de acá contradice a esos archivos, mandan ellos.

## Cómo se trabajó estos dos días

- El 2-nov, Sergio Urcullo abrió el proyecto "Onia" en claude.ai: un coordinador que habla con él y abre un hilo por tarea. Cada hilo es un Claude con los repos ONIA-CENTRAL, `onia-platform` y `sergiourcullo`.
- El 2-nov decidió tres jefes por área (PR #169). El 3-nov, a las 03:33 UTC, eligió "coordinador hoy, Codex mañana": mientras dure Claude, se trabaja en este proyecto con un hilo por tarea. Cómo queda Codex se decide el 4-nov.
- Claude se cierra el 3-nov a la tarde (Bolivia). Codex (ChatGPT Pro, US$100/mes) sigue hasta el 14-nov, y el 12-nov Sergio decide si renueva ([relevo a Codex](decisiones/2026-11-03-relevo-a-codex.md)).
- Los hilos que tocan la PC de Sergio (Windows con WSL Ubuntu) usan Remote Control. El modo automático de Claude Code en la PC frena los merges y el `ssh` al VPS aunque Sergio haya dicho que sí en el chat: hay que aprobarlo en el aviso de la app, o lo corre él en PowerShell.

## Reglas de la memoria del proyecto

Estas reglas estaban solo en la memoria del proyecto de Claude, que Codex y Grok no leen. Las dijo Sergio Urcullo el 2 y el 3-nov. No cambian el `AGENTS.md`: donde se crucen, manda el `AGENTS.md`.

1. **Objetivo, sin halagos.** Quiere respuestas analíticas, la mejor opción aunque no sea la que le gusta. No programa: hay que explicarle los términos, porque quiere aprender cada día.
2. **No se lanza un hilo ni una tarea nueva hasta que él diga "lanzá".** Lo que no pidió se le propone en una línea. Las cosas se estudian con investigación, no se adivinan.
3. **Terminar antes de abrir** (3-nov, 05:32 UTC). No se abre otra tarea ni se relanza un hilo hasta cerrar la que está en curso. Su mayor miedo son las sesiones llenas de contexto que no terminan. Cada hilo tiene definido su paso final.
4. **Al terminar cada hilo, se le dice cómo seguir** (3-nov, 05:35 UTC): el siguiente paso concreto.
5. **Tareas cortas, un entregable.** Las áreas son carpetas del repo, y van 2 o 3 tareas a la vez como mucho.
6. **Una revisión, un agente.** Nunca rondas con muchos agentes. Si dice "cerralo", "pará" o "vas X horas", se frena todo en ese turno, se sube lo hecho y se contesta en una línea qué quedó.
7. **No se le nombran PRs por número.** Se le dice qué cambia y para qué, y "¿Lo aceptás?".
8. **Cuentas del navegador del equipo, solo lectura.** Instagram está con la sesión `sergiourcullo`. Las credenciales nunca van por chat.
9. **Todo al repo ONIA-CENTRAL**, para que Codex lo lea.
10. **Método:** referentes, entender, replicar bien hecho, automatizar de a poco.
11. **La visión cambia:** `docs/vision/` es lo que piensa hoy. Cuando cambia, se pone al día y se suma una entrada al [historial](vision/historial.md), sin borrar.
12. **Su tiempo:** colegio de 8 a 12 y de 14:30 a 17 o 18, gimnasio; libre desde las 19:00 (Bolivia). Vacaciones desde principios de diciembre. Deja la PC prendida todo el día. Hoy no tiene plata y tiene deuda de tarjeta: cualquier gasto se le marca.

## Datos que fijó Sergio

- **Meta:** Bs 3.000, o sea 60 talleres de Bs 50.
- **Fecha del taller:** en pausa desde el 3-nov ("no definimos fecha, tenemos tiempo, armemos todo primero"). Ya no son el 4, 5 y 6-nov.
- **Lanzamiento de la campaña:** viernes 6-nov, orgánica primero, 3 videos por día. El miércoles 4 y el jueves 5 a la noche graba y une Instagram con la página de Facebook de Onia, con una prueba completa antes del 6.
- **Embudo:** reel con palabra clave, DM automático, guía en la bóveda "Sergio Urcullo" (con video horizontal), recurso exclusivo en Onia Community, taller de Bs 50, comunidad paga (propuesta: Bs 100/mes, precio fundador). Sin cuestionario.
- **Calendario de contenido:** del 4 al 20-nov; 09:00 noticia, 12:30 proceso, 19:30 valor; un trial reel por día; YouTube horizontal los domingos; se ajustan los horarios el 15-nov.
- **Herramientas:** Codex hasta el 14-nov; Higgsfield hasta el 1-dic; n8n en el VPS de Hostinger. Modelos: Sonnet 5.5 en Marketing, Opus 5.5 en Desarrollo y Platform (bajar un hilo a Sonnet falló el 3-nov: no está disponible para Claude Code en la organización).
- **WhatsApp de ventas:** +591 75414930, conectado solo por la API, no por la app (3-nov).

## Hilos, uno por uno

Orden de apertura. "En main" quiere decir mergeado; "sin mergear", que está en una rama.

### 1. Entender el contexto de ONIA y el trabajo con Grok (2-nov) — cerrado
- **Pedido:** probar si el proyecto lee el contexto de ONIA y cómo trabajó Sergio con Grok.
- **Quedó:** un resumen en el chat. Grok Bot fueron 7 agentes en la nube que pasaban el trabajo a Claude y Codex. Su trabajo está en las ramas `grokbot/workspace-20261101` y `onia-loop-excepcion-d003`, sin mergear. Riesgos que marcó: PRs de Grok sin revisión escrita, datos de un lead en la rama y el respaldo semanal del VPS que dependía de un bot suyo, sin comprobar.

### 2. Diagnosticar la pérdida de contexto en las sesiones (2-nov) — cerrado
- **Pedido:** por qué las sesiones "se pierden" y tardan.
- **Quedó:** diagnóstico ([artefacto](https://claude.ai/artifact/Lvj9Lxh6Y4cx6mP4QVhWv5)): las sesiones solo saben lo que leen al arrancar, el arranque es pesado y el proceso de revisiones era la mayor causa de lentitud. Con eso se armaron la skill `encargar` (PR #168) y los tres jefes por área (PR #169), en main.
- **Error que dejó regla:** tres rondas de revisión con decenas de agentes, más de 2 horas. Sergio lo paró ("Cerralo ahora", "No lo paraste nunca"). De ahí la regla de una sola revisión.
- **Sin hacer:** el informe escrito de "contaminación del repo" y los trabajos de cada proyecto; se frenó por orden de Sergio.

### 3. Lanzar los anuncios de Meta del taller (2-nov) — cerrado sin trabajo
- Se abrió sin que Sergio lo pidiera y se frenó: "No dije que lances, primero esperamos que terminamos y ahí armamos los proyectos". La campaña en borrador sigue en el PR #120, sin mergear.

### 4. Poner tope a las revisiones y chequear el repo (3-nov) — cerrado
- **Quedó en main:** una sola revisión por PR y encargos de unos 30 minutos (PR #170); Hermes pasado a historia en `llevar-issue` y en las lecciones (PR #171). Se le pasaron a Sergio los textos de instrucciones de los tres proyectos, comprobados contra main.
- **Ojo:** la skill `llevar-issue` no puede lanzar nada, porque leía la cuota con Hermes, que ya no está en la PC. Por ahora se usa `encargar`.

### 5. Probar la conexión con la PC (3-nov) — cerrado
- **Quedó:** Remote Control anda en la PC (`desktop-env6sda\pc`), con WSL Ubuntu. Claude Code está instalado también en Ubuntu, con su propio login.

### 6. Armar el relevo de Claude a Codex (3-nov) — cerrado
- **Quedó en main:** [relevo a Codex](decisiones/2026-11-03-relevo-a-codex.md) y [pendientes de Sergio](pendientes-de-sergio.md) (PRs #172 y #173). Recomendación: el 12-nov, si el taller llegó a la meta, sigue Pro (US$100); si no, ChatGPT Plus (US$20). No volver a Claude por ahora.
- **Espera a Sergio:** si cada jefe lee y pone al día `pendientes-de-sergio.md` (cambia el `AGENTS.md`).

### 7. Elegir cómo coordinar las 3 áreas (3-nov) — cerrado
- **Decisión de Sergio:** "coordinador hoy, Codex mañana". La recomendación para Codex es una ventana coordinadora con subagentes, y `encargar` para las tareas de navegador. Se le presenta el 4-nov, con su objeción del 2-nov a la vista ("se va a llenar demasiado su memoria"). Si la acepta, cambia la regla "sin jefe general" del `AGENTS.md`.

### 8. Escribir los guiones de la semana para marca personal (3-nov) — cerrado
- Se cerró enseguida; el trabajo siguió en el hilo 13.

### 9. Probar Instagram en el navegador del equipo (3-nov) — cerrado
- **Quedó:** el perfil `equipo` del Chromium de WSL abre Instagram con la sesión `sergiourcullo`. Un mismo perfil no lo pueden usar dos programas a la vez.

### 10. Analizar a Erik Taveras y elegir skills (3-nov) — abierto, espera a Sergio
- **En main:** el análisis de edición de Erik, la skill `editar-video` y la plantilla "cara con íconos" (PRs #178, #179, #181, #183); los formatos de edición y el inventario de skills ([`skills-inventario.md`](skills-inventario.md), PR #190).
- **Sin mergear:**
  - PR #204: las 10 skills del taller (8 de Marketing y 2 de HyperFrames), el índice por sección y las reglas de la memoria de Claude pasadas a lecciones. La revisión aprobó y se arregló; la PC frenó el merge. Como trae skills de afuera, lo aprueba Sergio.
  - PR #177: cómo trabaja Erik. Según el hilo, repite lo que ya entró.
  - En `onia-platform`, un cambio con 3 skills de Supabase y Prisma, sin revisión.
- **Último pedido (15:38 UTC):** un inventario de todas las skills, plugins, MCP y reglas de la PC, de claude.ai y de los repos, sin cambiar nada. Está entregado. Diagnóstico: el repo no es la única fuente porque cada herramienta suma reglas propias, las skills del repo no llegan a Claude en la nube (`.claude/skills` está en `.gitignore`), hay unos 17 cambios sin mergear y claude-mem sigue activo en Codex.
- **Espera a Sergio:** por dónde empezar a decidir el inventario, fila por fila (al repo, queda en la herramienta o se saca).

### 11. Armar el embudo de venta del taller (3-nov) — abierto, espera a Sergio
- **En main:** la investigación de la campaña, cómo venden los referentes y la comparación de páginas de venta (PR #196, en `workshops-comunidad/`).
- **Sin mergear:** PR #180, los textos del embudo (comentarios, DM, bienvenida de WhatsApp y oferta de la comunidad). Son textos para clientes: van con su sí y captura.
- **Espera a Sergio:**
  1. Precio de la comunidad. Recomendado: el primer mes incluido con el taller y después Bs 100/mes, precio fundador.
  2. La página `/taller`: recomendado pasarla a lista de espera, porque la cuenta regresiva apunta a fechas ya pausadas y va a terminar diciendo "El taller ya empezó".
  3. El saludo nuevo de WhatsApp antes del primer video, y el sí a los textos del embudo.

### 12. Volver a prender el backend (3-nov) — terminado
- **Quedó:** el VPS nunca estuvo apagado. Lo roto era el runner de la CI, que se rearmó con el sí de Sergio, y la primera prueba de ONIA Platform pasó. Cómo se entra al VPS quedó en `producto.md` (PR #185, en main).
- **Espera a Sergio:** dónde guardó la copia de la clave del VPS (la bóveda de KeePassXC todavía no existe).
- **Siguiente recomendado:** mirar, solo leyendo, de dónde le llega a la plataforma la IP de cada visitante, para aprobar un arreglo de seguridad pendiente.

### 13. Anotar la visión de ONIA en el repo (3-nov) — cerrado
- **En main:** `docs/vision/`, con los 6 puntos y el contexto de Sergio (PR #186). Plan número uno: el taller y 3 videos por día con calidad alta. Su frase: "tiene que verse bien, funcionar bien y estar bien hecho".

### 14. Dejar el traspaso listo para Codex (3-nov) — cerrado
- **En main:** el [traspaso del 3-nov](equipo-agentes/traspaso-codex-2026-11-03.md), con el lanzamiento del 6-nov, la visión como historia y el `AGENTS.md` apuntándolo (PR #188).

### 15. Armar los guiones diarios de contenido (3-nov) — cerrado
- **En main:** la guía de guiones (cada guion con palabra clave y su recurso), el calendario del 4 al 20-nov, los 3 guiones del 4-nov, la propuesta de Telegram (PR #189), y los recursos FUENTES, REGLAS y PEDIDO con el agregado al calendario: repo los sábados, caso real los jueves 12 y 19 y series que llevan al taller (PR #192).
- **Queda:** pasar las guías a la bóveda (repo `sergiourcullo`), subir los recursos a Onia Community, mirar 6 referentes más en Instagram y armar Telegram (toca el servidor: su sí).
- **De Sergio:** grabar los 3 guiones y conseguir un negocio real para el jueves 12.

### 16. Responder DMs de Instagram con n8n (3-nov) — abierto, espera a Sergio
- **Sin mergear:** PR #191, el DM automático por comentario: API oficial de Instagram con Instagram Login y n8n consultando cada 3 minutos, apagado y en modo prueba. App de Meta "OnIA Social API". ManyChat queda como plan de emergencia (gasto si pasa lo gratis).
- **Trabado:** cargar el flujo en el n8n del VPS (apagado) necesita que Sergio apruebe el `ssh` en el aviso de la app, o que lo haga Codex de Desarrollo.
- **Espera a Sergio:** sacar el token de su cuenta y cargarlo en n8n, y la prueba con una segunda cuenta.

### 17. Armar el plan para que funcione el taller (3-nov) — terminado
- **En main:** el [plan del taller](plan/taller-3000.md) y la [guía de herramientas para Codex](plan/herramientas-codex.md) (PRs #194, #197, #198, #201, #203), con Higgsfield, el chatbot de WhatsApp y el veredicto de los 30 repositorios (3 usar, 10 después, 17 no).
- **Espera a Sergio:** la fecha del taller, el precio de la comunidad, si los cobros se revisan a mano, y el OK a las skills de afuera.

### 18. Investigar formatos de video con Higgsfield (3-nov) — abierto, espera a Sergio
- **En main:** la guía `marca-personal/guias/higgsfield.md` (PRs #193, #199, #200). Higgsfield genera la materia prima y HyperFrames arma el video gratis. Desde el conector siempre se cobran créditos. Tope recomendado: 12 planos hasta el 20-nov. Un reel en animación 3D cuesta de 72 a 128 créditos más el personaje.
- **Último hallazgo:** la skill "anunciante-supremo" está en la cuenta de claude.ai desde el 17-oct, apagada. Usa APIMART, un servicio externo, que probablemente sea gasto aparte.
- **Espera a Sergio:** prenderla para leerla, o dejarla; reconectar el conector de Higgsfield; el tope de créditos. Cada generación pide su sí.

### 19. Planear el chatbot de WhatsApp en n8n (3-nov) — abierto, espera a Sergio
- **En main:** el plan, en `workshops-comunidad/chatbot-whatsapp-taller/plan.md` (PR #195).
- **Sin mergear:** PR #202, el flujo de n8n apagado y en modo prueba, con guía y prueba local. Ya tuvo revisión. Tiene mensajes a clientes: espera el "acepto" de Sergio.
- **En curso:** una revisión en solo lectura, desde la PC, de lo que hay en Chatwoot y n8n del VPS para el número de ventas. Esperaba que Sergio aprobara un comando en la PC.
- **Dato:** desde el 1-oct-2026, Meta cobra los mensajes de servicio pasados los 1.000 por número y por mes.

### 20. Escribir el contexto de todos los hilos (3-nov) — este archivo

## Cambios sin mergear en ONIA-CENTRAL

PRs abiertos a las 17:00 UTC del 3-nov:

| PR | Qué es | Hilo |
|---|---|---|
| #204 | Skills del taller, índice por sección y reglas de la memoria de Claude | 10 |
| #202 | Flujo de n8n del bot de WhatsApp, apagado y en modo prueba | 19 |
| #191 | DM automático por comentario en Instagram, apagado | 16 |
| #180 | Textos del embudo del taller, para el sí de Sergio | 11 |
| #177 | Cómo trabaja Erik Taveras (repite lo que ya entró) | 10 |
| #176 | Mapa de campañas de Meta y guiones de cada anuncio | anterior |
| #175 | Saca a Hermes de los ejercicios del plan de aprendizaje | anterior |
| #167 | Estado de ONIA Platform: avance de la cola del 2-nov | anterior |
| #162 | Seguimientos por estado del lead, rescatados de Grok Bot | anterior |
| #161 | Pasos para abrir cada área en la app de Codex | anterior |
| #141 | Embudo y FOMO de los referentes para la página del taller | anterior |
| #139 | Guiones de la semana del 3 al 8-nov | anterior |
| #131 | Temario y material del taller del 3, 4 y 5-nov | anterior |
| #120 | Campaña de Meta Ads del taller del 4, 5 y 6-nov | anterior |
| #72 | Temario, WhatsApp, guiones y lista para "Claude de 0 a 100" | anterior |
| #71 | Fichas de 4 referentes nuevos | anterior |
| #66 | Plan de marca personal y escalera de ventas | anterior |

Varios de los viejos quedaron atrás por la fecha en pausa del taller y por lo que ya entró. Decidir uno por uno si entra, se cierra o se pone al día es lo que propuso el hilo 10.
