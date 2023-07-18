import { create } from 'zustand';

const useMovieStore = create((set) => {
  const storedMovieData = localStorage.getItem('movieData');
  const initialMovieData = storedMovieData ? JSON.parse(storedMovieData) : [];

  return {
    movieData: initialMovieData,
    setMovieData: (data) => {
      set(() => {
        localStorage.setItem('movieData', JSON.stringify(data));
        return { movieData: data };
      });
    },
  };
});

export default useMovieStore;
