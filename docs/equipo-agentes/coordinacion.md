# Estado de la coordinación (Administrador)

Relevo del 1-nov-2026, a las 20:45 de Bolivia. Lo escribió la sesión coordinadora de Claude Code cuando llegó al 63% de su contexto, según `get_usage` de la app de Claude a las 20:40: 625.909 tokens usados de 1.000.000. El tope para la coordinadora, corregido después, es de unos 240.000 tokens en total en Claude ([plan](../decisiones/2026-11-01-plan-equipo-y-paso-a-codex.md), punto 2). La sigue una sesión coordinadora nueva.

## Objetivo de la próxima coordinadora

Lanzar el plan en cada área: una sesión por área, con el modelo y el esfuerzo del punto 4 del plan, que arranque leyendo su archivo de estado y siga con su próximo objetivo real. Después, coordinar y resumirle a Sergio Urcullo.

**Hecho cuando:** las cuatro áreas y la Analista están andando con su modelo, cada una con un objetivo y su "hecho cuando", y Sergio tiene en un solo mensaje lo que le toca decidir.

## Cómo quedó cada área

| Área | Estado en `main` | Pendiente |
|---|---|---|
| Boss No-Code | `negocio.md`, PRs #97 y #104 | Pago de prueba con Yolo Pago y saber qué cubre el pago único. Las 6 salas de Meet del taller están creadas, sin invitados. |
| Marketing | Todavía no está | El PR #102 lleva su estado. Codex lo aprobó, y espera que Sergio diga cómo sigue. El lote de reels no estaba en la PC: está en la rama `grokbot/workspace-20261101`. |
| Boss Code | `producto.md`, PR #99 | La sesión de Boss Code reportó el 1-nov (sin enlace) que Sergio decidió traer la web del taller de la rama de Grok Bot, publicarla en `/taller` y cobrar Bs 50 la serie completa. Todavía no está en `producto.md`: sin comprobar en el repo. Publicar es producción y pide su sí. |
| ONIA Platform | `platform.md`, PR #98 | Revisó el worktree que dejó Orca en onia-platform y lo anotó en el [#63](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/63). |
| Analista | Sin archivo | Arrancó su primera auditoría de los PRs del 1-nov y quedó frenada antes de terminar. |

Las sesiones del 1-nov, que se pueden archivar cuando Sergio diga:
- Boss No-Code: `local_97fc085e-354b-4963-9152-63583d1d380d`;
- Marketing: `local_1d0928f0-e5f5-4b9d-99c5-06be74fa7f3b`;
- Boss Code: `local_c596ac4e-89a6-4007-834c-3e384a963d11`;
- ONIA Platform: `local_ac777672-bb2f-438f-857b-0b68586fff8d`;
- Analista: `local_afc6e729-031a-4328-b946-faf392bc9fd2`;
- la que mergeó el equipo nuevo (PR #103): `local_334f327b-cabf-43ab-bde8-943045a3aa0a`.

## Decidido el 1-nov

- El equipo trabaja en sesiones de Claude Code en esta PC, una por área. Desde el 3-nov, todo en Codex ([plan](../decisiones/2026-11-01-plan-equipo-y-paso-a-codex.md), PR #105).
- A Sergio se le habla de vos.
- La rama `onia-loop-excepcion-d003` de Grok Bot no se mergea: se rescata en PRs chicos, sin datos de clientes. Su material está en la rama `grokbot/workspace-20261101`.
- Grok Bot no se renueva.
- La Analista trabaja por auditoría: el Administrador la abre una vez al día, al cerrar la tanda de PRs, y la archiva cuando termina ([plan](../decisiones/2026-11-01-plan-equipo-y-paso-a-codex.md), punto 4).
- El 12-nov, Sergio decide si renueva ChatGPT, que vence el 14-nov.
- Sobre el merge, Sergio eligió "Delegarlo después": se propone más adelante un cambio de reglas que lo delegue en Codex ([#106](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/106)), y él decide si lo aprueba. Hasta entonces, Codex no mergea.

## Lo que le toca a Sergio

- Decir cómo sigue el PR de Marketing (#102).
- Correr una PowerShell de administrador para lo que quedó de Orca y Antigravity: el firewall, una credencial, el PATH y un acceso directo. Está en `docs/estado-limpieza-2026-10-28.md`, "Actualización del 1-nov-2026".
- Pasar a la bóveda los dos archivos de accesos que hay en `C:\Users\PC\.onia`, si son claves (`docs/credenciales.md`). Nadie los abrió.
- Decidir qué hacer con las claves en texto plano de `C:\Users\PC\.claude.json`.

## Para después

- Bot propio en la nube, con avisos, y navegador en WSL para dejar Grok Bot: [#96](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/96).
- Antes de retirar Grok Bot, comprobar que nada dependa de él, como el respaldo semanal del VPS que tenía Operaciones.
- Skills comunes `/empezar`, `/cerrar` y `/auditar` en `.agents/skills` (plan, punto 10).
- Codex: memorias en `false` y estado de la app, con la app cerrada ([#38](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/38)).
