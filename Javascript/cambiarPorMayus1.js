//pedir un texto y poner en mayuscula las vocales con replace

var texto = prompt("Escribe un texto");

var longitud = texto.length;
var contador = 0;

while(contador < longitud){

  if((texto[contador] == "a") || (texto[contador] == "e") || (texto[contador] == "i") || (texto[contador] == "o") || (texto[contador] == "u")){

    texto = texto.replace(texto[contador], texto[contador].toUpperCase());

  }
  contador++;

}

console.log(texto);
