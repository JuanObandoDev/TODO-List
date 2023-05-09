import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";

import styles from "../../styles/EmptyTodos.module.css";

export const EmptyTodos = () => {
  return (
    <div className={styles.emptyContainer}>
      <p className={styles.text}>¡Create your first TODO!</p>
      <FontAwesomeIcon className={styles.emptyIcon} icon={faFolderOpen} />
    </div>
  );
};
