import { useContext, useEffect } from "react";

import { SearchContext } from "../../contexts/searchContext/searchContext";
import { TodosContext } from "../../contexts/todosContext/todosContext";

export const useSearchedTodos = () => {
  const { searchedTodos, search, setSearchedTodos } = useContext(SearchContext);
  const { todos } = useContext(TodosContext);

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

  return { searchedTodos };
};
