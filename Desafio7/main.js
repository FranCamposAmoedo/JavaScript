/* Pido nombre al usuario */
let nombre = prompt("Decime cuál es tu nombre");

/* Guardo en una variable el nodo que voy a modificar */
let pregunta = document.getElementsByClassName("pregunta");

/* Lo modifico en el HTML */
pregunta[0].innerHTML = `¿Querés saber más ${nombre}?`;

