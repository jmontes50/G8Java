const TareaComponent = (tarea) => {
  const divTarea = document.createElement("div");

  divTarea.innerHTML = `
    <span>${tarea}</span>
    <button class="btn-eliminar">✖️</button>
  `;

  return divTarea;
}

export default TareaComponent;