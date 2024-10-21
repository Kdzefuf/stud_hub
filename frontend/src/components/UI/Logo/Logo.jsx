import React from "react";
import classes from './Logo.module.css'

function Logo(props) {
  return (
    <a href={props.link} className={classes.logo}>
      StudHub
    </a>
  )
}

export default Logo;