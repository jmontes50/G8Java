import { create } from "zustand";

//la función create de zustand va a necesitar una función, donde tendremos como parámetro 'set'
//set es una función que nos permitira cambiar el store, con store piensen en estado

const useThemeStore = create((set) => ({
  //aquí directmente podemos indicar propiedades del estado y métodos que lo actualicen
  // theme: 'dark',
  theme: localStorage.getItem("tema") || 'dark',
  changeTheme: () => {
    set((state) => {
      //estamos preguntando que tema vamos a aplicar
      const newTheme = state.theme === 'dark' ? 'light' : 'dark';
      //LS guardamos el tema en local Storage, para que este persistente
      localStorage.setItem("tema", newTheme);
      //agregamos <html data-theme="tema"> al html usando JS puro
      const html = document.querySelector("html");
      html.setAttribute("data-theme", newTheme);
      //cambiando el estado
      return { theme: newTheme }
    })
  }
}))

export default useThemeStore;