import React from 'react';
import './Tarjeta.css';
const Tarjeta = ({ title, description, imageUrl }) => {
 
    return (
        <div className="card" style={{ width: '18rem', height: '20em' }}>
            <div className='image-container'>
              <img src={imageUrl} className="card-img-top" alt="Imagen de la tarjeta" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <button id="btn-detalle" className="btn btn-outline-dark">Detalle</button>
            </div>
        </div>
    );
};



export default Tarjeta;
