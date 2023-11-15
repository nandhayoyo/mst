import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { getLatestMovies } from "../services/api";
import { generateRandomPrice } from "../utils/moviePrice";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
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
      <div className="flex flex-col items-center justify-center">
        <div className="bg-slate-700">
          {loading ? (
            <div className="movie-list max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {[...Array(postsPerPage)].map((_, index) => (
                <div key={index} className="flex flex-col gap-4 lg:w-52 w-40">
                  <div className="skeleton h-52 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="movie-list max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-3">
              {currentPosts.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          )}
        </div>
        <div className="pagination-container bg-slate-500 py-3 mx-5 px-5 rounded-xl text-white flex justify-center items-center mt-4 w-fit lg:w-96">
          <button
            onClick={handlePrevClick}
            disabled={currentPage === 1}
            className="mr-3 bg-white p-1 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
              />
            </svg>
          </button>{" "}
          <span>{`${currentPage} of ${totalPages}`}</span>{" "}
          <button
            onClick={handleNextClick}
            disabled={currentPage === totalPages}
            className="ml-3 bg-white p-1 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieList;
