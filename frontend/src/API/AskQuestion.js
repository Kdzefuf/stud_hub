import APIClient from "./APIClient";

/**
 * Класс, предоставляющий API для отправки вопросов.
 * @class AskQuestion
 */
class AskQuestionApi {
  /**
   * Отправляет вопрос на сервер.
   * @function
   * @async
   * @static
   * @param {object} questionData - Объект с данными вопроса.
   * @param {string} questionData.topic - Тема вопроса.
   * @param {string} questionData.questionText - Текст вопроса.
   * @param {string} questionData.category - Категория вопроса.
   * @returns {Promise<object>} Ответ сервера.
   * @throws {Error} В случае ошибки выводит сообщение в консоль.
   * @example
   * const response = await AskQuestion.submitQuestion({
   *   topic: 'Как использовать API?',
   *   questionText: 'Как отправлять запросы в API с помощью fetch?',
   *   category: 'Программирование',
   * });
   */
  static async askQuestion(questionData) {
    try {
      const response = await APIClient.post("/questions", questionData);
      return response.data;
    } catch (e) {
      console.error("Ошибка при отправке вопроса:", e);
      throw new Error("Не удалось отправить вопрос.");
    }
  }
}

export default AskQuestionApi;
