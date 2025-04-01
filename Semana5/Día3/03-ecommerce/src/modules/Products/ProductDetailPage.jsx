import { useParams } from "react-router-dom";
import useGetAxios from "../../hooks/useGetAxios";
import Loading from "../ui/components/Loading";
import ButtonsQty from "../ui/components/ButtonsQty";
import Stars from "../ui/components/Stars";

const ProductDetailPage = () => {

  const { id } = useParams();

  const { data, loading, error } = useGetAxios(`https://json-server-vercel-eosin-tau.vercel.app/products/${id}`);

  if (error) {
    return <p>
      Ocurrio un error, actualice o contactesé con soporte
      </p>;
  }
  if(loading) {
    return <Loading />;
  }
  return (
    <div className="py-4 mx-auto container">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="w-full max-h-[500px]">
          <img src={data.imagen} alt={data.nombre} />
        </div>
        <div className="my-2">
          <h2 className="text-3xl font-semibold mb-5">
            {data.nombre}
          </h2>

          <Stars rating={data.estrellas} />

          <div className="mb-5 text-3xl">
            <span className="me-2">
              S/ {data.precio_oferta.toFixed(2)}
            </span>
            <span className="line-through text-slate-400">
              S/ {data.precio.toFixed(2)}
            </span>
          </div>

          <p className="mb-5">
            {data.descripcion}
          </p>
          <ButtonsQty />
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage