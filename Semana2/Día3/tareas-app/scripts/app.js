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
});
