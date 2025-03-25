import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { requestProductById, requestUpdateProduct } from "../services/productService";

const EditProductView = () => {
  const [product, setProduct] = useState({})
  const { id } = useParams();

  useEffect(() => {
    const getProductById = async () => {
      try {
        const prod = await requestProductById(id);
        console.log(prod);
      } catch (error) {
        console.log(error)
      }
    }
    getProductById();
  },[])

  return (
    <div>EditProductView</div>
  )
}

export default EditProductView