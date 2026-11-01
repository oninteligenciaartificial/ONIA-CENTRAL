# Respaldo de los agentes de OnIA

> Historia. Desde el 1-nov-2026 las reglas vigentes están en `docs/equipo-agentes/COMO-TRABAJAR.md` y los aprendizajes en `docs/equipo-agentes/APRENDIZAJES.md`.

Hola, Sergio. Esta carpeta es el **plan B** por si Grok Bot deja de andar o lo quieres cambiar. Aquí está escrito qué hace cada agente, para que Claude Code o Codex puedan seguir el trabajo con esas mismas reglas.

## Qué hay aquí
- `areas/<area>/AGENTS.md` y `areas/<area>/CLAUDE.md`: el mismo texto en dos archivos. Codex lee `AGENTS.md` y Claude Code lee `CLAUDE.md`.
- Hay una carpeta por cada área: operaciones, ventas-atencion, talleres, growth-anuncios, contenido-marca, onia-platform, finanzas-legal y coordinacion-sum.

## Cómo se arranca un agente (sin programar)
1. Abre la terminal de la computadora compartida.
2. Entra a la carpeta del área. Por ejemplo, para ventas:
   `cd ONIA-CENTRAL/respaldo/areas/ventas-atencion`
3. Escribe `claude` (o `codex`) y pulsa Enter.
4. Pídele lo que necesites en español, como si le hablaras a una persona. Por ejemplo: "Revisa los mensajes de WhatsApp del taller y prepárame respuestas en borrador".
5. Lee lo que te propone. **Nada sale, se publica ni se paga hasta que tú digas "sí".**

## Las reglas que siguen todos
- Nada externo (mensajes a clientes, correos, publicaciones), ningún gasto, nada en producción y nada legal sin tu **sí**.
- Primero te muestran un borrador, con 2 o 3 opciones.
- Nunca guardan contraseñas ni claves en Git ni las escriben en el chat.
- Te hablan de "tú", en español y corto.
- Cierran siempre con qué hicieron y qué tienes que decidir tú.

## Quién hace qué
- **Grok Bot** coordina y lee resúmenes, no hace el trabajo pesado.
- **Claude Code** se encarga de textos, análisis y documentos.
- **Codex** se encarga del código.
- Cada uno tiene 3 niveles: **pesado** (para lo difícil, gasta más), **liviano** (el normal) y **rápido** (para cosas simples). El detalle está en `docs/harness/onia-llm.md`.

## Si algo falla
- Si un agente hace algo raro, escribe "para" o cierra la terminal. No pasa nada: los cambios quedan en borrador.
- Los cambios al repo van en una rama aparte y nunca se mezclan solos con la versión principal. Para eso hace falta que tú lo apruebes.
