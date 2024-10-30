// Registro.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { registerUser } from '../../services/api';
import './Registro.css';

const Registro = ({ showRegistro, setShowRegistro }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const closeRegistro = () => setShowRegistro(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Verificación de contraseña
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    try {
      const response = await registerUser({
        username: formData.username,
        email: formData.email,
        password: formData.password
      });

      if (response.message) {
        alert(response.message);
        setFormData({ username: '', email: '', password: '', confirmPassword: '' });
        closeRegistro();
      } else {
        alert(`Error: ${response.detail}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al conectar con la API");
    }
  };

  return (
    <motion.div
      className="registro-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <button className="close-button" onClick={closeRegistro}>X</button>
      <h2>Formulario de Registro</h2>
      <form className="registro-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Ingresa tu usuario"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingresa tu correo"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>        
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar contraseña:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirma tu contraseña"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-outline-light">Registrarse</button>
      </form>
    </motion.div>
  );
};

export default Registro;
