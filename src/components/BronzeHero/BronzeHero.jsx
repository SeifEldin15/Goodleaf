import React from "react";
import "./Hero.css";

const BronzeHero = () => {
  return (
    <div className="bronze-hero">
        <div className="w-full h-full bg-black/20 absolute top-0 left-0"></div>
      <div className="bronze-hero-content">
        <h1 className="bronze-hero-title" style={{color: '#CE8946'}}>BRONZE VPS</h1>
        <h2 className="bronze-hero-subtitle">SERVERS</h2>
        <p className="bronze-hero-description">
          Get the best performance and security for your business with our dedicated servers.
          <br /> 
          
          Customized plans are available upon contacting our team.
        </p>
        
        <div className="bronze-hero-locations">
          <button className="location-btn">
            <span className="flag">🇺🇸</span> United States 91ms <span className="refresh-icon">↻</span>
          </button>
          <button className="location-btn">
            <span className="flag">🇸🇬</span> Singapore 91ms <span className="refresh-icon">↻</span>
          </button>
          <button className="location-btn">
            <span className="flag">🇸🇬</span> Singapore 91ms <span className="refresh-icon">↻</span>
          </button>
          <button className="location-btn">
            <span className="flag">🇸🇬</span> Singapore 91ms <span className="refresh-icon">↻</span>
          </button>
          <button className="location-btn">
            <span className="flag">🇸🇬</span> Singapore 91ms <span className="refresh-icon">↻</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BronzeHero;

