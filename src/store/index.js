import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { generateRandomPrice } from "../utils/moviePrice";

export const useStore = create(
  devtools(
    persist(
      (set) => ({
        movies: [],
        cart: [],
        addToCart: (item) => {
          set((state) => {
            const existingItem = state.cart.find(
              (cartItem) => cartItem.imdbID === item.imdbID
            );

            if (existingItem) {
              return {
                cart: state.cart.map((cartItem) =>
                  cartItem.imdbID === item.imdbID
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
                ),
              };
            } else {
              return {
                cart: [
                  ...state.cart,
                  { ...item, quantity: 1, price: generateRandomPrice() },
                ],
              };
            }
          });
        },

        clearCart: () => set({ cart: [] }),
        
        removeItemFromCart: (movieId) =>
          set((state) => ({
            cart: state.cart
              .map((item) =>
                item.imdbID === movieId
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              )
              .filter((item) => item.quantity > 0),
          })),
      }),
      {
        name: "movieStore",
        getStorage: () => localStorage,
      }
    )
  )
);
