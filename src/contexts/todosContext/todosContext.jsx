import React, { createContext, useState } from "react";

import { useLocalStorage } from "../../hooks/useLocalStorage/useLocalStorage";

export const TodosContext = createContext();

export const TodosContextProvider = ({ children }) => {
  const { item, saveItem, loading, error } = useLocalStorage(
    "TODO-List-v1",
    []
  );
  const [openModal, setOpenModal] = useState(false);

  return (
    <TodosContext.Provider
      value={{
        todos: item,
        setTodos: saveItem,
        error,
        loading,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};
