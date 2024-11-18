import React, { useState, useEffect } from "react";
import classes from './Review.module.css'
import img from '../../../images/profile.svg';
import Rating from '../Rating/Rating.jsx'
import GetUserInfo from '../../../API/GetUserInfo.js'

function Review(props) {
  const [nickname, setNickname] = useState(''); // Состояние для nickname
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    setReviewData(props.review);
    // const fetchUserInfo = async () => {
    //   try {
    //     const data = await GetUserInfo.getUserInfo(props.author_id); // Предполагаем, что userId передается как пропс
    //     if (data && data.nickname) {
    //       setNickname(data.nickname); // Записываем nickname в состояние
    //     }
    //   } catch (error) {
    //     console.error('Ошибка при получении данных пользователя:', error);
    //   }
    // };

    // fetchUserInfo();
  }, []);

  return (
    <li className={classes.review}>
      <img src={img} alt="Профиль отзыв" className={classes.profile}/>
      <div>
        <h5>{nickname}</h5>
        <p lassName={classes.descr}>{reviewData.comment}</p>
      </div>
      <Rating rating={reviewData.rating} />
    </li>
  )
}

export default Review;