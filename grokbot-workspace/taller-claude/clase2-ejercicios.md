# Clase 2 · Ejercicios para el alumno
**"Claude de 0 a 100" · Trabajar con tus archivos**

> **Aviso importante:** todos los archivos, nombres, precios, cantidades y plazos de esta guía son **FICTICIOS**. Están inventados para practicar. No son datos reales de nadie. Cuando hagas los ejercicios con tu propio negocio, usa tus datos, pero **no subas** carnets, cuentas bancarias, contraseñas ni datos personales de clientes.

## Antes de empezar

- Ten Claude abierto en tu navegador.
- Crea una carpeta en tu computadora llamada `clase2-practica`.
- Crea allí los 3 archivos de ejemplo de la sección "Archivos de ejemplo" (más abajo). Puedes copiar el texto en un documento y exportarlo como PDF, o pegarlo en una hoja de cálculo.
- Qué formatos y cuántos archivos acepta tu cuenta puede cambiar. Si algo no se deja subir, revisa la ayuda oficial de Claude.
- Si se agota tu uso del plan gratis, continúa después o trabaja en pareja con alguien que tenga sesión.

## La regla de oro de esta clase

**Claude lee, resume y explica. Tú verificas.** En cada ejercicio hay un paso final de verificación. No lo saltes.

---

## Archivos de ejemplo (TODOS FICTICIOS)

### Archivo 1 · PDF: `contrato-ejemplo.pdf` (FICTICIO)

Copia este texto en un documento y expórtalo como PDF:

```
CONTRATO DE ALQUILER (EJEMPLO FICTICIO)
Entre el propietario Sr. Carlos Mamani (ficticio) y la inquilina Sra. Rosa Flores (ficticia), se acuerda:
1. Objeto: alquiler de un local comercial en Tarija, zona centro.
2. Plazo: 12 meses, desde el 1 de diciembre de 2026.
3. Canon mensual: Bs 2.500, pagadero hasta el día 5 de cada mes.
4. Garantía: un mes de canon (Bs 2.500), que se devuelve al final si no hay daños.
5. Preaviso: cualquiera de las partes debe avisar con 60 días de anticipación si no desea renovar.
6. Usos: el local se usará solo para venta de abarrotes.
7. Mejoras: cualquier obra requiere autorización escrita del propietario.
```

*Nota:* falta a propósito una cláusula sobre quién paga luz y agua. Sirve para practicar la sección "Dudas".

### Archivo 2 · Excel: `ventas-semana.xlsx` (FICTICIO)

Pega esto en una hoja de cálculo (una columna por campo) y guárdala como `.xlsx`. También sirve como `.csv`.

```
Dia,Producto,Cantidad,Precio_Bs,Total_Bs
Lunes,Pan francés (docena),30,12,360
Lunes,Salteña (unidad),50,8,400
Lunes,Torta (porción),10,15,150
Martes,Pan francés (docena),35,12,420
Martes,Salteña (unidad),45,8,360
Martes,Torta (porción),12,15,180
Miércoles,Pan francés (docena),28,12,336
Miércoles,Salteña (unidad),55,8,440
Miércoles,Torta (porción),8,15,120
```

### Archivo 3 · Imagen: `nota-de-venta.jpg` (FICTICIA)

Este archivo es una **foto** que tú mismo creas. Opciones:

- Escribe a mano en una hoja el contenido de abajo y tómale una foto con el celular (con buena luz y sin sombras), o
- Escríbelo en un documento, imprímelo y fotografíalo, o toma una captura de pantalla.

Contenido de la nota (FICTICIA):

```
FERRETERÍA "EL TORNILLO" (EJEMPLO FICTICIO) – Cochabamba
Nota de venta

Cemento ........ 2 bolsas x Bs 60 = Bs 120
Pintura ........ 1 galón        = Bs 85
Brocha ......... 2 x Bs 10      = Bs 20

TOTAL: Bs 215
```

*Nota:* la suma correcta es Bs 225, no Bs 215. El error está puesto **a propósito** para que practiques la verificación. No se lo digas a Claude en el primer pedido.

---

## Ejercicio 1 · Sube un PDF: resume, extrae y verifica

**Objetivo:** que Claude te explique un documento con palabras simples y te diga qué falta en él.

### Paso 1. Sube el archivo
1. Abre un chat nuevo en Claude.
2. Pulsa el botón de adjuntar (o arrastra el archivo al cuadro de mensaje).
3. Selecciona `contrato-ejemplo.pdf`. Confirma que aparece adjunto en el chat.

### Paso 2. Haz primero el pedido flojo (para comparar)
Escribe solo esto y envía:

```
Resume esto.
```

Lee la respuesta y pregúntate: *¿esto me dice qué debo hacer yo?*

### Paso 3. Haz el pedido con fórmula
Abre un chat nuevo, adjunta de nuevo el PDF y envía:

```
Eres una persona que explica documentos con palabras simples a alguien que no es especialista.

Contexto: voy a abrir una tienda de abarrotes en Tarija y recibí este contrato de alquiler (adjunto). No soy abogada y no tengo mucho tiempo.

Tarea: resume el contrato y extrae los datos clave.

Formato:
1) Resumen en 3 líneas.
2) Tabla con: concepto, dato y número de cláusula (plazo, canon, garantía, preaviso, usos).
3) Lo que yo debo hacer o pagar, con fechas si aparecen.
4) "Dudas": todo lo que NO aparece en el documento y que yo debería preguntar antes de firmar.
Si algo no está en el documento, no lo inventes.
```

### Paso 4. Verifica
Abre el PDF original y compara con la tabla, dato por dato:

- [ ] ¿El canon mensual coincide (Bs 2.500)?
- [ ] ¿La garantía coincide?
- [ ] ¿El plazo y la fecha de inicio coinciden?
- [ ] ¿El preaviso es de 60 días?
- [ ] ¿Cada dato indica la cláusula correcta?
- [ ] ¿En "Dudas" aparece algo sobre quién paga luz y agua? Si no aparece, anótalo: así ves que "Dudas" ayuda pero **no reemplaza** leer el documento.

### Paso 5. Anota
Escribe en 2 líneas qué diferencia notaste entre el pedido flojo y el pedido con fórmula.

> Esto es una ayuda de lectura, **no es asesoría legal**. Un contrato real lo revisa un abogado.

---

## Ejercicio 2 · Sube un Excel: pregunta y verifica los números

**Objetivo:** hacerle preguntas a una hoja de cálculo y comprobar las cuentas tú mismo.

### Paso 1. Sube el archivo
Chat nuevo → adjunta `ventas-semana.xlsx`.

### Paso 2. Envía este pedido
```
Eres una persona que ayuda a pequeños negocios a entender sus números con palabras simples.

Contexto: tengo una panadería pequeña en Sucre. Adjunto las ventas de 3 días de una semana (ejemplo).

Tarea: responde estas preguntas:
1) ¿Cuánto vendí en total?
2) ¿Cuánto vendí por producto?
3) ¿Qué día vendí más?
4) ¿Qué producto me deja más ingreso?

Formato: una línea por pregunta, con el número y de dónde lo sacaste (qué filas o columnas usaste). Al final, una sección "Cómo verifico esto" con la suma que debo hacer en mi planilla.
Si algún dato no se puede calcular con el archivo, dilo y no lo inventes.
```

### Paso 3. Verifica con tu propia planilla
Abre `ventas-semana.xlsx` y haz tú las sumas (por ejemplo, selecciona la columna `Total_Bs` y suma).

Respuestas correctas, calculadas a mano con los datos ficticios:

| Pregunta | Respuesta correcta |
|---|---|
| Total de los 3 días | Bs 2.766 (lunes 910 + martes 960 + miércoles 896) |
| Pan francés | Bs 1.116 (93 docenas) |
| Salteña | Bs 1.200 (150 unidades) |
| Torta | Bs 450 (30 porciones) |
| Día con más ventas | Martes (Bs 960) |
| Producto que más ingreso deja | Salteña |

- [ ] ¿Las respuestas de Claude coinciden con la tabla?
- [ ] Si alguna no coincide, díselo: "En la fila X el total es Y. Revisa tu cálculo." y vuelve a comparar.

### Paso 4. Pregunta extra (opcional)
Pregúntale: `¿Qué otra pregunta útil podría hacerle a esta tabla?` y prueba una. Verifica también esa respuesta.

---

## Ejercicio 3 · Sube una imagen: lee, extrae y detecta el error

**Objetivo:** que Claude lea una foto y que tú compruebes lo que leyó.

### Paso 1. Sube la imagen
Chat nuevo → adjunta `nota-de-venta.jpg` (la foto que creaste).

### Paso 2. Pide la lectura y la extracción
```
Eres una persona que ayuda a ordenar comprobantes de un negocio pequeño.

Contexto: te adjunto la foto de una nota de venta de una ferretería (ejemplo).

Tarea: lee la imagen y extrae los datos.

Formato:
1) Tabla con: producto, cantidad, precio unitario y subtotal.
2) El total que figura en la nota.
3) "No pude leer o no estoy seguro de": todo texto que no se vea claro.
Si algo no se lee bien, no lo adivines: dilo.
```

### Paso 3. Verifica
- [ ] Compara cada fila de la tabla con tu foto.
- [ ] Suma tú los subtotales con una calculadora (120 + 85 + 20).
- [ ] ¿Claude se dio cuenta de que el total escrito (Bs 215) no coincide con la suma (Bs 225)? Si no lo notó, es una buena lección: **Claude puede copiar un error sin avisarte**.

### Paso 4. Pídele que revise la suma
Envía:

```
Suma los subtotales y dime si el total de la nota es correcto. Muestra la cuenta paso a paso.
```

Comprueba de nuevo con tu calculadora.

---

## Ejercicio 4 (cierre) · Tu propio archivo

1. Elige **un archivo tuyo** (de tu negocio, tus estudios o tu casa) que **no tenga datos sensibles**. Si hace falta, tapa o borra nombres, teléfonos y números de cuenta.
2. Súbelo y escribe un pedido con la fórmula: **Rol + Contexto + Tarea + Formato**, y agrega: "Si algo no está en el archivo, no lo inventes. Pon aparte lo que falta en 'Dudas'".
3. Verifica al menos **dos datos** contra el original.
4. Anota: *¿qué le pedí?, ¿qué acertó?, ¿qué tuve que corregir?*

---

## Lista de verificación (úsala siempre)

1. **Pide la fuente:** "indica la cláusula", "indica la fila", "cita la frase".
2. **Pide "Dudas":** lo que no está en el archivo, aparte, sin rellenar.
3. **Recalcula** montos, totales y fechas con una calculadora o una suma en la planilla.
4. **Compara con el original** en lo que cuesta caro equivocarse.
5. **Temas legales, médicos o financieros serios:** Claude te ayuda a entender, pero decide un profesional.

## Qué NO subir
- Carnets, cuentas bancarias, contraseñas, números de tarjeta, códigos QR de cobro.
- Datos personales de clientes o terceros sin necesidad.
- Documentos confidenciales de otra persona o empresa sin permiso.
- **Alternativa:** anonimiza ("Cliente 1", "Proveedor A") o usa un archivo de ejemplo.

## Errores comunes
- Subir un archivo y pedir solo "analízalo" (sin tarea ni formato).
- Creer los números sin comprobarlos.
- No pedir "Dudas": Claude puede rellenar lo que falta con suposiciones.
- Subir datos sensibles.

## Para entregar o comentar en la clase 3
Escribe en 3 líneas: *¿con qué archivo practiqué?, ¿qué verifiqué?, ¿qué tuve que corregir?* Cuenta con tus palabras lo que notaste; no hace falta poner cifras si no las mediste. Borra datos privados antes de mostrar nada.
