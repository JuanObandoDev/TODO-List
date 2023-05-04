import React from "react";

import { TodoItem } from "../TodoItem/TodoItem";

import { useSearchedTodos } from "../../hooks/useSearchedTodos/useSearchedTodos";

import styles from "../../styles/TodoList.module.css";

export function TodoList() {
  return (
    <section>
      <ul className={styles.cards}>
        {useSearchedTodos().searchedTodos.map((todo) => (
          <TodoItem
            text={todo.text}
            key={todo.text}
            completed={todo.completed}
          />
        ))}
      </ul>
    </section>
  );
}
