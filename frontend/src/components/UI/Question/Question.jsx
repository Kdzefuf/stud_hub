import React, { useEffect, useState } from "react";
import classes from './Question.module.css'

function Question(props) {
  
  return (
    <li className={classes[props.currentClass]} key={props.key}>
      <h3>{props.title}</h3>
      <p className={classes.title}>{props.description}</p>
      <p>Автор вопроса:{props.author}</p>
      <p>id вопроса:{props.id}</p>
    </li>
  )
}

export default Question;