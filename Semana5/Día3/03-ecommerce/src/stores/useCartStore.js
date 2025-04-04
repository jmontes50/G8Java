import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useCartStore = create(devtools((set) => ({
  cart: [],
  //product aparte de sus propiedades, va a llegar con una propiedad qtyCart
  addProductToCart: (product) => {
    set((state) => {
      const index = state.cart.findIndex((item) => item.id === product.id)
      if(index === -1 ){
        const changeCart = [...state.cart, product];
        return {
          cart: changeCart,
        };
      } else{
        const cartTemp = [...state.cart];
        cartTemp[index].qtyCart = product.qtyCart;
        return {
          cart: cartTemp
        }
      }
    });
  },
  changeQtyProduct: (product, newQty) => {
    set((state) => {
      const index = state.cart.findIndex((item) => item.id === product.id)
      if(index > -1){
        const cartTemp = [...state.cart];
        cartTemp[index].qtyCart = newQty;

        return {
          cart: cartTemp
        }
      } else {
        console.log("No se encontró el producto");
        return state
      }
    })
  }
})));

export default useCartStore;
