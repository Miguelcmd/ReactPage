import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Login from './Login';  // Importa tu componente Login
import Registro from './Registro';  // Importa tu componente Registro
import './App.css';  // Estilos generales

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistro, setShowRegistro] = useState(false);

  // Comprobar si algún formulario está abierto para aplicar desenfoque
  const isAnyFormOpen = showLogin || showRegistro;

  return (
    <div className={`app-container ${isAnyFormOpen ? 'blur-background' : ''}`}>
      {/* Botones para abrir los formularios */}
      <div className="buttons">
        <button onClick={() => setShowLogin(true)}>Iniciar Sesión</button>
        <button onClick={() => setShowRegistro(true)}>Registrarse</button>
      </div>

      {/* Formulario de Login */}
      <AnimatePresence>
        {showLogin && (
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Login showLogin={showLogin} setShowLogin={setShowLogin} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Formulario de Registro */}
      <AnimatePresence>
        {showRegistro && (
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Registro showRegistro={showRegistro} setShowRegistro={setShowRegistro} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
