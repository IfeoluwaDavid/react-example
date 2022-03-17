import React from "react";
import Layout from "../components/layout";
import Movie from "../components/movie";
import "./home.css";

export default function Home({ allMovies }) {
  return (
    <Layout>
      <h2>All Movies</h2>
      <div className="movies-grid-container">
        {allMovies.length > 0 &&
          allMovies.map((movie, index) => {
            return <Movie movie={movie} index={index} />;
          })}
      </div>
    </Layout>
  );
}
