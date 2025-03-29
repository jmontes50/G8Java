import { useState, useEffect } from "react";
import axios from "axios";

const useGetAxios = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const requestData = async () => {
      try {
        const response = await axios.get(url);
        if(response.status === 200){
          setData(response.data);
          setLoading(false)
        }else{
          throw new Error("Error en el código de estado");
        }
      } catch (error) {
        throw error;
      }
    }
    requestData();
  },[url])

  return { data, loading }
}

export default useGetAxios;
