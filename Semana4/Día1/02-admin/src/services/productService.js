import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

const requestProducts = async () => {
  try {
    const response = await axios.get(`${URL}/products`);
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
    const response = await axios.post(`${URL}/products`, newProduct);
    console.log(response.status);
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error("Error en el código de estado de la operación");
    }
  } catch (error) {
    throw error;
  }
};

const requestProductById = async (id) => {
  try {
    const response = await axios.get(`${URL}/products/${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Error en el código de estado");
    }
  } catch (error) {
    console.log(error);
  }
};

const requestUpdateProduct = async (productUpdated) => {
  try {
    const response = await axios.put(`${URL}/products/${productUpdated.id}`, productUpdated);
    // console.log(response.status);
    if(response.status === 200){
      return response.data;
    } else {
      throw new Error("Error en el código de estado");
    }
    
  } catch (error) {
    throw error;
  }
};

export {
  requestProducts,
  requestCreateProduct,
  requestProductById,
  requestUpdateProduct,
};
