import React, { useState } from "react";
import SaberNosotros from "./SaberNosotros";
import User from "./User";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

const OtroNavbar = () => {
    const [component, setComponent] = useState("navbar");

    const volverAlNavbar = () => {
        setComponent("navbar");
    };

    return component === "navbar" ? (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'aqua', marginTop: '60px' }}>
            <div className="container-fluid">
                <button className="navbar-brand" href="#" onClick={() => setComponent("saberNosotros")}>
                    <img src="src/img/imagen NTTN.jpeg" alt="Logo de NTTN" width="60" height="60" className="d-inline-block align-top" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#" onClick={() => setComponent("user")}>User</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: '#d3d3d3' }} onClick={() => setComponent("about")}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: '#d3d3d3' }} onClick={() => setComponent("services")}>Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: '#d3d3d3' }} onClick={() => setComponent("contact")}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    ) : component === "saberNosotros" ? (
        <SaberNosotros volverAlNavbar={volverAlNavbar} />
    ) : component === "user" ? (
        <User volverAlNavbar={volverAlNavbar} />
    ) : component === "about" ? (
        <About volverAlNavbar={volverAlNavbar} />
    ) : component === "services" ? (
        <Services volverAlNavbar={volverAlNavbar} />
    ) : (
        <Contact volverAlNavbar={volverAlNavbar} />
    );
};

export default OtroNavbar;


