import React from "react";
import Header from "../components/Header.jsx";
import QuestionsContent from "../components/QuestionsContent";
import '../styles/App.css'

function Home() {
  return (
    <div className="page">
      <Header Header='header' isAccordion={true} isProfileLink={true} isLogo={true}/>
      {/* <QuestionsContent /> */}
    </div>
  )
}

export default Home;