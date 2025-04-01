const ProductCard = ({ product }) => {
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure>
        <img src="" alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Product</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, tempora.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            Ver
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard