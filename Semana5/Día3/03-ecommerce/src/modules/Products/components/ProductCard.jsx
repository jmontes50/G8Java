import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, nombre, imagen, descripcion } = product;

  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <picture className="h-[420px] w-full">
        <img src={imagen} alt={`imagen de ${nombre}`} className="w-full h-full object-cover"/>
      </picture>
      <div className="card-body">
        <h2 className="card-title">{nombre}</h2>
        <p>{descripcion}</p>
        <div className="card-actions justify-end">
          {/* <button className="btn btn-primary">Ver</button> */}
          <Link to={`/productdetail/${id}`} className="btn btn-primary">Ver</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
