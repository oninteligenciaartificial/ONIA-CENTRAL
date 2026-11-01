const fs=require('node:fs');const vm=require('node:vm');const assert=require('node:assert/strict');const path=require('node:path');
const root=path.join(__dirname,'..');
const config=fs.readFileSync(path.join(root,'config.js'),'utf8');const app=fs.readFileSync(path.join(root,'app.js'),'utf8');
function run(date,patch=''){
 const elements={};const el=s=>elements[s]??=( {textContent:'',href:'',hidden:false});
 const doc={querySelectorAll:s=>['[data-contact]','[data-instagram]','[data-portrait]','[data-photo-note]'].includes(s)?[]:s==='[data-count]'?[el('d'),el('h'),el('m')]:[el(s)],querySelector:s=>s==='#resource-search'?null:el(s)};
 class Clock extends Date {static now(){return Date.parse(date)}}
 vm.runInNewContext(config+'\n'+patch+'\n'+app,{document:doc,URL,Date:Clock,setInterval:()=>{}});
 return elements;
}
let checks=0;const check=(condition)=>{assert.ok(condition);checks++};
let e=run('2026-11-01T19:00:00-04:00');check(e['[data-price]'].textContent==='Bs 50');check(e.d.textContent==='02');check(e['[data-reserve]'].href==='https://wa.me/59175414930?text=TALLER');check(e['[data-refund]'].textContent.includes('por confirmar'));
e=run('2026-11-03T19:00:00-04:00');check(e['[data-countdown]'].hidden);check(e['[data-count-label]'].textContent.includes('en curso'));check(e['[data-reserve]'].textContent.includes('disponibilidad'));
e=run('2026-11-04T19:00:00-04:00');check(e['[data-count-label]'].textContent.includes('clase 2'));check(e.d.textContent==='01');
e=run('2026-11-07T20:55:00-04:00');check(e['[data-countdown]'].hidden);check(e['[data-reserve]'].textContent.includes('próxima'));check(e['[data-edition-status]'].textContent==='Edición finalizada');
e=run('2026-11-01T19:00:00-04:00','CONFIG.enlaceReserva="https://example.com/pago";');check(e['[data-reserve]'].href==='https://example.com/pago');
e=run('2026-11-01T19:00:00-04:00','CONFIG.enlaceReserva="javascript:alert(1)";');check(e['[data-reserve]'].href.startsWith('https://wa.me/'));
e=run('2026-11-02T19:00:00-04:00','CONFIG.cambioPrecio="2026-11-02T00:00:00-04:00"; CONFIG.precioRegular=70;');check(e['[data-price]'].textContent==='Bs 70');
e=run('2026-11-02T19:00:00-04:00','CONFIG.precioLanzamiento=null;');check(e['[data-price]'].textContent==='Precio por confirmar');
console.log(checks+' comprobaciones de precio, CTA, devolución y fechas: OK');
