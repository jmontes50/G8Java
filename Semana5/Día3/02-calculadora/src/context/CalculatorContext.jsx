import { createContext, useReducer } from "react";

const CalculatorContext = createContext();

const initialState = {
  result: 0,
  input: "",
};

const calculatorReducer = (state, action) => {
  console.log("state", state);
  console.log("action", action);

  if (action.type === "SUMA") {
    return { 
      ...state, 
      result: state.result + Number(state.input), 
      input: "" 
    };
  } else if(action.type === "RESTA"){
    return { 
      ...state, 
      result: state.result - Number(state.input), 
      input: "" 
    };
  } else if(action.type === "MULTIPLICACION"){
    return { 
      ...state, 
      result: state.result * Number(state.input), 
      input: "" 
    };
  } else if(action.type === "DIVISION"){
    return { 
      ...state, 
      result: state.result / Number(state.input), 
      input: "" 
    };
  } else if (action.type === "SET_INPUT") {
    return { ...state, input: action.payload };
  } else {
    return state;
  }
};

const CalculatorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  return (
    <CalculatorContext.Provider value={{ state, dispatch }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export { CalculatorContext, CalculatorContextProvider };
