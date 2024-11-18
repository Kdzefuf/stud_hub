import React from "react";
import Input from "../Input/Input";


function Filters(props) {
  const [query, setFilteredQuery]

  return (
    <form className={classes.filters} >
      <h2>Сортировать {props.title} по:</h2>
      <Input type="radio" currentClass="radio" placeholder="Названию" onChange={}/>
      <Input type="radio" currentClass="radio" placeholder="Рейтингу" onChange={}/>
      <Input type="radio" currentClass="radio" placeholder="Количеству просмотров" onChange={}/>
      <Input type="radio" currentClass="radio" placeholder="Количестку оценок" onChange={}/>
      <Input type="radio" currentClass="radio" placeholder="По дате публикации" onChange={}/>
    </form>
  )
}

export default Filters;