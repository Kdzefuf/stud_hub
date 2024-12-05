import React, { useState } from "react";
import classes from "../styles/AskQuestion.module.css";
import Header from "../components/Header";
import Button from '../components/UI/Button/Button';
import AskQuestionApi from "../API/AskQuestion";

function AskQuestion() {
  const [topic, setTopic] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [category, setCategory] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [QuestionsCount, setQuestionsCount] = useState(0);
  const [AnswersCount, setAnswersCount] = useState(0);

  const categories = [
    "Программирование",
    "Дизайн",
    "Медицина",
    "Финансы",
    "Образование",
    "Спорт",
    "Технологии",
  ];

  // Фильтрация категорий
  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value);

    if (value) {
      const filtered = categories.filter((cat) =>
        cat.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCategories(filtered);
    } else {
      setFilteredCategories([]);
    }
  };

  // Обработка отправки формы
  const tryAsk = async (e) => {
    e.preventDefault();

    const formData = {
      author_id: localStorage.getItem('userData'),
      title: topic,
      description: questionText,
      tags: category,
    };

    try {
      const responce = await AskQuestionApi.askQuestion(formData);
      if (responce) {
        alert('Вопрос успешно задан');
        window.location.assign(`/`);
      }
    } catch (error) {
      alert("Произошла ошибка при отправке вопроса. Попробуйте еще раз");
    }
  };

  
  return (
    <div className="page">
      <Header Header="header" isProfileLink={true} />
      <div className={classes.rightmenu}>
        <p className={classes.rightMenuContent}>
          <span className={classes.rightMenuContentText}>Ваши вопросы</span>
          <span className={classes.rightMenuContentText}>{QuestionsCount}</span>
        </p>
        <p className={classes.rightMenuContent}>
          <span className={classes.rightMenuContentText}>Ваши ответы</span>
          <span className={classes.rightMenuContentText}>{AnswersCount}</span>
        </p>
      </div>
      <div className={classes.content}>
        <h2 className={classes.title}>Задай свой вопрос!</h2>
        <form onSubmit={tryAsk} className={classes.form}>
          {/* Поле для темы вопроса */}
          <label className={classes.label}>
            Тема вопроса
            <textarea
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
              className={`${classes.askQuestion} ${classes.moders1}`}
            />
          </label>

          {/* Поле для текста вопроса */}
          <label className={classes.label}>
            Текст вопроса
            <textarea
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              required
              className={`${classes.askQuestion} ${classes.moders2}`}
            ></textarea>
          </label>

          {/* Поле для выбора категории */}
          <label className={classes.label}>
            Выбрать категорию
            <textarea
              type="text"
              value={category}
              onChange={handleCategoryChange}
              required
              className={`${classes.askQuestion} ${classes.moders3}`}
            />
            {filteredCategories.length > 0 && (
              <ul className={classes.dropdown}>
                {filteredCategories.map((cat, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setCategory(cat);
                      setFilteredCategories([]);
                    }}
                    className={classes.dropdownItem}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            )}
          </label>

          
          <Button type="submit" currentClass="formButton">
            Опубликовать вопрос
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AskQuestion;
