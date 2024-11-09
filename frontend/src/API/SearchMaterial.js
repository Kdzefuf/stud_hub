import APIClient from "./APIClient";

/**
 * Класс содержащий API для выполнения операций, связанных с поиском материалов
 * @class
 */
class SearchMaterial {
  /**
   * Функция для поиска материалов
   * @function
   * @async
   * @static
   * @param {string} query - Строка поиска
   * @returns {object|null} Возвращает результаты поиска при успешном запросе, иначе null
   * @throws Выбрасывает ошибку в случае неудачного запроса
   * @example
   * SearchAPI.searchMaterials(query)
   *    .then(data => console.log(data))
   *    .catch(err => console.error(err));
   */
  static async searchMaterial(query) {
    try {
      const response = await APIClient.get('/searchMaterials', {
        params: { query }
      });

      if (response.status === 200) {
        return response.data;
      } else {
        console.error('Не удалось выполнить поиск. Статус:', response.status);
        return null;
      }
    } catch (error) {
      console.error('Ошибка при выполнении поиска:', error);
      throw error;
    }
  }
}

export default SearchMaterial;
