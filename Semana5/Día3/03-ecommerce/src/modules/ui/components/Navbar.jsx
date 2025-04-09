import useThemeStore from "../../../stores/useThemeStore";
import { Link } from "react-router-dom";
import AnimatedLink from "./AnimatedLink";

const Navbar = () => {
  const { theme, changeTheme } = useThemeStore();

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <AnimatedLink to="/" className="btn btn-ghost text-xl">
          Java's Store
        </AnimatedLink>
        <AnimatedLink to="/article" className="btn btn-ghost btn-sm">
          Article
        </AnimatedLink>
      </div>
      <div className="flex-none">
        <AnimatedLink to="/cart" className="btn btn-square btn-sm fa-solid">
          <i className="fa-solid fa-cart-shopping fa-2x"></i>
        </AnimatedLink>
        <button className="btn btn-square btn-sm" onClick={changeTheme}>
          {theme === "light" ? (
            <i className="fa-solid fa-sun fa-2x"></i>
          ) : (
            <i className="fa-solid fa-moon fa-2x"></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
