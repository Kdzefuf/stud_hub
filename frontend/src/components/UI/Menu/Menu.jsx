import React, { useState, useEffect } from "react";
import styles from "./Menu.module.css"

import plus from '../../../images/plus.svg'
import forum from '../../../images/forum.svg'
import hat from '../../../images/hat.svg'
import card from '../../../images/card.svg' 
import book from '../../../images/book.svg'

function Menu() {
  const [topPosition, setTopPosition] = useState('max(15.185vh, 120px)');

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxTop = Math.max(15.185 * window.innerHeight / 100, 120);
    
    if (scrollY > 0) {
      const newTop = Math.max(0, maxTop - scrollY);
      setTopPosition(`${newTop}px`);
    } else {
      setTopPosition('max(15.185vh, 120px)');
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.MenuItems} style={{ top: topPosition }}>
      <a className={styles.menuLinks} href="/askQuestion">
        <img className={styles.img} src={plus} alt="Задать вопрос" />
        <span>Задать вопрос</span>
      </a>
      <a className={styles.menuLinks} href="/questions">
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