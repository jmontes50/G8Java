import { useContext } from "react";
import { NumberContext } from "./context/NumberContext";

const Show = () => {
  const { count } = useContext(NumberContext);


  return (
    <div>
      <h2>Count es: {count}</h2>
    </div>
  )
}

export default Show