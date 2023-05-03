import React, { useContext } from "react";

import { SearchContext } from "../../contexts/searchContext/searchContext";

import styles from "../../styles/TodoSearch.module.css";

export function TodoSearch() {
  const { search, setSearch } = useContext(SearchContext);

  return (
    <input
      type="text"
      className={styles.searchBar}
      placeholder="Type any text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
