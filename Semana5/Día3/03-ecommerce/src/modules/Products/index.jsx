import useGetAxios from "../../hooks/useGetAxios"

const ProductPage = () => {
  const { data, loading } = useGetAxios('https://json-server-vercel-eosin-tau.vercel.app/products');
  console.table({ data, loading });

  return (
    <div>index</div>
  )
}

export default ProductPage