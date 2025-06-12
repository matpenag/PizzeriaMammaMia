const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Ingredientes: {ingredients.join(", ")}
          <br />
          <strong>Precio:</strong> ${price.toLocaleString()}
        </p>
        <button className="btn btn-outline-info me-2">Ver más</button>
        <button className="btn btn-success">Añadir</button>
      </div>
    </div>
  );
};

export default CardPizza;
