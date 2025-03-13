const Boton = ({ texto, ejecuta }) => {
    return (
      <button onClick={ejecuta}>
        {texto}
      </button>
    )
  }
  
  export default Boton