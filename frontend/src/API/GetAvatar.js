import APIClient from "./APIClient";

/**
 * Класс, предоставляющий API для получения аватара пользователя.
 * @class GetAvatar
 */
class GetAvatar {
  /**
   * Получает аватар пользователя с сервера.
   * @function
   * @async
   * @static
   * @param {string} userId - Идентификатор пользователя.
   * @returns {Promise<string>} URL изображения аватара пользователя.
   * @throws {Error} В случае ошибки выводит сообщение в консоль и возвращает путь к заглушке.
   * @example
   * const avatar = await GetAvatar.getAvatar('123');
   */
  static async getAvatar(userId) {
    try {
      const response = await APIClient.get(`/avatars/${userId}`);
      return response.data.avatarUrl; // Предполагается, что сервер возвращает объект с URL аватара
    } catch (e) {
      console.error(e);
      return "/images/avatar-placeholder.png"; // Возвращает путь к изображению-заглушке
    }
  }
}

export default GetAvatar;
