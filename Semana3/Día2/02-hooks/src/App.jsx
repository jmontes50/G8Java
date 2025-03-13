import { useState } from "react";
import Boton from "./Boton";
import Mostrar from "./Mostrar";

const App = () => {
  // const [nombreEstado, funcionEstado] = useState(valorInicial);
  //cuando cambie de valor el estado, esto se verá reflejado automáticamente en la interfaz
  let [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1)
  }

  const disminuir = () => {
    setContador(contador - 1)
  }

  const cambiar = (valor) => {
    setContador(valor)
  }

  return (
    <>
    <h1>App</h1>
    {/* <h3>Contador: {contador}</h3> */}
    <Mostrar contador={contador} />
    <Boton texto={"Aumentar"} ejecuta={incrementar} />
    <button onClick={incrementar}>
      Incrementar
    </button>
    <button onClick={disminuir}>
      Disminuir
    </button>
    <button onClick={() => {cambiar(1000)}}>
      cambiar
    </button>
    </>
  )
}

export default App