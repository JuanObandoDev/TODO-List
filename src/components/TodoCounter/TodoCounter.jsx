import React, { useContext } from "react";

import { TodosContext } from "../../contexts/todosContext/todosContext";

import styles from "../../styles/TodoCounter.module.css";

export function TodoCounter() {
  const { todos } = useContext(TodosContext);

  return (
    <h2 className={styles.title}>
      {todos.length === 0
        ? "There are no TODOs"
        : todos.filter((todo) => todo.completed).length !== todos.length
        ? `You have completed ${
            todos.filter((todo) => todo.completed).length
          } of ${todos.length} TODOs`
        : "Congratulations! You completed all of your TODOs!"}
    </h2>
  );
}
