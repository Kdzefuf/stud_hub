import React from "react";
import styles from "./Menu.module.css"

import plus from '../../../images/plus.svg'
import forum from '../../../images/forum.svg'
import hat from '../../../images/hat.svg'
import card from '../../../images/card.svg' 
import book from '../../../images/book.svg'

function Menu() {

  return (
    <div className={styles.MenuItems}>
      <a className={styles.menuLinks} href="/questions">
        <img className={styles.img} src={plus} alt="Задать вопрос" />
        <span>Задать вопрос</span>
      </a>
      <a className={styles.menuLinks} href="/forum">
        <img className={styles.img} src={forum} alt="Форум" />
        <span>Форум</span>
      </a>
      <a className={styles.menuLinks} href="/teachers">
        <img className={styles.img} src={hat} alt="Преподователи" />
        <span>Преподователи</span>
      </a>
      <a className={styles.menuLinks} href="/materials">
        <img className={styles.img} src={card} alt="Материалы предметов" />
        <span>Материалы предметов</span>
      </a>
      <a className={styles.menuLinks} href="/examMaterials">
        <img className={styles.img} src={book} alt="Материалы к экзаменам" />
        <span>Материалы к экзаменам</span>
      </a>
    </div>
  )
}

export default Menu;