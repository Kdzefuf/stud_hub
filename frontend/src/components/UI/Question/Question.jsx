import React from "react";
import classes from './Question.module.css'

function Question(props) {


  return (
    <li className={classes.listItem}>
      <p className={classes.title}>{props.placeholder}</p>
    </li>
  )
}

export default Question;