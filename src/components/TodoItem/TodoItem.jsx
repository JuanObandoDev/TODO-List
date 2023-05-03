import React from "react";

import styles from "../../styles/TodoItem.module.css";

export function TodoItem(props) {
  return (
    <li className={styles.item}>
      <span
        className={`${styles.checkIcon} ${styles.icon} ${
          props.completed && styles.checkIconActive
        }`}
      >
        √
      </span>
      <p
        className={`${styles.description} ${
          props.completed && styles.descriptionCrossOut
        }`}
      >
        {props.text}
      </p>
      <span className={`${styles.icon} ${styles.deleteIcon}`}>X</span>
    </li>
  );
}
