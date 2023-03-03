import React from "react";
import { useState } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //Replacing .then calls with async await for readability purposes (works the same)
  async function fetchMoviesHandler() {
    setIsLoading(true);
    //the default method is GET
    //fetch returns a PROMISE which is an object with data
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
    //.results is a field in the api
    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transformedMovies);
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading && <p>Loading...</p>}
        {!isLoading && movies.length === 0 && <p>Found no movies.</p>}
        {!isLoading && movies.length> 0 && <MoviesList movies={movies} />}
      </section>
    </React.Fragment>
  );
}

export default App;
