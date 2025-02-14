import { useEffect, useState } from "react";
import NavBar from "../components/NavBar.jsx";

function Directors() {
  const [directors, setDirectors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((response) => response.json())
      .then((directorData) => setDirectors(directorData));
  }, []);
  const directorsList = directors.map((director) => {
    const directorMovies = director.movies;
    const directorMoviesList = directorMovies.map((movie) => {
      return <li>{movie}</li>;
    });
    return (
      <article key={director.id}>
        <h2>{director.name}</h2>
        <ul>{directorMoviesList}</ul>
      </article>
    );
  });
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Director info here! */}
        <h1>Directors Page</h1>
        {directorsList}
      </main>
    </>
  );
};


export default Directors;