(() => {
  const all = s => [...document.querySelectorAll(s)];
  const https = value => {try {const u=new URL(value); return u.protocol==='https:' ? u.href : '';} catch {return '';}};
  const wa = message => /^\d{8,15}$/.test(String(CONFIG.whatsapp)) ? 'https://wa.me/'+CONFIG.whatsapp+'?text='+encodeURIComponent(message) : https(CONFIG.instagram);
  const contact = {
    llamada: ['Hola Sergio, quiero coordinar una llamada 1:1 gratis.', 'Coordinar llamada gratis'],
    webs: ['Hola Sergio, quiero ver el configurador de webs para mi negocio.', 'Consultar por mi web'],
    comunidad: ['Hola Sergio, quiero entrar a Onia Community.', 'Solicitar acceso gratis']
  };
  all('[data-contact]').forEach(a => {const key=a.dataset.contact; a.href=https(CONFIG[key])||wa(contact[key][0]); if(!https(CONFIG[key])) a.textContent=contact[key][1]+' ↗';});
  all('[data-instagram]').forEach(a=>a.href=https(CONFIG.instagram)||'#contacto');
  all('[data-refund]').forEach(e=>e.textContent=CONFIG.devolucion.trim()||'Política de devolución por confirmar. Consúltala con Sergio antes de pagar.');
  if(!CONFIG.borrador) all('.draft').forEach(e=>e.hidden=true);
  const photo=CONFIG.fotoSergio.trim();
  if(photo && !photo.startsWith('/') && !photo.includes(':') && !photo.includes('..')) {
    all('[data-portrait]').forEach(box=>{const img=new Image();img.alt='Sergio Urcullo, fundador de OnIA';img.width=520;img.height=520;img.className='photo';img.onload=()=>{box.replaceWith(img);all('[data-photo-note]').forEach(e=>e.textContent='Fundador de OnIA · Bolivia');};img.src=photo;});
  }
  function render(now=Date.now()) {
    const validPrice=n=>typeof n==='number'&&Number.isFinite(n)&&n>0;
    const changed=CONFIG.cambioPrecio && Number.isFinite(Date.parse(CONFIG.cambioPrecio)) && now>=Date.parse(CONFIG.cambioPrecio);
    const price=changed?CONFIG.precioRegular:CONFIG.precioLanzamiento;
    all('[data-price]').forEach(e=>e.textContent=validPrice(price)?'Bs '+price:'Precio por confirmar');
    all('[data-price-label]').forEach(e=>e.textContent=changed?'Precio por la serie completa':'Precio de lanzamiento · Serie completa');
    const classes=CONFIG.clases.map(c=>({...c,time:Date.parse(c.inicio)})).filter(c=>Number.isFinite(c.time)).sort((a,b)=>a.time-b.time);
    const ended=classes.length>0 && now>=classes.at(-1).time+CONFIG.duracionMin*60000;
    const started=classes.length>0 && now>=classes[0].time;
    all('[data-reserve]').forEach(a=>{
      a.href=ended?wa(CONFIG.mensajeProxima):started?wa('Hola Sergio, la serie ya comenzó. ¿Todavía puedo incorporarme?'):https(CONFIG.enlaceReserva)||wa(CONFIG.mensaje);
      a.textContent=ended?'Avísame de la próxima edición ↗':started?'Consultar disponibilidad ↗':https(CONFIG.enlaceReserva)?'Reservar mi lugar ↗':'Reservar por WhatsApp ↗';
    });
    const current=classes.find(c=>now>=c.time&&now<c.time+CONFIG.duracionMin*60000);
    const next=classes.find(c=>c.time>now);
    const label=document.querySelector('[data-count-label]');
    if(label) label.textContent=ended?'Esta edición ha finalizado.':current?'La clase '+current.n+' está en curso.':next?'La clase '+next.n+' empieza en:':'Fechas por confirmar.';
    const counter=document.querySelector('[data-countdown]');
    if(counter) {
      counter.hidden=ended||!!current||!next;
      if(next){const seconds=Math.max(0,Math.floor((next.time-now)/1000)); const vals=[Math.floor(seconds/86400),Math.floor(seconds/3600)%24,Math.floor(seconds/60)%60];all('[data-count]').forEach((e,i)=>e.textContent=String(vals[i]).padStart(2,'0'));}
    }
    all('[data-edition-status]').forEach(e=>e.textContent=ended?'Edición finalizada':started?'Serie en curso':'3 clases en vivo · Noviembre 2026');
  }
  render();setInterval(render,30000);
  const search=document.querySelector('#resource-search');
  if(search){let type='todos';const norm=s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');const filter=()=>{let visible=0;all('[data-resource]').forEach(card=>{card.hidden=!(type==='todos'||card.dataset.resource===type)||!norm(card.textContent).includes(norm(search.value));if(!card.hidden)visible++;});document.querySelector('#resource-status').textContent=visible+' recursos visibles';document.querySelector('#empty-resources').hidden=visible>0;};search.addEventListener('input',filter);all('[data-filter]').forEach(b=>b.addEventListener('click',()=>{type=b.dataset.filter;all('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));filter();}));}
})();
