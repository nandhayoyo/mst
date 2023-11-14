import { useStore } from "../store/index";

const CartList = () => {
  const { cart, clearCart, removeItemFromCart } = useStore();

  const handleRemoveItem = (movieId) => {
    removeItemFromCart(movieId);
    console.log(`Item with ID ${movieId} removed from cart`);
  };

  return (
    <div className="text-white h-screen">
      <h2 className="lg:text-xl font-bold mb-4">Shopping Cart</h2>{" "}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="w-full table-fixed items-center">
            <thead>
              <tr>
                <th className="w-2/5">Title</th>
                <th className="w-1/5">Price</th>
                <th className="w-1/5">Quantity</th>
                <th className="w-1/5">Action</th>
              </tr>
            </thead>
            <tbody className="items-center">
              {cart.map((item) => (
                <tr key={item.imdbID} className="mb-5">
                  <td>{item.Title}</td>
                  <td>Rp. {item.Price.toLocaleString("id-ID")}</td>
                  <td className="text-center">{item.quantity}</td>
                  <td className="text-center">
                    <button
                      onClick={() => handleRemoveItem(item.imdbID)}
                      className="text-red-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={clearCart}
            className="font-bold bg-red-500 rounded-lg p-3 mt-2 hover:bg-red-600"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default CartList;
