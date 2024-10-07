import React, { useState } from "react";
import SearchBar from "./components/UI/SearchBar/SearchBar";

function App() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      name: "Вопрос 1",
      author: "Автор 1",
      pageNumber: 1
    },
    {
      id: 2,
      name: "Вопрос 2",
      author: "Автор 2",
      pageNumber: 2
    },
    {
      id: 3,
      name: "Вопрос 3",
      author: "Автор 3",
      pageNumber: 3
    },
    {
      id: 4,
      name: "Вопрос 4",
      author: "Автор 4",
      pageNumber: 4
    }
  ])
   
    return (
      <div className="App">
          {questions.map(element => <SearchBar author={element.author} name={element.name} id={element.id} />)}
      </div>
    );
}

export default App;
