var precio = parseFloat(prompt("Precio: "))
var unidades = parseInt(prompt("Unidades: "))
var tipo = parseInt(prompt("Tipo de producto (1,2,3)"))
var iva = 0;
var tipoIva="";

// Determinar el IVA
switch (tipo)
{
  case 1:
    iva = 0.21
    tipoIva = "21%"
  break

  case 2:
    iva = 0.12
    tipoIva = "12%"
  break

  case 3:
    iva = 0.04
    tipoIva = "4%"
  break

  default:
  console.log("El tipo de producto no existe.")
}
  


var ivaTotal = (precio * unidades)*iva
//factura
console.log("Tu factura es: " )
console.log("Precio bruto: " +(unidades * precio))
console.log("I.V.A. aplicado: "+tipoIva+"-->" +ivaTotal )
console.log("Precio total: " +(unidades*precio+ivaTotal))
