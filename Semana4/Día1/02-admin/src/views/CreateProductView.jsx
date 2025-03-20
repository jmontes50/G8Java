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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
  }

  return (
    <form onSubmit={handleSubmit}>
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
      {/* <button className="btn btn-soft btn-accent" type="button">Guardar</button> */}
      <button className="btn btn-soft btn-accent" type="submit">Guardar</button>
    </form>
  );
};

export default CreateProductView;
