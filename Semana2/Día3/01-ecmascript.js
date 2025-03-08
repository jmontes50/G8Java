// if (10 < 20) {
//   console.log("10 es menor");
// } else {
//   console.log("10 es mayor");
// }

// condicional ? "retorna si es V" : "retorna si es F";

//No es muy recomendable
// const res =
//   numero < 10
//     ? "Es menor que 10"
//     : numero < 20
//     ? "Es menor que 20"
//     : "Es mayor que 20";

/*
// operador ternario
const numero = +prompt("Ingrese número");

const res = numero < 10 ? "Es menor que 10" : "Es mayor que 10";

console.log(res);
*/

/*
//Parámetros por defecto
const validarPermisos = (tieneAcceso = false, code = 0) => {
  console.log(tieneAcceso, code);
  return tieneAcceso ? "Puede Ingresar" : "No puede ingresar";
} 

console.log(validarPermisos());
console.log(validarPermisos(true, 100));
*/

/*
//desestructuración de arreglos
const frutas = ["Kiwi", "Naranja", "Piña"];

// const fruta1 = frutas[0];
const [fruta1, fruta2, fruta3] = frutas;

console.log(fruta1);
console.log(fruta2);
console.log(fruta3);
*/