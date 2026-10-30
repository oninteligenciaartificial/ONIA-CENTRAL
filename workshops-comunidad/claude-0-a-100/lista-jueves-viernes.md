# Lista de Sergio Urcullo para el jueves 29 y el viernes 30

29-oct-2026, por Claude Code. Es lo que solo puede hacer Sergio Urcullo para lanzar "Claude de 0 a 100", en orden. Sale de "Lo que tiene que estar antes de lanzar", del [plan del taller](../plan-meta-ads-borrador.md).

**Por qué en este orden:** la página necesita el número nuevo, y la campaña necesita la página, la tarjeta y los videos. Lo que no depende de nada va después.

Los comandos van en una PowerShell abierta desde el menú Inicio. Ninguno instala nada ni usa una clave. Los que abren una página la abren en el navegador; el login lo hacés vos ahí.

Los pasos de cada servicio salen de su ayuda oficial, leída el 29-oct-2026. Los menús pueden cambiar un poco según la versión de la app.

## Jueves 29

### 1. El número nuevo de closer

1. Comprá un chip nuevo de Entel, Tigo o Viva. Es un gasto chico y lo hacés vos.
2. Elegí en qué celular va:
   - WhatsApp y WhatsApp Business andan a la vez en el mismo celular, cada app con su número. Para eso el celular necesita doble SIM o eSIM ([ayuda de WhatsApp](https://faq.whatsapp.com/665643701880397/?locale=es_LA&cms_platform=android)).
   - Si tu número de hoy ya está en WhatsApp Business, el nuevo va en otro celular: WhatsApp Business no deja agregar una segunda cuenta (misma ayuda).
3. Instalá WhatsApp Business, de Meta, desde la tienda del celular.
4. Registrá el número: elegí Bolivia, escribí el número sin ceros adelante y esperá el código de 6 dígitos por SMS, o tocá "Llámame". Puede tardar hasta 10 minutos; no lo adivines, porque bloquea un rato ([ayuda de WhatsApp](https://faq.whatsapp.com/1344487902959714/?locale=es_LA&cms_platform=android)).
5. Perfil de empresa:
   - nombre: el tuyo, "Sergio Urcullo";
   - categoría: Educación;
   - descripción: "Talleres de IA en vivo. Claude de 0 a 100.";
   - foto: tu cara, la misma de la página.
6. Abrilo también en la compu, para pegar los textos desde ahí. Durante las clases, WhatsApp Web va cerrado, porque la grabación lo podría tomar:

   ```powershell
   Start-Process 'https://web.whatsapp.com'
   ```

   En el celular: ⋮ > Dispositivos vinculados > Vincular un dispositivo, y escaneás el código de la compu. El celular tiene que abrir la app al menos cada 14 días ([ayuda de WhatsApp](https://faq.whatsapp.com/647349420360876/?locale=es_LA)).

**Listo cuando:** el número nuevo tiene WhatsApp Business y lo ves en la compu.

### 2. La página con tu nombre, conectada a WhatsApp

1. En la compu, con tu perfil personal de Facebook: Páginas > Crear página > Página pública > nombre ("Sergio Urcullo") y categoría > Crear página > datos de contacto > foto, la misma de WhatsApp ([ayuda de Facebook](https://es-la.facebook.com/help/104002523024878)).
2. Cuando pregunta, tocá "Conectar WhatsApp" con el número de closer. Si lo salteaste: cambiá al perfil de la página > Configuración > Permisos > Cuentas vinculadas > WhatsApp > +591 y el número > "Enviar código de WhatsApp" > el código > Confirmar ([ayuda de Meta](https://es-la.facebook.com/business/help/1583303048513172)). El número no puede estar conectado a otra página.
3. Sumá la página al portfolio "OniaAgency", que es el dueño de "ONIA Ads" (conector de Meta, 29-oct): Meta Business Suite > Configuración > Cuentas > Páginas > + Agregar > Agregar una página de Facebook existente > el nombre > aceptar los términos > Agregar página ([ayuda de Meta](https://es-la.facebook.com/business/help/720478807965744)). Hace falta control total del portfolio.
4. Quien crea los anuncios tiene que tener asignadas la página y la cuenta publicitaria ([ayuda de Meta](https://es-la.facebook.com/business/help/1416032806066393)). Revisá que vos tengas las dos.

**Listo cuando:** avisás, y un agente comprueba con el conector de Meta que ve la página nueva. Hoy ve solo "Onia".

### 3. La tarjeta en "ONIA Ads" y el tope

1. Facturación y pagos > Configuración de pago, en "ONIA Ads" > Agregar método de pago > tarjeta de crédito > Siguiente ([ayuda de Meta](https://es-la.facebook.com/business/help/132073386867900)). La tarjeta la cargás vos: un agente no escribe datos de tarjetas.
2. El tope, con el monto que elijas en la pregunta 2 del [README](README.md): Configuración de pago > Límite de gasto de la cuenta > Opciones > Definir límite > el monto > Guardar ([ayuda de Meta](https://es-la.facebook.com/business/help/141820733085330)). Tarda unos 15 minutos en aplicarse. Al llegar al tope, los anuncios se pausan aunque sigan diciendo "activos".

**Listo cuando:** un agente comprueba con el conector que "ONIA Ads" tiene método de pago. Hoy no lo tiene.

### 4. El QR del banco

1. En la app de tu banco, generá un QR para cobrar:
   - **sin monto fijo** y para muchos pagos, así sirve para Bs 50, Bs 70 y Bs 120;
   - que venza después del sábado 14 de noviembre, el final de la segunda edición.
2. Si tu banco solo da QR con monto, generá uno por monto. Avisá, y un agente parte "/qr".
3. Guardá la imagen en el celular del número de closer.

**Listo cuando:** la imagen está en ese celular y alguien de confianza te pagó Bs 1 con ella para probar.

### 5. YouTube verificado

Hacelo antes de subir la prueba del paso 6: un video de más de 15 minutos subido antes de verificar hay que volver a subirlo ([ayuda de YouTube](https://support.google.com/youtube/answer/71673?hl=es-419)).

1. Con la cuenta de Google del canal donde van las grabaciones:

   ```powershell
   Start-Process 'https://www.youtube.com/verify'
   ```

2. Elegí cómo recibir el código, por SMS o por llamada, y escribilo.

**Listo cuando:** en YouTube Studio, "Elegibilidad de funciones" dice "Habilitadas" (misma ayuda). Sin eso, YouTube no deja subir videos de más de 15 minutos.

### 6. La prueba de la Herramienta Recortes

1. Abrí Claude en una ventana y Meet en otra.
2. Apretá Win + Shift + R, o abrí Recortes > Grabar > Nuevo ([ayuda de Microsoft](https://support.microsoft.com/es-es/windows/apps/use-snipping-tool-to-capture-screenshots)). Elegí solo el rectángulo de la ventana de Claude.
3. En la barra de grabación, prendé el micrófono y apagá el sonido de la compu, así no se graban las voces de los inscriptos.
4. Iniciar. Grabá 3 minutos hablando y moviéndote por Claude. Detener.
5. Mirá cuánto pesa. Recortes la guarda solo en Videos\Screen Recordings: ahí están tus grabaciones de agosto a octubre.

   ```powershell
   Get-ChildItem "$([Environment]::GetFolderPath('MyVideos'))\Screen Recordings" -Filter *.mp4 | Sort-Object LastWriteTime -Descending | Select-Object -First 1 Name, @{n='MB';e={[math]::Round($_.Length/1MB,1)}}, LastWriteTime | Format-List
   ```

6. Mirá el espacio libre. El 29-oct había 46 GB en C: y 491 GB en E:.

   ```powershell
   Get-PSDrive C, E | Select-Object Name, @{n='LibreGB';e={[math]::Round($_.Free/1GB,1)}}
   ```

7. Subí la prueba a YouTube y ponela como **no listado**: YouTube Studio > Contenido > Visibilidad > No listado > Guardar ([ayuda de YouTube](https://support.google.com/youtube/answer/157177?hl=es-419)). Abrí el enlace en una ventana privada: tiene que verse solo Claude y oírse tu voz.
8. **Prueba larga:** cuando no estés en la compu, grabá el mismo rectángulo 55 minutos, con una ventana quieta. ¿Se guardó entero? Mirá cuánto pesa con el comando del paso 5: por dos, es lo que pesaría la clase 1.
   - En clase se graba una toma por sala, de menos de una hora ([temario](temario.md)), porque no está probado que Recortes aguante 2 horas seguidas.
   - Lo que va a pesar está sin confirmar. Tus grabaciones de agosto a octubre duran de 9 a 103 segundos y pesan de 0,6 a 1 MB por segundo, unos 2 a 3,7 GB por hora. Grabando solo la ventana de Claude debería pesar menos.
9. Creá la carpeta de las grabaciones y los videos en E:, y mové ahí las dos pruebas:

   ```powershell
   New-Item -ItemType Directory -Force 'E:\ONIA-talleres\claude-0-a-100\anuncios', 'E:\ONIA-talleres\claude-0-a-100\clases'
   ```

   ```powershell
   Get-ChildItem "$([Environment]::GetFolderPath('MyVideos'))\Screen Recordings" -Filter *.mp4 | Sort-Object LastWriteTime -Descending | Select-Object -First 1 | Move-Item -Destination 'E:\ONIA-talleres\claude-0-a-100\clases'
   ```

   El segundo mueve la última grabación: corrélo dos veces, una por prueba. Después de cada clase se usa el mismo, una vez por toma.

**Listo cuando:** la prueba se ve bien en YouTube como no listado, la prueba larga se guardó entera y sabés cuánto va a pesar la clase 1.

### 7. La prueba del temario con una cuenta gratis

1. Copiá los archivos de práctica a tu escritorio:

   ```powershell
   $dest = Join-Path ([Environment]::GetFolderPath('Desktop')) 'taller-claude'; New-Item -ItemType Directory -Force $dest | Out-Null; Copy-Item 'C:\dev\proyectos\ONIA-CENTRAL\.claude\worktrees\unruffled-payne-010df0\workshops-comunidad\claude-0-a-100\material\*' $dest; Start-Process $dest
   ```

   Esa ruta es la de la sesión de Claude que armó esto, y existe hasta que se limpie. Después del merge, la ruta es la del repo:

   ```powershell
   $dest = Join-Path ([Environment]::GetFolderPath('Desktop')) 'taller-claude'; New-Item -ItemType Directory -Force $dest | Out-Null; Copy-Item 'C:\dev\proyectos\ONIA-CENTRAL\workshops-comunidad\claude-0-a-100\material\*' $dest; Start-Process $dest
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

1. Contestá las 4 preguntas que quedan en [README.md](README.md), en "Lo que falta decidir", de la 2 a la 5. La 1, los Bs 70, ya la decidiste.
2. Leé en el PR el temario, los textos de WhatsApp, los guiones y el texto del anuncio. Tu aprobación queda citada en un comentario del PR, con captura.

**Listo cuando:** el PR tiene tu aprobación citada.

### 10. Grabar los 2 videos

1. Con los guiones de [anuncio.md](anuncio.md). Si la prueba del jueves salió bien, grabá también la frase "y con la cuenta gratis".
2. El video 2 necesita el archivo `ventas-octubre-ejemplo.csv` en el celular: mandátelo desde la carpeta del escritorio.
3. Guardá los videos en `E:\ONIA-talleres\claude-0-a-100\anuncios`.
4. Avisá, y un agente revisa que estén en 9:16 y que el texto quede dentro de la zona segura.

**Listo cuando:** los 2 videos están en E: y los aprobaste.

### 11. Los grupos de cada clase

Uno por clase, con aprobación para entrar, como propone el [PR #66 (plan de marca personal)](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/pull/66). Si van dentro de tu comunidad de WhatsApp o aparte lo decidís con el [issue #65 (marca personal y comunidad)](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/65). Sus enlaces van en los "/pagado" del paso 12.

- Los grupos de una comunidad se crean desde el número dueño de la comunidad, y una comunidad no se puede crear desde WhatsApp Business ([ayuda de WhatsApp](https://faq.whatsapp.com/438859978317289)).
- Sumá el número de closer como administrador de cada grupo: de ahí salen el recordatorio, "/sala" y la grabación.

**Listo cuando:** los 3 grupos existen, el número de closer es administrador en cada uno y tenés sus enlaces.

### 12. Cargar WhatsApp Business

En el celular del número de closer, con los textos aprobados de [whatsapp.md](whatsapp.md), versión A:

1. **La bienvenida:** Herramientas > Mensaje de bienvenida > Enviar mensaje de bienvenida > pegás el texto > Destinatarios: Todos > Guardar ([ayuda de WhatsApp](https://faq.whatsapp.com/501866148528310/?locale=es_LA&cms_platform=android)).
2. **Las respuestas rápidas:** Herramientas > Respuestas rápidas > + > el mensaje y el atajo > Guardar, una por una ([ayuda de WhatsApp](https://faq.whatsapp.com/1791149784551042/?locale=es_LA&cms_platform=android)):
   - "/taller";
   - "/qr", con la imagen del QR;
   - los "/pagado" de la versión A, con el enlace de cada grupo;
   - "/sala", "/devolucion" y "/reprogramada".
3. **Las etiquetas:** "Anuncio", "Pagó", "Combo", "Clase 1", "Clase 2", "Clase 3" y "Acepta mensajes". En Android: Chats > ⋮ > Etiquetar chat > nombre > Guardar. Si tu app muestra "Listas" en vez de etiquetas: Herramientas > Listas > Nueva lista ([ayuda de WhatsApp](https://faq.whatsapp.com/3398508707096369/?locale=es_LA&cms_platform=android)).

**Listo cuando:** desde otro número escribís "Hola, quiero info del taller de Claude", te llega la bienvenida, y "/taller", "/qr" y "/pagado" aparecen al escribir "/".

### 13. La campaña

1. Si dijiste que sí en la pregunta 3, un agente la carga con el conector de Meta como borrador, sin gastar ([anuncio.md](anuncio.md)), con los frenos de "Sesión con frenos" ([issue #55 (campañas de Meta en pausa con tope)](https://github.com/oninteligenciaartificial/ONIA-CENTRAL/issues/55#issuecomment-6527845355)).
2. En el borrador, desde el Administrador de anuncios, escribís la plantilla de mensaje de cada anuncio: el saludo y la pregunta sugerida de [anuncio.md](anuncio.md). El conector no la carga.
3. Revisás la vista previa de los dos anuncios con captura.
4. Si das el sí, se publica. Meta la revisa, la mayoría en menos de 24 horas, y no arranca antes de la fecha de inicio, el sábado 31 ([ayuda de Meta](https://es-la.facebook.com/business/help/204798856225114)).

**Listo cuando:** la campaña está aprobada por vos con captura y programada para el sábado 31.

### 14. La publicación gratis

Apenas están aprobados los textos y tenés el QR, publicás en tu perfil, tus estados, tus grupos y tu comunidad de WhatsApp, con los textos de [anuncio.md](anuncio.md), "La publicación gratis del viernes 30". No espera a Meta.
