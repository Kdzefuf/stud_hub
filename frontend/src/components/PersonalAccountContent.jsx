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
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData) {
      fetchUserData(storedUserData);
    }
  }, []);


  const change = async (e) => {
    e.preventDefault();
    const changes = [];

    changes.push((nickname !== userData.nickname && nickname !== "") ? nickname : userData.nickname);
    changes.push((name !== userData.name && name !== "") ? name : userData.name);
    changes.push((email !== userData.email && email !== "") ? email : userData.email);
    changes.push((password !== userData.password && password !== "") ? password : userData.password);
    changes.push('')
    changes.push('')
    changes.push((surname !== userData.surname && surname !== "") ? surname : userData.surname);
    // changes.push(userData.id)
    if (changes.length === 0) {
      alert("Поля не изменены, попробуйте еще раз");
    } else {
      setForChange(changes);

      const updatedUserInfo = await PutUsersData.updateUser(userData.id, changes);
      console.log("Изменённые поля:", changes);
      console.log("Обновлённая информация пользователя:", updatedUserInfo);
    }
  };

  const handleNicknameChange = (event) => { setNickname(event.target.value); };
  const handleNameChange = (event) => { setName(event.target.value); };
  const handleSurnameChange = (event) => { setSurname(event.target.value); };
  const handleEmailChange = (event) => { setEmail(event.target.value); };
  const handlePasswordChange = (event) => { setPassword(event.target.value); };

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
          <Input type="text" currentClass="profileInput" value={name} onChange={handleNameChange} required={false} />
        </div>
        <div className={classes.labelGroup}>
          <h3 className={classes.labelTitle}>Имя пользователя<sup>*</sup></h3>
          <Input type="text" currentClass="profileInput" value={nickname} onChange={handleNicknameChange} required={false} />
        </div>
        <div className={classes.labelGroup}>
          <h3 className={classes.labelTitle}>Фамилия<sup>*</sup></h3>
          <Input type="text" currentClass="profileInput" value={surname} onChange={handleSurnameChange} required={false} />
        </div>
        <div className={classes.labelGroup}>
          <h3 className={classes.labelTitle}>Адрес электронной почты<sup>*</sup></h3>
          <Input type="email" currentClass="profileInput" value={email} onChange={handleEmailChange} required={false} />
        </div>
        <div className={classes.labelGroup}>
          <h3 className={classes.labelTitle}>Пароль<sup>*</sup></h3>
          <Input type="password" currentClass="profileInput" value={password} onChange={handlePasswordChange} required={false} />
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