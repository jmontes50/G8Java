import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { requestProducts, requestDeleteProduct } from "../services/productService";
import TableData from "../components/TableData";
import Swal from "sweetalert2";

const DashboardView = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

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

  const handleEdit = (id) => {
    navigate(`/editproduct/${id}`);
  };

  const handleDelete = async (id) => {
    // console.log("Eliminar!!!!");
    const resultSwal = await Swal.fire({
      title: "Desea eliminar el producto?",
      text: "Esta acción es definitiva",
      icon: "warning",
      showConfirmButton: true,
      confirmButtonText: "Si, eliminar",
      confirmButtonColor: "red",
      showCancelButton: true,
      cancelButtonColor: "blue",
      cancelButtonText: "No, cancelar"
    })
    // console.log(resultSwal)
    if(resultSwal.isConfirmed) {
      await requestDeleteProduct(id);
      Swal.fire({
        title: "Producto eliminado",
        text: "Se, elimino definitivamente",
        icon: "success",
      })
    }
  }

  const actionsTable = [
    { name: "Editar", icon: "edit", action: handleEdit, bgColor: "warning" },
    { name: "Eliminar", icon: "delete", action: handleDelete, bgColor: "danger"}
  ];

  return (
    <div className="container-block">
      <h2 className="pb-6 prose">Dashboard View</h2>
      <TableData
        data={products}
        headers={headsProducts}
        actions={actionsTable}
      />
    </div>
  );
};

export default DashboardView;
