import React, { useContext } from "react";

import { TodoItem } from "../TodoItem/TodoItem";
import { TodosLoading } from "../TodosLoading/TodosLoading";
import { EmptyTodos } from "../EmptyTodos/EmptyTodos";

import { SearchContext } from "../../contexts/searchContext/searchContext";
import { TodosContext } from "../../contexts/todosContext/todosContext";

import styles from "../../styles/TodoList.module.css";

export function TodoList() {
  const { loading } = useContext(TodosContext);
  const { searchedTodos } = useContext(SearchContext);

  return (
    <section>
      <ul className={styles.cards}>
        {loading && <TodosLoading />}
        {!loading && !searchedTodos.length && <EmptyTodos />}

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
