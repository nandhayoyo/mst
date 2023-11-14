import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MovieCard = ({ movie }) => {
  return (
    <section className="p-2">
      <div className="w-full max-w-sm bg-slate-700 border-gray-700 rounded-lg dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between h-full">
        <Link to={`/movies/${movie.imdbID}`}>
          <img className="rounded-xl" src={movie.Poster} alt={movie.Title} />
        </Link>
        <div className="px-5 lg:mt-10 mt-5 pb-5">
          <Link to={`/movies/${movie.imdbID}`}>
            <h5 className="mb-5 h-14 text-xl font-semibold tracking-tight text-white dark:text-white overflow-hidden overflow-ellipsis">
              {movie.Title}
            </h5>
            <h5 className="text-white">{movie.Year}</h5>
          </Link>
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
    Year: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
