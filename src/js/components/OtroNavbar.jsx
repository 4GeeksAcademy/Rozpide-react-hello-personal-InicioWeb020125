import React from 'react'


const OtroNavbar = ()=>{

    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'aqua', marginTop: '60px' }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                <img src="src/img/imagen NTTN.jpeg" alt="Logo de NTTN" width="30" height="30" className="d-inline-block align-top" />
                </a>
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
export default OtroNavbar;