import React, { useState } from "react";
import "./ServicesPage.css";
import { FaTools, FaShippingFast, FaGlobe, FaChartLine, FaIndustry, FaUsers, FaHandshake } from "react-icons/fa";

const services = [
  {
    title: "Biomass Pallets Plant Consultancy",
    description: `We provide expert consultancy for setting up biomass pellet manufacturing units — from concept to commissioning.`,
    bullets: [
      "Project feasibility study",
      "Government licensing & subsidy guidance",
      "Machinery selection & procurement",
      "Plant layout & engineering support",
      "Raw material sourcing strategy"
    ],
    icon: <FaIndustry />
  },
  {
    title: "Plant Installation & Commissioning",
    description: "We take care of complete plant setup with reliable machinery, skilled installation, and timely delivery.",
    icon: <FaTools />
  },
  {
    title: "Plant Operation & Staff Training",
    description: "We provide on-site and remote support for operations. Our training ensures your team can manage the plant efficiently with quality output.",
    icon: <FaUsers />
  },
  {
    title: "Market Linkage & Domestic Sales Support",
    description: "We help connect you with biomass pellet buyers across India through our established sales channels and partnerships.",
    icon: <FaHandshake />
  },
  {
    title: "Biomass Pellets Export",
    description: "We assist biomass producers in exporting their pellets globally.",
    bullets: [
      "International buyer connection",
      "Export documentation & compliance",
      "Freight, logistics & customs",
      "Quality certification and packaging"
    ],
    icon: <FaGlobe />
  },
  {
    title: "Trading of Biomass Pellets & Raw Materials",
    description: "We buy and sell high-quality biomass pellets and raw materials such as sawdust, agri waste, wood chips, husk & more. Competitive pricing and consistent supply.",
    icon: <FaShippingFast />
  },
  {
    title: "Business Growth & Branding Support",
    description: "Grow your green energy business with our support in brand development, digital presence, and marketing strategies.",
    icon: <FaChartLine />
  }
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(null);

  const handleOpen = (service) => {
    setActiveService(service);
  };

  const handleClose = () => {
    setActiveService(null);
  };

  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            onClick={() => handleOpen(service)}
          >
            <div className="service-icon">{service.icon}</div>
            <h2 className="service-title">{service.title}</h2>
          </div>
        ))}
      </div>

      {activeService && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleClose}>&times;</button>
            <h2 className="modal-title">{activeService.title}</h2>
            <p className="modal-description">{activeService.description}</p>
            {activeService.bullets && (
              <ul className="modal-bullets">
                {activeService.bullets.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}