// Ejecutar en un entorno autorizado con Chromium disponible. No accede a servicios externos.
const fs=require('node:fs');const path=require('node:path');const {pathToFileURL}=require('node:url');
let playwright;try{playwright=require('playwright')}catch{playwright=require('/workspace/growth/ads-codigo/node_modules/playwright')}
const root=path.resolve(__dirname,'..');const out='/workspace/estado/capturas';
(async()=>{const browser=await playwright.chromium.launch({headless:true});try{
 fs.mkdirSync(out,{recursive:true});
 for(const [name,width,height] of [['movil',390,844],['escritorio',1440,1000]]){
  const page=await browser.newPage({viewport:{width,height},deviceScaleFactor:1,isMobile:name==='movil',hasTouch:name==='movil'});const errors=[];page.on('pageerror',e=>errors.push(e.message));
  for(const [file,prefix] of [['index.html','sitio-sergio'],['workshop.html','web-workshop']]){
   await page.goto(pathToFileURL(path.join(root,file)).href);await page.evaluate(()=>document.fonts.ready);
   if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw Error('Desbordamiento horizontal: '+file+' '+name);
   if(file==='index.html'){
    await page.locator('[data-filter="skill"]').click();if(await page.locator('[data-resource]:visible').count()!==1)throw Error('Filtro skills');
    await page.locator('[data-filter="todos"]').click();await page.locator('#resource-search').fill('no-existe-xyz');if(!await page.locator('#empty-resources').isVisible())throw Error('Búsqueda vacía');await page.locator('#resource-search').fill('');
   }else{await page.locator('summary').first().click();if(!await page.locator('details').first().evaluate(e=>e.open))throw Error('FAQ');await page.locator('summary').first().click();}
   await page.evaluate(()=>window.scrollTo(0,0));await page.screenshot({path:path.join(out,prefix+'-'+name+'.png'),fullPage:true});
  }
  if(errors.length)throw Error(errors.join('\n'));await page.close();
 }
 console.log('4 capturas PNG y pruebas de interfaz: OK');
}finally{await browser.close()}})().catch(e=>{console.error(e.message);process.exitCode=1});
