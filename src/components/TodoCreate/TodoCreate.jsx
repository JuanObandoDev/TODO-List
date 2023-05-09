import React, { useContext } from "react";

import { TodosContext } from "../../contexts/todosContext/todosContext";

import styles from "../../styles/TodoCreate.module.css";

export function TodoCreate() {
  const { setOpenModal } = useContext(TodosContext);
  return (
    <button
      className={styles.createTodoBtn}
      onClick={() => setOpenModal((prevState) => !prevState)}
    >
      +
    </button>
  );
}
