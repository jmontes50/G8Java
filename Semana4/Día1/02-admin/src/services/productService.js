import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

const requestProducts = async () => {
  try {
    const response = await axios.get(
      `${URL}/products`
    );
    // console.log(response);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Error en el código de estado");
    }
  } catch (error) {
    console.log(error);
  }
};

const requestCreateProduct = async (newProduct) => {
  try {
    const response = await axios.post(
      `${URL}/products`,
      newProduct
    );
    console.log(response.status)
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error("Error en el código de estado de la operación");
    }
  } catch (error) {
    throw error;
  }
};

export { requestProducts, requestCreateProduct };
