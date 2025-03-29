import { createContext, useState, useEffect } from "react";

const NumberContext = createContext();

const NumberContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  }

  const hoy = new Date().toISOString();
  const PI = Math.PI;

  useEffect(() => {
    console.log("Effect!!!", count);
  }, [])

  //la manera de compartir información va a ser mediante un atributo value
  return <NumberContext.Provider 
    value={{ hoy, pi:PI, count, incrementar}}
  >
    { children }
  </NumberContext.Provider>
}

export {
  NumberContext,
  NumberContextProvider
}