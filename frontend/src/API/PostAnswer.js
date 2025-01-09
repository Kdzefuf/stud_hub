import APIClient from "./APIClient"; // Ваш клиент API

class PostAnswer {
  static async submitAnswer(formData) {
    try {
      const response = await APIClient.post("/answers", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Убедитесь, что используете правильный тип контента для файлов
        },
      });
      return response.data; // Возвращаем ответ с сервера
    } catch (error) {
      console.error("Ошибка при отправке ответа:", error);
      throw error; // В случае ошибки выбрасываем исключение
    }
  }
}

export default PostAnswer;
