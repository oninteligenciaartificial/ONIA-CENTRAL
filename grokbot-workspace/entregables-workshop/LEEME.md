# LEEME · Entregables del workshop "Claude de 0 a 100"

**Borrador del 1-nov-2026 · no se publicó, no se envió ni se gastó nada.** No hay push ni uso de Higgsfield. No hay claves ni datos de clientes: los ejemplos son ficticios.
El workshop son 3 clases a las 19:00 (hora de Bolivia), el martes 3, el jueves 5 y el sábado 7 de noviembre, por Google Meet con 2 salas por clase. La serie completa cuesta **Bs 50 fijo** (decisión de Sergio, 1/11/2026, 17:30) y se cobra solo con el QR de Yolo (Banco Ganadero).

> **Corrección 1/11/2026:** los guiones de clase siguen con el horario de 2 salas de 50–55 min (hasta las 20:55). El temario consolidado en `/workspace/taller-claude/TEMARIO-FINAL.md` propone 90 min por clase (45 + pausa de 10 + 45, hasta las 20:40); falta decidir si se ajustan los guiones. La clase 3 ya no presenta ofertas pagas: solo una invitación breve al diagnóstico gratis.

## Archivos

| Archivo | Qué es | Cómo se armó |
|---|---|---|
| `clase1-mar3.md` | Guion final de la clase 1, "Desde cero: hablarle bien a la IA". Sala 1 de 19:00 a 19:50, pausa, y Sala 2 de 20:00 a 20:55, minuto a minuto. Trae la demo de antes y después, los 3 ejercicios con prompts, el cierre que invita a la clase 2, un plan B y lo que falta confirmar | Condensa `taller-claude/clase1-material.md` y las diapositivas. Cumple la demo que ya se prometió en `marca/guion-muestra-clase1.md` |
| `clase2-jue5.md` | Guion final de la clase 2, "Tus archivos y proyectos", con el mismo formato. Trae demos de PDF, Proyecto y Artifact, la parte de privacidad y el cierre que invita a la clase 3 | Condensa `clase2-material.md`, `clase2-ejercicios.md` y `clase2-plantilla-proyecto.md` |
| `clase3-sab7.md` | Guion final de la clase 3, "Flujos y siguiente paso", con el mismo formato. Trae plantillas, el flujo encadenado, encuesta, testimonio con permiso y el cierre con el siguiente paso | Condensa `clase3-material.md`, la `clase3-biblioteca-prompts.md` y el anexo de cierre de `clase2-material.md` |
| `reels-dias1-3.md` | Los 9 reels del lunes 2, martes 3 y miércoles 4 de noviembre, listos para grabar. Cada uno trae gancho de 0 a 3 s, texto en pantalla, guion hablado, toma, CTA y el referente aplicado. También trae el plan de grabación y los pendientes | Parte de L1 a L8 de `marca/guiones-semana-2-8nov.md`, reordenados según `marca/calendario-3reels.md` |
| `web/index.html` | Página de invitación en un solo archivo, sin dependencias externas. Trae fechas, precio, temario con "con qué sales", "Esto NO es", quién es Sergio, preguntas frecuentes, cuenta regresiva y un botón que genera el `.ics` para el calendario. El registro va por WhatsApp | Lo que se edita está en el objeto `CONFIG`, al final del archivo |
| `referentes-aplicados.md` | Qué lección de qué referente se aplicó en los reels y en la web, con su archivo fuente | — |

**Registro en la web:** en `/workspace` no hay ningún enlace de reserva (no hay Luma ni formulario). Por eso el botón abre `wa.me/59175414930` con el texto "TALLER". Ese número figura como el de OnIA para talleres en `taller-claude/anuncio-y-combos.md` y en `ONIA-CENTRAL/docs/reglas/equipo-grok-bot.md`. Si aparece un enlace de reserva, se pega en `CONFIG.enlaceReserva` y el botón pasa a apuntar ahí.

**Para verla:** abre `web/index.html` en el navegador. El JavaScript se revisó con `node --check` y la página no carga ningún recurso externo.

## Fuentes usadas
- **Proyecto:** `manuales/INDICE.md`, `decisiones/INDICE.md` y D-20261101-008 a 020, `decisiones-pendientes.md`, `ONIA-CENTRAL/AGENTS.md` y `ONIA-CENTRAL/docs/lecciones.md`.
- **Taller:** `taller-claude/` (temario, material, diapositivas y ejercicios de las clases 1 a 3, biblioteca de prompts, kit del alumno, comunidad, plan de comunidad, temario del nivel 2, `anuncio-y-combos.md` y `grabaciones-log.txt`).
- **Marca:** `marca/calendario-3reels.md`, `guiones-semana-2-8nov.md`, `guion-muestra-clase1.md`, `taller-salida.md`, `aprendizajes-referentes.md` y `salida-referentes.md`.
- **Referentes:** las transcripciones de `marca/transcripciones/` (Enrique Rocha, Santiago Muñoz, BenCorde, Liam Ottley, Erik Taveras y Academi365), más `ONIA-CENTRAL/marca-personal/referentes/` (el resumen del 29-oct y las fichas de Enrique Rocha y Erik Taveras).
- **`investigacion/`:** solo hay `orquestacion-agentes.md`, con casos de fundadores que trabajan con equipos de agentes. Ahí no hay un estudio de "fundadores de YC con marca personal". Lo de Garry Tan, Sam Altman, Levels, Marc Lou y Hormozi se tomó de `marca/aprendizajes-referentes.md`. Si ese estudio existe en otro lugar, falta sumarlo.
- **`reels/`:** el único video guardado (`reel-DePGBFXtswr`) es de un creador en inglés que habla de programar con IA. No sirve para este público y no se usó.

## Qué falta decidir (Sergio)

**Urgente, antes del lunes 2 a las 07:30:**
1. **Precio vigente (D-20261101-009): CERRADA.** Sergio decidió el 1/11 (17:30): **Bs 50 fijo**, no sube. Pendiente de aplicar:
   - los captions de los reels ya dicen "Bs 50 las 3 clases" (en el video hablado el precio sigue sin decirse, como estaba);
   - la web ya carga `CONFIG.precioLanzamiento = 50` y no tiene cambio de precio programado.
2. **Grabar el lote del domingo 1/11.** El reel del lunes R1 sale a las 07:30, y la lista de qué se graba en ese lote está en `reels-dias1-3.md` §4.
3. **La historia de origen y la frase "no sé programar"** del reel del lunes R1 (D-20261101-010).
4. **Crear las 6 salas de Meet**, 2 por clase (D-20261101-008, aprobada), y pegar los enlaces en los guiones.

**Antes de publicar la web:**
5. **Política de devolución (D-20261101-013).** `anuncio-y-combos.md` dice "sin devolución", pero sigue pendiente. Va en `CONFIG.devolucion`, y si queda vacío no se muestra.
6. **Una foto tuya aprobada** para reemplazar `[FOTO_SERGIO pendiente]`. Las fotos de Higgsfield siguen esperando el ok de tu papá (D-20261101-011).
7. **Tema legal del nombre.** "Claude de 0 a 100" usa la marca Claude y se parece a "Claude desde 0 a 100" de Enrique Rocha (lección de `ONIA-CENTRAL/docs/lecciones.md`, "Anuncios y venta"). La web aclara que no está afiliada a Anthropic, pero falta que lo confirme un abogado.
8. **Dónde se publica la web.** No se subió a ningún lado. Publicarla en Vercel o en onia.com.bo cuenta como producción y necesita tu sí.
9. **QR para cobrar (D-20261101-019): CERRADA.** El único QR válido del workshop es el de **Yolo (Banco Ganadero)**. El QR del BCP es solo para ONIA Platform.

**Reels:**
10. **Martes 3 R3.** Se usa L6 ("3 cosas que Claude hace con un archivo tuyo") en vez del detrás de escena de la clase 1, porque a esa hora estás dando la clase y grabar la pantalla puede mostrar asistentes. El detrás de escena pasa al jueves 5 o al sábado 7. ¿Aceptas el cambio?
11. **Miércoles 4 R3.** Se usa el corte del YouTube #1, como dice el calendario, en lugar de L9 (diagnóstico). L9 depende del formulario, que está pendiente, y afirma cosas de ONIA Platform que no están comprobadas. Falta definir el título, la hora y el enlace del YouTube #1.
12. **El link de la bio** debería abrir WhatsApp con "TALLER" ya escrito, igual que la web.

**Clases:**
13. **Cierre de la clase 3.** La llamada de Bs 350 se descartó (ahora hay un diagnóstico de IA gratis). El cierre queda solo con una invitación breve al diagnóstico gratis; el combo, la consultoría y el nivel 2 con precio no se presentan. Falta el enlace real de reserva.
14. **Pendientes de las clases**, marcados `[CONFIRMAR]` en la sección de pendientes de cada guion:
    - si hay alguien que ayude con el chat;
    - el enlace del grupo de WhatsApp de inscritos;
    - qué incluye hoy el plan gratis de Claude (Proyectos, Artifacts y límites), revisado en la página oficial el mismo día;
    - la herramienta para la encuesta;
    - la plantilla de la fórmula para compartir en la clase 1, que todavía no existe.
15. **`onia-cola/talleres/OBJETIVO.md` no existe.** Hay un `.bak` y una carpeta `error/`, así que los guiones no se pudieron contrastar con ese checklist.
