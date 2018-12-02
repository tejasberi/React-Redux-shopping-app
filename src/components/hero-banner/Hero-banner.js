import React from 'react';
import './Hero-banner.css';

const HeroBanner = () => {

    return (
        <div className="hero-banner row">
            <div className="col-3 left-banner"></div>
            <div className="text col-6 ">
                <h1>Plates</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus.</p>
            </div>
            <div className="col-3 right-banner"></div>
        </div>
    );

}

export default HeroBanner;
