import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoB from "../../Pages/LogoB/LogoB";
import "./Hoteles.css";

const getPrice = (index) => {
  const prices = ["$120", "$150", "$100", "$200"];
  return prices[index];
};

const transitionEffect = {
  visible: { x: "100vw", opacity: 1, transition: { duration: 0.8 } },
  exit: { x: "100vw", opacity: 1, transition: { duration: 0.6, delay: 0.8 } },
};

const Hoteles = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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

  const imageUrls = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.webp",
    "/image4.png",
   
  ];

  return (
    <>
      <div className="hotel-section">
        <div className="hotel-header">
          <img 
            src="/pillow.png" 
            alt="Hotel Sign" 
            className="hotel-header-image" 
          />
          <h1>Explora nuestros Hoteles</h1>
          <p>Ofrecemos una variedad de hoteles que se adaptan a todas tus necesidades, 
             desde suites de lujo hasta opciones más económicas.
          </p>          
        </div>

        <div className="masonry-grid">
          {['Hotel 1', 'Hotel 2', 'Hotel 3', 'Hotel 4'].map((title, index) => (
            <div 
            className="masonry-item" 
            key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              >
              <img 
                src={imageUrls[index]} 
                alt={title} 
                className="masonry-image" 
              />
              <div className="masonry-text">
                <h3>{title}</h3>
                <p>{getTestimonialText(index)}</p>
                <button className="price-btn">
                  {hoveredIndex === index ? "Agregar al carrito" : getPrice(index)}
                </button>
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
