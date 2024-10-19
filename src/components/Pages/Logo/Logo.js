import React from 'react';
import './Logo.css';

const Logo = () => {
    const text = '-PepeKickAss-Technologies'.split('');
    const radius = 80; // Radio del círculo
    const letterSpacing = 360 / text.length; // Separación angular entre letras

    return (
        <div className="circle-container">
            {/* Imagen SVG o PNG en el centro del círculo */}
            <img src='/logo.png' alt="Logo central" className="center-logo" />
            
            <div className="text-container">
                {text.map((letter, index) => {
                    const angle = index * letterSpacing; // Calcula el ángulo para la letra
                    const x = radius * Math.cos((angle * Math.PI) / 180); // Calcula la posición x
                    const y = radius * Math.sin((angle * Math.PI) / 180); // Calcula la posición y

                    return (
                        <span
                            key={index}
                            className="text"
                            style={{
                                transform: `translate(${x}px, ${y}px) rotate(${angle + 90}deg)`, // Ajusta el ángulo de rotación
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
