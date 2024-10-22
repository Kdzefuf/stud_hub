import React from "react";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";
import '../styles/App.css'

/**
   * @todo вернуть все как было
   */
function Home() {
  return (
    <div className="page">
      <Header isHome={true} />
      <HomeContent />
    </div>
  )
}

export default Home;