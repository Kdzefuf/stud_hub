import APIClient from "./APIClient";
import PopularQuestionsStubs from "./stubs/PopularQuestionsStubs";

/**
 * Класс, предоставляющий API для получения данных о популярных вопросах.
 * @class GetPopularQuestions
 */
class GetPopularQuestions {
  /**
   * Получает список самых популярных вопросов.
   * @function
   * @async
   * @static
   * @returns {Promise<object>} Объект, содержащий данные о популярных вопросах.
   * @throws {Error} В случае ошибки выводит сообщение в консоль.
   * @example
   * const popularQuestions = await GetPopularQuestions.getPopularQuestions();
   */
  static async getPopularQuestions() {
    try {
      const response = await APIClient.get('/popularQuestions');
      return response.data;
    }
    catch (e) {
      console.error(e);
      return PopularQuestionsStubs; // Закомментировано для обработки ошибок
    }
  }
}

export default GetPopularQuestions;
