import SaberNosotros from "./SaberNosotros";
import React, {useState} from "react";
import MyHome from "./MyHome";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

const Navbar = () => {
    const [component, setComponent]= useState ('navbar')
    const volverAlNavbar = () =>{
        setComponent('navbar');
    };

    return component === 'navbar'?(
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" onClick={() => setComponent("saberNosotros")}>NaturTopioN</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#"  onClick={() => setComponent("myHome")}>MyHome</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: '#d3d3d3' }}  onClick={() => setComponent("about")}>About</a>
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
        
    </>
    ): component === "saberNosotros" ? (
        <SaberNosotros volverAlNavbar={volverAlNavbar} />
    ) : component === "myHome" ? (
        <MyHome volverAlNavbar={volverAlNavbar} />
    ) : component === "about" ? (
        <About volverAlNavbar={volverAlNavbar} />
    ) : component === "services" ? (
        <Services volverAlNavbar={volverAlNavbar} />
    ) : (
        <Contact volverAlNavbar={volverAlNavbar} />
    );
}

export default Navbar;

