import React, { useEffect, useState, useRef } from "react";
import GetUserInfo from "../API/GetUserInfo";
import classes from '../styles/PersonalAccountContent.module.css';
import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button";

import profile from '../images/profile.svg'
import pen from '../images/pen.svg'
import PutUsersData from "../API/PutUsersData";

function PersonalAccountContent() {
  const [forChange, setForChange] = useState([]);
  const [userData, setUserData] = useState(null);
  const [Title, setTitle] = useState('');

  const [nickname, setNickname] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fetchUserData = async (userId) => {
    const data = await GetUserInfo.getUserInfo(userId);
    setUserData(data);

    setTitle(data.nickname);
  };

  useEffect(() => {
    // const storedUserData = JSON.parse(localStorage.getItem('userData'));
    // if (storedUserData && storedUserData.id) {
    
    //   fetchUserData(storedUserData.id);
    // }
    fetchUserData(111);
  }, []);


  const change = async (e) => {
    e.preventDefault();
    const changes = [];

    if (name !== userData.name) changes.push({ field: "name", value: name });
    if (nickname !== userData.nickname) changes.push({ field: "nickname", value: nickname });
    if (surname !== userData.surname) changes.push({ field: "surname", value: surname });
    if (email !== userData.email) changes.push({ field: "email", value: email });
    if (password !== userData.password) changes.push({ field: "password", value: password });

    if (changes.length === 0) {
      alert("Поля не изменены, попробуйте еще раз");
    } else {
      setForChange(changes);
      
      const updatedUserInfo = await PutUsersData.updateUser(userData.id, forChange);
      console.log("Изменённые поля:", changes);
      console.log("Обновлённая информация пользователя:", updatedUserInfo);
    }
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.title} >{`Профиль ${Title}'a`}</h2>
      <Button currentClass="profileButton">
        <img className={classes.imgProfile} src={profile} alt="Аватарка"/>
        <img className={classes.imgPen} src={pen} alt="редактировать профиль"/>
      </Button >
      <form className={classes.changeForm} onSubmit={change}>
        <div className={classes.labelGroup}>
          <h3 className={classes.labelTitle}>Имя<sup>*</sup></h3>
          <Input type="text" currentClass="profileInput" value={name} onChange={setName} required={false} />
        </div>
        <div className={classes.labelGroup}>
          <h3 className={classes.labelTitle}>Имя пользователя<sup>*</sup></h3>
          <Input type="text" currentClass="profileInput" value={nickname} onChange={setNickname} required={false} />
        </div>
        <div className={classes.labelGroup}>
          <h3 className={classes.labelTitle}>Фамилия<sup>*</sup></h3>
          <Input type="text" currentClass="profileInput" value={surname} onChange={setSurname} required={false} />
        </div>
        <div className={classes.labelGroup}>
          <h3 className={classes.labelTitle}>Адрес электронной почты<sup>*</sup></h3>
          <Input type="email" currentClass="profileInput" value={email} onChange={setEmail} required={false} />
        </div>
        <div className={classes.labelGroup}>
          <h3 className={classes.labelTitle}>Пароль<sup>*</sup></h3>
          <Input type="password" currentClass="profileInput" value={password} onChange={setPassword} required={false} />
        </div>
        <div className={classes.labelGroup}>
          <a className={classes.back} href="/" >На главную</a>
          <Button type="submit" currentClass="saveButton">Сохранить</Button>
        </div>
      </form>
    </div>
  )
}

export default PersonalAccountContent;