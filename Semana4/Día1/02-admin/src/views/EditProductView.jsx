import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  requestProductById,
  requestUpdateProduct,
} from "../services/productService";
import Input from "../components/Input";
import { uploadFile } from "../services/supabaseService";
import { requestCategories } from "../services/categoryService";
import Swal from "sweetalert2";

const EditProductView = () => {
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);

  const { id } = useParams();

  const handleInput = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSelect = (e) => {
    const categoryIdSelected = e.target.value; //id
    setProduct({ ...product, categoryId: +categoryIdSelected });
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
      try {
        const prod = await requestProductById(id);
        setProduct(prod);
      } catch (error) {
        console.log(error);
      }
    };

    const getCategories = async () => {
      try {
        const data = await requestCategories();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProductById();
    getCategories();
  }, []);

  return (
    <form className="container-block grid grid-cols-2">
      {!product ? (
        <>Espere por favor</>
      ) : (
        <>
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
          <div className="mb-3 p-2">
            <label className="block mb-1">Seleccione la categoría:</label>
            <select className="select w-full" onChange={handleSelect}>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.nombre}
                </option>
              ))}
            </select>
          </div>
          <button className="btn btn-soft btn-accent block mt-2" type="submit">
            Guardar
          </button>
        </>
      )}
    </form>
  );
};

export default EditProductView;
