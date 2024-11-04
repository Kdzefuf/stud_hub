import APIClient from "./APIClient";
import PopularMaterialsStubs from "./stubs/PopularMaterialsStubs";
import userData from "./stubs/UsersDataStubs";

/**
 * Класс, предоставляющий API для получения информации о пользователе.
 * @class GetUserInfo
 */
class GetUserInfo {
  /**
   * Получает информацию о пользователе на основе предоставленного ID.
   * @function
   * @async
   * @static
   * @param {string} id - ID пользователя.
   * @returns {Promise<object>} Объект, содержащий данные пользователя.
   * @throws {Error} В случае ошибки возвращает ошибку или выводит сообщение в консоль.
   * @example
   * const userInfo = await GetUserInfo.getUserInfo('user123');
   */
  static async getUserInfo(id) {
    try {
      const response = await APIClient.post('/getUserInfo', {
        id // Используем ID
      });
      return response.data;
    } catch (e) {
      console.error(e);
      console.log(userData) // Возвращаем заглушки в случае ошибки
      return userData;
    }
  }
}

export default GetUserInfo;
