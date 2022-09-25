import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
    const [movie,setMovie] = useState([])
    const [loading,setLoading] = useState(Boolean);
    async function fetchMovieHandler (){
      setLoading(true);
      const response = await fetch('https://swapi.py4e.com/api/films/');
      const data = await response.json();
      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        };
       })
       setMovie(transformedMovies)
       setLoading(false);

      }


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!loading && movie.length > 0 && <MoviesList movies={movie} />}
        {!loading && movie.length === 0 && <p> Found no Movie </p>}
        {loading && <p>Loading...</p>}
        <MoviesList movies={movie} />
      </section>
    </React.Fragment>
  );
}

export default App;
