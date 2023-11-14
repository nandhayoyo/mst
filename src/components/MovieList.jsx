import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { getLatestMovies } from "../services/api";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const latestMovies = await getLatestMovies();
        const moviesWithPrices = latestMovies.map((movie) => ({
          ...movie,
          Price: Math.floor(Math.random() * 900000) + 100000,
        }));
        setMovies(moviesWithPrices);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Latest Movies</h1>
      <div className="movie-list max-w-screen-xl mx-auto grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-3">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
