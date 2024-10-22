import APIClient from "./APIClient";

/**
 * Класс содержащий API для получение данных о вопросах
 * @class
 */
class GetMaterials {
  /**
   * Функция возвращающая список самых вопросов
   * @function
   * @async
   * @static
   * @author RedStrike_rf(https://github.com/RedStrikeRF)
   * @author Kdzefuf(https://github.com/Kdzefuf)
   * @borrows axios for HTTPrequests
   * @example getMaterials() - получение данных о списке вопросов
   * @returns {object} возвращает статус пользователя
   */
  static async getMaterials() {
    try {
      const response = await APIClient.get('/material');
      return response.data;
    }
    catch(e) {
      console.log(e)
    }
  }
}

export default GetMaterials;