import React, { useEffect, useState } from "react";
import Question from "./UI/Question/Question";
import classes from '../styles/MostPopularQuestions.module.css';
import GetPopularQuestions from "../API/GetPopularQuestions";
import Button from "./UI/Button/Button";

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
      <div className={classes.labelGroup}>
          <Button type="button" currentClass="questionButton">Популярные вопросы</Button>
          <Button type="button" currentClass="questionButton">Последние вопросы</Button>
      </div>
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
            tags={question.tags}
            currentClass="question"
          />
        )}
      </ul>
    </div>
  )
}

export default MostPopularQuestions;