import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./movies-listes.css";

function Movies_PlayingNow() {
  const [moviesList, setMoviesList] = useState([]);
  const movieContainerRef = useRef(null);
  const navigate = useNavigate();

  const getMovies = () => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=c435c406dc58ffef2797ddab54ad2874`)
      .then((res) => res.json())
      .then((json) => setMoviesList(json.results))
      .catch((error) => console.error("Error fetching movies:", error));
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  const scroll = (direction) => {
    const container = movieContainerRef.current;
    const scrollAmount = 650;
    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else if (direction === "right") {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="movies">
      <button className="scroll-button scroll-left" onClick={() => scroll("left")}>
        {"<"}
      </button>
      <div className="movie-container" ref={movieContainerRef}>
        {moviesList.map((movie) => (
          <div className="movie" key={movie.id} onClick={() => handleMovieClick(movie.id)}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="movie-image" />
            <div className="movie-details">
              <p className="movie-title">{movie.title}</p>
              <p className="movie-release-date">{movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="scroll-button scroll-right" onClick={() => scroll("right")}>
        {">"}
      </button>
    </div>
  );
}

export default Movies_PlayingNow;
