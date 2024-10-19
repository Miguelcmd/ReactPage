// Logo.js
import React from 'react';
import './Logo.css';

const Logo = () => {
    const text = '-kciKepeP-Technologies'.split(''); // Divide las letras en un array
    const radius = 80; // Radio del círculo
    const letterSpacing = 360 / text.length; // Separación angular entre letras

    return (
        <div className="circle-container">
            {text.map((letter, index) => {
                const angle = index * letterSpacing; // Calcula el ángulo de cada letra
                const x = radius * Math.cos((angle * Math.PI) / 180); // Coordenada X
                const y = radius * Math.sin((angle * Math.PI) / 180); // Coordenada Y

                return (
                    <span
                        key={index}
                        className="text"
                        style={{
                            transform: `translate(${x}px, ${y}px) rotate(${360}deg)`,
                        }}
                    >
                        {letter}
                    </span>
                );
            })}
        </div>
    );
};

export default Logo;
