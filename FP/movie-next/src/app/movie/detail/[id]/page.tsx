'use client'
import React,{ useEffect } from "react"
import axios from "axios";
import useMovieStore from "@/store/movieStore";


export default function Page({ params }: { params: { id: number } }) {
    const movieDetail = useMovieStore((state:any) => state.movieDetail)
    const setMovieDetail = useMovieStore((state:any) => state.setMovieDetail)
    // console.log(params)
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/movies/${params.id}/`)
          .then((res) => {
            console.log(res.data)
            setMovieDetail(res.data)
          })
          .catch(err => {
            console.log(err);
          });
      }, [params]);
    return (
        <div>{params.id}번 : {movieDetail.title} </div>
    )
  }