//Este componente no se utiliza, es para mostrar componentes controlados

import { useState } from "react";

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
    console.log(event.target.value);
    setProduct({...product, nombre: event.target.value});
  };

  return (
    <input
      type="text"
      placeholder="Type here"
      className="input"
      value={product.nombre}
      onChange={handleInput}
    />
  );
};

export default CreateProductView;