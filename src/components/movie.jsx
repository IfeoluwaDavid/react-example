import React from "react";
import { Card } from "react-bootstrap";
import useLikes from "../utils/useLikes";
import useMovies from "../hooks/useMovies";
import { validateImageUrl } from "../utils/helpers";
import "./movie.css";

const Movie = ({ movie, index }) => {
  const { toggleState, getState } = useLikes();
  const { allStates, setAllStates } = useMovies();

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
};

export default Movie;
