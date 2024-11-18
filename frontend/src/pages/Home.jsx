import React, {useState} from "react";
import Header from "../components/Header.jsx";
import '../styles/App.css'
import classes from '../styles/QuestionsContent.module.css'
import Input from "../components/UI/Input/Input";
import Button from "../components/UI/Button/Button";
function Home() {
  const [searchValue, setSearchValue] = useState('')

  const searchInput = (e) => {setSearchValue(e.target.value)}
  const forSearch = (e) => {
    e.preventDefault();
    
    window.location.assign('/askQuestion')
  }

  return (
    <div className="page">
      <Header Header='header' isProfileLink={true}/>
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
    </div>
    </div>
  )
}

export default Home;