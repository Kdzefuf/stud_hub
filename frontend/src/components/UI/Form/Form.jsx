import React, { useState } from "react";
import styles from './Form.module.css'; // Подключаем стили для формы

const Form = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    description: "",
    file: null,
  });

  // Обработчик изменения поля с текстом
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Обработчик изменения поля для файла
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      file: file,
    }));
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    const formToSend = new FormData();

    // Добавляем описание из данных формы
    formToSend.append("description", formData.description);

    // Получаем файл из формы
    const file = formData.file;

    // Добавляем файл, если он существует, иначе отправляем null
    formToSend.append("file", file ? file : null);

    // Передаем данные в родительский компонент для отправки на сервер
    onSubmit(formToSend);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Ваш ответ..."
              required
              className={styles.textarea}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              className={styles.fileInput}
            />
          </div>
          <div className={styles.buttons}>
            <button type="submit" className={styles.submitButton}>Отправить</button>
            <button type="button" onClick={onClose} className={styles.cancelButton}>Отмена</button>
          </div>
        </form>
        <button className={styles.closeButton} onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default Form;
