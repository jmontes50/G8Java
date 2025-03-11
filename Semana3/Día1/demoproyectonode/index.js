//ESModules
//import axios from "axios";
//CommonJS
const axios = require('axios');
//En el caso de las librerias que tengamos en los node_modules vamos a poder referenciarlo directamente por su nombre

console.log("PREVIO A HACER LA PETICIÓN...");

axios("https://reqres.in/api/users?page=2")
.then((rpta) => console.log(rpta));