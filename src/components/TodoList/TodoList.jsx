import React from "react";

import styles from "../../styles/TodoList.module.css";

export function TodoList(props) {
    return (
        <section>
            <ul className={styles.cards}>
                {props.children}
            </ul>
        </section>
    );
}