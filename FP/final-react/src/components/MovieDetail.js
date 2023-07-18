import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReviewItem from './ReviewItem';

function MovieDetail(props) {
    const movieId = useParams().movie_Id
   
    return (
        <div>
            <Link to={`/movie/${movieId}/reviews`}>
            <p>영화 디테일 {movieId}</p>
            </Link>
            <ReviewItem movieId={movieId}/>
        </div>
    );
}

export default MovieDetail;