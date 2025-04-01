import { create } from "zustand";

//la función create de zustand va a necesitar una función, donde tendremos como parámetro 'set'
//set es una función que nos permitira cambiar el store, con store piensen en estado

const useThemeStore = create((set) => ({
  //aquí directmente podemos indicar propiedades del estado y métodos que lo actualicen
  theme: 'dark',
  changeTheme: () => {
    set((state) => {
      const newTheme = state.theme === 'dark' ? 'light' : 'dark';
      return { theme: newTheme }
    })
  }
}))

export default useThemeStore;