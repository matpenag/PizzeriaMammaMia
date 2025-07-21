import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { getTotal } = useCart();

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">
        🍕 Mamma Mía
      </Link>

      <div className="navbar-nav ms-auto">
        <Link className="nav-link" to="/register">
          Registro
        </Link>
        <Link className="nav-link" to="/login">
          Login
        </Link>
        <Link className="nav-link" to="/profile">
          Perfil
        </Link>
        <Link className="nav-link" to="/cart">
          🛒 Total: ${getTotal().toLocaleString()}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
