import React, { useEffect, useState } from "react";
import Menu from "./UI/Menu/Menu";
import Logo from "./UI/Logo/Logo";
import ProfileLink from "./UI/ProfileLink/ProfileLink";
import styles from '../styles/header.module.css'

function Header(props) {
  const shouldRender = {
    ProfileLink: props.isProfileLink
  };

  return (
    <header className={styles[props.Header]}>
      <Menu />
      <Logo />
      {shouldRender.ProfileLink && <ProfileLink />}
    </header>
  )
}

export default Header;