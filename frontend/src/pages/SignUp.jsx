import React, { useState } from "react";
import Header from "../components/Header.jsx";
import Input from "../components/UI/Input/Input.jsx";
import Button from "../components/UI/Button/Button.jsx";
import UserSignUp from "../API/UserSignUp.js";
import classes from '../styles/Sign.module.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  // const emailRegex = /[a-zA-Z]/
  // //^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // const nameRegex = /^[A-Za-zА-Яа-яЁё]{2,}$/;
  // const nicknameRegex = /^[a-zA-Z0-9_]{3,16}$/;
  // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const changeEmail = (e) => {
    // if (emailRegex.test(e.target.value)) {
      setEmail(e.target.value);
    // }
  };
  const changeName = (e) => {
    // if (nameRegex.test(e.target.value)) {
      setName(e.target.value);
    // }
  };
  const changeSurname = (e) => {
    // if (nameRegex.test(e.target.value)) {
      setSurname(e.target.value);
    // }
  };
  const changeNickname = (e) => {
    // if (nicknameRegex.test(e.target.value)) {
      setNickname(e.target.value);
    // }
  };
  const changePassword = (e) => {
    // if (passwordRegex.test(e.target.value)) {
      setPassword(e.target.value);
    // }
  };

  const tryReg = async (e) => {
    e.preventDefault();

    // Проверка на валидность данных перед отправкой
    // if (
    //   emailRegex.test(email) &&
    //   nameRegex.test(name) &&
    //   nameRegex.test(surname) &&
    //   nicknameRegex.test(nickname) &&
    //   passwordRegex.test(password)
    // ) {
      try {
        const response = await UserSignUp.register(email, password, name, surname, nickname); // Используем метод UserSignUp.register

        if (response) {
          alert('Регистрация прошла успешно!');
          localStorage.setItem('userData', JSON.stringify({ email, name, surname, nickname, password }));
          setEmail('');
          setName('');
          setSurname('');
          setNickname('');
          setPassword('');
          window.location.assign('/');
        } else {
          alert('Ошибка при регистрации');
        }
      } catch (error) {
        console.error('Ошибка при запросе:', error);
        alert('Ошибка при регистрации');
      }
    // } else {
    //   alert('Пожалуйста, проверьте правильность введенных данных.');
    // }
  };

  return (
    <div className="page">
      <Header Header="sighFormHeader" isAccordion={false} isLogo={true} isProfileLink={false} />
      <form onSubmit={tryReg} className={classes.signInForm}>
        <h1 className={classes.title}>Регистрация</h1 >
        <p className={classes.descr}>Уже есть учетная запись? <a className={classes.link} href="/sign_in">Войти в систему</a></p>
        <Input type="email" placeholder="Адрес электронной почты" currentClass="formInput" value={email} onChange={changeEmail} required={true} id="email"/>
        <Input type="text" placeholder="Имя" currentClass="formInput" value={name} onChange={changeName} required={true} id="name"/>
        <Input type="text" placeholder="Фамилия" currentClass="formInput" value={surname} onChange={changeSurname} required={true} id="surname"/>
        <Input type="text" placeholder="Имя пользователя" currentClass="formInput" value={nickname} onChange={changeNickname} required={true} id="nickname"/>
        <Input type="password" placeholder="Пароль" currentClass="formInput" value={password} onChange={changePassword} required={true} id="password"/>
        <Button type="submit" placeholder="Зарегистрироваться" currentClass="formButton" />
      </form>
    </div>
  )
}

export default SignUp;