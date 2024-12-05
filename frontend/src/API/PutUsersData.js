import APIClient from "./APIClient";

/**
 * Класс, предоставляющий API для обновления информации о пользователе.
 * @class PutUsersData
 */
class PutUsersData {
  /**
   * Обновляет информацию о пользователе на основе предоставленного ID и данных.
   * @function
   * @async
   * @static
   * @param {string} id - ID пользователя.
   * @param {object} changes - Объект с изменениями данных пользователя.
   * @returns {Promise<object>} Объект, содержащий обновлённые данные пользователя.
   * @throws {Error} В случае ошибки возвращает ошибку или выводит сообщение в консоль.
   * @example
   * const updatedUserInfo = await PutUsersData.updateUser('user123', { name: 'New Name', email: 'newemail@example.com' });
   */
  static async updateUser(id, changes) {
    try {
      const response = await APIClient.put(`/users/${id}`, changes);
      if (response.status === 200) return true
      return false;
    } catch (e) {
      console.error(e);
    }
  }

  static async updateUserAvatar(id, avatar) {
    try {
      const response = await APIClient.put(`/users/avatar/${id}`, avatar);
      if (response.status === 200) return response
      return false;
    } catch (e) {
      console.error(e);
    }
  }
}

export default PutUsersData;
