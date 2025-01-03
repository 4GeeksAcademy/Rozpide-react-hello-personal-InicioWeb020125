

import React, { useState } from "react";
import SaberNosotros from "./SaberNosotros";

const OtroNavbar = ()=>{
    const [opened, setOpened]= useState(true);
    
    return opened?(
        
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'aqua', marginTop: '60px' }}>
            <div className="container-fluid">
                <button className="navbar-brand" href="#" onClick={() => setOpened(false)}><img src="src/img/imagen NTTN.jpeg" alt="Logo de NTTN" width="50" height="50" className="d-inline-block align-top" />
                </button>
                
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: '#d3d3d3' }}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: '#d3d3d3' }}>Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: '#d3d3d3' }}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    ): (
        <button type="button" onClick={() => setOpened(true)}>
          <SaberNosotros/>
        </button>
      );
                
}
export default OtroNavbar;
/*import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'src/img/imagen NTTN.jpeg'; // Asegúrate de tener la imagen en esta ruta

const OtroNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'aqua', marginTop: '60px' }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/saber-nosotros">
                    <img src={logo} alt="Logo de NTTN" width="50" height="50" className="d-inline-block align-top" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: '#d3d3d3' }}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: '#d3d3d3' }}>Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: '#d3d3d3' }}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default OtroNavbar;*/
