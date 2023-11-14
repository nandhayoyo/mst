import { useStore } from "../store/index";

const CartList = () => {
  const { cart, clearCart, removeItemFromCart } = useStore();

  const handleRemoveItem = (movieId) => {
    removeItemFromCart(movieId);
    console.log(`Item with ID ${movieId} removed from cart`);
  };

  return (
    <div className="text-white h-screen">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>{" "}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.imdbID} className="mb-2">
                {item.Title} - Rp. {item.Price.toLocaleString("id-ID")}{" "}
                (Quantity: {item.quantity})
                <button
                  onClick={() => handleRemoveItem(item.imdbID)}
                  className="ml-2 text-red-500"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
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
