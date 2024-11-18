import React from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom"; 
import MaterialContent from "../components/MaterialContent";

function MaterialPage() {
  const { id } = useParams();

  return (
    <div className="page">
      <Header Header='header' isProfileLink={true}/>
      <MaterialContent id={id}/>
    </div>
  )
}

export default MaterialPage;