import React, {useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
import { APIKey } from '../APIKey';

import MovieBanner from './MovieBanner';
import MovieCard from './MovieCard';

const Home = (props) => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [banner, setBanner] = useState([]);

  const fetchNowPlayingMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKey}&language=en-US&page=1`);
    const data = await response.json();
    const results = data.results;
    setBanner(results[0]);
    setNowPlayingMovies(results.slice(1, results.length));
    console.log('getNowPlayingMovie:');    
    console.log(results);
    console.log(results.length);
  };

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);

  return (
    <div>
      <div className="movies__banner">
        <MovieBanner key={banner['id']} movie={banner} />
      </div>
      <div className="movies__container">
        {nowPlayingMovies.map(movie => (
          <MovieCard key={movie['id']} movie={movie} />
        ))}
      </div>
    </div>
  )
};

export default withRouter(Home);