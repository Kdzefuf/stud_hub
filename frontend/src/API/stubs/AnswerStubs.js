const answerStubs = [
  {
    id: 1,
    text: "Это мой ответ на вопрос. Я считаю, что это лучший вариант решения проблемы.",
    author_name: "Иван Иванов",
    author_avatar: "default-avatar.png", // Здесь можно указать путь к изображению или использовать дефолтное изображение
    date: 1621248000000, // Пример времени в формате Unix (миллисекунды)
    likes_count: 5,
    dislikes_count: 0,
  },
  {
    id: 2,
    text: "Этот ответ тоже имеет смысл, но я бы предложил немного изменить подход.",
    author_name: "Алексей Смирнов",
    author_avatar: "default-avatar2.png", // Путь к другому изображению аватара
    date: 1621251600000, // Дата в формате Unix
    likes_count: 3,
    dislikes_count: 1,
  },
  {
    id: 3,
    text: "Мой опыт показывает, что этот подход наиболее эффективен в решении данной задачи.",
    author_name: "Мария Петрова",
    author_avatar: "default-avatar3.png",
    date: 1621255200000, // Дата в формате Unix
    likes_count: 7,
    dislikes_count: 0,
  },
];

export default answerStubs;
