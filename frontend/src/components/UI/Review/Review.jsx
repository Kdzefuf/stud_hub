import React, { useState, useEffect } from "react";
import classes from './Review.module.css'
import Rating from '../Rating/Rating.jsx'
import GetUserInfo from '../../../API/GetUserInfo.js'

import profile from '../../../images/profile.svg';
function Review(props) {
  const [nickname, setNickname] = useState(''); // Состояние для nickname
  const [avatar, setAvatar] = useState('');
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    setReviewData(props.review);
    console.log(reviewData.rating)
    const fetchUserInfo = async () => {
      try {
        const data = await GetUserInfo.getUserInfo(props.review.author_id); // Предполагаем, что userId передается как пропс
        
        if (data && data.nickname) {
          
          setNickname(data.nickname);
          setAvatar(data.photo !== null ? `http://localhost:3500/uploads/${data.photo}` : profile) // Записываем nickname в состояние
        }
      } catch (error) {
        console.error('Ошибка при получении данных пользователя:', error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <li className={classes.review}>
      <img src={avatar} alt="Профиль отзыв" className={classes.profile}/>
      <div className={classes.cont}>
        <h5 className={classes.title}>{nickname}</h5>
        <p className={classes.descr}>{reviewData.comment}</p>
      </div>
      <Rating rating={reviewData.rating} />
    </li>
  )
}

export default Review;