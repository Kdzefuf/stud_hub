import APIClient from "./APIClient";
import MaterialStubs from "./stubs/MaterialStubs.js";

/**
 * Класс, предоставляющий API для получения данных о конкретном учебном материале.
 * @class GetMaterial
 */
class GetMaterial {
  /**
   * Получает данные о конкретном учебном материале.
   * @function
   * @async
   * @static
   * @param {string} id - Идентификатор учебного материала.
   * @returns {Promise<object>} Объект, содержащий данные о конкретном учебном материале.
   * @throws {Error} В случае ошибки выводит сообщение в консоль.
   * @example
   * const material = await GetMaterial.getMaterial('123');
   */
  static async getMaterial(id) {
    try {
      const response = await APIClient.get(`/material/${id}`);
      return response.data;
    } catch (e) {
      console.error(e);
      return MaterialStubs[0]; // Закомментировано для обработки ошибок
    }
  }
}

export default GetMaterial;
