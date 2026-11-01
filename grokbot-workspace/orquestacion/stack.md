# Stack de OnIA — inventario 1 nov 2026 (solo lectura, sin cambios)

## 1) Stack por capa
**Infra (VPS Hostinger srv1360183)**: Ubuntu, 4 CPU, 15 GB RAM (4 usados, 11 libres), swap 2.3/8 GB, disco 110/193 GB (57%), lleva 14 días encendido. Firewall abre solo SSH; la web entra por Cloudflare Tunnel; fail2ban y actualizaciones automáticas encendidos.
- **Easypanel + Traefik 3.6.7**: panel y proxy de dominios (HTTPS). Certificados válidos hasta 10–25 ene 2027, con renovación automática.
- **Cron de root (~45 tareas)**: bot de WhatsApp (seguimientos, recordatorios, insistencia en modo real), vigías de leads, embudo, disco, CI, crédito de IA, comprobantes BCP y SIAT, resúmenes de Jarvis por Telegram, publicación cada 3 h, backups.

**Datos (VPS)**: Supabase self-hosted (Postgres 15.8 + auth, rest, realtime, storage, edge functions, kong); Postgres 17 + Redis para Chatwoot; Postgres 16 para LiteLLM.

**Apps OnIA (VPS, contenedores Docker)**: onia-platform (Next.js, app.onia.com.bo, healthy), onia-landing (onia.com.bo), onia-center (center.onia.com.bo da 404), onia-forms, onia-assets, onia-entregas (nginx), onia-mail (postfix), LiteLLM (proxy de modelos IA).

**Automatización**: n8n-sergio (n8n:latest, 1 copia activa, avisos por Telegram); n8n_n8n 2.20.7 con 0 copias (duplicado apagado); bot propio /opt/onia/bot (WhatsApp).

**Orquestación IA (box de Grok Bot)**: onia-llm (manda tareas a Claude Code o Codex, máx 3 en paralelo); onia-central (decisiones, ritmo de cuota 90%/95%, gastos, reloj apagado); onia-loop (US$3 por corrida, US$20/día, aviso a US$35); onia-guard (bloquea push, deploy, publicar, WhatsApp a clientes y pagos); onia-cola (7 colas por agente); panel Next.js 16 en /workspace/platform; 33 manuales, decisiones en markdown.

**Externos**: Cal.com (cal.onia.com.bo, agenda); Chatwoot (self-host, chat.onia.com.bo); WhatsApp Cloud API (Meta); Telegram (avisos); GitHub (repos, PR, CI); Claude (41%, renueva jue 5 nov 04:00 hora de Bolivia); Codex (24%, renueva mié 4 nov 02:59 hora de Bolivia); Grok Bot (8 bots, ~59%, renueva sáb 7); Meta (IG/FB, anuncios); TikTok for Business; Higgsfield (video/imagen con créditos); BCP (QR de cobro).

## 2) 5 problemas o riesgos principales
1. **Backups solo dentro del mismo VPS y nunca probados** (`restoreVerified=false`). Si se cae el VPS se pierde todo. El backup de storage pesa solo 20 KB: sospechoso.
2. **Automatización partida en 3 sitios** (cron con ~45 tareas, n8n y loops de la box), sin un lugar único para ver qué corre, qué falla y qué cuesta.
3. **Duplicados y restos**: n8n_n8n apagado, flujos repetidos de n8n (4 de IG→DM, 3 de vigía de leads, 1 de prueba), postiz.onia.com.bo da 502, center.onia.com.bo da 404, muchos .bak y scripts sueltos.
4. **Versiones `latest` sin fijar** (n8n, Easypanel, LiteLLM main-stable, postfix): una actualización sola puede romper el sistema sin aviso.
5. **Apps fuera de Easypanel** (Supabase, plataforma, landing, LiteLLM) corren con docker sueltos, sin registro de cómo recrearlas. Además, node:20 llega a fin de soporte en abr 2026, así que ya está sin soporte.

## 3) Mejoras por impacto
| # | Mejora | Esfuerzo | ¿Sí de Sergio? |
|---|---|---|---|
| 1 | Copia diaria de backups fuera del VPS (Backblaze B2/R2, cifrada) y prueba de restauración mensual | Medio | Sí: cuenta nueva, unos US$1/mes |
| 2 | Pasar a n8n los trabajos con horario fijo del cron y la box, con un panel único de ejecuciones y fallas | Alto | Sí: cambia cómo corren los bots que hablan con clientes |
| 3 | Limpieza: borrar n8n_n8n, flujos repetidos, la ruta de Postiz y revisar center | Bajo | Sí: implica borrar |
| 4 | Fijar versiones (n8n 2.x, LiteLLM, postfix) y actualizar en una ventana con backup previo | Bajo | Sí: toca producción |
| 5 | Llevar Supabase, plataforma y landing a compose versionado en GitHub (o a Easypanel) | Medio | Sí, para el PR |
| 6 | Monitoreo externo de dominios y certificados (Uptime Kuma o n8n) con aviso por Telegram | Bajo | No: solo lectura |
| 7 | Ordenar la box: archivar .bak y scripts sueltos y poner git al panel y a los manuales | Bajo | No: reversible y local |
| 8 | Pasar node:20 a node:22 LTS en landing y center | Bajo | Sí: deploy |

Nota: este análisis no lo hizo Claude. onia-guard bloqueó la llamada a onia-llm porque el texto del prompt mencionaba deploy y publicar, así que lo escribí directamente.
