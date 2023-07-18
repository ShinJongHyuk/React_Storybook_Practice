import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './components/Main';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import ReviewCreate from './components/ReviewCreate';

function App() {
  return (
    <Router>
    <div className="App">
      <Link to="/movie">영화목록</Link>

      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/movie" element={<MovieList/>}/>
        <Route path="/movie/:movie_Id" element={<MovieDetail/>}/>
        <Route path="/movie/:movie_Id/reviews" element={<ReviewCreate/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
