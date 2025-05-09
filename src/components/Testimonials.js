import React from "react";
import { motion } from "framer-motion";
import "./Testimonials.css";

const testimonials = [
  { name: "John Doe", feedback: "Amazing biomass products!" },
  { name: "Jane Smith", feedback: "Great quality and customer service." },
  { name: "Michael Johnson", feedback: "Highly recommended for renewable energy." }
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index} 
            className="testimonial-card"
            whileHover={{ scale: 1.05 }}
          >
            <p>"{testimonial.feedback}"</p>
            <h4>- {testimonial.name}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
