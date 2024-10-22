import React, { useEffect, useState } from "react";
import classes from './Question.module.css'

function Question(props) {
  /*const [pathToImage, setPathToImage] = useState('');

  useEffect(() => {
    setPathToImage(`../../images/format/${props.format}.svg`)
  }, [])*/

  return (
    <li className={classes.listItem} key={props.key}>
      <h3 className={classes.title}>{props.name}</h3>
      <p className={classes.descr}>{props.description}</p>
      <p className={classes.author}>Автор материала: {props.author_id}</p>
      <div>
        <p className={classes.rating}>Рейтинг: {props.rating}</p>
        <p className={classes.id}>id материала: {props.id}</p>
      </div>

    </li>
  )

  /**
   * @todo вернуть все как было
   */
  /*
  return (
    <li className={classes.listItem} key={props.key}>
      <h3>{props.title}</h3>
      <p className={classes.title}>{props.description}</p>
      <p>Автор вопроса:{props.author}</p>
      <p>id вопроса:{props.id}</p>
    </li>
  )*/
}

export default Question;