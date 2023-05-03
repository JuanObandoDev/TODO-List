import React from "react";

import styles from "../../styles/TodoSearch.module.css";

export function TodoSearch() {
    return <input className={styles.searchBar} placeholder="Type any text" />;
}