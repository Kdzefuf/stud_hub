import React, { useEffect, useState } from "react";
import Question from "./UI/Question/Question";
import classes from '../styles/MostPopularQuestions.module.css'

function MostPopularQuestions() {
  const [popularQuestions, setPopularQuestions] = useState([{
    title: 'Шутки за 300 это еще актуально, или нет?'
  },
  {
    title: 'Поспорили с братом, сможет ли он задержать дыхание больше чем на 3 мин. Сейчас он под водой уже 35 минут, горжусь им.'
  },
  {
    title: '150 + 150, сколько будет?'
  }
  ])
  useEffect(() => {
    //cosnt response = getMostPopularQuestions()
    //setPopularQuestions(response)
    console.log("Вопросы получены")
  }, [])

  return (
    <div className={classes.MostPopularQuestionsContent}>
      <h2 className={classes.title}>Популярные вопросы</h2>
      <ul className={classes.questionsList}>
      {popularQuestions.map(question => 
        <Question 
          placeholder={question.title}
          currentClass="question"
        />
      )}
    </ul>
    </div>
    
  )
}

export default MostPopularQuestions;