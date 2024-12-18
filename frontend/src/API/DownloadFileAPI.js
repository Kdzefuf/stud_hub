import APIClient from "./APIClient";

/**
 * Класс, предоставляющий API для загрузки файлов.
 * @class DownloadFileAPI
 */
class DownloadFileAPI {
  /**
   * Отправляет файл на сервер.
   * @function
   * @async
   * @static
   * @param {object} fileData - Объект с данными файла.
   * @param {string} fileData.title - Название вопроса.
   * @param {string} fileData.description - Описание вопроса.
   * @param {string} fileData.category - Категория вопроса.
   * @param {File} fileData.file - Файл для загрузки.
   * @returns {Promise<object>} Ответ сервера.
   * @throws {Error} В случае ошибки выводит сообщение в консоль.
   */
  static async uploadFile(fileData) {
    try {
      const response = await APIClient.post("/materials", fileData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (e) {
      console.error("Ошибка при загрузке файла:", e);
      throw new Error("Не удалось загрузить файл.");
    }
  }
}

export default DownloadFileAPI;
