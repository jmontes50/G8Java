import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useCartStore = create(devtools((set) => ({
  cart: [],
  //product aparte de sus propiedades, va a llegar con una propiedad qtyCart
  addProductToCart: (product) => {
    set((state) => {
      const index = state.cart.findIndex((item) => item.id === product.id)
      if(index === -1 ){
        console.log("El producto es nuevo en el carrito")
        // product.qtyCart = 1;
        const changeCart = [...state.cart, product];
        return {
          cart: changeCart,
        };
      } else{
        console.log("El producto ya existe", index)
        const cartTemp = [...state.cart];
        cartTemp[index].qtyCart = product.qtyCart;
        return {
          cart: cartTemp
        }
      }
    });
  },
})));

export default useCartStore;
