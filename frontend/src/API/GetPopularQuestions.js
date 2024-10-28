import APIClient from "./APIClient";
import PopularQuestionsStubs from "./stubs/PopularQuestionsStubs";

/**
 * Класс содержащий API для получение данных о пользователе
 * @class
 */
class GetPopularQuestions {
  /**
   * Функция возвращающая список самых популярных вопросов
   * @function
   * @async
   * @static
   * @author RedStrike_rf(https://github.com/RedStrikeRF)
   * @author Kdzefuf(https://github.com/Kdzefuf)
   * @borrows axios for HTTPrequests
   * @example getUserLoginStatus() - получение данных о пользователе
   * @returns {object} возвращает статус пользователя
   */
  static async getPopularQuestions() {
    try {
      const response = await APIClient.get('/popularQuestions');
      return response.data;
    }
    catch(e) {
      console.log(e);
      // return PopularQuestionsStubs;
    }
  }
}

export default GetPopularQuestions;