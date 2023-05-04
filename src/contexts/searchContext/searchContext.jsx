import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [searchedTodos, setSearchedTodos] = useState([]);

  return (
    <SearchContext.Provider
      value={{ search, setSearch, searchedTodos, setSearchedTodos }}
    >
      {children}
    </SearchContext.Provider>
  );
};
