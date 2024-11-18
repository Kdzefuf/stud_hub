import React, { useEffect, useState } from "react";
import classes from './Material.module.css'
import images from '../Images/images.js';
import star from '../../../images/star.svg';

function Material(props) {
  const icon = images[props.fileType.toUpperCase()];

  const redirect = () => {
    window.location.assign(`/materials/${props.id}`);
  };

  return (
    <li className={classes.listItem} onClick={redirect}>
      <h3 className={classes.title}>{props.name}</h3>
      <img src={icon} alt={`${props.fileType} icon`} className={classes.img}/>
      <div className={classes.bottom}>
        <p className={classes.views_count}><span>Просмотров</span> {props.views_count}</p>
        <p className={classes.rating}><span>Рейтинг: {props.rating}/5 </span><img className={classes.star} src={star}/></p>
      </div>
    </li>
  )
}

export default Material;