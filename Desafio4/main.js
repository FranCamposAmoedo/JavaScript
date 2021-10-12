/* Inicializo la variable Total */
let total = 0;
let precioDescuento = 0;

/* Pido el nombre al usuario */
let nombre = prompt("Hola! Bienvenidos a accesorios de Madera AFRIKA. Cuál es tu nombre?", "Pj.: Juan Carlos");

/* Creo una función con un Do While para que el comprador elija los productos para sumar al carrito */
function sumarAlCarrito() {
  do {
    let producto = parseInt(prompt("Qué producto querés comprar " + nombre + "?\n 1. Lentes ($3000)\n 2. Relojes ($6900)",0));
    let cantidad = parseInt(prompt("Cuántas unidades?", 0));
    let precio = 0;

    switch (producto) {
      case 1:
        precio = 3000;
        break;
      case 2:
        precio = 6900;
        break;
      default:
        alert("Datos incorrectos");
        cantidad = 0;
    }

    total = total + precio * cantidad;
    otroProducto = confirm("Querés seguir comprando "+ nombre + "??");
  } while (otroProducto);
}

/* Creo una función para calcular el descuento dependiendo del método de pago elegido */
function calcularDescuento(total) {
    let metodoDePago;

    do {
      metodoDePago = parseInt(prompt("Cómo va a abonar? \n  1. Efectivo\n  2. Transferencia o Débito", 0));

      switch (metodoDePago) {
        case 1:
          total = total * 0.90;
          alert("En efectivo el precio le queda en: $" + total);
          return total;
          break;
        case 2:
          alert("El precio es: $" + total);
          return total;
          break;
        default:
          alert("Dato incorrecto. Vuelva a ingresar");
      }
    } while ((metodoDePago != 1) && (metodoDePago != 2));
}

/* Creo una función para sumarle el iva al precio final */
function sumarIVA(total) {
    total = total * 1.21;
    return total;
}

/* Creo una función para calcular el costo de envío dependiendo cuánto gastó */
function calcularEnvio(total) {
  let confirmacion = confirm(nombre + " querés envío a domicilio?");

  if (confirmacion && total >= 12000) {
      alert("El envío está bonificado. El total de la compra (IVA incluido) es: $" + total + ".\nMuchas gracias por elegirnos. Saludos " + nombre + "!");
  } else if (confirmacion && total < 12000 && total != 0) {
      alert("El envío sale $650. El total de la compra (IVA incluido) es: $" + parseInt(total + 650) + ".\nMuchas gracias por elegirnos. Saludos " + nombre + "!");
  } else {
      alert(nombre + " tenés que pasar a retirar el producto por nuestro local. \nEl total de la compra (IVA incluido) es: $" + total + ". Muchas gracias por elegirnos!");
  }
}

/* Llamo a las diferentes funciones */
sumarAlCarrito();
/* Primero le calculo el descuento, luego le sumo el iva y por último le calculo el envío */
calcularEnvio(sumarIVA(calcularDescuento(total)));
