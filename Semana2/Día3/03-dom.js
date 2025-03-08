// console.log(document);
const title = document.getElementById("titulo");

console.log(title);

console.log(title.innerHTML);

title.innerHTML = "Bienvenido al DOM";
title.style.color = "red";
// font-size ----> fontSize :::> kebab-case camelCase
title.style.fontSize = "50px";
title.style.border = "2px solid blue";

//querySelector 01 elemento, usando selectores de css
const cabecera = document.querySelector(".cabeza"); //clase
// const cabecera = document.querySelector("header"); etiqueta
// const cabecera = document.querySelector("#cabeza"); id

cabecera.style.backgroundColor = "aqua";

const parrafos = document.querySelectorAll(".parrafo");

console.log(parrafos);
parrafos.forEach((p) => {
    p.style.color = "orangered";
})

//-------------------------------------------
const inputName = document.querySelector("#input-name");
const buttonName = document.getElementById("btn");

//elemento.addEventListener("nombreevento", funcionAEjecutar)
buttonName.addEventListener("click", () => {
    alert(`El valor del input es ${inputName.value}`);
})

