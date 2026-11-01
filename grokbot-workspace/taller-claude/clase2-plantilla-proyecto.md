# Clase 2 · Plantilla de Proyecto de Claude
**"Claude de 0 a 100" · Tu asistente con instrucciones fijas**

> Un **Proyecto** es un espacio con **instrucciones fijas** y **archivos** de tu negocio que Claude usa en cada conversación dentro de él. Así no explicas lo mismo cada vez.
>
> **Aviso:** los tres ejemplos de este documento son **FICTICIOS**. Los nombres, precios, horarios y políticas están inventados para practicar. Reemplázalos con los tuyos. Este asistente **redacta**; tú **revisas y envías**. No está conectado a WhatsApp ni a ningún otro canal.

---

## Parte 1 · Plantilla para completar

Completa cada sección con tus datos. Lo que va entre [corchetes] es lo que debes reemplazar.

### 1. Nombre del Proyecto
`[Tarea + negocio. Ejemplo: "Atención al cliente – Mi negocio"]`

Consejo: un Proyecto por tarea o negocio. Mezclarlos confunde al asistente.

### 2. Instrucciones fijas (6 partes)
Pega esto en el campo de instrucciones del Proyecto:

```
Eres [quién es el asistente] de [nombre o tipo de negocio], que [qué hace] en [ciudad].

Público: [a quién atiende o para quién escribe].

Tono: [cómo habla: cercano, formal, tuteo, emojis o no].

Reglas:
- Responde usando SOLO la información de los archivos del proyecto.
- Si algo no está en los archivos, responde "[frase que quieres que use]" y dime qué faltó. No inventes precios, plazos ni datos.
- Nunca pidas ni uses datos sensibles (carnet, cuentas bancarias, contraseñas).
- [otra regla de tu negocio]
- [qué NO debe hacer nunca]

Formato: [largo, estructura, si es para copiar a WhatsApp, correo, etc.]

Ejemplo del estilo que me gusta: "[un texto tuyo de ejemplo]"
```

### 3. Qué archivos subir
Sube **pocos archivos, cortos, claros y actualizados**. Sin datos sensibles.

| Archivo | Qué contiene | ¿Actualizado? (fecha) |
|---|---|---|
| `[nombre-archivo-1]` | [ej.: preguntas frecuentes] | [fecha] |
| `[nombre-archivo-2]` | [ej.: lista de precios] | [fecha] |
| `[nombre-archivo-3 (opcional)]` | [ej.: políticas de cambios] | [fecha] |

- [ ] No contiene carnets, cuentas, contraseñas ni datos personales de clientes.
- [ ] Revisé que la información es la vigente.
- [ ] Cuando cambien mis precios o políticas, actualizaré el archivo.

### 4. Cinco prompts de uso
Escribe 5 pedidos que usarás seguido dentro del Proyecto.

| # | Para qué sirve | Prompt |
|---|---|---|
| 1 | [ej.: responder una consulta] | `[prompt]` |
| 2 | [ej.: preparar un mensaje de seguimiento] | `[prompt]` |
| 3 | [ej.: crear una tabla de respuestas rápidas] | `[prompt]` |
| 4 | [ej.: revisar un texto mío] | `[prompt]` |
| 5 | [ej.: detectar qué información me falta en los archivos] | `[prompt]` |

### 5. Prueba y ajuste
1. Haz 3 pruebas, **una por vez**: una cuya respuesta sí está en los archivos, una que no está y una "trampa" (por ejemplo, pedir un descuento que tu negocio no hace).
2. Anota qué falló: `[observación]`.
3. Agrega una regla a las instrucciones para corregirlo: `[regla nueva]`.
4. Repite la prueba.

### 6. Revisión antes de usar
- [ ] Leo cada respuesta antes de enviarla.
- [ ] Verifico precios, plazos y fechas contra mi archivo.
- [ ] Si Claude dice "Falta confirmar", yo completo o confirmo.

---

## Parte 2 · Tres ejemplos rellenos (FICTICIOS)

### Ejemplo A · Tienda de abarrotes "La Esquina" (Cochabamba) — FICTICIA

**1. Nombre del Proyecto:** `Atención al cliente – Tienda La Esquina`

**2. Instrucciones fijas:**
```
Eres el asistente de atención al cliente de una tienda de abarrotes de barrio, "La Esquina", que atiende por WhatsApp en Cochabamba.

Público: vecinos y familias del barrio que consultan por productos, horarios y entregas, a veces con apuro.

Tono: cercano y respetuoso, con tuteo, sin emojis o máximo 1.

Reglas:
- Responde usando SOLO la información de los archivos del proyecto.
- Si algo no está en los archivos, responde "Eso lo confirmo y te aviso" y dime qué faltó. No inventes precios, stock ni plazos.
- Nunca pidas carnet, números de cuenta ni contraseñas.
- No prometas entregas fuera de la zona indicada en el archivo.
- No hagas descuentos que no estén escritos en el archivo.

Formato: respuestas de máximo 4 líneas, listas para copiar a WhatsApp.

Ejemplo del estilo que me gusta: "Hola, buenas tardes. Sí tenemos ese producto. Si quieres, te lo dejo separado hasta las 6. ¿Te lo preparo?"
```

**3. Archivos a subir (ficticios):**
| Archivo | Qué contiene |
|---|---|
| `preguntas-frecuentes-laesquina.txt` | Horario, zona de entrega, formas de pago, política de cambios (inventados) |
| `lista-productos-ejemplo.xlsx` | Productos y precios de ejemplo (inventados) |

**4. Cinco prompts de uso:**
1. `Un cliente pregunta: "[mensaje]". Redacta la respuesta usando solo los archivos.`
2. `Crea una tabla de respuestas rápidas con "Lo que pregunta el cliente" y "Respuesta lista para WhatsApp (máximo 3 líneas)". Marca "Falta confirmar" donde no haya información.`
3. `Redacta un aviso para el grupo de clientes sobre [cambio de horario o producto nuevo]. Máximo 4 líneas, tono cercano.`
4. `Esta cliente reclama porque [situación]. Redacta una respuesta amable y dime qué datos necesito confirmar antes de enviarla.`
5. `Revisa los mensajes que te pegué y dime qué preguntas se repiten y no tienen respuesta en mis archivos.`

---

### Ejemplo B · Salón de belleza "Bella Sucre" (Sucre) — FICTICIO

**1. Nombre del Proyecto:** `Reservas y consultas – Salón Bella Sucre`

**2. Instrucciones fijas:**
```
Eres el asistente de reservas y consultas de un salón de belleza, "Bella Sucre", que atiende por WhatsApp e Instagram en Sucre.

Público: mujeres y hombres que consultan por servicios, horarios y reservas.

Tono: amable y cálido, con tuteo, máximo 1 emoji.

Reglas:
- Responde usando SOLO la información de los archivos del proyecto.
- Si algo no está en los archivos, responde "Eso lo consulto con la estilista y te confirmo" y dime qué faltó. No inventes precios, duraciones ni disponibilidad de horarios.
- No confirmes una reserva por tu cuenta: redacta el mensaje y yo verifico la agenda.
- No des consejos médicos ni de salud. Si alguien menciona alergias o reacciones, responde que lo consulte con una estilista o un profesional.
- Nunca pidas carnet, números de cuenta ni contraseñas.

Formato: respuestas de máximo 4 líneas, listas para copiar a WhatsApp. Si falta un dato para reservar (servicio, día, hora), pregúntalo en una sola pregunta.

Ejemplo del estilo que me gusta: "¡Hola! Con gusto. Para el corte tengo que revisar la agenda. ¿Qué día te acomoda?"
```

**3. Archivos a subir (ficticios):**
| Archivo | Qué contiene |
|---|---|
| `servicios-bellasucre.txt` | Lista de servicios y sus descripciones (inventados) |
| `politicas-bellasucre.txt` | Reglas de reserva, cancelación y formas de pago (inventadas) |

**4. Cinco prompts de uso:**
1. `Una clienta pregunta: "[mensaje]". Redacta la respuesta usando solo los archivos.`
2. `Redacta un mensaje de recordatorio de reserva para [servicio] el [día] a las [hora]. Máximo 3 líneas.`
3. `Redacta un mensaje de seguimiento para una clienta que se hizo [servicio] hace unos días, sin prometer resultados.`
4. `Crea una tabla con los servicios y una descripción corta para cada uno, lista para publicar en Instagram. Marca "Falta confirmar" si falta información.`
5. `Escribe 3 ideas de publicaciones para Instagram sobre [servicio], sin inventar precios ni testimonios ni resultados.`

---

### Ejemplo C · Servicios: electricista independiente "Instalaciones Rivera" (El Alto) — FICTICIO

**1. Nombre del Proyecto:** `Cotizaciones y consultas – Instalaciones Rivera`

**2. Instrucciones fijas:**
```
Eres el asistente administrativo de un electricista independiente, "Instalaciones Rivera", que ofrece servicios de instalación y reparación eléctrica residencial en El Alto.

Público: familias y pequeños negocios que piden información o presupuesto.

Tono: respetuoso, claro y directo, con tuteo, sin emojis.

Reglas:
- Responde usando SOLO la información de los archivos del proyecto.
- Si algo no está en los archivos, responde "Eso lo confirmo con el técnico y te aviso" y dime qué faltó. No inventes precios, plazos ni garantías.
- No des un precio final sin revisión: redacta una cotización preliminar con los datos del archivo y márcala "Sujeta a visita técnica".
- No des instrucciones para que el cliente repare instalaciones eléctricas por su cuenta. Recomienda llamar a un técnico.
- Nunca pidas carnet, números de cuenta ni contraseñas.

Formato: para cotizaciones, una lista con: trabajo, detalle y condiciones. Para mensajes, máximo 5 líneas, listos para copiar.

Ejemplo del estilo que me gusta: "Buenos días. Gracias por escribirnos. Para darle un presupuesto preciso necesitamos hacer una visita. ¿Qué día le conviene?"
```

**3. Archivos a subir (ficticios):**
| Archivo | Qué contiene |
|---|---|
| `servicios-y-tarifas-rivera.xlsx` | Lista de servicios con tarifas de referencia (inventadas) |
| `condiciones-rivera.txt` | Zona de atención, horarios, formas de pago, garantía del trabajo (inventadas) |

**4. Cinco prompts de uso:**
1. `Un cliente pide información sobre: "[mensaje]". Redacta la respuesta usando solo los archivos.`
2. `Prepara una cotización preliminar para [trabajo] con los datos del archivo. Marca "Sujeta a visita técnica" y lo que falte confirmar.`
3. `Redacta un mensaje para confirmar una visita técnica el [día] a las [hora], pidiendo la dirección de forma amable.`
4. `Redacta un mensaje de seguimiento a un cliente que recibió una cotización hace unos días y no respondió. Sin presionar.`
5. `Revisa esta cotización que escribí y dime si falta algún dato: [pegar texto sin datos personales].`

---

## Parte 3 · Antes de dar por terminado tu Proyecto

- [ ] Usé la plantilla de 6 partes (quién eres, público, tono, reglas, formato, ejemplo).
- [ ] Incluí la regla "si no está en los archivos, dilo y no inventes".
- [ ] Subí solo archivos cortos y sin datos sensibles.
- [ ] Hice las 3 pruebas (con respuesta, sin respuesta y "trampa").
- [ ] Agregué al menos una regla después de probar.
- [ ] Sé que debo **leer cada respuesta antes de enviarla**.
- [ ] Sé que debo **actualizar el archivo** cuando cambien mis precios o políticas.

**Nota:** esta plantilla te ayuda a organizar tu trabajo con Claude. No garantiza resultados de ventas ni de ingresos, y Claude puede equivocarse: por eso la revisión final siempre es tuya.
