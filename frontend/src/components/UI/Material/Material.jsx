import React, { useEffect, useState } from "react";
import classes from './Material.module.css'
import images from '../Images/images.js';

function Material(props) {
  console.log(props.fileType.toUpperCase())
  const icon = images[props.fileType.toUpperCase()];

  return (
    <li className={classes.listItem}>
      <h3 className={classes.title}>{props.name}</h3>
      <img src={icon} alt={`${props.fileType} icon`} className={classes.img}/>
      <p className={classes.descr}>{props.description}</p>
      <p className={classes.author}>Автор материала: {props.author}</p>
      <div>
        <p className={classes.rating}>Рейтинг: {props.rating}</p>
        <p className={classes.id}>id материала: {props.id}</p>
      </div>
    </li>
  )
}

export default Material;