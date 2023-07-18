import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ReviewCreate(props) {
    const movieId = useParams().movie_Id

    const [inputs, setInputs] = useState({
        title : '',
        content : ''
    })

    const onChange = (e) => {
        const {value, name} = e.target
        setInputs({
            ...inputs,
            [name] : value
        })
    }
    
    const CreateReview = (e) => {
        e.preventDefault()
        // axios.post(`http://127.0.0.1:8000/${movieId}/review/`)
        // .then(res => console.log(res))
        // .catch(err => console.log(err))
        axios({
            method: 'post',
            url: `http://127.0.0.1:8000/movies/${movieId}/reviews/`,
            data: {title, content}
        })
        .then((res) => {
            console.log(res)
        })
        .catch(err => console.log(err))         
    }

    const {title, content} = inputs
    return (
        <div>
            {movieId}번 영화
            <form onSubmit={CreateReview}>
            <input type="text" name="title" value={title} onChange={onChange} placeholder='제목'/>
            <input type="text" name="content" value={content} onChange={onChange} placeholder='내용'/>
            <input type="submit"/>
            </form>
        </div>
    );
}

export default ReviewCreate;