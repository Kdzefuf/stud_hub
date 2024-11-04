import React from "react";
import Header from "../components/Header";
import PersonalAccountContent from "../components/PersonalAccountContent";

function PersonalAccount() {
  return (
    <div className="page">
      <Header Header="sighFormHeader" isProfileLink={false} />
      <PersonalAccountContent />
    </div>
  )
}

export default PersonalAccount;