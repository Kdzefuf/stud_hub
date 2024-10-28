import React, { useState } from "react";
import Header from "../components/Header.jsx";
import Input from "../components/UI/Input/Input.jsx";
import Button from "../components/UI/Button/Button.jsx";
import UserSignIn from "../API/UserSignIn.js";
import classes from '../styles/Sign.module.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const tryLogin = async (e) => {
    e.preventDefault();

    // if (emailRegex.test(email) && passwordRegex.test(password)) {
      try {
        const response = await UserSignIn.login(email, password); // Используем метод UserSignIn.login
        
        if (response) {
          alert('Вход успешно выполнен!');
          setEmail('');
          setPassword('');
        } else {
          alert('Ошибка при входе');
        }
      } catch (error) {
        console.error('Ошибка при запросе:', error);
        alert('Ошибка при входе');
      }
    // } else {
    //   alert('Пожалуйста, проверьте правильность введенных данных.');
    // }
  };

  return (
    <div className="page">
      <Header Header="sighFormHeader" isAccordion={false} isLogo={true} isProfileLink={false} />
      <form onSubmit={tryLogin} className={classes.signInForm}>
        <h1 className={classes.title}>Войти</h1>
        <p className={classes.descr}>Еще нет учетной записи? <a className={classes.link} href="/sign_up">Зарегистрироваться</a></p>
        <Input
          type="email"
          placeholder="Адрес электронной почты"
          currentClass="formInput"
          value={email}
          onChange={changeEmail}
          required={true}
          id="email"
        />
        <Input
          type="password"
          placeholder="Пароль"
          currentClass="formInput"
          value={password}
          onChange={changePassword}
          required={true}
          id="password"
        />
        <Button type="submit" placeholder="Войти" currentClass="formButton" />
      </form>
    </div>
  );
}

export default SignIn;