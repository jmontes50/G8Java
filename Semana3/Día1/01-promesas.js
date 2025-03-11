/*
const buscarUsuario = () => {
  setTimeout(() => {
    const aleatorio = Math.random(); //un número aleatorio entre 0 y 1, ej: 0.16 0.67 0.9
    if(aleatorio >= 0.6){
      console.log("Se encontro el usuario 👍");
    }else {
      console.log("No se encontro el usuario ✖️");
    }
  }, 3000);
};

buscarUsuario();
console.log("Al final de la ejecución");
*/

//promesas
// const buscarUsuarioPromesa = () => {
//   return new Promise()
// }

const buscarUsuarioPromesa = () => new Promise((resolve, reject) => {
  //dentro de la nueva promesa colocaremos nuestra tarea asincrona, solo dependerá de en que parte indiquemos resolver y rejct
  setTimeout(() => {
    const aleatorio = Math.random(); //un número aleatorio entre 0 y 1, ej: 0.16 0.67 0.9
    if(aleatorio >= 0.6){
      //Indicar un resultado positivo usamos...
      resolve("Se encontro el usuario 👍");
    }else {
      //Indicar un resultado negativo usamos...
      reject("No se encontro el usuario ✖️");
    }
  }, 3000);
})

const registrarEvento = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Usuario registrado en evento");
    reject("No se pudo registrar al evento");
  }, 2000);
})

buscarUsuarioPromesa()
//.then obtendrá el resultado positivo
.then((result) => {
  console.log(result);
  console.log("Fin de la ejecución positiva ")
  //el encadenamiento de promesas se resumen en retornar otra promesa
  return registrarEvento();
})
.then((resultEvento) => {
  console.log(resultEvento);
})
//catch obtendrá el resultado negativo
.catch((error) => {
  console.log(error)
  console.log("Fin de la ejecución negativa ")
})
.finally(() => {
  console.log("Fin de la ejecución en general ")
})