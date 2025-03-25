import { useParams } from "react-router-dom"

const EditProductView = () => {
  const { id } = useParams();
  console.log(id);
  
  return (
    <div>EditProductView</div>
  )
}

export default EditProductView