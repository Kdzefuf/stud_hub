import React, { useEffect, useState } from 'react';
import GetReviews from '../../../API/GetMaterialRewiews';
import Review from '../Review/Review.jsx'

function Reviews({id}) {
  const [reviews, setReviews] = useState([]); // Состояние для хранения списка отзывов

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await GetReviews.getReviews(id);
      setReviews(data);
    }

    fetchReviews();
  }, []);

  return (
    <ul style={{ 
      width: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '30px', 
      flexWrap: 'nowrap' 
    }}>
      {reviews.length > 0 ? (
        reviews.map((review) => {
          return <Review review={review} />;
        })
      ) : (
        <p>Отзывов пока нет.</p>
      )}
    </ul>
  )
}

export default Reviews