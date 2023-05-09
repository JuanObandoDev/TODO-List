import React from "react";

import styles from "../../styles/TodosLoading.module.css";

export const TodosLoading = () => {
  return (
    <>
      <div className={styles.loadContainer}></div>
      <div className={styles.loadContainer}></div>
      <div className={styles.loadContainer}></div>
      <div className={styles.loadContainer}></div>
    </>
  );
};
