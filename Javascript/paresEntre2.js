
var num1 = parseInt(prompt('Introduce un numero: ',0));
var num2 = parseInt(prompt('Introduce otro numero: ',0));


while(num1 <= num2) { 
  if((num1 % 2) == 0){
    console.log(num1 + " es par") 
  }
  ++num1;
}
