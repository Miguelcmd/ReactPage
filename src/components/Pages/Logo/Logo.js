import React, { useEffect, useState } from 'react';
import './Logo.css';

const Logo = () => {
    const text = '-PepeKick-Technologies'.split('');
    const radius = 83; // Radio del círculo
    const letterSpacing = 360 / text.length; // Separación angular entre letras

    // State para controlar la rotación
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(prev => prev + 1); // Incrementa la rotación
        }, 60); // Velocidad de rotación

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="circle-container">            
            <img src='/logo.png' alt="Logo central" className="center-logo" />
            
            <div className="text-container" style={{ transform: `rotate(${rotation}deg)` }}>
                {text.map((letter, index) => {
                    const angle = index * letterSpacing; // Calcula el ángulo para la letra
                    const x = radius * Math.cos((angle * Math.PI) / 180); // Calcula la posición x
                    const y = radius * Math.sin((angle * Math.PI) / 180); // Calcula la posición y

                    return (
                        <span
                            key={index}
                            className="text"
                            style={{
                                transform: `translate(${x}px, ${y}px) rotate(${angle + 90}deg)`, // Mantiene la posición de las letras
                                position: 'absolute',
                                left: '50%', // Centra la posición horizontalmente
                                top: '50%',  // Centra la posición verticalmente
                                transformOrigin: '0 0', // El origen de la transformación se establece en la esquina superior izquierda
                            }}
                        >
                            {letter}
                        </span>
                    );
                })}
            </div>
        </div>
    );
};

export default Logo;
