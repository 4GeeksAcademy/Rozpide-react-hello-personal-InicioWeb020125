// src/js/componentes/User.jsx

import React from "react";

const User = ({ volverAlNavbar }) => {
    return (
        <div className="container mt-5">
            <h1>User</h1>
            <p>Este es el componente de User.</p>
            <button className="btn btn-primary" onClick={volverAlNavbar}>Volver al Navbar</button>
        </div>
    );
};

export default User;
