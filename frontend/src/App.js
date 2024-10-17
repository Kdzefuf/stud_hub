import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import axios from "axios";

function App() {
  const [usersData, SetUsersData] = useState([])

  useEffect(() => {
    getUsersInfo()
    console.log("Функция отработала")
  }, [])

  async function getUsersInfo() {
    const response = await axios.get(`http://localhost:3000/users`);
    SetUsersData(response.data)
    console.log(response)
    console.log(response.data)
  }

  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;
