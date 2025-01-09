import APIClient from "./APIClient";
import AnswerStubs from "./stubs/AnswerStubs.js"; // Вы можете заменить на свои данные или моки

/**
 * Класс, предоставляющий API для получения данных о конкретном ответе.
 * @class GetAnswers
 */
class GetAnswers {
  /**
   * Получает данные о конкретном ответе.
   * @function
   * @async
   * @static
   * @param {string} id - Идентификатор ответа.
   * @returns {Promise<object>} Объект, содержащий данные о конкретном ответе.
   * @throws {Error} В случае ошибки выводит сообщение в консоль.
   * @example
   * const answer = await GetAnswers.getAnswer('456');
   */

  static async getAnswerInfo(question_id) {
    try {
      const response = await APIClient.get(`/questions/${question_id}`, {params: {question_id}});
      
      return response.data;
    } catch (e) {
      console.error(e);
    }
  }

  static async getAnswers(question_id) {
    try {
      const response = await APIClient.get(`/answers/${question_id}`, {params: {question_id}});
      
      return response.data;
    } catch (e) {
      console.error(e);
    }
  }
}

export default GetAnswers;
