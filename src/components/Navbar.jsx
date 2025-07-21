import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { getTotal } = useCart();
  const { token, logout } = useUser();

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">
        🍕 Mamma Mía
      </Link>
      <div className="navbar-nav ms-auto">
        {token ? (
          <>
            <Link className="nav-link" to="/profile">
              Perfil
            </Link>
            <button className="btn btn-danger nav-link" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="nav-link" to="/register">
              Registro
            </Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </>
        )}
        <Link className="nav-link" to="/cart">
          🛒 Total: ${getTotal().toLocaleString()}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
