import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { saveStorage, getStorage } from "../utils/localStorage";
import axios from "axios";
import { toast } from "react-toastify";

const useAuthStore = create(
  devtools((set) => ({
    user: null,
    token: null, //jwt
    isLogged: false,

    login: async (email, password, callback) => {
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
          toast.success(`Bienvenido ${user.name}!!`);
          callback();
        }
      } catch (error) {
        toast.error("Hubo un error revise sus datos");
      }
    },
    logout: () => {
      localStorage.removeItem("token");
      set({ token: null, isLogged: false, user: null }, false, "auth/Logout");
    },
  }))
);

export default useAuthStore;