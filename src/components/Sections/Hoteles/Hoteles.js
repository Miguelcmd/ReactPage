import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoB from "../../Pages/LogoB/LogoB";
import "./Hoteles.css";

const transitionEffect = {
  visible: { x: "100vw", opacity: 1, transition: { duration: 0.8 } },
  exit: { x: "100vw", opacity: 1, transition: { duration: 0.6, delay: 0.8 } },
};

const Hoteles = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  const getTestimonialText = (index) => {
    const testimonials = [
      'La experiencia fue increíble, el servicio al cliente es de primera.',
      'Me encantó la vista desde la habitación, realmente vale la pena.',
      'Un lugar perfecto para relajarse, 100% recomendado.',
      'Todo fue excelente, desde la comida hasta las instalaciones.'
    ];
    return testimonials[index];
  };

  return (
    <>
       <div className="hotel-section">
      <div className="hotel-header">
        <img 
          src="https://via.placeholder.com/200" 
          alt="Hotel Sign" 
          className="hotel-header-image" 
        />
        <h1>Explora Nuestras Habitaciones</h1>
        <p>Ofrecemos una variedad de habitaciones que se adaptan a todas tus necesidades, desde suites de lujo hasta opciones más económicas.</p>
        <button className="hotel-btn">Reservar</button>
      </div>

      <div className="masonry-grid">
        {['Cita 1', 'Cita 2', 'Cita 3', 'Cita 4'].map((title, index) => (
          <div className="masonry-item" key={index}>
            <img 
              src={`https://via.placeholder.com/150`} 
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

export default Hoteles;
