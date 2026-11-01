---
tarea: panel-datos-en-vivo-local
agente: onia-platform
dir: /workspace/platform/wt-panel
archivos_esperados: lib/panel/vivo.ts,lib/panel/vivo.test.ts,app/panel-local/page.tsx
comprobacion: npx vitest run lib/panel && npx tsc --noEmit -p .
meta: que /panel muestre datos en vivo leyendo archivos en cada request y se pueda ver en localhost
fecha_corte: 2026-11-02
---
Repo Next.js en /workspace/platform/wt-panel (branch feat/panel-interno). Hoy app/(dashboard)/panel/page.tsx importa JSON estáticos (@/panel/data/actividad.json, metricas-orquestacion.json, guiones-semana.json) que quedan congelados en el build.

1. Crea lib/panel/vivo.ts (server-only, usa fs/promises) con funciones async que lean EN CADA LLAMADA (sin cache de módulo):
   - leerActividad(): lee PANEL_ACTIVIDAD_JSONL_PATH (default /workspace/estado/actividad.jsonl), parsea línea a línea (ignora líneas inválidas) y devuelve el MISMO shape que panel/data/actividad.json (mira ese archivo y PanelVista.tsx para el tipo: generado, en_curso, recientes, etc.). Agrupa por tarea quedándote con el último evento; en_curso = estados corriendo/revisando; recientes = el resto, más nuevos primero. Si falla, fallback al contenido de panel/data/actividad.json leído con fs.
   - leerMetricas(), leerGuiones(): leen PANEL_METRICAS_PATH / PANEL_GUIONES_PATH (default los archivos de panel/data/ bajo process.cwd()) con fs en cada llamada.
   - Revisa lib/panel/tablero.ts: si obtenerTablero lee del JSON importado, que lea con fs en cada llamada (PANEL_TABLERO_PATH, default panel/data/tablero.json). Uso.jsonl ya se lee vía locales.ts; confirma que sea en runtime.
2. Cambia app/(dashboard)/panel/page.tsx para usar esas funciones en vez de imports estáticos (mantén el gate SUPERADMIN intacto).
3. Crea app/panel-local/page.tsx (fuera de (dashboard), sin login) que renderiza el mismo PanelVista con los mismos datos, con export const dynamic = "force-dynamic", pero SOLO si process.env.PANEL_LOCAL_SIN_LOGIN === "1" Y el header host empieza por "localhost" o "127.0.0.1"; si no, notFound(). Debe funcionar sin Supabase ni base de datos (no llames prisma ni supabase ahí; si obtenerChatwootV2/obtenerPanelLocal fallan sin config, captura el error y pasa valores vacíos válidos). robots noindex.
   Si el middleware (middleware.ts) redirige rutas sin sesión, añade /panel-local a las públicas solo bajo esas mismas condiciones.
4. Tests en lib/panel/vivo.test.ts: agregar una línea al jsonl temporal y ver que la siguiente llamada la incluye; línea inválida ignorada; fallback.
No hagas git push ni commit. No toques secretos ni .env.
