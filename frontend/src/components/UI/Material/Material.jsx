import React, { useEffect, useState } from "react";
import classes from './Material.module.css'

function Material(props) {
  useEffect(() => {
    setFileType(props.fileType);
  }, [])
  
  const [fileType, setFileType] = useState('')
  return (
    <li className={classes.listItem} key={props.key}>
      <h3 className={classes.title}>{props.name}</h3>
      <img src={`../../../images/filesTypes/${fileType.toUpperCase}.svg`} />
      <p className={classes.descr}>{props.description}</p>
      <p className={classes.author}>Автор материала: {props.author_id}</p>
      <div>
        <p className={classes.rating}>Рейтинг: {props.rating}</p>
        <p className={classes.id}>id материала: {props.id}</p>
      </div>
    </li>
  )
}

export default Material;