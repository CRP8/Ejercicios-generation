//Pedir inicio y longitud y una cadena, devuelve ese trozo

var ini = parseInt(prompt("Escribe un inicio"));
var fin = parseInt(prompt("Escribe una longitud"));
var frase = prompt("Escribe una Frase");


console.log("el trozo es: " + frase.substring(ini - 1, fin ));

 
