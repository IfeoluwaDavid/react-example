import React, { useEffect } from "react";
import Layout from "../components/layout";
import { Card } from "react-bootstrap";
import { validateImageUrl } from "../utils/request";
import useLikes from "../utils/useLikes";
import "./home.css";
import useMovies from "../utils/useMovies";

export default function Home() {
  const { movies, setMovies, allStates, setAllStates } = useMovies();
  const { toggleState, getState } = useLikes();

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
  }, [API_URL, API_KEY, movies.length, setAllStates, setMovies]);

  return (
    <Layout>
      <h2>All Movies</h2>
      <div className="movies-grid-container">
        {movies.length > 0 &&
          movies.map((movie, index) => {
            return (
              <Card className="movieContainer">
                <Card.Img
                  variant="top"
                  src={
                    validateImageUrl(movie.Poster)
                      ? movie.Poster
                      : "https://picsum.photos/300/420"
                  }
                  fluid="true"
                />
                <Card.Body>
                  <Card.Title className="movieTitle">{movie.Title}</Card.Title>
                  <Card.Text>{movie.Year}</Card.Text>
                  <i
                    class="fa fa-heart"
                    style={{
                      fontSize: "48px",
                      color: `${getState(allStates, index) ? "red" : "white"}`,
                    }}
                    onClick={() => toggleState(allStates, setAllStates, index)}
                  />
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </Layout>
  );
}
