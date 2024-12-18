import React, { useState } from "react";
import classes from '../styles/QuestionsContent.module.css'
import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button";
import MostPopularQuestions from "./MostPopularQuestions";

function QuestionsContent() {
  const [searchValue, setSearchValue] = useState('')

  const searchInput = (e) => {setSearchValue(e.target.value)}
  const forSearch = (e) => {
    e.preventDefault();
    window.location.assign('/askQuestion')
  }
  
  return (
    <div className={classes.container}>
      <div className={classes.QuestionsContent}>
      <h1 className={classes.title}>Задай свой вопрос!</h1>
        <form className={classes.searchBar} onSubmit={forSearch}>
          <Input
          type="text"
          placeholder=""
          required={false}
          value={searchValue}
          onChange={searchInput}
          currentClass="searchBar"
          />
          <Button 
            type="submit"
            currentClass="searchBar"
            placeholder="Задать"
          />
        </form>
      </div>
      <MostPopularQuestions />
    </div>
  )
}

export default QuestionsContent;