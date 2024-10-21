import React from "react";
import classes from './Navigation.module.css'

function Navigation() {

  return (
    <ul className={classes.navigation}>
      <li className={classes.navItem}>Задать вопрос</li>
      <li className={classes.navItem}>Категории</li>
    </ul>
  )
}

export default Navigation;