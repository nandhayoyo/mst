import PropTypes from "prop-types";

const MovieDetail = ({ movie }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-row justify-center mx-auto">
        <div className="image">
          <img src={movie.Poster} alt={movie.Title} width={500} />
        </div>
        <div className="pt-10 mx-5">
          <h1 className="font-bold text-xl">Title: {movie.Title}</h1>
          <h4 className="font-bold mb-5">
            <strong>Actors:</strong> {movie.Actors}
          </h4>
          <h1 className="font-bold ">
            <strong>Year:</strong> {movie.Year}
          </h1>
          <h4 className="font-bold">
            <strong>Genre:</strong> {movie.Genre}
          </h4>
          <h4 className="font-bold">
            <strong>Director:</strong> {movie.Director}
          </h4>
          <h4 className="font-bold">
            <strong>Writer:</strong> {movie.Writer}
          </h4>

          <h4 className="font-bold text-green-500">$ {movie.Price}</h4>
          <p className="py-3 lg:w-1/2">{movie.Plot}</p>

          <button
            // onClick={handleAddToCart}
            className="font-bold bg-amber-200 rounded-lg p-3 mt-2 hover:bg-blue-200"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

MovieDetail.propTypes = {
  movie: PropTypes.shape({
    imdbID: PropTypes.string.isRequired,
    Genre: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Writer: PropTypes.string.isRequired,
    Director: PropTypes.string.isRequired,
    Actors: PropTypes.string.isRequired,
    Plot: PropTypes.string.isRequired,
    Year: PropTypes.number.isRequired,
    Price: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieDetail;
