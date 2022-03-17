import { useEffect, useState } from "react";

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [allStates, setAllStates] = useState([]);

  let API_URL = "http://www.omdbapi.com/?s=inception";
  let API_KEY = "20aa286d";

  useEffect(() => {
    fetch(`${API_URL}&apikey=${API_KEY}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data.Search);
        setAllStates(Array(movies.length).fill(false));
      });
  }, [API_URL, API_KEY, movies.length]);

  return {
    movies,
    setMovies,
    allStates,
    setAllStates,
  };
};

export default useMovies;
