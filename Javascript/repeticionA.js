//Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
var contador=0 
var repeticion=0 

var fra = prompt("Escribe una Frase") 

var longitud=fra.length 

while (contador < longitud) { 
  if (fra[contador]=="a" || fra[contador]=="A") {
    repeticion ++
    } contador=contador+1 
  } 
  
  
console.log("La letra a está "+ repeticion + " veces en esta frase") 
