import React from "react";
import Header from "../components/Header.jsx";
import QuestionsContent from "../components/QuestionsContent";

function Questions() {
  return (
    <div  className="page">
      <Header Header="header" isAccordion={true} isLogo={true} isProfileLink={true}/>
      <QuestionsContent />
    </div>
  )
}

export default Questions;