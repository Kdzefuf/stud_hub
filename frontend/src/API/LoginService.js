import axios from "axios";

export default class LoginService {
  /**
   * Функция возвращающая статус пользователя
   * @function
   * @returns {string} возвращает статус пользователя
   */
  static async getUserLoginStatus() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      return response.data;
    }
    catch(e) {
      console.log(e)
    }
  }
}