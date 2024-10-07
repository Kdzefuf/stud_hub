import React from "react";
import styles from './SearchBar.module.css'

const SearchBar = (props) => {
  return (
    <div className={styles.div}>
      <h1 className={styles.head}>{props.name}</h1>
      <p className={styles.p}>{props.author}</p>
      <p className={styles.id}>{props.id}</p>
    </div>
  )
}
export default SearchBar;