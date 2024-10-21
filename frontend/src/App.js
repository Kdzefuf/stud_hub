import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import axios from "axios";
import APIClient from "./API/APIClient";
import Home from "./pages/Home";

function App() {
  const [usersData, SetUsersData] = useState([])

  useEffect(() => {
    getMaterials()
    console.log("Функция отработала")
  }, [])

  const getMaterials = async () => {
    try {
      const response = await APIClient.get('/materials');
      console.log('Полученные данные:', response.data);
    } catch (error) {
      console.error('Ошибка запроса:', error);
    }
  };

  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
