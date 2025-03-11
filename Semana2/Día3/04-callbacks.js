const buscarEnBD = (callback) => {
    setTimeout(() => {
        console.log("encontrado!!!")
        callback();
    }, 4000)
}

// buscarEnBD();
// console.log("Estoy al final de la función");

const alertaFin = () => {
    console.log("finalizo la tarea");
}

buscarEnBD(alertaFin);