  import {create} from 'zustand'

  const useMovieStore = create((set) => ({
    movieData : [],
    setMovieData : (data:any) => set(() => ({movieData: data})),
    movieDetail: null,
    setMovieDetail : (data:any) => set(() => ({movieDetail : data}))
  }))
  

export default useMovieStore;