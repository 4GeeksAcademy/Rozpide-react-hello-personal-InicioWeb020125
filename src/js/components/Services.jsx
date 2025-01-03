// src/js/componentes/Services.jsx

import React from "react";

const Services = ({ volverAlNavbar }) => {
    return (
        <div className="container mt-5">
            <h1>Services</h1>
            <p>Este es el componente de Services.</p>
            <button className="btn btn-primary" onClick={volverAlNavbar}>Volver al Navbar</button>
        </div>
    );
};

export default Services;
