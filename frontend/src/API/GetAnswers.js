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
  static async getAnswer(id) {
    try {
      const response = await APIClient.get(`/answers/${id}`);
      return response.data;
    } catch (e) {
      console.error(e);
      return AnswerStubs[0]; // Закомментировано для обработки ошибок
    }
  }

  /**
   * Получает список ответов для конкретного вопроса.
   * @function
   * @async
   * @static
   * @param {string} questionId - Идентификатор вопроса, для которого нужно получить ответы.
   * @returns {Promise<Array>} Массив объектов с данными ответов.
   * @throws {Error} В случае ошибки выводит сообщение в консоль.
   * @example
   * const answers = await GetAnswers.getAnswersForQuestion('123');
   */
  static async getAnswersForQuestion(questionId) {
    try {
      const response = await APIClient.get(`/questions/${questionId}/answers`);
      return response.data;
    } catch (e) {
      console.error(e);
      return AnswerStubs; // Закомментировано для обработки ошибок
    }
  }
}

export default GetAnswers;
