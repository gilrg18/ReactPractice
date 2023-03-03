import React from "react";
import { useState } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  //Replacing .then calls with async await for readability purposes (works the same)
  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);
    try {
      //the default method is GET
      //fetch returns a PROMISE which is an object with data
      //bad url for error test: https://swapi.dev/api/film/
      //good url https://swapi.dev/api/films/
      const response = await fetch("https://swapi.dev/api/films/");
      //the response also has a "status" field which holds the concrete response
      //status code. You could also manually check that.
      if (!response.ok) {
        throw new Error("Something went wrong!!!");
      }
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
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  let content = <p>Found no movies.</p>;

  if(movies.length > 0){
    content = <MoviesList movies = {movies}/>;
  }
  
  if(error){
    content = <p>{error}</p>
  }

  if(isLoading){
    content = <p>Loading...</p>
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
       {content}
      </section>
    </React.Fragment>
  );
}

export default App;
