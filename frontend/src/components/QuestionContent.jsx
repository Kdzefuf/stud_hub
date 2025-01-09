import React, { useState, useEffect } from "react";
import GetAnswers from "../API/GetAnswers"; // Получаем API для работы с ответами
import classes from '../styles/QuestionContent.module.css'; // Стили для страницы ответа
import Rating from './UI/Rating/Rating.jsx'; // Компонент для отображения рейтинга
import Button from './UI/Button/Button.jsx'; // Кнопка для дополнительных действий
import Answers from './UI/Answers/Answers.jsx';
import GetUserInfo from "../API/GetUserInfo";
import profile from '../images/profile.svg';
import Form from "./UI/Form/Form.jsx";
import PostAnswer from "../API/PostAnswer.js"; // Подключаем API для отправки ответа

function QuestionContent({ id, author_id }) {
  const [avatar, setAvatar] = useState('');
  const [answersData, setAnswersData] = useState({});
  const [date, setDate] = useState('');
  const [authorName, setAuthorName] = useState('Неизвестный');
  const [isAnswer, setIsAnswer] = useState(null);
  const [showForm, setShowForm] = useState(false);
  id = Number(id);

  // Форматируем Unix-время в удобный формат
  function formatUnixToDate(unixTime) {
    const dateObj = new Date(Number(unixTime));
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    setDate(`${day}.${month}.${year}`);
  }

  //Загружаем данные о ответе
  useEffect(() => {
    formatUnixToDate(id); // Форматируем дату ответа
    const fetchAnswerData = async () => {
      const data = await GetAnswers.getAnswerInfo(id); // Получаем ответ по ID
      setAnswersData(data); // Сохраняем данные ответа
      setIsAnswer(true);
    };

    const fetchUserInfo = async () => {
      try {
        const data = await GetUserInfo.getUserInfo(author_id); // Получаем информацию об авторе
        if (data) {
          setAuthorName(data.nickname);
          setAvatar(data.photo !== null ? `http://localhost:3500/uploads/${data.photo}` : profile);
        }
      } catch (error) {
        console.error('Ошибка при получении данных пользователя:', error);
      }
    };

    fetchUserInfo();
    fetchAnswerData();
  }, [id]);

  // Обработчик для кнопки "Оставить отзыв"
  const handleLeaveReview = () => {
    setShowForm(true); // Показываем форму
  };

  // Обработчик для закрытия формы
  const handleCloseForm = () => {
    setShowForm(false); // Закрываем форму
  };

  // Обработчик отправки данных формы
  const handleSubmitForm = async (formData) => {
    try {
      // Добавляем в formData необходимые данные
      formData.append('author_id', JSON.parse(localStorage.getItem("userData")));
      formData.append('question_id', id); // Используем id из пропсов

      const response = await PostAnswer.submitAnswer(formData); // Отправляем данные на сервер
      alert('Ответ успешно отправлен:', response);
      setShowForm(false); // Закрываем форму после отправки
    } catch (error) {
      console.error('Ошибка при отправке ответа:', error);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.add}>
          <img src={avatar} alt="Профиль автора" className={classes.profile} />
          <div className={classes.maxSpace}>
            <h3 className={classes.title}>
              <span>{authorName}, {date}</span><br />
              {answersData.title}
            </h3>
            <p className={classes.descr}>{answersData.description || "Ответ ещё не дан."}</p>
          </div>
        </div>
        <div className={classes.addons}>
          <Button type="button" currentClass={`questionButton active1`} onClick={handleLeaveReview}>Дать ответ</Button>
        </div>
      </div>

      {isAnswer ? (
        <Answers id={answersData.id} />
      ) : (
        <p>Пока что не придумано</p>
      )}

      {/* Показываем форму для ответа */}
      {showForm && <Form onSubmit={handleSubmitForm} onClose={handleCloseForm} />}
    </div>
  );
}

export default QuestionContent;
