let pokemon = {
    nombre:"Pikachu",
    ataque:50,
    defensa: 30,
    salud: 100
}

let pokemon2 = pokemon;

console.log("pokemon2:", pokemon2);

pokemon2.defensa = 20;
pokemon2.salud = 45;

console.log("pokemon2 después de pelear:",pokemon2);

console.log("pokemon:",pokemon);

//la copia por referencia afecta a todo lo que NO sea primitivo

//cuando son primitivos se copia por valor
let nota = 20;

let nota2 = nota;

nota2 = 18;

console.log(nota);

//-------------------------------

let charmander = {
    nombre: "Felipe",
    ataque: 120,
    defensa: 25,
    salud: 100
}
//spread operator es hacer una copia por valor de un objeto
let charmander2 = { ...charmander, nombre: "Calcifer", shiny: true };

charmander2.salud = 60;

console.log("charmander2:", charmander2);

console.log("charmander:", charmander);

//-------------------------------
//spread operator en arrays

const productos = ["Café", "Té", "Chocolate", "Pastel"];

const copiaProductos = [...productos, "Jugo de Naranja"];

console.table(productos)

console.table(copiaProductos);

const souvenirs = ["Iman", "Camiseta", "Gorro", "Postal"];

const catalogo = [...productos, ...souvenirs];

console.table(catalogo);