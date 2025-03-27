import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

const BarStock = ({ data }) => {
  if(data.length === 0) return null;
  ChartJS.register(BarElement, CategoryScale, LinearScale);

  const labels = data.map((prod) => prod.nombre);
  const dataset = data.map((prod) => prod.cantidad);

  const dataStock = {
    // labels: labels,
    labels,
    datasets: [
      {
        label: "Stock de productos",
        data: [...dataset],
        backgroundColor: 'rgba(255, 99, 132)'
      }
    ]
  }

  return (
    <>
      <Bar data={dataStock} />
    </>
  );
};

export default BarStock;
