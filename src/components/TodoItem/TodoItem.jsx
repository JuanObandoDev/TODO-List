import React, { useContext } from "react";

import { TodosContext } from "../../contexts/todosContext/todosContext";

import styles from "../../styles/TodoItem.module.css";

const completeTodo = (text, todos, setTodos) => {
  const todoIndex = todos.findIndex((todo) => todo.text === text);
  const newTodos = [...todos];
  newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
  setTodos(newTodos);
};

const deleteTodo = (text, todos, setTodos) => {
  const todoIndex = todos.findIndex((todo) => todo.text === text);
  const newTodos = [...todos];
  newTodos.splice(todoIndex, 1);
  setTodos(newTodos);
};

export function TodoItem({ text, completed }) {
  const { todos, setTodos } = useContext(TodosContext);

  return (
    <li className={styles.item}>
      <span
        onClick={() => completeTodo(text, todos, setTodos)}
        className={`${styles.checkIcon} ${styles.icon} ${
          completed && styles.checkIconActive
        }`}
      >
        √
      </span>
      <p
        className={`${styles.description} ${
          completed && styles.descriptionCrossOut
        }`}
      >
        {text}
      </p>
      <span
        onClick={() => deleteTodo(text, todos, setTodos)}
        className={`${styles.icon} ${styles.deleteIcon}`}
      >
        X
      </span>
    </li>
  );
}
