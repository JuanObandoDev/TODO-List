import React, { createContext } from "react";

import { useLocalStorage } from "../../hooks/useLocalStorage/useLocalStorage";

export const TodosContext = createContext();

export const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useLocalStorage("TODO-List-v1", []);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
};
