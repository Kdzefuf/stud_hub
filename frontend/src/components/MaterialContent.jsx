import React, { useState, useEffect } from "react";
import GetMaterial from "../API/GetMaterial.js";
import images from './UI/Images/images.js'
import classes from '../styles/MaterialContent.module.css';
import Rating from './UI/Rating/Rating.jsx';
import Reviews from './UI/Reviews/Reviews.jsx';

function MaterialContent({ id }) {
  const [materialData, setMaterialData] = useState({});
  const [date, setDate] = useState('');
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
    };

    fetchMaterialData();
  }, [id]);

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <img src={images[materialData.file_type]} alt="Профиль отзыв" className={classes.profile}/>
        <div>
          <h3 className={classes.title}>{materialData.name}</h3>
          <p lassName={classes.descr}>{materialData.description}</p>
        </div>
        <Rating rating={materialData.rating}/>
        <p className={classes.date}>{date}, просмотров: {materialData.views_count}</p>
      </div>
      <Reviews id={id}/>
    </div>
  );
}

export default MaterialContent;
