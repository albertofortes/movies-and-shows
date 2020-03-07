import React from 'react';
import { Link} from "react-router-dom";
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const MovieCard = (props) => {
  const movie = props.movie;

  return (
    <div>
      <div className="movies__container__card">
        <Link className="" to={'/movie/' + movie.id} >
          <img className="poster" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} alt={`${movie.original_title} poster.`} />
          
          <CircularProgressbar 
            value={(movie.vote_average) * 100 / 10} 
            text={`${movie.vote_average}`}
            background
            backgroundPadding={6} 
            styles={buildStyles({
              backgroundColor: "E50914",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
              textSize: "19px"
            })} 
          />

          <div className="card__content">
            <h3 className="card__content__title">{movie.original_title}</h3>
            <p className="card__content__date">{movie.release_date}</p>
          </div>
        </Link>
      
      </div>
    </div>
  )
}

export default MovieCard;
