import React, { useState, useEffect } from "react"; // Импортируем useState и useEffect
import GetAnswers from "../../../API/GetAnswers"; // Импортируем API для получения ответов
import Answer from "../Answer/Answer"; // Импортируем компонент Answer
import classes from './Answers.module.css';

function Answers({ id }) {
  const [answers, setAnswers] = useState([]); // Состояние для хранения списка ответов

  useEffect(() => {
    const fetchAnswers = async () => {
      const data = await GetAnswers.getAnswersForQuestion(id); // Используем API для получения ответов по questionId
      setAnswers(data);
    };

    fetchAnswers();
  }, [id]); // Зависимость от id, чтобы при изменении id, данные обновлялись

  return (
    <ul style={{ 
      width: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '30px', 
      flexWrap: 'nowrap',
      backgroundColor: 'white'
    }}>
      {answers.length > 0 ? (
        answers.map((answer) => {
          return <Answer key={answer.id} answer={answer} />; // Передаем каждый ответ в компонент Answer
        })
      ) : (
        <p>Ответов пока нет.</p>
      )}
    </ul>
  );
}

export default Answers;
