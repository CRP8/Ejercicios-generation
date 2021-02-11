//Pedir apellido uno y 2 y mostrar las iniciales con concat

var nombre = prompt("Escribe tu nombre");
var ap1 = prompt("Escribe tu apellido");
var ap2 = prompt("Escribe tu otro apellido");

var nombreCompleto = nombre.concat(" ", ap1, " ", ap2);


console.log(nombreCompleto);
