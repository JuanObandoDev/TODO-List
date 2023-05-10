import React, { createContext, useState, useContext, useMemo } from "react";

import { TodosContext } from "../todosContext/todosContext";

const getFilteredTodos = (search, todos) => {
  if (search.length >= 1) {
    const filteredTodos = todos.filter((todo) => {
      return todo.text.toLowerCase().includes(search.toLowerCase());
    });
    return filteredTodos;
  } else {
    return todos;
  }
};

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const { todos } = useContext(TodosContext);
  const [search, setSearch] = useState("");
  const searchedTodos = useMemo(
    () => getFilteredTodos(search, todos),
    [search, todos]
  );

  return (
    <SearchContext.Provider value={{ search, setSearch, searchedTodos }}>
      {children}
    </SearchContext.Provider>
  );
};
