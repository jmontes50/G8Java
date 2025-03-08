import TareaComponent from "./TareaComponent.js";

const formTarea = document.getElementById("form-tarea");
const listaTareas = document.getElementById("lista-tareas");

let tareas = [];

formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();//form, a(hipervinculos)
  // formData
  const formData = new FormData(formTarea);

  const data = Object.fromEntries(formData.entries());

  tareas.push(data.tarea);
  console.table(tareas);

  dibujarTareas();
});

const eliminarTarea = (indice) => {
  tareas.splice(indice, 1);
  dibujarTareas();
}

const dibujarTareas = () => {
  listaTareas.innerHTML = "";
  tareas.forEach((itemTarea, index) => {
    const elementoTarea = TareaComponent(itemTarea, index, eliminarTarea);
    listaTareas.appendChild(elementoTarea);
  })
}