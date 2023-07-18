import React, { useEffect } from 'react';
import useReviewStore from '../store/ReviewStore';
import axios from 'axios';
function ReviewItem({movieId}) {
    const ReviewData = useReviewStore((state) => state.ReviewData)
    const setReviewData = useReviewStore((state) => state.setReviewData)

    useEffect(() => {
        axios({
            method: 'get',
            url: `http://127.0.0.1:8000/movies/${movieId}/reviews/`
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    },[ReviewData])

    return (
        <div>
            {movieId}번 영화에 대한 모든 리뷰
        </div>
    );
}

export default ReviewItem;