// import { useParams } from "react-router-dom"
import { useSearchParams } from "react-router-dom";

const Detalle = () => {
  // const { nombre } = useParams();
  const [searchParams] = useSearchParams();
  console.log("search", searchParams)

  const id = searchParams.get('id');

  console.log("el id es:", id)
  // const filters = 
  // console.log("params:", nombre);
  return (
    <div>Detalle</div>
  )
}

export default Detalle