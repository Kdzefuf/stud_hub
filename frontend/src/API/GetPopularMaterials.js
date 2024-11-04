import APIClient from "./APIClient";
import PopularMaterialsStubs from "./stubs/PopularMaterialsStubs";

/**
 * Класс, предоставляющий API для получения данных о популярных учебных материалах.
 * @class GetPopularMaterials
 */
class GetPopularMaterials {
  /**
   * Получает список самых популярных учебных материалов.
   * @function
   * @async
   * @static
   * @returns {Promise<object>} Объект, содержащий данные о популярных учебных материалах.
   * @throws {Error} В случае ошибки выводит сообщение в консоль.
   * @example
   * const popularMaterials = await GetPopularMaterials.getPopularMaterials();
   */
  static async getPopularMaterials() {
    try {
      const response = await APIClient.get('/popularMaterials');
      return response.data;
    }
    catch (e) {
      console.error(e);
      return PopularMaterialsStubs; // Закомментировано для обработки ошибок
    }
  }
}

export default GetPopularMaterials;
