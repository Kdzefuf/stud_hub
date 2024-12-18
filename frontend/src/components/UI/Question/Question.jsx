import React, { useEffect, useState } from "react";
import classes from './Question.module.css'
import GetUserInfo from "../../../API/GetUserInfo";

function Question(props) {
  const [date, setDate] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    // Получаем информацию о дате вопроса исходя из его id
    const newDate = new Date(Number(props.id));
    setDate(newDate.toLocaleDateString());
    // Получаем информацию о нике пользователя
    // setAuthor(GetUserInfo.getUserInfo(props.author_id))
    setAuthor(props.author_id)
    console.log(props.tags)
  }, []);

  const currentQuestionPage = () => {
    window.location.assign(`/questions/${props.id}`);
  }

  return (
    <li className={classes[props.currentClass]} key={props.key} onClick={currentQuestionPage}>
      <img className={classes.avatar} src={props.avatar} alt="аватар профиля пользователя" />
      <div className={classes.content}>
        <h3 className={classes.title}>{props.title}</h3>
        <p className={classes.descr}>
          <span> {props.author}, </span>
          <span> Категория: {[...props.tags].map((tag, index) => {
            return (<span>{tag}, </span>)
          })}</span>
          <span> {date}, </span>
          <span> Ответов: {props.answer_count}</span>
        </p>
      </div>
    </li>
  )
}

export default Question;