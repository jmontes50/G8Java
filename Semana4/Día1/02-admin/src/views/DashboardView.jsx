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
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const headsProducts = [
    { name: "nombre", label: "Nombre" },
    {
      name: "descripcion",
      label: "Descripción",
      format: (value) => `${value.slice(0, 120)} ...`,
    },
    { name: "cantidad", label: "Stock" },
    { name: "precio", label: "Precio", format: (value) => `S/ ${value}` },
  ];

  return (
    <div className="container-block">
      <h2 className="pb-6">Dashboard View</h2>
      <TableData data={products} headers={headsProducts} />
    </div>
  );
};

export default DashboardView;
