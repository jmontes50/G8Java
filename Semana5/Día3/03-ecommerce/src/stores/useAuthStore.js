import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { saveStorage, getStorage } from "../utils/localStorage";
import axios from "axios";

const useAuthStore = create(
  devtools((set) => ({
    user: null,
    token: null, //jwt
    isLogged: false,

    login: async (email, password) => {
      try {
        const user = {
          email,
          password,
        };
        const response = await axios.post(
          "https://json-server-vercel-eosin-tau.vercel.app/login",
          user
        );
        if (response.status === 200) {
          //la API esta devolviendo al loguearse:
          /**
         * {
              "accessToken": "",
              "user": {
                  "email": "",
                  "name": ""
              }
          }
         */
          const { accessToken, user } = response.data;
          saveStorage("token", accessToken);
          set({ user, token: accessToken, isLogged: true }, false, "auth/Login");
        }
      } catch (error) {}
    },
    logout: () => {
      localStorage.removeItem("token");
      set({ token: null, isLogged: false, user: null }, false, "auth/Logout");
    },
  }))
);

export default useAuthStore;