import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import axios from "axios";

function App() {
  const [usersData, SetUsersData] = useState([])

  useEffect(() => {
    getMaterials()
    console.log("Функция отработала")
  }, [])

  const apiClient = axios.create({
    baseURL: 'http://localhost:3500/api',
    timeout: 100000,
  });

  const getMaterials = async () => {
    try {
      const response = await apiClient.get('/materials');
      console.log('Полученные данные:', response.data);
    } catch (error) {
      console.error('Ошибка запроса:', error);
    }
  };

  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;
