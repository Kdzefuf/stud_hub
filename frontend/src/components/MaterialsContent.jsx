import React, { useState } from "react";
import classes from '../styles/MaterialsContent.module.css'
import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button";
import MostPopularMaterials from "./MostPopularMaterials";

function MaterialsContent() {
  const [searchValue, setSearchValue] = useState('')

  const searchInput = (e) => {setSearchValue(e.target.value)}
  const forSearch = (e) => {
    e.preventDefault();
  }
  return (
    <div className={classes.container}>
      <div className={classes.QuestionsContent}>
      <h1 className={classes.title}>Найди нужным материал!</h1>
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
            placeholder="Найти"
          />
        </form>
      </div>
      <MostPopularMaterials />
    </div>

  )
}

export default MaterialsContent;