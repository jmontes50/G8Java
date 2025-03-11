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
    // setTimeout(() => {
    //     return "datos obtenidos"
    // }, 2000)
    return "datos obtenidos"; //va a ser el equivalente de un resolve
    // throw "Ocurrió un error"; //va a ser el equivalente de un reject
}

const validarDatos = async () => {
    return "Datos validados correctamente";
}

// obtenerDatos()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

const ejecutarOrdenes = async () => {
    try {
        //código asíncrono que deseo ejecutar
        const res = await obtenerDatos();
        //encadenamiento de promesas
        const dataValidada = await validarDatos();
        console.log(dataValidada);
    } catch (error) {
        //manejo de errores
        console.log(error);
    }
}
ejecutarOrdenes();
