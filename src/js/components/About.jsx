// src/js/componentes/About.jsx

import React from "react";

const About = ({ volverAlNavbar }) => {
    return (
        <div className="container mt-5">
            <h1>About</h1>
            <p>Este es el componente de About.</p>
            <button className="btn btn-primary" onClick={volverAlNavbar}>Volver al Navbar</button>
        </div>
    );
};

export default About;
