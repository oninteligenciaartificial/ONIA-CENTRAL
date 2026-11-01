## Corrección de auditoría — 2026-11-01

El reloj permanece sin activar. Esta auditoría solo ejecutó pruebas locales con
stubs. Los frenos de `onia-tarea` no demuestran que los de todos los loops,
`onia-central` o invocaciones directas estén coordinados. La afirmación histórica
«Frenos activos» de abajo no es una certificación global.

Antes de considerar el encendido, tú debes decidir el adaptador de coste con cota
real y el alcance del presupuesto compartido. La auditoría no autoriza ni realiza
activación, despliegue, cron, llamadas reales o comunicación externa.
Resultados: guard 83/83; suite de tarea 46/46. Ver `auditoria-harness-20261101.md`.

---

# Encender el reloj de forma segura (NO encendido: espera el sí de Sergio)
Antes: `python3 onia-central ritmo` (los dos motores "PUEDE lanzar"), `bash orquestacion/guard/test-guard.sh` (todo OK), `onia-central orquestar --seco` (7 agentes sin error).
1. Primera vuelta real de un solo agente: `python3 /workspace/onia-central-sistema/bin/onia-central orquestar --solo onia-platform` y revisar reporte-equipo.md y estado/actividad.jsonl.
2. Encender: `bash /workspace/onia-central-sistema/bin/onia-central-reloj.sh encender`; comprobar con `... estado`.
3. Frenos activos: US$3 por corrida, US$20/día de loops, aviso a US$35, tope duro 95% semanal, Codex 3 ciclos y 30M tokens/día, guard en cada prompt y comando.
4. Apagar en cualquier momento: `... onia-central-reloj.sh apagar` (o crear el archivo PARAR del agente).
