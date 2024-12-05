import React from "react";
import Header from "../components/Header.jsx";

function QuestionPage() {
  return (
    <div  className="page">
      <Header Header="header" isAccordion={true} isLogo={true} isProfileLink={true}/>
      <p>Тут будет инфа о вопросе</p>
    </div>
  )
}

export default QuestionPage;