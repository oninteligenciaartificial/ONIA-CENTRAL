/*
 * Panel de dirección de ONIA.
 * Lee ./datos.json y dibuja todo desde ahí, sin librerías.
 * Si el archivo falta o un campo viene vacío, muestra "Sin dato" y no se rompe.
 */
(function () {
  'use strict';

  const SIN_DATO = 'Sin dato';

  // Una pastilla lleva solo textos de hasta 24 caracteres; uno más largo va como texto común.
  const LARGO_PASTILLA = 24;

  // Cómo se arma cada tarjeta de lista: el campo del título, el de la pastilla
  // (o del texto bajo el título, si es largo), el del párrafo y las filas de dato
  // [etiqueta, campo, tipo].
  const FILA_FUENTE = ['Fuente', 'fuente', 'fuente'];

  const FORMA_TABLERO = {
    titulo: 'titulo',
    pastilla: 'estado',
    filas: [['Área / agente', 'area'], ['Proyecto', 'proyecto'], FILA_FUENTE],
    fecha: 'fecha',
    nota: 'nota'
  };

  const FORMAS = {
    resumen: { titulo: 'titulo', texto: 'texto', filas: [FILA_FUENTE] },
    uso_ia: { titulo: 'herramienta', texto: 'dato', filas: [FILA_FUENTE] },
    orquestacion: { titulo: 'sesion', pastilla: 'estado', filas: [['Rol', 'rol'], FILA_FUENTE] },
    equipo: {
      titulo: 'area',
      filas: [
        ['Escribe', 'escribe'],
        ['Servicios', 'servicios'],
        ['Cuentas', 'cuentas'],
        ['Skills', 'skills'],
        FILA_FUENTE
      ]
    },
    grabacion: { titulo: 'titulo', pastilla: 'estado', filas: [FILA_FUENTE] },
    contenido: { titulo: 'titulo', pastilla: 'estado', filas: [FILA_FUENTE] },
    fuentes: { titulo: 'nombre', texto: 'que_da', filas: [['Ruta', 'ruta', 'fuente']] }
  };

  function objeto(valor) {
    return valor !== null && typeof valor === 'object' && !Array.isArray(valor) ? valor : {};
  }

  // Texto listo para mostrar, o '' si el campo falta, viene vacío o no es texto ni número.
  function limpio(valor) {
    if (typeof valor === 'number') return Number.isFinite(valor) ? String(valor) : '';
    if (typeof valor === 'string') return valor.trim();
    return '';
  }

  function texto(valor) {
    return limpio(valor) || SIN_DATO;
  }

  // Cuenta caracteres, no unidades de UTF-16.
  function cabeEnPastilla(valor) {
    return Array.from(valor).length <= LARGO_PASTILLA;
  }

  // Lee un campo por su ruta, por ejemplo "tarjetas.taller.cobrado".
  function leer(datos, ruta) {
    return ruta.split('.').reduce(function (actual, clave) {
      return objeto(actual)[clave];
    }, datos);
  }

  function crear(etiqueta, clase, contenido) {
    const elemento = document.createElement(etiqueta);
    if (clase) elemento.className = clase;
    if (contenido !== undefined) elemento.textContent = contenido;
    return elemento;
  }

  // Una fuente va en monoespaciada; si es una dirección web, como enlace.
  function ponerFuente(destino, valor) {
    const fuente = limpio(valor);
    destino.textContent = '';
    if (/^https?:\/\/\S+$/i.test(fuente)) {
      const enlace = crear('a', 'mono', fuente);
      enlace.href = fuente;
      enlace.target = '_blank';
      enlace.rel = 'noopener noreferrer';
      destino.append(enlace);
    } else {
      destino.append(crear('span', 'mono', fuente || SIN_DATO));
    }
  }

  // Llena los elementos con data-campo: las tres tarjetas y la fecha de actualización.
  function pintarCampos(datos) {
    document.querySelectorAll('[data-campo]').forEach(function (elemento) {
      const valor = leer(datos, elemento.dataset.campo);
      if (elemento.hasAttribute('data-fuente')) {
        ponerFuente(elemento, valor);
      } else if (elemento.hasAttribute('data-opcional')) {
        elemento.textContent = limpio(valor);
        elemento.hidden = limpio(valor) === '';
      } else {
        elemento.textContent = texto(valor);
      }
      if (elemento.hasAttribute('data-pastilla')) {
        const corto = cabeEnPastilla(elemento.textContent);
        elemento.classList.toggle('pastilla', corto);
        elemento.classList.toggle('texto-largo', !corto);
      }
      if (elemento.hasAttribute('data-conexion')) {
        elemento.classList.toggle('pastilla--conectado', limpio(valor).toLowerCase() === 'conectado');
      }
    });
  }

  function tarjetaDeLista(item, forma, nivelTitulo) {
    const dato = objeto(item);
    const tarjeta = crear('article', 'item');

    const cabecera = crear('div', 'item__cabecera');
    cabecera.append(crear(nivelTitulo, 'item__titulo', texto(dato[forma.titulo])));
    tarjeta.append(cabecera);

    if (forma.pastilla) {
      const estado = texto(dato[forma.pastilla]);
      if (cabeEnPastilla(estado)) cabecera.append(crear('span', 'pastilla', estado));
      else tarjeta.append(crear('p', 'item__texto', estado));
    }

    if (forma.texto) tarjeta.append(crear('p', 'item__texto', texto(dato[forma.texto])));

    const filas = crear('dl', 'filas');
    forma.filas.forEach(function (fila) {
      const valor = crear('dd');
      if (fila[2] === 'fuente') ponerFuente(valor, dato[fila[1]]);
      else valor.textContent = texto(dato[fila[1]]);
      filas.append(crear('dt', '', fila[0]), valor);
    });
    tarjeta.append(filas);

    if (forma.fecha) tarjeta.append(crear('p', 'item__fecha', texto(dato[forma.fecha])));
    const nota = forma.nota ? limpio(dato[forma.nota]) : '';
    if (nota) tarjeta.append(crear('p', 'item__nota', nota));
    return tarjeta;
  }

  // Dibuja una lista de tarjetas y devuelve cuántas hay.
  function pintarLista(contenedor, items, forma, nivelTitulo) {
    const lista = Array.isArray(items) ? items : [];
    contenedor.textContent = '';
    if (lista.length === 0) contenedor.append(crear('p', 'vacio', SIN_DATO));
    lista.forEach(function (item) {
      contenedor.append(tarjetaDeLista(item, forma, nivelTitulo));
    });
    return lista.length;
  }

  function pintar(datos) {
    pintarCampos(datos);

    const tablero = objeto(datos.tablero);
    document.querySelectorAll('[data-tablero]').forEach(function (contenedor) {
      const clave = contenedor.dataset.tablero;
      const cantidad = pintarLista(contenedor, tablero[clave], FORMA_TABLERO, 'h4');
      const contador = document.querySelector('[data-cuenta="' + clave + '"]');
      if (contador) contador.textContent = String(cantidad);
    });

    document.querySelectorAll('[data-seccion]').forEach(function (contenedor) {
      const clave = contenedor.dataset.seccion;
      if (FORMAS[clave]) pintarLista(contenedor, datos[clave], FORMAS[clave], 'h3');
    });
  }

  function iniciarPestanas() {
    const pestanas = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
    pestanas.forEach(function (pestana) {
      pestana.addEventListener('click', function () {
        pestanas.forEach(function (otra) {
          const activa = otra === pestana;
          otra.setAttribute('aria-selected', activa ? 'true' : 'false');
          const vista = document.getElementById(otra.getAttribute('aria-controls'));
          if (vista) vista.hidden = !activa;
        });
      });
    });
  }

  async function cargar() {
    let datos = {};
    try {
      const respuesta = await fetch('./datos.json', { cache: 'no-store' });
      if (!respuesta.ok) throw new Error('respuesta ' + respuesta.status);
      datos = objeto(await respuesta.json());
    } catch (error) {
      console.warn('Panel: no se pudo leer datos.json; se muestra "Sin dato".', error);
    }
    try {
      pintar(datos);
    } catch (error) {
      console.warn('Panel: datos.json trae algo inesperado; se muestra "Sin dato".', error);
      pintar({});
    }
  }

  iniciarPestanas();
  cargar();
})();
