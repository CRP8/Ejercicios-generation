//pedir 2 cadenas y comprobar si son iguales mediante un bucle

var texto1 = prompt("Escribe un texto");
var texto2 = prompt("Escribe un texto");

var longitud1 = texto1.length;
var longitud2 = texto2.length;

var contador = 0;
var iguales = true;

if (longitud1 != longitud2){
  console.log("son distintas");
}
else{
  do{

    if(texto1[contador] != texto2[contador]){
      contador = longitud1;
      iguales = false;
    }
    else {
      contador++;
    }

  }while(contador < longitud1)

  if(iguales){
    console.log("son iguales")
  }else{
    console.log("son distintas")
  }

}

