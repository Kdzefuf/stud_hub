import React from "react";
import classes from './Logo.module.css'

import logo from '../../../images/Logo.svg'

function Logo() {
  return (
    <a href='/' className={classes.logo}>
      <img className={classes.logoImg} src={logo}/>
      StudHub
    </a>
  )
}

export default Logo;