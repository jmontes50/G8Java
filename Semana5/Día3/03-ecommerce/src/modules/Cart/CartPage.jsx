import useCartStore from "../../stores/useCartStore";

const CartPage = () => {
  const { cart } = useCartStore();

  const total = cart.reduce((acum, item) => acum + (item.precio * item.qtyCart), 0);

  return (
    <div className="px-4 py-10 mx-auto container max-w-7xl">
      <h2 className="text-3xl font-semibold mb-5">Checkout</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="col-span-2">
          <table className="w-full">
            <thead className="text-xs uppercase">
              <tr>
                <th className="px-6 py-3 text-left">
                  Producto
                </th>
                <th className="px-6 py-3 text-left">
                  Precio Unit.
                </th>
                <th className="px-6 py-3 text-left">
                  Cantidad
                </th>
                <th className="px-6 py-3 text-left">
                  Sub-total
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              { cart ? cart.map((prod) => (
                <tr key={prod.id} className="border-b-2">
                  <td className="px-6 py-4">{prod.nombre}</td>
                  <td className="px-6 py-4">S/ {prod.precio.toFixed(2)}</td>
                  <td className="px-6 py-4">{prod.qtyCart}</td>
                  <td className="px-6 py-4">S/ {(prod.qtyCart * prod.precio).toFixed(2)}</td>
                </tr>
              )) : null}
            </tbody>
          </table>
        </div>
        {/* descuento */}
        <div className="col-span-1 border-2">
          <div className="flex justify-between p-6 font-bold border-b-2">
            <span>Subtotal</span>
            <span>S/ { total.toFixed(2) }</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
