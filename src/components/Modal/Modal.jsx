import React, { useContext } from "react";
import { createPortal } from "react-dom";

import { TodosContext } from "../../contexts/todosContext/todosContext";

import styles from "../../styles/Modal.module.css";

export const Modal = ({ children }) => {
  const { openModal } = useContext(TodosContext);
  return (
    openModal &&
    createPortal(
      <div className={styles.modalBackground}>{children}</div>,
      document.getElementById("modal")
    )
  );
};
