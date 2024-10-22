import React, { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Tarjeta from "./components/Tarjeta";
import Title from "./components/Title";
import Registro from "./components/Pages/Registro/Registro";
import Logo from "./components/Pages/Logo/Logo";
import Login from "./components/Pages/Login/Login";
import LogoB from "./components/Pages/LogoB/LogoB";

const App = () => {
  const [showRegistro, setShowRegistro] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const tarjetas = [
    {
      title: "Título 1",
      description: "Descripción breve de la tarjeta 1.",
      imageUrl: "https://via.placeholder.com/270x160",
    },
    {
      title: "Título 2",
      description: "Descripción breve de la tarjeta 2.",
      imageUrl: "https://via.placeholder.com/270x160",
    },
    {
      title: "Título 3",
      description: "Descripción breve de la tarjeta 3.",
      imageUrl: "https://via.placeholder.com/270x160",
    },
    {
      title: "Título 4",
      description: "Descripción breve de la tarjeta 4.",
      imageUrl: "https://via.placeholder.com/270x160",
    },
  ];

  return (
    <div className="app-wrapper">
  <div className={`app-content ${showRegistro || showLogin ? 'blur-background' : ''}`}>

        <header>
          <Logo />
          <Menu setShowRegistro={setShowRegistro} setShowLogin={setShowLogin} />
          <Title />
          
        </header>
        <div className="tarjetas-grid">
          {tarjetas.map((tarjeta, index) => (
            <Tarjeta
              key={index}
              title={tarjeta.title}
              description={tarjeta.description}
              imageUrl={tarjeta.imageUrl}
            />
          ))}
        </div>
      </div>

      {showRegistro && <Registro setShowRegistro={setShowRegistro} />}
      {showLogin && <Login setShowLogin={setShowLogin} />}
    </div>
  );
};

export default App;
