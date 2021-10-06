//DECLARO LAS VARIABLES
let nombre;
let numero;

//ASIGNO LAS VARIABLES
nombre = prompt("Ingrese su nombre, por favor");
numero = parseInt(prompt("Hola " + nombre + "! Ingrese un valor para empezar a sumar (serán 5 en total):"));

//UN FOR PARA SUMAR 5 VECES NUMEROS QUE SE LES PIDE A LOS USUARIOS
for (let i = 1; i < 5; i++) {
    alert("La suma queda en: " + numero + ". Van " + i + "/5");
    numero = numero + parseInt(prompt("Ingrese otro valor que se sumará al anterior"));

    //SI EL USUARIO INGRESA UN VALOR DISTINTO QUE UN NUMERO CORTA LA SUMA
    if (isNaN(numero)) {
        alert("No ingresó un numero");
        break;
    }
}

//SI NO ES UN NUMERO INDICA EMPEZAR DE NUEVO, SI ES UN NUMERO DA LA SUMA FINAL Y TERMINA
if (isNaN(numero)) {
alert("Vuelve a actualizar la página para intentar de nuevo");
}
else
alert("5/5. La suma TOTAL es: " + numero + ". Gracias por utilizar nuestra calculadora. Saludos!");