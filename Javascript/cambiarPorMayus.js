//pedir un texto y poner en mayuscula las vocales con replace

var texto = prompt("Escribe un texto");


texto = texto.replace(/a/g, "A").replace(/e/g, "E").replace(/i/g, "I").replace(/o/g, "O").replace(/u/g, "U");


console.log(texto);
