var num1 = parseInt(prompt('Introduce el primer numero: ',0));
var num2 = parseInt(prompt('Introduce el segundo numero: ',0));
var op = prompt('Introduce la operacion: ',0);

switch (op) {
  case '+':
    console.log(num1 + num2);
  break;
  case '-':
    console.log(num1 - num2);
  break;
  case '*':
    console.log(num1 * num2);
  break;
  case '/':
    console.log(num1 / num2);
  break;
  default:
    console.log("Operacion no válida");
  break;
}
