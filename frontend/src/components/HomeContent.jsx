import React, { useState } from "react";
import classes from '../styles/HomeContent.module.css'
import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button";
import MostPopularQuestions from "./MostPopularQuestions";

function HomeContent() {
  const [searchValue, setSearchValue] = useState('')

  const searchInput = (e) => {setSearchValue(e.target.value)}
  const forSearch = (e) => {
    e.preventDefault();
  }

  return (
    <div className={classes.HomeContent}>
      <h1 className={classes.title}>Задать вопрос</h1>
      <form className={classes.searchBar} onSubmit={forSearch}>
        <Input 
        type="text"
        placeholder="Введите интересуещий вопрос"
        required={false}
        value={searchValue}
        onChange={searchInput}
        currentClass="searchBar"
        />
        <Button 
          type="submit"
          currentClass="searchBar"
          placeholder="На поиски"
        />
      </form>
      <MostPopularQuestions />
    </div>
  )
}

export default HomeContent;