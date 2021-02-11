//pedir 2 cadenas y comprobar si son iguales mediante un bucle

var texto = prompt("Escribe un texto").toUpperCase();

var longitud = texto.length;
var contador = 0;
var numVocales = 0;
var txt = "";

do{

  if((texto[contador] == "A") || (texto[contador] == "E") || (texto[contador] == "I") || (texto[contador] == "O") || (texto[contador] == "U")){

    txt += texto[contador];
    numVocales++;

  }
  contador++;

}while(contador < longitud)


console.log(txt);
console.log(numVocales);
