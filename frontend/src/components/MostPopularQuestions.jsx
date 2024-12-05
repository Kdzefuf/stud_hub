import React, { useEffect, useState } from "react";
import Question from "./UI/Question/Question";
import classes from '../styles/MostPopularQuestions.module.css';
import GetPopularQuestions from "../API/GetPopularQuestions";
import Button from "./UI/Button/Button";
import Loader from "./UI/Loader/Loader";

import img from '../images/profile.svg'


function MostPopularQuestions() {
  const [questions, setQuestions] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  const fetchPopularQuestions = async () => {
    setIsLoading(true)
    const response = await GetPopularQuestions.getPopularQuestions();
    setQuestions(response);
    setIsLoading(false);
    console.log("Вопросы получены");
  };

  // const fetchLastQuestions = async () => {
  //   setIsLoading(true)
  //   const response = await GetLastQuestions.getLastQuestions();
  //   setQuestions(response);
  //   setIsLoading(false);
  //   console.log("Вопросы получены");
  // };

  useEffect(() => {
    fetchPopularQuestions();
  }, []);

  return (
    <div className={classes.MostPopularQuestionsContent}>
      <div className={classes.labelGroup}>
          <Button type="button" currentClass="questionButton" onClick={fetchPopularQuestions}>Популярные вопросы</Button>
          <Button type="button" currentClass="questionButton" /* onClick={fetchLastQuestions}*/ >Последние вопросы</Button>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={classes.questionsList}>
          {questions.map(question =>
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
      )}
    </div>
  )
}

export default MostPopularQuestions;