import React, {useEffect, useState} from 'react';
import { withRouter } from "react-router-dom";
import { APIKey } from '../APIKey';

import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Movie = (props) => {
  const [movie, setMovie] = useState([]);

  const fetchMovie = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=${APIKey}&language=en-US`);
    const data = await response.json();
    setMovie(data);
    console.log('fetchMovie:');    
    console.log(data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  const bgStyle = {
    backgroundImage: 'url(https://image.tmdb.org/t/p/w1400_and_h450_face/' + movie.backdrop_path + ')'
  };

  const getYear = (dateString) => {
    let release_date = new Date(dateString);
    return release_date.getFullYear();
  };

  let getNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const getGenres = (mGenres)  => {
    let genres = '';
    let i = 0;
    for (const prop in mGenres) {
      genres += (i !== 0) ? ", " + movie.genres[prop]['name'] : movie.genres[prop]['name'];
      i++;
    };
    return genres;
  };

  const getCountries = (mCountries)  => {
    let countries = '';
    let i = 0;
    for (const prop in mCountries) {
      countries += (i !== 0) ? ", " + movie.production_countries[prop]['name'] : movie.production_countries[prop]['name'];
      i++;
    };
    return countries;
  };

  const getProductions = (mProductions)  => {
    let productions = '';
    let i = 0;
    for (const prop in mProductions) {
      productions += (i !== 0) ? ", " + movie.production_companies[prop]['name'] : movie.production_companies[prop]['name'];
      i++;
    };
    return productions;
  };

  return (
    <React.Fragment>
      <div className="movies__banner movies__banner--detail">
        <div className="movies__banner__bg" style={bgStyle}>
        <img className="movies__banner__poster" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${ movie.poster_path}`} alt={`${ movie.original_title} poster.`} />
            
          <div className='movies__banner__cont inner'>
            <h2 className="title">{movie.original_title}</h2>
            <p className="tagline">{movie.tagline}</p>
            <p className="overview">{movie.overview}</p>
            <p><strong>Release year:</strong> {getYear(movie.release_date)}</p>
            <p><strong>Genres:</strong> {getGenres(movie.genres)}</p>
            <p><strong>Prodution:</strong> {getProductions(movie.production_companies)}</p>
            <p><strong>Prodution countries:</strong> {getCountries(movie.production_countries)}</p>
            {(movie.budget) ? <p><strong>Budget:</strong> ${getNumberWithCommas(movie.budget)}</p> : null }
            {(movie.revenue) ? <p><strong>Revenue:</strong> ${getNumberWithCommas(movie.revenue)}</p> : null }
            {(movie.homepage) ? <p><strong>Official website:</strong> <a href={movie.homepage} target="blank">{movie.homepage}</a></p> : null }
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
      </div>
    </React.Fragment>

  )
};

export default withRouter(Movie);
