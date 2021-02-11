//Pedir apellido uno y 2 y mostrar nombre completo con concat

var nombre = prompt("Escribe tu nombre");
var ap1 = prompt("Escribe tu apellido");
var ap2 = prompt("Escribe tu otro apellido");

var nombreCompleto = nombre[0].concat(".", ap1[0], ".", ap2[0], ".").toUpperCase();


console.log(nombreCompleto);

 
