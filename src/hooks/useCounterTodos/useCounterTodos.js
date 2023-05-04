import { useContext } from "react";

import { TodosContext } from "../../contexts/todosContext/todosContext";

export const useCounterTodos = () => {
  const { todos } = useContext(TodosContext);
  const totalTodos = todos.length;
  const totalCompletedTodos = todos.filter((todo) => todo.completed).length;

  return {
    totalTodos,
    totalCompletedTodos,
  };
};
