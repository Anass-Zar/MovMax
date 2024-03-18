import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import All_Movies from './components/all-movies';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/movies" element={<All_Movies/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
