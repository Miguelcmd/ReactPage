// Login.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { loginUser } from "../../services/api";
import "./Login.css";

const Login = ({ showLogin, setShowLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const closeLogin = () => setShowLogin(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await loginUser({ email, password });

      if (token) {
        localStorage.setItem("token", token);
      }

      setError("");
      closeLogin();
    } 
    
    catch (err) {setError("Credenciales inválidas"); 
    }
  };

  return (
    <motion.div
      className="login-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <button className="close-button" onClick={closeLogin}>
        X
      </button>
      <h2>Inicio Sesión</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label htmlFor="login-email">Correo electrónico:</label>
          <input
            type="email"
            id="login-email"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="login-password">Contraseña:</label>
          <input
            type="password"
            id="login-password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-outline-light">
          Iniciar sesión
        </button>
      </form>
    </motion.div>
  );
};

export default Login;
