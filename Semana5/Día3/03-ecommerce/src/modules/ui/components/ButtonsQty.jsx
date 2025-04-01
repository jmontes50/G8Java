const ButtonsQty = () => {
  return (
    <div className="flex">
      <button className="btn btn-white p-4">
        <i className="fa-solid fa-minus"></i>
      </button>
      <span className="p-4 flex align-middle">1</span>
      <button className="btn btn-white p-4">
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default ButtonsQty;
