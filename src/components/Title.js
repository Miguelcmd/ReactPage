// components/Title.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Title.css';

const domains = ['Hoteles', 'Vuelos', 'Transporte', 'Restaurantes'];

const Title = () => {
  const [currentDomainIndex, setCurrentDomainIndex] = useState(0);

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDomainIndex((prev) => (prev + 1) % domains.length);
    }, 3000);

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
        Reserva
      </motion.h1>
      <motion.span
        className="app-dot-com"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        {domains[currentDomainIndex]}
      </motion.span>
    </div>
  );
};

export default Title;
