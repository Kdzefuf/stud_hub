import React, { useEffect, useState } from "react";
import Accordion from "./UI/Accordion/Accordion";
import Logo from "./UI/Logo/Logo";
import ProfileLink from "./UI/ProfileLink/ProfileLink";
import styles from '../styles/header.module.css'

function Header(props) {
  const shouldRender = {
    Accordion: props.isAccordion,
    Logo: props.isLogo,
    ProfileLink: props.isProfileLink
  };

  return (
    <header className={styles[props.Header]}>
      {shouldRender.Accordion && <Accordion />}
      {shouldRender.Logo && <Logo />}
      {shouldRender.ProfileLink && <ProfileLink />}
      
    </header>
  )
}

export default Header;