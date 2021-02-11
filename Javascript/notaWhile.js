

do{

  var nota = parseFloat(prompt("Introduce la nota: "))


  
  switch (true) {

  case (nota < 0):
    console.log("saliendo...");
    break;
  case (nota < 3):
    console.log("Muy deficiente");
    break;
  case (nota < 5):
    console.log("Insuficiente");
    break;
  case (nota < 6):
    console.log("Suficiente");
    break;
  case (nota < 6):
    console.log("Suficiente");
    break;
  case (nota < 7):
    console.log("Bien");
    break;
  case (nota < 9):
    console.log("Notable");
    break;
  case (nota <= 10):
    console.log("Sobresaliente");
    break;
    
    

  default:
    console.log('introduce un numero menor que 10');
}


}while(nota >= 0)


