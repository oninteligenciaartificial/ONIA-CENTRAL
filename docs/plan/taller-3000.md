# Plan maestro: que el taller llegue a Bs 3.000

**Versión del 3-nov-2026, borrador.** Lo pidió Sergio Urcullo el 3-nov a la madrugada (hora de Bolivia), en el proyecto Onia de Claude: "el objetivo es una cosa y los hilos lo van a hacer realidad". Es una propuesta: lo que dice "Recomiendo" no está decidido. Cuando algo cambie, se pone al día este archivo y se suma una entrada al final, en "Historial", sin borrar las viejas, igual que en [`docs/vision/`](../vision/README.md).

## 1. El objetivo

**Bs 3.000 cobrados = 60 pagos de Bs 50 del taller** ([contexto de Sergio](../vision/contexto-sergio.md)). Es el plan número uno ([cómo mejorar](../vision/como-mejorar.md)).

- **Lanzamiento de la campaña:** viernes 6-nov ([historial de la visión](../vision/historial.md), "lanzamiento en 3 días").
- **Fecha del taller:** sin decidir. La del 4, 5 y 6-nov está en pausa ([traspaso del 3-nov](../equipo-agentes/traspaso-codex-2026-11-03.md), punto 1).
- **Hecho cuando:** 60 pagos conciliados con el banco. La fecha de corte depende de la fecha del taller.

## 2. El recorrido que tiene que funcionar

```
Reel con "Comentá PALABRA" (3 por día)
  → DM automático por Instagram (n8n)
  → Guía en la bóveda del sitio de Sergio, con el video horizontal
  → Onia Community (grupo de WhatsApp gratis), con un recurso exclusivo
  → WhatsApp: precio, fecha y QR
  → Pago con QR → Sergio lo verifica a la noche → confirmación y grupo del taller
  → Taller en vivo (Meet)
  → Oferta de la comunidad paga
```

Sale del [embudo del taller](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/blob/claude/project-thread-dnmeq4/workshops-comunidad/embudo-taller/README.md) (rama sin mergear) y del modelo que contó Sergio Urcullo el 3-nov. Si una pieza falla, no se vende: por eso el traspaso pide **probar el recorrido de punta a punta antes del 6-nov**.

## 3. Lo que hace falta, pieza por pieza

Quién lo hace: los hilos del proyecto Onia de Claude trabajan hasta el 3-nov, alrededor de las 15 o 16 h de Bolivia. Después sigue **Codex** hasta el 14-nov, desde el proyecto Marketing y ventas o Desarrollo (`AGENTS.md`, "Equipo de agentes"). Higgsfield sigue hasta el 1-dic.

### 3.1 Contenido: 3 videos por día

- **Hoy:** la guía de guiones diarios, el calendario del 4 al 20-nov (09:00 noticia, 12:30 proceso, 19:30 valor) y los 3 guiones del 4-nov están en `main` (`marca-personal/guias/guiones-diarios.md`, `marca-personal/calendario-contenido.md`, `marca-personal/guiones/2026-11-04.md`). Los recursos (fuentes, reglas, pedido) y el agregado al calendario (repo de los sábados, caso real los jueves, series que llevan al taller) están revisados y esperan su sí, en la rama `claude/project-thread-7z08ln`.
- **Falta:** los guiones del 5 al 20-nov; la tabla "palabra clave → guía" (la primera fila es `CLAUDE` → `/claude-code`); los guiones diarios por Telegram con n8n, que es una propuesta sin construir (`marca-personal/guias/guiones-por-telegram.md`).
- **Quién:** el hilo de guiones hasta hoy; después, Codex de Marketing y ventas, un día por encargo.
- **Sergio:** aprobar los guiones; grabar en bloque las noches del miércoles 4 y el jueves 5; conseguir un negocio real para el caso del jueves 12 (por ejemplo, la empresa familiar).

### 3.2 Edición: formatos y Higgsfield

- **Hoy:** en `main`, la skill [`editar-video`](../../.agents/skills/editar-video/SKILL.md) (edita con HyperFrames, gratis, en la PC) y un formato firme, "cara con íconos" (`marca-personal/guias/estilo-de-edicion.md`). En la rama `claude/project-thread-u6u3bz` hay tres formatos firmes más (pantalla partida, historia con imágenes, tarjetas de app) y uno en borrador (titular fijo), con revisión: esperan su sí.
- **Falta:** editar el primer video real de Sergio de punta a punta con una plantilla; definir qué formato va con cada tipo de guion (noticia, proceso, valor).
- **Higgsfield:** lo investiga esta noche el hilo "Investigar formatos de video con Higgsfield". **Cada generación es paga y necesita su sí** (`AGENTS.md`, "Frenos"). Se suma acá cuando termine.
- **Quién:** el hilo de formatos hasta hoy; después, Codex con la skill `editar-video`.
- **Sergio:** su sí a los formatos; un video suyo hablando a cámara para armar el primero.

### 3.3 DM automático por Instagram (n8n)

- **Hoy:** el flujo de n8n y su guía están listos en la rama `claude/project-thread-jcfc1d` (`marca-personal/automatizaciones/dm-comentarios-instagram/`), **apagado y en modo prueba**. Usa la API oficial de Instagram y consulta los comentarios cada 3 minutos. La app de Meta "OnIA Social API" está publicada y sirve. Plan de emergencia: ManyChat (gasto si se pasa del plan gratis).
- **Riesgo sin comprobar:** que el DM le llegue a alguien sin rol en la app. Se prueba con una segunda cuenta antes del 6.
- **Sergio (unos 15 minutos, pasos en esa guía):** cuenta de Instagram profesional y pública; activar "Permitir acceso a los mensajes"; sacar el token y cargarlo en n8n (nunca en el chat); una segunda cuenta para probar; su sí para importar el flujo al n8n del VPS (es producción).
- **Ojo, dos textos se contradicen:** el embudo dice que el flujo necesita unir Instagram a la página de Facebook de Onia, y la guía del DM dice que con "Instagram Login" no hace falta. Manda la guía del DM, que cita la documentación de Meta. Unir Instagram a la página sí hace falta para **anuncios** de Meta (3.8).

### 3.4 WhatsApp: bienvenida y chatbot en n8n

- **Hoy:** el WhatsApp de ventas es la app WhatsApp Business. Su mensaje de bienvenida da las fechas viejas y hay que cambiarlo **antes del primer video** (embudo, sección 4). n8n y Chatwoot corren en el VPS.
- **El chatbot con n8n** lo investiga esta noche el hilo "Planear el chatbot de WhatsApp en n8n": qué número usar, si la API oficial deja seguir usando la app en el mismo número, qué cuentas hacen falta y cuánto cobra Meta por mensaje. Se suma acá cuando termine.
- **Recomiendo:** para el 6-nov, la bienvenida y las respuestas rápidas de WhatsApp Business (gratis, sin tocar producción), y el chatbot de n8n como segundo paso, cuando esté probado. Un chatbot a medias el día del lanzamiento es peor que respuestas fijas.
- **Sergio:** aprobar el texto de bienvenida y cambiarlo en el celular; decidir el número del chatbot cuando el hilo lo traiga.

### 3.5 Bóveda, página del taller y web

- **Hoy:** el sitio `sergiourcullo` tiene las guías `/claude-code`, `/stack`, `/homelab` y `/vps`, la llamada gratis `/llamada` (Cal.com), la página `/taller` (publicada el 2-nov, con la fecha vieja) y el enlace a Onia Community.
- **Falta:** una guía "Claude para empezar" para la palabra `CLAUDE` (la de `/claude-code` dice que el plan gratis no lo incluye, y el taller enseña desde cero); poner `/taller` al día con la fecha nueva; mejorar el sitio mirando referentes (lo sigue investigando el hilo del embudo).
- **Quién:** Codex de Desarrollo, en el repo `sergiourcullo`, por PR.
- **Sergio:** cada cambio del sitio es publicar: su sí con captura.

### 3.6 Comunidad

- **Gratis, Onia Community:** existe (grupo de WhatsApp enlazado en el sitio). Falta el recurso exclusivo de cada tema.
- **Paga:** sin decidir. Opciones del embudo: Bs 70, **Bs 100 (recomendado)** o Bs 150 por mes, con precio de fundador; y si va paga desde el día uno, gratis, o **el primer mes incluido con el taller (recomendado)**. Vive en WhatsApp más Meet, sin gasto.
- **Sergio:** precio, forma y qué día da la clase semanal.

### 3.7 Pagos y registro

- **Hoy:** QR de Yolo Pago, verificado a mano una vez por noche; registro privado de consultas y pagos (`docs/equipo-agentes/negocio.md`). El pago de prueba con el QR sigue sin hacerse.
- **Opción con gasto:** una pasarela que confirme sola (PagosYa o EnlazateOnline, en `marca-personal/guias/web-de-venta.md`). Recomiendo verificar a mano hasta las primeras ventas.
- **Sergio:** el pago de prueba; elegir manual o pasarela.

### 3.8 Taller y anuncios

- **Taller:** fecha, temario según su video de repos, salas de Meet, grabación con OBS. El nombre "Claude de 0 a 100" es igual al de Enrique Rocha y usa la marca Claude: **a confirmar con un abogado** (`docs/lecciones.md`, "Anuncios y venta").
- **Anuncios de Meta:** después de las primeras ventas orgánicas y con su sí, porque son gasto. Falta asociar la página de Onia y Instagram a la cuenta de anuncios con tarjeta. El mapa de campañas está en una rama (PR #176 del traspaso).

### 3.9 Skills en el repo

- **Hoy:** hay 5 skills escritas en este repo, en `.agents/skills/`: `editar-video`, `ver-video`, `investigar-referente`, `encargar` y `llevar-issue`. Codex las lee de ahí.
- **Hallazgo:** los proyectos de Claude no las cargan. Claude Code busca skills en `.claude/skills/`, y en este hilo no aparecieron en la lista de skills disponibles (3-nov). Arreglarlo es una carpeta `.claude/skills` que apunte a `.agents/skills`. Como Claude vence hoy, rinde poco; si renueva Claude, conviene hacerlo.
- **Qué skills nuevas conviene usar:** lo inventaría esta noche el hilo "Analizar a Eric Taveras y elegir skills". Instalar una skill de afuera necesita su sí (`AGENTS.md`, "Cómo se trabaja").

### 3.10 Medir

Cada semana, cuántos comentan la palabra, cuántos llegan al WhatsApp y cuántos pagan ([cómo mejorar](../vision/como-mejorar.md), guía 4). Sin eso no se sabe qué pieza falla.

## 4. Orden hasta el lanzamiento (propuesta)

| Cuándo | Qué |
|---|---|
| Martes 3, mañana | Sergio decide y hace lo de la sección 5. Los hilos de Claude cierran sus ramas antes de las 15 h. |
| Martes 3, tarde y noche | Codex: guiones del 5 y 6, guía "Claude para empezar", `/taller` con la fecha nueva. Flujo de DM en modo `solo_testers`. |
| Miércoles 4 y jueves 5, noche | Sergio graba en bloque. Codex edita con las plantillas. |
| Jueves 5 | Prueba de punta a punta: comentar con la segunda cuenta → DM → guía → comunidad → WhatsApp → pago de prueba. Si falla, no se lanza. |
| Viernes 6 | Lanzamiento orgánico: el flujo de DM pasa a `real`, con su sí. |

## 5. Checklist de Sergio para la mañana

**Decidir (5 minutos):**

1. Fecha del taller.
2. Comunidad paga: precio (recomiendo Bs 100) y si el primer mes va incluido (recomiendo que sí).
3. Pagos: verificar a mano o pagar una pasarela (recomiendo a mano por ahora).

**Hacer (unos 30 minutos):**

4. Instagram: cuenta profesional y pública, y "Permitir acceso a los mensajes".
5. Sacar el token de Instagram y cargarlo en n8n, siguiendo la guía del DM. Nunca por el chat.
6. Tener a mano una segunda cuenta de Instagram para la prueba.
7. Cambiar la bienvenida de WhatsApp Business por el texto nuevo (primero aprobarlo).
8. Hacer el pago de prueba con el QR.

**Aprobar (lo traen los hilos, uno por uno):** los recursos y el calendario de guiones, los formatos de edición, los textos del embudo y este plan.

## Para aprender

Un **embudo** es el camino que hace una persona desde que ve un video hasta que paga. Se piensa como una cadena: si se corta un eslabón, por ejemplo el DM que no llega, los videos no venden aunque los vea mucha gente. Por eso este plan mira cada pieza y pide una prueba completa antes de lanzar.

## Historial

- **3-nov-2026, primera versión.** Lo pidió Sergio Urcullo en el proyecto Onia de Claude, antes de irse a dormir: dejar anotado el objetivo y todo lo que hace falta para llegar. Se armó leyendo `main` y las ramas de los hilos de esa noche. Faltan los resultados de Higgsfield, del chatbot de WhatsApp y del inventario de skills, que se suman cuando terminen.
