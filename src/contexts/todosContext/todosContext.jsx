import React, { createContext, useState } from "react";

import { useLocalStorage } from "../../hooks/useLocalStorage/useLocalStorage";

export const TodosContext = createContext();

export const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useLocalStorage("TODO-List-v1", []);
  const [openModal, setOpenModal] = useState(false);

  return (
    <TodosContext.Provider value={{ todos, setTodos, openModal, setOpenModal }}>
      {children}
    </TodosContext.Provider>
  );
};
