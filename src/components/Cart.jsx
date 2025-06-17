import { useState } from "react";
import { pizzaCart } from "../pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container my-5">
      <h2>🛒 Carrito de compras</h2>
      {cart.map((item) => (
        <div
          key={item.id}
          className="d-flex align-items-center mb-3 border-bottom pb-2"
        >
          <img
            src={item.img}
            alt={item.name}
            style={{ width: "100px" }}
            className="me-3"
          />
          <div className="flex-grow-1">
            <h5>{item.name}</h5>
            <p>${item.price.toLocaleString()}</p>
            <div className="btn-group">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="btn btn-outline-secondary"
              >
                -
              </button>
              <span className="mx-2">{item.quantity}</span>
              <button
                onClick={() => increaseQuantity(item.id)}
                className="btn btn-outline-secondary"
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
      <h4>Total: ${total.toLocaleString()}</h4>
      <button className="btn btn-success">Pagar</button>
    </div>
  );
};

export default Cart;
