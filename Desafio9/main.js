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
    (this.articulo = articulo),
      (this.price = price),
      (this.cantidad = cantidad),
      (this.metodoDePago = metodoDePago),
      (this.subTotal = subTotal),
      (this.envio = 0),
      (this.total = 0);
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
    if (this.metodoDePago == 1) {
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
    this.total =
      this.subTotal + this.sumarIVA() - this.sumarDescuento() + this.envio;
  }
}

/* Creo un array vacío para pushear los productos */
let arrayProductos = [];

/* Creo la clase constructora para los relojes */
class Reloj {
  constructor(nombre, madera, diametro, anchoCorrea, peso, precio) {
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
let relojCaoba = new Reloj("Caoba", "Nogal", 40, 16, 26, 7999);
let relojRobleClaro = new Reloj("Roble Claro", "Roble", 40, 16, 24, 7699);
let relojBamboo = new Reloj("Bamboo", "Bambú", 41, 17, 21, 7699);
let relojDarkForest = new Reloj("Dark Forest", "Olivo", 41, 18, 24, 8199);
let relojCuero = new Reloj("Cuero", "Nogal", 39, 16, 20, 7299);

/* Los pusheo al arrayProductos */
arrayProductos.push(relojCaoba);
arrayProductos.push(relojRobleClaro);
arrayProductos.push(relojBamboo);
arrayProductos.push(relojDarkForest);
arrayProductos.push(relojCuero);

/* Creo una constante para guardar en LocalStorage el array de productos */
const guardarLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
};

/* Creo un JSON y lo guardo mediante stringify en el LocalStorage */
for (let i = 0; i < arrayProductos.length; i++) {
  guardarLocal(arrayProductos[i].nombre, JSON.stringify(arrayProductos[i]));
}

/* Con JQuery escucho los eventos y agrego los productos al carrito en menos líneas */
$("document").ready(() => {
  $("#reloj1").on("click", () => {
    $("#carrito").append(`<div>${relojCaoba.toString()}</div>`);
    $("#carrito div").addClass("seccion-productosJS");
  });
  $("#reloj2").on("click", () => {
    $("#carrito").append(`<div>${relojRobleClaro.toString()}</div>`);
    $("#carrito div").addClass("seccion-productosJS");
  });
  $("#reloj3").on("click", () => {
    $("#carrito").append(`<div>${relojBamboo.toString()}</div>`);
    $("#carrito div").addClass("seccion-productosJS");
  });
  $("#reloj4").on("click", () => {
    $("#carrito").append(`<div>${relojDarkForest.toString()}</div>`);
    $("#carrito div").addClass("seccion-productosJS");
  });
  $("#reloj5").on("click", () => {
    $("#carrito").append(`<div>${relojCuero.toString()}</div>`);
    $("#carrito div").addClass("seccion-productosJS");
  });
  borrar.addEventListener("click", borrarProductos);
});

/* Creo una función para borrar el carrito al clickear */
function borrarProductos() {
  carrito.innerHTML = "";
}
