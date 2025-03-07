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

// ----------------------------------------------------

// métodos de array
let frutas = ["Kiwi", "Naranja", "Manzana", "Piña"];

//iterar en un arreglo y ejecutar la función que le indiquemos item x item
frutas.forEach(function(item, indice, arreglo) {
    console.log("item:",item);
    console.log("indice:",indice);
    console.log("arr original:", arreglo);
})

//map - transformar
let frutasMayus = frutas.map((item, indice) => {
    return `${item.toUpperCase()} - ${indice}`
})

let precios = [20, 30, 50, 40, 100, 22];

let posiblesCompras = precios.filter((num) => {
    return num <= 45;
})

console.log(posiblesCompras);

let edades = [20, 25, 18, 34, 40, 29, 45, 23];

// console.log(edades.sort()); //métodos que modifican el arreglo original

console.log(edades.toSorted());

console.log(edades);

//reduce
let sumaEdades = edades.reduce((acumulador, edad) => {
    return acumulador + edad;
})

console.log(sumaEdades)