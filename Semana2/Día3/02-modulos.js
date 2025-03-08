//ESmodules
//Common JS Modules <- ya esta un poco en desuso, node.js

import Sum from "./02-1-modulo1.js";
import { IGV, users as usuarios } from "./02-2-modulo2.js";

console.log(Sum(100, 50) * IGV);

const texto = "Buenas noches";

const edad = 34;

const obj = {
    // texto: texto
    texto
}

console.log(obj)
// console.log({ edad: edad });
console.log({ edad });

console.table(usuarios);