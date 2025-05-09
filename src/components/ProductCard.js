import React from "react";
import { motion } from "framer-motion";
import "./ProductCard.css";

const ProductCard = ({ title, description, image }) => {
  return (
    <motion.div 
      className="product-card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
};

export default ProductCard;
