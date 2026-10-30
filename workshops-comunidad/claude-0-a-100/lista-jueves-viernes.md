# Lista de Sergio Urcullo para el jueves 29 y el viernes 30

29-oct-2026, por Claude Code. Es lo que solo puede hacer Sergio Urcullo para lanzar "Claude de 0 a 100", en orden. Sale de "Lo que tiene que estar antes de lanzar", del [plan del taller](../plan-meta-ads-borrador.md).

**Por qué en este orden:** la página necesita el número nuevo, y la campaña necesita la página, la tarjeta y los videos. Lo que no depende de nada va después.

Los comandos van en una PowerShell abierta desde el menú Inicio. Ninguno instala nada ni usa una clave. Los que abren una página la abren en el navegador; el login lo hacés vos ahí.

## Jueves 29

### 1. El número nuevo de closer

1. Comprá un chip nuevo de Entel, Tigo o Viva. Es un gasto chico y lo hacés vos.
2. Instalá WhatsApp Business, de Meta, desde la tienda del celular. {pasos del celular: doble SIM, otro celular o segunda cuenta}
3. Registrá el número nuevo con el código que llega por SMS.
4. Perfil de empresa:
   - nombre: el tuyo, "Sergio Urcullo";
   - categoría: Educación;
   - descripción: "Talleres de IA en vivo. Claude de 0 a 100.";
   - foto: tu cara, la misma de la página.
5. Abrilo también en la compu, para pegar los textos desde ahí:

   ```powershell
   Start-Process 'https://web.whatsapp.com'
   ```

   En el celular: WhatsApp Business, "Dispositivos vinculados", y escaneás el código.

**Listo cuando:** el número nuevo tiene WhatsApp Business y lo ves en la compu.

### 2. La página con tu nombre, conectada a WhatsApp

{pasos verificados}

**Listo cuando:** avisás, y un agente comprueba con el conector de Meta que "ONIA Ads" ve la página.

### 3. La tarjeta en "ONIA Ads" y el tope

{pasos verificados}

**Listo cuando:** un agente comprueba con el conector que "ONIA Ads" tiene método de pago. Hoy no lo tiene.

### 4. El QR del banco

1. En la app de tu banco, generá un QR para cobrar:
   - **sin monto fijo** y para muchos pagos, así sirve para Bs 50, Bs 70 y Bs 120;
   - que venza después del sábado 14 de noviembre, el final de la segunda edición.
2. Si tu banco solo da QR con monto, generá tres: Bs 50, Bs 70 y Bs 120. Avisá, y un agente parte "/qr" en tres.
3. Guardá la imagen en el celular del número de closer.

**Listo cuando:** la imagen está en ese celular y alguien de confianza te pagó Bs 1 con ella para probar.

### 5. YouTube verificado

Con la cuenta de Google del canal donde van las grabaciones:

```powershell
Start-Process 'https://www.youtube.com/verify'
```

{pasos verificados}

**Listo cuando:** la página dice que la cuenta está verificada. Sin eso, YouTube no deja subir videos de más de 15 minutos ([ayuda de YouTube](https://support.google.com/youtube/answer/71673?hl=es-419)).

### 6. La prueba de la Herramienta Recortes

1. Abrí Claude en una ventana y Meet en otra.
2. {cómo se abre la grabación} Elegí solo el rectángulo de la ventana de Claude. Prendé el micrófono y dejá apagado el sonido de la compu, así no se graban las voces de los inscriptos.
3. Grabá 3 minutos hablando y moviéndote por Claude. Cortá.
4. Mirá cuánto pesa:

   ```powershell
   Get-ChildItem "$([Environment]::GetFolderPath('MyVideos'))\Screen Recordings" -Filter *.mp4 | Sort-Object LastWriteTime -Descending | Select-Object -First 1 Name, @{n='MB';e={[math]::Round($_.Length/1MB,1)}}, LastWriteTime | Format-List
   ```

   Los MB de 3 minutos por 40 dan lo que pesa la clase 1, de 2 horas. Tus grabaciones de pantalla completa de agosto a octubre pesan cerca de 1 MB por segundo, unos 3,5 GB por hora: la clase 1 serían unos 7 GB. Grabando solo la ventana de Claude debería pesar menos.
5. Mirá el espacio libre. El 29-oct había 46 GB en C: y 491 GB en E:.

   ```powershell
   Get-PSDrive C, E | Select-Object Name, @{n='LibreGB';e={[math]::Round($_.Free/1GB,1)}}
   ```

6. Subí la prueba a YouTube como **no listado** y abrí el enlace en una ventana privada: tiene que verse solo Claude y oírse tu voz.
7. Creá la carpeta de las grabaciones y los videos en E:, y mové ahí la prueba:

   ```powershell
   New-Item -ItemType Directory -Force 'E:\ONIA-talleres\claude-0-a-100\anuncios', 'E:\ONIA-talleres\claude-0-a-100\clases'
   ```

   ```powershell
   Get-ChildItem "$([Environment]::GetFolderPath('MyVideos'))\Screen Recordings" -Filter *.mp4 | Sort-Object LastWriteTime -Descending | Select-Object -First 1 | Move-Item -Destination 'E:\ONIA-talleres\claude-0-a-100\clases'
   ```

   El segundo mueve la última grabación. Después de cada clase se usa el mismo.

**Listo cuando:** la prueba se ve bien en YouTube como no listado y sabés cuánto va a pesar la clase 1.

### 7. La prueba del temario con una cuenta gratis

1. Copiá los archivos de práctica a tu escritorio:

   ```powershell
   $dest = Join-Path ([Environment]::GetFolderPath('Desktop')) 'taller-claude'; New-Item -ItemType Directory -Force $dest | Out-Null; Copy-Item 'C:\dev\proyectos\ONIA-CENTRAL\.claude\worktrees\unruffled-payne-010df0\workshops-comunidad\claude-0-a-100\material\*' $dest; Start-Process $dest
   ```

2. Abrí Claude en una ventana privada de Edge, así no se mezcla con tu cuenta paga:

   ```powershell
   Start-Process msedge -ArgumentList '-inprivate', 'https://claude.ai'
   ```

3. Creá una cuenta gratis con otro correo, no el de tu plan pago.
4. Seguí la lista "Qué probar el jueves 29 con una cuenta gratis", al final del [temario](temario.md).
5. Mandale a un agente la lista marcada y las capturas, sin datos personales.

**Listo cuando:** la lista está marcada. El agente corrige el temario y dice si el anuncio puede decir "con la cuenta gratis".

### 8. Claude, al plan de US$100

Ya lo decidiste en el [issue #30](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/30): la bajada se programa en claude.ai antes de que se renueve, el martes 3 (plan, "Lo que decidió Sergio Urcullo").

## Viernes 30

### 9. Contestar las preguntas y aprobar los textos

1. Contestá las 5 preguntas de [README.md](README.md), en "Lo que falta decidir".
2. Leé en el PR el temario, los textos de WhatsApp, los guiones y el texto del anuncio. Tu aprobación queda citada en un comentario del PR, con captura.

**Listo cuando:** el PR tiene tu aprobación citada.

### 10. Grabar los 2 videos

1. Con los guiones de [anuncio.md](anuncio.md). Si la prueba del jueves salió bien, grabá también la frase "y con la cuenta gratis".
2. El video 2 necesita el archivo `ventas-octubre-ejemplo.csv` en el celular: mandátelo desde la carpeta del escritorio.
3. Guardá los videos en `E:\ONIA-talleres\claude-0-a-100\anuncios`.
4. Avisá, y un agente revisa que estén en 9:16 y que el texto quede dentro de la zona segura.

**Listo cuando:** los 2 videos están en E: y los aprobaste.

### 11. Cargar WhatsApp Business

Con los textos aprobados de [whatsapp.md](whatsapp.md), versión A:

{pasos verificados: bienvenida, respuestas rápidas, etiquetas}

**Listo cuando:** desde otro número escribís "Hola, quiero info del taller de Claude", te llega la bienvenida, y "/taller", "/qr" y "/pagado" aparecen al escribir "/".

### 12. Los grupos de cada clase

Uno por clase, con aprobación para entrar, como dice el plan de marca personal (PR #66). Si van dentro de tu comunidad de WhatsApp o aparte lo decidís con el [issue #65](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/65). Los enlaces de los grupos van en los "/pagado".

**Listo cuando:** los 3 grupos existen y sus enlaces están en los "/pagado".

### 13. La campaña

1. Si dijiste que sí en la pregunta 4, un agente la carga en pausa con el conector de Meta.
2. Revisás la vista previa de los dos anuncios con captura.
3. Si das el sí, se activa. Arranca el sábado 31 cuando Meta la aprueba.

**Listo cuando:** la campaña está aprobada por vos con captura y programada para el sábado 31.

### 14. La publicación gratis

Apenas están aprobados los textos y tenés el QR, publicás en tu perfil, tus estados, tus grupos y tu comunidad de WhatsApp, con los textos de [anuncio.md](anuncio.md), "La publicación gratis del viernes 30". No espera a Meta.
