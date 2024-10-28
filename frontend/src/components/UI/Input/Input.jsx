import React from "react";
import classes from "./Inputs.module.css"

/**
 * Кастомное поле ввода с параметрами:
 * 1) props.type - тип поля: 
 *  - checkbox - Чекбокс
 *  - datetime-local - выбор времени(локально для каждого пользователя)
 *  - email - ввод email данных пользователя
 *  - file - ввод file пользователя
 *  - password - ввод пароля пользователя
 *  - radio - радиоКнопка(1 из ... таких же кнопок, но выбранная только одна)
 *  - search - поисковое поле ввода пользователя
 *  - text - текстовое поле(default) пользователя
 * 2) props.placeholder - текст внутри поля ввода
 * 3) props.currentClass - название классов(через пробел, если их много) поля ввода
 * 4) props.value - значение, которое будет внутри поля, которое вводит пользователь
 * 5) props.onChange - callback-функция, которая вызывается на любое изменение в поле ввода
 * 6) props.id - уникальный ключ елемента (нужен для более быстрого обновления компонента в react)
 * 7) props.required - св-во отвечающее за обязательность ввода данного поля
 * @author RedStrikeRF(https://github.com/RedStrikeRF)
 * @param {Array} props - всевозможные свойства поля
 * @returns Возвращает JSX разметку поля ввода с введенными props'ами
 */
function Input(props) {
  return (
    <input
    value={props.value}
    onChange={props.onChange}
    className={classes[props.currentClass]}
    maxLength="64"
    placeholder={props.placeholder}
    type={props.type}
    id={props.id}
    required={props.required}>
    </input>
  )
}

export default Input;