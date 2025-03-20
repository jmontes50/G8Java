import { useState, useEffect } from "react";
import { requestProducts } from "../services/productService";
import TableData from "../components/TableData";

const DashboardView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsObtained = await requestProducts();
        // console.log(productsObtained);
        setProducts(productsObtained);
      } catch (error) {
        console.log(error)
      }
    }
    getProducts();
  }, []);

  return <div>
    <h2>Dashboard View</h2>
    <TableData data={ products }/>
    {/* <table className="border-collapse border border-gray-400">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {products.map((prod) => (
          <tr key={prod.id}>
            <td>{prod.nombre}</td>
            <td>{prod.precio}</td>
          </tr>
        ))}
      </tbody>
    </table> */}
  </div>;
};

export default DashboardView;
