import { useCart } from "../context/CartContext";

const CardPizza = ({ _id, name, price, ingredients, img }) => {
  const { addToCart } = useCart();

  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>Ingredientes:</strong>
          <ul>
            {ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </p>
        <p className="card-text fw-bold">Precio: ${price.toLocaleString()}</p>
        <button
          className="btn btn-success mt-auto"
          onClick={() => addToCart({ _id, name, price, img })}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default CardPizza;
