import React from "react";
import graduateLogo from "../assets/images/icon-graduate.png";

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="flex-container">
        <div className="hero-image">
          <img src={graduateLogo} alt="Logo" className="graduateLogo" />
        </div>
        <div className="hero-header">
          <h1>Sea Scholarship Indonesia 2019</h1>
          <p>
            Sea Scholarship is scholarship program given by sea group to support
            bright students from technology and data related background. The
            objective of this scholarship is to help Indonesia's advancement in
            technology field.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
