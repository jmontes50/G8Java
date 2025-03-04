console.log("Hola Mundo");

/* Iniciar el comentario
var texto = "Holaaaa"; //clásica, NO UTILIZAR
var texto = "BYE"
cerrar comentario
*/ 

let nombre = "Jorge"; //moderna
nombre = "Osmar"

const IGV = 1.18; //constante
// IGV = 1.15

console.log(nombre);
console.log(IGV);

let edad = 18;
edad = edad + 8;
console.log(edad);

let llueve = false;
console.log(llueve);

console.log(typeof nombre);

console.log("suma:", 10 + 20);
console.log("resta:", 100 - 20);
console.log("multiplicación:", 10 * 20);
console.log("división", 100 / 5)
console.log("módulo", 100 % 6) //residuo

//CUIDADO
console.log("suma:", 10 + "20"); //concantenación, no es recomendable
console.log("resta:", "100" - 20);

//Concatenar, Template string, template literals
let cantidad = 1000;
let mensaje = "El pedido es de ";

// `` backtick 
//Para referenciar JS usamos ${}
let mensajeFinal = `${mensaje} ${cantidad} pollos a la brasa`;
console.log(mensajeFinal);

let respuesta;
console.log(respuesta);

let estado = null;

//tanto null, undefined, 0, "", se consideran valores falsos

let a = 10;

a = a + 1;

a++;
console.log(a)

a = a - 1;

a--;
console.log(a)

a = a + 5;

a += 5;
console.log(a)