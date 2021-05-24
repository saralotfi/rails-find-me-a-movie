import React from "react";
import { genresIds } from "../../Genres";

const Result = (props) => {
  const { title, year, rating, genres, description, movie_url, id, poster_path, backdrop_path } = props.movie;

    const hours = Math.floor(props.runtime / 60);
    const minutes = props.runtime % 60;

    let posterStyle = {
      backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`
    }

    let noPosterStyle = {
      backgroundColor: "#2F2F3B"
    }

  return (
    <div className="result-container mt-5 mb-5">
      <div className="movie-poster-container" style={poster_path ? posterStyle : noPosterStyle}>
      </div>
      <div className="movie-info d-flex flex-column">
        <a href={movie_url} target="_blank" rel="noreferrer noopener">
          <h2>{title.toUpperCase()}</h2>
        </a>
        <div className="d-flex year-runtime">
          <p className="mr-2">({year.substr(0,4)})</p>
          {props.runtime && <p>{hours !== 0 && `${hours}h`} {minutes !== 0 && `${minutes}min`}</p>}
        </div>

        <div className="d-flex flex-wrap">
          {genres.map((genre) => <p key={genre} className="genre">{genresIds[genre]}</p>)}
        </div>
        
        <p className="flex-grow-1">{description}</p>
        <div className="movie-info-bottom">
          {rating && <p><span className="rating">{rating}</span>/10</p>}
          {props.trailer && <a href={`https://www.youtube.com/watch?v=${props.trailer}`} target="_blank" rel="noreferrer noopener"><button className="btn btn-primary btn-read-more">View trailer</button></a>}
        </div>
      </div>
    </div>
  );
}

export default Result;
