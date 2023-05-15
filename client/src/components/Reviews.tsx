import React, { useEffect, useState } from 'react'
import ReviewCard from './ReviewCard'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const params = useParams();


  useEffect(() => {
    (async () => {
      console.log(params.id);
      let prodReviews = await axios.get(`https://localhost:8000/review/product/${params.id}`)
      setReviews(prodReviews?.data?.data);
    })();
  }, [])


  return (
    <div className='reviews'>
      {reviews.map((review) => <ReviewCard review={review} />)}
    </div>
  )
}