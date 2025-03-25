import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { requestProductById, requestUpdateProduct } from "../services/productService";
import Input from "../components/Input";
import { uploadFile } from "../services/supabaseService";
import { requestCategories } from "../services/categoryService";
import Swal from "sweetalert2";

const EditProductView = () => {
  const [product, setProduct] = useState(null)
  const { id } = useParams();

  const handleInput = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const inputs = [
    { name: "nombre", label: "Nombre producto", type: "text" },
    { name: "descripcion", label: "Descripción producto", type: "text" },
    { name: "precio", label: "Precio producto", type: "number" },
    { name: "precio_oferta", label: "Precio de oferta", type: "number" },
    { name: "detalles", label: "Detalles", type: "text" },
    { name: "cantidad", label: "Stock", type: "number" },
    { name: "estrellas", label: "Estrellas", type: "number" },
  ];

  useEffect(() => {
    const getProductById = async () => {
      console.log("pre")
      try {
        const prod = await requestProductById(id);
        console.log("after requestById", prod)
        setProduct(prod);
      } catch (error) {
        console.log(error)
      }
    }
    getProductById();
  },[])

  return (
    <form>
      {!product ? <>
        Espere por favor
      </> : <>
        {inputs.map((item, i) => (
          <Input
            key={i}
            value={product}
            nameProp={item.name}
            label={item.label}
            type={item.type}
            handleInput={handleInput}
          />
        ))}
      </>}
      <h1>Hola</h1>
    </form>
  )
}

export default EditProductView