class Reloj {
    constructor (nombre, madera, diametro, anchoCorrea, peso, precio) {
        this.nombre = nombre;
        this.madera = madera;
        this.diametro = diametro;
        this.anchoCorrea = anchoCorrea;
        this.peso = peso;
        this.precio = precio;
    }

    toString() {
        return `Nombre: ${this.nombre} </br>
        Tipo de madera: ${this.madera} </br>
        Precio: $${this.precio}`;
    }
}

let relojCaoba = new Reloj ('Caoba', 'Nogal', 40, 16, 26, 7999);
let relojRobleClaro = new Reloj ('Roble Claro', 'Roble', 40, 16, 24, 7699);


let reloj1 = document.getElementById('reloj1');
let reloj2 = document.getElementById('reloj2');
let carrito = document.getElementById('carrito');

reloj1.addEventListener('click', agregarAlCarrito);
/* reloj2.addEventListener('click', agregarAlCarrito); */

function agregarAlCarrito () {
    let carro = document.createElement ('div');
    carro.classList.add ('seccion-productos');
    carro.innerHTML = relojCaoba.toString();
    carrito.appendChild (carro);
}