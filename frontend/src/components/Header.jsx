import React, { useEffect, useState } from "react";
import Accordion from "./UI/Accordion/Accordion";
import Logo from "./UI/Logo/Logo";
import ProfileLink from "./UI/ProfileLink/ProfileLink";
import Navigation from "./UI/Navigation/Navigation";
import styles from '../styles/header.module.css'

function Header(props) {
  const [isHome, setIsHome] = useState(true)

  useEffect(() => {
    setIsHome(props.isHome)
  }, [])

  return (
    <header className={styles.header}>
      <Accordion />
      <Logo />
      {isHome && <Navigation />}
      <ProfileLink />
    </header>
  )
}

export default Header;