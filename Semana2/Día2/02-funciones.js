function sumar(a, b){
    //lo que deseemos
    return a + b; //retorne una expresión
}

let suma = sumar(5, 10);

console.log(sumar(10, 20));

console.log(suma);

//función anónima
//las funciones en JS son tratadas como ciudadanos de 1ra clase
//puedo utilizar las funciones como una variable más
let resta = function (a, b) {
  return a - b;
}

console.log(resta(30, 4));

//funciones callback, pasar como argumento una función a otra función
function ejecutarOperacion(operacion, a, b){
  return operacion(a, b);
}

console.log(ejecutarOperacion(sumar, 100, 200));
console.log(ejecutarOperacion(resta, 600, 150));

function multiplicacion (a, b) {
  return a * b;
}
console.log(ejecutarOperacion(multiplicacion, 2, 9));

//funciones flecha, sintaxis más corta y moderna

// let division = (a, b) => {
//   return a / b
// }
//
let division = (a, b) => a / b;

console.log(division(100000, 4));

let saludo = nombre => `Hola ${nombre}`;

console.log(saludo("Jorge"));

