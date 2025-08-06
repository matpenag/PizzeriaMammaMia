import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { useState } from "react";

const Cart = () => {
  const { cart, increment, decrement, removeFromCart, getTotal } = useCart();
  const { token } = useUser();

  const [success, setSuccess] = useState(false);

  const handleCheckout = async () => {
    const res = await fetch("http://localhost:5000/api/checkouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ cart }),
    });

    if (res.ok) {
      setSuccess(true);
    } else {
      alert("❌ Error al procesar la compra");
    }
  };

  if (cart.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h3>🛒 El carrito está vacío</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>🛒 Carrito de compras</h2>
      {cart.map((item) => (
        <div key={item._id} className="card mb-3">
          <div className="row g-0 align-items-center">
            <div className="col-md-2">
              <img src={item.img} className="img-fluid" alt={item.name} />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Precio: ${item.price}</p>
                <p className="card-text">Cantidad: {item.quantity}</p>
              </div>
            </div>
            <div className="col-md-3 d-flex flex-column justify-content-center align-items-center p-3">
              <button
                className="btn btn-sm btn-primary mb-2"
                onClick={() => increment(item._id)}
              >
                +
              </button>
              <button
                className="btn btn-sm btn-secondary mb-2"
                onClick={() => decrement(item._id)}
              >
                -
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => removeFromCart(item._id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      ))}

      <h4 className="mt-4">🧾 Total: ${getTotal().toLocaleString()}</h4>

      <button
        className="btn btn-success mt-3"
        disabled={!token}
        onClick={handleCheckout}
      >
        Confirmar compra
      </button>

      {success && (
        <p className="mt-3 text-success fw-bold">
          ✅ ¡Compra realizada con éxito!
        </p>
      )}
    </div>
  );
};

export default Cart;
