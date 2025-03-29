import { CalculatorContextProvider } from "./context/CalculatorContext"
import Calculadora from "./Calculadora"

const App = () => {
  return (
    <CalculatorContextProvider>
      <div>
        <h1>App</h1>
        <hr />
        <Calculadora />
      </div>
    </CalculatorContextProvider>
  )
}

export default App