import React, { useEffect, useState } from "react";
import Question from "./UI/Question/Question";
import classes from '../styles/MostPopularQuestions.module.css';
import GetQuestions from "../API/GetQuestions";
import Button from "./UI/Button/Button";
import Loader from "./UI/Loader/Loader";

import img from '../images/profile.svg'


function MostPopularQuestions() {
  const [activeButton, setActiveButton] = useState(null);
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
    setActiveButton("popular");
  }, []);

  const handleButtonClick = (buttonType, fetchFunction) => {
    setActiveButton(buttonType);
    fetchFunction();
  };

  return (
    <div className={classes.MostPopularQuestionsContent}>
      <div className={classes.labelGroup}>
          <Button type="button" currentClass={`questionButton ${activeButton === "popular" ? "active" : ""}`} onClick={() => handleButtonClick("popular", fetchPopularQuestions)}>Популярные вопросы</Button>
          <Button type="button" currentClass={`questionButton ${activeButton === "last" ? "active" : ""}`} onClick={() => handleButtonClick("last", fetchLastQuestions)}>Последние вопросы</Button>
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
              answer_count={question.answer_count}
            />
          )}
        </ul>
      )}
    </div>
  )
}

export default MostPopularQuestions;