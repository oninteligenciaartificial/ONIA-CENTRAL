# REGLAS

Video: P del 4-nov, "Cada error de mis agentes se vuelve una regla" ([guiones](../guiones/2026-11-04.md)).

## Guía (bóveda): cómo hacer que tu IA no repita errores

Le corregís algo a la IA, te pide perdón, y en el chat siguiente lo hace igual. No es que no te escuche: cada chat nuevo arranca sin lo que le dijiste en otro. Lo que sí lee siempre es lo que le dejás escrito como instrucciones.

**Dónde se escribe:**

- **En Claude (la app):** creá un proyecto, tocá "Set project instructions" y pegá tus reglas. Claude las usa en todos los chats de ese proyecto. Los proyectos también están en la cuenta gratis, hasta 5 ([ayuda de Claude](https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects)).
- **En Claude Code o Codex (para los que programan):** en un archivo `CLAUDE.md` o `AGENTS.md` del proyecto, que se carga al empezar cada sesión ([docs de Claude Code](https://code.claude.com/docs/en/memory)).

**Cómo se escribe una regla que funciona:**

1. **Una regla, una línea.** "No inventes precios" funciona mejor que un párrafo.
2. **Con su por qué.** "No inventes precios: si no está en la lista que te pasé, decí que no lo sabés". El por qué le ayuda a aplicarla en casos que no previste.
3. **Con la fecha y qué pasó.** Así, cuando la releas en un mes, sabés si sigue valiendo.
4. **Se anota el mismo día del error.** Si lo dejás para después, no lo anotás nunca.

**Cómo lo uso yo:** en mi empresa hay un archivo de lecciones. Cada corrección se anota ahí ese mismo día, y todos mis agentes lo leen antes de trabajar.

**Límite:** son instrucciones, no candados. La IA puede fallar igual, sobre todo si las reglas se contradicen o son demasiadas. Mejor 15 claras que 100 confusas.

> El recurso de este tema lo subo a Onia Community, mi comunidad gratis por WhatsApp.

## Recurso exclusivo (Onia Community): plantilla del archivo de reglas

Copiala en las instrucciones de tu proyecto y cambiá los ejemplos por los tuyos:

```
# Reglas

Antes de responder, leé estas reglas. Si una choca con lo que te pido, avisame.

## Quién soy
[Tu trabajo o tu negocio, a quién le hablás y cómo hablás: de vos, de tú, formal.]

## Reglas
- [Fecha] No inventes datos (precios, fechas, cifras). Por qué: si no está en lo que te pasé, decí "no lo sé".
- [Fecha] Antes de un texto largo, mostrame un borrador de 3 líneas. Por qué: así corrijo el rumbo antes de que escribas todo.
- [Fecha] Respondé en el formato que te pido, sin agregar secciones. Por qué: después lo pego tal cual.

## Errores que ya cometiste
- [Fecha] [Qué hiciste mal] → [qué hacer en su lugar].
```
