import { useUser } from "../context/UserContext";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const { register, token } = useUser();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  if (token) return <Navigate to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirm) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    if (password !== confirm) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const success = await register(email, password);
    if (success) navigate("/");
  };

  return (
    <div className="container mt-5">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control mb-2"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-2"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Confirmar contraseña"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <button className="btn btn-primary">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
