import React, { useState, useEffect, useCallback } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Something went wrong!!!");
      }
      const data = await response.json();

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
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);
  //its a good practice to add all used dependencies inside useEffect to the dependencies array
  //functions are objects that will change everytime the component rerenders, so it will create
  //an infinite loop, we can fix it with useCallback hook
  /*
  useCallback is mostly used when you don't want a function to get un-necessarily 
  created each time on every render and subsequent re-renders of the component.
  Remember that useCallback will always return the same instance of the function on 
  re-renders unlike normal functions where they are recreated with each re-render of the component. 
  The useCallback would refresh only when there is a change in dependencies.
  The second argument of useCallback refers to the dependencies which would trigger a 
  re-initialization of the function defined inside useCallback if those dependencies change.
  In this example the useCallback function ( fetchMoviesHandler ) doesnt have any dependencies so 
  we leave an empty []
  */

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
