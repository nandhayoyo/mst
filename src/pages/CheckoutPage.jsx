import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useStore } from "../store/index";
import { generateRandomPrice } from "../utils/moviePrice";
import { useState } from "react";
import toast from "react-hot-toast";

const CheckoutPage = () => {
  const { cart, clearCart, removeItemFromCart, addToCart } = useStore();
  const pulau = [
    "Jawa",
    "Kalimantan",
    "Sulawesi",
    "Sumatra",
    "Kepulauan Seribu",
    "Papua",
  ];
  const [menu, setMenu] = useState(false);
  const [pulaus, setPulaus] = useState("Jawa");

  const changeText = (e) => {
    setMenu(false);
    setPulaus(e.target.textContent);
  };

  const handleRemoveItem = (movieId) => {
    removeItemFromCart(movieId);
    toast(`Quantity of item with ID ${movieId} decreased!`, {
      icon: "⛔",
    });
  };

  const handleAddQuantity = (movieId) => {
    const existingItem = cart.find((item) => item.imdbID === movieId);

    addToCart({ ...existingItem, Price: generateRandomPrice }, true);
    toast.success(`Quantity of item with ID ${movieId} increased`);
  };

  const handleClearCart = (movieId) => {
    clearCart(movieId);
    toast("Cleared item from cart!", {
      icon: "❗",
    });
  };

  const handleUnderMaintenance = () => {
    toast("This feature under maintenance", {
      icon: "⚠️",
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.Price * item.quantity, 0);
  };

  return (
    <div>
      <>
        <Navbar />
        {/* <Cart /> */}
        <div className="">
          <div className="overflow-x-auto lg:px-14 text-white">
            <table className="table ">
              {/* head */}
              <thead className="text-white">
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* rows */}
                {cart.map((item) => (
                  <tr
                    key={item.imdbID}
                    className=" p-5 rounded-xl mb-2 justify-between"
                  >
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={item.Poster} alt={item.Title} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.Title}</div>
                          <div className="text-sm opacity-50">{item.Genre}</div>
                        </div>
                      </div>
                    </td>
                    <td>Rp. {item.Price.toLocaleString("id-ID")}</td>
                    <td>{item.quantity}</td>
                    <td>
                      Rp. {(item.Price * item.quantity).toLocaleString("id-ID")}
                    </td>
                    <td>
                      <div className="mt-5">
                        <button
                          onClick={() => handleAddQuantity(item.imdbID)}
                          className="ml-2 text-green-700"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleRemoveItem(item.imdbID)}
                          className="ml-2 text-red-500"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cekout */}
          <div className="flex justify-end mx-5 lg:mx-10 lg:px-2 md:px-4">
            <button
              onClick={handleClearCart}
              className="font-bold bg-red-500 rounded-lg p-2 mt-2 hover:bg-red-600"
            >
              Clear Shopping List
            </button>
          </div>
          <div className="Checkout my-5 mx-5 p-5 lg:mx-10 md:mx-10 bg-slate-200 rounded-xl">
            <label className="mt-8  text-base leading-4 text-gray-800">
              Email
            </label>
            <div className="mt-2 mb-5">
              <input
                className="border border-gray-300 p-4 rounded-xl w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                type="email"
                placeholder="Email"
              />
            </div>

            <label className=" text-base leading-4 text-gray-800">
              Card details
            </label>
            <div className="mt-2 flex-col">
              <div>
                <input
                  className="border rounded-tl-xl rounded-tr-xl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="email"
                  placeholder="0000 1234 6549 15151"
                />
              </div>
              <div className="flex-row flex mb-5">
                <input
                  className="border rounded-bl-xl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="email"
                  placeholder="MM/YY"
                />
                <input
                  className="border rounded-br-xl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="email"
                  placeholder="CVC"
                />
              </div>
            </div>

            <label className="my-8 text-base leading-4 text-gray-800">
              Name on card
            </label>
            <div className="my-2 flex-col">
              <div>
                <input
                  className="border rounded-xl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="email"
                  placeholder="Name on card"
                />
              </div>
            </div>

            <label className="my-8 text-base leading-4 text-gray-800">
              Pulau
            </label>
            <div className="mt-2 flex-col">
              <div className="relative">
                <button
                  className="text-left border rounded-tr-xl rounded-tl-xl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white"
                  type="email"
                  onClick={() => setMenu(!menu)}
                >
                  {pulaus}
                </button>
                <svg
                  onClick={() => setMenu(!menu)}
                  className={
                    "transform  cursor-pointer absolute top-4 right-4 " +
                    (menu ? "rotate-180" : "")
                  }
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 5.75L8 10.25L12.5 5.75"
                    stroke="#27272A"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div
                  className={
                    "mt-1 absolute z-10 w-full flex bg-gray-50 justify-start flex-col text-gray-600 " +
                    (menu ? "block" : "hidden")
                  }
                >
                  {pulau.map((pulaus) => (
                    <div
                      key={pulaus}
                      className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
                      onClick={changeText}
                    >
                      {pulaus}
                    </div>
                  ))}
                </div>
              </div>
              <input
                className="border rounded-bl-xl rounded-br-xl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                type="text"
                placeholder="ZIP"
              />
            </div>

            <button
              onClick={handleUnderMaintenance}
              className="mt-8 border border-transparent rounded-xl hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 px-10"
            >
              <div>
                <p className="text-base leading-4">
                  Total{" "}
                  <span>Rp. {calculateTotal().toLocaleString("id-ID")}</span>
                </p>
              </div>
            </button>
          </div>
        </div>
        <Footer />
      </>
    </div>
  );
};

export default CheckoutPage;
