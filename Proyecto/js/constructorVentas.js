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