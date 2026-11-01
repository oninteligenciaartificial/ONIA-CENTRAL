# Mejoras VPS 1 nov 2026 (aprobación D-20261101-022)
Backups: /opt/onia/backups/vps-mejoras-20261101-1702/ (n8n-workflows-all.json, n8n-credentials-encrypted.json, n8n-database.sqlite, svc-n8n_n8n.json, svc-n8n-sergio.json, inspect-*.json, onia-manual-routes.yaml.antes, litellm-docker-compose.yml.antes, crontab-root.txt, crontab-antes-tanda1/2.txt, ufw-antes.txt)
Runner: /opt/onia/runner (onia-runner.py, systemd onia-runner, jobs /etc/onia-runner/jobs.json, estado: sudo /opt/onia/runner/estado.sh). Cron migrado = líneas "#N8N-20261101" en crontab root. Volver atrás: quitar el prefijo y desactivar el flujo "CRON · <tarea>".
Versiones: /opt/onia/VERSIONES-FIJADAS.md. Box sync: /workspace/n8n-resumenes/asegurar-sync.sh (desde ~/.bashrc y onia-central-reloj.sh).
