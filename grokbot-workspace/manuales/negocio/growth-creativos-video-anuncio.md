---
tarea: growth-creativos-video-anuncio
version: 1
dueno: Negocio
ejecuta: claude
nivel_modelo: 2
max_vueltas: 2
escala_a_sergio: cara o voz de Sergio, uso de Higgsfield o cualquier generación con costo, permiso del adulto responsable, publicar
---
# Guiones y creativos de anuncio (video e imagen)
## Objetivo
Preparar en borrador guiones, prompts y textos de anuncio para 2 o 3 creativos (video o imagen), con costo estimado y sin generar nada. La producción final es de Contenido y Marca.

## Cuándo se usa
- Hay campaña o edición nueva y se necesitan creativos.
- Sergio pide un formato distinto (UGC, B-roll, ugly ad, estático).

## Entrada
- Gancho y datos del taller (ver `variantes-campana.md`).
- Guion base: `/workspace/marca/guion-reel-campana-v2.md`.
- Piezas existentes: `/workspace/growth/videos-anuncio.md`, `/workspace/growth/creativos-ia-anuncio.md`, `/workspace/growth/piezas-cara-sergio.md`, `/workspace/growth/creativos-1-11.md`.

## Pasos
1. Revisa qué creativos ya existen para no repetir (y lista cada uno con su archivo).
2. Elige 2 o 3 formatos distintos; mismo cuerpo y CTA, cambia el hook.
3. Por creativo: hook (0-3 s), tabla escena por escena, texto en pantalla, título y texto principal.
4. Si usa Higgsfield: indica modelo, duración, resolución, créditos ESTIMADOS (marca que el botón Generate manda) y saldo a releer; no generes.
5. Si usa la cara/voz de Sergio, márcalo como bloqueado hasta tener el sí de Sergio y de su adulto responsable.
6. Si el flujo es del skill `anunciante-supremo`, sigue su SKILL.md: entrega el paquete completo (guion, prompts, costo) y espera el OK antes de gastar.
7. Guarda el borrador en `/workspace/growth/` y devuelve el JSON.

## Salida (JSON)
{"estado":"ok|falla|necesita_sergio","borrador":"ruta con los 2-3 creativos","motivo":"costos estimados, bloqueos de permiso y dudas"}

## Fuentes
- `/workspace/growth/videos-anuncio.md`
- `/workspace/growth/creativos-ia-anuncio.md`
- `/workspace/growth/piezas-cara-sergio.md`
- `/workspace/growth/creativos-1-11.md`
- `/workspace/growth/ads-codigo/README.md`
- `/workspace/marca/higgsfield-guia.md`
- `/workspace/marca/guion-reel-campana-v2.md`
- `/workspace/skill-contenido/anunciante-supremo/SKILL.md`

## Reglas
- Sergio tiene 16 años: su cara o voz exigen el sí de Sergio y de su adulto responsable. No generes avatar suyo.
- El precio va solo en el texto principal, no en el video (según `videos-anuncio.md`).
- Sin testimonios, cifras inventadas ni promesas de ingresos. Datos privados de clientes nunca en pantalla.
- Costos de Higgsfield: son estimados de terceros; copia cifras solo citando la ruta. Saldo citado: 432.93 créditos (`creativos-ia-anuncio.md`, leído el 31/10/2026); relee antes de usar.
- POR CONFIRMAR: ¿Sergio graba o no? `videos-anuncio.md` supone que graba; `creativos-ia-anuncio.md` y `piezas-cara-sergio.md` dicen que no graba.
- POR CONFIRMAR: costo real de Kling 3.0 y de entrenar Soul ID (25 a 50 según fuente; hay conflicto en `piezas-cara-sergio.md`).
- POR CONFIRMAR: si Meta exige etiqueta de contenido con IA.
- Producir los videos no te toca: entrega guion, no archivos finales.

## Checklist de terminado
- [ ] Cada creativo tiene hook, escenas, texto en pantalla, título y texto principal.
- [ ] Costos marcados ESTIMADO con la ruta fuente.
- [ ] Permisos de Sergio y adulto señalados donde aplique.
- [ ] Cierre exacto "Escríbeme al WhatsApp y te paso el QR".
- [ ] No se generó ni gastó nada.

## Prohibido
pautar, gastar, publicar, enviar, push, deploy

## Cuándo escalar
- Cualquier generación con créditos, uso de cara/voz de Sergio, o decisión de qué creativo sale.
- Contradicción entre fuentes que cambie el guion (grabación, cupos).
- Tras 2 vueltas sin pasar el checklist.
