import React from "react";
import classes from "./Buttons.module.css"
/**
 * Кастомная кнопка с полями:
 * 1) props.type - тип кнопки: 
 *  - button - дефолтное состояние
 *  - submit - состояние submit для кнопки внутри формы
 *  - reset - возвращает все подконтрольные элементы в их изначальное положение
 * 2) props.placeholder - текст внутри кнопки
 * 3) props.currentClass - название класса
 * @author RedStrikeRF(https://github.com/RedStrikeRF)
 * @param {Array} props - всевозможные свойства кнопки
 * @returns Возвращает JSX разметку кнопки с введенными полями
 */
function Button(props) {
  return (
    <button 
      className={classes[props.currentClass]}
      type={props.type}
      onSubmit={props.onSubmit}
    >
      {props.placeholder}
    </button>
  )
}

export default Button;