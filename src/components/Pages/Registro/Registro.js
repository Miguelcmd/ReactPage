import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Registro.css';

const Registro = ({ showRegistro, setShowRegistro }) => {
  const closeRegistro = () => {
    setShowRegistro(false);
  };

  return (
    <div className={`app-container ${showRegistro ? 'blur-background' : ''}`}>
      <AnimatePresence>
        {showRegistro && (
          <motion.div
            className="registro-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <div className="registro-content">              
              <button className="close-button" onClick={closeRegistro}>X</button>
                         
              <h2>Formulario de Registro</h2>

              {/* Formulario de registro */}
              <form className="registro-form">
                <div className="form-group">
                  <label htmlFor="email">Correo electrónico:</label>
                  <input type="email" id="registro-email" placeholder="Ingresa tu correo" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Contraseña:</label>
                  <input type="password" id="registro-password" placeholder="Ingresa tu contraseña" />
                </div>
                <div className="form-group">
                  <label htmlFor="confirm-password">Confirmar contraseña:</label>
                  <input type="password" id="confirm-password" placeholder="Confirma tu contraseña" />
                </div>
                <button type="submit" className="submit-button">Registrarse</button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Registro;
