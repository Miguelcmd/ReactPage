
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import LandingPage from "./components/Sections/LandingPage/LandingPage";
import Hoteles from "./components/Sections/Hoteles/Hoteles";
import Vuelos from "./components/Sections/Vuelos/Vuelos";
import Transportes from "./components/Sections/Transportes/Transportes";
import Restaurantes from "./components/Sections/Restaurantes/Restaurantes";

const App = () => {
  const [showRegistro, setShowRegistro] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

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
      </Routes>
    </Router>
  );
};

export default App;
