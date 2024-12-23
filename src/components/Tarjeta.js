import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Tarjeta.css";
import LogoB from "./Pages/LogoB/LogoB";

const Tarjeta = ({ title, description, imageUrl, route }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate(); // Para navegación

  const handleClick = () => {
    setIsAnimating(true); // Iniciar la animación
  };
  
  const handleAnimationComplete = () => {
    navigate(route); // Navegar a la ruta después de la animación
  };

  const transitionEffect = {
    hidden: { x: "-100vw", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    exit: { x: "100vw", opacity: 1, transition: { duration: 0.8, delay: 0.4 } },
  };

  return (
    <>
      <div className="card" style={{ width: "18rem", height: "20em" }}>
        <div className="image-container">
          <img
            src={imageUrl}
            className="card-img-top"
            alt="Imagen de la tarjeta"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <button
            onClick={handleClick}
            id="btn-detalle"
            className="btn btn-outline-dark"
            aria-label={`Ver detalles de ${title}`}
          >
            Detalle
          </button>
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
            onAnimationComplete={handleAnimationComplete}          >
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

export default Tarjeta;
