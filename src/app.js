import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import useMovies from "./utils/useMovies";
import Home from "./routes/home";
import Liked from "./routes/liked";

const App = () => {
  const { movies, setMovies, setAllStates } = useMovies();

  let API_URL = "http://www.omdbapi.com/?s=inception";
  let API_KEY = "20aa286d";

  useEffect(() => {
    fetch(`${API_URL}&apikey=${API_KEY}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const movieStates = Array(movies.length).fill(false);
        setMovies(data.Search);
        setAllStates(movieStates);
      });
  }, [API_URL, API_KEY, movies.length, setAllStates, setMovies]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home allMovies={movies} />} />
        <Route path="/liked" element={<Liked likedMovies={movies} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
