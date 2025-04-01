import useGetAxios from "../../hooks/useGetAxios";
import ProductCard from "./components/ProductCard";

const ProductPage = () => {
  const { data, loading } = useGetAxios(
    "https://json-server-vercel-eosin-tau.vercel.app/products"
  );

  return (
    <div>
      <h1 className="text-3xl my-6">Catálogo</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data
          ? data.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))
          : null}
      </div>
    </div>
  );
};

export default ProductPage;
