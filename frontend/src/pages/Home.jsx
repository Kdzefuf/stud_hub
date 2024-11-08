import React from "react";
import Header from "../components/Header.jsx";
import '../styles/App.css'

function Home() {
  return (
    <div className="page">
      <Header Header='header' isProfileLink={true}/>
      {/* <QuestionsContent /> */}
    </div>
  )
}

export default Home;