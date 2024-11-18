import APIClient from "./APIClient";

/**
 * Класс, предоставляющий API для получения отзывов на учебный материал.
 * @class GetReviews
 */
class GetReviews {
  /**
   * Получает список отзывов на учебный материал.
   * @function
   * @async
   * @static
   * @param {Number} materialId - Идентификатор учебного материала.
   * @returns {Promise<Array>} Список отзывов на учебный материал.
   * @throws {Error} В случае ошибки выводит сообщение в консоль.
   * @example
   * const reviews = await GetReviews.getReviews('123');
   */
  static async getReviews(materialId) {
    try {
      console.log(materialId, typeof(materialId))
      const response = await APIClient.get(`/reviews/${materialId}`);
      return response.data; // Ожидаем, что сервер возвращает массив отзывов
    } catch (e) {
      console.error(`Ошибка при получении отзывов для материала с ID ${materialId}:`, e);
      return []; // Возвращаем пустой массив при ошибке
    }
  }
}

export default GetReviews;
