// src/js/componentes/SaberNosotros.jsx

import React from "react";


const SaberNosotros = ({ volverAlNavbar }) => {
    return (
        <div className="container mt-5">
            <h1>Saber Nosotros</h1>
            <p>Esta es la sección donde hablamos sobre nosotros.</p>
            <button className="btn btn-primary" onClick={volverAlNavbar}>Volver al Navbar</button>
        </div>
    );
};

export default SaberNosotros;
