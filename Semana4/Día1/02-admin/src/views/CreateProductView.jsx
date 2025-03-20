import { useState } from "react";
import Input from "../components/Input";

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
    // "categoryId": 1
  });

  //componentes controlados, amarrar el value de un input a un estado, pero al estar amarrado tenemos que gestionarlo para actualizar el estado en c/cambio
  const handleInput = (event) => {
    // console.log(event)
    // console.log(event.target.value);
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

  return (
    <form>
      { inputs.map((item, i) => (
        <Input
          key={i}
          value={product}
          nameProp={item.name}
          label={item.label}
          type={item.type}
          handleInput={handleInput}
        />
      ))}
      {/* <input
        type="text"
        placeholder="Type here"
        className="input"
        value={product.nombre}
        onChange={handleInput}
        name="nombre"
      />
      <input
        type="text"
        placeholder="Type here"
        className="input"
        value={product.descripcion}
        onChange={handleInput}
        name="descripcion"
      /> */}
    </form>
  );
};

export default CreateProductView;
