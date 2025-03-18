import { useState, useEffect } from "react";
import { requestProducts } from "../services/productService";

const DashboardView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsObtained = await requestProducts();
        console.log(productsObtained);
      } catch (error) {
        console.log(error)
      }
    }
    getProducts();
  });

  return <div>DashboardView</div>;
};

export default DashboardView;
