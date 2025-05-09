import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>VIDHERBHA BIOENERGY SOLUTIONS</h2>
        <p>Your trusted partner in renewable energy solutions.</p>
        <p>Contact us: <a href="mailto:vidarbhabioenergysolutions@gmail.com
">vidarbhabioenergysolutions@gmail.com
</a> | +1 (234) 567-8901</p>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
        <p>© 2025 VIDARBHA BIOENERGY SOLUTIONS PRIVATE LIMITED</p>
      </div>
    </footer>
  );
};

export default Footer;
