import React, {useState, useRef} from 'react';
import classes from "../styles/DownloadMaterial.module.css";
import Header from "../components/Header";
import Button from '../components/UI/Button/Button';
import DownloadFileAPI from "../API/DownloadFileAPI.js";

import buttonImg from "../images/add-square.svg"

function DownoloadMaterial() {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState();
  const [topic, setTopic] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [category, setCategory] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [QuestionsCount, setQuestionsCount] = useState(0);
  const [AnswersCount, setAnswersCount] = useState(0);

  const categories = [
    "Программирование",
    "Дизайн",
    "Медицина",
    "Финансы",
    "Образование",
    "Спорт",
    "Технологии",
  ];

  // Фильтрация категорий
  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value);

    if (value) {
      const filtered = categories.filter((cat) =>
        cat.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCategories(filtered);
    } else {
      setFilteredCategories([]);
    }
  };

  // Обработка отправки формы
  const tryAsk = async (e) => {
    e.preventDefault();
    const formData = {
      author_id: localStorage.getItem('userData'),
      file,
      name: topic,
      description: questionText,
      tags: category,
      file_type: file.name.split('.').pop().toLowerCase()
    };
    
    if (Boolean(formData.name) & Boolean(formData.description) & Boolean(formData.tags) & Boolean(file))
      try {
        const responce = await DownloadFileAPI.uploadFile(formData);
        if (responce) {
          alert('Файл успешно загружен');
          window.location.assign(`/`);
        }
      } catch (error) {
        alert("Произошла ошибка при отправке файла. Попробуйте еще раз");
      }
    else alert('Одно из полей пустое, введи корректные значения')
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Эмулируем клик по input
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  return (
    <div className="page">
      <Header Header="header" isProfileLink={true} />
      <div className={classes.content}>
        <h2 className={classes.title}>Загрузи свой материал!</h2>
        <form onSubmit={tryAsk} className={classes.form}>
          <label className={classes.imgPenWrapper}>
            <input
              type="file"
              accept="image/*"
              className={classes.fileInput}
              onChange={handleAvatarChange}
              ref={fileInputRef}
            />
            <Button currentClass="fileInput" onClick={triggerFileInput}>
              <img className={classes.ButtonIMG} src={buttonImg} alt="file download"/>
              <p className={classes.ButtonText}>Загрузить</p>
            </Button>
          </label>
          
          {/* Поле для темы вопроса */}
          <label className={classes.label}>
            Название документа
            <textarea
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
              className={`${classes.askQuestion} ${classes.moders1}`}
            />
          </label>

          {/* Поле для текста вопроса */}
          <label className={classes.label}>
            Описание документа
            <textarea
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              required
              className={`${classes.askQuestion} ${classes.moders2}`}
            ></textarea>
          </label>

          {/* Поле для выбора категории */}
          <label className={classes.label}>
            Выбрать категорию
            <textarea
              type="text"
              value={category}
              onChange={handleCategoryChange}
              required
              className={`${classes.askQuestion} ${classes.moders3}`}
            />
            {filteredCategories.length > 0 && (
              <ul className={classes.dropdown}>
                {filteredCategories.map((cat, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setCategory(cat);
                      setFilteredCategories([]);
                    }}
                    className={classes.dropdownItem}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            )}
          </label>

          
          <Button type="submit" currentClass="formButton">
            Опубликовать вопрос
          </Button>
        </form>
      </div>
    </div>
  )
}

export default DownoloadMaterial;