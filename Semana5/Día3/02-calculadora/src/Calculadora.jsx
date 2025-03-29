import { useContext } from "react";
import { CalculatorContext } from "./context/CalculatorContext";

const Calculadora = () => {
  const contexto = useContext(CalculatorContext);

  console.log(contexto);

  return (
    <div>Calculadora</div>
  )
}

export default Calculadora