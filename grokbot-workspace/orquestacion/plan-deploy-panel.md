# Plan de deploy del panel a app.onia.com.bo (NO ejecutado: espera el sí de Sergio)
Branch feat/panel-interno, commit edef74d (worktree /workspace/platform/wt-panel). CI local: ver pruebas/ci-panel.log.
1. PR: push de la branch a GitHub y abrir el PR sin merge (necesita sí).
2. En el VPS (contenedor docker suelto onia-platform): `docker tag <imagen-actual> onia-platform:rollback-20261101` y anotar `docker inspect` (env, red, labels de Traefik).
3. Build de la imagen nueva desde el commit: `docker build -t onia-platform:panel-edef74d .` (con los mismos build-args NEXT_PUBLIC_*).
4. Cambio: parar el actual, levantar el nuevo con la misma config, red y labels.
5. Prueba: `curl -I https://app.onia.com.bo` = 200/307, login SUPERADMIN, /panel muestra tablero, 7 métricas, guiones y "Claude y Codex trabajando".
6. Rollback (<2 min): parar el nuevo y levantar `onia-platform:rollback-20261101` con la config guardada.
No coordinar con el otro proceso del VPS (Node 22 / versiones) en la misma ventana.
Límite: los datos de actividad/métricas son una instantánea al momento del build. Para que sean "en vivo" en la nube, el siguiente paso es servirlos por el sync de n8n-resumenes (ya corre) en vez de importarlos en el build.
