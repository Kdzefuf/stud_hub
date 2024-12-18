import React, { useEffect, useState } from "react";
import Question from "./UI/Question/Question";
import classes from '../styles/MostPopularQuestions.module.css';
import GetQuestions from "../API/GetQuestions";
import Button from "./UI/Button/Button";
import Loader from "./UI/Loader/Loader";

import img from '../images/profile.svg'


function MostPopularQuestions() {
  const [questions, setQuestions] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  const fetchPopularQuestions = async () => {
    setIsLoading(true)
    const response = await GetQuestions.getQuestions("views_count");
    setQuestions(response);
    setIsLoading(false);
  };

  const fetchLastQuestions = async () => {
    setIsLoading(true)
    const response = await GetQuestions.getQuestions("id");
    setQuestions(response);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPopularQuestions();
  }, []);

  return (
    <div className={classes.MostPopularQuestionsContent}>
      <div className={classes.labelGroup}>
          <Button type="button" currentClass="questionButton" onClick={fetchPopularQuestions}>Популярные вопросы</Button>
          <Button type="button" currentClass="questionButton" onClick={fetchLastQuestions} >Последние вопросы</Button>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={classes.questionsList}>
          {questions.map(question => 
            <Question
              description={question.description}
              author_id={question.author_id}
              author={question.author_name}
              key={question.id}
              id={question.id}
              title={question.title}
              tags={question.tags}
              currentClass="question"
              avatar={img}
            />
          )}
        </ul>
      )}
    </div>
  )
}

export default MostPopularQuestions;