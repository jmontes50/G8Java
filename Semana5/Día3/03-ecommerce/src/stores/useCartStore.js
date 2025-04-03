import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useCartStore = create(devtools((set) => ({
  cart: [],
  addProductToCart: (product) => {
    set((state) => {
      const changeCart = [...state.cart, product];
      return {
        cart: changeCart,
      };
    });
  },
})));

export default useCartStore;
