# Paso de simplificación (onia-tarea)

Corre después de que Codex escribe y pasa la comprobación, y antes del veredicto de Claude.
Adaptado de (todos MIT, licencias copiadas en cada carpeta):
- ponytail — https://github.com/DietrichGebert/ponytail @96608e0 (ponytail.dev) → `ponytail/`
- pstack (Lauren Tan) — https://github.com/backnotprop/pstack @25abb38, skills `no-comments`, `typescript-best-practices`, `unslop` → `pstack/`
- Thermo-Nuclear Code Quality Review (Cursor, cursor/plugins/thermos) vía https://github.com/michael-denyer/pstack-claude @5851c89 → `thermo/`
Nota: `unslop` es para texto (docs, PRs, mensajes), no para código; se aplica solo a strings/markdown que la tarea toque.

## Reglas para la pasada (solo sobre los archivos que tocó la tarea)
1. Comportamiento idéntico. Los tests/comprobación deben seguir en verde. Si dudas, no lo toques.
2. Borrar antes que agregar (ponytail): código muerto, ramas imposibles, parámetros/opciones/config que nadie usa, wrappers y abstracciones de un solo uso, conversiones de tipo innecesarias, código "para después".
3. Usar lo que ya existe: helper del repo > librería estándar > dependencia instalada. Nunca agregar dependencias.
4. Comentarios (no-comments / Comment Sicko): borrar los que repiten lo que dice el código, historial de cambios, TODO viejos y comentarios que explican un workaround (arregla la causa si es trivial). Quedan solo los "por qué" que el código no puede mostrar, en una línea, y los de restricciones externas.
5. TypeScript (typescript-best-practices): sin `any` nuevos, sin casts innecesarios, tipos inferidos cuando son obvios, uniones discriminadas en vez de flags.
6. Estructura (thermo-nuclear): sin condicionales ad-hoc metidos en flujos ajenos; ningún archivo debe pasar de <1000 a >1000 líneas.
7. Nunca recortar: validación en bordes de confianza, manejo de errores que evita pérdida de datos, seguridad, accesibilidad, nada que la tarea pidió.
8. No tocar archivos fuera del diff de la tarea. No git push, no commit.
Al final: una línea con qué quitaste y otra con lo que no te animaste a quitar.
