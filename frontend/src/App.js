import React, { useEffect, useState } from "react";
import LoginService from "./API/LoginService";
import Login from "./pages/Login";

function App() {
  const [usersData, SetUsersData] = useState([])

  useEffect(() => {
    getUsersInfo()
    console.log("Функция отработала")
  }, [])

  async function getUsersInfo() {
    const response = await axios;
    SetUsersData(response)
    console.log(response)
  }

  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;
