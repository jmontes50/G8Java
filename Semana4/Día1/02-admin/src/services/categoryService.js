import axios from "axios";

const requestCategories = async () => {
  try {
    const response = await axios.get(
      "https://json-server-vercel-eosin-tau.vercel.app/categories"
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Error al ejecutar petición");
    }
  } catch (error) {
    throw error;
  }
};

export default requestCategories;
