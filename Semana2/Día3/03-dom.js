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

//agregar atributos
inputName.setAttribute("placeholder", "Ej. Juan Perez");

//elemento.addEventListener("nombreevento", funcionAEjecutar)
buttonName.addEventListener("click", () => {
    alert(`El valor del input es ${inputName.value}`);
})
//`-----------------------------
const footer = document.querySelector("footer");

footer.innerHTML = `
    <h3>Información</h3>
    <ul>
        <li>Correo: info@dominio.com</li>
        <li>Whatsapp: +99634523453245</li>
    </ul>
    <button id="btn-info">Más información</button>
`;

const buttonInfo = document.getElementById("btn-info");

buttonInfo.style.backgroundColor = "skyblue";

//crear desde JS un nuevo elemento (elemento HTML)
const img = document.createElement("img");
img.setAttribute("src", "https://www.infobae.com/resizer/v2/6VHUWMMTEJF2RKLO3NRADENBJI.jpg?auth=8de7b85b5f92ab2dfe221ba63f7f9634094fa8114ad1952408af3306f81043b2&smart=true&width=350&height=467&quality=85");
img.alt = "imagen referente día de la mujer";

console.log(img);

//preprend para agregar al inicio
// footer.prepend(img);

//appendChild para ahrehar como último elemento
footer.appendChild(img);

footer.classList.add("importante");