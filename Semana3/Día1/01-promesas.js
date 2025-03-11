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

buscarUsuarioPromesa()
//.then obtendrá el resultado positivo
.then((result) => {
  console.log(result);
})
//catch obtendrá el resultado negativo
.catch((error) => {
  console.log(error)
})