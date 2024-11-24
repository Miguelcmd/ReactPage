import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createReservation } from "../../services/api"; // Importar función del servicio
import LogoB from "../../Pages/LogoB/LogoB";
import "./Hoteles.css";

const Hoteles = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [nights, setNights] = useState(1);
  const [isLoading, setIsLoading] = useState(false); // Estado para indicar carga
  const [errorMessage, setErrorMessage] = useState(null); // Estado para errores

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  const imageUrls = ["/image1.jpg", "/image2.jpg", "/image3.webp", "/image4.png"];

  const getPrice = (index) => {
    const prices = ["120", "150", "100", "200"];
    return prices[index];
  };

  const openModal = (index) => {
    setSelectedHotel(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedHotel(null);
    setNights(1);
    setErrorMessage(null); // Resetear errores al cerrar el modal
  };

  const handleNightsChange = (e) => {
    setNights(Number(e.target.value));
  };

  const calculateTotal = () => {
    return getPrice(selectedHotel) * nights;
  };

  const handleReservation = async () => {
    setIsLoading(true);
    setErrorMessage(null);

    const reservationData = {
      user_id: localStorage.getItem("user_id"), // Asegúrate de guardar el user_id en el login
      hotel_name: ["Hotel 1", "Hotel 2", "Hotel 3", "Hotel 4"][selectedHotel],
      nights: nights,
      total_price: calculateTotal(),
    };

    try {
      const response = await createReservation(reservationData);
      alert(`Reserva creada exitosamente`); // Mensaje de éxito
      closeModal(); // Cierra el modal tras éxito
    } catch (error) {
      console.error(error.message);
      setErrorMessage("Hubo un problema al crear la reserva. Intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }

    const userId = localStorage.getItem("user_id");

  };

  return (
    <>
      <div className="hotel-section">
        <div className="hotel-header">
          <img src="/pillow.png" alt="Hotel Sign" className="hotel-header-image" />
          <h1>Explora nuestros Hoteles</h1>
          <p>
            Ofrecemos una variedad de hoteles que se adaptan a todas tus
            necesidades, desde suites de lujo hasta opciones más económicas.
          </p>
        </div>

        <div className="masonry-grid">
          {["Hotel 1", "Hotel 2", "Hotel 3", "Hotel 4"].map((title, index) => (
            <div
              className="masonry-item"
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={imageUrls[index]} alt={title} className="masonry-image" />
              <div className="masonry-text">
                <h3>{title}</h3>
                <button className="price-btn" onClick={() => openModal(index)}>
                  {hoveredIndex === index ? "Reservar ahora" : `$${getPrice(index)}`}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h2>{`Reservar ${
              ["Hotel 1", "Hotel 2", "Hotel 3", "Hotel 4"][selectedHotel]
            }`}</h2>
            <p>Precio por noche: ${getPrice(selectedHotel)}</p>
            <label>
              Noches:{" "}
              <input
                type="number"
                min="1"
                value={nights}
                onChange={handleNightsChange}
                
              />
            </label>
            <p>Total: ${calculateTotal()}</p>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <div className="modal-buttons">
              <button
                className="modal-btn"
                onClick={handleReservation}
                disabled={isLoading}
              >
                {isLoading ? "Reservando..." : "Confirmar"}
              </button>
              <button className="modal-btn cancel" onClick={closeModal}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      <AnimatePresence>
        {isAnimating && (
          <motion.div
            className="full-viewport"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              visible: { x: "100vw", opacity: 1, transition: { duration: 0.8 } },
              exit: { x: "100vw", opacity: 1, transition: { duration: 0.6 } },
            }}
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
