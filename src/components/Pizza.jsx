import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas/p001")
      .then((res) => res.json())
      .then((data) => setPizza(data))
      .catch((err) => console.error("Error al cargar la pizza:", err));
  }, []);

  if (!pizza) return <div className="container mt-5">Cargando pizza...</div>;

  return (
    <div className="container my-5">
      <div className="card mx-auto" style={{ maxWidth: "600px" }}>
        <img src={pizza.img} className="card-img-top" alt={pizza.name} />
        <div className="card-body">
          <h2 className="card-title">{pizza.name}</h2>
          <p className="card-text">{pizza.desc}</p>
          <h5>Ingredientes:</h5>
          <ul>
            {pizza.ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
          <h4 className="mt-3">Precio: ${pizza.price.toLocaleString()}</h4>
          <button className="btn btn-success mt-2">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
