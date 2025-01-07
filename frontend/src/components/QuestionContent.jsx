import React, { useState, useEffect } from "react";
import GetAnswers from "../API/GetAnswers"; // Получаем API для работы с ответами
import images from './UI/Images/images.js'; // Место для хранения изображений
import classes from '../styles/QuestionContent.module.css'; // Стили для страницы ответа
import Rating from './UI/Rating/Rating.jsx'; // Компонент для отображения рейтинга
import Button from './UI/Button/Button.jsx'; // Кнопка для дополнительных действий

function QuestionContent({ id }) {
  const [activeButton, setActiveButton] = useState(null);
  const [answerData, setAnswerData] = useState({});
  const [date, setDate] = useState('');
  const [authorName, setAuthorName] = useState('Неизвестный');
  const [isAnswered, setIsAnswered] = useState(false);
  id = Number(id);

  // Форматируем Unix-время в удобный формат
  function formatUnixToDate(unixTime) {
    const dateObj = new Date(Number(unixTime));
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    setDate(`${day}.${month}.${year}`);
  }

  // Загружаем данные о ответе
  useEffect(() => {
    formatUnixToDate(id); // Форматируем дату ответа
    const fetchAnswerData = async () => {
      const data = await GetAnswers.getAnswer(id); // Получаем ответ по ID
      setAnswerData(data); // Сохраняем данные ответа
      setAuthorName(data.author_name); // Устанавливаем имя автора
      setIsAnswered(!!data.text); // Если есть текст ответа, то ставим флаг isAnswered
    };

    setActiveButton('answers');
    fetchAnswerData();
  }, [id]);

  // Обработчик для кнопки "Оставить отзыв"
  const handleLeaveReview = () => {
    alert('Функция оставления отзыва не реализована.');
  };

  // Обработчик для кнопки "Отзыв"
  const handleViewReview = () => {
    alert('Просмотр отзыва.');
  };

  const handleButtonClick = (buttonType, fetchFunction) => {
    setActiveButton(buttonType);
    fetchFunction();
  };
  
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <img src={images[String(answerData.author_avatar)]} alt="Профиль автора" className={classes.profile} />
        <div className={classes.maxSpace}>
          <h3 className={classes.title}>Ответ от {authorName}</h3>
          <p className={classes.answerText}>{answerData.text || "Ответ ещё не дан."}</p>
        </div>
        <Rating rating={answerData.rating} />
        <p className={classes.date}>{date}, просмотров: {answerData.views_count}</p>
      </div>
      <div className={classes.buttons}>
        <Button type="button" currentClass={`questionButton ${activeButton === "answers" ? "active" : ""}`} onClick={() => handleButtonClick("answers", handleViewReview)}>Ответы</Button>
        <Button type="button" currentClass={`questionButton ${activeButton === "makeAnswer" ? "active" : ""}`} onClick={() => handleButtonClick("makeAnswer", handleLeaveReview)}>Дать ответ</Button>
      </div>
      
    </div>
  );
}

export default QuestionContent;
