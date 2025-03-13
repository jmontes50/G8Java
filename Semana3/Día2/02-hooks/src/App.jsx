import { useState, useEffect } from "react";
import Boton from "./Boton";
import Mostrar from "./Mostrar";

const App = () => {
  // const [nombreEstado, funcionEstado] = useState(valorInicial);
  //cuando cambie de valor el estado, esto se verá reflejado automáticamente en la interfaz
  let [contador, setContador] = useState(0);
  let [contador2, setContador2] = useState(2000)

  const incrementar = () => {
    setContador(contador + 1)
  }

  const incrementar2 = () => {
    setContador2(contador2 + 2)
  }

  const disminuir = () => {
    setContador(contador - 1)
  }

  const cambiar = (valor) => {
    setContador(valor)
  }

  useEffect(() => {
    console.log("Ejecutandooooo!!!!")
  }, [])

  return (
    <>
    <h1>App</h1>
    <Mostrar contador={contador} />
    <h3>Contador2 es: {contador2}</h3>
    <Boton texto={"Aumentar"} ejecuta={incrementar} />
    <button onClick={incrementar2}>
      Incrementar2
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