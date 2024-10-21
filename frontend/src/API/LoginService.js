import APIClient from "./APIClient";

/**
 * Класс содержащий API для получение данных о пользователе
 * @class
 */
class LoginService {
  /**
   * Функция возвращающая статус пользователя
   * @function
   * @async
   * @static
   * @author RedStrike_rf(https://github.com/RedStrikeRF)
   * @author Kdzefuf(https://github.com/Kdzefuf)
   * @borrows axios for HTTPrequests
   * @example getUserLoginStatus() - получение данных о пользователе
   * @returns {object} возвращает статус пользователя
   */
  static async getUserLoginStatus() {
    try {
      const response = await APIClient.get('/materials');
      return response.data;
    }
    catch(e) {
      console.log(e)
    }
  }
}

export default LoginService;