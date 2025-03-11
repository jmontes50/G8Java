const pro1 = () =>
  new Promise((resolve, reject) => {
    resolve("pro1 response");
  });

const pro2 = () =>
  new Promise((resolve, reject) => {
    resolve("pro2 response");
  });

const pro3 = () =>
  new Promise((resolve, reject) => {
    resolve("pro3 response");
  });

const pro4 = () =>
  new Promise((resolve, reject) => {
    // resolve("pro4 response");
    reject("error pro4")
  });

const arrPromises = [pro1(), pro2(), pro3(), pro4()];

//Promise.all espera que todo se resuelva de forma positiva
// Promise.all(arrPromises)
// .then((result) => {
//   console.log(result);
// })
// .catch((err) => {
//   console.log(err)
// });

//Promise.AllSettled genera un arreglo de objetos donde detalla si fue rechazado o resuelto correctamente
Promise.allSettled(arrPromises)
.then((result) => {
  console.table(result);
})
.catch((err) => {
  console.log(err)
});

//Toma un arreglo de Promesas y la primera en resolverse es la que tomará en su then
// Promise.race(arrPromesas)