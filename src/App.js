
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./App.css";
import LandingPage from "./components/Sections/LandingPage/LandingPage";
import Hoteles from "./components/Sections/Hoteles/Hoteles";
import Vuelos from "./components/Sections/Vuelos/Vuelos";
import Transportes from "./components/Sections/Transportes/Transportes";
import Restaurantes from "./components/Sections/Restaurantes/Restaurantes";
import CVSection from "./components/Sections/CVSection/CVSection";
import CheckoutForm from "./components/Pages/Carrito/CheckoutForm";

const App = () => {
  const [showRegistro, setShowRegistro] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              showRegistro={showRegistro}
              setShowRegistro={setShowRegistro}
              showLogin={showLogin}
              setShowLogin={setShowLogin}
            />
          }
        />
        <Route path="/hoteles" element={< Hoteles />} />
        <Route path="/vuelos" element={< Vuelos />} />
        <Route path="/transportes" element={< Transportes/>}/>    
        <Route path="/restaurantes" element={< Restaurantes/>}/>
        <Route path="/CVSection" element={< CVSection/>}/>
        <Route path="/CheckoutForm" 
        element={< CheckoutForm 
              showCheckoutForm={showCheckoutForm}
              setShowCheckoutForm={setShowCheckoutForm}/>}/>

      </Routes>
    </Router>
    
  );
};

export default App;
