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

/* Con JQuery escucho los eventos y agrego los productos al carrito y al LocalStorage */
$("document").ready(() => {
  $("#reloj1").on("click", () => {
    $("#carrito").append(`<div>${relojCaoba.toString()}</div>`);
    $("#carrito div").addClass("seccion-productosJS");
    guardarLocal(arrayProductos[0].nombre, JSON.stringify(arrayProductos[0]));
  });
  $("#reloj2").on("click", () => {
    $("#carrito").append(`<div>${relojRobleClaro.toString()}</div>`);
    $("#carrito div").addClass("seccion-productosJS");
    guardarLocal(arrayProductos[1].nombre, JSON.stringify(arrayProductos[1]));
  });
  $("#reloj3").on("click", () => {
    $("#carrito").append(`<div>${relojBamboo.toString()}</div>`);
    $("#carrito div").addClass("seccion-productosJS");
    guardarLocal(arrayProductos[2].nombre, JSON.stringify(arrayProductos[2]));
  });
  $("#reloj4").on("click", () => {
    $("#carrito").append(`<div>${relojDarkForest.toString()}</div>`);
    $("#carrito div").addClass("seccion-productosJS");
    guardarLocal(arrayProductos[3].nombre, JSON.stringify(arrayProductos[3]));
  });
  $("#reloj5").on("click", () => {
    $("#carrito").append(`<div>${relojCuero.toString()}</div>`);
    $("#carrito div").addClass("seccion-productosJS");
    guardarLocal(arrayProductos[4].nombre, JSON.stringify(arrayProductos[4]));
  });
  $("#borrar").on("click", borrarProductos);
  $("#btnCarrito").append(`${contarProductos()}`);
});

/* Armo una función para contar los productos que están en el carrito */
function contarProductos () {
  let contador = 0;

  for (let i=0; i < localStorage.length; i++) {
    contador = ++contador;
  }
  return contador;
}


/* Creo una función para borrar el carrito y el Local Storage */
function borrarProductos() {
  carrito.innerHTML = "";
  contador = 0;
  localStorage.clear();
}
