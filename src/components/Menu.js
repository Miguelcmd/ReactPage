// src/components/Menu.js
import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Menu.css'; // Importación del CSS del menú

const Menu = ({ setShowRegistro, setShowLogin,  }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleRegistroClick = () => {
    setShowRegistro(true);
    setIsOpen(false);  
  };
   
  const handleLoginClick = () => {
    setShowLogin(true);
    setIsOpen(false);  
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername(null);
    setShowUserMenu(false);
  };
   
  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };
  
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
        className={`menu ${isOpen ? "open" : "closed"}`}
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
         <ul className="menu-items">
         <li><a href="#" onClick={handleLoginClick}>Iniciar Sesión</a></li>
          <li><a href="#" onClick={handleRegistroClick}>Registro</a></li>
          <li><Link to="/CheckoutForm" onClick={toggleMenu}>Carrito</Link></li>
          {username ? (
            <>
              <li>
                <a href="#" onClick={toggleUserMenu}>{username}</a>
                {showUserMenu && (
                  <ul className="user-menu">
                    <li><Link to="/profile">Editar Perfil</Link></li>
                    <li><a href="#" onClick={handleLogout}>Cerrar Sesión</a></li>
                  </ul>
                )}
              </li>
            </>
          ) : (
            <>
              
            </>
          )}
          
        </ul>
      </motion.nav>
    </div>
  );
};

export default Menu;
