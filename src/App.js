
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
import { userData } from "three/webgpu";
import Login from "./components/Pages/Login/Login";

const App = () => {
  const [showRegistro, setShowRegistro] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [ user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setShowLogin(false);
    user={user}
  }

  
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
              user={user}
            />
          }
        />
        <Route path="/hoteles" element={< Hoteles />} />
        <Route path="/vuelos" element={< Vuelos />} />
        <Route path="/transportes" element={< Transportes/>}/>    
        <Route path="/restaurantes" element={< Restaurantes/>}/>
        <Route path="/CVSection" element={< CVSection/>}/>
        <Route path="/CheckoutForm" element={< CheckoutForm/>}/>
      </Routes>
    </Router>
    
  );
};

export default App;
