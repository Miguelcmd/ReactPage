import React from "react";
import Menu from "../../Menu";
import Tarjeta from "../../Tarjeta";
import Title from "../../Title";
import Registro from "../../Pages/Registro/Registro";
import Logo from "../../Pages/Logo/Logo";
import Login from "../../Pages/Login/Login";

const LandingPage = ({ showRegistro, setShowRegistro, showLogin, setShowLogin }) => {
    const tarjetas = [
      { title: "Título 1", description: "Descripción breve de la tarjeta 1.", imageUrl: "https://via.placeholder.com/270x160" },
      { title: "Título 2", description: "Descripción breve de la tarjeta 2.", imageUrl: "https://via.placeholder.com/270x160" },
      { title: "Título 3", description: "Descripción breve de la tarjeta 3.", imageUrl: "https://via.placeholder.com/270x160" },
      { title: "Título 4", description: "Descripción breve de la tarjeta 4.", imageUrl: "https://via.placeholder.com/270x160" },
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
  
  export default LandingPage;