var nombre = prompt('Introduce un nombre: ',0);

var longitud = nombre.length - 1;

while(longitud >= 0) { 
  
  console.log(nombre[longitud]) 

  --longitud;
}
