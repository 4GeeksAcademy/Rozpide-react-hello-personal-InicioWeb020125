import React from "react";
import OtroNavbar from "./OtroNavbar";

const Jumbotron = () => {
    return (
        <>
            
            <div className="card mb-3 mt-5" style={{ backgroundColor: '#fff0f0', height: 'auto', width: '97.5%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0', padding: '20px',marginLeft:'13px' }}>
                <div className="card-body" style={{ textAlign: 'left' }}>
                    <OtroNavbar />
                    <h1 className="card-title" style={{ fontSize: '4rem', fontWeight: '300'}} ><strong>A Warm Welcome!</strong></h1>
                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta quo at voluptates maxime provident, voluptatum id, rem, eveniet eius labore illo ipsam. Cupiditate ipsa, odit ipsam eum impedit dicta excepturi assumenda harum quos fugit deserunt.</p>
                    <a href="#" className="btn btn-primary">Call to action!</a>
                </div>
            </div>
        </>
    );
}

export default Jumbotron;
