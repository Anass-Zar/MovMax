import Movies_PlayingNow from "../components/movies-playing";
import Movies_Populary from "../components/movies-popular";
import Movies_TopRating from "../components/movies-top";
import Movies_Upcoming from "../components/movies-upcoming";
import { Navbar } from "../components/navbar";
import photo from "../images/breaking.jpg";
import "./Home.css";

export const Home = () => {

  return (
    <div>
      <Navbar />
      <div className="news">
        <div className="informations">
          <h1 className="titre">Attack on tatin</h1>
          <p className="ep">Season:5 - Episodes:85</p>
          <p className="des">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Qui, totam 
            eaque quaerat ullam minima excepturi, officia commodi adipisci facere</p>
          <button type="button" className="play">Play Now</button>
        </div>
        <img src={photo} alt="image" className="photo" />
      </div>
      <div className="movies-tendance">
        <h1 className="title-categ">Movies Playing Now</h1>
        <Movies_PlayingNow/>
      </div>
      <div className="movies-tendance">
        <h1 className="title-categ">Populary Movies</h1>
        <Movies_Populary/>
      </div>
      <div className="movies-tendance">
        <h1 className="title-categ">Top Rating Movies</h1>
        <Movies_TopRating/>
      </div>
      <div className="movies-tendance">
        <h1 className="title-categ">Upcoming Movies</h1>
        <Movies_Upcoming/>
      </div>
    </div>
  );
};
