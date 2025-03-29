import { createContext } from "react";

const NumberContext = createContext();

const NumberContextProvider = ({ children }) => {

  const hoy = new Date().toISOString();
  const PI = Math.PI;

  //la manera de compartir información va a ser mediante un atributo value
  return <NumberContext.Provider value={{ hoy, pi:PI }}>
    { children }
  </NumberContext.Provider>
}

export {
  NumberContext,
  NumberContextProvider
}