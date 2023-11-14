import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MovieCard = ({ movie }) => {
  return (
    <section className="p-2">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between h-full">
        <Link to={`/movies/${movie.imdbID}`}>
          <img className="rounded-t-lg" src={movie.Poster} alt={movie.Title} />
        </Link>
        <div className="px-5 mt-10 pb-5">
          <Link to={`/movies/${movie.imdbID}`}>
            <h5 className="mb-5 h-14 text-xl font-semibold tracking-tight text-gray-900 dark:text-white overflow-hidden overflow-ellipsis">
              {movie.Title}
            </h5>
          </Link>

          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              Rp. {movie.Price.toLocaleString("id-ID")}
            </span>

            <Link
              to={`/movies/${movie.imdbID}`}
              className="text-white text-sm bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imdbID: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Price: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
