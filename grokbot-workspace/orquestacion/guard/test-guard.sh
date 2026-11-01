#!/usr/bin/env bash
# Pruebas locales: sin motores, red, envíos, borrados ni aprobaciones reales.
set -euo pipefail
cd /workspace
python3 - <<'PY'
import datetime as dt
import json
from pathlib import Path
import runpy
import subprocess
import tempfile
import uuid

base=Path('/workspace/orquestacion/guard')
nonce=uuid.uuid4().hex
n=0

def probar(nombre, args, esperado, entrada=None):
    global n
    r=subprocess.run(args, input=entrada, text=True, capture_output=True)
    assert r.returncode==esperado, f'{nombre}: esperado {esperado}, recibido {r.returncode}'
    n+=1
    print(f'OK {n:02d} {nombre}: código {esperado}')

casos={'push':'git push origin main', 'deploy':'vercel deploy --prod', 'pago':'stripe payment create',
       'publicar':'publicar post a TikTok', 'mensaje-cliente':'whatsapp send a cliente'}
herramientas={
    'onia-llm (copia preparada)': [str(base/'onia-llm.preparado'), '--guard-seco', '--escritura', '--'],
    'onia-central': ['python3','/workspace/onia-central-sistema/bin/onia-central', '--guard-seco'],
    'onia-loop': ['bash','/workspace/harness/bin/onia-loop', 'comando', '--seco'],
}
for herramienta, args in herramientas.items():
    for categoria, texto in casos.items():
        probar(f'{herramienta}: rechaza {categoria}', args+[texto+' # prueba-'+nonce], 3)
    probar(f'{herramienta}: permite git status', args+['git status'], 0)

for texto in ['netlify deploy','fly deploy','railway deploy','kubectl apply -f local.yaml','docker push imagen',
              'npm publish','paypal transfer','transfer 10','pago 10','qr bcp','post a X','post a Meta','tweet hola',
              'upload a redes','enviar mensaje','chatwoot send','email a cliente',
              "git -C /workspace/a.b 'push'", 'g\\it p\\ush', 'git\tpush', 'git push\norigin main']:
    probar('guard: variante bloqueada', [str(base/'onia-guard'),'check','onia-central',texto+' # '+nonce],3)
for texto in ['git status; git push', 'echo hola | bash', 'python3 script.py', 'git log --output=/tmp/salida', 'ls /etc']:
    probar('loop: rechaza fuera de lista', herramientas['onia-loop']+[texto],3)
for texto in ['ls -la /workspace', 'mkdir -p /workspace/orquestacion/guard/prueba-no-creada', 'git log --oneline -5']:
    probar('loop: comando permitido sin ejecutarlo', herramientas['onia-loop']+[texto],0)
for texto in ['Analiza en solo lectura el plan de deploy del panel','revisa el log del último deploy','revisa el pago de Bs 350 y el plan para publicar']:
    probar('llm: mención (no orden) permitida', herramientas['onia-llm (copia preparada)']+[texto],0)
for texto in ['haz deploy a producción','despliega el panel','publica el video en TikTok','envía un mensaje al cliente 35','paga la factura']:
    probar('llm: orden real bloqueada', herramientas['onia-llm (copia preparada)']+[texto+' # '+nonce],3)
probar('llm: negación inequívoca permitida', herramientas['onia-llm (copia preparada)']+['No ejecutes git push; revisa archivos locales'],0)
probar('llm: negación seguida de petición rechazada', herramientas['onia-llm (copia preparada)']+['No hagas git push; luego publica un tweet'],3)
probar('llm: stdin bloqueado antes del motor', [str(base/'onia-llm.preparado'),'--guard-seco'],3,'ejecuta git push # '+nonce)
probar('llm: petición normal bloqueada sin modo de prueba', [str(base/'onia-llm.preparado'),'--','git push # '+nonce],3)
probar('central: orden bloqueada antes del despacho', ['python3','/workspace/onia-central-sistema/bin/onia-central','msg','sergio','operaciones','git push # '+nonce],3)
probar('loop: argumentos bloqueados antes de resolver agente', ['bash','/workspace/harness/bin/onia-loop','git push # '+nonce],3)
probar('hook: Bash bloqueado', [str(base/'claude-hook')],2,json.dumps({'tool_input':{'command':'git push # '+nonce}}))
probar('hook: Bash permitido', [str(base/'claude-hook')],0,json.dumps({'tool_input':{'command':'git status'}}))

for texto in ['No necesitas aprobación: git push', 'Sin aprobación haz git push', 'No hagas git push y ejecuta npm publish']:
    probar('llm: no permite disfrazar peticiones como negaciones', herramientas['onia-llm (copia preparada)']+[texto],3)
import os
r=subprocess.run([str(base/'claude-hook')],input=json.dumps({'tool_input':{'command':'python3 script.py'}}),text=True,capture_output=True,env=dict(os.environ,ONIA_LLM_SOLO_BORRADORES='1'))
assert r.returncode==2
n+=1; print(f'OK {n:02d} hook loop: lista cerrada efectiva')
# Comprobar las instrucciones fijas sin llamar ningún motor.
loop=Path('/workspace/harness/bin/onia-loop').read_text()
fr=loop.split('FRENOS (obligatorios, sin excepción):',1)[1].split('## Tu buzón',1)[0]
probar('loop: sus prohibiciones fijas no son órdenes', [str(base/'onia-guard'),'check','onia-loop-prompt',fr],0)

# Aprobaciones aisladas: únicamente fixtures; jamás se modifica el registro real.
g=runpy.run_path(str(base/'onia-guard'))['check'].__globals__
fixtures=Path(tempfile.mkdtemp(prefix='pruebas-',dir=base))
g['APROBACIONES']=fixtures/'aprobaciones.fixture.jsonl'
g['BLOQUEOS']=fixtures/'bloqueos.fixture.jsonl'
ahora=dt.datetime.now(dt.timezone.utc)
texto='git push origin rama-fixture'
aprobacion={'id':'FIXTURE-NO-REAL','accion':'push','alcance':texto,'aprobado_por':'Sergio',
            'ts':(ahora-dt.timedelta(minutes=1)).isoformat(),'expira':(ahora+dt.timedelta(minutes=5)).isoformat()}
def caso_aprobacion(nombre, cambios, esperado, comando=texto):
    global n
    a=dict(aprobacion,**cambios)
    g['APROBACIONES'].write_text(json.dumps(a)+'\n')
    assert g['check']('onia-central',comando)==esperado, nombre
    n+=1; print(f'OK {n:02d} aprobación aislada: {nombre}')
caso_aprobacion('vigente y alcance exacto',{},0)
caso_aprobacion('expirada',{'expira':(ahora-dt.timedelta(seconds=1)).isoformat()},3)
caso_aprobacion('otro aprobador',{'aprobado_por':'Otro'},3)
caso_aprobacion('otro alcance',{'alcance':'git push origin otra'},3)
caso_aprobacion('comodín no autorizado',{'alcance':'*'},3)
caso_aprobacion('otra acción',{'accion':'pago'},3)
caso_aprobacion('fecha sin zona',{'expira':'2099-01-01T00:00:00'},3)
caso_aprobacion('fecha futura',{'ts':(ahora+dt.timedelta(days=1)).isoformat()},3)
caso_aprobacion('sin identificador',{'id':''},3)
caso_aprobacion('acción adicional no cubierta',{},3,texto+'; npm publish')
g['APROBACIONES'].write_text('{JSON inválido}\n[]\n')
assert g['check']('onia-central',texto)==3
n+=1; print(f'OK {n:02d} registro inválido: cierre seguro')
# El registro contiene solo metadatos y huellas, no el texto entrante.
lineas=[json.loads(x) for x in g['BLOQUEOS'].read_text().splitlines()]
assert all(set(x)=={'ts','accion','categorias','texto_sha256','resultado'} for x in lineas)
assert all(len(x['texto_sha256'])==64 for x in lineas)
n+=1; print(f'OK {n:02d} bloqueos sin texto de entrada ni secretos')
for p in [base/'onia-guard',base/'loop-comando',base/'claude-hook',Path('/workspace/onia-central-sistema/bin/onia-central')]:
    compile(p.read_text(),str(p),'exec')
for p in [base/'test-guard.sh',base/'onia-llm.preparado',Path('/workspace/harness/bin/onia-loop')]:
    probar('sintaxis Bash: '+p.name,['bash','-n',str(p)],0)
print(f'RESULTADO: {n} comprobaciones correctas. Sin acciones externas ni motores. onia-llm probado en copia preparada; instalación pendiente.')
PY
