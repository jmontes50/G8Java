import { useContext } from "react";
import { CalculatorContext } from "./context/CalculatorContext";

const Calculadora = () => {
  const { state, dispatch } = useContext(CalculatorContext);

  // console.log(contexto);

  const handleInput = (e) => {
    const value = e.target.value;

    dispatch({ type: "SET_INPUT", payload: value })
  }

  return (
    <div>
      <h2>Calculadora</h2>
      <h3>Resultado: {state.result}</h3>
      <input
        type="number"
        value={state.input}
        onChange={handleInput}
      />
      <br/>
      <button onClick={() => {dispatch({ type: "SUMA" })}}>
        Suma
      </button>
      
    </div>
  )
}

export default Calculadora