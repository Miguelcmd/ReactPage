import React from 'react';
import { motion } from 'framer-motion';
import './Login.css';

const Login = ({ showLogin, setShowLogin }) => {
  const closeLogin = () => setShowLogin(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // manejar la lógica de inicio de sesión
  };

  return (
    <motion.div
      className="login-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <button className="close-button" onClick={closeLogin}>X</button>
      <h2>Inicio Sesión</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="login-email">Correo electrónico:</label>
          <input type="email" id="login-email" placeholder="Ingresa tu correo" required />
        </div>
        <div className="form-group">
          <label htmlFor="login-password">Contraseña:</label>
          <input type="password" id="login-password" placeholder="Ingresa tu contraseña" required />
        </div>
        <button type="submit" className="btn btn-outline-dark"gvf >Iniciar sesión</button>
      </form>
    </motion.div>
  );
};

export default Login;
