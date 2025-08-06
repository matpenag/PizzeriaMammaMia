import { createContext, useContext, useState } from "react";

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  const login = async (email, password) => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      setToken(data.token);
      setEmail(data.email);
      return true;
    } else {
      alert(data.msg || "Error al iniciar sesión");
      return false;
    }
  };

  const register = async (email, password) => {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      setToken(data.token);
      setEmail(data.email);
      return true;
    } else {
      alert(data.msg || "Error al registrarse");
      return false;
    }
  };

  // 2. Logout
  const logout = () => {
    setToken(null);
    setEmail(null);
  };

  // 3. Obtener perfil
  const getProfile = async () => {
    const res = await fetch("http://localhost:5000/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    if (res.ok) {
      setEmail(data.email);
    } else {
      console.log("Error al obtener perfil");
    }
  };

  return (
    <UserContext.Provider
      value={{ token, email, login, register, logout, getProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};
