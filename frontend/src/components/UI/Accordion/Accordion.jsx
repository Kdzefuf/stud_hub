import React, {  useState } from "react";
import styles from "./Accordion.module.css"

function Accordion() {
  const [accordionIsOpen, setAccordionIsOpen] = useState(false);

  function accordionAction() {
    setAccordionIsOpen(prevState => !prevState);
  }

  return (
    <div className={styles.accordion}>
      <button className={`${styles.accordionButton} ${accordionIsOpen ? styles.open : ''}`} onClick={accordionAction}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      {accordionIsOpen && (
        <div className={styles.accordionItems}>
          <a href="/questions">Задать вопрос</a>
          <a href="/forum">Форум</a>
          <a href="/teachers">Преподователи</a>
          <a href="/materials">Материалы предметов</a>
          <a href="/examMaterials">Материалы к экзаменам</a>
        </div>
      )}
    </div>
  )
}

export default Accordion;