import React from "react";

import { useCounterTodos } from "../../hooks/useCounterTodos/useCounterTodos";

import styles from "../../styles/TodoCounter.module.css";

export function TodoCounter() {
  return (
    <h2 className={styles.title}>
      Has completado {useCounterTodos().totalCompletedTodos} de{" "}
      {useCounterTodos().totalTodos} TODOs
    </h2>
  );
}
