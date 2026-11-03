# Guiones por Telegram: propuesta

3-nov-2026, por Claude Code (hilo "Armar los guiones diarios de contenido"). **Es una propuesta: no se construyó nada.** Toca el VPS, que es producción, y necesita un bot de Telegram a nombre de Sergio Urcullo, así que antes de armarla hace falta su sí (`AGENTS.md`, "Frenos").

**Para qué:** que los 3 guiones del día siguiente le lleguen a Sergio Urcullo al celular a las 19:00, cuando sale del colegio y el gimnasio, sin abrir GitHub ni la PC.

## Cómo funcionaría

Hay dos partes: **escribir** los guiones y **mandarlos**. Mandarlos es gratis. Escribirlos solos, todos los días, necesita un modelo de IA que corra sin nadie, y eso cuesta.

### Mandar (gratis, igual en todas las opciones)

Un workflow de n8n en el VPS, con tres nodos oficiales:

1. **Schedule Trigger** a las 19:00. Ojo: n8n usa la zona horaria del workflow o, si no tiene, la de la instancia, que en un n8n propio arranca en Nueva York; hay que poner `America/La_Paz` en el workflow ([docs de n8n](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/)).
2. **GitHub, "File: Get"**, que lee `marca-personal/guiones/<mañana>.md` de `main` en ONIA-CENTRAL ([docs de n8n](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.github/)). Si no existe, manda "Hoy no hay guiones" en vez de nada, para que se note.
3. **Telegram, "Send Message"**, un mensaje por guion, para que cada uno se lea solo ([docs de n8n](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.telegram/)).

El token del bot se guarda como credencial de n8n, nunca en el repo ni en el chat (`CLAUDE.md` de onia-platform, "n8n VPS": credencial de n8n antes que `$env`). El workflow exportado, sin secretos, va por PR al repo de su producto.

### Escribir: tres opciones

| | Cómo | Gasto | Hasta cuándo |
|---|---|---|---|
| **A. Codex escribe, n8n manda (recomendada)** | Cada día, una sesión de Codex escribe los 3 con la [guía](guiones-diarios.md) y los sube por PR; Sergio Urcullo los aprueba y se mergean. n8n los manda a las 19:00 | Ninguno nuevo: Codex ya está pago (ChatGPT Pro) | Hasta el 14-nov, que vence Codex. Necesita que alguien abra Codex cada día |
| B. n8n escribe y manda | n8n pide los guiones a la API de un modelo con la guía como instrucciones, los guarda en el repo y los manda | **Cobra por uso** (por ejemplo, la API de OpenAI que ya usa ONIA Platform). Hay que medir cuánto por día antes de prenderlo | Sigue después del 14-nov |
| C. Solo mandar | Los guiones los escribe Sergio Urcullo o una sesión cuando haya; n8n solo los manda | Ninguno | Siempre |

**Por qué A primero:** no suma gasto, y en estas dos semanas sirve para ajustar la guía con guiones reales antes de dejarlos en piloto automático. Antes del 14-nov se decide si se pasa a B, con lo que cueste medido, o a C.

**El límite de B:** un modelo que corre solo no ve la PC ni Instagram, y la noticia del día tiene que salir de una fuente oficial con enlace. Si se arma, tiene que leer las páginas de noticias oficiales y dejar el enlace en cada guion, y alguien igual revisa antes de grabar.

## Qué necesita de Sergio Urcullo

1. **El sí a la opción** (A, B o C), porque toca producción y B gasta.
2. **Crear el bot** en Telegram: abrir @BotFather, mandar `/newbot` y seguir los pasos hasta que da el token ([guía oficial de Telegram](https://core.telegram.org/bots/tutorial)). El token es como una contraseña: no va por chat; se carga directo en la credencial de n8n.
3. **Mandarle un mensaje al bot** desde su Telegram, para que el bot pueda escribirle.

## Hecho cuando

A las 19:00 de un día de prueba, a Sergio Urcullo le llegan por Telegram los 3 guiones del día siguiente, uno por mensaje, y el workflow está en el repo sin secretos.
