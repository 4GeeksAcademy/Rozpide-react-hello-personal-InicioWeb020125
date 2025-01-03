// src/js/componentes/Contact.jsx

import React from "react";

const Contact = ({ volverAlNavbar }) => {
    return (
        <div className="container mt-5">
            <h1>Contact</h1>
            <p>Este es el componente de Contact.</p>
            <button className="btn btn-primary" onClick={volverAlNavbar}>Volver al Navbar</button>
        </div>
    );
};

export default Contact;
