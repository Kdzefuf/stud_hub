import APIClient from "./APIClient";

/**
 * Класс, предоставляющий API для добавления просмотра на вопрос.
 * @class PutViews
 */
class PutViews {
  /**
   * Увеличивает количество просмотров для указанного вопроса на основе его ID.
   * @function
   * @async
   * @static
   * @param {string} questionId - ID вопроса.
   * @returns {Promise<boolean>} true, если просмотр успешно добавлен, иначе false.
   * @throws {Error} В случае ошибки выводит сообщение в консоль.
   * @example
   * const isViewAdded = await PutViews.addViewToQuestion('question123');
   */
  static async addViewToQuestion(questionId) {
    try {
      const response = await APIClient.put(`views/${questionId}`);
      if (response.status === 200) return true;
      return false;
    } catch (e) {
      console.error(e);
    }
  }
}

export default PutViews;
