import React from "react";
import "./Footer.css";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaRegNewspaper // used for Substack
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>VIDARBHA BIOENERGY SOLUTIONS</h2>
        <p>Your trusted partner in renewable energy solutions.</p>
        <p>Contact us: <a href="mailto:vidarbhabioenergysolutions@gmail.com">vidarbhabioenergysolutions@gmail.com</a></p>

        <div className="social-media">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/company/vidarbha-bioenergy-solutions-pvt-ltd/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/vidarbhabioenergysolutions4?igsh=enQ1N2ViaGdtcDJj" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://youtube.com/@vidarbhabioenergysolutionspvtl?si=mNrtRfi264UYG_C3" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://vidarbhabioenergysolutions.substack.com/" target="_blank" rel="noopener noreferrer">
            <FaRegNewspaper />
          </a>
        </div>

        <p>© 2025 VIDARBHA BIOENERGY SOLUTIONS PRIVATE LIMITED</p>
      </div>
    </footer>
  );
};

export default Footer;
