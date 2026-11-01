(() => {
  const form = document.querySelector('#form-inscripcion');
  if (!form) return;
  const status = document.querySelector('#inscripcion-status');
  const cta = document.querySelector('#inscripcion-whatsapp');
  const button = form.querySelector('button[type="submit"]');
  let enviando = false;
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (enviando) return;
    const result = Inscripcion.validar(Object.fromEntries(new FormData(form)));
    for (const campo of ['nombre', 'whatsapp', 'correo']) {
      document.querySelector('#error-' + campo).textContent = result.errores[campo] || '';
      form.elements[campo].setAttribute('aria-invalid', String(!!result.errores[campo]));
    }
    cta.hidden = true;
    if (!result.valido) {
      status.textContent = 'Revisa los campos indicados.';
      form.elements[Object.keys(result.errores)[0]].focus();
      return;
    }
    enviando = true; button.disabled = true; status.textContent = 'Guardando inscripción…';
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 10000);
    try {
      const endpoint = Inscripcion.endpointLocal(CONFIG.inscripcion.endpoint, location.href);
      const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(result.datos), signal: controller.signal, credentials: 'omit', redirect: 'error' });
      const body = await response.json();
      if (!response.ok || body.ok !== true) throw new Error('No guardado');
      status.textContent = 'Inscripción guardada. Coordina los detalles por WhatsApp; esto no confirma un pago ni una plaza.';
      const enlace = Inscripcion.enlaceWhatsapp(CONFIG.inscripcion.whatsapp || CONFIG.whatsapp, CONFIG.inscripcion.mensaje);
      cta.href = enlace;
      cta.hidden = !enlace;
      form.reset();
    } catch {
      status.textContent = 'No pudimos confirmar el guardado. Conservamos tus datos en el formulario. Comprueba que el servidor local esté iniciado antes de reintentar.';
    } finally {
      clearTimeout(timer); enviando = false; button.disabled = false;
    }
  });
})();
