import React, { useContext, useState } from "react";

import { TodosContext } from "../../contexts/todosContext/todosContext";

import styles from "../../styles/TodoForm.module.css";

const addTodo = (event, text, todos, setTodos, setOpenModal) => {
  event.preventDefault();
  const newTodos = [...todos];
  newTodos.push({
    text: text,
    completed: false,
  });
  setTodos(newTodos);
  setOpenModal(false);
};

export const TodoForm = () => {
  const { todos, setTodos, setOpenModal } = useContext(TodosContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  return (
    <form
      className={styles.form}
      onSubmit={(e) => addTodo(e, newTodoValue, todos, setTodos, setOpenModal)}
    >
      <label className={styles.label}>Write new TODO</label>
      <textarea
        className={styles.textarea}
        value={newTodoValue}
        onChange={(e) => setNewTodoValue(e.target.value)}
        placeholder="Type any description"
      ></textarea>
      <div className={styles.containerBtns}>
        <button
          className={`${styles.btn} ${styles.cancelBtn}`}
          type="button"
          onClick={() => setOpenModal(false)}
        >
          Cancel
        </button>
        <button className={`${styles.btn} ${styles.addBtn}`} type="submit">
          Add
        </button>
      </div>
    </form>
  );
};
