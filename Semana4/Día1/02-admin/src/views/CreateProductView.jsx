import { useState, useEffect } from "react";
import Input from "../components/Input";
import { requestCreateProduct } from "../services/productService";
import { requestCategories } from "../services/categoryService";
import { uploadFile } from "../services/supabaseService";
import Swal from "sweetalert2";

const CreateProductView = () => {
  const [product, setProduct] = useState({
    nombre: "Hola",
    descripcion: "",
    precio: 0,
    imagen: "",
    detalles: "",
    precio_oferta: 0,
    cantidad: 0,
    estrellas: 1,
    //imagen y categoryId estan con información temporal
    imagen: "https://picsum.photos/500",
    categoryId: 1,
  });

  const [categories, setCategories] = useState([]);

  const [image, setImage] = useState(null);

  //componentes controlados, amarrar el value de un input a un estado, pero al estar amarrado tenemos que gestionarlo para actualizar el estado en c/cambio
  const handleInput = (event) => {
    // console.log(event)
    // console.log(event.target.value);
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleInputFile = (e) => {
    // console.log(e.target.files[0]);
    const newImage = e.target.files[0];
    setImage(newImage);
  }

  const inputs = [
    { name: "nombre", label: "Nombre producto", type: "text" },
    { name: "descripcion", label: "Descripción producto", type: "text" },
    { name: "precio", label: "Precio producto", type: "number" },
    { name: "precio_oferta", label: "Precio de oferta", type: "number" },
    { name: "detalles", label: "Detalles", type: "text" },
    { name: "cantidad", label: "Stock", type: "number" },
    { name: "estrellas", label: "Estrellas", type: "number" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(product);
    try {
      if(image){
        const publicUrlUpload = await uploadFile(image);
        product.imagen = publicUrlUpload;
      }
      const res = await requestCreateProduct(product);
      Swal.fire({
        title: `${product.nombre} creado!`,
        text: "El producto se creó exitosamente",
        icon: "success"
      })
      // console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelect = (e) => {
    // console.log(value);
    const categoryIdSelected = e.target.value; //id
    //agregamos +categoryIdSelected 
    setProduct({ ...product, categoryId: +categoryIdSelected });
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await requestCategories();
        // console.log(data)
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="container-block grid grid-cols-2">
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
      {/* select */}
      <div className="mb-3 p-2">
        <label className="block mb-1">Seleccione la categoría:</label>
        <select 
          className="select w-full" 
          onChange={handleSelect}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.nombre}
            </option>
          ))}
        </select>
      </div>
      {/* archivos */}
      <div className="mb-3 p-2">
        <label className="block mb-1" htmlFor="imagen-producto">Seleccione una imagen:</label>
        <input 
          type="file"
          className="file-input w-full"
          id="imagen-producto"
          onChange={handleInputFile}
        />
      </div>

      {/* <button className="btn btn-soft btn-accent" type="button">Guardar</button> */}
      <button className="btn btn-soft btn-accent block mt-2" type="submit">
        Guardar
      </button>
    </form>
  );
};

export default CreateProductView;
