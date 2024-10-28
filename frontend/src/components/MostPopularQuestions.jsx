import React, { useEffect, useState } from "react";
import Question from "./UI/Question/Question";
import classes from '../styles/MostPopularQuestions.module.css';
import GetPopularQuestions from "../API/GetPopularQuestions";


function MostPopularQuestions() {
  const [popularQuestions, setPopularQuestions] = useState([])

  const fetchPopularQuestions = async () => {
    const response = await GetPopularQuestions.getPopularQuestions();
    setPopularQuestions(response);
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