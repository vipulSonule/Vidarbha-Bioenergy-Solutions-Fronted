import React from "react";
import "./About.css";
import missionImage from "../assets/over-mission.jpg";   // Image for mission
import visionImage from "../assets/over-vision.jpg";     // Image for vision
import strengthImage from "../assets/over-strenght.jpeg" 
const About = () => {
  return (
    <div className="about-container">

      {/* Section: Our Mission */}
      <div className="section mission-section">
        <div className="section-image">
          <img src={missionImage} alt="Our Mission" />
        </div>
        <div className="section-text">
          <h2>Our Mission</h2>
          <p>
            Our mission at <b>VIDARBHA BIOENERGY SOLUTIONS PRIVATE LIMITED</b> 
            is to promote sustainable and eco-friendly energy solutions by manufacturing 
            high-quality biomass pellets. We aim to reduce carbon footprints 
            and contribute to a greener environment by replacing fossil fuels with renewable energy sources.
          </p>
        </div>
      </div>

      {/* Section: Our Vision */}
      <div className="section vision-section">
        <div className="section-text">
          <h2>Our Vision</h2>
          <p>
            We envision a future where renewable energy drives global sustainability. 
            Our goal is to become a leader in biomass pellet production, 
            setting industry standards for quality, reliability, and environmental responsibility.
          </p>
        </div>
        <div className="section-image">
          <img src={visionImage} alt="Our Vision" />
        </div>
      </div>

      {/* Section: Our Strength */}
      <div className="section strength-section">
        <div className="section-image">
          <img src={strengthImage} alt="Our Strength" />
        </div>
        <div className="section-text">
          <h2>Our Strength</h2>
          <p>
            Our strength lies in our commitment to innovation, efficiency, and sustainability. 
            With a team of skilled professionals, state-of-the-art technology, 
            and a focus on customer satisfaction, we continue to drive growth and promote clean energy solutions.
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;