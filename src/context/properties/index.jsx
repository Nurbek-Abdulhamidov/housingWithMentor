import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const PropertiesContext = createContext();

const PropertiesProvider = ({ children }) => {
  const [state] = useReducer(reducer, []);
  return (
    <PropertiesContext.Provider value={state}>
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesProvider;
