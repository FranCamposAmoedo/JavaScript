/* Dejo ésta primera parte de código para poder desarrollarla más adelante si es necesario */
/* Inicializo la variable Total */
let articulo = 0;
let price = 0;
let cantidad = 0;
let metodoDePago = 0;
let subTotal = 0;
let confirmacion;
const misArticulos = [];

/* Armo el constructor */
 class Venta {
  constructor(articulo, price, cantidad, metodoDePago) {
    this.articulo = articulo,
    this.price = price,
    this.cantidad = cantidad,
    this.metodoDePago = metodoDePago,
    this.subTotal = subTotal,
    this.envio = 0,
    this.total = 0
  }

  /* La tuve q sumar dentro de la función sumarAlCarrito, porque no sabía como hacerse q se vaya acumulando */
   sumarSubTotal() {
    this.subTotal = subTotal;
  }

  /* Creo una función para sumarle el iva al subTotal */
   sumarIVA() {
    return this.subTotal * 0.21;
  }

  /* Función para hacer un descuento en efectivo */
   sumarDescuento() {
    if ((this.metodoDePago == 1)) {
      return this.subTotal * 0.15;
    } else {
      return 0;
    }
  }

  /* Función para calcular el envío */
  sumarEnvio() {
    if (confirmacion && this.subTotal < 12000 && this.subTotal != 0) {
      this.envio = 750;
    } else if (!confirmacion || this.subTotal >= 12000) {
      this.envio = 0;
    }
  }

  /* Suma el total */
  sumarTotal() {
    this.total = this.subTotal + this.sumarIVA() - this.sumarDescuento() + this.envio;
  }
}



/* Creo un array vacío para pushear los productos */
let arrayProductos = [];

/* Creo la clase constructora para los relojes */
class Reloj {
  constructor (nombre, madera, diametro, anchoCorrea, peso, precio) {
      this.nombre = nombre;
      this.madera = madera;
      this.diametro = diametro;
      this.anchoCorrea = anchoCorrea;
      this.peso = peso;
      this.precio = precio;
  }

  /* Agrego un toString para llamar los elementos que quiero en el carrito */
  toString() {
      return `Nombre: ${this.nombre} </br>
      Tipo de madera: ${this.madera} </br>
      Precio: $${this.precio}`;
  }
}

/* Instancio el stock de los relojes */
let relojCaoba = new Reloj ('Caoba', 'Nogal', 40, 16, 26, 7999);
let relojRobleClaro = new Reloj ('Roble Claro', 'Roble', 40, 16, 24, 7699);
let relojBamboo = new Reloj ('Bamboo', 'Bambú', 41, 17, 21, 7699);
let relojDarkForest = new Reloj ('Dark Forest', 'Olivo', 41, 18, 24, 8199);
let relojCuero = new Reloj ('Cuero', 'Nogal', 39, 16, 20, 7299);

/* Los pusheo al arrayProductos */
arrayProductos.push(relojCaoba);
arrayProductos.push(relojRobleClaro);
arrayProductos.push(relojBamboo);
arrayProductos.push(relojDarkForest);
arrayProductos.push(relojCuero);

/* Creo una constante para guardar en LocalStorage el array de productos */
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

/* Creo un JSON y lo guardo mediante stringify en el LocalStorage */
for (let i = 0; i < arrayProductos.length; i++) {
  guardarLocal(arrayProductos[i].nombre, JSON.stringify(arrayProductos[i]));
}

/* Guardo en cada variable los nodos de los botones de cada reloj, el carrito y el botón para borrar */
let reloj1 = document.getElementById('reloj1');
let reloj2 = document.getElementById('reloj2');
let reloj3 = document.getElementById('reloj3');
let reloj4 = document.getElementById('reloj4');
let reloj5 = document.getElementById('reloj5');
let carrito = document.getElementById('carrito');
let borrar = document.getElementById('borrar');

/* Escucho el evento de click de los productos y llamo a las funciones correspondientes (Debería ser una sóla función, pero no se me ocurrió cómo) */
reloj1.addEventListener('click', agregarAlCarrito1);
reloj2.addEventListener('click', agregarAlCarrito2);
reloj3.addEventListener('click', agregarAlCarrito3);
reloj4.addEventListener('click', agregarAlCarrito4);
reloj5.addEventListener('click', agregarAlCarrito5);
borrar.addEventListener('click', borrarProductos);

/* En cada función creo una variable carro dónde voy modificar el DOM del div "carrito" */
function agregarAlCarrito1 () {
  let carro = document.createElement ('div');
  carro.classList.add ('seccion-productosJS');
  carro.innerHTML = relojCaoba.toString();
  carrito.appendChild (carro);
}
function agregarAlCarrito2 () {
  let carro = document.createElement ('div');
  carro.classList.add ('seccion-productosJS');
  carro.innerHTML = relojRobleClaro.toString();
  carrito.appendChild (carro);
}
function agregarAlCarrito3 () {
  let carro = document.createElement ('div');
  carro.classList.add ('seccion-productosJS');
  carro.innerHTML = relojBamboo.toString();
  carrito.appendChild (carro);
}
function agregarAlCarrito4 () {
  let carro = document.createElement ('div');
  carro.classList.add ('seccion-productosJS');
  carro.innerHTML = relojDarkForest.toString();
  carrito.appendChild (carro);
}
function agregarAlCarrito5 () {
  let carro = document.createElement ('div');
  carro.classList.add ('seccion-productosJS');
  carro.innerHTML = relojCuero.toString();
  carrito.appendChild (carro);
}

/* Creo una función para borrar el carrito al clickear */
function borrarProductos () {
  carrito.innerHTML = '';
}