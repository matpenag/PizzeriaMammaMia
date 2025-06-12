import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("❌ Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      setMessage("❌ La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setMessage("✅ Inicio de sesión exitoso");
  };

  return (
    <div className="container my-5">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Ingresar
        </button>
      </form>

      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
  );
};

export default Login;
