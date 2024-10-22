import React, { useEffect, useState } from "react";
import Question from "./UI/Question/Question";
import classes from '../styles/MostPopularQuestions.module.css';
import GetPopularMaterials from "../API/GetPopularMaterials";


function MostPopularQuestions() {
  const [popularQuestions, setPopularQuestions] = useState([])

  const fetchPopularQuestions = async () => {
    const response = await GetPopularMaterials.getPopularMaterials();
    setPopularQuestions(response || [
      {
        id: 1,
        title: "Как работает замыкание в JavaScript?",
        description: "Объясните принцип работы замыканий и приведите пример использования.",
        author: "Иван Петров"
      },
      {
        id: 2,
        title: "Что такое REST API?",
        description: "Какие основные принципы REST и в чем его преимущества?",
        author: "Мария Смирнова"
      },
      {
        id: 3,
        title: "Разница между var, let и const?",
        description: "Когда лучше использовать var, let или const в JavaScript?",
        author: "Дмитрий Иванов"
      },
      {
        id: 4,
        title: "Что такое React hooks?",
        description: "Какие основные хуки есть в React и как они работают?",
        author: "Алексей Кузнецов"
      },
      {
        id: 5,
        title: "Как работают промисы в JavaScript?",
        description: "Пример использования промисов и объяснение их основных концепций.",
        author: "Ольга Соколова"
      },
      {
        id: 6,
        title: "Как работает асинхронность в Node.js?",
        description: "Какие модели асинхронности используются в Node.js?",
        author: "Екатерина Волкова"
      },
      {
        id: 7,
        title: "Что такое SQL-инъекция?",
        description: "Объясните, как работают SQL-инъекции и как от них защищаться.",
        author: "Михаил Орлов"
      },
      {
        id: 8,
        title: "Разница между HTTP и HTTPS?",
        description: "Какие основные отличия между HTTP и HTTPS и почему HTTPS безопаснее?",
        author: "Сергей Николаев"
      },
      {
        id: 9,
        title: "Что такое Docker и зачем он нужен?",
        description: "Объясните основную концепцию Docker и его преимущества в разработке.",
        author: "Наталья Белова"
      },
      {
        id: 10,
        title: "Как работает WebSocket?",
        description: "Объясните, как работает протокол WebSocket и в чем его отличия от HTTP.",
        author: "Илья Котов"
      }
    ]);
    console.log("Вопросы получены");
  };

  useEffect(() => {
    fetchPopularQuestions();
  }, []);

  return (
    <div className={classes.MostPopularQuestionsContent}>
      <h2 className={classes.title}>Популярные вопросы</h2>
      <ul className={classes.questionsList}>
        {popularQuestions.map(question =>
          <Question
            name={question.name}
            description={question.description}
            author_id={question.author_id}
            rating={question.rating}
            key={question.id}
            id={question.id}
            title={question.title}
            tags={question.tegs}
            currentClass="question"
          />
        )}
      </ul>
    </div>
  )
}

export default MostPopularQuestions;