import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoB from "../../Pages/LogoB/LogoB";
import "./Hoteles.css";

const transitionEffect = {
  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  exit: { x: "100vw", opacity: 1, transition: { duration: 0.8, delay: 0.5 } },
};

const Hoteles = () => {
  // Definir un estado para controlar si la animación está activa
  const [isAnimating, setIsAnimating] = useState(false);

  // Usar useEffect para iniciar la animación cuando el componente se monta
  useEffect(() => {
    setIsAnimating(true); // Iniciar la animación al montar el componente
  }, []); // El array vacío [] asegura que esto se ejecute solo una vez al montar

  return (
    <>
      <section className="Back-section">
        <section className="hoteles-section">
          <div className="hoteles-grid-container">
            <div className="hoteles-image-container">
              <img src="hotel.jpg" alt="Imagen del hotel" />
            </div>
            <div className="hoteles-content-container">
              <span className="hoteles-supertitle">Ofertas Exclusivas</span>
              <h1>Hotel de Lujo en la Ciudad</h1>
              <p>
                Disfruta de una estadía inolvidable en nuestro hotel con todas
                las comodidades que necesitas para relajarte y disfrutar.
              </p>
              <div className="hoteles-button-group">
                <button className="hoteles-btn hoteles-primary">
                  Reservar Ahora
                </button>
                <button className="hoteles-btn hoteles-secondary">
                  Ver más
                </button>
                <button className="hoteles-btn hoteles-tertiary">
                  Contáctanos
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>

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
