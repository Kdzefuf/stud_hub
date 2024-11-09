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

  const changeEmail = (e) => { setEmail(e.target.value) };
  const changeName = (e) => { setName(e.target.value) };
  const changeSurname = (e) => { setSurname(e.target.value) };
  const changeNickname = (e) => { setNickname(e.target.value) };
  const changePassword = (e) => { setPassword(e.target.value) };

  const tryReg = async (e) => {
    e.preventDefault();

      try {
        const response = await UserSignUp.register(email, password, name, surname, nickname); // Используем метод UserSignUp.register

        if (response) {
          alert('Регистрация прошла успешно!');
          localStorage.setItem('userData', JSON.stringify(response.id ));
          window.location.assign('/');
        } else {
          alert('Ошибка при регистрации, попробуй еще раз');
        }
      } catch (error) {
        console.error('Ошибка при запросе:', error);
        alert('Ошибка при регистрации');
      }
  };

  return (
    <div className="page">
      <Header Header="sighFormHeader" isAccordion={false} isLogo={true} isProfileLink={false} />
      <form onSubmit={tryReg} className={classes.signInForm}>
        <h1 className={classes.title}>Регистрация</h1 >
        <p className={classes.descr}>Уже есть учетная запись? <a className={classes.link} href="/sign_in">Войти в систему</a></p>
        <Input type="email" placeholder="Адрес электронной почты" currentClass="formInput" value={email} onChange={changeEmail} required={true} id="email"/>
        <Input type="text" placeholder="Имя пользователя" currentClass="formInput" value={nickname} onChange={changeNickname} required={true} id="nickname"/>
        <Input type="text" placeholder="Имя" currentClass="formInput" value={name} onChange={changeName} required={true} id="name"/>
        <Input type="text" placeholder="Фамилия" currentClass="formInput" value={surname} onChange={changeSurname} required={true} id="surname"/>
        <Input type="password" placeholder="Пароль" currentClass="formInput" value={password} onChange={changePassword} required={true} id="password"/>
        <Button type="submit" placeholder="Зарегистрироваться" currentClass="formButton" />
      </form>
    </div>
  )
}

export default SignUp;