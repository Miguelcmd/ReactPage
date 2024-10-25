// components/Title.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Title.css';

const domains = ['Hoteles','Vuelos','Transporte','Restaurantes']; // Lista de dominios

const Title = () => {
  const [currentDomainIndex, setCurrentDomainIndex] = useState(0);
  const [topPosition, setTopPosition] = useState(130);

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  useEffect(() => {
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        // Si el scroll es mayor a 126px, fijar a 4px
        setTopPosition(1);
      } else {
        // Ajustar gradualmente la posición entre 130px y 4px
        const newTop = 1 - scrollPosition;
        setTopPosition(newTop);
      }
    };

    window.addEventListener('scroll', handleScroll);

    

    const interval = setInterval(() => {
      setCurrentDomainIndex((prev) => (prev + 1) % domains.length); // Cicla a través de los dominios
    }, 3000); // Cambia cada 2 segundos

    return () => clearInterval(interval); window.removeEventListener('scroll', handleScroll);  // Limpiar intervalo al desmontar
  }, []);

  return (
    <div className="title-container" style={{ top: `${topPosition}px` }}>
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
        {domains[currentDomainIndex]} {/* Mostrar el dominio actual */}
      </motion.span>
      
    </div>
  );
};

export default Title;
