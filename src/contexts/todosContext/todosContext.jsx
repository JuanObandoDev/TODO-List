import React, { createContext, useState } from "react";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "LALALA", completed: true },
];

export const TodosContext = createContext();

export const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(defaultTodos);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
};
