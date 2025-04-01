import useThemeStore from "../../../stores/useThemeStore";

const Navbar = () => {
  const { theme, changeTheme } = useThemeStore();

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Java's Store</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-sm" onClick={changeTheme}>
          { theme === 'light' ? <i className="fa-solid fa-sun fa-2x"></i> : <i className="fa-solid fa-moon fa-2x"></i>}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
