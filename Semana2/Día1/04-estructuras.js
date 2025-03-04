//expresión (que me da un valor) y sentencia (que es una orden)
if(10 > 8) {
    console.log("Es mayor");
} else {
    console.log("Es menor");
}

let edad = prompt("Ingrese su edad"); //Casi siempre la información que se obtiene del usuario va a ser en forma de string

console.log(typeof edad);

//Condicionales

let numberEdad = parseInt(edad);

console.log(typeof numberEdad);

if(numberEdad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

let nota = +prompt("Ingrese la nota");

if (nota < 13) {
    console.log("Esta desaprobado");
} else if (nota < 17) {
    console.log("Esta aprobado");
} else {
    console.log("Esta aprobado con Honores");
}

// switch - evaluar casos, sintaxis más sencilla, pero menos versátil
// operadores ternarios - sintaxis mucha más sencilla y corta, pero realmente útil solo con 1 expresión.

//Estructuras repetitivas

for(let i = 0; i < 10; i++){
    console.log(i)
}

let frutas = ["Kiwi","Naranja","Fresa"];

console.log(frutas);

// for(let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])
// }

//for ...of
for(let fru of frutas) {
    console.log(fru);
}