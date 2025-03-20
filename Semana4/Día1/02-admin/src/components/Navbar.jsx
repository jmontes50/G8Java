import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <Link to='/' className="btn btn-ghost text-xl">Admin</Link>
      <Link to='/createproduct' className="btn btn-ghost text-sm">
        Crear producto
      </Link>
    </div>
  );
};

export default Navbar;
