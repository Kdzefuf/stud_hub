import React from "react";
import classes from "./Inputs.module.css"

/**
 * 
 * @param {*} props 
 * @returns 
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