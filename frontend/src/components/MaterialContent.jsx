import React, { useState, useEffect } from "react";
import GetMaterial from "../API/GetMaterial.js";
import images from './UI/Images/images.js'
import classes from '../styles/MaterialContent.module.css';
import Rating from './UI/Rating/Rating.jsx';
import Reviews from './UI/Reviews/Reviews.jsx';

function MaterialContent({ id }) {
  const [materialData, setMaterialData] = useState({});
  const [date, setDate] = useState('');
  const [name, setName] = useState('Дефолт');
  id = Number(id);

  function formatUnixToDate(unixTime) {
    console.log(unixTime);
    const dateObj = new Date(Number(unixTime));
    const day = dateObj.getDate()
    const month = dateObj.getMonth() + 1
    const year = dateObj.getFullYear();
    setDate(`${day}.${month}.${year}`);
  }
  
  useEffect(() => {
    formatUnixToDate(id);
    const fetchMaterialData = async () => {
      const data = await GetMaterial.getMaterial(id);
      setMaterialData(data);
      setName(data.name)
    };

    fetchMaterialData();
  }, [id]);

  const handleDownload = async () => {
    if (materialData.file) {
      try {
        // Получаем файл с сервера
        const response = await fetch(`http://localhost:3500/uploads/${materialData.file}`);
        const blob = await response.blob();
  
        // Создаём ссылку для скачивания
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob); // Генерируем URL для Blob
        link.download = `${name}.${materialData.file_type}`; // Устанавливаем новое имя файла
        link.click(); // Симулируем клик для скачивания
      } catch (error) {
        alert('Ошибка при скачивании файла');
      }
    } else {
      alert('Файл не найден');
    }
  };
  

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <img src={images[String(materialData.file_type).toUpperCase()]} alt="Профиль отзыв" className={classes.profile}/>
        <div>
          <h3 className={classes.title}>{materialData.name}</h3>
          <p lassName={classes.descr}>{materialData.description}</p>
        </div>
        <Rating rating={materialData.rating}/>
        <p className={classes.date}>{date}, просмотров: {materialData.views_count}</p>
      </div>
      <Reviews id={id}/>
      <button onClick={handleDownload}>Скачать</button>
    </div>
  );
}

export default MaterialContent;
