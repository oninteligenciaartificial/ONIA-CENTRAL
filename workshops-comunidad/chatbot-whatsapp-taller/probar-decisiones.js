// Prueba local de las decisiones del bot, sin n8n ni Chatwoot: node probar-decisiones.js
const fs=require('fs'); const wf=JSON.parse(fs.readFileSync(require('path').join(__dirname,'workflow-n8n.json'),'utf8'));
const node=n=>wf.nodes.find(x=>x.name===n);
const setv=n=>Object.fromEntries(node(n).parameters.assignments.assignments.map(a=>[a.name,a.value]));
function run(code, ctx){ const $=n=>({first:()=>({json:ctx[n]})}); return new Function('$', code)($); }
const T=setv('Textos');
function decide({modo='prueba',tel='59170000001',from='59170000001',status='pending',labels=[],content='',att=[],qr=''}){
  const cfg={...setv('Configuración'),MODO:modo,TELEFONO_PRUEBA:tel,QR_IMAGEN_URL:qr};
  const ctx={'Configuración':cfg,'Textos':T,'Aviso de Chatwoot':{body:{event:'message_created',message_type:'incoming',content,attachments:att,conversation:{id:9}}},
   'Leer conversación':{id:9,inbox_id:5,status,labels,meta:{sender:{phone_number:'+'+from}}}};
  const f=run(node('Filtrar aviso').parameters.jsCode,ctx); if(!f.length) return 'filtrado';
  const r=run(node('Decidir').parameters.jsCode,ctx)[0].json; return `${r.accion} | ${r.motivo} | et=${JSON.stringify(r.etiquetasNuevas)} | sergio=${r.pasarASergio} qr=${r.mandarQR} | ${r.texto.slice(0,40)}`;
}
const casos=[
 ['otro número en prueba',{from:'59171111111',content:'hola quiero info del taller'}],
 ['primer msj taller',{content:'Hola, quiero info del taller de Claude'}],
 ['primer msj no taller',{content:'hola, tengo una duda de mi cuenta'}],
 ['baja',{content:'BAJA',labels:['taller-consulta']}],
 ['contesta saludo',{content:'para mi negocio',labels:['taller-consulta']}],
 ['si tras precio sin imagen',{content:'sí',labels:['taller-consulta','taller-precio']}],
 ['si tras precio con imagen',{content:'dale',qr:'https://x/qr.png',labels:['taller-consulta','taller-precio']}],
 ['comprobante',{content:'',att:[{file_type:'image'}],labels:['taller-consulta','taller-precio','taller-qr-enviado']}],
 ['grabado',{content:'queda grabado?',labels:['taller-consulta']}],
 ['grabado en real (placeholder)',{modo:'real',content:'queda grabado?',labels:['taller-consulta']}],
 ['QR en real (TITULAR)',{modo:'real',content:'si',labels:['taller-consulta','taller-precio']}],
 ['abierto',{status:'open',content:'hola taller'}],
 ['certificado',{content:'dan certificado?',labels:['taller-consulta']}],
 ['quiero hablar con sergio',{content:'quiero hablar con Sergio',labels:['taller-consulta']}],
 ['real cualquiera taller',{modo:'real',tel:'',from:'59172222222',content:'info del curso'}],
 ['no me interesa el taller (no es baja)',{content:'no me interesa el horario',labels:['taller-consulta']}],
];
for(const [n,c] of casos) console.log(n.padEnd(34),'→',decide(c));
