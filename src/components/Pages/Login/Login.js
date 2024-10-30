// src/components/Pages/Login.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Login.css';
import { loginUser } from '../../services/api';


const Login = ({ showLogin, setShowLogin }) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const closeLogin = () => setShowLogin(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await loginUser({ email, password });
      
      // Guarda el token en localStorage
      localStorage.setItem('token', response.access_token);
      closeLogin();
    } catch (err) {
      setError('Error al iniciar sesión. Verifica tus credenciales.');
    }
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
      {error && <p className="error-message">{error}</p>}
      <form className="login-form" onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-outline-dark">Iniciar sesión</button>
      </form>
    </motion.div>
  );
};

export default Login;