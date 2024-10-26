import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoB from "../../Pages/LogoB/LogoB";
import "./Restaurantes.css"; // Archivo CSS para los estilos de la sección de restaurantes

const transitionEffect = {
  visible: { x: "100vw", opacity: 1, transition: { duration: 0.8 } },
  exit: { x: "100vw", opacity: 1, transition: { duration: 0.6, delay: 0.8 } },
};

const Restaurantes = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  const getTestimonialText = (index) => {
    const testimonials = [
      'Una experiencia culinaria inolvidable, cada plato es único.',
      'El ambiente es acogedor y la atención es excelente.',
      'Un lugar perfecto para disfrutar de una buena comida en familia.',
      'Los sabores son exquisitos, recomiendo el menú degustación.'
    ];
    return testimonials[index];
  };

  const imageUrls = [
    "/restaurant1.jpg",
    "/restaurant2.jpeg",
    "/restaurant3.jpeg",
    "/restaurant4.jpeg",
  ];

  return (
    <>
      <div className="restaurantes-section">
        <div className="restaurantes-header">
          <img 
            src="/Restaurtant-logo.png" 
            alt="Restaurant Sign" 
            className="restaurantes-header-image" 
          />
          <h1>Descubre Nuestros Restaurantes</h1>
          <p>Ofrecemos una variedad de menús y ambientes para todos los gustos, desde cocina gourmet hasta opciones más informales.</p>
          <button className="restaurantes-btn">Reservar Mesa</button>
        </div>

        <div className="masonry-grid">
          {['Platillo 1', 'Platillo 2', 'Platillo 3', 'Platillo 4'].map((title, index) => (
            <div className="masonry-item" key={index}>
              <img 
                src={imageUrls[index]} 
                alt={title} 
                className="masonry-image" 
              />
              <div className="masonry-text">
                <h3>{title}</h3>
                <p>{getTestimonialText(index)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isAnimating && (
          <motion.div
            className="full-viewport"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={transitionEffect}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            <div className="blank-design">
              <h1>
                <LogoB className="logo-fullview" />
              </h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Restaurantes;
