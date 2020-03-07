import React, { Component } from 'react';
import { Link} from "react-router-dom";

import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const MovieBanner = (props) => {
  const movie = props.movie;
  const bgStyle = {
    backgroundImage: 'url(https://image.tmdb.org/t/p/w1400_and_h450_face/' + movie.backdrop_path + ')'
  };

  return (
    <Link to={'/movie/' + movie.id} >
      <div className="movies__banner__bg" style={bgStyle}>
        <img className="movies__banner__poster" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${ movie.poster_path}`} alt={`${ movie.original_title} poster.`} />
        <div className="movies__banner__cont">
          <h2 className="title">{movie.original_title}</h2>
          <p className="overview">{movie.overview}</p>
        </div>

        <CircularProgressbar 
          value={(movie.vote_average) * 100 / 10} 
          text={`${movie.vote_average}`} 
          styles={buildStyles({
            textColor: "#fff",
            pathColor: "#E50914",
            trailColor: "plate"
          })} 
        />
      </div>
    </Link>
  )
}

export default MovieBanner;