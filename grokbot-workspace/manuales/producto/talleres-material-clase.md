---
tarea: talleres-material-clase
version: 1
dueno: Producto
ejecuta: claude
nivel_modelo: 2
max_vueltas: 2
escala_a_sergio: cambio de fecha, hora o precio; contenido que no coincide con su plan; gasto (ej. plan de Google Workspace); promesas de ingresos
---
# Preparar material y diapositivas de una clase
## Objetivo
Dejar en borrador el material del facilitador (guion minuto a minuto) y las diapositivas de una clase de "Claude de 0 a 100", coherentes con `temario.md`.
## Cuándo se usa
Cuando falta o hay que ajustar `claseN-material.md` o `claseN-diapositivas.md` (N = 1, 2 o 3), o cuando cambia el temario.
## Entrada
- Número de clase y qué cambiar.
- El tema/tarea de esa clase en `temario.md` (es la fuente; el material se alinea a él).
## Pasos
1. Lee el bloque de la clase en `temario.md` y el `claseN-material.md` actual.
2. Mantén la estructura: Bloque 1 (~50 min) + pausa + Bloque 2 (~50 min), cada bloque en su propia sala de Meet (<60 min).
3. Suma los minutos del guion de cada bloque. Si pasa de 60, recorta y anótalo (en `clase1-material.md` el Bloque 2 suma ~55 min de guion).
4. Edita el material y luego las diapositivas (`claseN-diapositivas.md`; la clase 1 tiene además `.html`). Mismo orden de temas.
5. Revisa que tarea, fecha y hora coincidan con `temario.md`. Si difieren, escribe `POR CONFIRMAR: <qué>`; no corrijas fechas por tu cuenta.
6. Revisa tuteo, que no haya datos reales de personas y que nada prometa ingresos.
7. Un segundo revisor (agente verificador) compara material vs temario. Máximo 2 vueltas.
## Salida (JSON)
{"estado":"ok|falla|necesita_sergio","borrador":"ruta del archivo editado","motivo":"qué cambió y qué quedó POR CONFIRMAR"}
## Fuentes
- `/workspace/taller-claude/temario.md`
- `/workspace/taller-claude/clase1-material.md`, `clase2-material.md`, `clase3-material.md`
- `/workspace/taller-claude/clase1-diapositivas.md`, `clase2-diapositivas.md`, `clase3-diapositivas.md`
- `/workspace/taller-claude/clase3-biblioteca-prompts.md`, `clase2-ejercicios.md`
- `/workspace/decisiones-pendientes.md` (D-20261101-008: Meet gratis corta a los 60 min; aprobada la opción A, 2 salas gratis por clase)
## Reglas
- Con la opción A de D-20261101-008, cada clase usa 2 salas (Bloque 1 y Bloque 2). Las crea Sergio; tú solo dejas el espacio `[ENLACE BLOQUE N]`.
- No inventes precios, cupos ni fechas: cópialos de `temario.md` citando la ruta. No hables de ingresos.
- POR CONFIRMAR: el temario deja pendiente que el sábado 7/11 sea correcto.
- Trabajo largo: encola con `onia-llm cola encolar talleres tarea.md`.
## Checklist de terminado
- [ ] Fecha, hora y tarea coinciden con `temario.md`.
- [ ] Cada bloque suma menos de 60 min o está marcado el recorte.
- [ ] Material y diapositivas siguen el mismo orden.
- [ ] Sin datos de inscriptos; tuteo; sin promesas de ingresos.
- [ ] Lo dudoso está como `POR CONFIRMAR`.
## Prohibido
enviar, publicar, cobrar, push, deploy
## Cuándo escalar
Si cambia fecha/hora/precio, si piden pagar un plan, si el material contradice el plan de Sergio o si no cabe en 2 bloques de <60 min: `necesita_sergio` y te detienes.
