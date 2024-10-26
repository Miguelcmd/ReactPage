import React from 'react';
import { motion } from 'framer-motion';
import './Registro.css';

const Registro = ({ showRegistro, setShowRegistro }) => {
  const closeRegistro = () => setShowRegistro(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // manejar la lógica de registro
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
          <label htmlFor="registro-email">Correo electrónico:</label>
          <input type="email" id="registro-email" placeholder="Ingresa tu correo" required />
        </div>
        <div className="form-group">
          <label htmlFor="registro-password">Contraseña:</label>
          <input type="password" id="registro-password" placeholder="Ingresa tu contraseña" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirmar contraseña:</label>
          <input type="password" id="confirm-password" placeholder="Confirma tu contraseña" required />
        </div>
        <button type="submit" className="btn btn-outline-dark">Registrarse</button>
      </form>
    </motion.div>
  );
};

export default Registro;
