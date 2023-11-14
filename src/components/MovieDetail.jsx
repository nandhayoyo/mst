import PropTypes from "prop-types";
import Cart from "./CartList";
import { useStore } from "../store";
import { useEffect, useState } from "react";
import { generateRandomPrice } from "../utils/moviePrice";

const MovieDetail = ({ movie }) => {
  const { addToCart } = useStore();
  const [generatedPrice, setGeneratedPrice] = useState(null);

  useEffect(() => {
    const randomPrice = generateRandomPrice();
    setGeneratedPrice(randomPrice.toLocaleString("id-ID"));
  }, []);

  const handleAddToCart = () => {
    const priceToAdd = generatedPrice;
    addToCart({ ...movie, Price: priceToAdd });
    console.log("Product added to cart ::", { ...movie, Price: priceToAdd });
  };

  return (
    <>
      <div className="flex flex-col md:flex-row lg:grid-cols-3 justify-center lg:m-10 mx-auto">
        <div className="image lg:w-1/3 ">
          <img
            className="rounded-xl"
            src={movie.Poster}
            alt={movie.Title}
            width={500}
          />
        </div>
        <div className="pt-10 mx-5 lg:w-1/3">
          <h1 className="font-bold text-xl mb-4 text-white"> {movie.Title}</h1>
          <h4 className="mb-5 text-white">Actors: {movie.Actors}</h4>
          <h1 className="font-bold my-5 text-white">
            {movie.Year} • {movie.Genre}
          </h1>

          <h4 className=" text-white">
            <strong className="mr-3">Director:</strong> {movie.Director}
          </h4>
          <h4 className=" text-white">
            <strong className="mr-6">Writer:</strong> {movie.Writer}
          </h4>

          <h4 className="font-bold text-xl my-2 text-green-500">
            Rp. {generatedPrice || "N/A"}
          </h4>

          <p className="py-3  text-white">{movie.Plot}</p>

          <button
            onClick={handleAddToCart}
            className="font-bold bg-amber-200 rounded-lg p-3 mt-2 hover:bg-blue-200"
          >
            Add To Cart
          </button>
        </div>
        <div className="hidden lg:block lg:w-1/3 bg-slate-500 p-5 rounded-xl">
          <Cart />
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
    Year: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieDetail;
