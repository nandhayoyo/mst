import Cart from "./CartList";
import { useStore } from "../store";
import { useEffect, useState } from "react";
import { generateRandomPrice } from "../utils/moviePrice";
import toast from "react-hot-toast";

const MovieDetail = ({ movie }) => {
  const { addToCart } = useStore();
  const [generatedPrice, setGeneratedPrice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const randomPrice = generateRandomPrice();
        setGeneratedPrice(randomPrice.toLocaleString("id-ID"));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie detail:", error);
        toast.error("Error fetching movie detail. Please try again later.", {
          position: "bottom-right",
        });
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, []);

  const handleAddToCart = () => {
    const priceToAdd = generatedPrice;
    addToCart({ ...movie, Price: priceToAdd });
    toast.success("Movie added to cartlist");
  };

  return (
    <>
      {loading ? (
        <div className="flex flex-col md:flex-row lg:grid-cols-3 justify-center lg:m-10 mx-auto">
          <div className="skeleton lg:h-screen h-72 w-50 lg:w-full m-2"></div>
          <div className="w-full m-2 ">
            <div className="skeleton h-4 w-28 p-5 my-5"></div>
            <div className="skeleton h-4 lg:w-full p-5 my-5 lg:mx-auto mr-5"></div>
            <div className="skeleton h-4 lg:w-full p-5 my-5 lg:mx-auto mr-5"></div>
            <div className="skeleton h-4 w-28 p-5 my-5"></div>
            <div className="skeleton h-4 w-full p-5 my-5 mx-auto hidden "></div>
          </div>
          <div className="skeleton h-96 w-full m-2 hidden lg:block"></div>
        </div>
      ) : (
        <div className="flex lg:h-screen flex-col md:flex-row lg:grid-cols-3 justify-center lg:m-10 mx-auto">
          <div className="image lg:w-1/3 ">
            {movie && movie.Poster && (
              <img
                className="rounded-xl"
                src={movie.Poster}
                alt={movie.Title}
                width={500}
              />
            )}
          </div>
          <div className="pt-10 mx-5 lg:w-1/3">
            {movie ? (
              <>
                <h1 className="font-bold text-xl mb-4 text-white">
                  {movie.Title}
                </h1>
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
              </>
            ) : (
              <p className="text-white h-screen">
                ⚠️ Movie details not available. Please Reload page
              </p>
            )}
          </div>
          <div className="hidden lg:block lg:w-1/3 bg-slate-500 p-5 rounded-xl">
            <Cart />
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetail;
