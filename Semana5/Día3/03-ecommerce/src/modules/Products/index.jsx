import useGetAxios from "../../hooks/useGetAxios";
import ProductCard from "./components/ProductCard";
import Loading from "../ui/components/Loading";
import CategoryFilter from "./components/CategoryFilter";
import useCategoryStore from "../../stores/useCategoryStore";

const ProductPage = () => {
  
  const { categorySelected } = useCategoryStore();
  
  const categoryParam = categorySelected ? `categoryId=${categorySelected.id}` : "";

  const URL = `https://json-server-vercel-eosin-tau.vercel.app/products?${categoryParam}`

  const { data, loading, error } = useGetAxios(URL);

  if (error) {
    return <p>
      Ocurrio un error, actualice o contactesé con soporte
      </p>;
  }

  if(loading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto lg:container">
      <h1 className="text-3xl my-6">Catálogo</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <CategoryFilter className="col-span-full" />
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
