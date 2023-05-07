import React, { useContext } from "react";

import { TodosContext } from "../../contexts/todosContext/todosContext";

import styles from "../../styles/TodoCounter.module.css";

export function TodoCounter() {
  const { todos } = useContext(TodosContext);

  return (
    <h2 className={styles.title}>
      {todos.length === 0
        ? "No hay TODOs"
        : todos.filter((todo) => todo.completed).length !== todos.length
        ? `Has completado ${todos.filter((todo) => todo.completed).length} de ${
            todos.length
          } TODOs`
        : "¡Felicidades! ¡Completaste todos tus TODOs!"}
    </h2>
  );
}
