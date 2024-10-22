// components/Title.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Title.css';

const domains = ['.com', '.net', '.org', '.info', '.co','.edu','.gov','.biz','.app','.space','.design','.store','.tech','.ai']; // Lista de dominios

const Title = () => {
  const [currentDomainIndex, setCurrentDomainIndex] = useState(0);

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDomainIndex((prev) => (prev + 1) % domains.length); // Cicla a través de los dominios
    }, 3000); // Cambia cada 2 segundos

    return () => clearInterval(interval); // Limpiar intervalo al desmontar
  }, []);

  return (
    <div className="title-container">
      <motion.h1
        className="app-title"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        Reservas
      </motion.h1>
      <motion.span
        className="app-dot-com"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        {domains[currentDomainIndex]} {/* Mostrar el dominio actual */}
      </motion.span>
      
    </div>
  );
};

export default Title;
