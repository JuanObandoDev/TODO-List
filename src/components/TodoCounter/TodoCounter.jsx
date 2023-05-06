import React, { useContext } from "react";

import { TodosContext } from "../../contexts/todosContext/todosContext";

import styles from "../../styles/TodoCounter.module.css";

export function TodoCounter() {
  const { todos } = useContext(TodosContext);

  return (
    <h2 className={styles.title}>
      Has completado {todos.filter((todo) => todo.completed).length} de{" "}
      {todos.length} TODOs
    </h2>
  );
}
