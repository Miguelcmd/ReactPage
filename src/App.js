import React, { useState } from 'react';
import './App.css';  
import Menu from './components/Menu';
import Tarjeta from './components/Tarjeta';
import Title from './components/Title';
import Registro from './components/Pages/Registro/Registro';
import Logo from './components/Pages/Logo/Logo'

const App = () => {
  const [showRegistro, setShowRegistro] = useState(false);

  const tarjetas = [
    { title: "Título 1", description: "Descripción breve de la tarjeta 1.", imageUrl: "https://via.placeholder.com/270x160" },
    { title: "Título 2", description: "Descripción breve de la tarjeta 2.", imageUrl: "https://via.placeholder.com/270x160" },
    { title: "Título 3", description: "Descripción breve de la tarjeta 3.", imageUrl: "https://via.placeholder.com/270x160" },
    { title: "Título 4", description: "Descripción breve de la tarjeta 4.", imageUrl: "https://via.placeholder.com/270x160" }
  ];

  return (
    <div className="app-container">        
      <header>
        <Menu setShowRegistro={setShowRegistro} />
        {showRegistro && <Registro />}
        <Title />
        <Registro showRegistro={showRegistro} setShowRegistro={setShowRegistro} />
        <Logo/>
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
  );
}

export default App;
