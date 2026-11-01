/* Compartido por navegador, servidor y tests. Sin dependencias. */
(function (root) {
  function validar(datos) {
    const nombre = typeof datos?.nombre === 'string' ? datos.nombre.trim().replace(/\s+/g, ' ') : '';
    const original = typeof datos?.whatsapp === 'string' ? datos.whatsapp.trim() : '';
    const whatsapp = original.replace(/[\s()+-]/g, '');
    const correo = typeof datos?.correo === 'string' ? datos.correo.trim() : '';
    const errores = {};
    if (nombre.length < 2 || nombre.length > 100 || /[<>\x00-\x1f]/.test(nombre)) errores.nombre = 'Escribe tu nombre (2 a 100 caracteres).';
    if (original.length > 40 || !/^\+?[\d\s()-]+$/.test(original) || !/^[1-9]\d{7,14}$/.test(whatsapp)) errores.whatsapp = 'Escribe un WhatsApp con código de país (8 a 15 dígitos).';
    if (correo && (correo.length > 254 || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(correo))) errores.correo = 'Escribe un correo válido o deja el campo vacío.';
    return { datos: { nombre, whatsapp, correo }, errores, valido: Object.keys(errores).length === 0 };
  }
  function endpointLocal(value, base) {
    const url = new URL(value, base);
    if (url.protocol !== 'http:' || !['127.0.0.1', 'localhost', '[::1]'].includes(url.hostname) || url.username || url.password) throw new Error('El endpoint debe ser HTTP local.');
    return url.href;
  }
  function enlaceWhatsapp(numero, mensaje) {
    return /^\d{8,15}$/.test(String(numero)) ? 'https://wa.me/' + numero + '?text=' + encodeURIComponent(mensaje || 'TALLER') : '';
  }
  const api = { validar, endpointLocal, enlaceWhatsapp };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.Inscripcion = api;
})(globalThis);
