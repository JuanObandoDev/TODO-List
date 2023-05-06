import React, { createContext, useState, useContext, useEffect } from "react";

import { TodosContext } from "../todosContext/todosContext";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const { todos } = useContext(TodosContext);
  const [search, setSearch] = useState("");
  const [searchedTodos, setSearchedTodos] = useState([]);

  useEffect(() => {
    if (search.length >= 1) {
      const filteredTodos = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(search.toLowerCase());
      });
      setSearchedTodos(filteredTodos);
    } else {
      setSearchedTodos(todos);
    }
  }, [search, todos, setSearchedTodos]);

  return (
    <SearchContext.Provider
      value={{ search, setSearch, searchedTodos, setSearchedTodos }}
    >
      {children}
    </SearchContext.Provider>
  );
};
