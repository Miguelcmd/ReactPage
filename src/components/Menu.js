import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Menu.css'; // Importación del CSS del menú
import './Pages/Registro/Registro.css'; // Importación del CSS para el formulario de registro

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showRegistro, setShowRegistro] = useState(false); // Estado para mostrar el contenedor de registro

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función para mostrar el formulario de registro
  const handleRegistroClick = () => {
    setShowRegistro(true);
  };

  // Función para cerrar el formulario de registro
  const closeRegistro = () => {
    setShowRegistro(false);
  };

  // Variants para la animación del menú desplegable
  const menuVariants = {
    open: { x: 18, opacity: 1, transition: { duration: 0.5 } },
    closed: { x: "10%", opacity: 0, transition: { duration: 0.5 } }
  };

  // Variants para el ícono hamburguesa
  const lineVariants = {
    open: (index) => ({
      rotate: index === 1 ? 45 : -45,
      y: index === 1 ? 8 : -8,
      opacity: index === 2 ? 0 : 1,
      transition: { duration: 0.3 }
    }),
    closed: {
      rotate: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="menu-container">
      {/* Ícono de hamburguesa */}
      <div className="hamburger" onClick={toggleMenu}>
        {[1, 2, 3].map((_, index) => (
          <motion.div
            key={index}
            className="line"
            custom={index}
            variants={lineVariants}
            animate={isOpen ? "open" : "closed"}
          />
        ))}
      </div>
      <div className={`app-container ${showRegistro ? 'blur-background' : ''}`}></div>

      {/* Menú desplegable */}
      <motion.nav
        className="menu"
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <ul className="menu-items">
          <li><a href="#" onClick={handleRegistroClick}>Registro</a></li>
          <li><a href="#">Inicio de Sesión</a></li>
          <li><a href="#">Carrito</a></li>
        </ul>
      </motion.nav>

      {/* Contenedor del formulario de registro */}
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

export default Menu;
