import { useState, useEffect, useRef } from "react";
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
  const [image, setImage] = useState(null);

  //crear una referencia para useRef, para manejar el dialog
  const dialogRef = useRef(null);

  console.log(dialogRef.current);

  //Al usar una referencia es necesario current para acceder las propiedades y métodos que comunmente utilizariamos
  const openDialog = () => dialogRef.current.showModal();
  const closeDialog = () => dialogRef.current.close();

  //Lo mismo pero con Swal
  const OpenDialogSwal = (imgUrl, imgAlt) => {
    Swal.fire({
      imageUrl: imgUrl,
      imageAlt: imgAlt,
//       html: `<video controls>
//   <source src="chrome.webm" type="video/webm">
//   <source src="chrome.mp4" type="video/mp4">
//   <p>Your browser cannot play the provided video file.</p>
// </video>`,
    });
  };

  const { id } = useParams();

  const handleInput = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSelect = (e) => {
    const categoryIdSelected = e.target.value; //id
    setProduct({ ...product, categoryId: +categoryIdSelected });
  };

  const handleInputFile = (e) => {
    // console.log(e.target.files[0]);
    const newImage = e.target.files[0];
    setImage(newImage);
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

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(image){
        const publicUrlUpload = await uploadFile(image);
        product.imagen = publicUrlUpload;
      }
      await requestUpdateProduct(product);
      //con Swal.fire funciona con una promesa, esperando la interacción del usuario
      await Swal.fire({
        title: `${product.nombre} actualizado!`,
        text: "El producto se actualizó exitosamente",
        icon: "success"
      });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

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
    <>
      <form onSubmit={handleSubmit} className="container-block grid grid-cols-2">
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

            {/* archivos */}
            <div className="mb-3 p-2">
              <div className="flex gap-4">
                <label className="block mb-1" htmlFor="imagen-producto">
                  Seleccione una imagen:
                </label>
                <button
                  className="btn btn-soft btn-accent btn-sm"
                  type="button"
                  // onClick={openDialog}
                  onClick={() => {
                    OpenDialogSwal(product?.imagen, product?.nombre);
                  }}
                >
                  Ver imagen actual
                </button>
              </div>
              <input
                type="file"
                className="file-input w-full"
                id="imagen-producto"
                onChange={handleInputFile}
              />
            </div>

            <button
              className="btn btn-soft btn-accent block mt-2"
              type="submit"
            >
              Guardar
            </button>
          </>
        )}
      </form>
      <dialog
        ref={dialogRef}
        className="p-6 text-white rounded-xl shadow-xl w-[400px] absolute left-1/2 top-[100px] -translate-x-1/2"
      >
        <button
          className="btn btn-soft btn-accent btn-sm ms-auto block"
          type="button"
          onClick={closeDialog}
        >
          X
        </button>
        {/* objeto?.propiedad -> la propiedad existe?, en caso no existe el equivalente es undefined */}
        {product?.imagen ? (
          <img src={product.imagen} alt={product.nombre} className="w-full" />
        ) : null}
      </dialog>
    </>
  );
};

export default EditProductView;
