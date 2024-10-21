import React, { useRef, useState } from "react";
import styles from "./Accordion.module.css"

function Accordion() {
  const [accordionIsOpen, setAccordionIsOpen] = useState(false);
  const ref = useRef()

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
        <ul className={styles.accordionItems}>
          <li>Меню</li>
          <li>Элемент 1</li>
          <li>Элемент 2</li>
        </ul>
      )}
    </div>
  )
}

export default Accordion;