import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
    const [movie,setMovie] = useState('')

    function fetchMovieHandler (){
      fetch('https://swapi.py4e.com/api/films/') 
      .then((response) => { 
        return response.json();
      })
      .then ((data) => {
       const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        }
       })
       setMovie(transformedMovies)
      })
    }
  return (
    <React.Fragment>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movie} />
      </section>
    </React.Fragment>
  );
}

export default App;
