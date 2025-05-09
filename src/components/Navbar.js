import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo_v3.png";

function Navbar({ onNavClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    if (onNavClick) onNavClick();
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={handleLinkClick} className="logo-link">
          <img src={logo} alt="Company Logo" className="logo-img" />
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>

      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={handleLinkClick} className="nav-link">Home</Link></li>
        <li><Link to="/about" onClick={handleLinkClick} className="nav-link">About</Link></li>
        <li><Link to="/product" onClick={handleLinkClick} className="nav-link">Product</Link></li>
        <li><Link to="/blogs" onClick={handleLinkClick} className="nav-link">Blogs</Link></li>
        <li><Link to="/contact" onClick={handleLinkClick} className="nav-link">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
