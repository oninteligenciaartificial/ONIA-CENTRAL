---
tarea: talleres-kit-alumno
version: 1
dueno: Producto
ejecuta: claude
nivel_modelo: 2
max_vueltas: 2
escala_a_sergio: enviar el kit al grupo; enlaces de grabación; canal de soporte; promesas de ofertas o nivel 2
---
# Kit del alumno (hoja de una página por clase)
## Objetivo
Dejar en borrador la hoja de una página que se manda a los inscritos después de cada clase (idea clave, atajos, cuidados, tarea y próxima clase).
## Cuándo se usa
Antes de cada clase, para tener lista la hoja de esa clase, o cuando cambia el material de la clase.
## Entrada
- Número de clase (1, 2 o 3).
- `claseN-material.md` de esa clase (fuente principal).
## Pasos
1. Abre `kit-alumno.md` y la hoja de la clase N. Compárala con `claseN-material.md`.
2. Completa lo que sale del material: idea clave, atajos, cuidados y tarea (texto de la tarea igual al de `temario.md`).
3. Deja entre corchetes lo que no está en las fuentes: `[ENLACE A LAS GRABACIONES]`, `[ENLACE DE LA CLASE]`, `[CANAL DE SOPORTE]`, `[ENLACE A LA ENCUESTA]`.
4. La hoja 2 está armada solo con lo que menciona el material de la clase 3: revísala contra `clase2-material.md` antes de darla por lista.
5. La hoja 3 no menciona ofertas ni nivel 2 (ver `clase3-material.md`). No los agregues.
6. Verifica: cabe en un mensaje largo o una página, tuteo, sin datos reales de personas.
7. Cierra con las "notas para quien envía" al final del archivo, tal cual.
## Salida (JSON)
{"estado":"ok|falla|necesita_sergio","borrador":"ruta de la hoja editada","motivo":"qué se completó y qué quedó entre corchetes"}
## Fuentes
- `/workspace/taller-claude/kit-alumno.md`
- `/workspace/taller-claude/clase1-material.md`, `clase2-material.md`, `clase3-material.md`
- `/workspace/taller-claude/temario.md`
- `/workspace/taller-claude/clase3-biblioteca-prompts.md` (se adjunta a la hoja 3)
## Reglas
- Regla de grabaciones (literal en `comunidad.md`): todos los inscritos, incluso los que se sumen tarde, reciben las grabaciones con acceso por 30 días, solo en el grupo y solo con pago verificado.
- No pegues nombres, teléfonos ni nada de `inscriptos.csv` (existe, es privado).
- Testimonios solo con permiso escrito; no los pidas en la hoja.
- La hoja es borrador: el envío lo hace Sergio.
## Checklist de terminado
- [ ] Tarea y próxima clase coinciden con `temario.md`.
- [ ] Todos los enlaces siguen entre corchetes.
- [ ] Hoja 2 revisada contra `clase2-material.md`.
- [ ] Sin ofertas, ingresos ni cifras inventadas.
- [ ] Marcada como "BORRADOR - SIN ENVIAR".
## Prohibido
enviar, publicar, cobrar, push, deploy
## Cuándo escalar
Si falta un enlace o canal de soporte que solo Sergio tiene, si piden incluir ofertas o nivel 2, o si el material y el temario se contradicen: `necesita_sergio`.
