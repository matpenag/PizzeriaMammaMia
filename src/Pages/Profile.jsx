import { useUser } from "../context/UserContext";

const Profile = () => {
  const { email, logout } = useUser();

  return (
    <div className="container mt-5 text-center">
      <h2>👤 Perfil del usuario</h2>
      <p>Email: {email}</p>
      <button className="btn btn-danger" onClick={logout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;
