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
              <h2>Formulario de Registro</h2>
              <p>Aquí puedes poner tu formulario de registro.</p>
              <button onClick={closeRegistro}>Cerrar</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Registro;
