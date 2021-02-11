var num1 = parseInt(prompt('Introduce el primer numero: ',0));
var num2 = parseInt(prompt('Introduce el segundo numero: ',0));
var num3 = parseInt(prompt('Introduce el tercer numero: ',0));


if ((num1 == num2) || (num1 == num3)|| (num2 == num3)){

  console.log("hay un numero duplicado");

}
else if ((num1 > num2) &&  (num1 > num3)){

  console.log("el primer numero es el mayor");

}
else if((num2 > num1) &&  (num2 > num3)){

  console.log("el segundo numero es el mayor");

}
else{

  console.log("el tercer numero es el mayor");

}
