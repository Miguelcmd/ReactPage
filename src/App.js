import React, { useState } from "react";
import "./App.css"; // Estilos generales
import Menu from "./components/Menu";
import Tarjeta from "./components/Tarjeta";
import Title from "./components/Title";
import Registro from "./components/pages/Registro/app"; // Importación del componente Registro

const App = () => {
  // Estado para controlar si la página de registro está visible
  const [showRegistro, setShowRegistro] = useState(false);

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
    <div className="app-container">
      <header>
        {/* Pasamos setShowRegistro como prop al menú para que se muestre el registro cuando se haga clic */}
        <Menu setShowRegistro={setShowRegistro} />
        <Title />
        <div className="App-header"></div>
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
      {showRegistro && <Registro />}
    </div>
  );
};

export default App;
