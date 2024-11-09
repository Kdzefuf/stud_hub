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

  const [nickname, setNickname] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    
    if (changes.length === 0) {
      alert("Поля не изменены, попробуйте еще раз");
    } else {
      setForChange(changes);

      if (await PutUsersData.updateUser(userData.id, changes)) {
        alert('Данные изменились')
        fetchUserData(userData.id)
      } else {
        alert('Ошибка при изменении данных')
      }

      
      setNickname('');
      setName('');
      setSurname('');
      setEmail('');
      setPassword('');
    }
  };

  const fetchUserData = async (userId) => {
    const data = await GetUserInfo.getUserInfo(userId);
    setUserData(data);
    fetchInputData(data);
  };

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData) {
      fetchUserData(storedUserData);
    }
  }, []);

  

  const handleNicknameChange = (event) => { setNickname(event.target.value); };
  const handleNameChange = (event) => { setName(event.target.value); };
  const handleSurnameChange = (event) => { setSurname(event.target.value); };
  const handleEmailChange = (event) => { setEmail(event.target.value); };
  const handlePasswordChange = (event) => { setPassword(event.target.value); };

  const [inputName, setInputName] = useState('');
  const [inputNickname, setInputNickname] = useState('');
  const [inputSurname, setInputSurname] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  const fetchInputData = usersPlaceholder => {
    console.log(usersPlaceholder)
    setInputName(usersPlaceholder.name);
    setInputNickname(usersPlaceholder.nickname);
    setInputSurname(usersPlaceholder.surname);
    setInputEmail(usersPlaceholder.email);
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.title} >{`Профиль`}</h2>
      <Button currentClass="profileButton">
        <img className={classes.imgProfile} src={profile} alt="Аватарка"/>
        <img className={classes.imgPen} src={pen} alt="редактировать профиль"/>
      </Button >
      <form className={classes.changeForm} onSubmit={change}>
        <div className={classes.labelGroup}>
          <h3 className={classes.labelTitle}>Имя<sup>*</sup></h3>
          <Input placeholder={inputName} type="text" currentClass="profileInput" value={name} onChange={handleNameChange} required={false} />
        </div>
        <div className={classes.labelGroup}>
          <h3 className={classes.labelTitle}>Имя пользователя<sup>*</sup></h3>
          <Input placeholder={inputNickname} type="text" currentClass="profileInput" value={nickname} onChange={handleNicknameChange} required={false} />
        </div>
        <div className={classes.labelGroup}>
          <h3 className={classes.labelTitle}>Фамилия<sup>*</sup></h3>
          <Input placeholder={inputSurname} type="text" currentClass="profileInput" value={surname} onChange={handleSurnameChange} required={false} />
        </div>
        <div className={classes.labelGroup}>
          <h3 className={classes.labelTitle}>Адрес электронной почты<sup>*</sup></h3>
          <Input placeholder={inputEmail} type="email" currentClass="profileInput" value={email} onChange={handleEmailChange} required={false} />
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