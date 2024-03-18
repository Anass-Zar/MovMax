import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./navbar";
import "./all-movies.css"; 

function AllMovies() {
  const [moviesList, setMoviesList] = useState([]);
  const navigate = useNavigate();

  const getMovies = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/changes?api_key=c435c406dc58ffef2797ddab54ad2874");
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const movieIds = data.results.map((movie) => movie.id);
        fetchMovieDetails(movieIds);
      } else {
        console.error("No movie data found.");
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const fetchMovieDetails = async (movieIds) => {
    try {
      const movieDetails = await Promise.all(
        movieIds.map(async (id) => {
          const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c435c406dc58ffef2797ddab54ad2874`);
          return response.json();
        })
      );

      setMoviesList(movieDetails);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    getMovies();
  });

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <>
      <Navbar />
      <div className="movies-all">
        <div className="movie-container-all">
          {moviesList.map((movie) => (
            <div className="movie-all" key={movie.id} onClick={() => handleMovieClick(movie.id)}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-image-all"
              />
              <div className="movie-details-all">
                <p className="movie-title-all">{movie.title}</p>
                <p className="movie-release-date-all">{movie.release_date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AllMovies;
