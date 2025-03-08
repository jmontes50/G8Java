const TareaComponent = (tarea, index, eliminarTarea) => {
  const divTarea = document.createElement("div");

  divTarea.innerHTML = `
    <span>${tarea}</span>
    <button class="btn-eliminar">✖️</button>
  `;

  //NO FUNCIONA getElementById
  //Utilice querySelector, querySelectorAll
  const btn = divTarea.querySelector(".btn-eliminar");

  btn.addEventListener("click", () => {
    // console.log("click eliminar!!", index)
    eliminarTarea(index);
  });

  return divTarea;
}

export default TareaComponent;