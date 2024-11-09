import React, { useEffect, useState } from "react";
import classes from './Material.module.css'
import images from '../Images/images.js';

function Material(props) {
  const icon = images[props.fileType.toUpperCase()];
  return (
    <li className={classes.listItem}>
      <h3 className={classes.title}>{props.name}</h3>
      <img src={icon} alt={`${props.fileType} icon`} className={classes.img}/>
      <div className={classes.bottom}>
        <p className={classes.views_count}><span>Просмотров</span> {props.views_count}</p>
        <p className={classes.rating}><span>Рейтинг:</span> {props.rating} | 5</p>
      </div>
    </li>
  )
}

export default Material;