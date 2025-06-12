const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg bg-light px-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          🍕 Mamma Mía
        </a>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-primary">🍕 Home</button>
          <button className="btn btn-outline-primary">
            🛒 Total: ${total.toLocaleString()}
          </button>
          {token ? (
            <>
              <button className="btn btn-outline-success">🔓 Profile</button>
              <button className="btn btn-outline-danger">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-success">🔐 Login</button>
              <button className="btn btn-outline-secondary">🔐 Register</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
