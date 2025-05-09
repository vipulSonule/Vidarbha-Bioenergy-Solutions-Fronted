import React from "react";
import "./Home.css";
import biomassImage from "../assets/first_v.jpg";  // Hero image
import factoryImage from "../assets/third_v.jpg";     // Factory Image
import processImage from "../assets/biomass-1.png";    // Manufacturing Process Image
import sustainabilityImage from "../assets/bio-3.jpg"; // Sustainability Image
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="home-content">
          <h1 className="title">
            Welcome to <span className="highlight">Vidarbha Bioenergy Solutions</span>
          </h1>
          <p className="description">
            We specialize in the production of <b>premium biomass pellets</b>, offering sustainable energy solutions to power a cleaner future. Our mission is to innovate and provide eco-friendly alternatives to conventional fuels, reducing carbon footprints for a better tomorrow.
          </p>
          <button className="cta-button">Learn More</button>
        </div>
        <div className="home-image">
          <img src={biomassImage} alt="Biomass Pellets" className="hero-img" />
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="text-container">
          <h2>Who We Are</h2>
          <p>
          Vidarbha Bioenergy Solutions is dedicated to creating sustainable and renewable energy sources through biomass technology. With years of expertise in the field, we have developed high-quality biomass pellets that deliver superior performance and efficiency.
          </p>
        </div>
        <div className="image-container">
          <img src={factoryImage} alt="Biomass Factory" className="factory-img" />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="info-section">
        <div className="text-container">
          <h2>Why Choose Our Biomass Pellets?</h2>
          <ul className="benefits-list">
            <li>✔️ <b>Sustainability:</b> Made from <b>100% organic waste</b>, reducing landfill waste and promoting clean energy.</li>
            <li>🔥 <b>High Efficiency:</b> Superior heat output with <b>low emissions</b>, ideal for industrial and residential use.</li>
            <li>🌿 <b>Eco-Friendly:</b> Carbon-neutral fuel, contributing to a <b>greener planet</b>.</li>
            <li>💰 <b>Cost-Effective:</b> Affordable and reliable fuel source with <b>minimal maintenance costs</b>.</li>
          </ul>
        </div>
        <div className="image-container">
          <img src={sustainabilityImage} alt="Sustainability" className="sustainability-img" />
        </div>
      </div>

      {/* Manufacturing Process Section */}
      <div className="process-section">
        <h2>Our Manufacturing Process</h2>
        <div className="process-content">
          <div className="process-text">
            <p>
              Our biomass pellets are manufactured using state-of-the-art technology, ensuring <b>high energy efficiency</b> and <b>eco-friendly</b> production processes. We source raw materials responsibly and adhere to stringent quality control measures.
            </p>
          </div>
          <div className="image-container">
            <img src={processImage} alt="Manufacturing Process" className="process-img" />
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <h2>Ready to Make the Switch?</h2>
        <p>Join us in promoting sustainable energy solutions. Contact us today to learn more about our biomass pellets and how they can benefit you.</p>
        <Link to="/contact" className="cta-button">Get in Touch</Link>
      </div>
    </div>
  );
};

export default Home;
