import React from "react";
import Hero from "./images/image-hero-mobile.png";
import "./css/Header.css";
import databiz from "./images/client-databiz.svg";
import audiophile from "./images/client-audiophile.svg";
import meet from "./images/client-meet.svg";
import maker from "./images/client-maker.svg";

export default function Header() {
    return (
        <div className="header">
            <img src={Hero} alt="hero with guy holding laptop" className="hero"/>
        
        <div className="copy"> 
            <h1>Make remote work</h1>
                <p>
                Get your team in sync, no matter your location. Streamline processes, 
                create team rituals, and watch productivity soar.
                </p>

                <button>Learn more</button>

        </div>
         

            <div className="clients">
                <img src={databiz} alt="databiz logo"/>
                <img src={audiophile} alt="audiophile logo"/>
                <img src={meet} alt="meet logo"/>
                <img src={maker} alt="maker logo"/>
            </div>


        </div>
    )
}