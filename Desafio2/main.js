//DECLARO LAS VARIABLES
let nombre;
let dineroInvertido;
let opcion;

//ASIGNO LAS VARIABLES
nombre = prompt("Ingrese su nombre, por favor");
opcion = prompt("Hola " + nombre + ", querés invertir dinero? (Si/No)").toUpperCase();

// Si el cliente elije invertir, entra en el if
if (opcion == "SI") {
  dineroInvertido = parseInt(prompt("Cuánto dólares querés gastar para comprar ETH? (Mínimo 100 USD)", 0));

  // Si el dinero está entre 100 y 6400 dólares devuelve la cantidad de ETH que va a recibir
  if (dineroInvertido >= 100 && dineroInvertido <= 6400) {
    alert("Vas a recibir: " + dineroInvertido / 3200 + " ETH.");
  } else if (dineroInvertido > 6400) {
    alert("No hay suficientes ETH para procesar la transacción");
  } else if (dineroInvertido < 100) {
    alert("No ingreso el monto mínimo de 100 dólares");
  } else {
    alert("Ingreso un valor inválido");
  }

} else if (opcion == "NO") {
  alert("Gracias por usar nuestro Exchange");
} else {
  alert("Ingreso un valor inválido");
}
