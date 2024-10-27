import React from 'react';
import './CVSection.css';

const CVSection = () => {
  return (
    <div className="cv-container">
      {/* Header with name and title */}
      <header className="cv-header">
        <div className="header-left">
          <h1>Miguel Angel Gonzalez</h1>
          <h2>Almacenista y Técnico en Desarrollo y Despliegue de Servicios en la Nube</h2>
        </div>
        <div className="header-right">
          <p>Email: miguelangel-0921@live.com</p>
          <p>Tel: 3215680415</p>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="cv-section">
        <h3>Perfil Profesional</h3>
        <p>
          Experiencia sólida en la planificación, organización y dirección de operaciones de almacén. Conocimiento en el manejo y configuración de equipos de iluminación profesional para medios audiovisuales, incluyendo el protocolo DMX512. Competencias en análisis y diseño de soluciones, manejo de bases de datos y despliegue de aplicaciones en la nube.
        </p>
      </section>

      {/* Experience Section */}
      <section className="cv-section">
        <h3>Experiencia Laboral</h3>
        <div className="cv-item">
          <h4>Nombre de la Empresa</h4>
          <p><strong>Rol:</strong> Almacenista</p>
          <p><strong>Duración:</strong> Enero 2020 - Presente</p>
          <p>Responsabilidades y logros:</p>
          <ul>
            <li>Organización y gestión de inventarios.</li>
            <li>Planificación de operaciones de almacenamiento y distribución.</li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section className="cv-section">
        <h3>Formación Académica</h3>
        <div className="cv-item">
          <h4>Título del Grado o Certificación</h4>
          <p><strong>Institución:</strong> Nombre de la Institución</p>
          <p><strong>Año:</strong> 2018</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="cv-section">
        <h3>Habilidades</h3>
        <ul>
          <li>Gestión de almacenes</li>
          <li>Manejo de inventarios</li>
          <li>Protocolo DMX512</li>
          <li>Despliegue en la nube</li>
        </ul>
      </section>
    </div>
  );
};

export default CVSection;
