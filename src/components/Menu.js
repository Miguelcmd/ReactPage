import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Menu.css'; // Importación del CSS del menú

const Menu = ({ setShowRegistro }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función para manejar el click en el botón de registro
  const handleRegistroClick = () => {
    setShowRegistro(true);
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
    </div>
  );
};

export default Menu;
