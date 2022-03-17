import Layout from "../components/layout";
import useMovies from "../hooks/useMovies";
import useLikes from "../hooks/useLikes";
import { Card } from "react-bootstrap";
import { validateImageUrl } from "../utils/helpers";
import "./liked.css";

export default function Liked({ likedMovies }) {
  const { toggleState, getState } = useLikes();
  const { allStates, setAllStates } = useMovies();

  // filter movies with a truthy allStates index === liked movies.

  return (
    <Layout>
      <h2>Liked Movies</h2>
      <div className="movies-grid-container">
        {likedMovies.length > 0 &&
          likedMovies.map((movie, index) => {
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
