import React, {useState, useEffect} from "react";
import classes from './Question.module.css'
import avatar from '../../../images/profile.svg'
function Question(props) {
  const [date, setDate] = useState('');

  function formatUnixToDate(unixTime) {
    
    const dateObj = new Date(Number(unixTime));
    const day = dateObj.getDate()
    const month = dateObj.getMonth() + 1
    const year = dateObj.getFullYear();
    setDate(`${day}.${month}.${year}`);
  }

  useEffect(() => {
    formatUnixToDate(props.id)
  })
  

  return (
    <li className={classes[props.currentClass]} key={props.key}>
      <img src={avatar} alt="Аватарка пользователя" />
      <div>
        <h3 className={classes.title}>{props.title}</h3>
        <p className={classes.bottom}>
          <p>{props.author_id}</p>  
          <p>{props.tags ? props.tags : "нет категории"}</p>  
          <p>{date}</p>
        </p>
      </div>
    </li>
  )
}

export default Question;