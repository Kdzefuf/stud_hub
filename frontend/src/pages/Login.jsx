import React, { useState } from 'react';
import Input from '../components/UI/Input/Input';
import Button from '../components/UI/Button/Button';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const passwordChange = (e) => {setPassword(e.target.value)}

  const emailChange = (e) => {setEmail(e.target.value)}

  const tryLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/users',
        {
          email,
          password
        }
      )
      
    }
    catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <form onSubmit={tryLogin}>
        <Input value={email} onChange={emailChange} currentClass="loginInput" id="name" required={true} placeholder="Введите имя" type="text"></Input>
        <Input value={password} onChange={passwordChange} currentClass="loginInput" id="password" required={true} placeholder="Введите пароль" type="password"></Input>
        <Button type="submit"></Button>
      </form>
    </div>
  )
}

export default Login;