//Peso en kilos
//Estatura
//imc (indice masa corporal) peso(kg) / estatura(m2) 


var peso = parseFloat(prompt('Introduce tu peso en kg: ',0));
var altura = parseFloat(prompt('Introduce tu altura en metros: ',0))**2;

var imc = peso/altura;



if(imc < 18.5){

  console.log("Tu imc es : " + imc + " esta por debajo de lo normal");

}else if((imc >= 18.5) && (imc <= 24.9)){

  console.log("Tu imc es : " + imc + " es normal");

}else if((imc >= 25.0) && (imc <= 29.9)){

  console.log("Tu imc es : " + imc + " le estas pegando mucho a los bollos");
}else{

  console.log("Tu imc es : " + imc + " menudo fanegas");

}
