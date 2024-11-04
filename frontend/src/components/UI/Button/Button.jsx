import React from "react";
import classes from "./Buttons.module.css";

/**
 * Кастомный компонент кнопки.
 * Поддерживает различные типы кнопок, текст внутри кнопки, дополнительные CSS-классы для стилизации и вложенные элементы через `props.children`.
 * Если переданы и `placeholder`, и `children`, приоритет отдается `children`.
 * 
 * @component
 * @example
 * <Button
 *   type="submit"
 *   placeholder="Отправить"
 *   currentClass="primaryButton"
 *   onClick={handleClick}
 * />
 * <Button
 *   type="button"
 *   currentClass="profileButton"
 * >
 *   <img src={icon} alt="иконка" />
 *   <span>Отправить</span>
 * </Button>
 * @param {Object} props - Свойства, передаваемые в компонент.
 * @param {('button'|'submit'|'reset')} [props.type='button'] - Тип кнопки: "button" (по умолчанию), "submit" для отправки формы, или "reset" для сброса значений полей формы.
 * @param {string} props.placeholder - Текст, отображаемый внутри кнопки (используется, если `children` не передан).
 * @param {string} props.currentClass - Название CSS-класса для применения стилизации к кнопке.
 * @param {Function} [props.onClick] - Обработчик события клика для кнопки.
 * @param {React.ReactNode} [props.children] - Вложенные элементы, которые будут отрисованы внутри кнопки.
 * @returns {JSX.Element} Возвращает JSX-разметку кнопки с заданными свойствами.
 * @see {@link https://github.com/RedStrikeRF} Автор компонента
 */
function Button(props) {
  return (
    <button 
      className={classes[props.currentClass]}
      type={props.type || 'button'}
      onClick={props.onClick || props.onSubmit}
    >
      {props.children || props.placeholder}
    </button>
  );
}

export default Button;
