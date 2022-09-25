import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
    const [movie,setMovie] = useState([])
    const [isLoading,setIsLoading] = useState(Boolean);
    const [error,setError] = useState(null);
    async function fetchMovieHandler (){
      
      setIsLoading(true);
      setError(null);
      try{
        const response = await fetch('https://swapi.py4e.com/api/films/');
        if(!response.ok) {
          throw new Error ('something went Wront');
        }
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
       
      }
      catch(error){
        setError(error.message);
      }
      setIsLoading(false); 
      }


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movie.length > 0 && <MoviesList movies={movie} />}
        {!isLoading && movie.length === 0 && error && <p> {error} </p>}
        {!isLoading && movie.length === 0 && !error && <p> Found no Movie </p>}
        {isLoading && <p>Loading...</p>}
        <MoviesList movies={movie} />
      </section>
    </React.Fragment>
  );
}

export default App;
