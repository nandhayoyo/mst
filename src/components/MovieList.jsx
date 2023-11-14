import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { getLatestMovies } from "../services/api";
import { generateRandomPrice } from "../utils/moviePrice";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

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

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = movies.slice(firstPostIndex, lastPostIndex);

  const totalPages = Math.ceil(movies.length / postsPerPage);

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <>
      <div className="justify-center items-center">
        <div className="bg-slate-700">
          <div className="movie-list max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-3">
            {currentPosts.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        </div>
        <div className=" text-white">
          <button onClick={handlePrevClick} disabled={currentPage === 1}>
            Previous
          </button>{" "}
          <span>{`${currentPage} of ${totalPages}`}</span>{" "}
          <button
            onClick={handleNextClick}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieList;
