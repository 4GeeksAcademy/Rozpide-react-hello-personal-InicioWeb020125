import React from "react";

const MyHome = ({ volverAlNavbar }) => {
    return (
        <div className="container mt-5">
            <h1>MyHome</h1>
            <p>Este es el componente de MyHome.</p>
            <button className="btn btn-primary" onClick={volverAlNavbar}>Volver al Navbar</button>
        </div>
    );
};

export default MyHome;