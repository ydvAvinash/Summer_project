import React from "react";

import "./Banner.scss";


const Banner = ({title, description, image,width}) => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>{title}</h1>
                    <p>
                       {description}
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={image} width={width}/>
            </div>
        </div>
    );
};

export default Banner;