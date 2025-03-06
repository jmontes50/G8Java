let gato = {
  nombre: "Michi",
  edad: 4,
  color:"Blanco",
  esAmigable: true,
  maullar: function() {
    console.log("Miau");
  },
  dormir() {
    console.log("ZZzzzzzzzz");
  }
}

console.log(gato)

console.log(gato.nombre);

// bracket-notation
console.log(gato['color']);

let prop = "edad";

console.log(gato[prop]);

gato.maullar();

let { edad, esAmigable, color, dormir, nombre } = gato;

console.log(esAmigable);

dormir();

// let registrar = (objMascota) => {
//   let { nombre, edad, color, docil } = objMascota;
// }
let registrar = ({ nombre, edad, color, docil }) => {
  console.log(`registro de ${nombre} de edad ${edad}, color ${color} y de carácter ${docil}`)
}

// registrar("Flow", 1, "negro", true);

// registrar("Garfield", "negro", true, 4);

let nuevaMascota1 = {
  nombre: "Flow",
  edad:1,
  color:"negro",
  docil: true
}

let nuevaMascota2 = {
  docil: true,
  color:"negro",
  edad:1,
  nombre: "Garfield",
  vacunado: true,
  colorOjos: "amarillos"
}

registrar(nuevaMascota1);
registrar(nuevaMascota2);