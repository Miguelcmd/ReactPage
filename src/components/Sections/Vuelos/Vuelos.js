import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoB from "../../Pages/LogoB/LogoB";
import "./Vuelos.css";

const transitionEffect = {
  visible: { x: "100vw", opacity: 1, transition: { duration: 0.8 } },
  exit: { x: "100vw", opacity: 1, transition: { duration: 0.6, delay: 0.8 } },

};

const Vuelos = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const ciudades = [
    { nombre: "París", imagen: "/paris.jpg" },
    { nombre: "Nueva York", imagen: "/nueva-york.jpeg" },
    { nombre: "Tokio", imagen: "/tokio.jpeg" },
    { nombre: "Dubái", imagen: "/dubai.jpeg" }
  ];
  useEffect(() => {
    setIsAnimating(true);
  }, []);

  return (
    <>
    <div className="vuelo-section">
      {/* Contenedor de imagen de avión */}
      <div className="vuelo-avion-container">
        <img src="/avion.png" alt="Avión" className="vuelo-avion-image" />
        <h1>Descubre destinos únicos</h1>
      </div>

      {/* Galería de ciudades */}
      <div className="ciudades-gallery">
        {ciudades.map((ciudad, index) => (
          <div className="ciudad-item" key={index}>
            <img src={ciudad.imagen} alt={ciudad.nombre} className="ciudad-image" />
            <h3 className="ciudad-nombre">{ciudad.nombre}</h3>
          </div>
        ))}
      </div>

      {/* Opciones de reserva */}
      <div className="reserva-opciones">
        <h2>Reserva tu viaje</h2>
        <p>Encuentra el destino perfecto y disfruta de una experiencia inolvidable.</p>
        <button className="reserva-btn">Reservar ahora</button>
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

export default Vuelos;
