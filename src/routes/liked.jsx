import Layout from "../components/layout";
import useMovies from "../utils/useMovies";
import useLikes from "../utils/useLikes";
import { Card } from "react-bootstrap";
import { validateImageUrl } from "../utils/request";
import "./liked.css";

export default function Liked() {
  const { movies, setMovies, allStates, setAllStates } = useMovies();
  const { toggleState, getState } = useLikes();

  return (
    <Layout>
      <h2>Liked</h2>
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
