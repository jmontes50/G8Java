// const obtenerDatos = () =>
//   new Promise((resolve, reject) => {
//     // resolve("datos obtenidos");
//     reject("Ocurrió un error");
//   });

// const obtenerDatos = async () => {
//     // return "datos obtenidos"; //va a ser el equivalente de un resolve
//     throw "Ocurrió un error"; //va a ser el equivalente de un reject
// }

async function obtenerDatos() {
    return "datos obtenidos"; //va a ser el equivalente de un resolve
    // throw "Ocurrió un error"; //va a ser el equivalente de un reject
}


obtenerDatos()
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});