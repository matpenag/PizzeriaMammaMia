import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Cart = () => {
  const { cart, increment, decrement, removeFromCart, getTotal } = useCart();
  const { token } = useUser();

  return (
    <div className="container mt-5">
      <h2>🛒 Carrito de compras</h2>
      {/* ...cart UI aquí... */}
      <h4 className="mt-4">🧾 Total: ${getTotal().toLocaleString()}</h4>
      <button className="btn btn-success" disabled={!token}>
        Pagar
      </button>
    </div>
  );
};
