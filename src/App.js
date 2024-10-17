
import React, { useState } from 'react';
import './App.css';  // Estilos generales, como el logo y otros
import './styles.css'; // Estilos específicos para las tarjetas
import Tarjeta from './components/Tarjeta';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const tarjetas = [
    {
      title: "Título 1",
      description: "Descripción breve de la tarjeta 1.",
      imageUrl: "https://via.placeholder.com/270x160"
    },
    {
      title: "Título 2",
      description: "Descripción breve de la tarjeta 2.",
      imageUrl: "https://via.placeholder.com/270x160"
    },
    {
      title: "Título 3",
      description: "Descripción breve de la tarjeta 3.",
      imageUrl: "https://via.placeholder.com/270x160"
    },
    {
      title: "Título 4",
      description: "Descripción breve de la tarjeta 4.",
      imageUrl: "https://via.placeholder.com/270x160"
    },
  ];

    return (
      <div className="app-container">        
        <header>
          <nav>            
            <ul className={`menu ${menuOpen ? 'active' : ''}`}>
              <li><a href="#">Registro</a></li>
              <li><a href="#">Inicio de Sesión</a></li>
              <li><a href="#">Carrito</a></li>
            </ul>
          </nav>
          
          <div className="App-header">
            <p>Reservas.com</p>            
          </div>
        </header>
  
        {/* Tarjetas */}
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
    );
  };
  
  export default App;
