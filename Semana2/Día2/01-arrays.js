let ciudades = ["Lima", "Arequipa","Cusco"];

let medidas = ["1kg", "10lt.", 100, true, {altura:"10 metros"}];

console.log(ciudades);

console.log(medidas);

console.log(ciudades[0]);

console.log(ciudades[1]);

console.log(medidas[1]);

//agregar un nuevo item al arreglo
ciudades.push("Chiclayo");

console.log(ciudades);

//agregar pero al inicio del arreglo
ciudades.unshift("Iquitos");

console.log(ciudades);

//remover un item del final del arreglo
ciudades.pop();

console.log(ciudades);

//remover un item del inicio del arreglo
ciudades.shift();

console.log(ciudades);

//cantidad de items en el arreglo
console.log(ciudades.length)