import axios from "axios";

const requestProducts = async () => {
    try {
        const response = await axios.get('https://json-server-vercel-eosin-tau.vercel.app/products');
        // console.log(response);
        if(response.status === 200){
          return response.data;
        } else {
          throw new Error("Error en el código de estado")
        }
    } catch (error) {
        console.log(error)
    }
}

export {
  requestProducts
}