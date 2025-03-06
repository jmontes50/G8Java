let nombre = "Jorge";

console.log(nombre.length);

let texto = new String("lorem"); //no es recomendable usar esta sintaxis

console.log(texto)

console.log(nombre.toUpperCase())

console.log(texto.toUpperCase())

// -------------------------------------

let hoy = new Date();

console.log(hoy);

let navidad = new Date("2025-12-25");

console.log(navidad);

// los meses en el obj Date comienzar en 0, 0 Enero y 11 Diciembre
let anioNuevo = new Date(2025, 11, 31, 23, 59, 59);

console.log(anioNuevo);

console.log(hoy.getFullYear());

console.log(hoy.getTime())

console.log(navidad.getTime())

let timestampHastaNavidad = navidad.getTime() - hoy.getTime();

console.log(timestampHastaNavidad)

let diasHastaNavidad = timestampHastaNavidad / 1000 / 60 / 60 / 24;

console.log(diasHastaNavidad);