---
tarea: panel-ci-verde
agente: onia-platform
dir: /workspace/platform/wt-panel
archivos_esperados: app/(dashboard)/panel/Tablero.tsx
comprobacion: npx vitest run __tests__/resto-del-panel-de-usted.test.ts __tests__/terminacion-lote-3.test.ts lib/agenda/hora-de-la-cita-en-zona-del-negocio.test.ts lib/platform/fecha-en-zona-del-negocio.test.ts && npx tsc --noEmit
meta: suite completa del panel en verde para poder desplegar
fecha_corte: 2026-11-08
---
Fallan 4 tests de vitest por el panel interno (app/(dashboard)/panel/*, solo lo ve Sergio, SUPERADMIN):
1. __tests__/resto-del-panel-de-usted.test.ts: Tablero.tsx tiene "Te toca decidir", "Te toca hacer", "tus decisiones". 2. __tests__/terminacion-lote-3.test.ts: tuteo "Revisa" en Tablero.tsx. 3. lib/agenda/hora-de-la-cita-en-zona-del-negocio.test.ts: PanelVista.tsx usa "America/La_Paz" fijo. 4. lib/platform/fecha-en-zona-del-negocio.test.ts: "todo hallazgo esta arreglado o tiene su excepcion con motivo".
El panel es interno y su lector es el dueño (no el cliente del cliente). Lo correcto es registrar estos archivos del panel en las listas de excepción que ya tienen esos tests (p. ej. DE_OTRO_LECTOR o la lista de excepciones con motivo), con el motivo "panel interno de OnIA: lo lee Sergio (tuteo) y su zona es America/La_Paz", sin cambiar el texto del panel ni debilitar los tests para otros archivos. Si un test no tiene lista de excepción, usa en el panel la constante DEFAULT_TZ existente en vez del literal. No toques nada más. No hagas git push.
