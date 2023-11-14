import { create } from "zustand";

export const useStore = create((set) => ({
  movies: [],
  cart: [],
  addToCart: (movie) => set((state) => ({ cart: [...state.cart, movie] })),
  removeFromCart: (movieId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== movieId),
    })),
}));
