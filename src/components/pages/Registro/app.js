import React, { useState } from 'react';
import { motion } from 'framer-motion';  // Importar framer-motion
import './app.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);  // Estado para el menú
  const [isFormVisible, setIsFormVisible] = useState(false);  // Estado para el formulario

  // Alternar la visibilidad del formulario
  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  // Variantes de animación del menú
  const menuVariants = {
    open: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    closed: { x: "100%", opacity: 0, transition: { duration: 0.5 } }
  };

  // Variantes de animación del formulario
  const formVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className={`app-container ${isFormVisible ? 'blur-background' : ''}`}>
      {/* Menú animado */}
      <motion.nav
        className="menu"
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <ul className="menu-items">
          <li><a href="#" onClick={toggleForm}>Registro</a></li>
          <li><a href="#">Inicio de Sesión</a></li>
          <li><a href="#">Carrito</a></li>
        </ul>
      </motion.nav>

      {/* Formulario de Registro Animado */}
      {isFormVisible && (
        <motion.div
          className="form-container"
          variants={formVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="form-content">
            <h2>Registro</h2>
            <input type="text" placeholder="Nombre de Usuario" />
            <input type="email" placeholder="Correo Electrónico" />
            <input type="password" placeholder="Contraseña" />
            <button onClick={toggleForm}>Cerrar</button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default App;
