import React, { useState, useEffect } from "react"; // Импортируем useState и useEffect
import GetAnswers from "../../../API/GetAnswers"; // Импортируем API для получения ответов
import Answer from "../Answer/Answer"; // Импортируем компонент Answer
import classes from './Answers.module.css';

function Answers({ id }) {
  const [answerCount, setAnswerCount] = useState(0);
  const [answers, setAnswers] = useState([]); // Состояние для хранения списка ответов

  useEffect(() => {
    const fetchAnswers = async () => {
      const response = await GetAnswers.getAnswers(id);
      setAnswers(response);
      setAnswerCount(response.length)
    }
    fetchAnswers()
  }, [id])

  function getAnswerWord(count) {
    const remainder10 = count % 10;
    const remainder100 = count % 100;
  
    if (remainder100 >= 11 && remainder100 <= 19) {
      return 'ответов';
    }
  
    if (remainder10 === 1) {
      return 'ответ';
    }
  
    if (remainder10 >= 2 && remainder10 <= 4) {
      return 'ответа';
    }
  
    return 'ответов';
  }
  
  return (
    <ul style={{ 
      width: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '30px', 
      flexWrap: 'nowrap' 
    }}>
      <h1 className={classes.title}>
        {answerCount} {getAnswerWord(answerCount)}
      </h1>
      {answers.length > 0 ? (
        
        answers.map((answer) => {
          return <Answer answer={answer} />;
        })
      ) : (
        <p>Ответов пока нет.</p>
      )}
    </ul>
  )
}

export default Answers;
