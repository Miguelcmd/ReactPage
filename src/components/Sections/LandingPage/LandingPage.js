import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../../Menu";
import Tarjeta from "../../Tarjeta";
import Title from "../../Title";
import Registro from "../../Pages/Registro/Registro";
import Logo from "../../Pages/Logo/Logo";
import Login from "../../Pages/Login/Login";
import "../../Tarjeta.css"

const LandingPage = ({ showRegistro, setShowRegistro, showLogin, setShowLogin }) => {
  const navigate = useNavigate();  // Definir navigate para la navegación
  const [isAnimating, setIsAnimating] = useState(false);  // Estado para la animación

  const tarjetas = [
    { title: "Título 1", description: "Descripción breve de la tarjeta 1.", imageUrl: "https://via.placeholder.com/270x160", route: "/hoteles" },
    { title: "Título 2", description: "Descripción breve de la tarjeta 2.", imageUrl: "https://via.placeholder.com/270x160" },
    { title: "Título 3", description: "Descripción breve de la tarjeta 3.", imageUrl: "https://via.placeholder.com/270x160" },
    { title: "Título 4", description: "Descripción breve de la tarjeta 4.", imageUrl: "https://via.placeholder.com/270x160" },
  ];

  const handleClick = (route) => {
    if (route) {
      navigate(route);  // Navegar a la ruta pasada como prop
    } else {
      setIsAnimating(true);  // O activar animación si no hay ruta
    }
  };

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
              route={tarjeta.route}  // Pasar la ruta al componente Tarjeta
              onClick={() => handleClick(tarjeta.route)}  // Pasar función de click
            />
          ))}
        </div>
      </div>
      {showRegistro && <Registro setShowRegistro={setShowRegistro} />}
      {showLogin && <Login setShowLogin={setShowLogin} />}
    </div>
  );
};

export default LandingPage;
