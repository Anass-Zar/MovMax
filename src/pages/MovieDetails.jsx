import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/navbar";
import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c435c406dc58ffef2797ddab54ad2874`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id]);

  const videoUrls = {
    1075794: "https://lylxan.com/e/aejqa78tucmu", 
    872585: "https://lylxan.com/e/bige0f0y2dcj", 
    383498: "https://fdewsdc.sbs/v/rjd6fhx5fb8z"
  };

  const videoUrl = movie ? videoUrls[movie.id] || "" : "";

  const getReleaseYear = (releaseDate) => {
    return releaseDate ? new Date(releaseDate).getFullYear() : "";
  };

  return (
    <div>
      <Navbar />
      <div className="pages-ex">
        <div className="pages-in">
          <a href="/" className="page">Home</a>
          <p className="spa">{">"}</p>
          <a href={`/movie/${movie?.id}`} className="page">{movie?.title}</a>
        </div>
      </div>
      <div className="background">
        <img src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`} alt="" className="poster-image" />
        <div className="all-ex">
          <div className="all-in">
            <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="" className="image-movie" />
            <div className="info">
              <h1 className="title">{`${movie?.title} (${getReleaseYear(movie?.release_date)})`}</h1>
              <div className="info-one">
                <span>Release Date: {movie?.release_date}</span>
                <span>Rating: {movie?.vote_average}/10</span>
                <span>Runtime: {movie?.runtime} min</span>
                <span>Genres: {movie?.genres.map((genre) => genre.name).join(", ")}</span>
              </div>
              <h3 className="synopsis">Synopsis</h3>
              <p className="descr">{movie?.overview}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ee">
        <div className="video">
          {videoUrl ? (
            <iframe src={videoUrl} width={1000} height={600} title="Movie Trailer" />
          ) : (
            <p className="sorry">Sorry, this movie is currently unavailable.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
