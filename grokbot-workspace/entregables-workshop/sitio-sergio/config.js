/* CONFIG público. No incluir credenciales. Conserva las claves de la landing original. */
const CONFIG = {
  inscripcion: {
    endpoint: "/api/inscripciones", // Solo endpoint HTTP en loopback; sin credenciales.
    whatsapp: "", // Vacío reutiliza CONFIG.whatsapp.
    mensaje: "Hola Sergio, registré mi inscripción al workshop. Quiero coordinar los detalles."
  },
  whatsapp: "59175414930",
  enlaceReserva: "", // URL HTTPS de pago/reserva; vacío usa WhatsApp.
  mensaje: "TALLER",
  mensajeProxima: "Hola Sergio, avísame de la próxima edición de Claude de 0 a 100",
  precioLanzamiento: 50, // Aprobado en el pedido del 01/11/2026.
  precioRegular: null,
  cambioPrecio: null,
  devolucion: "", // Pendiente; nunca se promete una garantía no aprobada.
  fotoSergio: "", // Ruta relativa de foto aprobada. Vacío muestra SU, no una foto ficticia.
  borrador: true,
  cupos: 60, // Conservado; no se muestran plazas restantes ni escasez artificial.
  duracionMin: 115,
  clases: [
    {n: 1, titulo: "Desde cero", inicio: "2026-11-03T19:00:00-04:00"},
    {n: 2, titulo: "Archivos y proyectos", inicio: "2026-11-05T19:00:00-04:00"},
    {n: 3, titulo: "Flujos y siguiente paso", inicio: "2026-11-07T19:00:00-04:00"}
  ],
  instagram: "https://www.instagram.com/sergiourcullo/",
  llamada: "", // URL original de agenda por recuperar. Vacío: coordinar por WhatsApp.
  webs: "", // URL original del configurador por recuperar. Vacío: consultar por WhatsApp.
  comunidad: "" // URL original de Onia Community por recuperar. Vacío: solicitar acceso por WhatsApp.
};
