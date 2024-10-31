import React from "react";
import Header from "../components/Header";
import MaterialsContent from "../components/MaterialsContent";

function Materials() {

  return (
    <div className="page">
      <Header Header="header" isLogo={true} isProfileLink={true} isAccordion={true} />
      <MaterialsContent />
    </div>
  )
}

export default  Materials;