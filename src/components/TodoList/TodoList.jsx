import React, { useContext } from "react";

import { TodoItem } from "../TodoItem/TodoItem";

import { SearchContext } from "../../contexts/searchContext/searchContext";

import styles from "../../styles/TodoList.module.css";

export function TodoList() {
  const { searchedTodos } = useContext(SearchContext);

  return (
    <section>
      <ul className={styles.cards}>
        {searchedTodos.map((todo) => (
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
