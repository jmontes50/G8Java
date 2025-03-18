import { Link } from "react-router-dom";

const Navegacion = () => {
  return (
    <ul>
      <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <Link to="/textos">Textos</Link>
      </li>
    </ul>
  );
};

export default Navegacion;
