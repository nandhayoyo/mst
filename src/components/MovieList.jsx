import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { getLatestMovies } from "../services/api";
import { generateRandomPrice } from "../utils/moviePrice";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const latestMovies = await getLatestMovies();
        const moviesWithPrices = latestMovies.map((movie) => ({
          ...movie,
          Price: generateRandomPrice(),
        }));
        setMovies(moviesWithPrices);

      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="bg-slate-700">
      <div className="movie-list max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-3">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
