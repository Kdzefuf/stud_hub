import APIClient from "./APIClient";

/**
 * Класс содержащий API для выполнения операций, связанных с регистрацией пользователя
 * @class
 */
class UserSignUp {
  /**
   * Функция для регистрации пользователя в системе
   * @function
   * @async
   * @static
   * @param {string} email - Электронная почта пользователя
   * @param {string} password - Пароль пользователя
   * @returns {object|null} Возвращает данные пользователя при успешной регистрации, иначе null
   * @throws Выбрасывает ошибку в случае неудачного запроса
   * @example
   * UserSignUp.register(email, password)
   *    .then(data => console.log(data))
   *    .catch(err => console.error(err));
   */
  static async register(email, password, name, surname, nickname) {
    try {
      const response = await APIClient.post('/signup', {
        email,
        password,
        name,
        surname,
        nickname
      });

      if (response.status === 200) {
        localStorage.setItem('userData', JSON.stringify(response.data.id));
        return response.data;
      } else {
        console.error('Не удалось выполнить регистрацию. Статус:', response.status);
        return null;
      }
    } catch (error) {
      console.error('Ошибка при выполнении регистрации:', error);
      throw error;
    }
  }
}

export default UserSignUp;