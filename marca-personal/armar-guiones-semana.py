import json, re, sys
from collections import Counter

src, out = sys.argv[1], sys.argv[2]
d = json.load(open(src, encoding='utf-8'))
G = {g['id']: g for g in d['guiones']}
pat = re.compile(r'[^.?!]*(?:taller|TALLER|Bs |DIAGN|Platform|19:00|noviembre)[^.?!]*[.?!]')
FR = {'R1': '07:30', 'R2': '12:30', 'R3': '20:30', 'H': 'Horizontal'}
CTA_T = 'Si querés aprenderlo en vivo, tocá el link de mi bio y escribime.'
CTA_S = 'Seguime para ver más.'
rows = []


def add(id, dia, fr, linea, formato, titulo, gancho, guion, tomas, cta, origen, estado):
    hora = FR.get(fr[1:] if fr.startswith('T') else fr, fr)
    rows.append(dict(id=id, dia=dia, franja=fr, hora=hora, linea=linea, formato=formato,
                     titulo=titulo, gancho=gancho, guion=guion, tomas=tomas, cta=cta,
                     origen=origen, estado=estado))


def gb(lid, dia, fr, cta):
    g = G[lid]
    t = pat.sub('', g['texto'].replace(g.get('cta', ''), ''))
    if lid == 'L13':
        t = re.sub(r'Tengo seis agentes[^.]*\.', '', t)
        t = 'Cada área de ONIA tiene su agente: ventas, marketing, código y la plataforma, y uno que coordina. ' + t
    t = re.sub(r'\s+', ' ', t).strip() + ' ' + cta
    add(lid, dia, fr, 'marca', g['formato'], g['titulo'], g['gancho'], t,
        ' · '.join(x for x in g.get('tomas', []) if 'Clase' not in x and '19:00' not in x), cta,
        'Grok Bot, 1-nov (en tú; sin las fechas ni el CTA viejos)' + (' · Confirmar que querés decir tu edad' if '16' in t + g['titulo'] else ''),
        'falta_dato' if '16' in t + g['titulo'] else 'revisar')


gb('L1', '2026-11-03', 'R1', CTA_S); gb('L3', '2026-11-03', 'R2', CTA_T)
gb('L4', '2026-11-03', 'R3', CTA_S); gb('L6', '2026-11-03', 'H', CTA_T)
gb('L7', '2026-11-04', 'R1', CTA_T); gb('L8', '2026-11-04', 'R2', 'Contame en comentarios qué te gustaría crear.')
gb('L10', '2026-11-04', 'R3', CTA_T); gb('L13', '2026-11-04', 'H', CTA_S)
gb('L12', '2026-11-05', 'R1', CTA_S); gb('L14', '2026-11-05', 'R2', CTA_S)
gb('L15', '2026-11-05', 'R3', CTA_T); gb('L16', '2026-11-05', 'H', CTA_S)
gb('L20', '2026-11-06', 'R1', CTA_S)

N = 'Marketing, 2-nov (de vos)'
nuevos = [
    ('M1', '2026-11-06', 'R2', 'vertical', 'Le pido a Claude que me critique',
     'Antes de mandar algo importante, le pido a la IA que me lo destroce.',
     'Antes de mandar algo importante, le pido a la IA que me lo destroce. Pero Sergio, ¿no es para que te ayude? Justo: le pego mi texto y le escribo "Sos un cliente exigente. Decime las tres cosas más débiles de esto y cómo las arreglarías". Después decido yo qué cambio. Así no me dice que todo está bárbaro. Probalo con lo próximo que vayas a mandar. ' + CTA_S,
     'Pantalla del celular con el pedido, texto de ejemplo · Cierre a cámara', CTA_S),
    ('M2', '2026-11-06', 'R3', 'vertical', 'Lo que aprendí dando mi primer taller',
     'Hoy terminé de dar mi primer taller de IA.',
     'Hoy terminé de dar mi primer taller de IA. [Completar con Sergio: lo que más le costó a la gente, la pregunta que más se repitió y qué cambiarías para la próxima]. Si te lo perdiste, contame en comentarios qué te gustaría aprender en el próximo.',
     'A cámara, después de la clase. Sin caras ni nombres de alumnos', 'Contame en comentarios qué te gustaría aprender.'),
    ('M3', '2026-11-07', 'R1', 'vertical', 'Planificá tu semana con un pedido',
     'Así planifico mi semana en cinco minutos con la IA.',
     'Así planifico mi semana en cinco minutos con la IA. Le paso la lista de todo lo que tengo pendiente y le pido: "Ordename esto por urgencia, decime qué puedo dejar para la otra semana y armame un plan por día con dos horas libres". Pero Sergio, ¿y si se equivoca? Lo reviso y lo ajusto yo: la IA ordena, yo decido. Guardalo y probalo el domingo. ' + CTA_S,
     'Pantalla con una lista de pendientes de ejemplo · Cierre a cámara', CTA_S),
    ('M4', '2026-11-07', 'R2', 'vertical', 'Tres errores que cometí al empezar con IA',
     'Tres errores que cometí cuando empecé a usar IA.',
     'Tres errores que cometí cuando empecé a usar IA. Uno: [completar con Sergio]. Dos: [completar]. Tres: [completar]. Si te pasó alguno, contámelo en comentarios.',
     'A cámara, con tarjetas 1, 2 y 3', 'Contámelo en comentarios.'),
    ('M5', '2026-11-07', 'R3', 'vertical', 'Aprendé algo nuevo en una tarde',
     'Cuando tengo que aprender algo de cero, le pido esto a la IA.',
     'Cuando tengo que aprender algo de cero, le pido esto a la IA. Primero: "Explicámelo en cinco ideas, de la más importante a la menos". Después: "Haceme cinco preguntas para ver si lo entendí". Y al final: "¿Qué me falta saber para usarlo mañana?". Guardalo para la próxima. ' + CTA_S,
     'Pantalla grabada con un tema genérico de ejemplo · Voz en off', CTA_S),
    ('M6', '2026-11-07', 'H', 'horizontal', 'Qué vimos en las 3 clases del taller',
     'Esto es lo que hicimos en tres clases de Claude de 0 a 100.',
     'Esto es lo que hicimos en tres clases de Claude de 0 a 100. [Completar con Sergio y la pantalla de las clases: un ejercicio por clase]. Si querés enterarte de la próxima edición, seguime.',
     'Pantalla de las clases, sin el panel de participantes · A cámara al cierre', 'Seguime para la próxima edición.'),
    ('M7', '2026-11-08', 'R2', 'vertical', '¿La IA te va a quitar el trabajo?',
     'Me preguntan si la IA les va a quitar el trabajo. Esto es lo que veo yo.',
     'Me preguntan si la IA les va a quitar el trabajo. Esto es lo que veo yo, no una predicción: en ONIA la IA hace mucho del trabajo repetido, pero alguien tiene que saber qué pedirle, revisar lo que hace y decidir. Esa parte la sigo haciendo yo. Por eso creo que lo que más vale hoy es aprender a trabajar con ella. ¿Vos qué pensás? Te leo en comentarios.',
     'A cámara, plano medio', '¿Vos qué pensás? Te leo en comentarios.'),
    ('M8', '2026-11-08', 'R3', 'vertical', 'Mi plan para esta semana en ONIA',
     'Esto es lo que voy a construir esta semana en ONIA.',
     'Esto es lo que voy a construir esta semana en ONIA. [Completar con Sergio el domingo: una o dos cosas reales de la semana]. El domingo que viene te cuento cómo me fue. ' + CTA_S,
     'A cámara con el plan de fondo, sin datos de clientes', 'Seguime para ver cómo me va.'),
    ('M9', '2026-11-08', 'H', 'horizontal', 'Cómo armo mis guiones con IA',
     'Estos guiones no los escribo solo: los arma un agente de IA y yo los apruebo.',
     'Estos guiones no los escribo solo: los arma un agente de IA y yo los apruebo. Le paso mis temas, lo que hacen los creadores que sigo y las reglas de mi marca, y me deja la semana en un panel. Yo elijo, cambio lo que no me suena a mí y grabo. ' + CTA_S,
     'Pantalla con este panel · A cámara', CTA_S),
]
for n in nuevos[:2]:
    add(n[0], n[1], n[2], 'marca', n[3], n[4], n[5], n[6], n[7], n[8], N, 'falta_dato' if '[' in n[6] else 'revisar')
gb('L18', '2026-11-06', 'H', CTA_S)
for n in nuevos[2:7]:
    add(n[0], n[1], n[2], 'marca', n[3], n[4], n[5], n[6], n[7], n[8], N, 'falta_dato' if '[' in n[6] else 'revisar')
gb('L19', '2026-11-08', 'R1', CTA_S)
for n in nuevos[7:]:
    add(n[0], n[1], n[2], 'marca', n[3], n[4], n[5], n[6], n[7], n[8], N, 'falta_dato' if '[' in n[6] else 'revisar')

A = 'Marketing, PR #120 (de vos)'
add('A1', '2026-11-02', 'Anuncio', 'taller', 'vertical', 'Anuncio · Video 1, el contraste',
    'Si a la IA solo le hacés preguntas, la estás usando a medias.',
    'Si a la IA solo le hacés preguntas, la estás usando a medias. Le preguntás algo, copiás, pegás… y la próxima vez le volvés a explicar todo de cero. En 3 clases te enseño a usar Claude con tus archivos y tus proyectos. Sin programar. En vivo y grabadas: si te sumás tarde, te quedan las que ya pasaron. Un solo pago de Bs 50 por las tres clases. Tocá el botón y escribime.',
    'A cámara, vertical, unos 35 s, subtítulos grandes', 'Tocá el botón y escribime.', A, 'revisar')
add('A2', '2026-11-02', 'Anuncio', 'taller', 'vertical', 'Anuncio · Video 2, la demo',
    'Mirá lo que le pido a Claude un lunes a la mañana.',
    'Mirá lo que le pido a Claude un lunes a la mañana. Le subo las ventas del mes y le pido tres cosas: un resumen, una tabla por producto y un mensaje para mi equipo. Y lo tengo listo. Esto lo practicamos en Claude de 0 a 100: 3 clases en vivo y grabadas, y si te sumás tarde te quedan las que ya pasaron. Bs 50 en total. Tocá el botón y escribime.',
    'Pantalla del celular con el archivo de ejemplo ("Datos de ejemplo"), después a cámara', 'Tocá el botón y escribime.', A, 'revisar')

T = 'Marketing, PR #139 (de vos)'
W = [
    ('W1', '2026-11-03', 'R1', 'Mañana arranco', 'Mañana empiezo a enseñar a usar Claude de 0 a 100.',
     'Mañana empiezo a enseñar a usar Claude de 0 a 100. Pero Sergio, nunca usé una IA más que para preguntarle cosas. Justo para eso es. Empezamos de cero: cómo pedirle bien, cómo darle tus archivos y cómo armar un proyecto para no explicarle todo cada vez. Tres clases en vivo, miércoles, jueves y viernes a las siete de la noche, hora de Bolivia. Un solo pago de cincuenta bolivianos por las tres, con las grabaciones. Tocá el link de mi bio y escribime.', 'A cámara'),
    ('W2', '2026-11-03', 'R3', 'No le hagas preguntas: dale un proyecto', 'Si cada vez que abrís la IA le explicás todo de nuevo, mirá esto.',
     'Si cada vez que abrís la IA le explicás todo de nuevo, mirá esto. Pero Sergio, ¿no es lo mismo que un chat? No. Creo un proyecto en Claude, le subo mis archivos de ejemplo y le escribo una vez cómo quiero que me responda. Desde ahí, cada chat del proyecto ya sabe todo eso. Esto lo practicamos en vivo desde el miércoles. Tocá el link de mi bio y escribime.', 'Pantalla del celular, proyecto de prueba · Cierre a cámara'),
    ('W3', '2026-11-04', 'R1', 'Hoy arranca', 'Hoy a las siete de la noche, hora de Bolivia, arranca Claude de 0 a 100.',
     'Hoy a las siete de la noche, hora de Bolivia, arranca Claude de 0 a 100. Pero Sergio, hoy no puedo a esa hora. Tranqui: las tres clases quedan grabadas y te las paso el viernes, para siempre. Bs 50 por las tres. Tocá el link de mi bio y escribime.', 'A cámara'),
    ('W4', '2026-11-04', 'R3', 'Así dirijo ONIA con agentes', 'Mi empresa la llevan agentes de IA. Yo apruebo.',
     'Mi empresa la llevan agentes de IA. Yo apruebo. Pero Sergio, ¿y si se equivocan? Por eso cada área tiene su agente, cada cambio pasa por la revisión de otro agente que no lo escribió, y lo que se publica o cuesta plata lo apruebo yo. Esta semana, por ejemplo, uno armó la campaña del taller y otro la revisó. Para llegar a eso, primero hay que saber pedirle bien a la IA. Eso enseño en el taller. Link en la bio.', 'Pantalla con la lista de sesiones o un PR, sin secretos ni datos de clientes · Después de las 21:30'),
    ('W5', '2026-11-05', 'R1', 'La fórmula para pedirle bien', 'Si la respuesta de la IA no te sirve, probá mejorar el pedido.',
     'Si la respuesta de la IA no te sirve, probá mejorar el pedido. Pero Sergio, yo le escribo clarito. Probá con cuatro partes. Quién sos y para qué es. Qué querés exactamente. Cómo lo querés: tabla, lista o mensaje. Y un ejemplo de cómo te gusta. Guardalo. Y si querés practicarlo en vivo, hoy a las siete, hora de Bolivia, es la clase dos. Link en la bio.', 'A cámara con tarjetas 1 a 4'),
    ('W6', '2026-11-05', 'R3', 'Lo que pasó en la clase 1', 'Ayer di mi primera clase de Claude.',
     'Ayer di mi primera clase de Claude. [Completar con Sergio: qué se hizo y la pregunta que más se repitió, sin nombres]. Mañana es la última, y si te sumás ahora te quedan las grabaciones de las tres. Link en la bio.', 'Pantalla de la clase o a cámara, sin caras, nombres ni chat de Meet. Si no hay material, va este otro: "Mañana es la última clase de Claude de 0 a 100, a las siete de la noche, hora de Bolivia. Pero Sergio, me perdí las dos primeras. Te quedan grabadas y te las paso el viernes. Bs 50 por las tres. Link en la bio."'),
    ('W7', '2026-11-06', 'R1', 'Última clase', 'Hoy es la última clase de Claude de 0 a 100.',
     'Hoy es la última clase de Claude de 0 a 100. Pero Sergio, me perdí las dos primeras. No pasa nada: te sumás hoy en vivo y esta noche te llegan las grabaciones de las tres. Bs 50. Tocá el link de mi bio y escribime antes de las siete de la noche, hora de Bolivia.', 'A cámara'),
    ('W8', '2026-11-06', 'R3', 'Tres cosas que Claude hace con un archivo tuyo', 'Le paso a Claude las ventas de un mes y le pido tres cosas.',
     'Le paso a Claude las ventas de un mes y le pido tres cosas: un resumen en tres líneas, una tabla por producto y un mensaje para el equipo. Si querés enterarte del próximo taller, seguime.', 'Pantalla grabada con archivo de ejemplo ("Datos de ejemplo") · Revisar cifras antes de usar'),
]
for w in W:
    add(w[0], w[1], 'T' + w[2], 'taller', 'vertical', w[3], w[4], w[5], w[6],
        'Seguime para el próximo taller.' if w[0] == 'W8' else 'Tocá el link de mi bio y escribime.', T, 'falta_dato' if '[' in w[5] else 'revisar')
    if w[0] == 'W4':
        rows[-1]['hora'] = '21:30'

json.dump(rows, open(out, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print(len(rows), Counter((r['dia'], r['linea'], r['formato']) for r in rows))
