# Plan de arranque de ONIA-CENTRAL

28-oct-2026. **Aprobado por Sergio Urcullo el mismo día**, con las recomendaciones: Hermes, Hermes pensando con los créditos de API de Claude, y la regla de merges (ajustada después de la revisión del PR para cerrar sus huecos). Quedan abiertos el plan de ChatGPT y lo de Vercel.

**Cambio del mismo 28-oct:** Sergio Urcullo decidió que Hermes piense con la suscripción de ChatGPT, con un login propio de Hermes, en vez de los créditos de API de Claude. El detalle está en `2026-10-28-hermes-oficial.md`.

Sale de dos trabajos de solo lectura, sin usar el repo viejo como fuente:
- una investigación con 8 agentes (4 investigan y 4 verifican contra la fuente oficial);
- una auditoría de la PC, los agentes y GitHub.

## 1. Agente principal: Hermes, no OpenClaw

| | Hermes Agent (Nous Research) | OpenClaw |
|---|---|---|
| Licencia y dueño | MIT, Nous Research | MIT, OpenClaw Foundation |
| Windows 11 | Nativo, en el nivel de soporte más alto | La vía recomendada instala un Gateway en WSL, con Node y un servicio en segundo plano |
| Seguridad | Aprobaciones y bloqueos. Hay que endurecer tres cosas que vienen abiertas (punto 5). | 762 avisos de seguridad en GitHub en unos 9 meses, 26 de ellos críticos. Un robo de token con un clic y una campaña de skills maliciosas en ClawHub. |
| Suscripción de ChatGPT | OpenAI lo lista oficialmente en "Sign in with ChatGPT" | Solo lo dice la documentación de OpenClaw |
| Claude | Llama al binario oficial de Claude Code (`claude -p`) con tu login | Anthropic lo bloqueó en abril de 2026 y después lo toleró sin anuncio formal |
| Skills | Formato compatible con las Agent Skills de Anthropic | Tienda ClawHub: hay que tratar cada skill como código no confiable |
| Ya instalado | Sí: v0.22.2. La última es v0.22.5. | No |

**Por qué Hermes:** es lo que mejor cumple la regla de que no entre a la PC nada que no sepamos qué hace.

**Contras de Hermes que hay que tener en cuenta:**
- Tiene unos 17.000 issues abiertos.
- En Windows, el gateway de Telegram arranca como tarea al iniciar sesión: si la PC está apagada, no responde.
- Por defecto se escribe solo memoria y skills, y adopta los logins de Claude y Codex. Las dos cosas se apagan.

## 2. Qué pagar y cuándo

**Claude (vence el 3-nov):**
1. **Antes del 3-nov,** fijate en Settings > Billing > API credits si este ciclo trae créditos de API. Desde el 7-oct, Max los incluye: US$200 en Max 20x. Si están, sirven para probar Hermes sin costo extra. Ojo: hay que elegir bien la organización de Console, porque no se cambia sin pedírselo a soporte.
2. **Programá la bajada a Max 5x (US$100).** La documentación no dice si se aplica al final del período o al instante: hay que mirarlo en pantalla.
3. **Desde el 3-nov,** Max 5x trae US$100 por mes en créditos de API. No sirven para Claude Code, pero sí para que Hermes piense con Sonnet 5.5, que se estima en unos US$64 por mes. No se acumulan de un mes a otro y, cuando se acaban, la API se corta sola: no cobra de más.
4. **Desde el cambio del 28-oct, Hermes ya no usa estos créditos.** Piensa con la suscripción de ChatGPT y comparte el cupo con Codex. Con ese dato, Sergio Urcullo vuelve a decidir lo de Max 5x y lo de Plus o Pro.

**Codex (vence el 14-nov):**
- Falta un dato: **¿tu plan de ChatGPT hoy es Plus o Pro?**
- Recomendación: **quedarse en Plus (US$20).** Si hoy es Pro, bajarlo a Plus antes del 14-nov.
- Pasar a pagar API no conviene: se pierde Codex en la nube, el costo no tiene techo y se estima en US$50 a 250 por mes para programar todos los días.

**Total recomendado: US$120 por mes** (Max 5x más Plus). Si la plata aprieta, queda Max 5x solo: US$100.

**Lo que NO se hace:** usar el login de tu suscripción de Claude como "cerebro" de Hermes. Anthropic no lo permite para apps de terceros, y además se cobra como uso extra.

## 3. Dónde corre cada cosa

- **Hermes:** en la PC, con Windows nativo. Sus datos van en `%LOCALAPPDATA%\hermes` y trabaja desde ONIA-CENTRAL, como dice `AGENTS.md`. Lo pesado (video, audio) va a E: o a Drive; de E: no se usa nada de `E:\onia-wt` ni de `E:\onia-orquesta`.
- **Los trabajadores:** Hermes les pasa el trabajo a Claude Code (`claude -p`) y a Codex (`codex exec`), con sus binarios oficiales y tu login.
- **Lo que tiene que correr con la PC apagada:** sesiones y tareas programadas de Claude en la nube, que están incluidas en Max y gastan del mismo cupo, y Codex en la nube, incluido en Plus. Ninguna de las dos ve tu PC.
- **Ningún agente en el VPS de producción:** ahí conviven la app, la base, n8n y el bot.
- **Para después, si hace falta Telegram 24/7:** un VPS aparte (Hetzner, desde €6,49 por mes). Ahora no.

**Ojo con el cupo:** los límites de Max suponen "uso ordinario e individual". Hermes lanzando Claude Code sin parar puede chocar con eso. Al principio, poca carga, y se mide.

## 4. Cortar lo viejo, en este orden

La auditoría dio 3 sobre 10: lo nuevo está limpio, pero el repo viejo sigue trabajando solo.

1. **Apagar el workflow `orquesta.yml` de GitHub** y las otras 5 automatizaciones por horario del repo viejo. Es otra cosa que la tarea programada "ONIA Orquesta" de Windows, que ya estaba pausada. **Hecho el 28-oct:**
   - Sergio Urcullo apagó `orquesta.yml`, Daily Hygiene, Docs Hygiene, Auditor de Código, Repo Pulse y Hermes QA.
   - Canceló las 2 corridas en cola.
   - Quedan activos, pero solo se disparan a mano o con un PR: Deploy ONIA Center, Hermes Jarvis (pruebas), Hermes Jarvis (acceso al VPS) y Video Intake. Se apagan cuando se archive el repo.
2. **Cerrar y volver a abrir las apps de Claude y Codex.** **Hecho el 28-oct.** El proceso de claude-mem ya no corre.
3. **Vercel:** onia-center y nuvia-store despliegan desde el repo viejo. Antes de archivarlo hay que decidir si se mudan a su propio repo o se desconectan.
4. **Secretos del repo viejo** (token de Claude, llave SSH del VPS, token de Telegram, entre otros):
   - Borrarlos de GitHub no alcanza, porque siguen valiendo. Hay que revocarlos donde se crearon: en Anthropic, en el `authorized_keys` del VPS y en BotFather.
   - Si alguno se comparte con producción (el bot de Telegram lo usan n8n y el Hermes del VPS), se revoca solo con el sí de Sergio Urcullo.
   - Lo nuevo lleva credenciales nuevas.
5. **Restos en la PC:**
   - archivar en Codex sus memorias viejas, que hoy se meten en cada sesión;
   - archivar las 223 memorias de proyecto viejas de Claude;
   - sacar la ruta del repo viejo del CLAUDE.md global;
   - dejar en el modo automático solo ONIA-CENTRAL como repo de confianza.
6. **Las 16 copias del repo viejo en C: y E::** archivarlas en E: tal como están, sin abrir su contenido. Si Sergio Urcullo quiere rescatar algo, lo pide puntualmente.
7. **El VPS** (el Hermes de Telegram y los cron que se mudaron ahí): lo revisa Sergio Urcullo o se habilita un acceso explícito. Desde acá no se entra por ssh.
8. **Al final, archivar onia-hermes en GitHub.** Queda de solo lectura y se frena todo lo que corre ahí.

## 5. Hermes desde cero

1. **Apartar lo viejo** con `limpiar-hermes.ps1`, que lo deja en `C:\Users\PC\.hermes-archivo-20261028` sin borrar nada.
2. **Instalar v0.22.5** con el instalador oficial. Lo corre Sergio Urcullo desde una PowerShell abierta desde el menú Inicio, como todo lo que sigue en esta lista. Contesta que no a importar otros agentes (Claude, Codex, Cursor y OpenClaw) y a las dos preguntas del gateway, y elige **Blank Slate**. Las skills de fábrica se desactivan con `hermes skills config`, y quedan activas `claude-code`, `codex`, `computer-use` y `hermes-agent`. El detalle está en `2026-10-28-hermes-oficial.md`.
3. **Configuración mínima:** las claves de la lista de `2026-10-28-hermes-oficial.md`, que suma `terminal.cwd` y el límite de la app de escritorio.
4. **Escribir un SOUL.md nuevo y corto.** El contexto del proyecto es el `AGENTS.md` de ONIA-CENTRAL.
5. **Modelo:** la suscripción de ChatGPT, con un login propio de Hermes. Cambiado el 28-oct; antes eran los créditos de API de Claude, con una API key con tope de gasto.
6. **Telegram:** un bot nuevo, porque el viejo lo comparten n8n, la orquesta y el Hermes del VPS. El bot lo crea Sergio Urcullo en BotFather.
7. **Primera prueba:** una tarea real y chica, de punta a punta.

## 6. Merges sin Sergio Urcullo

La regla vale como está escrita en el `AGENTS.md` de ONIA-CENTRAL. En corto:

- **Claude mergea sin preguntar** solo documentos internos de `docs/`, estructura de carpetas, skills escritas en el repo que no tocan nada de la otra lista, y pruebas. Antes tiene que pasar una revisión con veredicto "aprobar", hecha por un agente que no comparte su contexto.
- **Sergio Urcullo aprueba siempre:** lo que se publica o ve un cliente (guiones, páginas y mensajes incluidos), el gasto, producción (VPS, base de datos, Vercel), lo legal, lo que viene de afuera, y los cambios a las reglas, los permisos o el `.gitignore`. Si hay duda, también.

Si el control de permisos de Claude pide el OK para mergear, se sigue pidiendo. No se agrega un permiso general para `gh pr merge`, porque no distingue entre las dos listas.

## 7. Decisiones de Sergio Urcullo

1. Hermes como agente principal (recomendado).
2. ¿El plan de ChatGPT de hoy es Plus o Pro?
3. Que Hermes piense con los créditos de API de Claude (recomendado). **Cambiado el 28-oct:** piensa con la suscripción de ChatGPT.
4. La regla de merges del punto 6.
5. Vercel: ¿se mudan onia-center y nuvia-store, o se desconectan?
