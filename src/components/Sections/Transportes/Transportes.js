import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import LogoB from "../../Pages/LogoB/LogoB";
import "./Transportes.css";

const transitionEffect = {
    visible: { x: "100vw", opacity: 1, transition: { duration: 0.8 } },
    exit: { x: "100vw", opacity: 1, transition: { duration: 0.5, delay: 0.8 } },
  };

  const mapContainerStyle = {
    width: "70vw",  // 90% del ancho de la ventana
    maxWidth: "400px",
    height: "50vh",  // 50% de la altura de la ventana
    maxHeight: "200px",
  };
  
const center = { lat: 4.711, lng: -74.0721 }; // Ubicación central (Bogotá)

const Transporte = () => {
    const [isAnimating, setIsAnimating] = useState(false);

  
    useEffect(() => {
        setIsAnimating(true);
      }, []);

    const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // API Key de Google mapas
  });

  const [transporte, setTransporte] = useState("taxi");
  const [recogida, setRecogida] = useState("");
  const [destino, setDestino] = useState("");
  const [markers, setMarkers] = useState([]);

  const handleTransporteChange = (event) => {
    setTransporte(event.target.value);
  };

  const handleMapClick = (event) => {
    if (markers.length < 2) {
      setMarkers((current) => [
        ...current,
        {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
          time: new Date(),
        },
      ]);
    } else {
      setMarkers([
        { lat: event.latLng.lat(), lng: event.latLng.lng(), time: new Date() },
      ]);
    }
  };

  if (!isLoaded) return <div><logo /></div>;

  return (
    
    <>
    
    <div className="transporte-section">
    
      <h1>Elige tu Transporte</h1>
      
      <div className="transporte-options">
        <label>
          Tipo de Transporte:
          <select value={transporte} onChange={handleTransporteChange}>
            <option value="taxi">Taxi</option>
            <option value="moto">Moto</option>
            <option value="carro">Carro</option>
          </select>
        </label>

        <label>
          Lugar de Recogida:
          <input
            type="text"
            value={recogida}
            onChange={(e) => setRecogida(e.target.value)}
            placeholder="Introduce el lugar de recogida"
          />
        </label>

        <label>
          Destino:
          <input
            type="text"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            placeholder="Introduce el destino"
          />
        </label>
        
      </div>
       
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}        
        onClick={handleMapClick}               
      >
        
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
            label={index === 0 ? "Recogida" : "Destino"}
          />
        ))}

      </GoogleMap>

      <button className="transporte-btn">Confirmar Transporte</button>

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

export default Transporte;
